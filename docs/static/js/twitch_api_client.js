var twitchapiclient =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Enumerable_1 = __webpack_require__(111);
var __export_Enumerable = Enumerable_1.Enumerable;
exports.Enumerable = __export_Enumerable;
var __export_NonEnumerable = Enumerable_1.NonEnumerable;
exports.NonEnumerable = __export_NonEnumerable;
var flatten_1 = __webpack_require__(112);
var __export_flatten = flatten_1.flatten;
exports.flatten = __export_flatten;
var resolveConfigValue_1 = __webpack_require__(113);
var __export_resolveConfigValue = resolveConfigValue_1.resolveConfigValue;
exports.resolveConfigValue = __export_resolveConfigValue;
var deprecateClass_1 = __webpack_require__(114);
var __export_deprecateClass = deprecateClass_1.deprecateClass;
exports.deprecateClass = __export_deprecateClass;
var match_1 = __webpack_require__(115);
var __export_match = match_1.match;
exports.match = __export_match;
var __export_eq = match_1.eq;
exports.eq = __export_eq;
var arrayToObject_1 = __webpack_require__(28);
var __export_arrayToObject = arrayToObject_1.arrayToObject;
exports.arrayToObject = __export_arrayToObject;
var entriesToObject_1 = __webpack_require__(116);
var __export_entriesToObject = entriesToObject_1.entriesToObject;
exports.entriesToObject = __export_entriesToObject;
var forEachObjectEntry_1 = __webpack_require__(117);
var __export_forEachObjectEntry = forEachObjectEntry_1.forEachObjectEntry;
exports.forEachObjectEntry = __export_forEachObjectEntry;
var indexBy_1 = __webpack_require__(118);
var __export_indexBy = indexBy_1.indexBy;
exports.indexBy = __export_indexBy;
var mapObject_1 = __webpack_require__(119);
var __export_mapObject = mapObject_1.mapObject;
exports.mapObject = __export_mapObject;
var omit_1 = __webpack_require__(120);
var __export_omit = omit_1.omit;
exports.omit = __export_omit;
var pick_1 = __webpack_require__(45);
var __export_pick = pick_1.pick;
exports.pick = __export_pick;
var delay_1 = __webpack_require__(121);
var __export_delay = delay_1.delay;
exports.delay = __export_delay;
var padLeft_1 = __webpack_require__(122);
var __export_padLeft = padLeft_1.padLeft;
exports.padLeft = __export_padLeft;
var splitWithLimit_1 = __webpack_require__(123);
var __export_splitWithLimit = splitWithLimit_1.splitWithLimit;
exports.splitWithLimit = __export_splitWithLimit;
var utf8Length_1 = __webpack_require__(124);
var __export_utf8Length = utf8Length_1.utf8Length;
exports.utf8Length = __export_utf8Length;
var utf8Substring_1 = __webpack_require__(125);
var __export_utf8Substring = utf8Substring_1.utf8Substring;
exports.utf8Substring = __export_utf8Substring;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enumerable = __export_Enumerable;
exports.NonEnumerable = __export_NonEnumerable;
exports.flatten = __export_flatten;
exports.resolveConfigValue = __export_resolveConfigValue;
exports.deprecateClass = __export_deprecateClass;
exports.match = __export_match;
exports.eq = __export_eq;
exports.arrayToObject = __export_arrayToObject;
exports.entriesToObject = __export_entriesToObject;
exports.forEachObjectEntry = __export_forEachObjectEntry;
exports.indexBy = __export_indexBy;
exports.mapObject = __export_mapObject;
exports.omit = __export_omit;
exports.pick = __export_pick;
exports.delay = __export_delay;
exports.padLeft = __export_padLeft;
exports.splitWithLimit = __export_splitWithLimit;
exports.utf8Length = __export_utf8Length;
exports.utf8Substring = __export_utf8Substring;
//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(23)();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__(35);
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
/** @private */
var BaseAPI = /** @class */ (function () {
    function BaseAPI(client) {
        this._client = client;
    }
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], BaseAPI.prototype, "_client", void 0);
    return BaseAPI;
}());
exports.default = BaseAPI;
module.exports = exports = BaseAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseAPI;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/// <reference lib="dom" />
var cache_decorators_1 = __webpack_require__(5);
var cross_fetch_1 = __webpack_require__(103);
var logger_1 = __webpack_require__(104);
var qs_1 = __webpack_require__(107);
var AccessToken_1 = __webpack_require__(27);
var BadgesAPI_1 = __webpack_require__(110);
var HelixAPIGroup_1 = __webpack_require__(126);
var HelixRateLimiter_1 = __webpack_require__(139);
var CheermoteList_1 = __webpack_require__(37);
var KrakenAPIGroup_1 = __webpack_require__(194);
var TokenInfo_1 = __webpack_require__(95);
var UnsupportedAPI_1 = __webpack_require__(207);
var ClientCredentialsAuthProvider_1 = __webpack_require__(208);
var RefreshableAuthProvider_1 = __webpack_require__(97);
var StaticAuthProvider_1 = __webpack_require__(98);
var ConfigError_1 = __webpack_require__(99);
var HTTPStatusCodeError_1 = __webpack_require__(19);
var InvalidTokenError_1 = __webpack_require__(100);
/**
 * The endpoint to call, i.e. /kraken, /helix or a custom (potentially unsupported) endpoint.
 */
var TwitchAPICallType;
(function (TwitchAPICallType) {
    /**
     * Call a Kraken API endpoint.
     */
    TwitchAPICallType[TwitchAPICallType["Kraken"] = 0] = "Kraken";
    /**
     * Call a Helix API endpoint.
     */
    TwitchAPICallType[TwitchAPICallType["Helix"] = 1] = "Helix";
    /**
     * Call an authentication endpoint.
     */
    TwitchAPICallType[TwitchAPICallType["Auth"] = 2] = "Auth";
    /**
     * Call a custom (potentially unsupported) endpoint.
     */
    TwitchAPICallType[TwitchAPICallType["Custom"] = 3] = "Custom";
})(TwitchAPICallType || (TwitchAPICallType = {}));
exports.TwitchAPICallType = TwitchAPICallType;
/**
 * The main entry point of this library. Manages API calls and the use of access tokens in these.
 */
var TwitchClient = /** @class */ (function () {
    /**
     * Creates a new Twitch client instance.
     *
     * @param config Configuration for the client instance.
     */
    function TwitchClient(config) {
        var authProvider = config.authProvider, restConfig = tslib_1.__rest(config, ["authProvider"]);
        if (!authProvider) {
            throw new ConfigError_1.default('No auth provider given');
        }
        this._helixRateLimiter = new HelixRateLimiter_1.default(config.logLevel || logger_1.LogLevel.CRITICAL);
        this._config = tslib_1.__assign({ preAuth: false, cheermotes: {
                defaultBackground: CheermoteList_1.CheermoteBackground.dark,
                defaultState: CheermoteList_1.CheermoteState.animated,
                defaultScale: CheermoteList_1.CheermoteScale.x1
            }, authProvider: authProvider }, restConfig);
        if (this._config.preAuth) {
            // tslint:disable-next-line:no-floating-promises
            authProvider.getAccessToken(this._config.initialScopes);
        }
    }
    TwitchClient_1 = TwitchClient;
    // TODO 5.0: config object!
    /**
     * Creates a new instance with fixed credentials.
     *
     * @param clientId The client ID of your application.
     * @param accessToken The access token to call the API with.
     *
     * You need to obtain one using one of the [Twitch OAuth flows](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/).
     * @param scopes The scopes your supplied token has.
     *
     * If this argument is given, the scopes need to be correct, or weird things might happen. If it's not (i.e. it's `undefined`), we fetch the correct scopes for you.
     *
     * If you can't exactly say which scopes your token has, don't use this parameter/set it to `undefined`.
     * @param refreshConfig Configuration to automatically refresh expired tokens.
     * @param config Additional configuration to pass to the constructor.
     *
     * Note that if you provide a custom `authProvider`, this method will overwrite it. In this case, you should use the constructor directly.
     * @param tokenType The type of token you passed.
     *
     * This should almost always be 'user' (which is the default).
     *
     * If you're passing 'app' here, please consider using {@TwitchClient.withClientCredentials} instead.
     */
    TwitchClient.withCredentials = function (clientId, accessToken, scopes, refreshConfig, config, tokenType) {
        if (config === void 0) { config = {}; }
        if (tokenType === void 0) { tokenType = 'user'; }
        var authProvider = refreshConfig
            ? new RefreshableAuthProvider_1.default(new StaticAuthProvider_1.default(clientId, accessToken, scopes, tokenType), refreshConfig)
            : new StaticAuthProvider_1.default(clientId, accessToken, scopes, tokenType);
        return new this(tslib_1.__assign(tslib_1.__assign({}, config), { authProvider: authProvider }));
    };
    /**
     * Creates a new instance with client credentials.
     *
     * @param clientId The client ID of your application.
     * @param clientSecret The client secret of your application.
     * @param config Additional configuration to pass to the constructor.
     *
     * Note that if you provide a custom `authProvider`, this method will overwrite it. In this case, you should use the constructor directly.
     */
    TwitchClient.withClientCredentials = function (clientId, clientSecret, config) {
        if (config === void 0) { config = {}; }
        var authProvider = clientSecret
            ? new ClientCredentialsAuthProvider_1.default(clientId, clientSecret)
            : new StaticAuthProvider_1.default(clientId);
        return new this(tslib_1.__assign(tslib_1.__assign({}, config), { authProvider: authProvider }));
    };
    /**
     * Makes a call to the Twitch API using given credentials.
     *
     * @param options The configuration of the call.
     * @param clientId The client ID of your application.
     * @param accessToken The access token to call the API with.
     *
     * You need to obtain one using one of the [Twitch OAuth flows](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/).
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TwitchClient.callAPI = function (options, clientId, accessToken) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._callAPIRaw(options, clientId, accessToken)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this._transformResponse(response)];
                }
            });
        });
    };
    /**
     * Retrieves an access token with your client credentials and an authorization code.
     *
     * @param clientId The client ID of your application.
     * @param clientSecret The client secret of your application.
     * @param code The authorization code.
     * @param redirectUri The redirect URI. This serves no real purpose here, but must still match with the redirect URI you configured in the Twitch Developer dashboard.
     */
    TwitchClient.getAccessToken = function (clientId, clientSecret, code, redirectUri) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = AccessToken_1.default.bind;
                        return [4 /*yield*/, this.callAPI({
                                type: TwitchAPICallType.Auth,
                                url: 'token',
                                method: 'POST',
                                query: {
                                    grant_type: 'authorization_code',
                                    client_id: clientId,
                                    client_secret: clientSecret,
                                    code: code,
                                    redirect_uri: redirectUri
                                }
                            })];
                    case 1: return [2 /*return*/, new (_a.apply(AccessToken_1.default, [void 0, _b.sent()]))()];
                }
            });
        });
    };
    /**
     * Retrieves an app access token with your client credentials.
     *
     * @param clientId The client ID of your application.
     * @param clientSecret The client secret of your application.
     * @param clientSecret
     */
    TwitchClient.getAppAccessToken = function (clientId, clientSecret) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = AccessToken_1.default.bind;
                        return [4 /*yield*/, this.callAPI({
                                type: TwitchAPICallType.Auth,
                                url: 'token',
                                method: 'POST',
                                query: {
                                    grant_type: 'client_credentials',
                                    client_id: clientId,
                                    client_secret: clientSecret
                                }
                            })];
                    case 1: return [2 /*return*/, new (_a.apply(AccessToken_1.default, [void 0, _b.sent()]))()];
                }
            });
        });
    };
    /**
     * Refreshes an expired access token with your client credentials and the refresh token that was given by the initial authentication.
     *
     * @param clientId The client ID of your application.
     * @param clientSecret The client secret of your application.
     * @param refreshToken The refresh token.
     */
    TwitchClient.refreshAccessToken = function (clientId, clientSecret, refreshToken) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = AccessToken_1.default.bind;
                        return [4 /*yield*/, this.callAPI({
                                type: TwitchAPICallType.Auth,
                                url: 'token',
                                method: 'POST',
                                query: {
                                    grant_type: 'refresh_token',
                                    client_id: clientId,
                                    client_secret: clientSecret,
                                    refresh_token: refreshToken
                                }
                            })];
                    case 1: return [2 /*return*/, new (_a.apply(AccessToken_1.default, [void 0, _b.sent()]))()];
                }
            });
        });
    };
    /**
     * Retrieves information about an access token.
     *
     * @param clientId The client ID of your application.
     * @param accessToken The access token to get the information of.
     *
     * You need to obtain one using one of the [Twitch OAuth flows](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/).
     */
    TwitchClient.getTokenInfo = function (accessToken, clientId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.callAPI({ type: TwitchAPICallType.Auth, url: 'validate' }, clientId, accessToken)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, new TokenInfo_1.default(data)];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 instanceof HTTPStatusCodeError_1.default && e_1.statusCode === 401) {
                            throw new InvalidTokenError_1.default();
                        }
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     */
    TwitchClient._callAPIRaw = function (options, clientId, accessToken) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var type, url, params, headers, body, requestOptions;
            return tslib_1.__generator(this, function (_a) {
                type = options.type === undefined ? TwitchAPICallType.Kraken : options.type;
                url = this._getUrl(options.url, type);
                params = qs_1.stringify(options.query, { arrayFormat: 'repeat' });
                headers = new cross_fetch_1.Headers({
                    Accept: type === TwitchAPICallType.Kraken
                        ? "application/vnd.twitchtv.v" + (options.version || 5) + "+json"
                        : 'application/json'
                });
                if (options.body) {
                    body = qs_1.stringify(options.body);
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                }
                else if (options.jsonBody) {
                    body = JSON.stringify(options.jsonBody);
                    headers.append('Content-Type', 'application/json');
                }
                if (clientId && type !== TwitchAPICallType.Auth) {
                    headers.append('Client-ID', clientId);
                }
                if (accessToken) {
                    headers.append('Authorization', (type === TwitchAPICallType.Helix ? 'Bearer' : 'OAuth') + " " + accessToken);
                }
                requestOptions = {
                    method: options.method || 'GET',
                    headers: headers,
                    body: body
                };
                return [2 /*return*/, cross_fetch_1.default(params ? url + "?" + params : url, requestOptions)];
            });
        });
    };
    /**
     * Retrieves information about your access token.
     */
    TwitchClient.prototype.getTokenInfo = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data, e_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.callAPI({ type: TwitchAPICallType.Auth, url: 'validate' })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, new TokenInfo_1.default(data)];
                    case 2:
                        e_2 = _a.sent();
                        if (e_2 instanceof HTTPStatusCodeError_1.default && e_2.statusCode === 401) {
                            throw new InvalidTokenError_1.default();
                        }
                        throw e_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves an access token for the authentication provider.
     *
     * @param scopes The scopes to request.
     */
    TwitchClient.prototype.getAccessToken = function (scopes) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._config.authProvider.getAccessToken(scopes)];
            });
        });
    };
    /**
     * Forces the authentication provider to refresh the access token, if possible.
     */
    TwitchClient.prototype.refreshAccessToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._config.authProvider.refresh && this._config.authProvider.refresh()];
            });
        });
    };
    Object.defineProperty(TwitchClient.prototype, "tokenType", {
        /**
         * The type of token used by the client.
         */
        get: function () {
            return this._config.authProvider.tokenType || 'user';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Makes a call to the Twitch API using your access token.
     *
     * @param options The configuration of the call.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TwitchClient.prototype.callAPI = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var authProvider, accessToken, response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authProvider = this._config.authProvider;
                        return [4 /*yield*/, authProvider.getAccessToken(options.scope ? [options.scope] : undefined)];
                    case 1:
                        accessToken = _a.sent();
                        if (!accessToken) {
                            return [2 /*return*/, TwitchClient_1.callAPI(options, authProvider.clientId)];
                        }
                        if (!(accessToken.isExpired && authProvider.refresh)) return [3 /*break*/, 3];
                        return [4 /*yield*/, authProvider.refresh()];
                    case 2:
                        accessToken = _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this._callAPIInternal(options, authProvider.clientId, accessToken.accessToken)];
                    case 4:
                        response = _a.sent();
                        if (!(response.status === 401 && authProvider.refresh)) return [3 /*break*/, 8];
                        return [4 /*yield*/, authProvider.refresh()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, authProvider.getAccessToken(options.scope ? [options.scope] : [])];
                    case 6:
                        accessToken = _a.sent();
                        if (!accessToken) return [3 /*break*/, 8];
                        return [4 /*yield*/, this._callAPIInternal(options, authProvider.clientId, accessToken.accessToken)];
                    case 7:
                        response = _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/, TwitchClient_1._transformResponse(response)];
                }
            });
        });
    };
    Object.defineProperty(TwitchClient.prototype, "cheermoteDefaults", {
        /**
         * The default specs for cheermotes.
         */
        get: function () {
            return this._config.cheermotes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TwitchClient.prototype, "kraken", {
        /**
         * A group of Kraken API methods.
         */
        get: function () {
            return new KrakenAPIGroup_1.default(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TwitchClient.prototype, "helix", {
        /**
         * A group of Helix API methods.
         */
        get: function () {
            return new HelixAPIGroup_1.default(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TwitchClient.prototype, "badges", {
        /**
         * The API methods that deal with badges.
         */
        get: function () {
            return new BadgesAPI_1.default(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TwitchClient.prototype, "unsupported", {
        /**
         * Various API methods that are not officially supported by Twitch.
         */
        get: function () {
            return new UnsupportedAPI_1.default(this);
        },
        enumerable: true,
        configurable: true
    });
    /** @private */
    TwitchClient.prototype._getAuthProvider = function () {
        return this._config.authProvider;
    };
    TwitchClient.prototype._callAPIInternal = function (options, clientId, accessToken) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (options.type === TwitchAPICallType.Helix) {
                    return [2 /*return*/, this._helixRateLimiter.request({ options: options, clientId: clientId, accessToken: accessToken })];
                }
                return [2 /*return*/, TwitchClient_1._callAPIRaw(options, clientId, accessToken)];
            });
        });
    };
    TwitchClient._getUrl = function (url, type) {
        switch (type) {
            case TwitchAPICallType.Kraken:
            case TwitchAPICallType.Helix:
                var typeName = type === TwitchAPICallType.Kraken ? 'kraken' : 'helix';
                return "https://api.twitch.tv/" + typeName + "/" + url.replace(/^\//, '');
            case TwitchAPICallType.Auth:
                return "https://id.twitch.tv/oauth2/" + url.replace(/^\//, '');
            case TwitchAPICallType.Custom:
                return url;
            default:
                return url; // wat
        }
    };
    TwitchClient._transformResponse = function (response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, text;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!!response.ok) return [3 /*break*/, 2];
                        _a = HTTPStatusCodeError_1.default.bind;
                        _b = [void 0, response.status, response.statusText];
                        return [4 /*yield*/, response.json()];
                    case 1: throw new (_a.apply(HTTPStatusCodeError_1.default, _b.concat([_c.sent()])))();
                    case 2:
                        if (response.status === 204) {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            return [2 /*return*/, undefined]; // oof
                        }
                        return [4 /*yield*/, response.text()];
                    case 3:
                        text = _c.sent();
                        if (!text) {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            return [2 /*return*/, undefined]; // mega oof - twitch doesn't return a response when it should
                        }
                        return [2 /*return*/, JSON.parse(text)];
                }
            });
        });
    };
    var TwitchClient_1;
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], TwitchClient.prototype, "kraken", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], TwitchClient.prototype, "helix", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], TwitchClient.prototype, "badges", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], TwitchClient.prototype, "unsupported", null);
    TwitchClient = TwitchClient_1 = tslib_1.__decorate([
        cache_decorators_1.Cacheable
    ], TwitchClient);
    return TwitchClient;
}());
exports.default = TwitchClient;
module.exports = exports = TwitchClient;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitchAPICallType = TwitchAPICallType;
exports.default = TwitchClient;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Cacheable", function() { return /* reexport */ Cacheable; });
__webpack_require__.d(__webpack_exports__, "Cached", function() { return /* reexport */ Cached; });
__webpack_require__.d(__webpack_exports__, "CachedGetter", function() { return /* reexport */ CachedGetter; });
__webpack_require__.d(__webpack_exports__, "ClearsCache", function() { return /* reexport */ ClearsCache; });
__webpack_require__.d(__webpack_exports__, "createCacheKey", function() { return /* reexport */ createCacheKey; });

// CONCATENATED MODULE: ./node_modules/@d-fischer/cache-decorators/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// CONCATENATED MODULE: ./node_modules/@d-fischer/cache-decorators/es/utils/createCacheKey.js

function createSingleCacheKey(param) {
    // noinspection FallThroughInSwitchStatementJS
    switch (typeof param) {
        case 'undefined': {
            return '';
        }
        case 'object': {
            if (param === null) {
                return '';
            }
            if ('cacheKey' in param) {
                return param.cacheKey;
            }
            var objKey = JSON.stringify(param);
            if (objKey !== '{}') {
                return objKey;
            }
        }
        // fallthrough
        default: {
            return param.toString();
        }
    }
}
function createCacheKey(propName, params, prefix) {
    return __spread([propName], params.map(createSingleCacheKey)).join('/') + (prefix ? '/' : '');
}
//# sourceMappingURL=createCacheKey.js.map
// CONCATENATED MODULE: ./node_modules/@d-fischer/cache-decorators/es/decorators/Cacheable.js


function Cacheable(cls) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.cache = new Map();
            return _this;
        }
        class_1.prototype.getFromCache = function (cacheKey) {
            this._cleanCache();
            if (this.cache.has(cacheKey)) {
                var entry = this.cache.get(cacheKey);
                if (entry) {
                    return entry.value;
                }
            }
            return undefined;
        };
        class_1.prototype.setCache = function (cacheKey, value, timeInSeconds) {
            this.cache.set(cacheKey, {
                value: value,
                expires: Date.now() + timeInSeconds * 1000
            });
        };
        class_1.prototype.removeFromCache = function (cacheKey, prefix) {
            var _this = this;
            var internalCacheKey;
            if (typeof cacheKey === 'string') {
                internalCacheKey = cacheKey;
                if (!internalCacheKey.endsWith('/')) {
                    internalCacheKey += '/';
                }
            }
            else {
                var propName = cacheKey.shift();
                internalCacheKey = createCacheKey(propName, cacheKey, prefix);
            }
            if (prefix) {
                this.cache.forEach(function (val, key) {
                    if (key.startsWith(internalCacheKey)) {
                        _this.cache.delete(key);
                    }
                });
            }
            else {
                this.cache.delete(internalCacheKey);
            }
        };
        class_1.prototype._cleanCache = function () {
            var _this = this;
            var now = Date.now();
            this.cache.forEach(function (val, key) {
                if (val.expires < now) {
                    _this.cache.delete(key);
                }
            });
        };
        return class_1;
    }(cls));
}
//# sourceMappingURL=Cacheable.js.map
// CONCATENATED MODULE: ./node_modules/@d-fischer/cache-decorators/es/decorators/Cached.js


function Cached(timeInSeconds, cacheFailures) {
    if (timeInSeconds === void 0) { timeInSeconds = Infinity; }
    if (cacheFailures === void 0) { cacheFailures = false; }
    return function (target, propName, descriptor) {
        var origFn = descriptor.value;
        descriptor.value = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var cacheKey, cachedValue, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cacheKey = createCacheKey(propName, params);
                            cachedValue = this.getFromCache(cacheKey);
                            if (cachedValue) {
                                return [2 /*return*/, cachedValue];
                            }
                            return [4 /*yield*/, origFn.apply(this, params)];
                        case 1:
                            result = _a.sent();
                            if (result != null || cacheFailures) {
                                this.setCache(cacheKey, result, timeInSeconds);
                            }
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        return descriptor;
    };
}
//# sourceMappingURL=Cached.js.map
// CONCATENATED MODULE: ./node_modules/@d-fischer/cache-decorators/es/decorators/CachedGetter.js

function CachedGetter(timeInSeconds) {
    if (timeInSeconds === void 0) { timeInSeconds = Infinity; }
    return function (target, propName, descriptor) {
        if (descriptor.get) {
            var origFn_1 = descriptor.get;
            descriptor.get = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                var cacheKey = createCacheKey(propName, params);
                var cachedValue = this.getFromCache(cacheKey);
                if (cachedValue) {
                    return cachedValue;
                }
                var result = origFn_1.apply(this, params);
                this.setCache(cacheKey, result, timeInSeconds);
                return result;
            };
        }
        return descriptor;
    };
}
//# sourceMappingURL=CachedGetter.js.map
// CONCATENATED MODULE: ./node_modules/@d-fischer/cache-decorators/es/decorators/ClearsCache.js

function ClearsCache(cacheName, numberOfArguments) {
    return function (target, propName, descriptor) {
        var origFn = descriptor.value;
        descriptor.value = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var result, args;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, origFn.apply(this, params)];
                        case 1:
                            result = _a.sent();
                            args = numberOfArguments === undefined ? params.slice() : params.slice(0, numberOfArguments);
                            this.removeFromCache(__spread([cacheName], args), true);
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        return descriptor;
    };
}
//# sourceMappingURL=ClearsCache.js.map
// CONCATENATED MODULE: ./node_modules/@d-fischer/cache-decorators/es/index.js





//# sourceMappingURL=index.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Extracts the user ID from an argument that is possibly an object containing that ID.
 *
 * @param user The user ID or object.
 */
function extractUserId(user) {
    if (typeof user === 'string') {
        return user;
    }
    else if (typeof user === 'number') {
        return user.toString(10);
    }
    else {
        return user.id;
    }
}
exports.extractUserId = extractUserId;
/**
 * Extracts the user name from an argument that is possibly an object containing that name.
 *
 * @param user The user name or object.
 */
function extractUserName(user) {
    return typeof user === 'string' ? user : user.name;
}
exports.extractUserName = extractUserName;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES5Type = __webpack_require__(151);

// https://ecma-international.org/ecma-262/6.0/#sec-ecmascript-data-types-and-values

module.exports = function Type(x) {
	if (typeof x === 'symbol') {
		return 'Symbol';
	}
	return ES5Type(x);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var callBind = __webpack_require__(34);

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/// <reference lib="esnext.asynciterable" />
var shared_utils_1 = __webpack_require__(1);
var TwitchClient_1 = __webpack_require__(4);
if (!Object.prototype.hasOwnProperty.call(Symbol, 'asyncIterator')) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Symbol.asyncIterator = Symbol.asyncIterator || Symbol.for('Symbol.asyncIterator');
}
/**
 * Represents a request to the new Twitch API (Helix) that utilizes a cursor to paginate through its results.
 *
 * Aside from the methods described below, you can also utilize the async iterator using `for await .. of`:
 *
 * ```ts
 * const result = client.helix.videos.getVideosByUser('125328655');
 * for await (const video of result) {
 *     console.log(video.title);
 * }
 * ```
 */
var HelixPaginatedRequest = /** @class */ (function () {
    /** @private */
    function HelixPaginatedRequest(_callOptions, client, _mapper) {
        this._callOptions = _callOptions;
        this._mapper = _mapper;
        /** @private */
        this._isFinished = false;
        this._client = client;
    }
    Object.defineProperty(HelixPaginatedRequest.prototype, "current", {
        /**
         * The last retrieved page of data associated to the requested resource.
         *
         * Only works with {@HelixPaginatedRequest#getNext} and not with any other methods of data retrieval.
         */
        get: function () {
            return this._currentData ? this._currentData.data : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves and returns the next available page of data associated to the requested resource, or an empty array if there are no more available pages.
     */
    HelixPaginatedRequest.prototype.getNext = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._isFinished) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this._fetchData()];
                    case 1:
                        result = _a.sent();
                        if (!result.data.length) {
                            this._isFinished = true;
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/, this._processResult(result)];
                }
            });
        });
    };
    /**
     * Retrieves and returns all data associated to the requested resource.
     *
     * Be aware that this makes multiple calls to the Twitch API. Due to this, you might be more suspectible to rate limits.
     *
     * Also be aware that this resets the internal cursor, so avoid using this and {@HelixPaginatedRequest#getNext} together.
     */
    HelixPaginatedRequest.prototype.getAll = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.reset();
                        result = [];
                        _a.label = 1;
                    case 1: return [4 /*yield*/, this.getNext()];
                    case 2:
                        data = _a.sent();
                        if (!data.length) {
                            return [3 /*break*/, 4];
                        }
                        result.push.apply(result, tslib_1.__spread(data));
                        _a.label = 3;
                    case 3:
                        if (this._currentCursor) return [3 /*break*/, 1];
                        _a.label = 4;
                    case 4:
                        this.reset();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    Object.defineProperty(HelixPaginatedRequest.prototype, "currentCursor", {
        /**
         * Retrieves the current cursor.
         *
         * Only useful if you want to make manual requests to the API.
         */
        get: function () {
            return this._currentCursor;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Resets the internal cursor.
     *
     * This will make {@HelixPaginatedRequest#getNext} start from the first page again.
     */
    HelixPaginatedRequest.prototype.reset = function () {
        this._currentCursor = undefined;
        this._isFinished = false;
        this._currentData = undefined;
    };
    HelixPaginatedRequest.prototype[Symbol.asyncIterator] = function () {
        return tslib_1.__asyncGenerator(this, arguments, function _a() {
            var data;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.reset();
                        _b.label = 1;
                    case 1:
                        if (false) {}
                        return [4 /*yield*/, tslib_1.__await(this.getNext())];
                    case 2:
                        data = _b.sent();
                        if (!data.length) {
                            return [3 /*break*/, 5];
                        }
                        return [5 /*yield**/, tslib_1.__values(tslib_1.__asyncDelegator(tslib_1.__asyncValues(data[Symbol.iterator]())))];
                    case 3: return [4 /*yield*/, tslib_1.__await.apply(void 0, [_b.sent()])];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /** @private */
    HelixPaginatedRequest.prototype._fetchData = function (additionalOptions) {
        if (additionalOptions === void 0) { additionalOptions = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.callAPI(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ type: TwitchClient_1.TwitchAPICallType.Helix }, this._callOptions), additionalOptions), { query: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, this._callOptions.query), { after: this._currentCursor, first: '100' }), additionalOptions.query) }))];
            });
        });
    };
    /** @private */
    HelixPaginatedRequest.prototype._processResult = function (result) {
        var _this = this;
        this._currentCursor = result.pagination ? result.pagination.cursor : undefined;
        if (this._currentCursor === undefined) {
            this._isFinished = true;
        }
        this._currentData = result;
        return result.data.reduce(function (acc, elem) {
            var mapped = _this._mapper(elem);
            return Array.isArray(mapped) ? tslib_1.__spread(acc, mapped) : tslib_1.__spread(acc, [mapped]);
        }, []);
    };
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], HelixPaginatedRequest.prototype, "_client", void 0);
    return HelixPaginatedRequest;
}());
exports.default = HelixPaginatedRequest;
module.exports = exports = HelixPaginatedRequest;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixPaginatedRequest;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
var NoSubscriptionProgramError_1 = __webpack_require__(15);
var ChannelPlaceholder_1 = __webpack_require__(38);
/**
 * A Twitch user.
 */
var User = /** @class */ (function () {
    /** @private */
    function User(/** @private */ _data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(User.prototype, "cacheKey", {
        /** @private */
        get: function () {
            return this._data._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "id", {
        /**
         * The ID of the user.
         */
        get: function () {
            return this._data._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "bio", {
        /**
         * The bio of the user.
         */
        get: function () {
            return this._data.bio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "creationDate", {
        /**
         * The date when the user was created, i.e. when they registered on Twitch.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "updateDate", {
        /**
         * The last date when the user changed anything in their profile, e.g. their description or their profile picture.
         */
        get: function () {
            return new Date(this._data.updated_at);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        /**
         * The user name of the user.
         */
        get: function () {
            return this._data.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "displayName", {
        /**
         * The display name of the user.
         */
        get: function () {
            return this._data.display_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "logoUrl", {
        /**
         * The URL to the profile picture of the user.
         */
        get: function () {
            return this._data.logo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "type", {
        /**
         * The type of the user.
         */
        get: function () {
            return this._data.type;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves the channel data of the user.
     */
    User.prototype.getChannel = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.channels.getChannel(this)];
            });
        });
    };
    /**
     * Gets a channel placeholder object for the user, which can do anything you can do to a channel with just the ID.
     */
    User.prototype.getChannelPlaceholder = function () {
        return new ChannelPlaceholder_1.default(this._data._id, this._client);
    };
    /**
     * Retrieves the currently running stream of the user.
     */
    User.prototype.getStream = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.getChannelPlaceholder().getStream()];
            });
        });
    };
    /**
     * Retrieves the subscription data for the user to the given channel.
     *
     * Throws if the channel doesn't have a subscription program or the user is not subscribed to it.
     *
     * This method requires access to the user. If you only have access to the channel,
     * use {@ChannelPlaceholder#getSubscriptionBy} instead.
     *
     * @param channel The channel you want to get the subscription data for.
     */
    User.prototype.getSubscriptionTo = function (channel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.users.getSubscriptionData(this, channel)];
            });
        });
    };
    /**
     * Checks whether the user is subscribed to the given channel.
     *
     * @param channel The channel you want to check the subscription for.
     */
    User.prototype.isSubscribedTo = function (channel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getSubscriptionTo(channel)];
                    case 1: return [2 /*return*/, (_a.sent()) !== null];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 instanceof NoSubscriptionProgramError_1.default) {
                            return [2 /*return*/, false];
                        }
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves a list of channels followed by the user.
     *
     * @param page The result page you want to retrieve.
     * @param limit The number of results you want to retrieve.
     * @param orderBy The field to order by.
     * @param orderDirection The direction to order in - ascending or descending.
     */
    User.prototype.getFollows = function (page, limit, orderBy, orderDirection) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.users.getFollowedChannels(this, page, limit, orderBy, orderDirection)];
            });
        });
    };
    /**
     * Retrieves the follow data of the user to a given channel.
     *
     * @param channel The channel to retrieve the follow data for.
     */
    User.prototype.getFollowTo = function (channel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.users.getFollowedChannel(this, channel)];
            });
        });
    };
    /**
     * Checks whether the user is following the given channel.
     *
     * @param channel The channel to check for the user's follow.
     */
    User.prototype.follows = function (channel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getFollowTo(channel)];
                    case 1: return [2 /*return*/, (_a.sent()) !== null];
                    case 2:
                        e_2 = _a.sent();
                        throw e_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Follows the channel with the authenticated user.
     */
    User.prototype.follow = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var currentUser;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.kraken.users.getMe()];
                    case 1:
                        currentUser = _a.sent();
                        return [2 /*return*/, currentUser.followChannel(this)];
                }
            });
        });
    };
    /**
     * Unfollows the channel with the authenticated user.
     */
    User.prototype.unfollow = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var currentUser;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.kraken.users.getMe()];
                    case 1:
                        currentUser = _a.sent();
                        return [2 /*return*/, currentUser.unfollowChannel(this)];
                }
            });
        });
    };
    /**
     * Retrieves the emotes the user can use.
     */
    User.prototype.getEmotes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.users.getUserEmotes(this)];
            });
        });
    };
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], User.prototype, "_client", void 0);
    return User;
}());
exports.default = User;
module.exports = exports = User;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = User;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** @private */
function createPaginatedResult(response, type, client) {
    var _a, _b, _c;
    return {
        data: (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.map(function (data) { return new type(data, client); }), (_b !== null && _b !== void 0 ? _b : [])),
        cursor: (_c = response.pagination) === null || _c === void 0 ? void 0 : _c.cursor
    };
}
exports.createPaginatedResult = createPaginatedResult;
/** @private */
function createPaginatedResultWithTotal(response, type, client) {
    return {
        data: response.data.map(function (data) { return new type(data, client); }),
        cursor: response.pagination.cursor,
        total: response.total
    };
}
exports.createPaginatedResultWithTotal = createPaginatedResultWithTotal;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/** @private */
var CustomError = /** @class */ (function (_super) {
    tslib_1.__extends(CustomError, _super);
    function CustomError() {
        var _newTarget = this.constructor;
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var _this = _super.apply(this, tslib_1.__spread(params)) || this;
        // restore prototype chain
        var actualProto = _newTarget.prototype;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_this, actualProto);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            _this.__proto__ = actualProto;
        }
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, _newTarget.constructor);
        }
        return _this;
    }
    Object.defineProperty(CustomError.prototype, "name", {
        get: function () {
            return this.constructor.name;
        },
        enumerable: true,
        configurable: true
    });
    return CustomError;
}(Error));
exports.default = CustomError;
module.exports = exports = CustomError;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CustomError;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var ChannelPlaceholder_1 = __webpack_require__(38);
/**
 * A Twitch Channel.
 */
