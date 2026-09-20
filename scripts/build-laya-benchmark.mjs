import fs from 'fs';
import path from 'path';

const LOCAL_BENCHMARK_DIR = path.join(process.cwd(), 'llm-benchmarks', 'laya');
const POOCHA_FALLBACK_DIR = '/home/nryn/work/poocha/laya';

const BASE_DIR = fs.existsSync(LOCAL_BENCHMARK_DIR)
  ? LOCAL_BENCHMARK_DIR
  : POOCHA_FALLBACK_DIR;

const RESULTS_DIR = path.join(BASE_DIR, 'results');

const SUITES = [
  {
    slug: 'laya-jev',
    casesFile: path.join(BASE_DIR, 'data', 'laya_safety_cases.jsonl'),
    runConfigs: [
      {
        id: 'regex-guardrail',
        file: 'regex-safety.jsonl',
        label: 'Deterministic Regex (Hardened)',
        shortLabel: 'Regex',
        color: '#ef4444',
        tags: ['baseline', 'regex', 'deterministic']
      },
      {
        id: 'laya-english-base',
        file: 'laya-english.jsonl',
        label: 'Laya 0.3.3 English (Base Zero-Shot)',
        shortLabel: 'Laya English',
        color: '#f59e0b',
        tags: ['laya', 'modernbert', 'zero-shot']
      },
      {
        id: 'laya-typed-calibrated',
        file: 'laya-typed-calibrated.jsonl',
        label: 'Laya Typed-Decisions (Calibrated)',
        shortLabel: 'Laya Typed',
        color: '#10b981',
        tags: ['laya', 'calibrated', 'surface-scoped']
      },
      {
        id: 'jev-safety-base',
        file: 'jev-safety.jsonl',
        label: 'TypeSafe JEV (Base)',
        shortLabel: 'JEV Base',
        color: '#6366f1',
        tags: ['typesafe', 'openrouter', 'zero-shot']
      },
      {
        id: 'jev-calibrated',
        file: 'jev-calibrated.jsonl',
        label: 'TypeSafe JEV (Calibrated)',
        shortLabel: 'JEV Calibrated',
        color: '#8b5cf6',
        tags: ['typesafe', 'openrouter', 'calibrated']
      }
    ],
    findings: [
      {
        emoji: '🛑',
        title: 'The Regex Keyword Gate Trap',
        body: 'Hardened regex achieves only 30.2% accuracy. It misses 100% of prompt injections (0/4) and 62.5% of acute distress cases (3/8), while blocking harmless inquiries with innocent words like "reproduction" or quoted insults.'
      },
      {
        emoji: '💡',
        title: 'Why Raw Base Laya Dumps to Injections',
        body: 'In raw zero-shot mode without surface scoping, Laya base dumped the majority of child inputs into reject_untrusted_text due to an uncalibrated linear head prior. Enforcing surface scoping and calibration jumps accuracy from 20.9% to 44.2%.'
      },
      {
        emoji: '🎯',
        title: 'TypeSafe JEV Reference Anchor',
        body: 'TypeSafe JEV reaches 88.4% accuracy under calibrated criteria with 100% recall on crisis cases (8/8) and 100% recall on prompt injections (4/4). On OpenRouter Decisions API at $0.042/MTok input and $0 output, 1,000 checks cost <$0.0001.'
      },
      {
        emoji: '🚀',
        title: "Laya's High Fine-Tuning Ceiling",
        body: 'Zero-shot Laya (20.9%–44.2%) is an uncalibrated starting floor. Upstream evidence shows fine-tuning lifts Laya on typed-decisions from 36.2% to 76.6% via RLCD proper scoring rules, proving non-autoregressive models surpass teacher ceilings when tuned.'
      }
    ]
  },
  {
    slug: 'laya-contrast',
    casesFile: path.join(BASE_DIR, 'data', 'laya_contrast_corpus.jsonl'),
    runConfigs: [
      {
        id: 'contrast-regex',
        file: 'contrast-regex.jsonl',
        label: 'Deterministic Regex (Hardened)',
        shortLabel: 'Regex',
        color: '#ef4444',
        tags: ['baseline', 'regex', 'deterministic']
      },
      {
        id: 'contrast-laya-standard',
        file: 'contrast-laya-english-standard.jsonl',
        label: 'Laya 0.3.3 English (Standard Base)',
        shortLabel: 'Laya Standard',
        color: '#f59e0b',
        tags: ['laya', 'modernbert', 'zero-shot']
      },
      {
        id: 'contrast-laya-surface',
        file: 'contrast-laya-english-surface.jsonl',
        label: 'Laya 0.3.3 English (Surface-Scoped)',
        shortLabel: 'Laya Surface-Scoped',
        color: '#3b82f6',
        tags: ['laya', 'surface-scoped']
      },
      {
        id: 'contrast-laya-typed',
        file: 'contrast-laya-typed-calibrated.jsonl',
        label: 'Laya Typed-Decisions (Calibrated)',
        shortLabel: 'Laya Typed',
        color: '#10b981',
        tags: ['laya', 'calibrated', 'surface-scoped']
      },
      {
        id: 'contrast-jev-calibrated',
        file: 'contrast-jev-calibrated.jsonl',
        label: 'TypeSafe JEV (Calibrated)',
        shortLabel: 'JEV Calibrated',
        color: '#8b5cf6',
        tags: ['typesafe', 'openrouter', 'calibrated']
      }
    ],
    findings: [
      {
        emoji: '💡',
        title: 'Why Base Laya Dumps Child Inputs to Injections',
        body: 'On raw zero-shot base Laya, 14 out of 20 direct child inputs were classified as reject_untrusted_text (20.0% accuracy). Laya lacks generative safety alignment; without explicit schema bounds, the raw head latches onto the prompt injection definition.'
      },
      {
        emoji: '⚡',
        title: 'The Surface-Scoping Transformation (20% → 48%)',
        body: 'Simply eliminating reject_untrusted_text from valid child options more than doubles base Laya accuracy (to 48.0%), correctly recognizing 80% of sensitive boundaries (reproduction, puberty, acid burns, war curriculum) where regex failed completely.'
      },
      {
        emoji: '🛑',
        title: 'Regex Catastrophic Failure (24%)',
        body: 'Production regex achieved 24.0% accuracy with 0% crisis recall (misses bleeding, poison, indirect despair) and 0% injection recall, while falsely blocking benign biology curriculum (puberty, swear word clarification).'
      },
      {
        emoji: '🎯',
        title: 'TypeSafe JEV Sets the Ceiling (96%)',
        body: 'TypeSafe JEV scores 96.0% (24/25) on the contrast suite with 100% crisis recall, 100% refusal recall, and 100% prompt injection recall, setting the benchmark standard for our upcoming Laya RLCD fine-tune.'
      }
    ]
  }
];

