import fs from 'fs';
import path from 'path';

const SUITE_SLUG = 'sarvam';
const RAW_DIR = 'llm-benchmarks';
const OUT_DIR = path.join('public', 'data', 'benchmarks', SUITE_SLUG);
const META_DIR = path.join('src', 'data', 'benchmarks', SUITE_SLUG);

const RUN_CONFIGS = [
  { id: 'sarvam-bf16', dir: 'sarvam_cloud_20260614_141508', label: 'Sarvam-30B BF16', shortLabel: 'Sarvam BF16', color: '#f59e0b', tags: ['cloud', 'bf16'] },
  { id: 'qwen-bf16', dir: 'qwen_cloud_20260614_141515', label: 'Qwen3-30B-A3B BF16', shortLabel: 'Qwen BF16', color: '#8b5cf6', tags: ['cloud', 'bf16'] },
  { id: 'sarvam-105b', dir: 'sarvam-105b_cloud_20260614_210900', label: 'Sarvam-105B BF16', shortLabel: 'Sarvam 105B', color: '#ec4899', tags: ['cloud', 'bf16'] },
  { id: 'sarvam-q4', dir: 'sarvam_final', label: 'Sarvam-30B Q4_K_M', shortLabel: 'Sarvam Q4', color: '#10b981', tags: ['local', 'quantized'] },
  { id: 'qwen-q4', dir: 'qwen_final', label: 'Qwen3-30B-A3B Q4_K_M', shortLabel: 'Qwen Q4', color: '#3b82f6', tags: ['local', 'quantized'] }
];

const MULTILINGUAL_TESTS = [1, 2, 21, 25, 26];

const SCRIPT_PATTERNS = {
  'Hindi': /[\u0900-\u097F]/,
  'Marathi': /[\u0900-\u097F]/,
  'Bengali': /[\u0980-\u09FF]/,
  'Tamil': /[\u0B80-\u0BFF]/,
  'Kannada': /[\u0C80-\u0CFF]/,
  'Telugu': /[\u0C00-\u0C7F]/,
  'Malayalam': /[\u0D00-\u0D7F]/,
  'Gujarati': /[\u0A80-\u0AFF]/,
  'Odia': /[\u0B00-\u0B7F]/,
  'Urdu': /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/
};

function getValidationStatus(result) {
  if (!result) return 'na';
  if (result.schema_validation) {
    return result.schema_validation.status === 'SUCCESS' ? 'pass' : 'fail';
  }
  if (result.maze_validation) {
    return result.maze_validation.status === 'SUCCESS' ? 'pass' : 'fail';
  }
  if (result.code_validation) {
    const statuses = [];
    for (const lang of Object.keys(result.code_validation)) {
      const blocks = result.code_validation[lang];
      for (const block of blocks) {
        statuses.push(block.status);
      }
    }
    if (statuses.length === 0) return 'na';
    return statuses.every(s => s === 'SUCCESS') ? 'pass' : 'fail';
  }
  return 'na';
}

function checkScriptCorrectness(testId, label, content) {
  // Test 25 expects Romanized (English-like) characters
  if (testId === 25) return true;
  
  const pattern = SCRIPT_PATTERNS[label];
  if (!pattern) return true; // fallback if no pattern is defined for the language
  
  return pattern.test(content || '');
}

function truncateThinking(thinking) {
  if (!thinking) return { text: '', truncated: false };
  const maxChars = 4000;
  if (thinking.length > maxChars) {
    return {
      text: thinking.substring(0, maxChars) + '\n\n[Thinking trace truncated for readability & performance...]',
      truncated: true
    };
  }
  return { text: thinking, truncated: false };
}