var Channel = /** @class */ (function (_super) {
    tslib_1.__extends(Channel, _super);
    /** @private */
    function Channel(data, client) {
        var _this = _super.call(this, data._id, client) || this;
        _this._data = data;
        return _this;
    }
    // override parent's method so we avoid the API/cache request here if someone wrongly assumes this is a placeholder
    /** @private */
    Channel.prototype.getChannel = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this];
            });
        });
    };
    /**
     * Retrieves a list of the teams of the channel.
     */
    Channel.prototype.getTeams = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.channels.getChannelTeams(this._data._id)];
            });
        });
    };
    /**
     * Updates the game, title or delay of a channel or toggles the channel feed.
     */
    Channel.prototype.update = function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.channels.updateChannel(this, data)];
            });
        });
    };
    Object.defineProperty(Channel.prototype, "name", {
        /**
         * The name of the channel.
         */
        get: function () {
            return this._data.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "displayName", {
        /**
         * The display name of the channel, with proper capitalization or as Asian script.
         */
        get: function () {
            return this._data.display_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "broadcasterLanguage", {
        /**
         * The broadcaster's language.
         */
        get: function () {
            return this._data.broadcaster_language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "broadcasterType", {
        /**
         * The broadcaster's type, i.e. "partner", "affiliate" or "" (empty string, so neither of them).
         */
        get: function () {
            return this._data.broadcaster_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "creationDate", {
        /**
         * The date when the channel was created.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "description", {
        /**
         * The description of the channel.
         */
        get: function () {
            return this._data.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "followers", {
        /**
         * The number of people following the channel.
         */
        get: function () {
            return this._data.followers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "game", {
        /**
         * The game that is currently being played on the channel (or was played when it was last online).
         */
        get: function () {
            return this._data.game;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "language", {
        /**
         * The language of the channel.
         */
        get: function () {
            return this._data.language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "logo", {
        /**
         * The URL to the logo of the channel.
         */
        get: function () {
            return this._data.logo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "isMature", {
        /**
         * Whether the channel is flagged as suitable for mature audiences only.
         */
        get: function () {
            return this._data.mature;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "isPartner", {
        /**
         * Whether the channel is partnered.
         */
        get: function () {
            return this._data.partner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "profileBanner", {
        /**
         * The URL to the profile's banner image.
         */
        get: function () {
            return this._data.profile_banner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "profileBannerBackgroundColor", {
        /**
         * The background color of the profile's banner.
         */
        get: function () {
            return this._data.profile_banner_background_color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "status", {
        /**
         * The current status message (i.e. the title) of the channel.
         */
        get: function () {
            return this._data.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "updateDate", {
        /**
         * The date when the channel was last updated.
         */
        get: function () {
            return new Date(this._data.updated_at);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "url", {
        /**
         * The URL to the channel.
         */
        get: function () {
            return this._data.url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "videoBanner", {
        /**
         * The URL to the channel's video banner, i.e. the offline image.
         */
        get: function () {
            return this._data.video_banner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "views", {
        /**
         * The total number of views of the channel.
         */
        get: function () {
            return this._data.views;
        },
        enumerable: true,
        configurable: true
    });
    return Channel;
}(ChannelPlaceholder_1.default));
exports.default = Channel;
module.exports = exports = Channel;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Channel;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = false;



/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var CustomError_1 = __webpack_require__(12);
/**
 * Thrown whenever you try accessing a subscription-related resource
 * (for example {@ChannelAPI#getChannelSubscriptions})
 * and the given channel does not have a subscription program.
 */
var NoSubscriptionProgramError = /** @class */ (function (_super) {
    tslib_1.__extends(NoSubscriptionProgramError, _super);
    /** @private */
    function NoSubscriptionProgramError(channelId) {
        return _super.call(this, "Channel " + channelId + " does not have a subscription program") || this;
    }
    return NoSubscriptionProgramError;
}(CustomError_1.default));
exports.default = NoSubscriptionProgramError;
module.exports = exports = NoSubscriptionProgramError;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NoSubscriptionProgramError;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://www.ecma-international.org/ecma-262/6.0/#sec-ispropertykey

module.exports = function IsPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(35);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** @private */
function makePaginationQuery(_a) {
    var _b = _a === void 0 ? {} : _a, after = _b.after, before = _b.before, limit = _b.limit;
    return {
        after: after,
        before: before,
        first: limit
    };
}
exports.makePaginationQuery = makePaginationQuery;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var CustomError_1 = __webpack_require__(12);
/**
 * Thrown whenever a HTTP error occurs. Some HTTP errors are handled in the library when they're expected.
 */
var HTTPStatusCodeError = /** @class */ (function (_super) {
    tslib_1.__extends(HTTPStatusCodeError, _super);
    /** @private */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function HTTPStatusCodeError(statusCode, statusText, body) {
        var _this = _super.call(this, "Encountered HTTP status code " + statusCode + ": " + statusText + "\n\nBody:\n" + JSON.stringify(body, null, 2)) || this;
        _this._statusCode = statusCode;
        _this._body = body;
        return _this;
    }
    Object.defineProperty(HTTPStatusCodeError.prototype, "statusCode", {
        get: function () {
            return this._statusCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HTTPStatusCodeError.prototype, "body", {
        get: function () {
            return this._body;
        },
        enumerable: true,
        configurable: true
    });
    return HTTPStatusCodeError;
}(CustomError_1.default));
exports.default = HTTPStatusCodeError;
module.exports = exports = HTTPStatusCodeError;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HTTPStatusCodeError;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var CustomError_1 = __webpack_require__(12);
/**
 * These are the kind of errors that should never happen.
 *
 * If you see one thrown, please file a bug in the GitHub issue tracker.
 */
var HellFreezesOverError = /** @class */ (function (_super) {
    tslib_1.__extends(HellFreezesOverError, _super);
    function HellFreezesOverError(message) {
        return _super.call(this, message + " - this should never happen, please file a bug in the GitHub issue tracker") || this;
    }
    return HellFreezesOverError;
}(CustomError_1.default));
exports.default = HellFreezesOverError;
module.exports = exports = HellFreezesOverError;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HellFreezesOverError;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var isNode = __webpack_require__(14);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["CRITICAL"] = 0] = "CRITICAL";
    LogLevel[LogLevel["ERROR"] = 1] = "ERROR";
    LogLevel[LogLevel["WARNING"] = 2] = "WARNING";
    LogLevel[LogLevel["INFO"] = 3] = "INFO";
    /** @deprecated use DEBUG instead */
    LogLevel[LogLevel["DEBUG1"] = 4] = "DEBUG1";
    /** @deprecated use DEBUG instead */
    LogLevel[LogLevel["DEBUG2"] = 4] = "DEBUG2";
    /** @deprecated use DEBUG instead */
    LogLevel[LogLevel["DEBUG3"] = 4] = "DEBUG3";
    LogLevel[LogLevel["DEBUG"] = 4] = "DEBUG";
    LogLevel[LogLevel["TRACE"] = 7] = "TRACE";
})(LogLevel || (LogLevel = {}));
exports.default = LogLevel;
function resolveLogLevel(level) {
    if (typeof level === 'number') {
        if (Object.prototype.hasOwnProperty.call(LogLevel, level)) {
            return level;
        }
        var eligibleLevels = Object.keys(LogLevel)
            .map(function (k) { return parseInt(k, 10); })
            .filter(function (k) { return !isNaN(k) && k < level; });
        if (!eligibleLevels) {
            return LogLevel.WARNING;
        }
        return Math.max.apply(Math, eligibleLevels);
    }
    var strLevel = level.toUpperCase();
    if (!Object.prototype.hasOwnProperty.call(LogLevel, strLevel)) {
        throw new Error("Unknown log level string: " + strLevel);
    }
    return LogLevel[strLevel];
}
exports.resolveLogLevel = resolveLogLevel;
// Node 8+ defines console.debug as noop, and earlier versions don't define it at all
var debugFunction = isNode ? console.log.bind(console) : console.debug.bind(console);
var __export_LogLevelToConsoleFunction = (_a = {},
    _a[LogLevel.CRITICAL] = console.error.bind(console),
    _a[LogLevel.ERROR] = console.error.bind(console),
    _a[LogLevel.WARNING] = console.warn.bind(console),
    _a[LogLevel.INFO] = console.info.bind(console),
    _a[LogLevel.DEBUG] = debugFunction.bind(console),
    _a[LogLevel.TRACE] = console.trace.bind(console),
    _a);
exports.LogLevelToConsoleFunction = __export_LogLevelToConsoleFunction;
module.exports = exports = LogLevel;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LogLevel;
exports.resolveLogLevel = resolveLogLevel;
exports.LogLevelToConsoleFunction = __export_LogLevelToConsoleFunction;
//# sourceMappingURL=LogLevel.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var isNode = __webpack_require__(14);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["CRITICAL"] = 0] = "CRITICAL";
    LogLevel[LogLevel["ERROR"] = 1] = "ERROR";
    LogLevel[LogLevel["WARNING"] = 2] = "WARNING";
    LogLevel[LogLevel["INFO"] = 3] = "INFO";
    /** @deprecated use DEBUG instead */
    LogLevel[LogLevel["DEBUG1"] = 4] = "DEBUG1";
    /** @deprecated use DEBUG instead */
    LogLevel[LogLevel["DEBUG2"] = 4] = "DEBUG2";
    /** @deprecated use DEBUG instead */
    LogLevel[LogLevel["DEBUG3"] = 4] = "DEBUG3";
    LogLevel[LogLevel["DEBUG"] = 4] = "DEBUG";
    LogLevel[LogLevel["TRACE"] = 7] = "TRACE";
})(LogLevel || (LogLevel = {}));
exports.LogLevel = LogLevel;
function resolveLogLevel(level) {
    if (typeof level === 'number') {
        if (Object.prototype.hasOwnProperty.call(LogLevel, level)) {
            return level;
        }
        var eligibleLevels = Object.keys(LogLevel)
            .map(function (k) { return parseInt(k, 10); })
            .filter(function (k) { return !isNaN(k) && k < level; });
        if (!eligibleLevels) {
            return LogLevel.WARNING;
        }
        return Math.max.apply(Math, eligibleLevels);
    }
    var strLevel = level.toUpperCase();
    if (!Object.prototype.hasOwnProperty.call(LogLevel, strLevel)) {
        throw new Error("Unknown log level string: " + strLevel);
    }
    return LogLevel[strLevel];
}
exports.resolveLogLevel = resolveLogLevel;
// Node 8+ defines console.debug as noop, and earlier versions don't define it at all
var debugFunction = isNode ? console.log.bind(console) : console.debug.bind(console);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.LogLevelToConsoleFunction = (_a = {},
    _a[LogLevel.CRITICAL] = console.error.bind(console),
    _a[LogLevel.ERROR] = console.error.bind(console),
    _a[LogLevel.WARNING] = console.warn.bind(console),
    _a[LogLevel.INFO] = console.info.bind(console),
    _a[LogLevel.DEBUG] = debugFunction.bind(console),
    _a[LogLevel.TRACE] = console.trace.bind(console),
    _a);
//# sourceMappingURL=LogLevel.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(66);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(147)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(148);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function requirePromise() {
	if (typeof Promise !== 'function') {
		throw new TypeError('`Promise.allSettled` requires a global `Promise` be available.');
	}
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the data of an OAuth access token returned by Twitch.
 */
var AccessToken = /** @class */ (function () {
    /** @private */
    function AccessToken(_data, obtainmentDate) {
        this._data = _data;
        this._obtainmentDate = obtainmentDate || new Date();
    }
    Object.defineProperty(AccessToken.prototype, "accessToken", {
        /**
         * The access token which is necessary for every request to the Twitch API.
         */
        get: function () {
            return this._data.access_token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessToken.prototype, "refreshToken", {
        /**
         * The refresh token which is necessary to refresh the access token once it expires.
         */
        get: function () {
            return this._data.refresh_token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessToken.prototype, "expiryDate", {
        /**
         * The time when the access token will expire.
         *
         * May be `null`, in which case the token does not expire.
         * This can only be the case with very old Client IDs.
         */
        get: function () {
            if (!this._data.expires_in) {
                return null;
            }
            return new Date(this._obtainmentDate.getTime() + this._data.expires_in * 1000);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessToken.prototype, "isExpired", {
        get: function () {
            if (!this._data.expires_in) {
                return false;
            }
            return Date.now() > this._obtainmentDate.getTime() + this._data.expires_in * 1000;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessToken.prototype, "scope", {
        /**
         * The scope the access token is valid for, i.e. what this token enables you to do.
         */
        get: function () {
            return this._data.scope || [];
        },
        enumerable: true,
        configurable: true
    });
    return AccessToken;
}());
exports.default = AccessToken;
module.exports = exports = AccessToken;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AccessToken;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
function arrayToObject(arr, fn) {
    return Object.assign.apply(Object, tslib_1.__spread([{}], arr.map(fn)));
}
exports.arrayToObject = arrayToObject;
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToObject = arrayToObject;
//# sourceMappingURL=arrayToObject.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
/**
 * Information about the ban of a user.
 */
var HelixBan = /** @class */ (function () {
    /** @private */
    function HelixBan(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(HelixBan.prototype, "userId", {
        /**
         * The ID of the user.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves more data about the user.
     */
    HelixBan.prototype.getUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    Object.defineProperty(HelixBan.prototype, "userName", {
        /**
         * The name of the user.
         */
        get: function () {
            return this._data.user_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixBan.prototype, "expiryDate", {
        /**
         * The date when the ban will expire; null for permanent bans.
         */
        get: function () {
            return this._data.expires_at ? new Date(this._data.expires_at) : null;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], HelixBan.prototype, "_client", void 0);
    return HelixBan;
}());
exports.default = HelixBan;
module.exports = exports = HelixBan;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixBan;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
/**
 * Information about the moderator status of a user.
 */
var HelixModerator = /** @class */ (function () {
    /** @private */
    function HelixModerator(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(HelixModerator.prototype, "userId", {
        /**
         * The ID of the user.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves more data about the user.
     */
    HelixModerator.prototype.getUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    Object.defineProperty(HelixModerator.prototype, "userName", {
        /**
         * The name of the user.
         */
        get: function () {
            return this._data.user_name;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], HelixModerator.prototype, "_client", void 0);
    return HelixModerator;
}());
exports.default = HelixModerator;
module.exports = exports = HelixModerator;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixModerator;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
/**
 * A (paid) subscription of a user to a broadcaster.
 */
var HelixSubscription = /** @class */ (function () {
    /** @private */
    function HelixSubscription(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(HelixSubscription.prototype, "broadcasterId", {
        /**
         * The user ID of the broadcaster.
         */
        get: function () {
            return this._data.broadcaster_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixSubscription.prototype, "broadcasterDisplayName", {
        /**
         * The display name of the broadcaster.
         */
        get: function () {
            return this._data.broadcaster_name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves more data about the broadcaster.
     */
    HelixSubscription.prototype.getBroadcaster = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this.broadcasterId)];
            });
        });
    };
    Object.defineProperty(HelixSubscription.prototype, "isGift", {
        /**
         * Whether the subscription has been gifted by another user.
         */
        get: function () {
            return this._data.is_gift;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixSubscription.prototype, "tier", {
        /**
         * The tier of the subscription.
         */
        get: function () {
            return this._data.tier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixSubscription.prototype, "userId", {
        /**
         * The user ID of the subscribed user.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixSubscription.prototype, "userDisplayName", {
        /**
         * The display name of the subscribed user.
         */
        get: function () {
            return this._data.user_name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves more data about the subscribed user.
     */
    HelixSubscription.prototype.getUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this.userId)];
            });
        });
    };
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], HelixSubscription.prototype, "_client", void 0);
    return HelixSubscription;
}());
exports.default = HelixSubscription;
module.exports = exports = HelixSubscription;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixSubscription;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
var NoSubscriptionProgramError_1 = __webpack_require__(15);
/**
 * The type of a broadcaster.
 */
var HelixBroadcasterType;
(function (HelixBroadcasterType) {
    /**
     * A Twitch Partner.
     */
    HelixBroadcasterType["Partner"] = "partner";
    /**
     * A Twitch Affiliate.
     */
    HelixBroadcasterType["Affiliate"] = "affiliate";
    /**
     * A user that's neither a partner nor an affiliate.
     */
    HelixBroadcasterType["None"] = "";
})(HelixBroadcasterType || (HelixBroadcasterType = {}));
exports.HelixBroadcasterType = HelixBroadcasterType;
/**
 * The type of a user.
 */
var HelixUserType;
(function (HelixUserType) {
    /**
     * A Twitch staff member.
     */
    HelixUserType["Staff"] = "staff";
    /**
     * A Twitch administrator.
     */
    HelixUserType["Admin"] = "admin";
    /**
     * A global moderator.
     */
    HelixUserType["GlobalMod"] = "global_mod";
    /**
     * A user with no special permissions across Twitch.
     */
    HelixUserType["None"] = "";
})(HelixUserType || (HelixUserType = {}));
exports.HelixUserType = HelixUserType;
/**
 * A Twitch user.
 */
var HelixUser = /** @class */ (function () {
    /** @private */
    function HelixUser(/** @private */ _data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(HelixUser.prototype, "cacheKey", {
        /** @private */
        get: function () {
            return this._data.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "id", {
        /**
         * The ID of the user.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "name", {
        /**
         * The user name of the user.
         */
        get: function () {
            return this._data.login;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "displayName", {
        /**
         * The display name of the user.
         */
        get: function () {
            return this._data.display_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "description", {
        /**
         * The description of the user.
         */
        get: function () {
            return this._data.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "type", {
        /**
         * The type of the user.
         */
        get: function () {
            return this._data.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "broadcasterType", {
        /**
         * The type of the user.
         */
        get: function () {
            return this._data.broadcaster_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "profilePictureUrl", {
        /**
         * The URL to the profile picture of the user.
         */
        get: function () {
            return this._data.profile_image_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "offlinePlaceholderUrl", {
        /**
         * The URL to the offline video placeholder of the user.
         */
        get: function () {
            return this._data.offline_image_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "views", {
        /**
         * The total number of views of the user's channel.
         */
        get: function () {
            return this._data.view_count;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves the channel's stream data.
     */
    HelixUser.prototype.getStream = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.streams.getStreamByUserId(this)];
            });
        });
    };
    /**
     * Retrieves a list of broadcasters the user follows.
     */
    HelixUser.prototype.getFollows = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getFollows({ user: this })];
            });
        });
    };
    /**
     * Retrieves the follow data of the user to the given broadcaster.
     *
     * @param broadcaster The broadcaster to check the follow to.
     */
    HelixUser.prototype.getFollowTo = function (broadcaster) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var params, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            user: this.id,
                            followedUser: broadcaster
                        };
                        return [4 /*yield*/, this._client.helix.users.getFollows(params)];
                    case 1:
                        result = (_a.sent()).data;
                        return [2 /*return*/, result.length ? result[0] : null];
                }
            });
        });
    };
    /**
     * Checks whether the user is following the given broadcaster.
     *
     * @param broadcaster The broadcaster to check the user's follow to.
     */
    HelixUser.prototype.follows = function (broadcaster) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFollowTo(broadcaster)];
                    case 1: return [2 /*return*/, (_a.sent()) !== null];
                }
            });
        });
    };
    /**
     * Follows the broadcaster.
     */
    HelixUser.prototype.follow = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var currentUser;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.kraken.users.getMe()];
                    case 1:
                        currentUser = _a.sent();
                        return [2 /*return*/, currentUser.followChannel(this)];
                }
            });
        });
    };
    /**
     * Unfollows the broadcaster.
     */
    HelixUser.prototype.unfollow = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var currentUser;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.kraken.users.getMe()];
                    case 1:
                        currentUser = _a.sent();
                        return [2 /*return*/, currentUser.unfollowChannel(this)];
                }
            });
        });
    };
    /**
     * Retrieves the subscription data for the user to the given broadcaster, or `null` if the user is not subscribed.
     *
     * @param broadcaster The broadcaster you want to get the subscription data for.
     */
    HelixUser.prototype.getSubscriptionTo = function (broadcaster) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.subscriptions.getSubscriptionForUser(broadcaster, this)];
            });
        });
    };
    /**
     * Checks whether the user is subscribed to the given broadcaster.
     *
     * @param broadcaster The broadcaster you want to check the subscription for.
     */
    HelixUser.prototype.isSubscribedTo = function (broadcaster) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getSubscriptionTo(broadcaster)];
                    case 1: return [2 /*return*/, (_a.sent()) !== null];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 instanceof NoSubscriptionProgramError_1.default) {
                            return [2 /*return*/, false];
                        }
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], HelixUser.prototype, "_client", void 0);
    return HelixUser;
}());
exports.default = HelixUser;
module.exports = exports = HelixUser;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixBroadcasterType = HelixBroadcasterType;
exports.HelixUserType = HelixUserType;
exports.default = HelixUser;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(35);

var GetIntrinsic = __webpack_require__(2);

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

module.exports = function callBind() {
	return $reflectApply(bind, $call, arguments);
};

module.exports.apply = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(146);

module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var has = __webpack_require__(17);

var predicates = {
	// https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
	'Property Descriptor': function isPropertyDescriptor(Type, Desc) {
		if (Type(Desc) !== 'Object') {
			return false;
		}
		var allowed = {
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Get]]': true,
			'[[Set]]': true,
			'[[Value]]': true,
			'[[Writable]]': true
		};

		for (var key in Desc) { // eslint-disable-line
			if (has(Desc, key) && !allowed[key]) {
				return false;
			}
		}

		var isData = has(Desc, '[[Value]]');
		var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
		if (isData && IsAccessor) {
			throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	}
};

module.exports = function assertRecord(Type, recordType, argumentName, value) {
	var predicate = predicates[recordType];
	if (typeof predicate !== 'function') {
		throw new $SyntaxError('unknown record type: ' + recordType);
	}
	if (!predicate(Type, value)) {
		throw new $TypeError(argumentName + ' must be a ' + recordType);
	}
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
var HellFreezesOverError_1 = __webpack_require__(20);
/**
 * The type of background a cheermote is supposed to appear on.
 *
 * We will supply a fitting graphic that does not show any artifacts
 * on the given type of background.
 */
var CheermoteBackground;
(function (CheermoteBackground) {
    /**
     * A dark background.
     *
     * Cheermotes might show artifacts on bright backgrounds.
     */
    CheermoteBackground["dark"] = "dark";
    /**
     * A bright background.
     *
     * Cheermotes might show artifacts on dark backgrounds.
     */
    CheermoteBackground["light"] = "light";
})(CheermoteBackground || (CheermoteBackground = {}));
exports.CheermoteBackground = CheermoteBackground;
/**
 * The state of a cheermote, i.e. whether it's animated or not.
 */
var CheermoteState;
(function (CheermoteState) {
    /**
     * The cheermote should be animated.
     */
    CheermoteState["animated"] = "animated";
    /**
     * The cheermote should not be animated.
     */
    CheermoteState["static"] = "static";
})(CheermoteState || (CheermoteState = {}));
exports.CheermoteState = CheermoteState;
/**
 * The scale of the cheermote, which usually relates to the pixel density of the device in use.
 */
var CheermoteScale;
(function (CheermoteScale) {
    /**
     * The cheermote should not be scaled.
     */
    CheermoteScale["x1"] = "1";
    /**
     * The cheermote should be scaled 1.5x.
     */
    CheermoteScale["x1_5"] = "1.5";
    /**
     * The cheermote should be scaled 2x.
     */
    CheermoteScale["x2"] = "2";
    /**
     * The cheermote should be scaled 3x.
     */
    CheermoteScale["x3"] = "3";
    /**
     * The cheermote should be scaled 4x.
     */
    CheermoteScale["x4"] = "4";
})(CheermoteScale || (CheermoteScale = {}));
exports.CheermoteScale = CheermoteScale;
/**
 * A list of cheermotes you can use globally or in a specific channel, depending on how you fetched the list.
 */
var CheermoteList = /** @class */ (function () {
    /** @private */
    function CheermoteList(data, client) {
        this._client = client;
        this._data = shared_utils_1.indexBy(data, function (action) { return action.prefix.toLowerCase(); });
    }
    /**
     * Gets the URL and color needed to properly represent a cheer of the given amount of bits with the given prefix.
     *
     * @param name The name/prefix of the cheermote.
     * @param bits The amount of bits cheered.
     * @param format The format of the cheermote you want to request.
     */
    CheermoteList.prototype.getCheermoteDisplayInfo = function (name, bits, format) {
        if (format === void 0) { format = {}; }
        name = name.toLowerCase();
        var cheermoteDefaults = this._client.cheermoteDefaults;
        var fullOptions = tslib_1.__assign({ background: cheermoteDefaults.defaultBackground, state: cheermoteDefaults.defaultState, scale: cheermoteDefaults.defaultScale }, format);
        var tiers = this._data[name].tiers;
        var correctTier = tiers.sort(function (a, b) { return b.min_bits - a.min_bits; }).find(function (tier) { return tier.min_bits <= bits; });
        if (!correctTier) {
            throw new HellFreezesOverError_1.default("Cheermote \"" + name + "\" does not have an applicable tier for " + bits + " bits");
        }
        return {
            url: correctTier.images[fullOptions.background][fullOptions.state][fullOptions.scale],
            color: correctTier.color
        };
    };
    /**
     * Gets all possible cheermote names.
     */
    CheermoteList.prototype.getPossibleNames = function () {
        return Object.keys(this._data);
    };
    /**
     * Parses all the cheermotes out of a message.
     *
     * @param message The message.
     */
    CheermoteList.prototype.parseMessage = function (message) {
        var result = [];
        var names = this.getPossibleNames();
        // TODO fix this regex so it works in firefox, which does not support lookbehind
        var re = new RegExp('(?<=^|\\s)([a-z0-9]+?)(\\d+)(?=\\s|$)', 'gi');
        var match;
        while ((match = re.exec(message))) {
            var name_1 = match[1].toLowerCase();
            if (names.includes(name_1)) {
                var amount = Number(match[2]);
                result.push({
                    name: name_1,
                    amount: amount,
                    position: shared_utils_1.utf8Length(message.substr(0, match.index)),
                    length: match[0].length,
                    displayInfo: this.getCheermoteDisplayInfo(name_1, amount)
                });
            }
        }
        return result;
    };
    /**
     * Transforms all the cheermotes in a message and returns an array of all the message parts.
     *
     * @param message The message.
     * @param transformer A function that transforms a message part into an arbitrary structure.
     */
    CheermoteList.prototype.transformCheerMessage = function (message, transformer) {
        var e_1, _a;
        var result = [];
        var currentPosition = 0;
        try {
            for (var _b = tslib_1.__values(this.parseMessage(message)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var foundCheermote = _c.value;
                if (currentPosition < foundCheermote.position) {
                    result.push(message.substring(currentPosition, foundCheermote.position));
                }
                result.push(transformer(foundCheermote));
                currentPosition = foundCheermote.position + foundCheermote.length;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (currentPosition < message.length) {
            result.push(message.substr(currentPosition));
        }
        return result;
    };
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], CheermoteList.prototype, "_client", void 0);
    return CheermoteList;
}());
exports.default = CheermoteList;
module.exports = exports = CheermoteList;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheermoteBackground = CheermoteBackground;
exports.CheermoteState = CheermoteState;
exports.CheermoteScale = CheermoteScale;
exports.default = CheermoteList;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
var NoSubscriptionProgramError_1 = __webpack_require__(15);
/**
 * A placeholder for a channel.
 *
 * This is used for example when you only have retrieved user data, but not channel data.
 * This can do anything you can do with only a channel ID, as it's equivalent to the user ID.
 */
var ChannelPlaceholder = /** @class */ (function () {
    /** @private */
    function ChannelPlaceholder(id, client) {
        this._data = { _id: id };
        this._client = client;
    }
    Object.defineProperty(ChannelPlaceholder.prototype, "cacheKey", {
        /** @private */
        get: function () {
            return this._data._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChannelPlaceholder.prototype, "id", {
        /**
         * The ID of the channel.
         */
        get: function () {
            return this._data._id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves the list of cheermotes you can use in the channel.
     */
    ChannelPlaceholder.prototype.getCheermotes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.bits.getCheermotes(this)];
            });
        });
    };
    /**
     * Retrieves the channel data.
     */
    ChannelPlaceholder.prototype.getChannel = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.channels.getChannel(this)];
            });
        });
    };
    /**
     * Retrieves the channel's stream data.
     */
    ChannelPlaceholder.prototype.getStream = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.streams.getStreamByChannel(this)];
            });
        });
    };
    /**
     * Retrieves the channel's followers.
     */
    ChannelPlaceholder.prototype.getFollowers = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.channels.getChannelFollowers(this)];
            });
        });
    };
    /**
     * Retrieves the channel's subscribers.
     */
    ChannelPlaceholder.prototype.getSubscriptions = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.channels.getChannelSubscriptions(this)];
            });
        });
    };
    /**
     * Retrieves the subscription data for the given user to the channel.
     *
     * Throws if the channel doesn't have a subscription program or the user is not subscribed to it.
     *
     * This method requires access to the channel. If you only have access to the user,
     * use {@User#getSubscriptionTo} instead.
     *
     * @param user The user you want to get the subscription data for.
     */
    ChannelPlaceholder.prototype.getSubscriptionBy = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.channels.getChannelSubscriptionByUser(this, user)];
            });
        });
    };
    /**
     * Checks whether the given user is subscribed to the channel.
     *
     * @param user The user you want to check the subscription for.
     */
    ChannelPlaceholder.prototype.hasSubscriber = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getSubscriptionBy(user)];
                    case 1: return [2 /*return*/, (_a.sent()) !== null];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 instanceof NoSubscriptionProgramError_1.default) {
                            return [2 /*return*/, false];
                        }
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], ChannelPlaceholder.prototype, "_client", void 0);
    return ChannelPlaceholder;
}());
exports.default = ChannelPlaceholder;
module.exports = exports = ChannelPlaceholder;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChannelPlaceholder;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
/**
 * A subscription to a Twitch channel.
 */