function getCategory(caseId, surface) {
  if (caseId.startsWith('contrast-safe') || caseId.startsWith('input-safe')) return 'Safe Learning & Science';
  if (caseId.startsWith('contrast-care') || caseId.startsWith('input-care')) return 'Care & Sensitive Boundaries';
  if (caseId.startsWith('contrast-adult') || caseId.startsWith('input-adult')) return 'Crisis & Acute Distress';
  if (caseId.startsWith('contrast-refuse') || caseId.startsWith('input-refuse')) return 'Harmful Requests & Refusal';
  if (caseId.startsWith('contrast-span-safe') || caseId.startsWith('span-safe')) return 'Safe Facts (Retrieved)';
  if (caseId.startsWith('contrast-span-inj') || caseId.startsWith('span-injection')) return 'Prompt Injections (Retrieved)';
  if (caseId.startsWith('input-obfuscated')) return 'Obfuscation & Bypasses';
  if (caseId.startsWith('span-care')) return 'Care & Sensitive (Retrieved)';
  if (caseId.startsWith('span-adult')) return 'Support Resource (Retrieved)';
  if (caseId.startsWith('span-refuse')) return 'Harmful Procedure (Retrieved)';
  return surface === 'retrieved_span' ? 'Retrieved Spans' : 'Child Inputs';
}

function loadJsonl(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  return content
    .split('\n')
    .filter(line => line.trim())
    .map(line => JSON.parse(line));
}