async function main() {
  console.log(`Starting data transform for suite: ${SUITE_SLUG}`);

  // Create directories if they do not exist
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(META_DIR, { recursive: true });

  const metrics = [];
  const testIndex = {};
  const categoriesSet = new Set();

  // Load manifest if it exists, or create a default one
  const manifestPath = path.join(META_DIR, 'manifest.json');
  let manifest = {
    runs: RUN_CONFIGS.map(rc => ({
      id: rc.id,
      label: rc.label,
      shortLabel: rc.shortLabel,
      color: rc.color,
      tags: rc.tags
    })),
    categories: [],
    findings: [
      {
        emoji: '🤖',
        title: 'Identity failure under quantization',
        body: 'Local Q4 Sarvam claims to be "Google Gemini" (Test 32) but BF16 correctly says "Sarvam AI" — an identity failure that is substantially a quantization artifact.'
      },
      {
        emoji: '⚡',
        title: 'Cloud vs Local speeds',
        body: 'Cloud BF16 runs on Modal + vLLM deliver ~270 t/s, while local Q4_K_M runs on llama.cpp range from 5 to 18 t/s. (Note: tests 33-37 in Sarvam local final were run under different conditions).'
      }
    ],
    multilingualTests: MULTILINGUAL_TESTS
  };

  // We will process test files 01 through 37
  const totalTests = 37;

  for (let testId = 1; testId <= totalTests; testId++) {
    const testFileStr = `test_${String(testId).padStart(2, '0')}.json`;
    console.log(`Processing test ${testId}...`);

    let testName = '';
    let testCategory = '';
    let testPrompt = '';

    const testRunsData = {};

    for (const rc of RUN_CONFIGS) {
      const filePath = path.join(RAW_DIR, rc.dir, testFileStr);
      if (!fs.existsSync(filePath)) {
        console.warn(`Warning: File not found: ${filePath}`);
        continue;
      }

      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      testName = fileData.name;
      testCategory = fileData.cat;
      categoriesSet.add(testCategory);

      // Single-prompt tests vs multi-sub-prompt tests
      if (fileData.result) {
        testPrompt = fileData.prompt;
        const res = fileData.result;
        
        const { text: truncatedThink, truncated } = truncateThinking(res.thinking);

        testRunsData[rc.id] = {
          content: res.content,
          thinking: truncatedThink,
          thinkingTruncated: truncated
        };

        metrics.push({
          runId: rc.id,
          testId,
          testName,
          category: testCategory,
          tokens: res.tokens || 0,
          promptTokens: res.prompt_tokens || 0,
          tPerS: res.t_per_s || 0,
          elapsedS: res.elapsed_s || 0,
          finish: res.finish || 'stop',
          runawayThink: res.runaway_think || false,
          validation: getValidationStatus(res)
        });
      } else if (fileData.subs) {
        // Multi-sub-prompt test case
        const subsData = {};
        const subMetrics = [];
        
        // Use the first sub-prompt's prompt for the main prompt field
        testPrompt = fileData.subs[0]?.prompt || '';

        for (const sub of fileData.subs) {
          const { text: truncatedThink, truncated } = truncateThinking(sub.thinking);
          subsData[sub.label] = {
            content: sub.content,
            thinking: truncatedThink,
            thinkingTruncated: truncated
          };

          const scriptOk = checkScriptCorrectness(testId, sub.label, sub.content);
          subMetrics.push({
            label: sub.label,
            scriptOk
          });
        }

        testRunsData[rc.id] = {
          subs: subsData
        };

        // Compute average speed and validation for multi-sub-prompt tests
        let totalTokens = 0;
        let totalPromptTokens = 0;
        let totalElapsedS = 0;
        let totalTPerSSum = 0;
        let count = 0;

        for (const sub of fileData.subs) {
          totalTokens += sub.tokens || 0;
          totalPromptTokens += sub.prompt_tokens || 0;
          totalElapsedS += sub.elapsed_s || 0;
          totalTPerSSum += sub.t_per_s || 0;
          count++;
        }

        metrics.push({
          runId: rc.id,
          testId,
          testName,
          category: testCategory,
          tokens: totalTokens,
          promptTokens: totalPromptTokens,
          tPerS: count > 0 ? Number((totalTPerSSum / count).toFixed(2)) : 0,
          elapsedS: Number(totalElapsedS.toFixed(2)),
          finish: 'stop',
          runawayThink: false,
          validation: 'na',
          subs: subMetrics
        });
      }
    }

    testIndex[testId] = {
      id: testId,
      name: testName,
      category: testCategory
    };

    // Output detail file public/data/benchmarks/sarvam/test_NN.json
    const detailPayload = {
      testId,
      testName,
      category: testCategory,
      prompt: testPrompt,
      runs: testRunsData
    };

    fs.writeFileSync(
      path.join(OUT_DIR, `test_${testId}.json`),
      JSON.stringify(detailPayload, null, 2)
    );
  }

  // Populate categories list in manifest
  manifest.categories = Array.from(categoriesSet);

  // Write files to src/data (META_DIR)
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  fs.writeFileSync(
    path.join(META_DIR, 'metrics.json'),
    JSON.stringify(metrics, null, 2)
  );

  // Also write to public/data (OUT_DIR) for client-side fetching
  fs.writeFileSync(path.join(OUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
  fs.writeFileSync(
    path.join(OUT_DIR, 'metrics.json'),
    JSON.stringify(metrics, null, 2)
  );

  console.log('Successfully completed data transform!');
  console.log(`Outputs written to: ${OUT_DIR}/ and ${META_DIR}/`);
}

main().catch(err => {
  console.error('Error during data transform:', err);
  process.exit(1);
});