var Subscription = /** @class */ (function () {
    /** @private */
    function Subscription(/** @private */ _data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(Subscription.prototype, "id", {
        /**
         * The ID of the subscription.
         */
        get: function () {
            return this._data._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Subscription.prototype, "subPlan", {
        /**
         * The identifier of the subscription plan.
         */
        get: function () {
            return this._data.sub_plan;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Subscription.prototype, "subPlanName", {
        /**
         * The name of the subscription plan.
         */
        get: function () {
            return this._data.sub_plan_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Subscription.prototype, "startDate", {
        /**
         * The date when the subscription was started.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], Subscription.prototype, "_client", void 0);
    return Subscription;
}());
exports.default = Subscription;
module.exports = exports = Subscription;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Subscription;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
/**
 * A Twitch team.
 */
var Team = /** @class */ (function () {
    /** @private */
    function Team(/** @private */ _data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(Team.prototype, "id", {
        /**
         * The ID of the team.
         */
        get: function () {
            return this._data._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "background", {
        /**
         * The background url of the team.
         */
        get: function () {
            return this._data.background;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "banner", {
        /**
         * The banner url of the team.
         */
        get: function () {
            return this._data.banner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "creationDate", {
        /**
         * The date when the team was created.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "updateDate", {
        /**
         * The last date when the team changed anything.
         */
        get: function () {
            return new Date(this._data.updated_at);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "name", {
        /**
         * The name of the team.
         */
        get: function () {
            return this._data.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "info", {
        /**
         * The info of the team.
         */
        get: function () {
            return this._data.info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "displayName", {
        /**
         * The display name of the team.
         */
        get: function () {
            return this._data.display_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "logoUrl", {
        /**
         * The URL to the profile picture of the team.
         */
        get: function () {
            return this._data.logo;
        },
        enumerable: true,
        configurable: true
    });
    Team.prototype.getUsers = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var team;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.kraken.teams.getTeamByName(this.name)];
                    case 1:
                        team = _a.sent();
                        return [2 /*return*/, team.getUsers()];
                }
            });
        });
    };
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], Team.prototype, "_client", void 0);
    return Team;
}());
exports.default = Team;
module.exports = exports = Team;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Team;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
var Channel_1 = __webpack_require__(13);
/**
 * The type of a stream.
 */
var StreamType;
(function (StreamType) {
    /**
     * A live stream.
     */
    StreamType["Live"] = "live";
    /**
     * An upload to the channel (VoD) that is streamed live for the first time.
     */
    StreamType["Premiere"] = "premiere";
    /**
     * A rerun of a past live stream.
     */
    StreamType["ReRun"] = "rerun";
    /**
     * All types of streams. Used for filtering.
     */
    StreamType["All"] = "all";
})(StreamType || (StreamType = {}));
exports.StreamType = StreamType;
/**
 * A Twitch stream.
 */
var Stream = /** @class */ (function () {
    /** @private */
    function Stream(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(Stream.prototype, "id", {
        /**
         * The ID of the stream.
         */
        get: function () {
            return this._data._id.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "game", {
        /**
         * The game played on the stream.
         */
        get: function () {
            return this._data.game;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "viewers", {
        /**
         * The current number of concurrent viewers.
         */
        get: function () {
            return this._data.viewers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "videoHeight", {
        /**
         * The height of the stream video.
         */
        get: function () {
            return this._data.video_height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "averageFPS", {
        /**
         * The average FPS (frames per second) that are shown on the stream.
         */
        get: function () {
            return this._data.average_fps;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "delay", {
        /**
         * The delay of the stream, in seconds.
         */
        get: function () {
            return this._data.delay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "startDate", {
        /**
         * The time when the stream started.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "isPlaylist", {
        /**
         * Whether the stream is running a playlist.
         */
        get: function () {
            return this._data.is_playlist;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "type", {
        /**
         * The type of the stream.
         */
        get: function () {
            return this._data.stream_type;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the URL of a preview image for the stream
     *
     * @param size The size of the image.
     */
    Stream.prototype.getPreviewUrl = function (size) {
        return this._data.preview[size];
    };
    Object.defineProperty(Stream.prototype, "channel", {
        /**
         * The channel where the stream is shown.
         */
        get: function () {
            return new Channel_1.default(this._data.channel, this._client);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], Stream.prototype, "_client", void 0);
    return Stream;
}());
exports.default = Stream;
module.exports = exports = Stream;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamType = StreamType;
exports.default = Stream;


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel_1 = __webpack_require__(21);
var isNode = __webpack_require__(14);
var BaseLogger = /** @class */ (function () {
    function BaseLogger(_a) {
        var name = _a.name, _b = _a.minLevel, minLevel = _b === void 0 ? LogLevel_1.default.WARNING : _b, _c = _a.emoji, emoji = _c === void 0 ? false : _c, _d = _a.colors, colors = _d === void 0 ? true : _d, _e = _a.timestamps, timestamps = _e === void 0 ? isNode : _e;
        this._name = name;
        this._minLevel = LogLevel_1.resolveLogLevel(minLevel);
        this._emoji = emoji;
        this._colors = colors;
        this._timestamps = timestamps;
    }
    // region convenience methods
    BaseLogger.prototype.crit = function (message) {
        this.log(LogLevel_1.default.CRITICAL, message);
    };
    BaseLogger.prototype.critical = function (message) {
        this.log(LogLevel_1.default.CRITICAL, message);
    };
    BaseLogger.prototype.err = function (message) {
        this.log(LogLevel_1.default.ERROR, message);
    };
    BaseLogger.prototype.error = function (message) {
        this.log(LogLevel_1.default.ERROR, message);
    };
    BaseLogger.prototype.warn = function (message) {
        this.log(LogLevel_1.default.WARNING, message);
    };
    BaseLogger.prototype.warning = function (message) {
        this.log(LogLevel_1.default.WARNING, message);
    };
    BaseLogger.prototype.info = function (message) {
        this.log(LogLevel_1.default.INFO, message);
    };
    BaseLogger.prototype.debug = function (message) {
        this.log(LogLevel_1.default.DEBUG, message);
    };
    /** @deprecated use debug instead */
    BaseLogger.prototype.debug1 = function (message) {
        this.log(LogLevel_1.default.DEBUG, message);
    };
    /** @deprecated use debug instead */
    BaseLogger.prototype.debug2 = function (message) {
        this.log(LogLevel_1.default.DEBUG, message);
    };
    /** @deprecated use debug instead */
    BaseLogger.prototype.debug3 = function (message) {
        this.log(LogLevel_1.default.DEBUG, message);
    };
    BaseLogger.prototype.trace = function (message) {
        this.log(LogLevel_1.default.TRACE, message);
    };
    return BaseLogger;
}());
exports.default = BaseLogger;
module.exports = exports = BaseLogger;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseLogger;
//# sourceMappingURL=BaseLogger.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__(26);

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = util.assign(
    {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        }
    },
    Format
);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
function pick(obj, keys) {
    return Object.assign.apply(Object, tslib_1.__spread([{}], Object.entries(obj)
        .filter(function (_a) {
        var _b = tslib_1.__read(_a, 1), key = _b[0];
        return keys.includes(key);
    })
        .map(function (_a) {
        var _b;
        var _c = tslib_1.__read(_a, 2), key = _c[0], value = _c[1];
        return (_b = {}, _b[key] = value, _b);
    })));
}
exports.pick = pick;
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = pick;
//# sourceMappingURL=pick.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
var ChatBadgeSet_1 = __webpack_require__(47);
/**
 * A list of badge sets.
 */
var ChatBadgeList = /** @class */ (function () {
    /** @private */
    function ChatBadgeList(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(ChatBadgeList.prototype, "badgeSetNames", {
        /**
         * Names of all badge sets in the list.
         */
        get: function () {
            return Object.keys(this._data);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a specific badge set by name.
     *
     * @param name The name of the badge set.
     */
    ChatBadgeList.prototype.getBadgeSet = function (name) {
        return new ChatBadgeSet_1.default(this._data[name], this._client);
    };
    /** @private */
    ChatBadgeList.prototype._merge = function (additionalData) {
        if (additionalData instanceof ChatBadgeList) {
            additionalData = additionalData._data;
        }
        return new ChatBadgeList(tslib_1.__assign(tslib_1.__assign({}, this._data), additionalData), this._client);
    };
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], ChatBadgeList.prototype, "_client", void 0);
    return ChatBadgeList;
}());
exports.default = ChatBadgeList;
module.exports = exports = ChatBadgeList;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatBadgeList;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
var ChatBadgeVersion_1 = __webpack_require__(48);
/**
 * A set of badges.
 */
var ChatBadgeSet = /** @class */ (function () {
    /** @private */
    function ChatBadgeSet(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(ChatBadgeSet.prototype, "versionNames", {
        /**
         * Names of all versions of the badge set.
         */
        get: function () {
            return Object.keys(this._data.versions);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a specific version of a badge by name.
     *
     * @param name The name of the version.
     */
    ChatBadgeSet.prototype.getVersion = function (name) {
        return new ChatBadgeVersion_1.default(this._data.versions[name], this._client);
    };
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], ChatBadgeSet.prototype, "_client", void 0);
    return ChatBadgeSet;
}());
exports.default = ChatBadgeSet;
module.exports = exports = ChatBadgeSet;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatBadgeSet;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
/**
 * A version of a badge.
 */
var ChatBadgeVersion = /** @class */ (function () {
    /** @private */
    function ChatBadgeVersion(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(ChatBadgeVersion.prototype, "clickAction", {
        /**
         * The action to execute when the badge is clicked.
         */
        get: function () {
            return this._data.click_action;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatBadgeVersion.prototype, "clickUrl", {
        /**
         * The URL to visit when the badge is clicked.
         *
         * Only applies if clickAction === 'visit_url'.
         */
        get: function () {
            return this._data.click_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatBadgeVersion.prototype, "description", {
        /**
         * The description of the badge.
         */
        get: function () {
            return this._data.description;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets an image URL for the given scale.
     *
     * @param scale The scale of the badge image.
     */
    ChatBadgeVersion.prototype.getImageUrl = function (scale) {
        return this._data["image_url_" + scale + "x"];
    };
    Object.defineProperty(ChatBadgeVersion.prototype, "title", {
        /**
         * The title of the badge.
         */
        get: function () {
            return this._data.title;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], ChatBadgeVersion.prototype, "_client", void 0);
    return ChatBadgeVersion;
}());
exports.default = ChatBadgeVersion;
module.exports = exports = ChatBadgeVersion;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatBadgeVersion;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var cache_decorators_1 = __webpack_require__(5);
var shared_utils_1 = __webpack_require__(1);
var HelixBitsLeaderboardEntry_1 = __webpack_require__(50);
/**
 * A leaderboard where the users who used the most bits to a broadcaster are listed.
 */
var HelixBitsLeaderboard = /** @class */ (function () {
    /** @private */
    function HelixBitsLeaderboard(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(HelixBitsLeaderboard.prototype, "entries", {
        /**
         * The entries of the leaderboard.
         */
        get: function () {
            var _this = this;
            return this._data.data.map(function (entry) { return new HelixBitsLeaderboardEntry_1.default(entry, _this._client); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixBitsLeaderboard.prototype, "totalCount", {
        /**
         * The total amount of people on the requested leaderboard.
         */
        get: function () {
            return this._data.total;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], HelixBitsLeaderboard.prototype, "_client", void 0);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixBitsLeaderboard.prototype, "entries", null);
    HelixBitsLeaderboard = tslib_1.__decorate([
        cache_decorators_1.Cacheable
    ], HelixBitsLeaderboard);
    return HelixBitsLeaderboard;
}());
exports.default = HelixBitsLeaderboard;
module.exports = exports = HelixBitsLeaderboard;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixBitsLeaderboard;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
/**
 * A Bits leaderboard entry.
 */
var HelixBitsLeaderboardEntry = /** @class */ (function () {
    /** @private */
    function HelixBitsLeaderboardEntry(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(HelixBitsLeaderboardEntry.prototype, "userId", {
        /**
         * The ID of the user on the leaderboard.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixBitsLeaderboardEntry.prototype, "userDisplayName", {
        /**
         * The display name of the user on the leaderboard.
         */
        get: function () {
            return this._data.user_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixBitsLeaderboardEntry.prototype, "rank", {
        /**
         * The position of the user on the leaderboard.
         */
        get: function () {
            return this._data.rank;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixBitsLeaderboardEntry.prototype, "amount", {
        /**
         * The amount of bits used in the given period of time.
         */
        get: function () {
            return this._data.score;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves the user that's on this place on the leaderboard.
     */
    HelixBitsLeaderboardEntry.prototype.getUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], HelixBitsLeaderboardEntry.prototype, "_client", void 0);
    return HelixBitsLeaderboardEntry;
}());
exports.default = HelixBitsLeaderboardEntry;
module.exports = exports = HelixBitsLeaderboardEntry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixBitsLeaderboardEntry;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
var HelixClip = /** @class */ (function () {
    /** @private */
    function HelixClip(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(HelixClip.prototype, "id", {
        /**
         * The clip ID.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "url", {
        /**
         * The URL of the clip.
         */
        get: function () {
            return this._data.url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "embedUrl", {
        /**
         * The embed URL of the clip.
         */
        get: function () {
            return this._data.embed_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "broadcasterId", {
        /**
         * The user ID of the broadcaster of the stream where the clip was created.
         */
        get: function () {
            return this._data.broadcaster_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "broadcasterDisplayName", {
        /**
         * The display name of the broadcaster of the stream where the clip was created.
         */
        get: function () {
            return this._data.broadcaster_name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves information about the broadcaster of the stream where the clip was created.
     */
    HelixClip.prototype.getBroadcaster = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.broadcaster_id)];
            });
        });
    };
    Object.defineProperty(HelixClip.prototype, "creatorId", {
        /**
         * The user ID of the creator of the clip.
         */
        get: function () {
            return this._data.creator_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "creatorDisplayName", {
        /**
         * The display name of the creator of the clip.
         */
        get: function () {
            return this._data.creator_name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves information about the creator of the clip.
     */
    HelixClip.prototype.getCreator = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.creator_id)];
            });
        });
    };
    Object.defineProperty(HelixClip.prototype, "videoId", {
        /**
         * The ID of the video the clip is taken from.
         */
        get: function () {
            return this._data.video_id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves information about the video the clip is taken from.
     */
    HelixClip.prototype.getVideo = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.videos.getVideoById(this._data.video_id)];
            });
        });
    };
    Object.defineProperty(HelixClip.prototype, "gameId", {
        /**
         * The ID of the game that was being played when the clip was created.
         */
        get: function () {
            return this._data.game_id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves information about the game that was being played when the clip was created.
     */
    HelixClip.prototype.getGame = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.games.getGameById(this._data.game_id)];
            });
        });
    };
    Object.defineProperty(HelixClip.prototype, "language", {
        /**
         * The language of the stream where the clip was created.
         */
        get: function () {
            return this._data.language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "title", {
        /**
         * The title of the clip.
         */
        get: function () {
            return this._data.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "views", {
        /**
         * The number of views of the clip.
         */
        get: function () {
            return this._data.view_count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "creationDate", {
        /**
         * The date when the clip was created.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "thumbnailUrl", {
        /**
         * The URL of the thumbnail of the clip.
         */
        get: function () {
            return this._data.thumbnail_url;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], HelixClip.prototype, "_client", void 0);
    return HelixClip;
}());
exports.default = HelixClip;
module.exports = exports = HelixClip;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixClip;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
/**
 * A bits transaction made inside an extension.
 */
var HelixExtensionTransaction = /** @class */ (function () {
    /** @private */
    function HelixExtensionTransaction(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(HelixExtensionTransaction.prototype, "id", {
        /**
         * The ID of the transaction.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "transactionDate", {
        /**
         * The time when the transaction was made.
         */
        get: function () {
            return new Date(this._data.timestamp);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "broadcasterId", {
        /**
         * The ID of the broadcaster that runs the extension on their channel.
         */
        get: function () {
            return this._data.broadcaster_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "broadcasterDisplayName", {
        /**
         * The display name of the broadcaster that runs the extension on their channel.
         */
        get: function () {
            return this._data.broadcaster_name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves information about the broadcaster that runs the extension on their channel.
     */
    HelixExtensionTransaction.prototype.getBroadcaster = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.broadcaster_id)];
            });
        });
    };
    Object.defineProperty(HelixExtensionTransaction.prototype, "userId", {
        /**
         * The ID of the user that made the transaction.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "userDisplayName", {
        /**
         * The display name of the user that made the transaction.
         */
        get: function () {
            return this._data.user_name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves information about the user that made the transaction.
     */
    HelixExtensionTransaction.prototype.getUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    Object.defineProperty(HelixExtensionTransaction.prototype, "productType", {
        /**
         * The product type. Currently always BITS_IN_EXTENSION.
         */
        get: function () {
            return this._data.product_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "productSKU", {
        /**
         * The product SKU.
         */
        get: function () {
            return this._data.product_data.sku;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "productCost", {
        /**
         * The cost of the product, in bits.
         */
        get: function () {
            return this._data.product_data.cost.amount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "productDisplayName", {
        /**
         * The display name of the product.
         */
        get: function () {
            return this._data.product_data.displayName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "productInDevelopment", {
        /**
         * Whether the product is in development.
         */
        get: function () {
            return this._data.product_data.inDevelopment;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], HelixExtensionTransaction.prototype, "_client", void 0);
    return HelixExtensionTransaction;
}());
exports.default = HelixExtensionTransaction;
module.exports = exports = HelixExtensionTransaction;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixExtensionTransaction;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
/**
 * A game as displayed on Twitch.
 */
var HelixGame = /** @class */ (function () {
    /** @private */
    function HelixGame(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(HelixGame.prototype, "id", {
        /**
         * The ID of the game.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixGame.prototype, "name", {
        /**
         * The name of the game.
         */
        get: function () {
            return this._data.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixGame.prototype, "boxArtUrl", {
        /**
         * The URL of the box art of the game.
         */
        get: function () {
            return this._data.box_art_url;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], HelixGame.prototype, "_client", void 0);
    return HelixGame;
}());
exports.default = HelixGame;
module.exports = exports = HelixGame;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixGame;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var HelixBan_1 = __webpack_require__(29);
/**
 * The different types a ban event can have.
 */
var HelixBanEventType;
(function (HelixBanEventType) {
    /**
     * Sent when a user gets banned.
     */
    HelixBanEventType["Ban"] = "moderation.user.ban";
    /**
     * Sent when a user gets unbanned.
     */
    HelixBanEventType["Unban"] = "moderation.user.unban";
})(HelixBanEventType || (HelixBanEventType = {}));
exports.HelixBanEventType = HelixBanEventType;
/**
 * An event that indicates the change of a ban status, i.e. banning or unbanning a user.
 */
var HelixBanEvent = /** @class */ (function (_super) {
    tslib_1.__extends(HelixBanEvent, _super);
    /** @private */
    function HelixBanEvent(_eventData, client) {
        var _this = _super.call(this, _eventData.event_data, client) || this;
        _this._eventData = _eventData;
        return _this;
    }
    Object.defineProperty(HelixBanEvent.prototype, "eventId", {
        /**
         * The unique ID of the ban event.
         */
        get: function () {
            return this._eventData.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixBanEvent.prototype, "eventType", {
        /**
         * The type of the ban event.
         */
        get: function () {
            return this._eventData.event_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixBanEvent.prototype, "eventDate", {
        /**
         * The date of the ban event.
         */
        get: function () {
            return new Date(this._eventData.event_timestamp);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixBanEvent.prototype, "eventVersion", {
        /**
         * The version of the ban event.
         */
        get: function () {
            return this._eventData.version;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixBanEvent.prototype, "broadcasterId", {
        /**
         * The id of the broadcaster from whose chat the user was banned/unbanned.
         */
        get: function () {
            return this._eventData.event_data.broadcaster_id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves more data about the broadcaster.
     */
    HelixBanEvent.prototype.getBroadcaster = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._eventData.event_data.broadcaster_id)];
            });
        });
    };
    Object.defineProperty(HelixBanEvent.prototype, "broadcasterName", {
        /**
         * The name of the broadcaster from whose chat the user was banned/unbanned.
         */
        get: function () {
            return this._eventData.event_data.broadcaster_id;
        },
        enumerable: true,
        configurable: true
    });
    return HelixBanEvent;
}(HelixBan_1.default));
exports.default = HelixBanEvent;
module.exports = exports = HelixBanEvent;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixBanEventType = HelixBanEventType;
exports.default = HelixBanEvent;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var HelixModerator_1 = __webpack_require__(30);
/**
 * The different types a moderator event can have.
 */
var HelixModeratorEventType;
(function (HelixModeratorEventType) {
    /**
     * Sent when a user gains moderation privileges.
     */
    HelixModeratorEventType["Add"] = "moderation.moderator.add";
    /**
     * Sent when a user loses moderation privileges.
     */
    HelixModeratorEventType["Remove"] = "moderation.moderator.remove";
})(HelixModeratorEventType || (HelixModeratorEventType = {}));
exports.HelixModeratorEventType = HelixModeratorEventType;
/**
 * An event that indicates the change of a moderator status, i.e. gaining or losing moderation privileges.
 */
var HelixModeratorEvent = /** @class */ (function (_super) {
    tslib_1.__extends(HelixModeratorEvent, _super);
    /** @private */
    function HelixModeratorEvent(_eventData, client) {
        var _this = _super.call(this, _eventData.event_data, client) || this;
        _this._eventData = _eventData;
        return _this;
    }
    Object.defineProperty(HelixModeratorEvent.prototype, "eventId", {
        /**
         * The unique ID of the moderator event.
         */
        get: function () {
            return this._eventData.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixModeratorEvent.prototype, "eventType", {
        /**
         * The type of the moderator event.
         */
        get: function () {
            return this._eventData.event_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixModeratorEvent.prototype, "eventDate", {
        /**
         * The date of the moderator event.
         */
        get: function () {
            return new Date(this._eventData.event_timestamp);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixModeratorEvent.prototype, "eventVersion", {
        /**
         * The version of the moderator event.
         */
        get: function () {
            return this._eventData.version;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixModeratorEvent.prototype, "broadcasterId", {
        /**
         * The id of the broadcaster where the user gained/lost moderation privileges.
         */
        get: function () {
            return this._eventData.event_data.broadcaster_id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves more data about the broadcaster.
     */
    HelixModeratorEvent.prototype.getBroadcaster = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._eventData.event_data.broadcaster_id)];
            });
        });
    };
    Object.defineProperty(HelixModeratorEvent.prototype, "broadcasterName", {
        /**
         * The name of the broadcaster where the user gained/lost moderation privileges.
         */
        get: function () {
            return this._eventData.event_data.broadcaster_id;
        },
        enumerable: true,
        configurable: true
    });
    return HelixModeratorEvent;
}(HelixModerator_1.default));
exports.default = HelixModeratorEvent;
module.exports = exports = HelixModeratorEvent;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixModeratorEventType = HelixModeratorEventType;
exports.default = HelixModeratorEvent;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var CustomError_1 = __webpack_require__(12);
/**
 * Thrown whenever you try something that requires your own stream to be live.
 */
var StreamNotLiveError = /** @class */ (function (_super) {
    tslib_1.__extends(StreamNotLiveError, _super);
    /** @private */
    function StreamNotLiveError() {
        return _super.call(this, 'Your stream needs to be live to do this') || this;
    }
    return StreamNotLiveError;
}(CustomError_1.default));
exports.default = StreamNotLiveError;
module.exports = exports = StreamNotLiveError;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StreamNotLiveError;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
/**
 * The type of a stream.
 */
var HelixStreamType;
(function (HelixStreamType) {
    /**
     * Returned by Twitch in case of an error.
     */
    HelixStreamType["None"] = "";
    /**
     * A live stream.
     */
    HelixStreamType["Live"] = "live";
    /**
     * A vodcast.
     *
     * Currently not supported by Twitch - but one can only hope and leave it in here.
     */
    HelixStreamType["Vodcast"] = "vodcast";
})(HelixStreamType || (HelixStreamType = {}));
exports.HelixStreamType = HelixStreamType;
/**
 * A Twitch stream.
 */
var HelixStream = /** @class */ (function () {
    /** @private */
    function HelixStream(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(HelixStream.prototype, "id", {
        /**
         * The stream ID.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixStream.prototype, "userId", {
        /**
         * The user ID.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixStream.prototype, "userDisplayName", {
        /**
         * The user's display name.
         */
        get: function () {
            return this._data.user_name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves information about the user broadcasting the stream.
     */
    HelixStream.prototype.getUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    Object.defineProperty(HelixStream.prototype, "gameId", {
        /**
         * The game ID.
         */
        get: function () {
            return this._data.game_id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves information about the game that is being played on this stream.
     */
    HelixStream.prototype.getGame = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.games.getGameById(this._data.game_id)];
            });
        });
    };
    Object.defineProperty(HelixStream.prototype, "type", {
        /**
         * The type of the stream.
         */
        get: function () {
            return this._data.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixStream.prototype, "title", {
        /**
         * The title of the stream.
         */
        get: function () {
            return this._data.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixStream.prototype, "viewers", {
        /**
         * The number of viewers the stream currently has.
         */
        get: function () {
            return this._data.viewer_count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixStream.prototype, "startDate", {
        /**
         * The time when the stream started.
         */
        get: function () {
            return new Date(this._data.started_at);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixStream.prototype, "language", {
        /**
         * The language of the stream.
         */
        get: function () {
            return this._data.language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixStream.prototype, "thumbnailUrl", {
        /**
         * The URL of the thumbnail of the stream.
         */
        get: function () {
            return this._data.thumbnail_url;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], HelixStream.prototype, "_client", void 0);
    return HelixStream;
}());
exports.default = HelixStream;
module.exports = exports = HelixStream;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixStreamType = HelixStreamType;
exports.default = HelixStream;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
var HelixStreamMarker = /** @class */ (function () {
    /** @private */
    function HelixStreamMarker(/** @private */ _data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(HelixStreamMarker.prototype, "id", {
        /**
         * The ID of the marker.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixStreamMarker.prototype, "creationDate", {
        /**
         * The date and time when the marker was created.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixStreamMarker.prototype, "description", {
        /**
         * The description of the marker.
         */
        get: function () {
            return this._data.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixStreamMarker.prototype, "positionInSeconds", {
        /**
         * The position in the stream when the marker was created, in seconds.
         */
        get: function () {
            return this._data.position_seconds;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], HelixStreamMarker.prototype, "_client", void 0);
    return HelixStreamMarker;
}());
exports.default = HelixStreamMarker;
module.exports = exports = HelixStreamMarker;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixStreamMarker;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var HelixSubscription_1 = __webpack_require__(31);
/**
 * The different types a subscription event can have.
 */
var HelixSubscriptionEventType;
(function (HelixSubscriptionEventType) {
    /**
     * Sent when a new user subscribes.
     */
    HelixSubscriptionEventType["Subscribe"] = "subscriptions.subscribe";
    /**
     * Sent when a previous subscriber stops subscribing.
     */
    HelixSubscriptionEventType["Unsubscribe"] = "subscriptions.unsubscribe";
    /**
     * Sent when a new or recurring subscriber sends their monthly notification.
     */
    HelixSubscriptionEventType["Notification"] = "subscriptions.notification";
})(HelixSubscriptionEventType || (HelixSubscriptionEventType = {}));
exports.HelixSubscriptionEventType = HelixSubscriptionEventType;
/**
 * An event that indicates the change of a subscription status, i.e. subscribing, unsubscribing or sending the monthly notification.
 */
var HelixSubscriptionEvent = /** @class */ (function (_super) {
    tslib_1.__extends(HelixSubscriptionEvent, _super);
    /** @private */
    function HelixSubscriptionEvent(_eventData, client) {
        var _this = _super.call(this, _eventData.event_data, client) || this;
        _this._eventData = _eventData;
        return _this;
    }
    Object.defineProperty(HelixSubscriptionEvent.prototype, "eventId", {
        /**
         * The unique ID of the subscription event.
         */
        get: function () {
            return this._eventData.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixSubscriptionEvent.prototype, "eventType", {
        /**
         * The type of the subscription event.
         */
        get: function () {
            return this._eventData.event_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixSubscriptionEvent.prototype, "eventDate", {
        /**
         * The date of the subscription event.
         */
        get: function () {
            return new Date(this._eventData.event_timestamp);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixSubscriptionEvent.prototype, "eventVersion", {
        /**
         * The version of the subscription event.
         */
        get: function () {
            return this._eventData.version;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixSubscriptionEvent.prototype, "eventMessage", {
        /**
         * The message sent with the subscription event.
         */
        get: function () {
            return this._eventData.event_data.message || '';
        },
        enumerable: true,
        configurable: true
    });
    return HelixSubscriptionEvent;
}(HelixSubscription_1.default));
exports.default = HelixSubscriptionEvent;
module.exports = exports = HelixSubscriptionEvent;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixSubscriptionEventType = HelixSubscriptionEventType;
exports.default = HelixSubscriptionEvent;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var HelixPaginatedRequest_1 = __webpack_require__(9);
/**
 * A special case of {@HelixPaginatedRequest} with support for fetching the total number of entities, whenever an endpoint supports it.
 */
var HelixPaginatedRequestWithTotal = /** @class */ (function (_super) {
    tslib_1.__extends(HelixPaginatedRequestWithTotal, _super);
    function HelixPaginatedRequestWithTotal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves and returns the total number of entities existing in the queried result set.
     */
    HelixPaginatedRequestWithTotal.prototype.getTotalCount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this._currentData;
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._fetchData({ query: { after: undefined } })];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        data = _a;
                        return [2 /*return*/, data.total];
                }
            });
        });
    };
    return HelixPaginatedRequestWithTotal;
}(HelixPaginatedRequest_1.default));
exports.default = HelixPaginatedRequestWithTotal;
module.exports = exports = HelixPaginatedRequestWithTotal;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixPaginatedRequestWithTotal;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
/**
 * A relation of a user following a broadcaster.
 */
var HelixFollow = /** @class */ (function () {
    /** @private */
    function HelixFollow(/** @private */ _data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(HelixFollow.prototype, "userId", {
        /**
         * The user ID of the following user.
         */
        get: function () {
            return this._data.from_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixFollow.prototype, "userDisplayName", {
        /**
         * The display name of the following user.
         */
        get: function () {
            return this._data.from_name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves the data of the following user.
     */
    HelixFollow.prototype.getUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.from_id)];
            });
        });
    };
    Object.defineProperty(HelixFollow.prototype, "followedUserId", {
        /**
         * The user ID of the followed broadcaster.
         */
        get: function () {
            return this._data.to_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixFollow.prototype, "followedUserDisplayName", {
        /**
         * The display name of the followed user.
         */
        get: function () {
            return this._data.to_name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves the data of the followed broadcaster.
     */
    HelixFollow.prototype.getFollowedUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.to_id)];
            });
        });
    };
    Object.defineProperty(HelixFollow.prototype, "followDate", {
        /**
         * The date when the user followed the broadcaster.
         */
        get: function () {
            return new Date(this._data.followed_at);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], HelixFollow.prototype, "_client", void 0);
    return HelixFollow;
}());
exports.default = HelixFollow;
module.exports = exports = HelixFollow;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixFollow;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var HelixUser_1 = __webpack_require__(32);
/**
 * A user you have extended privilges for, i.e. yourself.
 *
 * @inheritDoc
 */
var HelixPrivilegedUser = /** @class */ (function (_super) {
    tslib_1.__extends(HelixPrivilegedUser, _super);
    function HelixPrivilegedUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HelixPrivilegedUser.prototype, "email", {
        /**
         * The email address of the user.
         */
        get: function () {
            return this._data.email;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Changes the description of the user.
     *
     * @param description The new description.
     */
    HelixPrivilegedUser.prototype.setDescription = function (description) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.updateUser({ description: description })];
            });
        });
    };
    return HelixPrivilegedUser;
}(HelixUser_1.default));
exports.default = HelixPrivilegedUser;
module.exports = exports = HelixPrivilegedUser;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixPrivilegedUser;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var cache_decorators_1 = __webpack_require__(5);
var shared_utils_1 = __webpack_require__(1);
var HellFreezesOverError_1 = __webpack_require__(20);
/**
 * A video on Twitch.
 */
var HelixVideo = /** @class */ (function () {
    /** @private */
    function HelixVideo(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(HelixVideo.prototype, "id", {
        /**
         * The ID of the video.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "userId", {
        /**
         * The ID of the user who created the video.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "userDisplayName", {
        /**
         * The display name of the user who created the video.
         */
        get: function () {
            return this._data.user_name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves information about the user who created the video.
     */
    HelixVideo.prototype.getUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    Object.defineProperty(HelixVideo.prototype, "title", {
        /**
         * The title of the video.
         */
        get: function () {
            return this._data.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "description", {
        /**
         * The description of the video.
         */
        get: function () {
            return this._data.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "creationDate", {
        /**
         * The date when the video was created.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "publishDate", {
        /**
         * The date when the video was published.
         */
        get: function () {
            return new Date(this._data.published_at);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "url", {
        /**
         * The URL of the video.
         */
        get: function () {
            return this._data.url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "thumbnailUrl", {
        /**
         * The URL of the thumbnail of the video.
         */
        get: function () {
            return this._data.thumbnail_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "isPublic", {
        /**
         * Whether the video is public or not.
         */
        get: function () {
            return this._data.viewable === 'public';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "views", {
        /**
         * The number of views of the video.
         */
        get: function () {
            return this._data.view_count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "language", {
        /**
         * The language of the video.
         */
        get: function () {
            return this._data.language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "type", {
        /**
         * The type of the video.
         */
        get: function () {
            return this._data.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "duration", {
        /**
         * The duration of the video, as formatted by Twitch.
         */
        get: function () {
            return this._data.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "durationInSeconds", {
        /**
         * The duration of the video, in seconds.
         */
        get: function () {
            var parts = this._data.duration.match(/\d+[hms]/g);
            if (!parts) {
                throw new HellFreezesOverError_1.default("Could not parse duration string: " + this._data.duration);
            }
            return parts
                .map(function (part) {
                var partialMatch = part.match(/(\d+)([hms])/);
                if (!partialMatch) {
                    throw new HellFreezesOverError_1.default("Could not parse partial duration string: " + part);
                }
                var _a = tslib_1.__read(partialMatch, 3), num = _a[1], unit = _a[2];
                return parseInt(num, 10) * { h: 3600, m: 60, s: 1 }[unit];
            })
                .reduce(function (a, b) { return a + b; });
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], HelixVideo.prototype, "_client", void 0);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixVideo.prototype, "durationInSeconds", null);
    HelixVideo = tslib_1.__decorate([
        cache_decorators_1.Cacheable
    ], HelixVideo);
    return HelixVideo;
}());
exports.default = HelixVideo;
module.exports = exports = HelixVideo;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixVideo;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel_1 = __webpack_require__(22);
var isNode = __webpack_require__(14);
var BaseLogger = /** @class */ (function () {
    function BaseLogger(_a) {
        var name = _a.name, _b = _a.minLevel, minLevel = _b === void 0 ? LogLevel_1.LogLevel.WARNING : _b, _c = _a.emoji, emoji = _c === void 0 ? false : _c, _d = _a.colors, colors = _d === void 0 ? true : _d, _e = _a.timestamps, timestamps = _e === void 0 ? isNode : _e;
        this._name = name;
        this._minLevel = LogLevel_1.resolveLogLevel(minLevel);
        this._emoji = emoji;
        this._colors = colors;
        this._timestamps = timestamps;
    }
    // region convenience methods
    BaseLogger.prototype.crit = function (message) {
        this.log(LogLevel_1.LogLevel.CRITICAL, message);
    };
    BaseLogger.prototype.critical = function (message) {
        this.log(LogLevel_1.LogLevel.CRITICAL, message);
    };
    BaseLogger.prototype.err = function (message) {
        this.log(LogLevel_1.LogLevel.ERROR, message);
    };
    BaseLogger.prototype.error = function (message) {
        this.log(LogLevel_1.LogLevel.ERROR, message);
    };
    BaseLogger.prototype.warn = function (message) {
        this.log(LogLevel_1.LogLevel.WARNING, message);
    };
    BaseLogger.prototype.warning = function (message) {
        this.log(LogLevel_1.LogLevel.WARNING, message);
    };
    BaseLogger.prototype.info = function (message) {
        this.log(LogLevel_1.LogLevel.INFO, message);
    };
    BaseLogger.prototype.debug = function (message) {
        this.log(LogLevel_1.LogLevel.DEBUG, message);
    };
    /** @deprecated use debug instead */
    BaseLogger.prototype.debug1 = function (message) {
        this.log(LogLevel_1.LogLevel.DEBUG, message);
    };
    /** @deprecated use debug instead */
    BaseLogger.prototype.debug2 = function (message) {
        this.log(LogLevel_1.LogLevel.DEBUG, message);
    };
    /** @deprecated use debug instead */
    BaseLogger.prototype.debug3 = function (message) {
        this.log(LogLevel_1.LogLevel.DEBUG, message);
    };
    BaseLogger.prototype.trace = function (message) {
        this.log(LogLevel_1.LogLevel.TRACE, message);
    };
    return BaseLogger;
}());
exports.BaseLogger = BaseLogger;
//# sourceMappingURL=BaseLogger.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requirePromise = __webpack_require__(25);

requirePromise();

var PromiseResolve = __webpack_require__(150);
var Type = __webpack_require__(7);
var iterate = __webpack_require__(152);
var map = __webpack_require__(160);
var callBound = __webpack_require__(8);

var all = callBound('Promise.all');
var reject = callBound('Promise.reject');

module.exports = function allSettled(iterable) {
	var C = this;
	if (Type(C) !== 'Object') {
		throw new TypeError('`this` value must be an object');
	}
	var values = iterate(iterable);
	return all(C, map(values, function (item) {
		var onFulfill = function (value) {
			return { status: 'fulfilled', value: value };
		};
		var onReject = function (reason) {
			return { status: 'rejected', reason: reason };
		};
		var itemPromise = PromiseResolve(C, item);
		try {
			return itemPromise.then(onFulfill, onReject);
		} catch (e) {
			return reject(C, e);
		}
	}));
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') {
		return true;
	}
	if (typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(161);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArraySpeciesCreate = __webpack_require__(162);
var Call = __webpack_require__(171);
var CreateDataPropertyOrThrow = __webpack_require__(172);
var Get = __webpack_require__(72);
var HasProperty = __webpack_require__(179);
var IsCallable = __webpack_require__(81);
var ToUint32 = __webpack_require__(180);
var ToObject = __webpack_require__(188);
var ToString = __webpack_require__(189);
var callBound = __webpack_require__(8);
var isString = __webpack_require__(69);

// Check failure of by-index access of string characters (IE < 9) and failure of `0 in boxedString` (Rhino)
var boxedString = Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

var strSplit = callBound('String.prototype.split');

module.exports = function map(callbackfn) {
	var O = ToObject(this);
	var self = splitString && isString(O) ? strSplit(O, '') : O;
	var len = ToUint32(self.length);

	// If no callback function or if callback is not a callable function
	if (!IsCallable(callbackfn)) {
		throw new TypeError('Array.prototype.map callback must be a function');
	}

	var T;
	if (arguments.length > 1) {
		T = arguments[1];
	}

	var A = ArraySpeciesCreate(O, len);
	var k = 0;
	while (k < len) {
		var Pk = ToString(k);
		var kPresent = HasProperty(O, Pk);
		if (kPresent) {
			var kValue = Get(O, Pk);
			var mappedValue = Call(callbackfn, T, [kValue, k, O]);
			CreateDataPropertyOrThrow(A, Pk, mappedValue);
		}
		k += 1;
	}

	return A;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = __webpack_require__(163);

var IsPropertyKey = __webpack_require__(16);
var Type = __webpack_require__(7);

/**
 * 7.3.1 Get (O, P) - https://ecma-international.org/ecma-262/6.0/#sec-get-o-p
 * 1. Assert: Type(O) is Object.
 * 2. Assert: IsPropertyKey(P) is true.
 * 3. Return O.[[Get]](P, O).
 */

module.exports = function Get(O, P) {
	// 7.3.1.1
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	// 7.3.1.2
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect(P));
	}
	// 7.3.1.3
	return O[P];
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $Array = GetIntrinsic('%Array%');

// eslint-disable-next-line global-require
var toStr = !$Array.isArray && __webpack_require__(8)('Object.prototype.toString');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isarray

module.exports = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

var callBound = __webpack_require__(8);

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

// eslint-disable-next-line max-params
module.exports = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
	if (!$defineProperty) {
		if (!IsDataDescriptor(desc)) {
			// ES3 does not support getters/setters
			return false;
		}
		if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
			return false;
		}

		// fallback for ES3
		if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
			// a non-enumerable existing property
			return false;
		}

		// property does not exist at all, or exists but is enumerable
		var V = desc['[[Value]]'];
		// eslint-disable-next-line no-param-reassign
		O[P] = V; // will use [[Define]]
		return SameValue(O[P], V);
	}
	$defineProperty(O, P, FromPropertyDescriptor(desc));
	return true;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assertRecord = __webpack_require__(36);

var Type = __webpack_require__(7);

// https://www.ecma-international.org/ecma-262/6.0/#sec-frompropertydescriptor

module.exports = function FromPropertyDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return Desc;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	var obj = {};
	if ('[[Value]]' in Desc) {
		obj.value = Desc['[[Value]]'];
	}
	if ('[[Writable]]' in Desc) {
		obj.writable = Desc['[[Writable]]'];
	}
	if ('[[Get]]' in Desc) {
		obj.get = Desc['[[Get]]'];
	}
	if ('[[Set]]' in Desc) {
		obj.set = Desc['[[Set]]'];
	}
	if ('[[Enumerable]]' in Desc) {
		obj.enumerable = Desc['[[Enumerable]]'];
	}
	if ('[[Configurable]]' in Desc) {
		obj.configurable = Desc['[[Configurable]]'];
	}
	return obj;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(17);

var assertRecord = __webpack_require__(36);

var Type = __webpack_require__(7);

// https://www.ecma-international.org/ecma-262/6.0/#sec-isdatadescriptor

module.exports = function IsDataDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
		return false;
	}

	return true;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = __webpack_require__(78);

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.12

module.exports = function SameValue(x, y) {
	if (x === y) { // 0 === -0, but they are not identical.
		if (x === 0) { return 1 / x === 1 / y; }
		return true;
	}
	return $isNaN(x) && $isNaN(y);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(17);

var GetIntrinsic = __webpack_require__(2);

var $TypeError = GetIntrinsic('%TypeError%');

var Type = __webpack_require__(7);
var ToBoolean = __webpack_require__(80);
var IsCallable = __webpack_require__(81);

// https://ecma-international.org/ecma-262/5.1/#sec-8.10.5

module.exports = function ToPropertyDescriptor(Obj) {
	if (Type(Obj) !== 'Object') {
		throw new $TypeError('ToPropertyDescriptor requires an object');
	}

	var desc = {};
	if (has(Obj, 'enumerable')) {
		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
	}
	if (has(Obj, 'configurable')) {
		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
	}
	if (has(Obj, 'value')) {
		desc['[[Value]]'] = Obj.value;
	}
	if (has(Obj, 'writable')) {
		desc['[[Writable]]'] = ToBoolean(Obj.writable);
	}
	if (has(Obj, 'get')) {
		var getter = Obj.get;
		if (typeof getter !== 'undefined' && !IsCallable(getter)) {
			throw new TypeError('getter must be a function');
		}
		desc['[[Get]]'] = getter;
	}
	if (has(Obj, 'set')) {
		var setter = Obj.set;
		if (typeof setter !== 'undefined' && !IsCallable(setter)) {
			throw new $TypeError('setter must be a function');
		}
		desc['[[Set]]'] = setter;
	}

	if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
		throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
	}
	return desc;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.2

module.exports = function ToBoolean(value) { return !!value; };


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.11

module.exports = __webpack_require__(82);


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
	} catch (_) {
		reflectApply = null;
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = reflectApply
	? function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value);
	}
	: function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayMethodBoxesProperly = __webpack_require__(190);

var implementation = __webpack_require__(71);

module.exports = function getPolyfill() {
	var method = Array.prototype.map;
	return arrayMethodBoxesProperly(method) ? method : implementation;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requirePromise = __webpack_require__(25);

var implementation = __webpack_require__(68);

module.exports = function getPolyfill() {
	requirePromise();
	return typeof Promise.allSettled === 'function' ? Promise.allSettled : implementation;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(33);
var CustomError_1 = __webpack_require__(193);
var RetryAfterError = /** @class */ (function (_super) {
    tslib_1.__extends(RetryAfterError, _super);
    function RetryAfterError(after) {
        var _this = _super.call(this, "Need to retry after " + after + " ms") || this;
        _this._retryAt = Date.now() + after;
        return _this;
    }
    Object.defineProperty(RetryAfterError.prototype, "retryAt", {
        get: function () {
            return this._retryAt;
        },
        enumerable: true,
        configurable: true
    });
    return RetryAfterError;
}(CustomError_1.CustomError));
exports.RetryAfterError = RetryAfterError;
//# sourceMappingURL=RetryAfterError.js.map

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
var User_1 = __webpack_require__(10);
/**
 * A relation of a user following a previously given channel.
 */
var ChannelFollow = /** @class */ (function () {
    /** @private */
    function ChannelFollow(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(ChannelFollow.prototype, "user", {
        /**
         * The user following the given channel.
         */
        get: function () {
            return new User_1.default(this._data.user, this._client);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChannelFollow.prototype, "hasNotifications", {
        /**
         * Whether the user has notifications enabled for the channel.
         */
        get: function () {
            return this._data.notifications;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChannelFollow.prototype, "followDate", {
        /**
         * The date when the user followed.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], ChannelFollow.prototype, "_client", void 0);
    return ChannelFollow;
}());
exports.default = ChannelFollow;
module.exports = exports = ChannelFollow;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChannelFollow;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Subscription_1 = __webpack_require__(39);
var User_1 = __webpack_require__(10);
/**
 * A relation of a user subscribing to a previously given channel.
 */
var ChannelSubscription = /** @class */ (function (_super) {
    tslib_1.__extends(ChannelSubscription, _super);
    function ChannelSubscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ChannelSubscription.prototype, "user", {
        /**
         * The user subscribing to the given channel.
         */
        get: function () {
            return new User_1.default(this._data.user, this._client);
        },
        enumerable: true,
        configurable: true
    });
    return ChannelSubscription;
}(Subscription_1.default));
exports.default = ChannelSubscription;
module.exports = exports = ChannelSubscription;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChannelSubscription;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Channel_1 = __webpack_require__(13);
/**
 * A channel you have extended privileges for, i.e. the channel of the currently authenticated user.
 */
var PrivilegedChannel = /** @class */ (function (_super) {
    tslib_1.__extends(PrivilegedChannel, _super);
    function PrivilegedChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PrivilegedChannel.prototype, "streamKey", {
        /**
         * The channel's stream key.
         */
        get: function () {
            return this._data.stream_key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrivilegedChannel.prototype, "email", {
        /**
         * The channel's email address.
         */
        get: function () {
            return this._data.email;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves the list of editors of the channel.
     */
    PrivilegedChannel.prototype.getEditors = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.channels.getChannelEditors(this)];
            });
        });
    };
    /**
     * Starts a commercial in the channel.
     *
     * @param length The length of the commercial.
     */
    PrivilegedChannel.prototype.startCommercial = function (length) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.channels.startChannelCommercial(this, length)];
            });
        });
    };
    /**
     * Resets the given channel's stream key.
     */
    PrivilegedChannel.prototype.resetStreamKey = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var channelData, streamKey;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.kraken.channels.resetChannelStreamKey(this)];
                    case 1:
                        channelData = _a.sent();
                        streamKey = channelData.stream_key;
                        this._data.stream_key = streamKey;
                        return [2 /*return*/, streamKey];
                }
            });
        });
    };
    return PrivilegedChannel;
}(Channel_1.default));
exports.default = PrivilegedChannel;
module.exports = exports = PrivilegedChannel;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PrivilegedChannel;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var cache_decorators_1 = __webpack_require__(5);
/**
 * A list of emotes, grouped into emote sets, that a user can use.
 */
var EmoteSetList = /** @class */ (function () {
    /** @private */
    function EmoteSetList(_data) {
        this._data = _data;
    }
    /**
     * Finds the emote ID for the given emote code.
     *
     * @param emoteCode The emote code to check for.
     */
    EmoteSetList.prototype.findEmoteId = function (emoteCode) {
        var e_1, _a, e_2, _b;
        try {
            for (var _c = tslib_1.__values(Object.values(this._data)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var emoteSet = _d.value;
                try {
                    for (var emoteSet_1 = (e_2 = void 0, tslib_1.__values(emoteSet)), emoteSet_1_1 = emoteSet_1.next(); !emoteSet_1_1.done; emoteSet_1_1 = emoteSet_1.next()) {
                        var emote = emoteSet_1_1.value;
                        if (new RegExp(emote.code).test(emoteCode)) {
                            return emote.id;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (emoteSet_1_1 && !emoteSet_1_1.done && (_b = emoteSet_1.return)) _b.call(emoteSet_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return undefined;
    };
    tslib_1.__decorate([
        cache_decorators_1.Cached(Infinity, true)
    ], EmoteSetList.prototype, "findEmoteId", null);
    EmoteSetList = tslib_1.__decorate([
        cache_decorators_1.Cacheable
    ], EmoteSetList);
    return EmoteSetList;
}());
exports.default = EmoteSetList;
module.exports = exports = EmoteSetList;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EmoteSetList;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var User_1 = __webpack_require__(10);
/**
 * A user you have extended privileges for, i.e. the currently authenticated user.
 *
 * @inheritDoc
 */
var PrivilegedUser = /** @class */ (function (_super) {
    tslib_1.__extends(PrivilegedUser, _super);
    function PrivilegedUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PrivilegedUser.prototype, "email", {
        /**
         * The user's email address.
         */
        get: function () {
            return this._data.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrivilegedUser.prototype, "isEmailVerified", {
        /**
         * Whether the user's email address is verified.
         */
        get: function () {
            return this._data.email_verified;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrivilegedUser.prototype, "hasEmailNotifications", {
        /**
         * Whether the user has email notifications enabled.
         */
        get: function () {
            return this._data.notifications.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrivilegedUser.prototype, "hasPushNotifications", {
        /**
         * Whether the user has push notifications enabled.
         */
        get: function () {
            return this._data.notifications.push;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrivilegedUser.prototype, "isPartnered", {
        /**
         * Whether the user is partnered.
         */
        get: function () {
            return this._data.partnered;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrivilegedUser.prototype, "hasTwitter", {
        /**
         * Whether the user has a Twitter account connected.
         */
        get: function () {
            return this._data.twitter_connected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Follows a channel.
     *
     * @param channel The channel to follow.
     * @param notifications Whether the user will receive notifications.
     */
    PrivilegedUser.prototype.followChannel = function (channel, notifications) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.users.followChannel(this, channel, notifications)];
            });
        });
    };
    /**
     * Unfollows a channel.
     *
     * @param channel The channel to unfollow.
     */
    PrivilegedUser.prototype.unfollowChannel = function (channel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.users.unfollowChannel(this, channel)];
            });
        });
    };
    /**
     * Blocks a user.
     *
     * @param userToBlock The user to block.
     */
    PrivilegedUser.prototype.blockUser = function (userToBlock) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.users.blockUser(this, userToBlock)];
            });
        });
    };
    /**
     * Unblocks a user.
     *
     * @param userToUnblock The user to unblock.
     */
    PrivilegedUser.prototype.unblockUser = function (userToUnblock) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.users.unblockUser(this, userToUnblock)];
            });
        });
    };
    return PrivilegedUser;
}(User_1.default));
exports.default = PrivilegedUser;
module.exports = exports = PrivilegedUser;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PrivilegedUser;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
var User_1 = __webpack_require__(10);
/**
 * A relation of a previously givn user blocking another user.
 */
var UserBlock = /** @class */ (function () {
    /** @private */
    function UserBlock(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(UserBlock.prototype, "blockedUser", {
        /**
         * The blocked user.
         */
        get: function () {
            return new User_1.default(this._data.user, this._client);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], UserBlock.prototype, "_client", void 0);
    return UserBlock;
}());
exports.default = UserBlock;
module.exports = exports = UserBlock;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserBlock;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
var Channel_1 = __webpack_require__(13);
/**
 * A relation of a previously given user following a channel.
 */
var UserFollow = /** @class */ (function () {
    /** @private */
    function UserFollow(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(UserFollow.prototype, "followDate", {
        /**
         * The date when the user followed the channel.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserFollow.prototype, "hasNotifications", {
        /**
         * Whether the user has notifications enabled for the channel.
         */
        get: function () {
            return this._data.notifications;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserFollow.prototype, "channel", {
        /**
         * The followed channel.
         */
        get: function () {
            return new Channel_1.default(this._data.channel, this._client);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], UserFollow.prototype, "_client", void 0);
    return UserFollow;
}());
exports.default = UserFollow;
module.exports = exports = UserFollow;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserFollow;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Subscription_1 = __webpack_require__(39);
var Channel_1 = __webpack_require__(13);
/**
 * A relation of a previously given user subscribing to a channel.
 */
var UserSubscription = /** @class */ (function (_super) {
    tslib_1.__extends(UserSubscription, _super);
    function UserSubscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UserSubscription.prototype, "channel", {
        /**
         * The subscribed channel.
         */
        get: function () {
            return new Channel_1.default(this._data.channel, this._client);
        },
        enumerable: true,
        configurable: true
    });
    return UserSubscription;
}(Subscription_1.default));
exports.default = UserSubscription;
module.exports = exports = UserSubscription;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserSubscription;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Information about an access token.
 */
var TokenInfo = /** @class */ (function () {
    /** @private */
    function TokenInfo(_data) {
        this._data = _data;
        this._obtainmentDate = new Date();
    }
    Object.defineProperty(TokenInfo.prototype, "clientId", {
        /**
         * The client ID.
         */
        get: function () {
            return this._data.client_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenInfo.prototype, "userId", {
        /**
         * The ID of the authenticated user.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenInfo.prototype, "userName", {
        /**
         * The user name of the authenticated user.
         */
        get: function () {
            return this._data.login;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenInfo.prototype, "scopes", {
        /**
         * The scopes for which this token is valid.
         */
        get: function () {
            return this._data.scopes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenInfo.prototype, "expiryDate", {
        /**
         * The time when the token will expire.
         *
         * If this returns null, it means that the token is either invalid or never expires (happens with old client IDs).
         */
        get: function () {
            if (!this._data.expires_in) {
                return null;
            }
            return new Date(this._obtainmentDate.getTime() + this._data.expires_in * 1000);
        },
        enumerable: true,
        configurable: true
    });
    return TokenInfo;
}());
exports.default = TokenInfo;
module.exports = exports = TokenInfo;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TokenInfo;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
/**
 * A list of chatters in a Twitch chat.
 */
var ChattersList = /** @class */ (function () {
    /** @private */
    function ChattersList(_data) {
        this._data = _data;
    }
    Object.defineProperty(ChattersList.prototype, "allChatters", {
        /**
         * A list of user names of all chatters in the chat.
         */
        get: function () {
            return shared_utils_1.flatten(Object.values(this._data.chatters));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChattersList.prototype, "allChattersWithStatus", {
        /**
         * A map of user names of all chatters in the chat, mapped to their status in the channel.
         */
        get: function () {
            return new Map(shared_utils_1.flatten(Object.entries(this._data.chatters).map(function (_a) {
                var _b = tslib_1.__read(_a, 2), status = _b[0], names = _b[1];
                return names.map(function (name) { return [name, status]; });
            })));
        },
        enumerable: true,
        configurable: true
    });
    return ChattersList;
}());
exports.default = ChattersList;
module.exports = exports = ChattersList;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChattersList;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
var TwitchClient_1 = __webpack_require__(4);
/**
 * Enhances another auth provider with the ability to make use of refresh
 * tokens, automatically refreshing the access token whenever necessary.
 */
var RefreshableAuthProvider = /** @class */ (function () {
    /**
     * Creates a new auth provider based on the given one that can automatically
     * refresh access tokens.
     *
     * You don't usually have to create this manually. You should use `TwitchClient.withCredentials`
     * with the `refreshConfig` parameter instead.
     *
     * @param childProvider The base auth provider.
     * @param refreshConfig The information necessary to automatically refresh an access token.
     */
    function RefreshableAuthProvider(childProvider, refreshConfig) {
        this._clientSecret = refreshConfig.clientSecret;
        this._refreshToken = refreshConfig.refreshToken;
        this._childProvider = childProvider;
        this._initialExpiry = refreshConfig.expiry;
        this._onRefresh = refreshConfig.onRefresh;
    }
    Object.defineProperty(RefreshableAuthProvider.prototype, "tokenType", {
        /**
         * The type of tokens this provider generates.
         *
         * It is the same as the underlying base auth provider's token type.
         */
        get: function () {
            return this._childProvider.tokenType;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves an access token.
     *
     * If the current access token does not have the requested scopes, the base auth
     * provider is called.
     *
     * If the current access token is expired, automatically renew it.
     *
     * @param scopes The requested scopes.
     */
    RefreshableAuthProvider.prototype.getAccessToken = function (scopes) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var oldToken, newToken, now, refreshedToken;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof scopes === 'string') {
                            scopes = scopes.split(' ');
                        }
                        return [4 /*yield*/, this._childProvider.getAccessToken()];
                    case 1:
                        oldToken = _a.sent();
                        if (!(oldToken && scopes && scopes.some(function (scope) { return !_this.currentScopes.includes(scope); }))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._childProvider.getAccessToken(scopes)];
                    case 2:
                        newToken = _a.sent();
                        // ...but if the token doesn't change, carry on
                        if (newToken !== oldToken) {
                            return [2 /*return*/, newToken];
                        }
                        _a.label = 3;
                    case 3:
                        // if we don't have a current token, we just pass this and refresh right away
                        if (oldToken) {
                            if (this._initialExpiry) {
                                now = new Date();
                                if (now < this._initialExpiry) {
                                    return [2 /*return*/, oldToken];
                                }
                            }
                            else if (!oldToken.isExpired) {
                                return [2 /*return*/, oldToken];
                            }
                        }
                        return [4 /*yield*/, this.refresh()];
                    case 4:
                        refreshedToken = _a.sent();
                        if (oldToken) {
                            return [2 /*return*/, refreshedToken];
                        }
                        // need to check again for scopes after refreshing, in case a refresh token was passed without an access token
                        return [2 /*return*/, this._childProvider.getAccessToken(scopes)];
                }
            });
        });
    };
    /**
     * Force a refresh of the access token.
     */
    RefreshableAuthProvider.prototype.refresh = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var tokenData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, TwitchClient_1.default.refreshAccessToken(this.clientId, this._clientSecret, this._refreshToken)];
                    case 1:
                        tokenData = _a.sent();
                        this.setAccessToken(tokenData);
                        this._refreshToken = tokenData.refreshToken;
                        this._initialExpiry = undefined;
                        if (this._onRefresh) {
                            this._onRefresh(tokenData);
                        }
                        return [2 /*return*/, tokenData];
                }
            });
        });
    };
    /** @private */
    RefreshableAuthProvider.prototype.setAccessToken = function (token) {
        this._childProvider.setAccessToken(token);
    };
    Object.defineProperty(RefreshableAuthProvider.prototype, "clientId", {
        /**
         * The client ID.
         */
        get: function () {
            return this._childProvider.clientId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RefreshableAuthProvider.prototype, "currentScopes", {
        /**
         * The scopes that are currently available using the access token.
         */
        get: function () {
            return this._childProvider.currentScopes;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], RefreshableAuthProvider.prototype, "_clientSecret", void 0);
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], RefreshableAuthProvider.prototype, "_refreshToken", void 0);
    return RefreshableAuthProvider;
}());
exports.default = RefreshableAuthProvider;
module.exports = exports = RefreshableAuthProvider;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RefreshableAuthProvider;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
var AccessToken_1 = __webpack_require__(27);
var TwitchClient_1 = __webpack_require__(4);
/**
 * An auth provider that always returns the same initially given credentials.
 *
 * You are advised to roll your own auth provider that can handle scope upgrades,
 * or to plan ahead and supply only access tokens that account for all scopes
 * you will ever need.
 */
var StaticAuthProvider = /** @class */ (function () {
    /**
     * Creates a new auth provider with static credentials.
     *
     * You don't usually have to create this manually. You should use `TwitchClient.withCredentials` instead.
     *
     * @param clientId The client ID.
     * @param accessToken The access token to provide.
     *
     * You need to obtain one using one of the [Twitch OAuth flows](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/).
     * @param scopes The scopes this token has.
     * @param tokenType The type of the supplied token.
     */
    function StaticAuthProvider(clientId, accessToken, scopes, tokenType) {
        if (tokenType === void 0) { tokenType = 'user'; }
        this._clientId = clientId || '';
        this.tokenType = tokenType;
        if (accessToken) {
            this._accessToken =
                typeof accessToken === 'string'
                    ? new AccessToken_1.default({
                        access_token: accessToken,
                        scope: scopes,
                        refresh_token: ''
                    })
                    : accessToken;
            this._scopes = scopes;
        }
    }
    /**
     * Retrieves an access token.
     *
     * If the current access token does not have the requested scopes, this method throws.
     * This makes supplying an access token with the correct scopes from the beginning necessary.
     *
     * @param scopes The requested scopes.
     */
    StaticAuthProvider.prototype.getAccessToken = function (scopes) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var tokenInfo;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(scopes && scopes.length > 0)) return [3 /*break*/, 3];
                        if (!!this._scopes) return [3 /*break*/, 2];
                        if (!this._accessToken) {
                            throw new Error('Auth provider has not been initialized with a token yet and is requesting scopes');
                        }
                        return [4 /*yield*/, TwitchClient_1.default.getTokenInfo(this._accessToken.accessToken, this._clientId)];
                    case 1:
                        tokenInfo = _a.sent();
                        this._scopes = tokenInfo.scopes;
                        _a.label = 2;
                    case 2:
                        if (typeof scopes === 'string') {
                            scopes = scopes.split(' ');
                        }
                        if (scopes.some(function (scope) { return !_this._scopes.includes(scope); })) {
                            throw new Error("This token does not have the requested scopes (" + scopes.join(', ') + ") and can not be upgraded");
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, this._accessToken || null];
                }
            });
        });
    };
    /** @private */
    StaticAuthProvider.prototype.setAccessToken = function (token) {
        this._accessToken = token;
    };
    Object.defineProperty(StaticAuthProvider.prototype, "clientId", {
        /**
         * The client ID.
         */
        get: function () {
            return this._clientId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticAuthProvider.prototype, "currentScopes", {
        /**
         * The scopes that are currently available using the access token.
         */
        get: function () {
            return this._scopes || [];
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], StaticAuthProvider.prototype, "_clientId", void 0);
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], StaticAuthProvider.prototype, "_accessToken", void 0);
    return StaticAuthProvider;
}());
exports.default = StaticAuthProvider;
module.exports = exports = StaticAuthProvider;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StaticAuthProvider;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var CustomError_1 = __webpack_require__(12);
/**
 * Thrown whenever you try using invalid values in the client configuration.
 */
var ConfigError = /** @class */ (function (_super) {
    tslib_1.__extends(ConfigError, _super);
    function ConfigError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConfigError;
}(CustomError_1.default));
exports.default = ConfigError;
module.exports = exports = ConfigError;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConfigError;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var CustomError_1 = __webpack_require__(12);
/**
 * Thrown whenever an invalid token is supplied.
 */
var InvalidTokenError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidTokenError, _super);
    /** @private */
    function InvalidTokenError() {
        return _super.call(this, 'Invalid token supplied') || this;
    }
    return InvalidTokenError;
}(CustomError_1.default));
exports.default = InvalidTokenError;
module.exports = exports = InvalidTokenError;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InvalidTokenError;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable filenames/match-exported */
var TwitchClient_1 = __webpack_require__(4);
exports.TwitchAPICallType = TwitchClient_1.TwitchAPICallType;
exports.default = TwitchClient_1.default;
var ConfigError_1 = __webpack_require__(99);
exports.ConfigError = ConfigError_1.default;
var HellFreezesOverError_1 = __webpack_require__(20);
exports.HellFreezesOverError = HellFreezesOverError_1.default;
var HTTPStatusCodeError_1 = __webpack_require__(19);
exports.HTTPStatusCodeError = HTTPStatusCodeError_1.default;
var InvalidTokenError_1 = __webpack_require__(100);
exports.InvalidTokenError = InvalidTokenError_1.default;
var InvalidTokenTypeError_1 = __webpack_require__(209);
exports.InvalidTokenTypeError = InvalidTokenTypeError_1.default;
var NoSubscriptionProgramError_1 = __webpack_require__(15);
exports.NoSubscriptionProgramError = NoSubscriptionProgramError_1.default;
var StreamNotLiveError_1 = __webpack_require__(56);
exports.StreamNotLiveError = StreamNotLiveError_1.default;
var StaticAuthProvider_1 = __webpack_require__(98);
exports.StaticAuthProvider = StaticAuthProvider_1.default;
var RefreshableAuthProvider_1 = __webpack_require__(97);
exports.RefreshableAuthProvider = RefreshableAuthProvider_1.default;
var AccessToken_1 = __webpack_require__(27);
exports.AccessToken = AccessToken_1.default;
var TokenInfo_1 = __webpack_require__(95);
exports.TokenInfo = TokenInfo_1.default;
var Subscription_1 = __webpack_require__(39);
exports.Subscription = Subscription_1.default;
var CheermoteList_1 = __webpack_require__(37);
exports.CheermoteList = CheermoteList_1.default;
exports.CheermoteBackground = CheermoteList_1.CheermoteBackground;
exports.CheermoteScale = CheermoteList_1.CheermoteScale;
exports.CheermoteState = CheermoteList_1.CheermoteState;
var Channel_1 = __webpack_require__(13);
exports.Channel = Channel_1.default;
var ChannelFollow_1 = __webpack_require__(87);
exports.ChannelFollow = ChannelFollow_1.default;
var ChannelPlaceholder_1 = __webpack_require__(38);
exports.ChannelPlaceholder = ChannelPlaceholder_1.default;
var ChannelSubscription_1 = __webpack_require__(88);
exports.ChannelSubscription = ChannelSubscription_1.default;
var EmoteSetList_1 = __webpack_require__(90);
exports.EmoteSetList = EmoteSetList_1.default;
var PrivilegedChannel_1 = __webpack_require__(89);
exports.PrivilegedChannel = PrivilegedChannel_1.default;
var Stream_1 = __webpack_require__(41);
exports.Stream = Stream_1.default;
exports.StreamType = Stream_1.StreamType;
var ChattersList_1 = __webpack_require__(96);
exports.ChattersList = ChattersList_1.default;
var PrivilegedUser_1 = __webpack_require__(91);
exports.PrivilegedUser = PrivilegedUser_1.default;
var User_1 = __webpack_require__(10);
exports.User = User_1.default;
var UserBlock_1 = __webpack_require__(92);
exports.UserBlock = UserBlock_1.default;
var UserFollow_1 = __webpack_require__(93);
exports.UserFollow = UserFollow_1.default;
var UserSubscription_1 = __webpack_require__(94);
exports.UserSubscription = UserSubscription_1.default;
var HelixPaginatedRequest_1 = __webpack_require__(9);
exports.HelixPaginatedRequest = HelixPaginatedRequest_1.default;
var HelixBitsLeaderboard_1 = __webpack_require__(49);
exports.HelixBitsLeaderboard = HelixBitsLeaderboard_1.default;
var HelixBitsLeaderboardEntry_1 = __webpack_require__(50);
exports.HelixBitsLeaderboardEntry = HelixBitsLeaderboardEntry_1.default;
var HelixClip_1 = __webpack_require__(51);
exports.HelixClip = HelixClip_1.default;
var HelixExtensionTransaction_1 = __webpack_require__(52);
exports.HelixExtensionTransaction = HelixExtensionTransaction_1.default;
var HelixGame_1 = __webpack_require__(53);
exports.HelixGame = HelixGame_1.default;
var HelixBan_1 = __webpack_require__(29);
exports.HelixBan = HelixBan_1.default;
var HelixBanEvent_1 = __webpack_require__(54);
exports.HelixBanEvent = HelixBanEvent_1.default;
var HelixModerator_1 = __webpack_require__(30);
exports.HelixModerator = HelixModerator_1.default;
var HelixModeratorEvent_1 = __webpack_require__(55);
exports.HelixModeratorEvent = HelixModeratorEvent_1.default;
var HelixStream_1 = __webpack_require__(57);
exports.HelixStream = HelixStream_1.default;
exports.HelixStreamType = HelixStream_1.HelixStreamType;
var HelixFollow_1 = __webpack_require__(61);
exports.HelixFollow = HelixFollow_1.default;
var HelixPrivilegedUser_1 = __webpack_require__(62);
exports.HelixPrivilegedUser = HelixPrivilegedUser_1.default;
var HelixUser_1 = __webpack_require__(32);
exports.HelixUser = HelixUser_1.default;
exports.HelixBroadcasterType = HelixUser_1.HelixBroadcasterType;
exports.HelixUserType = HelixUser_1.HelixUserType;
var HelixVideo_1 = __webpack_require__(63);
exports.HelixVideo = HelixVideo_1.default;
var HelixSubscription_1 = __webpack_require__(31);
exports.HelixSubscription = HelixSubscription_1.default;
var HelixSubscriptionEvent_1 = __webpack_require__(59);
exports.HelixSubscriptionEvent = HelixSubscriptionEvent_1.default;
var ChatBadgeList_1 = __webpack_require__(46);
exports.ChatBadgeList = ChatBadgeList_1.default;
var ChatBadgeSet_1 = __webpack_require__(47);
exports.ChatBadgeSet = ChatBadgeSet_1.default;
var ChatBadgeVersion_1 = __webpack_require__(48);
exports.ChatBadgeVersion = ChatBadgeVersion_1.default;
var UserTools_1 = __webpack_require__(6);
exports.extractUserId = UserTools_1.extractUserId;
exports.extractUserName = UserTools_1.extractUserName;
module.exports = exports = TwitchClient_1.default;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitchAPICallType = TwitchClient_1.TwitchAPICallType;
exports.default = TwitchClient_1.default;
exports.ConfigError = ConfigError_1.default;
exports.HellFreezesOverError = HellFreezesOverError_1.default;
exports.HTTPStatusCodeError = HTTPStatusCodeError_1.default;
exports.InvalidTokenError = InvalidTokenError_1.default;
exports.InvalidTokenTypeError = InvalidTokenTypeError_1.default;
exports.NoSubscriptionProgramError = NoSubscriptionProgramError_1.default;
exports.StreamNotLiveError = StreamNotLiveError_1.default;
exports.StaticAuthProvider = StaticAuthProvider_1.default;
exports.RefreshableAuthProvider = RefreshableAuthProvider_1.default;
exports.AccessToken = AccessToken_1.default;
exports.TokenInfo = TokenInfo_1.default;
exports.Subscription = Subscription_1.default;
exports.CheermoteList = CheermoteList_1.default;
exports.CheermoteBackground = CheermoteList_1.CheermoteBackground;
exports.CheermoteScale = CheermoteList_1.CheermoteScale;
exports.CheermoteState = CheermoteList_1.CheermoteState;
exports.Channel = Channel_1.default;
exports.ChannelFollow = ChannelFollow_1.default;
exports.ChannelPlaceholder = ChannelPlaceholder_1.default;
exports.ChannelSubscription = ChannelSubscription_1.default;
exports.EmoteSetList = EmoteSetList_1.default;
exports.PrivilegedChannel = PrivilegedChannel_1.default;
exports.Stream = Stream_1.default;
exports.StreamType = Stream_1.StreamType;
exports.ChattersList = ChattersList_1.default;
exports.PrivilegedUser = PrivilegedUser_1.default;
exports.User = User_1.default;
exports.UserBlock = UserBlock_1.default;
exports.UserFollow = UserFollow_1.default;
exports.UserSubscription = UserSubscription_1.default;
exports.HelixPaginatedRequest = HelixPaginatedRequest_1.default;
exports.HelixBitsLeaderboard = HelixBitsLeaderboard_1.default;
exports.HelixBitsLeaderboardEntry = HelixBitsLeaderboardEntry_1.default;
exports.HelixClip = HelixClip_1.default;
exports.HelixExtensionTransaction = HelixExtensionTransaction_1.default;
exports.HelixGame = HelixGame_1.default;
exports.HelixBan = HelixBan_1.default;
exports.HelixBanEvent = HelixBanEvent_1.default;
exports.HelixModerator = HelixModerator_1.default;
exports.HelixModeratorEvent = HelixModeratorEvent_1.default;
exports.HelixStream = HelixStream_1.default;
exports.HelixStreamType = HelixStream_1.HelixStreamType;
exports.HelixFollow = HelixFollow_1.default;
exports.HelixPrivilegedUser = HelixPrivilegedUser_1.default;
exports.HelixUser = HelixUser_1.default;
exports.HelixBroadcasterType = HelixUser_1.HelixBroadcasterType;
exports.HelixUserType = HelixUser_1.HelixUserType;
exports.HelixVideo = HelixVideo_1.default;
exports.HelixSubscription = HelixSubscription_1.default;
exports.HelixSubscriptionEvent = HelixSubscriptionEvent_1.default;
exports.ChatBadgeList = ChatBadgeList_1.default;
exports.ChatBadgeSet = ChatBadgeSet_1.default;
exports.ChatBadgeVersion = ChatBadgeVersion_1.default;
exports.extractUserId = UserTools_1.extractUserId;
exports.extractUserName = UserTools_1.extractUserName;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(210);


/***/ }),
/* 103 */
/***/ (function(module, exports) {

var __self__ = (function (root) {
function F() {
this.fetch = false;
this.DOMException = root.DOMException
}
F.prototype = root;
return new F();
})(typeof self !== 'undefined' ? self : this);
(function(self) {

var irrelevant = (function (exports) {
  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  return exports;

}({}));
})(__self__);
delete __self__.fetch.polyfill
exports = __self__.fetch // To enable: import fetch from 'cross-fetch'
exports.default = __self__.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = __self__.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = __self__.Headers
exports.Request = __self__.Request
exports.Response = __self__.Response
module.exports = exports


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable filenames/match-exported */
var isNode = __webpack_require__(14);
var NodeLogger_1 = __webpack_require__(105);
var BrowserLogger_1 = __webpack_require__(106);
var Logger = isNode ? NodeLogger_1.default : BrowserLogger_1.default;
exports.default = Logger;
var LogLevel_1 = __webpack_require__(21);
var __export_LogLevel = LogLevel_1.default;
exports.LogLevel = __export_LogLevel;
module.exports = exports = Logger;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Logger;
exports.LogLevel = __export_LogLevel;
//# sourceMappingURL=index.js.map

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(42);
var LogLevel_1 = __webpack_require__(21);
var BaseLogger_1 = __webpack_require__(43);
var __export_LogLevelToEmoji = (_a = {},
    _a[LogLevel_1.default.CRITICAL] = "\uD83D\uDED1",
    _a[LogLevel_1.default.ERROR] = "\u274C",
    // these following two need extra spaces at the end because somehow they consume less space in a terminal than they should...
    _a[LogLevel_1.default.WARNING] = "\u26A0\uFE0F ",
    _a[LogLevel_1.default.INFO] = "\u2139\uFE0F ",
    _a[LogLevel_1.default.DEBUG] = "\uD83D\uDC1E",
    _a[LogLevel_1.default.TRACE] = "\uD83D\uDC3E",
    _a);
exports.LogLevelToEmoji = __export_LogLevelToEmoji;
var colors = {
    black: 30,
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    magenta: 35,
    cyan: 36,
    white: 37,
    blackBright: 90,
    redBright: 91,
    greenBright: 92,
    yellowBright: 93,
    blueBright: 94,
    magentaBright: 95,
    cyanBright: 96,
    whiteBright: 97
};
var bgColors = {
    bgBlack: 40,
    bgRed: 41,
    bgGreen: 42,
    bgYellow: 43,
    bgBlue: 44,
    bgMagenta: 45,
    bgCyan: 46,
    bgWhite: 47,
    bgBlackBright: 100,
    bgRedBright: 101,
    bgGreenBright: 102,
    bgYellowBright: 103,
    bgBlueBright: 104,
    bgMagentaBright: 105,
    bgCyanBright: 106,
    bgWhiteBright: 107
};
function createGenericWrapper(color, ending, inner) {
    return function (str) { return "\u001B[" + color + "m" + (inner ? inner(str) : str) + "\u001B[" + ending + "m"; };
}
function createColorWrapper(color) {
    return createGenericWrapper(colors[color], 39);
}
function createBgWrapper(color, fgWrapper) {
    return createGenericWrapper(bgColors[color], 49, fgWrapper);
}
var __export_LogLevelToColor = (_b = {},
    _b[LogLevel_1.default.CRITICAL] = createColorWrapper('red'),
    _b[LogLevel_1.default.ERROR] = createColorWrapper('redBright'),
    _b[LogLevel_1.default.WARNING] = createColorWrapper('yellow'),
    _b[LogLevel_1.default.INFO] = createColorWrapper('blue'),
    _b[LogLevel_1.default.DEBUG] = createColorWrapper('magenta'),
    _b[LogLevel_1.default.TRACE] = createGenericWrapper(0, 0),
    _b);
exports.LogLevelToColor = __export_LogLevelToColor;
var __export_LogLevelToBackgroundColor = (_c = {},
    _c[LogLevel_1.default.CRITICAL] = createBgWrapper('bgRed', createColorWrapper('white')),
    _c[LogLevel_1.default.ERROR] = createBgWrapper('bgRedBright', createColorWrapper('white')),
    _c[LogLevel_1.default.WARNING] = createBgWrapper('bgYellow', createColorWrapper('black')),
    _c[LogLevel_1.default.INFO] = createBgWrapper('bgBlue', createColorWrapper('white')),
    _c[LogLevel_1.default.DEBUG] = createBgWrapper('bgMagenta', createColorWrapper('black')),
    _c[LogLevel_1.default.TRACE] = createGenericWrapper(7, 27),
    _c);
exports.LogLevelToBackgroundColor = __export_LogLevelToBackgroundColor;
var NodeLogger = /** @class */ (function (_super) {
    tslib_1.__extends(NodeLogger, _super);
    function NodeLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeLogger.prototype.log = function (level, message) {
        if (level > this._minLevel) {
            return;
        }
        var logFn = LogLevel_1.LogLevelToConsoleFunction[level];
        var builtMessage = '';
        if (this._timestamps) {
            builtMessage += "[" + new Date().toISOString() + "] ";
        }
        if (this._emoji) {
            var emoji = exports.LogLevelToEmoji[level];
            builtMessage += emoji + " ";
        }
        if (this._colors) {
            builtMessage += exports.LogLevelToBackgroundColor[level](this._name) + " " + exports.LogLevelToBackgroundColor[level](LogLevel_1.default[level]) + " " + exports.LogLevelToColor[level](message);
        }
        else {
            builtMessage += "[" + this._name + ":" + LogLevel_1.default[level].toLowerCase() + "] " + message;
        }
        logFn(builtMessage);
    };
    return NodeLogger;
}(BaseLogger_1.default));
exports.default = NodeLogger;
module.exports = exports = NodeLogger;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevelToEmoji = __export_LogLevelToEmoji;
exports.LogLevelToColor = __export_LogLevelToColor;
exports.LogLevelToBackgroundColor = __export_LogLevelToBackgroundColor;
exports.default = NodeLogger;
//# sourceMappingURL=NodeLogger.js.map

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(42);
var LogLevel_1 = __webpack_require__(21);
var BaseLogger_1 = __webpack_require__(43);
var BrowserLogger = /** @class */ (function (_super) {
    tslib_1.__extends(BrowserLogger, _super);
    function BrowserLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserLogger.prototype.log = function (level, message) {
        if (level > this._minLevel) {
            return;
        }
        var logFn = LogLevel_1.LogLevelToConsoleFunction[level];
        var formattedMessage = "[" + this._name + "] " + message;
        if (this._timestamps) {
            formattedMessage = "[" + new Date().toISOString() + "] " + message;
        }
        logFn(formattedMessage);
    };
    return BrowserLogger;
}(BaseLogger_1.default));
exports.default = BrowserLogger;
module.exports = exports = BrowserLogger;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BrowserLogger;
//# sourceMappingURL=BrowserLogger.js.map

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(108);
var parse = __webpack_require__(109);
var formats = __webpack_require__(44);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(26);
var formats = __webpack_require__(44);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(26);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj; // eslint-disable-line no-param-reassign
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var cache_decorators_1 = __webpack_require__(5);
var UserTools_1 = __webpack_require__(6);
var TwitchClient_1 = __webpack_require__(4);
var BaseAPI_1 = __webpack_require__(3);
var ChatBadgeList_1 = __webpack_require__(46);
/**
 * The API methods that deal with badges.
 *
 * Can be accessed using `client.badges` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const cheermotes = await client.badges.getGlobalBadges();
 * ```
 */
var BadgesAPI = /** @class */ (function (_super) {
    tslib_1.__extends(BadgesAPI, _super);
    function BadgesAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves all globally applicable chat badges.
     */
    BadgesAPI.prototype.getGlobalBadges = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            url: 'https://badges.twitch.tv/v1/badges/global/display',
                            type: TwitchClient_1.TwitchAPICallType.Custom
                        })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, new ChatBadgeList_1.default(data.badge_sets, this._client)];
                }
            });
        });
    };
    /**
     * Retrieves all applicable chat badges for a given channel.
     *
     * @param channel The channel to retrieve the chat badges for.
     * @param includeGlobal Whether to include global badges in the result list.
     */
    BadgesAPI.prototype.getChannelBadges = function (channel, includeGlobal) {
        if (includeGlobal === void 0) { includeGlobal = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data, channelBadges;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            url: "https://badges.twitch.tv/v1/badges/channels/" + UserTools_1.extractUserId(channel) + "/display",
                            type: TwitchClient_1.TwitchAPICallType.Custom
                        })];
                    case 1:
                        data = _a.sent();
                        channelBadges = new ChatBadgeList_1.default(data.badge_sets, this._client);
                        if (!includeGlobal) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getGlobalBadges()];
                    case 2: return [2 /*return*/, (_a.sent())._merge(channelBadges)];
                    case 3: return [2 /*return*/, channelBadges];
                }
            });
        });
    };
    tslib_1.__decorate([
        cache_decorators_1.Cached(3600)
    ], BadgesAPI.prototype, "getGlobalBadges", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(3600)
    ], BadgesAPI.prototype, "getChannelBadges", null);
    BadgesAPI = tslib_1.__decorate([
        cache_decorators_1.Cacheable
    ], BadgesAPI);
    return BadgesAPI;
}(BaseAPI_1.default));
exports.default = BadgesAPI;
module.exports = exports = BadgesAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BadgesAPI;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/naming-convention */
function Enumerable(enumerable) {
    if (enumerable === void 0) { enumerable = true; }
    return function (target, key) {
        // first property defined in prototype, that's why we use getters/setters
        // (otherwise assignment in object will override property in prototype)
        Object.defineProperty(target, key, {
            get: function () {
                return;
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            set: function (val) {
                // here we have a reference to the instance and can set property directly to it
                Object.defineProperty(this, key, {
                    value: val,
                    writable: true,
                    enumerable: enumerable
                });
            },
            enumerable: enumerable
        });
    };
}
exports.Enumerable = Enumerable;
/** @deprecated use Enumerable(false) instead */
function NonEnumerable(target, key) {
    return Enumerable(false)(target, key);
}
exports.NonEnumerable = NonEnumerable;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enumerable = Enumerable;
exports.NonEnumerable = NonEnumerable;
//# sourceMappingURL=Enumerable.js.map

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
function flatten(arr) {
    var _a;
    return (_a = []).concat.apply(_a, tslib_1.__spread(arr));
}
exports.flatten = flatten;
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatten = flatten;
//# sourceMappingURL=flatten.js.map

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
function resolveConfigValue(value) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            if (typeof value === 'function') {
                return [2 /*return*/, value()];
            }
            return [2 /*return*/, value];
        });
    });
}
exports.resolveConfigValue = resolveConfigValue;
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveConfigValue = resolveConfigValue;
//# sourceMappingURL=resolveConfigValue.js.map

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/naming-convention
function deprecateClass(Base, msg) {
    var deprecateNoticeShown = false;
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = this;
            if (!deprecateNoticeShown) {
                // eslint-disable-next-line no-console
                console.warn("[deprecated] " + msg);
                deprecateNoticeShown = true;
            }
            _this = _super.apply(this, tslib_1.__spread(args)) || this;
            return _this;
        }
        return class_1;
    }(Base));
}
exports.deprecateClass = deprecateClass;
Object.defineProperty(exports, "__esModule", { value: true });
exports.deprecateClass = deprecateClass;
//# sourceMappingURL=deprecateClass.js.map

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var matched = function (x) { return ({
    otherwise: function () { return x; },
    on: function () { return matched(x); }
}); };
var match = function (x) { return ({
    on: function (predicate, fn) { return (predicate(x) ? matched(fn(x)) : match(x)); },
    otherwise: function (fn) { return fn(x); }
}); };
exports.match = match;
var __export_eq = function (x) { return function (y) { return x === y; }; };
exports.eq = __export_eq;
match.eq = exports.eq;
Object.defineProperty(exports, "__esModule", { value: true });
exports.match = match;
exports.eq = __export_eq;
//# sourceMappingURL=match.js.map

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var arrayToObject_1 = __webpack_require__(28);
function entriesToObject(obj) {
    return arrayToObject_1.arrayToObject(obj, function (_a) {
        var _b;
        var _c = tslib_1.__read(_a, 2), key = _c[0], val = _c[1];
        return (_b = {}, _b[key] = val, _b);
    });
}
exports.entriesToObject = entriesToObject;
Object.defineProperty(exports, "__esModule", { value: true });
exports.entriesToObject = entriesToObject;
//# sourceMappingURL=entriesToObject.js.map

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
function forEachObjectEntry(obj, fn) {
    Object.entries(obj).forEach(function (_a) {
        var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
        return fn(value, key);
    });
}
exports.forEachObjectEntry = forEachObjectEntry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEachObjectEntry = forEachObjectEntry;
//# sourceMappingURL=forEachObjectEntry.js.map

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var arrayToObject_1 = __webpack_require__(28);
function indexBy(arr, keyFn) {
    if (typeof keyFn !== 'function') {
        var key_1 = keyFn;
        keyFn = (function (value) { return value[key_1].toString(); });
    }
    return arrayToObject_1.arrayToObject(arr, function (val) {
        var _a;
        return (_a = {}, _a[keyFn(val)] = val, _a);
    });
}
exports.indexBy = indexBy;
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexBy = indexBy;
//# sourceMappingURL=indexBy.js.map

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
function mapObject(obj, fn) {
    var mapped = Object.entries(obj).map(
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    function (_a) {
        var _b;
        var _c = tslib_1.__read(_a, 2), key = _c[0], value = _c[1];
        return (_b = {}, _b[key] = fn(value, key), _b);
    });
    return Object.assign.apply(Object, tslib_1.__spread([{}], mapped));
}
exports.mapObject = mapObject;
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapObject = mapObject;
//# sourceMappingURL=mapObject.js.map

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pick_1 = __webpack_require__(45);
function omit(obj, keys) {
    return pick_1.pick(obj, Object.keys(obj).filter(function (key) { return !keys.includes(key); }));
}
exports.omit = omit;
Object.defineProperty(exports, "__esModule", { value: true });
exports.omit = omit;
//# sourceMappingURL=omit.js.map

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
function delay(ms) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
        });
    });
}
exports.delay = delay;
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = delay;
//# sourceMappingURL=delay.js.map

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function padLeft(str, length, padding) {
    if (typeof str === 'number') {
        str = str.toString();
    }
    length = length - str.length;
    if (length <= 0) {
        return str;
    }
    if (padding === undefined) {
        padding = ' ';
    }
    var paddingStr = '';
    do {
        /* eslint-disable no-bitwise */
        if ((length & 1) === 1) {
            paddingStr += padding;
        }
        length >>= 1;
        if (length) {
            padding += padding;
        }
        /* eslint-enable no-bitwise */
    } while (length);
    return paddingStr + str;
}
exports.padLeft = padLeft;
Object.defineProperty(exports, "__esModule", { value: true });
exports.padLeft = padLeft;
//# sourceMappingURL=padLeft.js.map

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
function splitWithLimit(str, delim, count) {
    var parts = str.split(delim);
    if (parts.length <= count) {
        return parts;
    }
    return tslib_1.__spread(parts.slice(0, count - 1), [parts.slice(count - 1).join(delim)]);
}
exports.splitWithLimit = splitWithLimit;
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitWithLimit = splitWithLimit;
//# sourceMappingURL=splitWithLimit.js.map

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
function utf8Length(str) {
    return tslib_1.__spread(str).length;
}
exports.utf8Length = utf8Length;
Object.defineProperty(exports, "__esModule", { value: true });
exports.utf8Length = utf8Length;
//# sourceMappingURL=utf8Length.js.map

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
function utf8Substring(str, start, end) {
    return tslib_1.__spread(str).slice(start, end).join('');
}
exports.utf8Substring = utf8Substring;
Object.defineProperty(exports, "__esModule", { value: true });
exports.utf8Substring = utf8Substring;
//# sourceMappingURL=utf8Substring.js.map

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var cache_decorators_1 = __webpack_require__(5);
var BaseAPI_1 = __webpack_require__(3);
var HelixBitsAPI_1 = __webpack_require__(127);
var HelixClipAPI_1 = __webpack_require__(128);
var HelixExtensionsAPI_1 = __webpack_require__(129);
var HelixGameAPI_1 = __webpack_require__(130);
var HelixModerationAPI_1 = __webpack_require__(131);
var HelixStreamAPI_1 = __webpack_require__(132);
var HelixSubscriptionAPI_1 = __webpack_require__(134);
var HelixUserAPI_1 = __webpack_require__(135);
var HelixVideoAPI_1 = __webpack_require__(136);
var HelixWebHooksAPI_1 = __webpack_require__(137);
/**
 * Groups all API calls available in Helix a.k.a. the "New Twitch API".
 *
 * Can be accessed using {@TwitchClient#helix}.
 */
var HelixAPIGroup = /** @class */ (function (_super) {
    tslib_1.__extends(HelixAPIGroup, _super);
    function HelixAPIGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HelixAPIGroup.prototype, "bits", {
        /**
         * The Helix bits API methods.
         */
        get: function () {
            return new HelixBitsAPI_1.default(this._client);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixAPIGroup.prototype, "clips", {
        /**
         * The Helix clips API methods.
         */
        get: function () {
            return new HelixClipAPI_1.default(this._client);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixAPIGroup.prototype, "extensions", {
        /**
         * The Helix extensions API methods.
         */
        get: function () {
            return new HelixExtensionsAPI_1.default(this._client);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixAPIGroup.prototype, "games", {
        /**
         * The Helix game API methods.
         */
        get: function () {
            return new HelixGameAPI_1.default(this._client);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixAPIGroup.prototype, "moderation", {
        /**
         * The Helix moderation API methods.
         */
        get: function () {
            return new HelixModerationAPI_1.default(this._client);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixAPIGroup.prototype, "streams", {
        /**
         * The Helix stream API methods.
         */
        get: function () {
            return new HelixStreamAPI_1.default(this._client);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixAPIGroup.prototype, "subscriptions", {
        /**
         * The Helix subscription API methods.
         */
        get: function () {
            return new HelixSubscriptionAPI_1.default(this._client);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixAPIGroup.prototype, "users", {
        /**
         * The Helix user API methods.
         */
        get: function () {
            return new HelixUserAPI_1.default(this._client);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixAPIGroup.prototype, "webHooks", {
        /**
         * The Helix WebHook API methods.
         */
        get: function () {
            return new HelixWebHooksAPI_1.default(this._client);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixAPIGroup.prototype, "videos", {
        /**
         * The Helix video API methods.
         */
        get: function () {
            return new HelixVideoAPI_1.default(this._client);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixAPIGroup.prototype, "bits", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixAPIGroup.prototype, "clips", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixAPIGroup.prototype, "extensions", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixAPIGroup.prototype, "games", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixAPIGroup.prototype, "moderation", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixAPIGroup.prototype, "streams", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixAPIGroup.prototype, "subscriptions", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixAPIGroup.prototype, "users", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixAPIGroup.prototype, "webHooks", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixAPIGroup.prototype, "videos", null);
    HelixAPIGroup = tslib_1.__decorate([
        cache_decorators_1.Cacheable
    ], HelixAPIGroup);
    return HelixAPIGroup;
}(BaseAPI_1.default));
exports.default = HelixAPIGroup;
module.exports = exports = HelixAPIGroup;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixAPIGroup;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var BaseAPI_1 = __webpack_require__(3);
var TwitchClient_1 = __webpack_require__(4);
var HelixBitsLeaderboard_1 = __webpack_require__(49);
/**
 * The Helix API methods that deal with bits.
 *
 * Can be accessed using `client.helix.bits` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const leaderboard = await client.helix.bits.getLeaderboard({ period: 'day' });
 * ```
 */
var HelixBitsAPI = /** @class */ (function (_super) {
    tslib_1.__extends(HelixBitsAPI, _super);
    function HelixBitsAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a bits leaderboard of your channel.
     *
     * @expandParams
     */
    HelixBitsAPI.prototype.getLeaderboard = function (params) {
        if (params === void 0) { params = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, count, _b, period, startDate, contextUserId, result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = params.count, count = _a === void 0 ? 10 : _a, _b = params.period, period = _b === void 0 ? 'all' : _b, startDate = params.startDate, contextUserId = params.contextUserId;
                        return [4 /*yield*/, this._client.callAPI({
                                type: TwitchClient_1.TwitchAPICallType.Helix,
                                url: 'bits/leaderboard',
                                scope: 'bits:read',
                                query: {
                                    count: count.toString(),
                                    period: period,
                                    started_at: startDate ? startDate.toISOString() : undefined,
                                    user_id: contextUserId
                                }
                            })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, new HelixBitsLeaderboard_1.default(result, this._client)];
                }
            });
        });
    };
    return HelixBitsAPI;
}(BaseAPI_1.default));
exports.default = HelixBitsAPI;
module.exports = exports = HelixBitsAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixBitsAPI;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var TwitchClient_1 = __webpack_require__(4);
var BaseAPI_1 = __webpack_require__(3);
var HelixPaginatedRequest_1 = __webpack_require__(9);
var HelixPaginatedResult_1 = __webpack_require__(11);
var HelixClip_1 = __webpack_require__(51);
/**
 * The Helix API methods that deal with clips.
 *
 * Can be accessed using `client.helix.clips` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const clipId = await client.helix.clips.createClip({ channelId: '125328655' });
 * ```
 */
var HelixClipAPI = /** @class */ (function (_super) {
    tslib_1.__extends(HelixClipAPI, _super);
    function HelixClipAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves the latest clips for the specified broadcaster.
     *
     * @param userId The broadcaster's user ID.
     * @param filter
     *
     * @expandParams
     */
    HelixClipAPI.prototype.getClipsForBroadcaster = function (userId, filter) {
        if (filter === void 0) { filter = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._getClips(tslib_1.__assign(tslib_1.__assign({}, filter), { filterType: 'broadcaster_id', ids: userId }))];
            });
        });
    };
    /**
     * Creates a paginator for the latest clips for the specified broadcaster.
     *
     * @param userId The broadcaster's user ID.
     * @param filter
     *
     * @expandParams
     */
    HelixClipAPI.prototype.getClipsForBroadcasterPaginated = function (userId, filter) {
        if (filter === void 0) { filter = {}; }
        return this._getClipsPaginated(tslib_1.__assign(tslib_1.__assign({}, filter), { filterType: 'broadcaster_id', ids: userId }));
    };
    /**
     * Retrieves the latest clips for the specified game.
     *
     * @param gameId The game ID.
     * @param filter
     *
     * @expandParams
     */
    HelixClipAPI.prototype.getClipsForGame = function (gameId, filter) {
        if (filter === void 0) { filter = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._getClips(tslib_1.__assign(tslib_1.__assign({}, filter), { filterType: 'game_id', ids: gameId }))];
            });
        });
    };
    /**
     * Creates a paginator for the latest clips for the specified game.
     *
     * @param gameId The game ID.
     * @param filter
     *
     * @expandParams
     */
    HelixClipAPI.prototype.getClipsForGamePaginated = function (gameId, filter) {
        if (filter === void 0) { filter = {}; }
        return this._getClipsPaginated(tslib_1.__assign(tslib_1.__assign({}, filter), { filterType: 'game_id', ids: gameId }));
    };
    /**
     * Retrieves the clips identified by the given IDs.
     *
     * @param ids The clip IDs.
     */
    HelixClipAPI.prototype.getClipsByIds = function (ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getClips({
                            filterType: 'id',
                            ids: ids
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    /**
     * Retrieves the clip identified by the given ID.
     *
     * @param id The clip ID.
     */
    HelixClipAPI.prototype.getClipById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var clips;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getClipsByIds([id])];
                    case 1:
                        clips = _a.sent();
                        return [2 /*return*/, clips.length ? clips[0] : null];
                }
            });
        });
    };
    /**
     * Creates a clip of a running stream.
     *
     * Returns the ID of the clip.
     *
     * @expandParams
     */
    HelixClipAPI.prototype.createClip = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var channelId, _a, createAfterDelay, result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        channelId = params.channelId, _a = params.createAfterDelay, createAfterDelay = _a === void 0 ? false : _a;
                        return [4 /*yield*/, this._client.callAPI({
                                type: TwitchClient_1.TwitchAPICallType.Helix,
                                url: 'clips',
                                method: 'POST',
                                scope: 'clips:edit',
                                query: {
                                    broadcaster_id: channelId,
                                    has_delay: createAfterDelay.toString()
                                }
                            })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, result.data[0].id];
                }
            });
        });
    };
    HelixClipAPI.prototype._getClips = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var filterType, ids, startDate, endDate, _a, limit, result;
            var _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        filterType = params.filterType, ids = params.ids, startDate = params.startDate, endDate = params.endDate, _a = params.limit, limit = _a === void 0 ? 20 : _a;
                        return [4 /*yield*/, this._client.callAPI({
                                type: TwitchClient_1.TwitchAPICallType.Helix,
                                url: 'clips',
                                query: (_b = {},
                                    _b[filterType] = ids,
                                    _b.started_at = startDate,
                                    _b.ended_at = endDate,
                                    _b.first = limit.toString(),
                                    _b)
                            })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixClip_1.default, this._client)];
                }
            });
        });
    };
    HelixClipAPI.prototype._getClipsPaginated = function (params) {
        var _a;
        var _this = this;
        var filterType = params.filterType, ids = params.ids, startDate = params.startDate, endDate = params.endDate;
        return new HelixPaginatedRequest_1.default({
            url: 'clips',
            query: (_a = {},
                _a[filterType] = ids,
                _a.started_at = startDate,
                _a.ended_at = endDate,
                _a)
        }, this._client, function (data) { return new HelixClip_1.default(data, _this._client); });
    };
    return HelixClipAPI;
}(BaseAPI_1.default));
exports.default = HelixClipAPI;
module.exports = exports = HelixClipAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixClipAPI;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var TwitchClient_1 = __webpack_require__(4);
var BaseAPI_1 = __webpack_require__(3);
var HelixPaginatedRequest_1 = __webpack_require__(9);
var HelixPaginatedResult_1 = __webpack_require__(11);
var HelixPagination_1 = __webpack_require__(18);
var HelixExtensionTransaction_1 = __webpack_require__(52);
/**
 * The Helix API methods that deal with extensions.
 *
 * Can be accessed using `client.helix.extensions` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const transactions = await client.helix.extionsions.getExtensionTransactions('abcd');
 * ```
 */
var HelixExtensionsAPI = /** @class */ (function (_super) {
    tslib_1.__extends(HelixExtensionsAPI, _super);
    function HelixExtensionsAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of transactions for the given extension.
     *
     * @param extensionId The ID of the extension to retrieve transactions for.
     * @param filter Additional filters.
     */
    HelixExtensionsAPI.prototype.getExtensionTransactions = function (extensionId, filter) {
        if (filter === void 0) { filter = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            type: TwitchClient_1.TwitchAPICallType.Helix,
                            url: 'extensions/transactions',
                            query: tslib_1.__assign({ extension_id: extensionId, id: filter.transactionIds }, HelixPagination_1.makePaginationQuery(filter))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixExtensionTransaction_1.default, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for transactions for the given extension.
     *
     * @param extensionId The ID of the extension to retrieve transactions for.
     * @param filter Additional filters.
     */
    HelixExtensionsAPI.prototype.getExtensionTransactionsPaginated = function (extensionId, filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return new HelixPaginatedRequest_1.default({
            url: 'extensions/transactions',
            query: {
                extension_id: extensionId,
                id: filter.transactionIds
            }
        }, this._client, function (data) { return new HelixExtensionTransaction_1.default(data, _this._client); });
    };
    return HelixExtensionsAPI;
}(BaseAPI_1.default));
exports.default = HelixExtensionsAPI;
module.exports = exports = HelixExtensionsAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixExtensionsAPI;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var TwitchClient_1 = __webpack_require__(4);
var BaseAPI_1 = __webpack_require__(3);
var HelixPaginatedRequest_1 = __webpack_require__(9);
var HelixPaginatedResult_1 = __webpack_require__(11);
var HelixPagination_1 = __webpack_require__(18);
var HelixGame_1 = __webpack_require__(53);
/**
 * The Helix API methods that deal with games.
 *
 * Can be accessed using `client.helix.games` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const game = await client.helix.games.getGameByName('Hearthstone');
 * ```
 */
var HelixGameAPI = /** @class */ (function (_super) {
    tslib_1.__extends(HelixGameAPI, _super);
    function HelixGameAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves the game data for the given list of game IDs.
     *
     * @param ids The game IDs you want to look up.
     */
    HelixGameAPI.prototype.getGamesByIds = function (ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._getGames('id', ids)];
            });
        });
    };
    /**
     * Retrieves the game data for the given list of game names.
     *
     * @param names The game names you want to look up.
     */
    HelixGameAPI.prototype.getGamesByNames = function (names) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._getGames('name', names)];
            });
        });
    };
    /**
     * Retrieves the game data for the given game ID.
     *
     * @param id The game ID you want to look up.
     */
    HelixGameAPI.prototype.getGameById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var games;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getGames('id', id)];
                    case 1:
                        games = _a.sent();
                        return [2 /*return*/, games.length ? games[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves the game data for the given game name.
     *
     * @param name The game name you want to look up.
     */
    HelixGameAPI.prototype.getGameByName = function (name) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var games;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getGames('name', name)];
                    case 1:
                        games = _a.sent();
                        return [2 /*return*/, games.length ? games[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves a list of the most viewed games at the moment.
     *
     * @param pagination Pagination info.
     */
    HelixGameAPI.prototype.getTopGames = function (pagination) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            type: TwitchClient_1.TwitchAPICallType.Helix,
                            url: 'games/top',
                            query: HelixPagination_1.makePaginationQuery(pagination)
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixGame_1.default, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for the most viewed games at the moment.
     */
    HelixGameAPI.prototype.getTopGamesPaginated = function () {
        var _this = this;
        return new HelixPaginatedRequest_1.default({
            url: 'games/top'
        }, this._client, function (data) { return new HelixGame_1.default(data, _this._client); });
    };
    HelixGameAPI.prototype._getGames = function (filterType, filterValues) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            type: TwitchClient_1.TwitchAPICallType.Helix,
                            url: 'games',
                            query: (_a = {},
                                _a[filterType] = filterValues,
                                _a)
                        })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, result.data.map(function (entry) { return new HelixGame_1.default(entry, _this._client); })];
                }
            });
        });
    };
    return HelixGameAPI;
}(BaseAPI_1.default));
exports.default = HelixGameAPI;
module.exports = exports = HelixGameAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixGameAPI;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var UserTools_1 = __webpack_require__(6);
var TwitchClient_1 = __webpack_require__(4);
var BaseAPI_1 = __webpack_require__(3);
var HelixPaginatedRequest_1 = __webpack_require__(9);
var HelixPaginatedResult_1 = __webpack_require__(11);
var HelixPagination_1 = __webpack_require__(18);
var HelixBan_1 = __webpack_require__(29);
var HelixBanEvent_1 = __webpack_require__(54);
var HelixModerator_1 = __webpack_require__(30);
var HelixModeratorEvent_1 = __webpack_require__(55);
/**
 * The Helix API methods that deal with moderation.
 *
 * Can be accessed using `client.helix.moderation` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const game = await client.helix.moderation.getBannedUsers('61369223');
 * ```
 */
var HelixModerationAPI = /** @class */ (function (_super) {
    tslib_1.__extends(HelixModerationAPI, _super);
    function HelixModerationAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of banned users in a given channel.
     *
     * @param channel The channel to retrieve the banned users from.
     * @param filter Additional filters for the result set.
     */
    HelixModerationAPI.prototype.getBannedUsers = function (channel, filter) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            type: TwitchClient_1.TwitchAPICallType.Helix,
                            url: 'moderation/banned',
                            scope: 'moderation:read',
                            query: tslib_1.__assign({ broadcaster_id: UserTools_1.extractUserId(channel), user_id: (_a = filter) === null || _a === void 0 ? void 0 : _a.userId }, HelixPagination_1.makePaginationQuery(filter))
                        })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixBan_1.default, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for banned users in a given channel.
     *
     * @param channel The channel to retrieve the banned users from.
     */
    HelixModerationAPI.prototype.getBannedUsersPaginated = function (channel) {
        var _this = this;
        return new HelixPaginatedRequest_1.default({
            url: 'moderation/banned',
            scope: 'moderation:read',
            query: {
                broadcaster_id: UserTools_1.extractUserId(channel)
            }
        }, this._client, function (data) { return new HelixBan_1.default(data, _this._client); });
    };
    /**
     * Checks whether a given user is banned in a given channel.
     *
     * @param channel The channel to check for a ban of the given user.
     * @param user The user to check for a ban in the given channel.
     */
    HelixModerationAPI.prototype.checkUserBan = function (channel, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = UserTools_1.extractUserId(user);
                        return [4 /*yield*/, this.getBannedUsers(channel, { userId: userId })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.some(function (ban) { return ban.userId === userId; })];
                }
            });
        });
    };
    /**
     * Retrieves a list of ban events for a given channel.
     *
     * @param channel The channel to retrieve the ban events from.
     * @param filter Additional filters for the result set.
     */
    HelixModerationAPI.prototype.getBanEvents = function (channel, filter) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            type: TwitchClient_1.TwitchAPICallType.Helix,
                            url: 'moderation/banned/events',
                            scope: 'moderation:read',
                            query: tslib_1.__assign({ broadcaster_id: UserTools_1.extractUserId(channel), user_id: (_a = filter) === null || _a === void 0 ? void 0 : _a.userId }, HelixPagination_1.makePaginationQuery(filter))
                        })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, {
                                data: result.data.map(function (data) { return new HelixBanEvent_1.default(data, _this._client); }),
                                cursor: (_b = result.pagination) === null || _b === void 0 ? void 0 : _b.cursor
                            }];
                }
            });
        });
    };
    /**
     * Creates a paginator for ban events for a given channel.
     *
     * @param channel The channel to retrieve the ban events from.
     */
    HelixModerationAPI.prototype.getBanEventsPaginated = function (channel) {
        var _this = this;
        return new HelixPaginatedRequest_1.default({
            url: 'moderation/banned/events',
            scope: 'moderation:read',
            query: {
                broadcaster_id: UserTools_1.extractUserId(channel)
            }
        }, this._client, function (data) { return new HelixBanEvent_1.default(data, _this._client); });
    };
    /**
     * Retrieves a list of moderators in a given channel.
     *
     * @param channel The channel to retrieve moderators from.
     * @param filter Additional filters for the result set.
     */
    HelixModerationAPI.prototype.getModerators = function (channel, filter) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            type: TwitchClient_1.TwitchAPICallType.Helix,
                            url: 'moderation/moderators',
                            scope: 'moderation:read',
                            query: tslib_1.__assign({ broadcaster_id: UserTools_1.extractUserId(channel), user_id: (_a = filter) === null || _a === void 0 ? void 0 : _a.userId }, HelixPagination_1.makePaginationQuery(filter))
                        })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixModerator_1.default, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for moderators in a given channel.
     *
     * @param channel The channel to retrieve moderators from.
     */
    HelixModerationAPI.prototype.getModeratorsPaginated = function (channel) {
        var _this = this;
        return new HelixPaginatedRequest_1.default({
            url: 'moderation/moderators',
            scope: 'moderation:read',
            query: {
                broadcaster_id: UserTools_1.extractUserId(channel)
            }
        }, this._client, function (data) { return new HelixModerator_1.default(data, _this._client); });
    };
    /**
     * Checks whether a given user is a moderator of a given channel.
     *
     * @param channel The channel to check.
     * @param user The user to check.
     */
    HelixModerationAPI.prototype.checkUserMod = function (channel, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = UserTools_1.extractUserId(user);
                        return [4 /*yield*/, this.getModerators(channel, { userId: userId })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.some(function (mod) { return mod.userId === userId; })];
                }
            });
        });
    };
    /**
     * Retrieves a list of moderator events for a given channel.
     *
     * @param channel The channel to retrieve the moderator events from.
     * @param filter Additional filters for the result set.
     */
    HelixModerationAPI.prototype.getModeratorEvents = function (channel, filter) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            type: TwitchClient_1.TwitchAPICallType.Helix,
                            url: 'moderation/moderators/events',
                            scope: 'moderation:read',
                            query: tslib_1.__assign({ broadcaster_id: UserTools_1.extractUserId(channel), user_id: (_a = filter) === null || _a === void 0 ? void 0 : _a.userId }, HelixPagination_1.makePaginationQuery(filter))
                        })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixModeratorEvent_1.default, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for moderator events for a given channel.
     *
     * @param channel The channel to retrieve the moderator events from.
     */
    HelixModerationAPI.prototype.getModeratorEventsPaginated = function (channel) {
        var _this = this;
        return new HelixPaginatedRequest_1.default({
            url: 'moderation/moderators/events',
            scope: 'moderation:read',
            query: {
                broadcaster_id: UserTools_1.extractUserId(channel)
            }
        }, this._client, function (data) { return new HelixModeratorEvent_1.default(data, _this._client); });
    };
    return HelixModerationAPI;
}(BaseAPI_1.default));
exports.default = HelixModerationAPI;
module.exports = exports = HelixModerationAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixModerationAPI;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
var HTTPStatusCodeError_1 = __webpack_require__(19);
var StreamNotLiveError_1 = __webpack_require__(56);
var UserTools_1 = __webpack_require__(6);
var TwitchClient_1 = __webpack_require__(4);
var BaseAPI_1 = __webpack_require__(3);
var HelixPaginatedRequest_1 = __webpack_require__(9);
var HelixPaginatedResult_1 = __webpack_require__(11);
var HelixPagination_1 = __webpack_require__(18);
var HelixStream_1 = __webpack_require__(57);
var HelixStreamMarker_1 = __webpack_require__(58);
var HelixStreamMarkerWithVideo_1 = __webpack_require__(133);
/**
 * The Helix API methods that deal with streams.
 *
 * Can be accessed using `client.helix.streams` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const stream = await client.helix.streams.getStreamByUserId('125328655');
 * ```
 */
var HelixStreamAPI = /** @class */ (function (_super) {
    tslib_1.__extends(HelixStreamAPI, _super);
    function HelixStreamAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of streams.
     *
     * @expandParams
     */
    HelixStreamAPI.prototype.getStreams = function (filter) {
        if (filter === void 0) { filter = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            url: 'streams',
                            type: TwitchClient_1.TwitchAPICallType.Helix,
                            query: tslib_1.__assign(tslib_1.__assign({}, HelixPagination_1.makePaginationQuery(filter)), { community_id: filter.community, game_id: filter.game, language: filter.language, type: filter.type, user_id: filter.userId, user_login: filter.userName })
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixStream_1.default, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for streams.
     *
     * @expandParams
     */
    HelixStreamAPI.prototype.getStreamsPaginated = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return new HelixPaginatedRequest_1.default({
            url: 'streams',
            query: {
                community_id: filter.community,
                game_id: filter.game,
                language: filter.language,
                type: filter.type,
                user_id: filter.userId,
                user_login: filter.userName
            }
        }, this._client, function (data) { return new HelixStream_1.default(data, _this._client); });
    };
    /**
     * Retrieves the current stream for the given user name.
     *
     * @param user The user name to retrieve the stream for.
     */
    HelixStreamAPI.prototype.getStreamByUserName = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStreams({ userName: UserTools_1.extractUserName(user) })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.length ? result.data[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves the current stream for the given user ID.
     *
     * @param user The user ID to retrieve the stream for.
     */
    HelixStreamAPI.prototype.getStreamByUserId = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStreams({ userId: UserTools_1.extractUserId(user) })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.length ? result.data[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves a list of all stream markers for an user.
     *
     * @param user The user to list the stream markers for.
     */
    HelixStreamAPI.prototype.getStreamMarkersForUser = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._getStreamMarkers('user_id', UserTools_1.extractUserId(user))];
            });
        });
    };
    /**
     * Creates a paginator for all stream markers for an user.
     *
     * @param user The user to list the stream markers for.
     */
    HelixStreamAPI.prototype.getStreamMarkersForUserPaginated = function (user) {
        return this._getStreamMarkersPaginated('user_id', UserTools_1.extractUserId(user));
    };
    /**
     * Retrieves a list of all stream markers for a video.
     *
     * @param videoId The video to list the stream markers for.
     */
    HelixStreamAPI.prototype.getStreamMarkersForVideo = function (videoId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._getStreamMarkers('video_id', videoId)];
            });
        });
    };
    /**
     * Creates a paginator for all stream markers for a video.
     *
     * @param videoId The video to list the stream markers for.
     */
    HelixStreamAPI.prototype.getStreamMarkersForVideoPaginated = function (videoId) {
        return this._getStreamMarkersPaginated('video_id', videoId);
    };
    /**
     * Creates a new stream marker.
     *
     * Only works while the specified user's stream is live.
     */
    HelixStreamAPI.prototype.createStreamMarker = function (userId, description) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._client.callAPI({
                                url: 'streams/markers',
                                method: 'POST',
                                type: TwitchClient_1.TwitchAPICallType.Helix,
                                scope: 'user:edit:broadcast',
                                query: {
                                    user_id: userId,
                                    description: description
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixStreamMarker_1.default(result.data[0], this._client)];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 instanceof HTTPStatusCodeError_1.default && e_1.statusCode === 404) {
                            throw new StreamNotLiveError_1.default();
                        }
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HelixStreamAPI.prototype._getStreamMarkers = function (queryType, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            url: 'streams/markers',
                            type: TwitchClient_1.TwitchAPICallType.Helix,
                            query: (_a = {},
                                _a[queryType] = id,
                                _a),
                            scope: 'user:read:broadcast'
                        })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, {
                                data: shared_utils_1.flatten(result.data.map(HelixStreamAPI._mapGetStreamMarkersResult.bind(this._client))),
                                cursor: result.pagination && result.pagination.cursor
                            }];
                }
            });
        });
    };
    HelixStreamAPI.prototype._getStreamMarkersPaginated = function (queryType, id) {
        var _a;
        return new HelixPaginatedRequest_1.default({
            url: 'streams/markers',
            query: (_a = {},
                _a[queryType] = id,
                _a),
            scope: 'user:read:broadcast'
        }, this._client, HelixStreamAPI._mapGetStreamMarkersResult.bind(this._client));
    };
    HelixStreamAPI._mapGetStreamMarkersResult = function (data) {
        var _this = this;
        return data.videos.reduce(function (result, video) { return tslib_1.__spread(result, video.markers.map(function (marker) { return new HelixStreamMarkerWithVideo_1.default(marker, video.video_id, _this); })); }, []);
    };
    return HelixStreamAPI;
}(BaseAPI_1.default));
exports.default = HelixStreamAPI;
module.exports = exports = HelixStreamAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixStreamAPI;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var HelixStreamMarker_1 = __webpack_require__(58);
var HelixStreamMarkerWithVideo = /** @class */ (function (_super) {
    tslib_1.__extends(HelixStreamMarkerWithVideo, _super);
    /** @private */
    function HelixStreamMarkerWithVideo(data, _videoId, client) {
        var _this = _super.call(this, data, client) || this;
        _this._videoId = _videoId;
        return _this;
    }
    Object.defineProperty(HelixStreamMarkerWithVideo.prototype, "url", {
        /**
         * The URL of the video, which will start playing at the position of the stream marker.
         */
        get: function () {
            return this._data.URL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixStreamMarkerWithVideo.prototype, "videoId", {
        /**
         * The ID of the video.
         */
        get: function () {
            return this._videoId;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves the video data of the video the marker was set in.
     */
    HelixStreamMarkerWithVideo.prototype.getVideo = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.videos.getVideoById(this._videoId)];
            });
        });
    };
    return HelixStreamMarkerWithVideo;
}(HelixStreamMarker_1.default));
exports.default = HelixStreamMarkerWithVideo;
module.exports = exports = HelixStreamMarkerWithVideo;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixStreamMarkerWithVideo;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var UserTools_1 = __webpack_require__(6);
var TwitchClient_1 = __webpack_require__(4);
var BaseAPI_1 = __webpack_require__(3);
var HelixPaginatedRequest_1 = __webpack_require__(9);
var HelixPaginatedResult_1 = __webpack_require__(11);
var HelixSubscription_1 = __webpack_require__(31);
var HelixSubscriptionEvent_1 = __webpack_require__(59);
/**
 * The Helix API methods that deal with subscriptions.
 *
 * Can be accessed using `client.helix.subscriptions` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const subscriptions = await client.helix.subscriptions.getSubscriptionsForUsers('61369223', '125328655');
 * ```
 */
var HelixSubscriptionAPI = /** @class */ (function (_super) {
    tslib_1.__extends(HelixSubscriptionAPI, _super);
    function HelixSubscriptionAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of all subscriptions to a given broadcaster.
     *
     * @param broadcaster The broadcaster to list subscriptions to.
     */
    HelixSubscriptionAPI.prototype.getSubscriptions = function (broadcaster) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            url: 'subscriptions',
                            scope: 'channel:read:subscriptions',
                            type: TwitchClient_1.TwitchAPICallType.Helix,
                            query: {
                                broadcaster_id: UserTools_1.extractUserId(broadcaster)
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixSubscription_1.default, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for all subscriptions to a given broadcaster.
     *
     * @param broadcaster The broadcaster to list subscriptions to.
     */
    HelixSubscriptionAPI.prototype.getSubscriptionsPaginated = function (broadcaster) {
        var _this = this;
        return new HelixPaginatedRequest_1.default({
            url: 'subscriptions',
            scope: 'channel:read:subscriptions',
            query: {
                broadcaster_id: UserTools_1.extractUserId(broadcaster)
            }
        }, this._client, function (data) { return new HelixSubscription_1.default(data, _this._client); });
    };
    /**
     * Retrieves the subset of the given user list that is subscribed to the given broadcaster.
     *
     * @param broadcaster The broadcaster to find subscriptions to.
     * @param users The users that should be checked for subscriptions.
     */
    HelixSubscriptionAPI.prototype.getSubscriptionsForUsers = function (broadcaster, users) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            url: 'subscriptions',
                            scope: 'channel:read:subscriptions',
                            type: TwitchClient_1.TwitchAPICallType.Helix,
                            query: {
                                broadcaster_id: UserTools_1.extractUserId(broadcaster),
                                user_id: users.map(UserTools_1.extractUserId)
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixSubscription_1.default(data, _this._client); })];
                }
            });
        });
    };
    /**
     * Retrieves the subscription data for a given user to a given broadcaster.
     *
     * @param broadcaster The broadcaster to check.
     * @param user The user to check.
     */
    HelixSubscriptionAPI.prototype.getSubscriptionForUser = function (broadcaster, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var list;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSubscriptionsForUsers(broadcaster, [user])];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, list.length ? list[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves the most recent subscription events for a given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve subscription events for.
     */
    HelixSubscriptionAPI.prototype.getSubscriptionEventsForBroadcaster = function (broadcaster) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._getSubscriptionEvents('broadcaster_id', UserTools_1.extractUserId(broadcaster))];
            });
        });
    };
    /**
     * Creates a paginator for the recent subscription events for a given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve subscription events for.
     */
    HelixSubscriptionAPI.prototype.getSubscriptionEventsForBroadcasterPaginated = function (broadcaster) {
        var _this = this;
        return new HelixPaginatedRequest_1.default({
            url: 'subscriptions/events',
            scope: 'channel:read:subscriptions',
            query: {
                broadcaster_id: UserTools_1.extractUserId(broadcaster)
            }
        }, this._client, function (data) { return new HelixSubscriptionEvent_1.default(data, _this._client); });
    };
    /**
     * Retrieves a single subscription event by ID.
     *
     * @param id The event ID.
     */
    HelixSubscriptionAPI.prototype.getSubscriptionEventById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._getSubscriptionEvents('id', id)];
            });
        });
    };
    HelixSubscriptionAPI.prototype._getSubscriptionEvents = function (by, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            type: TwitchClient_1.TwitchAPICallType.Helix,
                            url: 'subscriptions/events',
                            scope: 'channel:read:subscriptions',
                            query: (_a = {},
                                _a[by] = id,
                                _a)
                        })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixSubscriptionEvent_1.default, this._client)];
                }
            });
        });
    };
    return HelixSubscriptionAPI;
}(BaseAPI_1.default));
exports.default = HelixSubscriptionAPI;
module.exports = exports = HelixSubscriptionAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixSubscriptionAPI;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var HellFreezesOverError_1 = __webpack_require__(20);
var UserTools_1 = __webpack_require__(6);
var TwitchClient_1 = __webpack_require__(4);
var BaseAPI_1 = __webpack_require__(3);
var HelixPaginatedRequestWithTotal_1 = __webpack_require__(60);
var HelixPaginatedResult_1 = __webpack_require__(11);
var HelixFollow_1 = __webpack_require__(61);
var HelixPrivilegedUser_1 = __webpack_require__(62);
var HelixUser_1 = __webpack_require__(32);
/** @private */
var UserLookupType;
(function (UserLookupType) {
    UserLookupType["Id"] = "id";
    UserLookupType["Login"] = "login";
})(UserLookupType || (UserLookupType = {}));
exports.UserLookupType = UserLookupType;
/**
 * The Helix API methods that deal with users.
 *
 * Can be accessed using `client.helix.users` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const user = await client.helix.users.getUserById('125328655');
 * ```
 */
