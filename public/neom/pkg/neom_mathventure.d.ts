/* tslint:disable */
/* eslint-disable */

export class AudioManager {
  free(): void;
  [Symbol.dispose](): void;
  speak_with_pitch(text: string, pitch: number): void;
  constructor();
  speak(text: string): void;
  toggle(): boolean;
}

export class JSOwner {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
}

export class LocalizationManager {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
}

export class MusicGenerator {
  free(): void;
  [Symbol.dispose](): void;
  is_playing(): boolean;
  load_melody(path: string): void;
  constructor();
  stop(): void;
  start(): void;
}

export class NeomMathGame {
  free(): void;
  [Symbol.dispose](): void;
  reset_game(): void;
  stop_music(): void;
  get_ui_text(key: string): string;
  start_music(): void;
  check_answer(user_answer: number): boolean;
  get_accuracy(): number;
  load_locales(json_str: string): void;
  toggle_audio(): boolean;
  get_time_left(): number;
  get_difficulty(): number;
  get_high_score(): number;
  is_music_playing(): boolean;
  generate_question(): string;
  get_mascot_message(mascot: string, category: string): string;
  speak_mascot_message(text: string, mascot: string): void;
  current_question_text(): string;
  constructor();
  tick(): boolean;
  get_score(): number;
}

export function start(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_jsowner_free: (a: number, b: number) => void;
  readonly __wbg_neommathgame_free: (a: number, b: number) => void;
  readonly neommathgame_check_answer: (a: number, b: number) => number;
  readonly neommathgame_current_question_text: (a: number) => [number, number];
  readonly neommathgame_generate_question: (a: number) => [number, number];
  readonly neommathgame_get_accuracy: (a: number) => number;
  readonly neommathgame_get_difficulty: (a: number) => number;
  readonly neommathgame_get_high_score: (a: number) => number;
  readonly neommathgame_get_mascot_message: (a: number, b: number, c: number, d: number, e: number) => [number, number];
  readonly neommathgame_get_score: (a: number) => number;
  readonly neommathgame_get_time_left: (a: number) => number;
  readonly neommathgame_get_ui_text: (a: number, b: number, c: number) => [number, number];
  readonly neommathgame_is_music_playing: (a: number) => number;
  readonly neommathgame_load_locales: (a: number, b: number, c: number) => void;
  readonly neommathgame_new: () => number;
  readonly neommathgame_reset_game: (a: number) => void;
  readonly neommathgame_speak_mascot_message: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly neommathgame_start_music: (a: number) => void;
  readonly neommathgame_stop_music: (a: number) => void;
  readonly neommathgame_tick: (a: number) => number;
  readonly neommathgame_toggle_audio: (a: number) => number;
  readonly __wbg_musicgenerator_free: (a: number, b: number) => void;
  readonly musicgenerator_is_playing: (a: number) => number;
  readonly musicgenerator_load_melody: (a: number, b: number, c: number) => void;
  readonly musicgenerator_new: () => number;
  readonly musicgenerator_start: (a: number) => void;
  readonly musicgenerator_stop: (a: number) => void;
  readonly start: () => void;
  readonly __wbg_localizationmanager_free: (a: number, b: number) => void;
  readonly __wbg_audiomanager_free: (a: number, b: number) => void;
  readonly audiomanager_new: () => number;
  readonly audiomanager_speak: (a: number, b: number, c: number) => void;
  readonly audiomanager_speak_with_pitch: (a: number, b: number, c: number, d: number) => void;
  readonly audiomanager_toggle: (a: number) => number;
  readonly wasm_bindgen__convert__closures_____invoke__hc3cc90c94bf7906a: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h1d847a9cba6a4e7a: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures________invoke__h4d49a6d40a64fb4e: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h5c8ecb6fff6ddd11: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __externref_drop_slice: (a: number, b: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
