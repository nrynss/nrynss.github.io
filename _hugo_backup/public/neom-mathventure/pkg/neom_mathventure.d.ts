/* tslint:disable */
/* eslint-disable */
export function main(): void;
export class AudioManager {
  free(): void;
  /**
   * @param {string} text
   * @param {number} pitch
   */
  speak_with_pitch(text: string, pitch: number): void;
  constructor();
  /**
   * @param {string} text
   */
  speak(text: string): void;
  /**
   * @returns {boolean}
   */
  toggle(): boolean;
}
export class LocalizationManager {
  free(): void;
}
export class MusicGenerator {
  free(): void;
  /**
   * @returns {boolean}
   */
  is_playing(): boolean;
  schedule_more_notes(): void;
  constructor();
  stop(): void;
  start(): void;
}
export class NeomMathGame {
  free(): void;
  reset_game(): void;
  stop_music(): void;
  /**
   * @param {string} key
   * @returns {string}
   */
  get_ui_text(key: string): string;
  start_music(): void;
  /**
   * @param {number} user_answer
   * @returns {boolean}
   */
  check_answer(user_answer: number): boolean;
  /**
   * @returns {number}
   */
  get_accuracy(): number;
  /**
   * @param {string} json_str
   */
  load_locales(json_str: string): void;
  /**
   * @returns {boolean}
   */
  toggle_audio(): boolean;
  /**
   * @returns {number}
   */
  get_time_left(): number;
  /**
   * @returns {number}
   */
  get_difficulty(): number;
  /**
   * @returns {number}
   */
  get_high_score(): number;
  /**
   * @returns {boolean}
   */
  is_music_playing(): boolean;
  /**
   * @returns {string}
   */
  generate_question(): string;
  /**
   * @param {string} mascot
   * @param {string} category
   * @returns {string}
   */
  get_mascot_message(mascot: string, category: string): string;
  /**
   * @param {string} text
   * @param {string} mascot
   */
  speak_mascot_message(text: string, mascot: string): void;
  constructor();
  /**
   * @returns {boolean}
   */
  tick(): boolean;
  /**
   * @returns {number}
   */
  get_score(): number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_musicgenerator_free: (a: number, b: number) => void;
  readonly main: () => void;
  readonly musicgenerator_is_playing: (a: number) => number;
  readonly musicgenerator_new: () => number;
  readonly musicgenerator_schedule_more_notes: (a: number) => void;
  readonly musicgenerator_start: (a: number) => void;
  readonly musicgenerator_stop: (a: number) => void;
  readonly __wbg_neommathgame_free: (a: number, b: number) => void;
  readonly neommathgame_check_answer: (a: number, b: number) => number;
  readonly neommathgame_generate_question: (a: number) => Array;
  readonly neommathgame_get_accuracy: (a: number) => number;
  readonly neommathgame_get_difficulty: (a: number) => number;
  readonly neommathgame_get_high_score: (a: number) => number;
  readonly neommathgame_get_mascot_message: (a: number, b: number, c: number, d: number, e: number) => Array;
  readonly neommathgame_get_score: (a: number) => number;
  readonly neommathgame_get_time_left: (a: number) => number;
  readonly neommathgame_get_ui_text: (a: number, b: number, c: number) => Array;
  readonly neommathgame_is_music_playing: (a: number) => number;
  readonly neommathgame_load_locales: (a: number, b: number, c: number) => void;
  readonly neommathgame_new: () => number;
  readonly neommathgame_reset_game: (a: number) => void;
  readonly neommathgame_speak_mascot_message: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly neommathgame_start_music: (a: number) => void;
  readonly neommathgame_stop_music: (a: number) => void;
  readonly neommathgame_tick: (a: number) => number;
  readonly neommathgame_toggle_audio: (a: number) => number;
  readonly __wbg_audiomanager_free: (a: number, b: number) => void;
  readonly audiomanager_new: () => number;
  readonly audiomanager_speak: (a: number, b: number, c: number) => void;
  readonly audiomanager_speak_with_pitch: (a: number, b: number, c: number, d: number) => void;
  readonly audiomanager_toggle: (a: number) => number;
  readonly __wbg_localizationmanager_free: (a: number, b: number) => void;
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
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