var HelixUserAPI = /** @class */ (function (_super) {
    tslib_1.__extends(HelixUserAPI, _super);
    function HelixUserAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves the user data for the given list of user IDs.
     *
     * @param userIds The user IDs you want to look up.
     */
    HelixUserAPI.prototype.getUsersByIds = function (userIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._getUsers(UserLookupType.Id, userIds.map(UserTools_1.extractUserId))];
            });
        });
    };
    /**
     * Retrieves the user data for the given list of user names.
     *
     * @param userNames The user names you want to look up.
     */
    HelixUserAPI.prototype.getUsersByNames = function (userNames) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._getUsers(UserLookupType.Login, userNames.map(UserTools_1.extractUserName))];
            });
        });
    };
    /**
     * Retrieves the user data for the given user ID.
     *
     * @param userId The user ID you want to look up.
     */
    HelixUserAPI.prototype.getUserById = function (userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var users;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getUsers(UserLookupType.Id, UserTools_1.extractUserId(userId))];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users.length ? users[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves the user data for the given user name.
     *
     * @param userName The user name you want to look up.
     */
    HelixUserAPI.prototype.getUserByName = function (userName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var users;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getUsers(UserLookupType.Login, UserTools_1.extractUserName(userName))];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users.length ? users[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves the user data of the currently authenticated user.
     *
     * @param withEmail Whether you need the user's email address.
     */
    HelixUserAPI.prototype.getMe = function (withEmail) {
        if (withEmail === void 0) { withEmail = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            type: TwitchClient_1.TwitchAPICallType.Helix,
                            url: 'users',
                            scope: withEmail ? 'user:read:email' : ''
                        })];
                    case 1:
                        result = _a.sent();
                        if (!result.data || !result.data.length) {
                            throw new HellFreezesOverError_1.default('Could not get authenticated user');
                        }
                        return [2 /*return*/, new HelixPrivilegedUser_1.default(result.data[0], this._client)];
                }
            });
        });
    };
    /**
     * Updates the currently authenticated user's data.
     *
     * @param data The data to update.
     */
    HelixUserAPI.prototype.updateUser = function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            type: TwitchClient_1.TwitchAPICallType.Helix,
                            url: 'users',
                            method: 'PUT',
                            scope: 'user:edit',
                            query: {
                                description: data.description
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixPrivilegedUser_1.default(result.data[0], this._client)];
                }
            });
        });
    };
    /**
     * Retrieves a list of follow relations.
     *
     * @param filter Several filtering and pagination parameters. See the {@HelixFollowFilter} documentation.
     */
    HelixUserAPI.prototype.getFollows = function (filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = HelixUserAPI._makeFollowsQuery(filter);
                        return [4 /*yield*/, this._client.callAPI({
                                url: 'users/follows',
                                type: TwitchClient_1.TwitchAPICallType.Helix,
                                query: query
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResultWithTotal(result, HelixFollow_1.default, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for follow relations.
     *
     * @param filter Several filtering and pagination parameters. See the {@HelixFollowFilter} documentation.
     */
    HelixUserAPI.prototype.getFollowsPaginated = function (filter) {
        var _this = this;
        var query = HelixUserAPI._makeFollowsQuery(filter);
        return new HelixPaginatedRequestWithTotal_1.default({
            url: 'users/follows',
            query: query
        }, this._client, function (data) { return new HelixFollow_1.default(data, _this._client); });
    };
    HelixUserAPI._makeFollowsQuery = function (filter) {
        var query = {};
        var hasUserIdParam = false;
        if (filter.user) {
            query.from_id = UserTools_1.extractUserId(filter.user);
            hasUserIdParam = true;
        }
        if (filter.followedUser) {
            query.to_id = UserTools_1.extractUserId(filter.followedUser);
            hasUserIdParam = true;
        }
        if (!hasUserIdParam) {
            throw new TypeError('At least one of user and followedUser have to be set');
        }
        return query;
    };
    HelixUserAPI.prototype._getUsers = function (lookupType, param) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, result;
            var _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        query = (_a = {}, _a[lookupType] = param, _a);
                        return [4 /*yield*/, this._client.callAPI({
                                type: TwitchClient_1.TwitchAPICallType.Helix,
                                url: 'users',
                                query: query
                            })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, result.data.map(function (userData) { return new HelixUser_1.default(userData, _this._client); })];
                }
            });
        });
    };
    return HelixUserAPI;
}(BaseAPI_1.default));
exports.default = HelixUserAPI;
module.exports = exports = HelixUserAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLookupType = UserLookupType;
exports.default = HelixUserAPI;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var UserTools_1 = __webpack_require__(6);
var TwitchClient_1 = __webpack_require__(4);
var BaseAPI_1 = __webpack_require__(3);
var HelixPaginatedRequest_1 = __webpack_require__(9);
var HelixPagination_1 = __webpack_require__(18);
var HelixVideo_1 = __webpack_require__(63);
/**
 * The Helix API methods that deal with videos.
 *
 * Can be accessed using `client.helix.videos` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const videos = await client.helix.videos.getVideosByUser('125328655');
 * ```
 */
