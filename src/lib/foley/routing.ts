// src/lib/foley/routing.ts
// Keyword -> category routing preview, ported from the AI Foley repo's
// routing.yaml (src/foley/routing.py). Client-side only; the site never
// calls fal, so this reproduces the routing decision for display purposes.
//
// Matching rule mirrors foley.keywords.has_word: a PREFIX match at a left
// word boundary against the lowercased event name ("wood" matches "wooden",
// "door" matches "doorway"). `categories` is ORDERED — first hit wins;
// `default` is the fallback.

export interface RouteCategory {
  name: string;
  endpoint: string;
  model: string;
  keywords: string[];
}

// Ordered category table. `model` is the human-facing name for the endpoint.
export const CATEGORIES: RouteCategory[] = [
  {
    name: 'ambience',
    endpoint: 'cassetteai/sound-effects-generator',
    model: 'CassetteAI SFX',
    keywords: ['wind'],
  },
  {
    name: 'footsteps',
    endpoint: 'cassetteai/sound-effects-generator',
    model: 'CassetteAI SFX',
    keywords: ['footstep', 'walking', 'tread', 'boot'],
  },
  {
    name: 'door_creak',
    endpoint: 'fal-ai/elevenlabs/sound-effects/v2',
    model: 'ElevenLabs SFX v2',
    keywords: ['door', 'gate', 'latch', 'hinge', 'creak', 'squeak'],
  },
  {
    name: 'impact_strike',
    endpoint: 'fal-ai/mmaudio-v2/text-to-audio',
    model: 'MMAudio v2',
    keywords: ['strike', 'ignite', 'glass', 'shatter', 'impact', 'break'],
  },
];

export const DEFAULT_CATEGORY: RouteCategory = {
  name: 'default',
  endpoint: 'cassetteai/sound-effects-generator',
  model: 'CassetteAI SFX',
  keywords: [],
};

// Prefix match at a left word boundary. `keyword` must appear at the start of
// a word in `name` (so it can match a longer word, e.g. "wood" -> "wooden").
function hasWord(name: string, keyword: string): boolean {
  // \b before the keyword; the keyword may be a prefix of a longer word.
  const re = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i');
  return re.test(name);
}

/** Classify an event name into a routing category (first-match-wins). */
export function classify(eventName: string): RouteCategory {
  const lower = (eventName || '').toLowerCase();
  for (const cat of CATEGORIES) {
    if (cat.keywords.some((kw) => hasWord(lower, kw))) {
      return cat;
    }
  }
  return DEFAULT_CATEGORY;
}

/** The short model label used in the endpoint column (e.g. "elevenlabs"). */
export function endpointShort(endpoint: string): string {
  const parts = endpoint.split('/');
  return parts[1] || endpoint;
}
