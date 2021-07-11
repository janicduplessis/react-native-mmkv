"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MMKV = exports.mmkvWithID = void 0;
const g = global;

/**
 * Create an MMKV instance.
 *
 * @param id The unique ID of the MMKV instance or null for the default.
 */
const mmkvWithID = g.mmkvWithID;
/**
 * MMKV is an efficient, small mobile key-value storage framework developed by WeChat.
 */

exports.mmkvWithID = mmkvWithID;
const MMKV = mmkvWithID(null);
exports.MMKV = MMKV;
//# sourceMappingURL=index.js.map