var HelixVideoAPI = /** @class */ (function (_super) {
    tslib_1.__extends(HelixVideoAPI, _super);
    function HelixVideoAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves the video data for the given list of video IDs.
     *
     * @param ids The video IDs you want to look up.
     */
    HelixVideoAPI.prototype.getVideosByIds = function (ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getVideos('id', ids)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    /**
     * Retrieves the video data for the given video ID.
     *
     * @param id The video ID you want to look up.
     */
    HelixVideoAPI.prototype.getVideoById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var videos;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getVideosByIds(id)];
                    case 1:
                        videos = _a.sent();
                        return [2 /*return*/, videos.length ? videos[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves the videos of the given user.
     *
     * @param user The user you want to retrieve videos from.
     * @param filter Additional filters for the result set.
     */
    HelixVideoAPI.prototype.getVideosByUser = function (user, filter) {
        if (filter === void 0) { filter = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId;
            return tslib_1.__generator(this, function (_a) {
                userId = UserTools_1.extractUserId(user);
                return [2 /*return*/, this._getVideos('user_id', userId, filter)];
            });
        });
    };
    /**
     * Creates a paginator for videos of the given user.
     *
     * @param user The user you want to retrieve videos from.
     * @param filter Additional filters for the result set.
     */
    HelixVideoAPI.prototype.getVideosByUserPaginated = function (user, filter) {
        if (filter === void 0) { filter = {}; }
        var userId = UserTools_1.extractUserId(user);
        return this._getVideosPaginated('user_id', userId, filter);
    };
    /**
     * Retrieves the videos of the given game.
     *
     * @param gameId The game you want to retrieve videos from.
     * @param filter Additional filters for the result set.
     */
    HelixVideoAPI.prototype.getVideosByGame = function (gameId, filter) {
        if (filter === void 0) { filter = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._getVideos('game_id', gameId, filter)];
            });
        });
    };
    /**
     * Creates a paginator for videos of the given game.
     *
     * @param gameId The game you want to retrieve videos from.
     * @param filter Additional filters for the result set.
     */
    HelixVideoAPI.prototype.getVideosByGamePaginated = function (gameId, filter) {
        if (filter === void 0) { filter = {}; }
        return this._getVideosPaginated('game_id', gameId, filter);
    };
    HelixVideoAPI.prototype._getVideos = function (filterType, filterValues, filter) {
        if (filter === void 0) { filter = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            url: 'videos',
                            type: TwitchClient_1.TwitchAPICallType.Helix,
                            query: tslib_1.__assign(tslib_1.__assign({}, HelixVideoAPI._makeVideosQuery(filterType, filterValues, filter)), HelixPagination_1.makePaginationQuery(filter))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, {
                                data: result.data.map(function (data) { return new HelixVideo_1.default(data, _this._client); }),
                                cursor: result.pagination && result.pagination.cursor
                            }];
                }
            });
        });
    };
    HelixVideoAPI.prototype._getVideosPaginated = function (filterType, filterValues, filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return new HelixPaginatedRequest_1.default({
            url: 'videos',
            query: HelixVideoAPI._makeVideosQuery(filterType, filterValues, filter)
        }, this._client, function (data) { return new HelixVideo_1.default(data, _this._client); });
    };
    HelixVideoAPI._makeVideosQuery = function (filterType, filterValues, filter) {
        var _a;
        if (filter === void 0) { filter = {}; }
        var language = filter.language, period = filter.period, orderBy = filter.orderBy, type = filter.type;
        return _a = {},
            _a[filterType] = filterValues,
            _a.language = language,
            _a.period = period,
            _a.sort = orderBy,
            _a.type = type,
            _a;
    };
    return HelixVideoAPI;
}(BaseAPI_1.default));
exports.default = HelixVideoAPI;
module.exports = exports = HelixVideoAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixVideoAPI;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var UserTools_1 = __webpack_require__(6);
var TwitchClient_1 = __webpack_require__(4);
var BaseAPI_1 = __webpack_require__(3);
var HelixPaginatedRequestWithTotal_1 = __webpack_require__(60);
var HelixWebHookSubscription_1 = __webpack_require__(138);
/**
 * The API methods that deal with WebHooks.
 *
 * Can be accessed using `client.helix.webHooks` on a {@TwitchClient} instance.
 *
 * ## Before using these methods...
 *
 * All of the methods in this class assume that you are already running a working WebHook listener at the given callback URL.
 *
 * If you don't already have one, we recommend use of the `twitch-webhooks` library, which handles subscribing and unsubscribing to these topics automatically.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const accepted = await client.helix.webHooks.subscribeToUserFollowsTo('125328655', { callbackUrl: 'https://example.com' });
 * ```
 */