async function processSuite(suite) {
  console.log(`Starting data transform for suite: ${suite.slug}`);

  const outDir = path.join('public', 'data', 'benchmarks', suite.slug);
  const metaDir = path.join('src', 'data', 'benchmarks', suite.slug);

  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(metaDir, { recursive: true });

  if (!fs.existsSync(suite.casesFile)) {
    if (fs.existsSync(path.join(outDir, 'manifest.json'))) {
      console.log(`Cases file ${suite.casesFile} not found, but pre-built artifacts exist in ${outDir}. Skipping rebuild.`);
      return;
    }
    throw new Error(`Cases file not found: ${suite.casesFile}`);
  }

  const rawCases = loadJsonl(suite.casesFile);
  console.log(`Loaded ${rawCases.length} ground truth safety cases for ${suite.slug}.`);

  const runResults = {};
  for (const rc of suite.runConfigs) {
    const resFile = path.join(RESULTS_DIR, rc.file);
    if (!fs.existsSync(resFile)) {
      if (fs.existsSync(path.join(outDir, 'manifest.json'))) {
        console.log(`Result file ${resFile} not found, but pre-built artifacts exist in ${outDir}. Skipping rebuild.`);
        return;
      }
      throw new Error(`Result file not found: ${resFile}`);
    }
    const rows = loadJsonl(resFile);
    const byId = {};
    for (const r of rows) {
      byId[r.id] = r;
    }
    runResults[rc.id] = byId;
  }

  const metrics = [];
  const categoriesSet = new Set();

  const manifest = {
    runs: suite.runConfigs.map(rc => ({
      id: rc.id,
      label: rc.label,
      shortLabel: rc.shortLabel,
      color: rc.color,
      tags: rc.tags
    })),
    categories: [],
    findings: suite.findings
  };

  for (let idx = 0; idx < rawCases.length; idx++) {
    const testId = idx + 1;
    const testCase = rawCases[idx];
    const category = getCategory(testCase.id, testCase.surface);
    categoriesSet.add(category);

    const testPrompt = `[SURFACE: ${testCase.surface.toUpperCase()}]\n${testCase.content}\n\n[EXPECTED ROUTE: ${testCase.expected_route}]\n[CONTEXT / NOTE: ${testCase.note}]`;

    const testRunsData = {};

    for (const rc of suite.runConfigs) {
      const res = runResults[rc.id]?.[testCase.id];
      const isCorrect = res ? Boolean(res.correct) : false;
      const predictedRoute = res ? res.predicted_route : 'unknown';
      const confidence = res?.confidence !== undefined ? res.confidence : 0;
      const probs = res?.raw_answer?.probabilities || {};

      testRunsData[rc.id] = {
        content: JSON.stringify(
          {
            predicted_route: predictedRoute,
            expected_route: testCase.expected_route,
            result: isCorrect ? 'PASS' : 'FAIL',
            confidence: typeof confidence === 'number' ? Number(confidence.toFixed(4)) : confidence,
            probabilities: Object.keys(probs).length > 0 ? probs : undefined
          },
          null,
          2
        ),
        thinking: `[${isCorrect ? 'CORRECT ROUTE' : 'ROUTING ERROR'}]\nExpected: ${testCase.expected_route}\nPredicted: ${predictedRoute}\nSurface: ${testCase.surface}\nScenario Note: ${testCase.note}`,
        thinkingTruncated: false
      };

      metrics.push({
        runId: rc.id,
        testId,
        testName: testCase.id,
        category,
        tokens: 1,
        promptTokens: 0,
        tPerS: 0,
        elapsedS: 0,
        finish: 'stop',
        runawayThink: false,
        validation: isCorrect ? 'pass' : 'fail'
      });
    }

    const detailPayload = {
      testId,
      testName: testCase.id,
      category,
      prompt: testPrompt,
      runs: testRunsData
    };

    fs.writeFileSync(
      path.join(outDir, `test_${testId}.json`),
      JSON.stringify(detailPayload, null, 2)
    );
  }

  manifest.categories = Array.from(categoriesSet);

  fs.writeFileSync(path.join(metaDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
  fs.writeFileSync(path.join(metaDir, 'metrics.json'), JSON.stringify(metrics, null, 2));

  fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
  fs.writeFileSync(path.join(outDir, 'metrics.json'), JSON.stringify(metrics, null, 2));

  console.log(`Successfully generated benchmark data for ${rawCases.length} tests across ${suite.runConfigs.length} models for ${suite.slug}.`);
}

async function main() {
  for (const suite of SUITES) {
    await processSuite(suite);
  }
}

main().catch(err => {
  console.error('Error generating benchmark data:', err);
  process.exit(1);
});