var HelixWebHooksAPI = /** @class */ (function (_super) {
    tslib_1.__extends(HelixWebHooksAPI, _super);
    function HelixWebHooksAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves the current WebHook subscriptions for the current client.
     *
     * Requires an app access token to work; does not work with user tokens.
     */
    HelixWebHooksAPI.prototype.getSubscriptions = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new HelixPaginatedRequestWithTotal_1.default({
                        url: 'webhooks/subscriptions'
                    }, this._client, function (data) { return new HelixWebHookSubscription_1.default(data, _this._client); })];
            });
        });
    };
    /**
     * Sends an arbitrary request to subscribe to or unsubscribe from an event.
     *
     * @expandParams
     */
    HelixWebHooksAPI.prototype.sendHubRequest = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mode, callbackUrl, topicUrl, _a, validityInSeconds, secret, scope;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        mode = options.mode, callbackUrl = options.callbackUrl, topicUrl = options.topicUrl, _a = options.validityInSeconds, validityInSeconds = _a === void 0 ? 3600 : _a, secret = options.secret, scope = options.scope;
                        return [4 /*yield*/, this._client.callAPI({
                                url: 'webhooks/hub',
                                type: TwitchClient_1.TwitchAPICallType.Helix,
                                method: 'POST',
                                scope: scope,
                                jsonBody: {
                                    'hub.mode': mode,
                                    'hub.topic': topicUrl,
                                    'hub.callback': callbackUrl,
                                    'hub.lease_seconds': mode === 'subscribe' ? validityInSeconds.toString() : undefined,
                                    'hub.secret': secret
                                }
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Subscribes to events representing a user following other users.
     *
     * @expandParams
     *
     * @param user The user for which to get notifications about the users they will follow.
     * @param options
     */
    HelixWebHooksAPI.prototype.subscribeToUserFollowsFrom = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendUserFollowsHubRequest('subscribe', 'from', user, options)];
            });
        });
    };
    /**
     * Subscribes to events representing a user being followed by other users.
     *
     * @expandParams
     *
     * @param user The user for which to get notifications about the users they will be followed by.
     * @param options
     */
    HelixWebHooksAPI.prototype.subscribeToUserFollowsTo = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendUserFollowsHubRequest('subscribe', 'to', user, options)];
            });
        });
    };
    /**
     * Unsubscribes from events representing a user following other users.
     *
     * @expandParams
     *
     * @param user The user for which to not get any more notifications about the users they will follow.
     * @param options
     */
    HelixWebHooksAPI.prototype.unsubscribeFromUserFollowsFrom = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendUserFollowsHubRequest('unsubscribe', 'from', user, options)];
            });
        });
    };
    /**
     * Unsubscribes from events representing a user being followed by other users.
     *
     * @expandParams
     *
     * @param user The user for which to not get any more notifications about the users they will be followed by.
     * @param options
     */
    HelixWebHooksAPI.prototype.unsubscribeFromUserFollowsTo = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendUserFollowsHubRequest('unsubscribe', 'to', user, options)];
            });
        });
    };
    /**
     * Subscribes to events representing a stream changing, i.e. going live, offline or changing its title or category.
     *
     * @expandParams
     *
     * @param user The user for which to get notifications about their streams changing.
     * @param options
     */
    HelixWebHooksAPI.prototype.subscribeToStreamChanges = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendStreamChangeHubRequest('subscribe', user, options)];
            });
        });
    };
    /**
     * Unsubscribes from events representing a stream changing.
     *
     * @expandParams
     *
     * @param user The user for which not to get any more notifications about their streams changing.
     * @param options
     */
    HelixWebHooksAPI.prototype.unsubscribeFromStreamChanges = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendStreamChangeHubRequest('unsubscribe', user, options)];
            });
        });
    };
    /**
     * Subscribes to events representing a user changing a public setting or their email address.
     *
     * @expandParams
     *
     * @param user The user for which to get notifications about changing a setting.
     * @param options
     * @param withEmail Whether to subscribe to email address changes. This adds the necessary scope to read the email address to the request.
     */
    HelixWebHooksAPI.prototype.subscribeToUserChanges = function (user, options, withEmail) {
        if (withEmail === void 0) { withEmail = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendUserChangeHubRequest('subscribe', user, options, withEmail)];
            });
        });
    };
    /**
     * Unsubscribes from events representing a user changing a public setting or their email address.
     *
     * @expandParams
     *
     * @param user The user for which not to get any more notifications about changing a setting.
     * @param options
     */
    HelixWebHooksAPI.prototype.unsubscribeFromUserChanges = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendUserChangeHubRequest('unsubscribe', user, options)];
            });
        });
    };
    /**
     * Subscribes to events representing the start or end of a channel subscription.
     *
     * @expandParams
     *
     * @param user The user for which to get notifications about subscriptions to their channel.
     * @param options
     */
    HelixWebHooksAPI.prototype.subscribeToSubscriptionEvents = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendSubscriptionEventsHubRequest('subscribe', user, options)];
            });
        });
    };
    /**
     * Unsubscribes from events representing the start or end of a channel subscription.
     *
     * @expandParams
     *
     * @param user The user for which not to get any more notifications about subscriptions and unsubscriptions to their channel.
     * @param options
     */
    HelixWebHooksAPI.prototype.unsubscribeFromSubscriptionEvents = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendSubscriptionEventsHubRequest('unsubscribe', user, options)];
            });
        });
    };
    /**
     * Subscribes to extension transactions.
     *
     * @expandParams
     *
     * @param extensionId The extension ID for which to get notifications about transactions.
     * @param options
     */
    HelixWebHooksAPI.prototype.subscribeToExtensionTransactions = function (extensionId, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendExtensionTransactionsHubRequest('subscribe', extensionId, options)];
            });
        });
    };
    /**
     * Unsubscribes from extension transactions.
     *
     * @expandParams
     *
     * @param extensionId The extension ID for which not to get any more notifications about transactions.
     * @param options
     */
    HelixWebHooksAPI.prototype.unsubscribeFromExtensionTransactions = function (extensionId, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendExtensionTransactionsHubRequest('unsubscribe', extensionId, options)];
            });
        });
    };
    /**
     * Subscribes to events representing a ban or unban.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which to get notifications about bans or unbans in their channel.
     * @param options
     */
    HelixWebHooksAPI.prototype.subscribeToBanEvents = function (broadcaster, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendBanEventsHubRequest('subscribe', broadcaster, options)];
            });
        });
    };
    /**
     * Unsubscribes from events representing a ban or unban.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which not to get any more notifications about bans or unbans in their channel.
     * @param options
     */
    HelixWebHooksAPI.prototype.unsubscribeFromBanEvents = function (broadcaster, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendBanEventsHubRequest('unsubscribe', broadcaster, options)];
            });
        });
    };
    /**
     * Subscribes to events representing a ban or unban.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which to get notifications about bans or unbans in their channel.
     * @param user The user that is being banned or unbanned.
     * @param options
     */
    HelixWebHooksAPI.prototype.subscribeToBanEventsForUser = function (broadcaster, user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendBanEventsHubRequest('subscribe', broadcaster, options, user)];
            });
        });
    };
    /**
     * Unsubscribes from events representing a ban or unban.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which not to get any more notifications about bans or unbans in their channel.
     * @param user The user that is being banned or unbanned.
     * @param options
     */
    HelixWebHooksAPI.prototype.unsubscribeFromBanEventsForUser = function (broadcaster, user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendBanEventsHubRequest('unsubscribe', broadcaster, options, user)];
            });
        });
    };
    /**
     * Subscribes to events representing a user gaining or losing moderator privileges in a channel.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which to get notifications about moderator changes in their channel.
     * @param options
     */
    HelixWebHooksAPI.prototype.subscribeToModeratorEvents = function (broadcaster, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendModeratorEventsHubRequest('subscribe', broadcaster, options)];
            });
        });
    };
    /**
     * Unsubscribes from events representing a user gaining or losing moderator privileges in a channel.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which not to get any more notifications about moderator changes in their channel.
     * @param options
     */
    HelixWebHooksAPI.prototype.unsubscribeFromModeratorEvents = function (broadcaster, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendModeratorEventsHubRequest('unsubscribe', broadcaster, options)];
            });
        });
    };
    /**
     * Subscribes to events representing a user gaining or losing moderator privileges in a channel.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which to get notifications about moderator changes in their channel.
     * @param user The user that is being modded or unmodded.
     * @param options
     */
    HelixWebHooksAPI.prototype.subscribeToModeratorEventsForUser = function (broadcaster, user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendModeratorEventsHubRequest('subscribe', broadcaster, options, user)];
            });
        });
    };
    /**
     * Unsubscribes from events representing a user gaining or losing moderator privileges in a channel.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which not to get any more notifications about moderator changes in their channel.
     * @param user The user that is being modded or unmodded.
     * @param options
     */
    HelixWebHooksAPI.prototype.unsubscribeFromModeratorEventsForUser = function (broadcaster, user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendModeratorEventsHubRequest('unsubscribe', broadcaster, options, user)];
            });
        });
    };
    HelixWebHooksAPI.prototype._sendUserFollowsHubRequest = function (mode, direction, user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId;
            return tslib_1.__generator(this, function (_a) {
                userId = UserTools_1.extractUserId(user);
                return [2 /*return*/, this.sendHubRequest(tslib_1.__assign({ mode: mode, topicUrl: "https://api.twitch.tv/helix/users/follows?first=1&" + direction + "_id=" + userId }, options))];
            });
        });
    };
    HelixWebHooksAPI.prototype._sendStreamChangeHubRequest = function (mode, user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId;
            return tslib_1.__generator(this, function (_a) {
                userId = UserTools_1.extractUserId(user);
                return [2 /*return*/, this.sendHubRequest(tslib_1.__assign({ mode: mode, topicUrl: "https://api.twitch.tv/helix/streams?user_id=" + userId }, options))];
            });
        });
    };
    HelixWebHooksAPI.prototype._sendUserChangeHubRequest = function (mode, user, options, withEmail) {
        if (withEmail === void 0) { withEmail = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId;
            return tslib_1.__generator(this, function (_a) {
                userId = UserTools_1.extractUserId(user);
                return [2 /*return*/, this.sendHubRequest(tslib_1.__assign({ mode: mode, topicUrl: "https://api.twitch.tv/helix/users?id=" + userId, scope: withEmail ? 'user:read:email' : undefined }, options))];
            });
        });
    };
    HelixWebHooksAPI.prototype._sendSubscriptionEventsHubRequest = function (mode, user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId;
            return tslib_1.__generator(this, function (_a) {
                userId = UserTools_1.extractUserId(user);
                return [2 /*return*/, this.sendHubRequest(tslib_1.__assign({ mode: mode, topicUrl: "https://api.twitch.tv/helix/subscriptions/events?broadcaster_id=" + userId + "&first=1", scope: 'channel:read:subscriptions' }, options))];
            });
        });
    };
    HelixWebHooksAPI.prototype._sendExtensionTransactionsHubRequest = function (mode, extensionId, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.sendHubRequest(tslib_1.__assign({ mode: mode, topicUrl: "https://api.twitch.tv/helix/extensions/transactions?extension_id=" + extensionId + "&first=1" }, options))];
            });
        });
    };
    HelixWebHooksAPI.prototype._sendBanEventsHubRequest = function (mode, broadcaster, options, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var broadcasterId, topicUrl;
            return tslib_1.__generator(this, function (_a) {
                broadcasterId = UserTools_1.extractUserId(broadcaster);
                topicUrl = "https://api.twitch.tv/helix/moderation/banned/events?broadcaster_id=" + broadcasterId + "&first=1";
                if (user) {
                    topicUrl += "&user_id=" + UserTools_1.extractUserId(user);
                }
                return [2 /*return*/, this.sendHubRequest(tslib_1.__assign({ mode: mode,
                        topicUrl: topicUrl, scope: 'moderation:read' }, options))];
            });
        });
    };
    HelixWebHooksAPI.prototype._sendModeratorEventsHubRequest = function (mode, broadcaster, options, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var broadcasterId, topicUrl;
            return tslib_1.__generator(this, function (_a) {
                broadcasterId = UserTools_1.extractUserId(broadcaster);
                topicUrl = "https://api.twitch.tv/helix/moderation/moderators/events?broadcaster_id=" + broadcasterId + "&first=1";
                if (user) {
                    topicUrl += "&user_id=" + UserTools_1.extractUserId(user);
                }
                return [2 /*return*/, this.sendHubRequest(tslib_1.__assign({ mode: mode,
                        topicUrl: topicUrl, scope: 'moderation:read' }, options))];
            });
        });
    };
    return HelixWebHooksAPI;
}(BaseAPI_1.default));
exports.default = HelixWebHooksAPI;
module.exports = exports = HelixWebHooksAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixWebHooksAPI;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
/**
 * A subscription to a Twitch WebHook.
 */
var HelixWebHookSubscription = /** @class */ (function () {
    /** @private */
    function HelixWebHookSubscription(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(HelixWebHookSubscription.prototype, "topicUrl", {
        /**
         * The topic the WebHook is listening to.
         */
        get: function () {
            return this._data.topic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixWebHookSubscription.prototype, "callbackUrl", {
        /**
         * The URL that will be called for every subscribed event.
         */
        get: function () {
            return this._data.callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelixWebHookSubscription.prototype, "expiryDate", {
        /**
         * The time when the subscription will expire.
         */
        get: function () {
            return new Date(this._data.expires_at);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Unsubscribe from the WebHook.
     */
    HelixWebHookSubscription.prototype.unsubscribe = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.webHooks.sendHubRequest({
                        mode: 'unsubscribe',
                        topicUrl: this.topicUrl,
                        callbackUrl: this.callbackUrl
                    })];
            });
        });
    };
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], HelixWebHookSubscription.prototype, "_client", void 0);
    return HelixWebHookSubscription;
}());
exports.default = HelixWebHookSubscription;
module.exports = exports = HelixWebHookSubscription;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixWebHookSubscription;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var rate_limiter_1 = __webpack_require__(140);
var TwitchClient_1 = __webpack_require__(4);
var HelixRateLimiter = /** @class */ (function (_super) {
    tslib_1.__extends(HelixRateLimiter, _super);
    function HelixRateLimiter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelixRateLimiter.prototype.doRequest = function (_a) {
        var options = _a.options, clientId = _a.clientId, accessToken = _a.accessToken;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_b) {
                return [2 /*return*/, TwitchClient_1.default._callAPIRaw(options, clientId, accessToken)];
            });
        });
    };
    HelixRateLimiter.prototype.needsToRetryAfter = function (res) {
        if (res.status === 429) {
            return +res.headers.get('ratelimit-reset') * 1000 - Date.now();
        }
        return null;
    };
    HelixRateLimiter.prototype.getParametersFromResponse = function (res) {
        var headers = res.headers;
        return {
            limit: +headers.get('ratelimit-limit'),
            remaining: +headers.get('ratelimit-remaining'),
            resetsAt: +headers.get('ratelimit-reset') * 1000
        };
    };
    return HelixRateLimiter;
}(rate_limiter_1.ResponseBasedRateLimiter));
exports.default = HelixRateLimiter;
module.exports = exports = HelixRateLimiter;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelixRateLimiter;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResponseBasedRateLimiter_1 = __webpack_require__(141);
exports.ResponseBasedRateLimiter = ResponseBasedRateLimiter_1.ResponseBasedRateLimiter;
var RetryAfterError_1 = __webpack_require__(86);
exports.RetryAfterError = RetryAfterError_1.RetryAfterError;
//# sourceMappingURL=index.js.map

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(33);
var logger_1 = __webpack_require__(142);
var promise_allsettled_1 = __webpack_require__(145);
var RetryAfterError_1 = __webpack_require__(86);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var ResponseBasedRateLimiter = /** @class */ (function () {
    function ResponseBasedRateLimiter(logLevel) {
        this._queue = [];
        this._batchRunning = false;
        this._logger = new logger_1.Logger({ name: 'rate-limiter', minLevel: logLevel, emoji: true });
    }
    ResponseBasedRateLimiter.prototype.request = function (req) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var reqSpec = {
                            req: req,
                            resolve: resolve,
                            reject: reject
                        };
                        if (_this._batchRunning || _this._nextBatchTimer) {
                            _this._queue.push(reqSpec);
                        }
                        else {
                            _this._runRequestBatch([reqSpec]);
                        }
                    })];
            });
        });
    };
    ResponseBasedRateLimiter.prototype._runRequestBatch = function (reqSpecs) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var promises, settledPromises, rejectedPromises, now, retryAt, retryAfter, params, delay;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._batchRunning = true;
                        if (this._parameters) {
                            this._logger.debug1("remaining requests: " + this._parameters.remaining);
                        }
                        this._logger.debug2("doing " + reqSpecs.length + " requests, new queue length is " + this._queue.length);
                        promises = reqSpecs.map(function (reqSpec) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var req, resolve, reject, result, retry, params, e_1;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        req = reqSpec.req, resolve = reqSpec.resolve, reject = reqSpec.reject;
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, this.doRequest(req)];
                                    case 2:
                                        result = _a.sent();
                                        retry = this.needsToRetryAfter(result);
                                        if (retry !== null) {
                                            this._queue.unshift(reqSpec);
                                            this._logger.info("Retrying after " + retry + " ms");
                                            throw new RetryAfterError_1.RetryAfterError(retry);
                                        }
                                        params = this.getParametersFromResponse(result);
                                        resolve(result);
                                        return [2 /*return*/, params];
                                    case 3:
                                        e_1 = _a.sent();
                                        if (e_1 instanceof RetryAfterError_1.RetryAfterError) {
                                            throw e_1;
                                        }
                                        reject(e_1);
                                        return [2 /*return*/, undefined];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, (0, promise_allsettled_1.default)(promises)];
                    case 1:
                        settledPromises = _a.sent();
                        rejectedPromises = settledPromises.filter(function (p) { return p.status === 'rejected'; });
                        now = Date.now();
                        if (rejectedPromises.length) {
                            retryAt = Math.max.apply(Math, tslib_1.__spread([now], rejectedPromises.map(function (p) { return p.reason.retryAt; })));
                            retryAfter = retryAt - now;
                            this._logger.warn("waiting for " + retryAfter + " ms because the rate limit was exceeded");
                            this._nextBatchTimer = setTimeout(function () {
                                _this._parameters = undefined;
                                _this._runNextBatch();
                            }, retryAfter);
                        }
                        else {
                            params = settledPromises
                                .map(function (p) { return p.value; })
                                .filter(function (v) { return v !== undefined; })
                                .reduce(function (carry, v) {
                                if (!carry) {
                                    return v;
                                }
                                // return v.resetsAt > carry.resetsAt ? v : carry;
                                return v.remaining < carry.remaining ? v : carry;
                            }, undefined);
                            this._batchRunning = false;
                            if (params) {
                                this._parameters = params;
                                if (params.resetsAt < now || params.remaining > 0) {
                                    this._runNextBatch();
                                }
                                else {
                                    delay = params.resetsAt - now;
                                    this._logger.warn("Waiting for " + delay + " ms because the rate limit was reached");
                                    this._nextBatchTimer = setTimeout(function () {
                                        _this._parameters = undefined;
                                        _this._runNextBatch();
                                    }, delay);
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ResponseBasedRateLimiter.prototype._runNextBatch = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var amount, reqSpecs;
            return tslib_1.__generator(this, function (_a) {
                if (this._nextBatchTimer) {
                    clearTimeout(this._nextBatchTimer);
                    this._nextBatchTimer = undefined;
                }
                amount = this._parameters ? Math.min(this._parameters.remaining, this._parameters.limit / 10) : 1;
                reqSpecs = this._queue.splice(0, amount);
                if (reqSpecs.length) {
                    this._runRequestBatch(reqSpecs);
                }
                return [2 /*return*/];
            });
        });
    };
    return ResponseBasedRateLimiter;
}());
exports.ResponseBasedRateLimiter = ResponseBasedRateLimiter;
//# sourceMappingURL=ResponseBasedRateLimiter.js.map

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable filenames/match-exported */
var isNode = __webpack_require__(14);
var NodeLogger_1 = __webpack_require__(143);
var BrowserLogger_1 = __webpack_require__(144);
var Logger = isNode ? NodeLogger_1.NodeLogger : BrowserLogger_1.BrowserLogger;
exports.Logger = Logger;
var LogLevel_1 = __webpack_require__(22);
exports.LogLevel = LogLevel_1.LogLevel;
//# sourceMappingURL=index.js.map

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(64);
var LogLevel_1 = __webpack_require__(22);
var BaseLogger_1 = __webpack_require__(65);
exports.LogLevelToEmoji = (_a = {},
    _a[LogLevel_1.LogLevel.CRITICAL] = "\uD83D\uDED1",
    _a[LogLevel_1.LogLevel.ERROR] = "\u274C",
    // these following two need extra spaces at the end because somehow they consume less space in a terminal than they should...
    _a[LogLevel_1.LogLevel.WARNING] = "\u26A0\uFE0F ",
    _a[LogLevel_1.LogLevel.INFO] = "\u2139\uFE0F ",
    _a[LogLevel_1.LogLevel.DEBUG] = "\uD83D\uDC1E",
    _a[LogLevel_1.LogLevel.TRACE] = "\uD83D\uDC3E",
    _a);
var colors = {
    black: 30,
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    magenta: 35,
    cyan: 36,
    white: 37,
    blackBright: 90,
    redBright: 91,
    greenBright: 92,
    yellowBright: 93,
    blueBright: 94,
    magentaBright: 95,
    cyanBright: 96,
    whiteBright: 97
};
var bgColors = {
    bgBlack: 40,
    bgRed: 41,
    bgGreen: 42,
    bgYellow: 43,
    bgBlue: 44,
    bgMagenta: 45,
    bgCyan: 46,
    bgWhite: 47,
    bgBlackBright: 100,
    bgRedBright: 101,
    bgGreenBright: 102,
    bgYellowBright: 103,
    bgBlueBright: 104,
    bgMagentaBright: 105,
    bgCyanBright: 106,
    bgWhiteBright: 107
};
function createGenericWrapper(color, ending, inner) {
    return function (str) { return "\u001B[" + color + "m" + (inner ? inner(str) : str) + "\u001B[" + ending + "m"; };
}
function createColorWrapper(color) {
    return createGenericWrapper(colors[color], 39);
}
function createBgWrapper(color, fgWrapper) {
    return createGenericWrapper(bgColors[color], 49, fgWrapper);
}
exports.LogLevelToColor = (_b = {},
    _b[LogLevel_1.LogLevel.CRITICAL] = createColorWrapper('red'),
    _b[LogLevel_1.LogLevel.ERROR] = createColorWrapper('redBright'),
    _b[LogLevel_1.LogLevel.WARNING] = createColorWrapper('yellow'),
    _b[LogLevel_1.LogLevel.INFO] = createColorWrapper('blue'),
    _b[LogLevel_1.LogLevel.DEBUG] = createColorWrapper('magenta'),
    _b[LogLevel_1.LogLevel.TRACE] = createGenericWrapper(0, 0),
    _b);
exports.LogLevelToBackgroundColor = (_c = {},
    _c[LogLevel_1.LogLevel.CRITICAL] = createBgWrapper('bgRed', createColorWrapper('white')),
    _c[LogLevel_1.LogLevel.ERROR] = createBgWrapper('bgRedBright', createColorWrapper('white')),
    _c[LogLevel_1.LogLevel.WARNING] = createBgWrapper('bgYellow', createColorWrapper('black')),
    _c[LogLevel_1.LogLevel.INFO] = createBgWrapper('bgBlue', createColorWrapper('white')),
    _c[LogLevel_1.LogLevel.DEBUG] = createBgWrapper('bgMagenta', createColorWrapper('black')),
    _c[LogLevel_1.LogLevel.TRACE] = createGenericWrapper(7, 27),
    _c);
var NodeLogger = /** @class */ (function (_super) {
    tslib_1.__extends(NodeLogger, _super);
    function NodeLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeLogger.prototype.log = function (level, message) {
        if (level > this._minLevel) {
            return;
        }
        var logFn = LogLevel_1.LogLevelToConsoleFunction[level];
        var builtMessage = '';
        if (this._timestamps) {
            builtMessage += "[" + new Date().toISOString() + "] ";
        }
        if (this._emoji) {
            var emoji = exports.LogLevelToEmoji[level];
            builtMessage += emoji + " ";
        }
        if (this._colors) {
            builtMessage += exports.LogLevelToBackgroundColor[level](this._name) + " " + exports.LogLevelToBackgroundColor[level](LogLevel_1.LogLevel[level]) + " " + exports.LogLevelToColor[level](message);
        }
        else {
            builtMessage += "[" + this._name + ":" + LogLevel_1.LogLevel[level].toLowerCase() + "] " + message;
        }
        logFn(builtMessage);
    };
    return NodeLogger;
}(BaseLogger_1.BaseLogger));
exports.NodeLogger = NodeLogger;
//# sourceMappingURL=NodeLogger.js.map

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(64);
var LogLevel_1 = __webpack_require__(22);
var BaseLogger_1 = __webpack_require__(65);
var BrowserLogger = /** @class */ (function (_super) {
    tslib_1.__extends(BrowserLogger, _super);
    function BrowserLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserLogger.prototype.log = function (level, message) {
        if (level > this._minLevel) {
            return;
        }
        var logFn = LogLevel_1.LogLevelToConsoleFunction[level];
        var formattedMessage = "[" + this._name + "] " + message;
        if (this._timestamps) {
            formattedMessage = "[" + new Date().toISOString() + "] " + message;
        }
        logFn(formattedMessage);
    };
    return BrowserLogger;
}(BaseLogger_1.BaseLogger));
exports.BrowserLogger = BrowserLogger;
//# sourceMappingURL=BrowserLogger.js.map

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var callBind = __webpack_require__(34);
var define = __webpack_require__(24);

var requirePromise = __webpack_require__(25);
var implementation = __webpack_require__(68);
var getPolyfill = __webpack_require__(85);
var shim = __webpack_require__(192);

requirePromise();
var bound = callBind(getPolyfill());

var rebindable = function allSettled(iterable) {
	// eslint-disable-next-line no-invalid-this
	return bound(typeof this === 'undefined' ? Promise : this, iterable);
};

define(rebindable, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = rebindable;
module.exports.default = rebindable;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),
/* 147 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(67);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(149);

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(67); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var callBound = __webpack_require__(8);

var $PromiseResolve = callBound('Promise.resolve', true);

// https://ecma-international.org/ecma-262/9.0/#sec-promise-resolve

module.exports = function PromiseResolve(C, x) {
	if (!$PromiseResolve) {
		throw new SyntaxError('This environment does not support Promises.');
	}
	return $PromiseResolve(C, x);
};



/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://www.ecma-international.org/ecma-262/5.1/#sec-8

module.exports = function Type(x) {
	if (x === null) {
		return 'Null';
	}
	if (typeof x === 'undefined') {
		return 'Undefined';
	}
	if (typeof x === 'function' || typeof x === 'object') {
		return 'Object';
	}
	if (typeof x === 'number') {
		return 'Number';
	}
	if (typeof x === 'boolean') {
		return 'Boolean';
	}
	if (typeof x === 'string') {
		return 'String';
	}
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getIterator = __webpack_require__(153);
var $TypeError = TypeError;
var iterate = __webpack_require__(159);

module.exports = function iterateValue(iterable) {
	var iterator = getIterator(iterable);
	if (!iterator) {
		throw new $TypeError('non-iterable value provided');
	}
	if (arguments.length > 1) {
		return iterate(iterator, arguments[1]);
	}
	return iterate(iterator);
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

/* eslint global-require: 0 */
// the code is structured this way so that bundlers can
// alias out `has-symbols` to `() => true` or `() => false` if your target
// environments' Symbol capabilities are known, and then use
// dead code elimination on the rest of this module.
//
// Similarly, `isarray` can be aliased to `Array.isArray` if
// available in all target environments.

var isArguments = __webpack_require__(155);

if (__webpack_require__(23)() || __webpack_require__(66)()) {
	var $iterator = Symbol.iterator;
	// Symbol is available natively or shammed
	// natively:
	//  - Chrome >= 38
	//  - Edge 12-14?, Edge >= 15 for sure
	//  - FF >= 36
	//  - Safari >= 9
	//  - node >= 0.12
	module.exports = function getIterator(iterable) {
		// alternatively, `iterable[$iterator]?.()`
		if (iterable != null && typeof iterable[$iterator] !== 'undefined') {
			return iterable[$iterator]();
		}
		if (isArguments(iterable)) {
			// arguments objects lack Symbol.iterator
			// - node 0.12
			return Array.prototype[$iterator].call(iterable);
		}
	};
} else {
	// Symbol is not available, native or shammed
	var isArray = __webpack_require__(156);
	var isString = __webpack_require__(69);
	var GetIntrinsic = __webpack_require__(2);
	var $Map = GetIntrinsic('%Map%', true);
	var $Set = GetIntrinsic('%Set%', true);
	var callBound = __webpack_require__(8);
	var $arrayPush = callBound('Array.prototype.push');
	var $charCodeAt = callBound('String.prototype.charCodeAt');
	var $stringSlice = callBound('String.prototype.slice');

	var advanceStringIndex = function advanceStringIndex(S, index) {
		var length = S.length;
		if ((index + 1) >= length) {
			return index + 1;
		}

		var first = $charCodeAt(S, index);
		if (first < 0xD800 || first > 0xDBFF) {
			return index + 1;
		}

		var second = $charCodeAt(S, index + 1);
		if (second < 0xDC00 || second > 0xDFFF) {
			return index + 1;
		}

		return index + 2;
	};

	var getArrayIterator = function getArrayIterator(arraylike) {
		var i = 0;
		return {
			next: function next() {
				var done = i >= arraylike.length;
				var value;
				if (!done) {
					value = arraylike[i];
					i += 1;
				}
				return {
					done: done,
					value: value
				};
			}
		};
	};

	var getNonCollectionIterator = function getNonCollectionIterator(iterable) {
		if (isArray(iterable) || isArguments(iterable)) {
			return getArrayIterator(iterable);
		}
		if (isString(iterable)) {
			var i = 0;
			return {
				next: function next() {
					var nextIndex = advanceStringIndex(iterable, i);
					var value = $stringSlice(iterable, i, nextIndex);
					i = nextIndex;
					return {
						done: nextIndex > iterable.length,
						value: value
					};
				}
			};
		}
	};

	if (!$Map && !$Set) {
		// the only language iterables are Array, String, arguments
		// - Safari <= 6.0
		// - Chrome < 38
		// - node < 0.12
		// - FF < 13
		// - IE < 11
		// - Edge < 11

		module.exports = getNonCollectionIterator;
	} else {
		// either Map or Set are available, but Symbol is not
		// - es6-shim on an ES5 browser
		// - Safari 6.2 (maybe 6.1?)
		// - FF v[13, 36)
		// - IE 11
		// - Edge 11
		// - Safari v[6, 9)

		var isMap = __webpack_require__(157);
		var isSet = __webpack_require__(158);

		// Firefox >= 27, IE 11, Safari 6.2 - 9, Edge 11, es6-shim in older envs, all have forEach
		var $mapForEach = callBound('Map.prototype.forEach', true);
		var $setForEach = callBound('Set.prototype.forEach', true);
		if (typeof process === 'undefined' || !process.versions || !process.versions.node) { // "if is not node"

			// Firefox 17 - 26 has `.iterator()`, whose iterator `.next()` either
			// returns a value, or throws a StopIteration object. These browsers
			// do not have any other mechanism for iteration.
			var $mapIterator = callBound('Map.prototype.iterator', true);
			var $setIterator = callBound('Set.prototype.iterator', true);
			var getStopIterationIterator = function (iterator) {
				var done = false;
				return {
					next: function next() {
						try {
							return {
								done: done,
								value: done ? undefined : iterator.next()
							};
						} catch (e) {
							done = true;
							return {
								done: true,
								value: undefined
							};
						}
					}
				};
			};
		}
		// Firefox 27-35, and some older es6-shim versions, use a string "@@iterator" property
		// this returns a proper iterator object, so we should use it instead of forEach.
		// newer es6-shim versions use a string "_es6-shim iterator_" property.
		var $mapAtAtIterator = callBound('Map.prototype.@@iterator', true) || callBound('Map.prototype._es6-shim iterator_', true);
		var $setAtAtIterator = callBound('Set.prototype.@@iterator', true) || callBound('Set.prototype._es6-shim iterator_', true);

		var getCollectionIterator = function getCollectionIterator(iterable) {
			if (isMap(iterable)) {
				if ($mapIterator) {
					return getStopIterationIterator($mapIterator(iterable));
				}
				if ($mapAtAtIterator) {
					return $mapAtAtIterator(iterable);
				}
				if ($mapForEach) {
					var entries = [];
					$mapForEach(iterable, function (v, k) {
						$arrayPush(entries, [k, v]);
					});
					return getArrayIterator(entries);
				}
			}
			if (isSet(iterable)) {
				if ($setIterator) {
					return getStopIterationIterator($setIterator(iterable));
				}
				if ($setAtAtIterator) {
					return $setAtAtIterator(iterable);
				}
				if ($setForEach) {
					var values = [];
					$setForEach(iterable, function (v) {
						$arrayPush(values, v);
					});
					return getArrayIterator(values);
				}
			}
		};

		module.exports = function getIterator(iterable) {
			return getCollectionIterator(iterable) || getNonCollectionIterator(iterable);
		};
	}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(154)))

/***/ }),
/* 154 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var toStr = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return toStr.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		toStr.call(value) !== '[object Array]' &&
		toStr.call(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),
/* 156 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

var exported;

if (!$Map) {
	// eslint-disable-next-line no-unused-vars
	exported = function isMap(x) {
		// `Map` is not present in this environment.
		return false;
	};
}

var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$mapHas) {
	// eslint-disable-next-line no-unused-vars
	exported = function isMap(x) {
		// `Map` does not have a `has` method
		return false;
	};
}

module.exports = exported || function isMap(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$mapHas.call(x);
		if ($setHas) {
			try {
				$setHas.call(x);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $Map; // core-js workaround, pre-v2.5.0
	} catch (e) {}
	return false;
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

var exported;

if (!$Set) {
	// eslint-disable-next-line no-unused-vars
	exported = function isSet(x) {
		// `Set` is not present in this environment.
		return false;
	};
}

var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$setHas) {
	// eslint-disable-next-line no-unused-vars
	exported = function isSet(x) {
		// `Set` does not have a `has` method
		return false;
	};
}

module.exports = exported || function isSet(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$setHas.call(x);
		if ($mapHas) {
			try {
				$mapHas.call(x);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $Set; // core-js workaround, pre-v2.5.0
	} catch (e) {}
	return false;
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
module.exports = function iterateIterator(iterator) {
	if (!iterator || typeof iterator.next !== 'function') {
		throw new $TypeError('iterator must be an object with a `next` method');
	}
	if (arguments.length > 1) {
		var callback = arguments[1];
		if (typeof callback !== 'function') {
			throw new $TypeError('`callback`, if provided, must be a function');
		}
	}
	var values = callback || [];
	var result;
	while ((result = iterator.next()) && !result.done) {
		if (callback) {
			callback(result.value); // eslint-disable-line callback-return
		} else {
			values.push(result.value);
		}
	}
	if (!callback) {
		return values;
	}
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(24);
var RequireObjectCoercible = __webpack_require__(70);
var callBound = __webpack_require__(8);

var implementation = __webpack_require__(71);
var getPolyfill = __webpack_require__(84);
var polyfill = getPolyfill();
var shim = __webpack_require__(191);

var $slice = callBound('Array.prototype.slice');

// eslint-disable-next-line no-unused-vars
var boundMapShim = function map(array, callbackfn) {
	RequireObjectCoercible(array);
	return polyfill.apply(array, $slice(arguments, 1));
};
define(boundMapShim, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundMapShim;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $TypeError = GetIntrinsic('%TypeError%');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.10

module.exports = function CheckObjectCoercible(value, optMessage) {
	if (value == null) {
		throw new $TypeError(optMessage || ('Cannot call method on ' + value));
	}
	return value;
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $Array = GetIntrinsic('%Array%');
var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var Get = __webpack_require__(72);
var IsArray = __webpack_require__(73);
var IsConstructor = __webpack_require__(165);
var IsInteger = __webpack_require__(169);
var Type = __webpack_require__(7);

// https://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate

module.exports = function ArraySpeciesCreate(originalArray, length) {
	if (!IsInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: length must be an integer >= 0');
	}
	var len = length === 0 ? 0 : length;
	var C;
	var isArray = IsArray(originalArray);
	if (isArray) {
		C = Get(originalArray, 'constructor');
		// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
		// if (IsConstructor(C)) {
		// 	if C is another realm's Array, C = undefined
		// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
		// }
		if ($species && Type(C) === 'Object') {
			C = Get(C, $species);
			if (C === null) {
				C = void 0;
			}
		}
	}
	if (typeof C === 'undefined') {
		return $Array(len);
	}
	if (!IsConstructor(C)) {
		throw new $TypeError('C must be a constructor');
	}
	return new C(len); // Construct(C, len);
};



/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;

var inspectCustom = __webpack_require__(164).custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean') {
        throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') { // eslint-disable-line valid-typeof
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']';
    }
    if (isSymbol(obj)) {
        var symString = Symbol.prototype.toString.call(obj);
        return typeof obj === 'object' ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + xs.join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        if (ys.length === 0) { return '{}'; }
        if (indent) {
            return '{' + indentedJoin(ys, indent) + '}';
        }
        return '{ ' + ys.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]'; }
function isDate(obj) { return toStr(obj) === '[object Date]'; }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]'; }
function isError(obj) { return toStr(obj) === '[object Error]'; }
function isSymbol(obj) { return toStr(obj) === '[object Symbol]'; }
function isString(obj) { return toStr(obj) === '[object String]'; }
function isNumber(obj) { return toStr(obj) === '[object Number]'; }
function isBigInt(obj) { return toStr(obj) === '[object BigInt]'; }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]'; }

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16);
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = Array(opts.indent + 1).join(' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: Array(depth + 1).join(baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + xs.join(',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if ((/[^\w$]/).test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    return xs;
}


/***/ }),
/* 164 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $construct = GetIntrinsic('%Reflect.construct%', true);

var DefinePropertyOrThrow = __webpack_require__(166);
try {
	DefinePropertyOrThrow({}, '', { '[[Get]]': function () {} });
} catch (e) {
	// Accessor properties aren't supported
	DefinePropertyOrThrow = null;
}

// https://www.ecma-international.org/ecma-262/6.0/#sec-isconstructor

if (DefinePropertyOrThrow && $construct) {
	var isConstructorMarker = {};
	var badArrayLike = {};
	DefinePropertyOrThrow(badArrayLike, 'length', {
		'[[Get]]': function () {
			throw isConstructorMarker;
		},
		'[[Enumerable]]': true
	});

	module.exports = function IsConstructor(argument) {
		try {
			// `Reflect.construct` invokes `IsConstructor(target)` before `Get(args, 'length')`:
			$construct(argument, badArrayLike);
		} catch (err) {
			return err === isConstructorMarker;
		}
	};
} else {
	module.exports = function IsConstructor(argument) {
		// unfortunately there's no way to truly check this without try/catch `new argument` in old environments
		return typeof argument === 'function' && !!argument.prototype;
	};
}


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $TypeError = GetIntrinsic('%TypeError%');

var isPropertyDescriptor = __webpack_require__(167);
var DefineOwnProperty = __webpack_require__(74);

var FromPropertyDescriptor = __webpack_require__(75);
var IsAccessorDescriptor = __webpack_require__(168);
var IsDataDescriptor = __webpack_require__(76);
var IsPropertyKey = __webpack_require__(16);
var SameValue = __webpack_require__(77);
var ToPropertyDescriptor = __webpack_require__(79);
var Type = __webpack_require__(7);

// https://www.ecma-international.org/ecma-262/6.0/#sec-definepropertyorthrow

module.exports = function DefinePropertyOrThrow(O, P, desc) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	var Desc = isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, desc) ? desc : ToPropertyDescriptor(desc);
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc is not a valid Property Descriptor');
	}

	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		Desc
	);
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var has = __webpack_require__(17);
var $TypeError = GetIntrinsic('%TypeError%');

module.exports = function IsPropertyDescriptor(ES, Desc) {
	if (ES.Type(Desc) !== 'Object') {
		return false;
	}
	var allowed = {
		'[[Configurable]]': true,
		'[[Enumerable]]': true,
		'[[Get]]': true,
		'[[Set]]': true,
		'[[Value]]': true,
		'[[Writable]]': true
	};

	for (var key in Desc) { // eslint-disable-line no-restricted-syntax
		if (has(Desc, key) && !allowed[key]) {
			return false;
		}
	}

	if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
		throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
	}
	return true;
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(17);

var assertRecord = __webpack_require__(36);

var Type = __webpack_require__(7);

// https://www.ecma-international.org/ecma-262/6.0/#sec-isaccessordescriptor

module.exports = function IsAccessorDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
		return false;
	}

	return true;
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $Math = GetIntrinsic('%Math%');

var $floor = $Math.floor;
var $abs = $Math.abs;

var $isNaN = __webpack_require__(78);
var $isFinite = __webpack_require__(170);

// https://www.ecma-international.org/ecma-262/6.0/#sec-isinteger

module.exports = function IsInteger(argument) {
	if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
		return false;
	}
	var abs = $abs(argument);
	return $floor(abs) === abs;
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = Number.isNaN || function (a) { return a !== a; };

module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);
var callBound = __webpack_require__(8);

var $apply = GetIntrinsic('%Reflect.apply%', true) || callBound('%Function.prototype.apply%');

// https://www.ecma-international.org/ecma-262/6.0/#sec-call

module.exports = function Call(F, V) {
	var args = arguments.length > 2 ? arguments[2] : [];
	return $apply(F, V, args);
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $TypeError = GetIntrinsic('%TypeError%');

var CreateDataProperty = __webpack_require__(173);
var IsPropertyKey = __webpack_require__(16);
var Type = __webpack_require__(7);

// // https://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow

module.exports = function CreateDataPropertyOrThrow(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var success = CreateDataProperty(O, P, V);
	if (!success) {
		throw new $TypeError('unable to create data property');
	}
	return success;
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = __webpack_require__(74);

var FromPropertyDescriptor = __webpack_require__(75);
var OrdinaryGetOwnProperty = __webpack_require__(174);
var IsDataDescriptor = __webpack_require__(76);
var IsExtensible = __webpack_require__(178);
var IsPropertyKey = __webpack_require__(16);
var SameValue = __webpack_require__(77);
var Type = __webpack_require__(7);

// https://www.ecma-international.org/ecma-262/6.0/#sec-createdataproperty

module.exports = function CreateDataProperty(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var oldDesc = OrdinaryGetOwnProperty(O, P);
	var extensible = !oldDesc || IsExtensible(O);
	var immutable = oldDesc && (!oldDesc['[[Writable]]'] || !oldDesc['[[Configurable]]']);
	if (immutable || !extensible) {
		return false;
	}
	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		{
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Value]]': V,
			'[[Writable]]': true
		}
	);
};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $gOPD = __webpack_require__(175);
var $TypeError = GetIntrinsic('%TypeError%');

var callBound = __webpack_require__(8);

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

var has = __webpack_require__(17);

var IsArray = __webpack_require__(73);
var IsPropertyKey = __webpack_require__(16);
var IsRegExp = __webpack_require__(176);
var ToPropertyDescriptor = __webpack_require__(79);
var Type = __webpack_require__(7);

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinarygetownproperty

module.exports = function OrdinaryGetOwnProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!has(O, P)) {
		return void 0;
	}
	if (!$gOPD) {
		// ES3 / IE 8 fallback
		var arrayLength = IsArray(O) && P === 'length';
		var regexLastIndex = IsRegExp(O) && P === 'lastIndex';
		return {
			'[[Configurable]]': !(arrayLength || regexLastIndex),
			'[[Enumerable]]': $isEnumerable(O, P),
			'[[Value]]': O[P],
			'[[Writable]]': true
		};
	}
	return ToPropertyDescriptor($gOPD(O, P));
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $match = GetIntrinsic('%Symbol.match%', true);

var hasRegExpMatcher = __webpack_require__(177);

var ToBoolean = __webpack_require__(80);

// https://ecma-international.org/ecma-262/6.0/#sec-isregexp

module.exports = function IsRegExp(argument) {
	if (!argument || typeof argument !== 'object') {
		return false;
	}
	if ($match) {
		var isRegExp = argument[$match];
		if (typeof isRegExp !== 'undefined') {
			return ToBoolean(isRegExp);
		}
	}
	return hasRegExpMatcher(argument);
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = __webpack_require__(23)();
var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';
var hasOwnProperty;
var regexExec;
var isRegexMarker;
var badStringifier;

if (hasToStringTag) {
	hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
	regexExec = Function.call.bind(RegExp.prototype.exec);
	isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}
}

var toStr = Object.prototype.toString;
var gOPD = Object.getOwnPropertyDescriptor;
var regexClass = '[object RegExp]';

module.exports = hasToStringTag
	// eslint-disable-next-line consistent-return
	? function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		var descriptor = gOPD(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && hasOwnProperty(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		try {
			regexExec(value, badStringifier);
		} catch (e) {
			return e === isRegexMarker;
		}
	}
	: function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return toStr.call(value) === regexClass;
	};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $Object = GetIntrinsic('%Object%');

var isPrimitive = __webpack_require__(83);

var $preventExtensions = $Object.preventExtensions;
var $isExtensible = $Object.isExtensible;

// https://www.ecma-international.org/ecma-262/6.0/#sec-isextensible-o

module.exports = $preventExtensions
	? function IsExtensible(obj) {
		return !isPrimitive(obj) && $isExtensible(obj);
	}
	: function IsExtensible(obj) {
		return !isPrimitive(obj);
	};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = __webpack_require__(16);
var Type = __webpack_require__(7);

// https://ecma-international.org/ecma-262/6.0/#sec-hasproperty

module.exports = function HasProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return P in O;
};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ToNumber = __webpack_require__(181);

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.6

module.exports = function ToUint32(x) {
	return ToNumber(x) >>> 0;
};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $TypeError = GetIntrinsic('%TypeError%');
var $Number = GetIntrinsic('%Number%');
var $RegExp = GetIntrinsic('%RegExp%');
var $parseInteger = GetIntrinsic('%parseInt%');

var callBound = __webpack_require__(8);
var regexTester = __webpack_require__(182);
var isPrimitive = __webpack_require__(83);

var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);

// whitespace from: https://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var $replace = callBound('String.prototype.replace');
var $trim = function (value) {
	return $replace(value, trimRegex, '');
};

var ToPrimitive = __webpack_require__(183);

// https://www.ecma-international.org/ecma-262/6.0/#sec-tonumber

module.exports = function ToNumber(argument) {
	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof value === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a number');
	}
	if (typeof value === 'string') {
		if (isBinary(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 2));
		} else if (isOctal(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 8));
		} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
			return NaN;
		} else {
			var trimmed = $trim(value);
			if (trimmed !== value) {
				return ToNumber(trimmed);
			}
		}
	}
	return $Number(value);
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $test = GetIntrinsic('RegExp.prototype.test');

var callBind = __webpack_require__(34);

module.exports = function regexTester(regex) {
	return callBind($test, regex);
};


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toPrimitive = __webpack_require__(184);

// https://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
	if (arguments.length > 1) {
		return toPrimitive(input, arguments[1]);
	}
	return toPrimitive(input);
};


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = __webpack_require__(185);
var isCallable = __webpack_require__(82);
var isDate = __webpack_require__(186);
var isSymbol = __webpack_require__(187);

var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
		throw new TypeError('hint must be "string" or "number"');
	}
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
		}
		return func;
	}
	return void 0;
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	var hint = 'default';
	if (arguments.length > 1) {
		if (arguments[1] === String) {
			hint = 'string';
		} else if (arguments[1] === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(23)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $Object = GetIntrinsic('%Object%');

var RequireObjectCoercible = __webpack_require__(70);

// https://www.ecma-international.org/ecma-262/6.0/#sec-toobject

module.exports = function ToObject(value) {
	RequireObjectCoercible(value);
	return $Object(value);
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2);

var $String = GetIntrinsic('%String%');
var $TypeError = GetIntrinsic('%TypeError%');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tostring

module.exports = function ToString(argument) {
	if (typeof argument === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a string');
	}
	return $String(argument);
};


/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = function properlyBoxed(method) {
	// Check node 0.6.21 bug where third parameter is not boxed
	var properlyBoxesNonStrict = true;
	var properlyBoxesStrict = true;
	var threwException = false;
	if (typeof method === 'function') {
		try {
			// eslint-disable-next-line max-params
			method.call('f', function (_, __, O) {
				if (typeof O !== 'object') {
					properlyBoxesNonStrict = false;
				}
			});

			method.call(
				[null],
				function () {
					'use strict';

					properlyBoxesStrict = typeof this === 'string'; // eslint-disable-line no-invalid-this
				},
				'x'
			);
		} catch (e) {
			threwException = true;
		}
		return !threwException && properlyBoxesNonStrict && properlyBoxesStrict;
	}
	return false;
};


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(24);
var getPolyfill = __webpack_require__(84);

module.exports = function shimArrayPrototypeMap() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ map: polyfill },
		{ map: function () { return Array.prototype.map !== polyfill; } }
	);
	return polyfill;
};


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requirePromise = __webpack_require__(25);

var getPolyfill = __webpack_require__(85);
var define = __webpack_require__(24);

module.exports = function shimAllSettled() {
	requirePromise();

	var polyfill = getPolyfill();
	define(Promise, { allSettled: polyfill }, {
		allSettled: function testAllSettled() {
			return Promise.allSettled !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(33);
/** @private */
var CustomError = /** @class */ (function (_super) {
    tslib_1.__extends(CustomError, _super);
    function CustomError() {
        var _newTarget = this.constructor;
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var _this = _super.apply(this, tslib_1.__spread(params)) || this;
        // restore prototype chain
        var actualProto = _newTarget.prototype;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_this, actualProto);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            _this.__proto__ = actualProto;
        }
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, _newTarget.constructor);
        }
        return _this;
    }
    Object.defineProperty(CustomError.prototype, "name", {
        get: function () {
            return this.constructor.name;
        },
        enumerable: true,
        configurable: true
    });
    return CustomError;
}(Error));
exports.CustomError = CustomError;
//# sourceMappingURL=CustomError.js.map

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var cache_decorators_1 = __webpack_require__(5);
var BaseAPI_1 = __webpack_require__(3);
var BitsAPI_1 = __webpack_require__(195);
var ChannelAPI_1 = __webpack_require__(196);
var ChatAPI_1 = __webpack_require__(197);
var SearchAPI_1 = __webpack_require__(201);
var StreamAPI_1 = __webpack_require__(202);
var TeamAPI_1 = __webpack_require__(203);
var UserAPI_1 = __webpack_require__(205);
/**
 * Groups all API calls available in Kraken v5.
 *
 * Can be accessed using {@TwitchClient#kraken}.
 */
var KrakenAPIGroup = /** @class */ (function (_super) {
    tslib_1.__extends(KrakenAPIGroup, _super);
    function KrakenAPIGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(KrakenAPIGroup.prototype, "bits", {
        /**
         * The API methods that deal with bits.
         */
        get: function () {
            return new BitsAPI_1.default(this._client);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KrakenAPIGroup.prototype, "channels", {
        /**
         * The API methods that deal with channels.
         */
        get: function () {
            return new ChannelAPI_1.default(this._client);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KrakenAPIGroup.prototype, "chat", {
        /**
         * The API methods that deal with chat.
         */
        get: function () {
            return new ChatAPI_1.default(this._client);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KrakenAPIGroup.prototype, "search", {
        /**
         * The API methods that deal with searching.
         */
        get: function () {
            return new SearchAPI_1.default(this._client);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KrakenAPIGroup.prototype, "streams", {
        /**
         * The API methods that deal with streams.
         */
        get: function () {
            return new StreamAPI_1.default(this._client);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KrakenAPIGroup.prototype, "users", {
        /**
         * The API methods that deal with users.
         */
        get: function () {
            return new UserAPI_1.default(this._client);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KrakenAPIGroup.prototype, "teams", {
        /**
         * The API methods that deal with teams.
         */
        get: function () {
            return new TeamAPI_1.default(this._client);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], KrakenAPIGroup.prototype, "bits", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], KrakenAPIGroup.prototype, "channels", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], KrakenAPIGroup.prototype, "chat", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], KrakenAPIGroup.prototype, "search", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], KrakenAPIGroup.prototype, "streams", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], KrakenAPIGroup.prototype, "users", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], KrakenAPIGroup.prototype, "teams", null);
    KrakenAPIGroup = tslib_1.__decorate([
        cache_decorators_1.Cacheable
    ], KrakenAPIGroup);
    return KrakenAPIGroup;
}(BaseAPI_1.default));
exports.default = KrakenAPIGroup;
module.exports = exports = KrakenAPIGroup;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KrakenAPIGroup;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var cache_decorators_1 = __webpack_require__(5);
var UserTools_1 = __webpack_require__(6);
var BaseAPI_1 = __webpack_require__(3);
var CheermoteList_1 = __webpack_require__(37);
/**
 * The API methods that deal with Bits/Cheermotes.
 *
 * Can be accessed using `client.kraken.bits` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const cheermotes = await client.kraken.bits.getCheermotes();
 * ```
 */
var BitsAPI = /** @class */ (function (_super) {
    tslib_1.__extends(BitsAPI, _super);
    function BitsAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves global and channel cheermotes.
     *
     * @param channel The channel you want to retrieve the available cheermotes for.
     * If not given, this method retrieves a list of globally available cheermotes.
     * @param includeSponsored Whether to include sponsored cheermotes in the list.
     */
    BitsAPI.prototype.getCheermotes = function (channel, includeSponsored) {
        if (includeSponsored === void 0) { includeSponsored = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {};
                        if (channel) {
                            query.channel_id = UserTools_1.extractUserId(channel);
                        }
                        if (includeSponsored) {
                            query.include_sponsored = 'true';
                        }
                        return [4 /*yield*/, this._client.callAPI({ url: 'bits/actions', query: query })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, new CheermoteList_1.default(data.actions, this._client)];
                }
            });
        });
    };
    tslib_1.__decorate([
        cache_decorators_1.Cached(3600)
    ], BitsAPI.prototype, "getCheermotes", null);
    BitsAPI = tslib_1.__decorate([
        cache_decorators_1.Cacheable
    ], BitsAPI);
    return BitsAPI;
}(BaseAPI_1.default));
exports.default = BitsAPI;
module.exports = exports = BitsAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BitsAPI;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var cache_decorators_1 = __webpack_require__(5);
var HTTPStatusCodeError_1 = __webpack_require__(19);
var NoSubscriptionProgramError_1 = __webpack_require__(15);
var UserTools_1 = __webpack_require__(6);
var BaseAPI_1 = __webpack_require__(3);
var User_1 = __webpack_require__(10);
var Channel_1 = __webpack_require__(13);
var ChannelFollow_1 = __webpack_require__(87);
var ChannelSubscription_1 = __webpack_require__(88);
var PrivilegedChannel_1 = __webpack_require__(89);
var Team_1 = __webpack_require__(40);
/**
 * The API methods that deal with channels.
 *
 * Can be accessed using `client.kraken.channels` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const channel = await client.kraken.channels.getMyChannel();
 * ```
 */
var ChannelAPI = /** @class */ (function (_super) {
    tslib_1.__extends(ChannelAPI, _super);
    function ChannelAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the channel the client is logged in to.
     */
    ChannelAPI.prototype.getMyChannel = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = PrivilegedChannel_1.default.bind;
                        return [4 /*yield*/, this._client.callAPI({ url: 'channel', scope: 'channel_read' })];
                    case 1: return [2 /*return*/, new (_a.apply(PrivilegedChannel_1.default, [void 0, _b.sent(),
                            this._client]))()];
                }
            });
        });
    };
    /**
     * Retrieves the channel for the given user.
     *
     * @param user The user you want to retrieve the channel for.
     */
    ChannelAPI.prototype.getChannel = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Channel_1.default.bind;
                        return [4 /*yield*/, this._client.callAPI({ url: "channels/" + UserTools_1.extractUserId(user) })];
                    case 1: return [2 /*return*/, new (_a.apply(Channel_1.default, [void 0, _b.sent(), this._client]))()];
                }
            });
        });
    };
    /**
     * Updates the given channel with the given data.
     *
     * @param channel The channel you want to update.
     * @param data The updated channel data.
     */
    ChannelAPI.prototype.updateChannel = function (channel, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var channelId;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        channelId = UserTools_1.extractUserId(channel);
                        return [4 /*yield*/, this._client.callAPI({
                                url: "channels/" + channelId,
                                method: 'PUT',
                                jsonBody: { channel: data },
                                scope: 'channel_editor'
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves the list of users that have editor rights to the given channel.
     *
     * @param channel The channel you want to retrieve the list of editors for.
     */
    ChannelAPI.prototype.getChannelEditors = function (channel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var channelId, data;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        channelId = UserTools_1.extractUserId(channel);
                        return [4 /*yield*/, this._client.callAPI({
                                url: "channels/" + channelId + "/editors",
                                scope: 'channel_read'
                            })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.users.map(function (userData) { return new User_1.default(userData, _this._client); })];
                }
            });
        });
    };
    /**
     * Retrieves the list of followers of the given channel.
     *
     * @param channel The channel you want to retrieve the list of followers of.
     * @param page The result page you want to retrieve.
     * @param limit The number of results you want to retrieve.
     * @param orderDirection The direction to order in - ascending or descending.
     */
    ChannelAPI.prototype.getChannelFollowers = function (channel, page, limit, orderDirection) {
        if (limit === void 0) { limit = 25; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var channelId, query, data;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        channelId = UserTools_1.extractUserId(channel);
                        query = { limit: limit.toString() };
                        if (page) {
                            query.offset = ((page - 1) * limit).toString();
                        }
                        if (orderDirection) {
                            query.direction = orderDirection;
                        }
                        return [4 /*yield*/, this._client.callAPI({
                                url: "channels/" + channelId + "/follows",
                                query: query
                            })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.follows.map(function (follow) { return new ChannelFollow_1.default(follow, _this._client); })];
                }
            });
        });
    };
    /**
     * Retrieves the list of subscribers of the given channel.
     *
     * @param channel The channel you want to retrieve the list of subscribers of.
     * @param page The result page you want to retrieve.
     * @param limit The number of results you want to retrieve.
     * @param orderDirection The direction to order in - ascending or descending.
     */
    ChannelAPI.prototype.getChannelSubscriptions = function (channel, page, limit, orderDirection) {
        if (limit === void 0) { limit = 25; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getChannelSubscriptions(channel, page, limit, orderDirection)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.subscriptions.map(function (sub) { return new ChannelSubscription_1.default(sub, _this._client); })];
                }
            });
        });
    };
    /**
     * Retrieves the total number of subscribers for the given channel.
     *
     * @param channel The channel you want to retrieve the number of subscribers for.
     */
    ChannelAPI.prototype.getChannelSubscriptionCount = function (channel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getChannelSubscriptions(channel, 0, 1)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data._total];
                }
            });
        });
    };
    /**
     * Retrieves the subscription data for the given user to a given channel.
     *
     * Throws if the channel doesn't have a subscription program or the user is not subscribed to it.
     *
     * This method requires access to the channel. If you only have access to the user,
     * use {@UserAPI#getSubscriptionData} instead.
     *
     * @param channel The channel to check the subscription to.
     * @param byUser The user to check the subscription for.
     */
    ChannelAPI.prototype.getChannelSubscriptionByUser = function (channel, byUser) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var channelId, userId, _a, e_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        channelId = UserTools_1.extractUserId(channel);
                        userId = UserTools_1.extractUserId(byUser);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = ChannelSubscription_1.default.bind;
                        return [4 /*yield*/, this._client.callAPI({
                                url: "channels/" + channelId + "/subscriptions/" + userId,
                                scope: 'channel_check_subscription'
                            })];
                    case 2: return [2 /*return*/, new (_a.apply(ChannelSubscription_1.default, [void 0, _b.sent(),
                            this._client]))()];
                    case 3:
                        e_1 = _b.sent();
                        if (e_1 instanceof HTTPStatusCodeError_1.default) {
                            if (e_1.statusCode === 404) {
                                return [2 /*return*/, null];
                            }
                            else if (e_1.statusCode === 422) {
                                throw new NoSubscriptionProgramError_1.default(channelId);
                            }
                        }
                        throw e_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves a list of teams of the given channel.
     *
     * @param channel The channel you want to retrieve the list of teams of.
     */
    ChannelAPI.prototype.getChannelTeams = function (channel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var channelId, data;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        channelId = UserTools_1.extractUserId(channel);
                        return [4 /*yield*/, this._client.callAPI({
                                url: "channels/" + channelId + "/teams",
                                method: 'GET'
                            })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.teams.map(function (team) { return new Team_1.default(team, _this._client); })];
                }
            });
        });
    };
    /**
     * Starts a commercial in the given channel.
     *
     * @param channel The channel to start the commercial in.
     * @param length The length of the commercial.
     */
    ChannelAPI.prototype.startChannelCommercial = function (channel, length) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var channelId;
            return tslib_1.__generator(this, function (_a) {
                channelId = UserTools_1.extractUserId(channel);
                return [2 /*return*/, this._client.callAPI({
                        url: "channels/" + channelId + "/commercial",
                        method: 'POST',
                        jsonBody: { length: length },
                        scope: 'channel_commercial'
                    })];
            });
        });
    };
    /**
     * Resets the given channel's stream key.
     *
     * @param channel The channel to reset the stream key for.
     */
    ChannelAPI.prototype.resetChannelStreamKey = function (channel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var channelId;
            return tslib_1.__generator(this, function (_a) {
                channelId = UserTools_1.extractUserId(channel);
                return [2 /*return*/, this._client.callAPI({
                        url: "channels/" + channelId + "/stream_key",
                        method: 'DELETE',
                        scope: 'channel_stream'
                    })];
            });
        });
    };
    ChannelAPI.prototype._getChannelSubscriptions = function (channel, page, limit, orderDirection) {
        if (limit === void 0) { limit = 25; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var channelId, query, e_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        channelId = UserTools_1.extractUserId(channel);
                        query = { limit: limit.toString() };
                        if (page) {
                            query.offset = ((page - 1) * limit).toString();
                        }
                        if (orderDirection) {
                            query.direction = orderDirection;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._client.callAPI({
                                url: "channels/" + channelId + "/subscriptions",
                                query: query,
                                scope: 'channel_subscriptions'
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_2 = _a.sent();
                        if (e_2 instanceof HTTPStatusCodeError_1.default && e_2.statusCode === 422) {
                            throw new NoSubscriptionProgramError_1.default(channelId);
                        }
                        throw e_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        cache_decorators_1.Cached(3600)
    ], ChannelAPI.prototype, "getMyChannel", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(3600)
    ], ChannelAPI.prototype, "getChannel", null);
    tslib_1.__decorate([
        cache_decorators_1.ClearsCache('getChannel', 1)
    ], ChannelAPI.prototype, "updateChannel", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(3600)
    ], ChannelAPI.prototype, "getChannelEditors", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(30)
    ], ChannelAPI.prototype, "getChannelFollowers", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(30)
    ], ChannelAPI.prototype, "getChannelSubscriptions", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(30)
    ], ChannelAPI.prototype, "getChannelSubscriptionCount", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(3600)
    ], ChannelAPI.prototype, "getChannelSubscriptionByUser", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(30)
    ], ChannelAPI.prototype, "getChannelTeams", null);
    tslib_1.__decorate([
        cache_decorators_1.ClearsCache('getMyChannel')
    ], ChannelAPI.prototype, "resetChannelStreamKey", null);
    ChannelAPI = tslib_1.__decorate([
        cache_decorators_1.Cacheable
    ], ChannelAPI);
    return ChannelAPI;
}(BaseAPI_1.default));
exports.default = ChannelAPI;
module.exports = exports = ChannelAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChannelAPI;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var cache_decorators_1 = __webpack_require__(5);
var UserTools_1 = __webpack_require__(6);
var BaseAPI_1 = __webpack_require__(3);
var ChatEmoteList_1 = __webpack_require__(198);
var ChatRoom_1 = __webpack_require__(200);
/**
 * The API methods that deal with chat and chatrooms.
 *
 * Can be accessed using `client.kraken.chat` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const emotes = await client.kraken.chat.getEmotesBySets('1');
 * ```
 */
var ChatAPI = /** @class */ (function (_super) {
    tslib_1.__extends(ChatAPI, _super);
    function ChatAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of emotes for a given list of enote set IDs.
     *
     * @param emotesets The list of emote set IDs, either as array of strings or as a comma separated string.
     */
    ChatAPI.prototype.getEmotesBySets = function (emotesets) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof emotesets !== 'string') {
                            emotesets = emotesets.join(',');
                        }
                        return [4 /*yield*/, this._client.callAPI({
                                url: 'chat/emoticon_images',
                                query: {
                                    emotesets: emotesets
                                }
                            })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, new ChatEmoteList_1.default(data.emoticons, this._client)];
                }
            });
        });
    };
    /**
     * Retrieves a list of chat rooms for a given channel.
     *
     * @param channel The channel to retrieve the chat rooms of.
     */
    ChatAPI.prototype.getChatRoomsForChannel = function (channel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({
                            url: "chat/" + UserTools_1.extractUserId(channel) + "/rooms"
                        })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.rooms.map(function (room) { return new ChatRoom_1.default(room, _this._client); })];
                }
            });
        });
    };
    tslib_1.__decorate([
        cache_decorators_1.Cached(3600)
    ], ChatAPI.prototype, "getEmotesBySets", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(3600)
    ], ChatAPI.prototype, "getChatRoomsForChannel", null);
    ChatAPI = tslib_1.__decorate([
        cache_decorators_1.Cacheable
    ], ChatAPI);
    return ChatAPI;
}(BaseAPI_1.default));
exports.default = ChatAPI;
module.exports = exports = ChatAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatAPI;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var cache_decorators_1 = __webpack_require__(5);
var shared_utils_1 = __webpack_require__(1);
var ChatEmote_1 = __webpack_require__(199);
/**
 * A list of emotes.
 */
var ChatEmoteList = /** @class */ (function () {
    /** @private */
    function ChatEmoteList(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(ChatEmoteList.prototype, "emotes", {
        /**
         * A list of all emotes in the list.
         */
        get: function () {
            var _this = this;
            return this._data.map(function (emote) { return new ChatEmote_1.default(emote, _this._client); });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets all emotes from the list that are from a given emote set.
     *
     * @param setId
     */
    ChatEmoteList.prototype.getAllFromSet = function (setId) {
        var _this = this;
        return this._data
            .filter(function (emote) { return emote.emoticon_set === setId; })
            .map(function (emote) { return new ChatEmote_1.default(emote, _this._client); });
    };
    /**
     * Finds a single emote by its ID.
     *
     * @param id
     */
    ChatEmoteList.prototype.getById = function (id) {
        var data = this._data.find(function (emote) { return emote.id === id; });
        return data ? new ChatEmote_1.default(data, this._client) : null;
    };
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], ChatEmoteList.prototype, "_client", void 0);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], ChatEmoteList.prototype, "emotes", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached()
    ], ChatEmoteList.prototype, "getAllFromSet", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached()
    ], ChatEmoteList.prototype, "getById", null);
    ChatEmoteList = tslib_1.__decorate([
        cache_decorators_1.Cacheable
    ], ChatEmoteList);
    return ChatEmoteList;
}());
exports.default = ChatEmoteList;
module.exports = exports = ChatEmoteList;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatEmoteList;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
/**
 * A chat emote.
 */
var ChatEmote = /** @class */ (function () {
    /** @private */
    function ChatEmote(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(ChatEmote.prototype, "id", {
        /**
         * The emote ID.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatEmote.prototype, "code", {
        /**
         * The emote code, i.e. how you write it in chat.
         */
        get: function () {
            return this._data.code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatEmote.prototype, "setId", {
        /**
         * The ID of the emote set.
         */
        get: function () {
            return this._data.emoticon_set;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], ChatEmote.prototype, "_client", void 0);
    return ChatEmote;
}());
exports.default = ChatEmote;
module.exports = exports = ChatEmote;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatEmote;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/** @private */
var shared_utils_1 = __webpack_require__(1);
var ChatRoom = /** @class */ (function () {
    /** @private */
    function ChatRoom(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(ChatRoom.prototype, "id", {
        /**
         * The ID of the chat room.
         */
        get: function () {
            return this._data._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatRoom.prototype, "ownerId", {
        /**
         * The user ID of the chat room owner.
         */
        get: function () {
            return this._data.owner_id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves the user data of the chat room owner.
     */
    ChatRoom.prototype.getOwner = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.users.getUser(this._data.owner_id)];
            });
        });
    };
    Object.defineProperty(ChatRoom.prototype, "name", {
        /**
         * The name of the chat room.
         */
        get: function () {
            return this._data.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatRoom.prototype, "topic", {
        /**
         * The topic of the chat room.
         */
        get: function () {
            return this._data.topic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatRoom.prototype, "isPreviewable", {
        /**
         * Whether the chat room is previewable.
         */
        get: function () {
            return this._data.is_previewable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatRoom.prototype, "minRole", {
        /**
         * The minimum role allowed to enter this chat room.
         */
        get: function () {
            return this._data.minimum_allowed_role;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatRoom.prototype, "ircName", {
        /**
         * The name of the IRC channel that corresponds to this chat room.
         */
        get: function () {
            return "#chatrooms:" + this._data.owner_id + ":" + this._data._id;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], ChatRoom.prototype, "_client", void 0);
    return ChatRoom;
}());
exports.default = ChatRoom;
module.exports = exports = ChatRoom;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatRoom;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var cache_decorators_1 = __webpack_require__(5);
var BaseAPI_1 = __webpack_require__(3);
var Channel_1 = __webpack_require__(13);
var Stream_1 = __webpack_require__(41);
/**
 * The API methods that deal with searching.
 *
 * Can be accessed using `client.kraken.search` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const channel = await client.kraken.search.searchStreams('Hearthstone');
 * ```
 */
var SearchAPI = /** @class */ (function (_super) {
    tslib_1.__extends(SearchAPI, _super);
    function SearchAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of channels that match the given search term.
     *
     * @param term The term you want to search for.
     * @param page The result page you want to retrieve.
     * @param limit The number of results you want to retrieve.
     */
    SearchAPI.prototype.searchChannels = function (term, page, limit) {
        if (limit === void 0) { limit = 25; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, data;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = { query: term, limit: limit.toString() };
                        if (page) {
                            query.offset = ((page - 1) * limit).toString();
                        }
                        return [4 /*yield*/, this._client.callAPI({ url: 'search/channels', query: query })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.channels.map(function (channelData) { return new Channel_1.default(channelData, _this._client); })];
                }
            });
        });
    };
    /**
     * Retrieves a list of streams that match the given search term.
     *
     * @param term The term you want to search for.
     * @param page The result page you want to retrieve.
     * @param limit The number of results you want to retrieve.
     * @param hls Whether you want only HLS or only non-HLS (RTMP) streams. If not set, finds both types of streams.
     */
    SearchAPI.prototype.searchStreams = function (term, page, limit, hls) {
        if (limit === void 0) { limit = 25; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, data;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = { query: term, limit: limit.toString() };
                        if (page) {
                            query.offset = ((page - 1) * limit).toString();
                        }
                        if (hls !== undefined) {
                            query.hls = hls.toString();
                        }
                        return [4 /*yield*/, this._client.callAPI({ url: 'search/streams', query: query })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.streams.map(function (streamData) { return new Stream_1.default(streamData, _this._client); })];
                }
            });
        });
    };
    tslib_1.__decorate([
        cache_decorators_1.Cached(300)
    ], SearchAPI.prototype, "searchChannels", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(300)
    ], SearchAPI.prototype, "searchStreams", null);
    SearchAPI = tslib_1.__decorate([
        cache_decorators_1.Cacheable
    ], SearchAPI);
    return SearchAPI;
}(BaseAPI_1.default));
exports.default = SearchAPI;
module.exports = exports = SearchAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchAPI;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var cache_decorators_1 = __webpack_require__(5);
var UserTools_1 = __webpack_require__(6);
var BaseAPI_1 = __webpack_require__(3);
var Stream_1 = __webpack_require__(41);
/**
 * The API methods that deal with streams.
 *
 * Can be accessed using `client.kraken.streams` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const stream = await client.kraken.streams.getStreamByChannel('125328655');
 * ```
 */
var StreamAPI = /** @class */ (function (_super) {
    tslib_1.__extends(StreamAPI, _super);
    function StreamAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves the current stream on the given channel.
     *
     * @param channel
     */
    StreamAPI.prototype.getStreamByChannel = function (channel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var channelId, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        channelId = UserTools_1.extractUserId(channel);
                        return [4 /*yield*/, this._client.callAPI({ url: "streams/" + channelId })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.stream ? new Stream_1.default(data.stream, this._client) : null];
                }
            });
        });
    };
    /**
     * Retrieves a list of streams.
     *
     * @param channels A channel ID or a list thereof.
     * @param game Show only streams playing a certain game.
     * @param languageCode Show only streams in a certain language.
     * @param type Show only streams of a certain type.
     * @param page The result page you want to retrieve.
     * @param limit The number of results you want to retrieve.
     */
    StreamAPI.prototype.getStreams = function (channels, game, languageCode, type, page, limit) {
        if (limit === void 0) { limit = 25; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, data;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = { limit: limit.toString() };
                        if (channels) {
                            query.channel = typeof channels === 'string' ? channels : channels.join(',');
                        }
                        if (game) {
                            query.game = game;
                        }
                        if (languageCode) {
                            query.language = languageCode;
                        }
                        if (type) {
                            query.stream_type = type;
                        }
                        if (page) {
                            query.offset = ((page - 1) * limit).toString();
                        }
                        return [4 /*yield*/, this._client.callAPI({ url: 'streams', query: query })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.streams.map(function (streamData) { return new Stream_1.default(streamData, _this._client); })];
                }
            });
        });
    };
    /**
     * Retrieves a list of all streams.
     *
     * @param page The result page you want to retrieve.
     * @param limit The number of results you want to retrieve.
     */
    StreamAPI.prototype.getAllStreams = function (page, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.getStreams(undefined, undefined, undefined, Stream_1.StreamType.All, page, limit)];
            });
        });
    };
    /**
     * Retrieves a list of all live streams.
     *
     * @param page The result page you want to retrieve.
     * @param limit The number of results you want to retrieve.
     */
    StreamAPI.prototype.getAllLiveStreams = function (page, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.getStreams(undefined, undefined, undefined, Stream_1.StreamType.Live, page, limit)];
            });
        });
    };
    /**
     * Retrieves a list of all streams on channels the currently authenticated user is following.
     *
     * @param type Show only streams of a certain type.
     * @param page The result page you want to retrieve.
     * @param limit The number of results you want to retrieve.
     */
    StreamAPI.prototype.getFollowedStreams = function (type, page, limit) {
        if (limit === void 0) { limit = 25; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, data;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = { limit: limit.toString() };
                        if (type) {
                            query.type = type;
                        }
                        if (page) {
                            query.offset = ((page - 1) * limit).toString();
                        }
                        return [4 /*yield*/, this._client.callAPI({
                                url: 'streams/followed',
                                query: query,
                                scope: 'user_read'
                            })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.streams.map(function (streamData) { return new Stream_1.default(streamData, _this._client); })];
                }
            });
        });
    };
    tslib_1.__decorate([
        cache_decorators_1.Cached(60)
    ], StreamAPI.prototype, "getStreamByChannel", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(60)
    ], StreamAPI.prototype, "getFollowedStreams", null);
    StreamAPI = tslib_1.__decorate([
        cache_decorators_1.Cacheable
    ], StreamAPI);
    return StreamAPI;
}(BaseAPI_1.default));
exports.default = StreamAPI;
module.exports = exports = StreamAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StreamAPI;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var cache_decorators_1 = __webpack_require__(5);
var BaseAPI_1 = __webpack_require__(3);
var Team_1 = __webpack_require__(40);
var TeamWithUsers_1 = __webpack_require__(204);
/**
 * The API methods that deal with teams.
 *
 * Can be accessed using `client.kraken.teams` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const team = await client.kraken.teams.getTeamByName('staff');
 * ```
 */
var TeamAPI = /** @class */ (function (_super) {
    tslib_1.__extends(TeamAPI, _super);
    function TeamAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get a list of teams.
     *
     * @param page The result page you want to retrieve.
     * @param limit The number of results you want to retrieve.
     */
    TeamAPI.prototype.getTeams = function (page, limit) {
        if (limit === void 0) { limit = 25; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, data;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {};
                        if (page) {
                            query.offset = ((page - 1) * limit).toString();
                        }
                        query.limit = limit.toString();
                        return [4 /*yield*/, this._client.callAPI({
                                url: 'teams',
                                query: query
                            })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.teams.map(function (team) { return new Team_1.default(team, _this._client); })];
                }
            });
        });
    };
    /**
     * Retrieves the team data for the given team name.
     *
     * @param team The team name you want to look up.
     */
    TeamAPI.prototype.getTeamByName = function (team) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var teamData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({ url: "teams/" + team })];
                    case 1:
                        teamData = _a.sent();
                        return [2 /*return*/, new TeamWithUsers_1.default(teamData, this._client)];
                }
            });
        });
    };
    tslib_1.__decorate([
        cache_decorators_1.Cached(3600)
    ], TeamAPI.prototype, "getTeams", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(3600)
    ], TeamAPI.prototype, "getTeamByName", null);
    TeamAPI = tslib_1.__decorate([
        cache_decorators_1.Cacheable
    ], TeamAPI);
    return TeamAPI;
}(BaseAPI_1.default));
exports.default = TeamAPI;
module.exports = exports = TeamAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TeamAPI;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Team_1 = __webpack_require__(40);
var User_1 = __webpack_require__(10);
var TeamWithUsers = /** @class */ (function (_super) {
    tslib_1.__extends(TeamWithUsers, _super);
    function TeamWithUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * The list of users in the team.
     */
    TeamWithUsers.prototype.getUsers = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._data.users.map(function (data) { return new User_1.default(data, _this._client); })];
            });
        });
    };
    return TeamWithUsers;
}(Team_1.default));
exports.default = TeamWithUsers;
module.exports = exports = TeamWithUsers;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TeamWithUsers;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var cache_decorators_1 = __webpack_require__(5);
var shared_utils_1 = __webpack_require__(1);
var HellFreezesOverError_1 = __webpack_require__(20);
var HTTPStatusCodeError_1 = __webpack_require__(19);
var NoSubscriptionProgramError_1 = __webpack_require__(15);
var UserTools_1 = __webpack_require__(6);
var BaseAPI_1 = __webpack_require__(3);
var EmoteSetList_1 = __webpack_require__(90);
var PrivilegedUser_1 = __webpack_require__(91);
var User_1 = __webpack_require__(10);
var UserBlock_1 = __webpack_require__(92);
var UserChatInfo_1 = __webpack_require__(206);
var UserFollow_1 = __webpack_require__(93);
var UserSubscription_1 = __webpack_require__(94);
/**
 * The API methods that deal with users.
 *
 * Can be accessed using `client.kraken.users` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const user = await client.kraken.users.getUser('125328655');
 * ```
 */
var UserAPI = /** @class */ (function (_super) {
    tslib_1.__extends(UserAPI, _super);
    function UserAPI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._userByNameCache = new Map();
        return _this;
    }
    /**
     * Retrieves the user data of the currently authenticated user.
     */
    UserAPI.prototype.getMe = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = PrivilegedUser_1.default.bind;
                        return [4 /*yield*/, this._client.callAPI({ url: 'user', scope: 'user_read' })];
                    case 1: return [2 /*return*/, new (_a.apply(PrivilegedUser_1.default, [void 0, _b.sent(), this._client]))()];
                }
            });
        });
    };
    /**
     * Retrieves the user data for the given user ID.
     *
     * @param userId The user ID you want to look up.
     */
    UserAPI.prototype.getUser = function (userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callAPI({ url: "users/" + UserTools_1.extractUserId(userId) })];
                    case 1:
                        userData = _a.sent();
                        if (!userData) {
                            throw new HellFreezesOverError_1.default('Could not get authenticated user');
                        }
                        return [2 /*return*/, new User_1.default(userData, this._client)];
                }
            });
        });
    };
    /**
     * Retrieves the user data for the given user name.
     *
     * @param userName The user name you want to look up.
     */
    UserAPI.prototype.getUserByName = function (userName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var users, user;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // not using the decorator's cache here as users-by-name is slightly more complex to cache
                        this._cleanUserCache();
                        if (this._userByNameCache.has(userName)) {
                            return [2 /*return*/, this._userByNameCache.get(userName).value];
                        }
                        return [4 /*yield*/, this._client.callAPI({ url: 'users', query: { login: userName } })];
                    case 1:
                        users = (_a.sent()).users;
                        if (users.length === 0) {
                            return [2 /*return*/, null];
                        }
                        user = new User_1.default(users[0], this._client);
                        this._userByNameCache.set(userName, {
                            value: user,
                            expires: Date.now() + 3600 * 1000
                        });
                        return [2 /*return*/, user];
                }
            });
        });
    };
    /**
     * Retrieves the user data for the given user names.
     *
     * @param userNames The user names you want to look up.
     */
    UserAPI.prototype.getUsersByNames = function (userNames) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var cachedEntries, cachedObject, cachedUsers, toFetch, usersData, usersArr, users;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._cleanUserCache();
                        userNames = userNames.map(function (name) { return name.toLowerCase(); });
                        cachedEntries = Array.from(this._userByNameCache.entries()).filter(function (_a) {
                            var _b = tslib_1.__read(_a, 1), key = _b[0];
                            return userNames.includes(key);
                        });
                        cachedObject = shared_utils_1.entriesToObject(cachedEntries);
                        cachedUsers = shared_utils_1.mapObject(cachedObject, function (entry) { return entry.value; });
                        toFetch = userNames.filter(function (name) { return !(name in cachedUsers); });
                        if (!toFetch.length) {
                            return [2 /*return*/, cachedUsers];
                        }
                        return [4 /*yield*/, this._client.callAPI({ url: 'users', query: { login: toFetch.join(',') } })];
                    case 1:
                        usersData = _a.sent();
                        usersArr = usersData.users.map(function (data) { return new User_1.default(data, _this._client); });
                        usersArr.forEach(function (user) {
                            return _this._userByNameCache.set(user.name, {
                                value: user,
                                expires: Date.now() + 3600 * 1000
                            });
                        });
                        users = shared_utils_1.indexBy(usersArr, 'name');
                        return [2 /*return*/, tslib_1.__assign(tslib_1.__assign({}, cachedUsers), users)];
                }
            });
        });
    };
    /**
     * Retrieves information about the user's chat appearance and privileges.
     *
     * @param user The user you want to get chat info for.
     */
    UserAPI.prototype.getChatInfo = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = UserTools_1.extractUserId(user);
                        return [4 /*yield*/, this._client.callAPI({ url: "users/" + userId + "/chat" })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, new UserChatInfo_1.default(data, this._client)];
                }
            });
        });
    };
    /**
     * Retrieves the emotes a given user can use.
     *
     * @param user The user you want to get emotes for.
     */
    UserAPI.prototype.getUserEmotes = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = UserTools_1.extractUserId(user);
                        return [4 /*yield*/, this._client.callAPI({ url: "users/" + userId + "/emotes", scope: 'user_subscriptions' })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, new EmoteSetList_1.default(data.emoticon_sets)];
                }
            });
        });
    };
    /**
     * Retrieves the subscription data for a given user to a given channel.
     *
     * @param user The user to retrieve the subscription data of.
     * @param toChannel The channel you want to retrieve the subscription data to.
     */
    UserAPI.prototype.getSubscriptionData = function (user, toChannel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, channelId, _a, e_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userId = UserTools_1.extractUserId(user);
                        channelId = UserTools_1.extractUserId(toChannel);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = UserSubscription_1.default.bind;
                        return [4 /*yield*/, this._client.callAPI({
                                url: "users/" + userId + "/subscriptions/" + channelId,
                                scope: 'user_subscriptions'
                            })];
                    case 2: return [2 /*return*/, new (_a.apply(UserSubscription_1.default, [void 0, _b.sent(),
                            this._client]))()];
                    case 3:
                        e_1 = _b.sent();
                        if (e_1 instanceof HTTPStatusCodeError_1.default) {
                            if (e_1.statusCode === 404) {
                                return [2 /*return*/, null];
                            }
                            else if (e_1.statusCode === 422) {
                                throw new NoSubscriptionProgramError_1.default(channelId);
                            }
                        }
                        throw e_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get a list of channels a given user follows.
     *
     * @param user The user you want to retrieve the follows of.
     * @param page The result page you want to retrieve.
     * @param limit The number of results you want to retrieve.
     * @param orderBy The field to order by.
     * @param orderDirection The direction to order in - ascending or descending.
     */
    UserAPI.prototype.getFollowedChannels = function (user, page, limit, orderBy, orderDirection) {
        if (limit === void 0) { limit = 25; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, query, data;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = UserTools_1.extractUserId(user);
                        query = {};
                        if (page) {
                            query.offset = ((page - 1) * limit).toString();
                        }
                        query.limit = limit.toString();
                        if (orderBy) {
                            query.sortby = orderBy;
                        }
                        if (orderDirection) {
                            query.direction = orderDirection;
                        }
                        return [4 /*yield*/, this._client.callAPI({
                                url: "users/" + userId + "/follows/channels",
                                query: query
                            })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.follows.map(function (follow) { return new UserFollow_1.default(follow, _this._client); })];
                }
            });
        });
    };
    /**
     * Get follow data for a given user to a given channel.
     *
     * @param user The user you want to retrieve follow data of.
     * @param channel The channel you want to retrieve follow data to.
     */
    UserAPI.prototype.getFollowedChannel = function (user, channel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, channelId, data, e_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = UserTools_1.extractUserId(user);
                        channelId = UserTools_1.extractUserId(channel);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._client.callAPI({ url: "users/" + userId + "/follows/channels/" + channelId })];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, new UserFollow_1.default(data, this._client)];
                    case 3:
                        e_2 = _a.sent();
                        if (e_2 instanceof HTTPStatusCodeError_1.default) {
                            if (e_2.statusCode === 404) {
                                return [2 /*return*/, null];
                            }
                        }
                        throw e_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Follows a given channel with a given user.
     *
     * @param user The user you want to follow with.
     * @param channel The channel to follow.
     * @param notifications Whether the user will receive notifications.
     */
    UserAPI.prototype.followChannel = function (user, channel, notifications) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, channelId, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = UserTools_1.extractUserId(user);
                        channelId = UserTools_1.extractUserId(channel);
                        return [4 /*yield*/, this._client.callAPI({
                                url: "users/" + userId + "/follows/channels/" + channelId,
                                method: 'PUT',
                                scope: 'user_follows_edit',
                                body: { notifications: Boolean(notifications).toString() }
                            })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, new UserFollow_1.default(data, this._client)];
                }
            });
        });
    };
    /**
     * Unfollows a given channel with a given user.
     *
     * @param user The user you want to unfollow with.
     * @param channel The channel to unfollow.
     */
    UserAPI.prototype.unfollowChannel = function (user, channel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, channelId;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = UserTools_1.extractUserId(user);
                        channelId = UserTools_1.extractUserId(channel);
                        return [4 /*yield*/, this._client.callAPI({
                                url: "users/" + userId + "/follows/channels/" + channelId,
                                scope: 'user_follows_edit',
                                method: 'DELETE'
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves a list of users a given user has blocked.
     *
     * @param user The user you want to retrieve the block list of.
     * @param page The result page you want to retrieve.
     * @param limit The number of results you want to retrieve.
     */
    UserAPI.prototype.getBlockedUsers = function (user, page, limit) {
        if (limit === void 0) { limit = 25; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, query, data;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = UserTools_1.extractUserId(user);
                        query = { limit: limit.toString() };
                        if (page) {
                            query.offset = ((page - 1) * limit).toString();
                        }
                        return [4 /*yield*/, this._client.callAPI({
                                url: "users/" + userId + "/blocks",
                                query: query,
                                scope: 'user_blocks_read'
                            })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.blocks.map(function (block) { return new UserBlock_1.default(block, _this._client); })];
                }
            });
        });
    };
    /**
     * Blocks a given user with another given user.
     *
     * @param user The user you want to block with.
     * @param userToBlock The user to block.
     */
    UserAPI.prototype.blockUser = function (user, userToBlock) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, userIdToBlock, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = UserTools_1.extractUserId(user);
                        userIdToBlock = UserTools_1.extractUserId(userToBlock);
                        return [4 /*yield*/, this._client.callAPI({
                                url: "users/" + userId + "/blocks/" + userIdToBlock,
                                method: 'PUT',
                                scope: 'user_blocks_edit'
                            })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, new UserBlock_1.default(data, this._client)];
                }
            });
        });
    };
    /**
     * Unblocks a given user with another given user.
     *
     * @param user The user you want to unblock with.
     * @param userToUnblock The user to unblock.
     */
    UserAPI.prototype.unblockUser = function (user, userToUnblock) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, userIdToUnblock;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = UserTools_1.extractUserId(user);
                        userIdToUnblock = UserTools_1.extractUserId(userToUnblock);
                        return [4 /*yield*/, this._client.callAPI({
                                url: "users/" + userId + "/blocks/" + userIdToUnblock,
                                method: 'DELETE',
                                scope: 'user_blocks_edit'
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserAPI.prototype._cleanUserCache = function () {
        var _this = this;
        var now = Date.now();
        this._userByNameCache.forEach(function (val, key) {
            if (val.expires < now) {
                _this._userByNameCache.delete(key);
            }
        });
    };
    tslib_1.__decorate([
        cache_decorators_1.Cached(3600)
    ], UserAPI.prototype, "getMe", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(3600)
    ], UserAPI.prototype, "getUser", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(3600)
    ], UserAPI.prototype, "getChatInfo", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(3600)
    ], UserAPI.prototype, "getUserEmotes", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(3600)
    ], UserAPI.prototype, "getSubscriptionData", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(300)
    ], UserAPI.prototype, "getFollowedChannels", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(300)
    ], UserAPI.prototype, "getFollowedChannel", null);
    tslib_1.__decorate([
        cache_decorators_1.ClearsCache('getFollowedChannels', 1),
        cache_decorators_1.ClearsCache('getFollowedChannel', 2)
    ], UserAPI.prototype, "followChannel", null);
    tslib_1.__decorate([
        cache_decorators_1.ClearsCache('getFollowedChannels', 1),
        cache_decorators_1.ClearsCache('getFollowedChannel', 2)
    ], UserAPI.prototype, "unfollowChannel", null);
    tslib_1.__decorate([
        cache_decorators_1.Cached(3600)
    ], UserAPI.prototype, "getBlockedUsers", null);
    tslib_1.__decorate([
        cache_decorators_1.ClearsCache('getBlockedUsers', 1)
    ], UserAPI.prototype, "blockUser", null);
    tslib_1.__decorate([
        cache_decorators_1.ClearsCache('getBlockedUsers', 1)
    ], UserAPI.prototype, "unblockUser", null);
    UserAPI = tslib_1.__decorate([
        cache_decorators_1.Cacheable
    ], UserAPI);
    return UserAPI;
}(BaseAPI_1.default));
exports.default = UserAPI;
module.exports = exports = UserAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserAPI;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
/**
 * Information about a user's chat appearance and privileges.
 */
var UserChatInfo = /** @class */ (function () {
    /** @private */
    function UserChatInfo(_data, client) {
        this._data = _data;
        this._client = client;
    }
    Object.defineProperty(UserChatInfo.prototype, "userId", {
        /**
         * The ID of the user.
         */
        get: function () {
            return this._data._id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves more data about the user.
     */
    UserChatInfo.prototype.getUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.kraken.users.getUser(this._data._id)];
            });
        });
    };
    Object.defineProperty(UserChatInfo.prototype, "userName", {
        /**
         * The name of the user.
         */
        get: function () {
            return this._data.login;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserChatInfo.prototype, "displayName", {
        /**
         * The display name of the user.
         */
        get: function () {
            return this._data.display_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserChatInfo.prototype, "color", {
        /**
         * The color that the user appears in in chat.
         */
        get: function () {
            return this._data.color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserChatInfo.prototype, "isKnownBot", {
        /**
         * Whether the user is a known bot.
         */
        get: function () {
            return this._data.is_known_bot;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserChatInfo.prototype, "isVerifiedBot", {
        /**
         * Whether the user is a verified bot.
         */
        get: function () {
            return this._data.is_verified_bot;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserChatInfo.prototype, "isAtLeastKnownBot", {
        /**
         * Whether the user is at least a known bot (i.e. known or verified).
         */
        get: function () {
            return this._data.is_known_bot || this._data.is_verified_bot;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Checks whether the user has access to a given global badge.
     *
     * @param id The ID of a badge.
     */
    UserChatInfo.prototype.hasBadge = function (id) {
        return this._data.badges.some(function (badge) { return badge.id === id; });
    };
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], UserChatInfo.prototype, "_client", void 0);
    return UserChatInfo;
}());
exports.default = UserChatInfo;
module.exports = exports = UserChatInfo;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserChatInfo;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var cache_decorators_1 = __webpack_require__(5);
var UserTools_1 = __webpack_require__(6);
var TwitchClient_1 = __webpack_require__(4);
var BaseAPI_1 = __webpack_require__(3);
var ChattersList_1 = __webpack_require__(96);
/**
 * Different API methods that are not officially supported by Twitch.
 *
 * Can be accessed using `client.unsupported` on a {@TwitchClient} instance.
 *
 * ## Example
 * ```ts
 * const client = TwitchClient.withCredentials(clientId, accessToken);
 * const events = await client.unsupported.getEvents('125328655');
 * ```
 */
var UnsupportedAPI = /** @class */ (function (_super) {
    tslib_1.__extends(UnsupportedAPI, _super);
    function UnsupportedAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of chatters in the Twitch chat of the given channel.
     *
     * **WARNING**: In contrast to most other methods, this takes a channel *name*, not a user ID.
     *
     * @param channel The channel to retrieve the chatters for.
     */
    UnsupportedAPI.prototype.getChatters = function (channel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var channelName, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        channelName = UserTools_1.extractUserName(channel);
                        return [4 /*yield*/, this._client.callAPI({
                                url: "https://tmi.twitch.tv/group/user/" + channelName + "/chatters",
                                type: TwitchClient_1.TwitchAPICallType.Custom
                            })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, new ChattersList_1.default(data)];
                }
            });
        });
    };
    tslib_1.__decorate([
        cache_decorators_1.Cached(60)
    ], UnsupportedAPI.prototype, "getChatters", null);
    UnsupportedAPI = tslib_1.__decorate([
        cache_decorators_1.Cacheable
    ], UnsupportedAPI);
    return UnsupportedAPI;
}(BaseAPI_1.default));
exports.default = UnsupportedAPI;
module.exports = exports = UnsupportedAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UnsupportedAPI;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shared_utils_1 = __webpack_require__(1);
var TwitchClient_1 = __webpack_require__(4);
/**
 * An auth provider that retrieve tokens using client credentials.
 */
var ClientCredentialsAuthProvider = /** @class */ (function () {
    /**
     * Creates a new auth provider to receive an application token with using the client ID and secret.
     *
     * You don't usually have to create this manually. You should use `TwitchClient.withClientCredentials` instead.
     *
     * @param clientId The client ID of your application.
     * @param clientSecret The client secret of your application.
     *
     * You need to obtain one using one of the [Twitch OAuth flows](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/).
     */
    function ClientCredentialsAuthProvider(clientId, clientSecret) {
        /**
         * The type of tokens this provider generates.
         *
         * This auth provider generates app tokens.
         */
        this.tokenType = 'app';
        this._clientId = clientId;
        this._clientSecret = clientSecret;
    }
    /**
     * Retrieves an access token.
     *
     * If any scopes are provided, this throws. The client credentials flow does not support scopes.
     *
     * @param scopes The requested scopes.
     */
    ClientCredentialsAuthProvider.prototype.getAccessToken = function (scopes) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (scopes && scopes.length > 0) {
                    throw new Error("Scope " + (typeof scopes === 'string' ? scopes : scopes.join(',')) + " requested but the client credentials flow does not support scopes");
                }
                if (!this._token || this._token.isExpired) {
                    return [2 /*return*/, this.refresh()];
                }
                return [2 /*return*/, this._token];
            });
        });
    };
    /**
     * Retrieves a new app access token.
     */
    ClientCredentialsAuthProvider.prototype.refresh = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, TwitchClient_1.default.getAppAccessToken(this._clientId, this._clientSecret)];
                    case 1: return [2 /*return*/, (_a._token = _b.sent())];
                }
            });
        });
    };
    /** @private */
    ClientCredentialsAuthProvider.prototype.setAccessToken = function (token) {
        this._token = token;
    };
    Object.defineProperty(ClientCredentialsAuthProvider.prototype, "clientId", {
        /**
         * The client ID.
         */
        get: function () {
            return this._clientId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientCredentialsAuthProvider.prototype, "currentScopes", {
        /**
         * The scopes that are currently available using the access token.
         */
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], ClientCredentialsAuthProvider.prototype, "_clientId", void 0);
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], ClientCredentialsAuthProvider.prototype, "_clientSecret", void 0);
    tslib_1.__decorate([
        shared_utils_1.NonEnumerable
    ], ClientCredentialsAuthProvider.prototype, "_token", void 0);
    return ClientCredentialsAuthProvider;
}());
exports.default = ClientCredentialsAuthProvider;
module.exports = exports = ClientCredentialsAuthProvider;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ClientCredentialsAuthProvider;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var CustomError_1 = __webpack_require__(12);
/**
 * Thrown whenever a different token type (user vs. app) is expected in the method you're calling.
 */
var InvalidTokenTypeError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidTokenTypeError, _super);
    function InvalidTokenTypeError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidTokenTypeError;
}(CustomError_1.default));
exports.default = InvalidTokenTypeError;
module.exports = exports = InvalidTokenTypeError;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InvalidTokenTypeError;


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "TwitchApiClient", function() { return /* binding */ api_client_TwitchApiClient; });

// EXTERNAL MODULE: ./node_modules/twitch/lib/index.js
var lib = __webpack_require__(101);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/config.ts
const defaultClientId = "59x8jyaudw3pnyi722x3e2x9awh385";
const defaultKrakenHeaders = {
    "Client-ID": "",
    "Accept": "application/vnd.twitchtv.v5+json",
};
class ConfigManager {
    static setUserClientId(clientId) {
        this.userClientId = clientId;
    }
    static getClientId() {
        if (this.userClientId) {
            return this.userClientId;
        }
        return defaultClientId;
    }
    static getDefaultKrakenHeaders() {
        return {
            "Client-ID": this.getClientId(),
            "Accept": "application/vnd.twitchtv.v5+json",
        };
    }
}

// CONCATENATED MODULE: ./src/downloader/chat_downloader.ts

const tooManyRequests = 429; // HTTP 429 too many requests response code
async function sleep(ms) {
    return new Promise(() => setTimeout(() => { }, ms));
}
// TypeScript does not allow parametrized string to be formatted in runtime,
// so this is the best way to get a formatted URL.
function getApiUrl(videoId, nextCursor) {
    if (nextCursor) {
        return `https://api.twitch.tv/v5/videos/${videoId}/comments?cursor=${nextCursor}`;
    }
    return `https://api.twitch.tv/v5/videos/${videoId}/comments`;
}
class chat_downloader_ChatDownloader {
    constructor(handler) {
        this.loopHandler = handler;
    }
    // Download chat of single Twitch video
    async downloadChat(videoId) {
        let nextCursor = null;
        const headers = ConfigManager.getDefaultKrakenHeaders();
        do {
            const response = await this.callApi(headers, videoId, nextCursor);
            if (response.text) { // response.text is null if status is not ok.
                try {
                    const jsonContent = JSON.parse(response.text);
                    const comments = jsonContent["comments"] || [];
                    nextCursor = jsonContent["_next"];
                    const done = !nextCursor;
                    this.loopHandler(done, null, response.status, comments);
                }
                catch (err) {
                    console.error(`Error when parsing JSON response: ${response.text}`);
                    this.loopHandler(true, "JSON parsing error", response.status, []);
                }
            }
            else if (response.status == tooManyRequests) {
                this.loopHandler(false, "429 Too Many Request", response.status, []);
                // As of 2020-07-25, Kraken API does not seem to use 429 response code at all.
                // This sleep is here only as an additional check
                await sleep(500); // Sleep for 1 second
            }
            else {
                console.error(`API call failed with error code: ${response.status}`);
                console.error(`response JSON: ${JSON.stringify(response)}`);
                this.loopHandler(true, "API call failure", response.status, []);
            }
        } while (nextCursor);
    }
    // Call Twitch API one time
    async callApi(headers, videoId, cursor) {
        const url = getApiUrl(videoId, cursor);
        const response = await fetch(url, { headers: headers });
        if (!response.ok) {
            return { status: response.status, text: null };
        }
        const content = await response.text();
        return { status: response.status, text: content };
    }
}

// CONCATENATED MODULE: ./src/downloader/followerlist.ts
class FollowerListDownloader {
    constructor(client, handler) {
        this.client = client;
        this.handler = handler;
    }
    // streamerID is numeric ID (not username or display name) of streamer
    async download(streamerId) {
        const filter = { followedUser: streamerId };
        const request = this.client.helix.users.getFollowsPaginated(filter);
        let follows = null;
        do {
            follows = await request.getNext();
            const totalFollowers = await request.getTotalCount();
            this.handler(follows.length === 0, totalFollowers, follows);
        } while (follows === null || follows === void 0 ? void 0 : follows.length);
    }
}

// CONCATENATED MODULE: ./src/downloader/video.ts

async function getVideo(videoId) {
    const url = `https://api.twitch.tv/v5/videos/${videoId}`;
    const headers = ConfigManager.getDefaultKrakenHeaders();
    const response = await fetch(url, { headers: headers });
    if (!response.ok) {
        return { status: response.status, jsonContent: null };
    }
    let content = null;
    content = await response.text();
    if (content) {
        try {
            const jsonContent = JSON.parse(content);
            return { status: response.status, jsonContent };
        }
        catch (err) {
            console.error(`Error when parsing JSON response: ${content}`);
        }
    }
    return { status: response.status, text: content };
}

// CONCATENATED MODULE: ./src/downloader/user.ts

async function getUserByName(username) {
    var _a;
    const url = `https://api.twitch.tv/v5/users?login=${username}`;
    const headers = ConfigManager.getDefaultKrakenHeaders();
    const response = await fetch(url, { headers: headers });
    if (!response.ok) {
        return { status: response.status, jsonContent: null };
    }
    const content = await response.text();
    if (content) {
        try {
            const jsonResponse = JSON.parse(content);
            const jsonContent = (_a = jsonResponse.users) === null || _a === void 0 ? void 0 : _a[0];
            return { status: response.status, jsonContent };
        }
        catch (err) {
            console.error(`Error when parsing JSON response: ${content}`);
        }
    }
    return { status: response.status, text: content };
}

// CONCATENATED MODULE: ./src/api_client.ts






// Key in session storage to store access token
const accessTokenKey = "twitch_chat_analyzer_access_token";
class api_client_TwitchApiClient {
    constructor(accessToken) {
        if (!accessToken) {
            accessToken = sessionStorage.getItem(accessTokenKey);
        }
        if (!accessToken) {
            throw new Error("Access Token cannot be found.");
        }
        const clientId = ConfigManager.getClientId();
        this.innerClient = lib_default.a.withCredentials(clientId, accessToken);
    }
    getChatDownloader(handler) {
        const downloader = new chat_downloader_ChatDownloader(handler);
        return downloader;
    }
    getFollowersDownloader(handler) {
        const downloader = new FollowerListDownloader(this.innerClient, handler);
        return downloader;
    }
    static async getUserByName(username) {
        var _a;
        const response = await getUserByName(username);
        return (_a = response.jsonContent) !== null && _a !== void 0 ? _a : null;
    }
    static async getVideo(videoId) {
        var _a;
        const response = await getVideo(videoId);
        return (_a = response.jsonContent) !== null && _a !== void 0 ? _a : null;
    }
    async getLoggedInUser() {
        if (this.currentUser) {
            return this.currentUser;
        }
        const user = await this.innerClient.kraken.users.getMe();
        this.currentUser = user;
        return user;
    }
    async isSubscribedTo(streamerId) {
        const currentUser = await this.getLoggedInUser();
        const subscribed = await currentUser.isSubscribedTo(streamerId);
        return subscribed;
    }
}


/***/ })
/******/ ]);