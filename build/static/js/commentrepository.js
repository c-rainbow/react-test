var commentrepository =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "UserRepository", function() { return /* binding */ repository_UserRepository; });
__webpack_require__.d(__webpack_exports__, "EmoteRepository", function() { return /* binding */ repository_EmoteRepository; });
__webpack_require__.d(__webpack_exports__, "CommentRepository", function() { return /* binding */ repository_CommentRepository; });

// CONCATENATED MODULE: ./src/timeutil.ts
function toTimeString(seconds) {
    const hour = Math.floor(seconds / 60);
    seconds = seconds % 60;
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    const hourStr = hour.toString().padStart(2, '0');
    const minuteStr = minutes.toString().padStart(2, '0');
    const secondStr = seconds.toString().padStart(2, '0');
    return `${hourStr}:${minuteStr}:${secondStr}`;
}
function groupCountsByTime(times, timeSize) {
    const counts = [];
    let currentMax = 0;
    for (const time of times) {
        while (currentMax < time) {
            counts.push(0);
            currentMax += timeSize;
        }
        const lastIndex = counts.length - 1;
        counts[lastIndex]++;
    }
    return counts;
}

// CONCATENATED MODULE: ./src/models.ts

class User {
    static parseUser(data) {
        const user = new User();
        user.id = Number(data._id);
        user.username = data.name;
        user.displayName = data.display_name;
        user.createdTime = new Date(data.created_at).getTime() / 1000.0;
        user.type = data.type;
        return user;
    }
    // Display string of the Twitch user. Same format as in official Twitch chat html
    getDisplayString() {
        if (this.displayName.toLowerCase() === this.username.toLowerCase()) {
            return this.displayName;
        }
        return `${this.displayName}(${this.username})`;
    }
}
class Emote {
    static parseEmote(data) {
        if (!data.emoticon) {
            return null;
        }
        const emoteData = data.emoticon;
        const emote = new Emote();
        emote.id = parseInt(emoteData.emoticon_id);
        emote.name = data.text;
        emote.emoteSetId = emoteData.emoticon_set_id;
        return emote;
    }
    getImageUrl() {
        // As of July 2020, this address format is up-to-date
        return `https://static-cdn.jtvnw.net/emoticons/v1/${this.id}/1.0`;
    }
}
class models_Comment {
    toDisplayString() {
        const timeStr = toTimeString(this.relativeTime);
        return `[${timeStr}] (${this.user.displayName}): ${this.rawText}`;
    }
    static parseComment(data) {
        var _a, _b, _c, _d;
        const comment = new models_Comment();
        comment.id = data._id;
        comment.channel = Number(data.channel_id);
        comment.relativeTime = data.content_offset_seconds;
        comment.absoluteTime = new Date(data.created_at).getTime() / 1000.0;
        const message = data.message;
        comment.bits = (_a = message.bits_spent) !== null && _a !== void 0 ? _a : 0;
        comment.rawText = (_b = message.body) !== null && _b !== void 0 ? _b : ""; // Raw text
        comment.fragments = (_c = message.fragments) !== null && _c !== void 0 ? _c : [];
        comment.user = User.parseUser(data.commenter);
        comment.badges = (_d = message.user_badges) !== null && _d !== void 0 ? _d : [];
        comment.userColor = message.user_color;
        // Build emotes and text contents
        comment.emotes = [];
        const textFragments = [];
        const htmlFragments = [];
        comment.contentLength = 0;
        for (let fragmentData of comment.fragments) {
            if (fragmentData.emoticon) { // Emote fragment
                const emote = Emote.parseEmote(fragmentData);
                comment.emotes.push(emote);
                comment.contentLength += 1; // For now, emotes are assumed to have content length 1
                // Should this conversion be done in load time or rendering time?
                htmlFragments.push(`<img src="${emote.getImageUrl()}" />`);
            }
            else { // Text fragment
                const text = fragmentData.text;
                textFragments.push(text.trim());
                comment.contentLength += text.length;
                htmlFragments.push(text);
            }
        }
        // Reduce all spaces between text fragments to just one space, for ease of search and filter
        // TODO: Is this the right way?
        comment.contentText = textFragments.join(" ");
        comment.htmlText = htmlFragments.join("");
        return comment;
    }
}

// CONCATENATED MODULE: ./src/counter.ts
function biggerCountFn(kc1, kc2) {
    if (kc1.count !== kc2.count) {
        // Item with more count comes first
        return kc1.count > kc2.count ? -1 : 1;
    }
    if (kc1.key !== kc2.key) {
        return kc1.key < kc2.key ? -1 : 1;
    }
    return 0;
}
class Counter {
    constructor() {
        this.map = new Map();
    }
    get(key) {
        var _a;
        const value = (_a = this.map.get(key)) !== null && _a !== void 0 ? _a : 0;
        return value;
    }
    // TODO: This can be optimized with priority queue
    // when topCount is significantly smaller than map size
    getTopKeys(topCount = 0) {
        const arr = [];
        for (const [key, count] of this.map) {
            arr.push({ key, count });
        }
        arr.sort(biggerCountFn);
        if (0 < topCount && topCount < arr.length) {
            return arr.slice(0, topCount);
        }
        return arr;
    }
    increment(key) {
        this.change(key, 1);
    }
    change(key, delta) {
        const value = this.get(key);
        this.map.set(key, value + delta);
    }
}

// CONCATENATED MODULE: ./src/repository.ts



class repository_UserRepository {
    constructor() {
        this.userById = new Map();
        this.chatCounter = new Counter();
    }
    addChatter(user) {
        this.userById.set(user.id, user);
        this.chatCounter.increment(user.id);
    }
    getById(id) {
        return this.userById.get(id);
    }
    // Get users with most chats, tie-breaking with user ID
    getTopChatters(topCount = 0) {
        const keysWithCount = this.chatCounter.getTopKeys(topCount);
        return keysWithCount.map((kc) => ({
            user: this.userById.get(kc.key),
            count: kc.count
        }));
    }
    getUserCount() {
        return this.userById.size;
    }
}
class repository_EmoteRepository {
    constructor() {
        this.emoteById = new Map();
        this.emoteByName = new Map();
        this.totalCounter = new Counter();
    }
    getById(id) {
        return this.emoteById.get(id);
    }
    getByName(name) {
        return this.emoteByName.get(name);
    }
    getCount(id) {
        return this.totalCounter.get(id);
    }
    // Get most used {topCount} emotes, tie-breaking with emote ID.
    getTopEmotes(topCount = 0) {
        const keysWithCount = this.totalCounter.getTopKeys(topCount);
        return keysWithCount.map((kc) => ({
            emote: this.emoteById.get(kc.key),
            count: kc.count
        }));
    }
    // Add list of emotes from the same chat
    addChatEmotes(emotes) {
        for (let emote of emotes) {
            this.totalCounter.increment(emote.id);
            const alreadySeen = this.emoteById.has(emote.id);
            if (!alreadySeen) {
                this.emoteById.set(emote.id, emote);
                this.emoteByName.set(emote.name, emote);
            }
        }
    }
}
class repository_CommentRepository {
    constructor(comments) {
        this.userRepository = new repository_UserRepository();
        this.emoteRepository = new repository_EmoteRepository();
        this.commentList = [];
        for (const comment of comments) {
            this.addComment(comment);
        }
        // Just in case the commentList is not sorted by time
        this.commentList.sort(commentCompareFn);
    }
    addComment(comment) {
        this.userRepository.addChatter(comment.user);
        this.emoteRepository.addChatEmotes(comment.emotes);
        this.commentList.push(comment);
    }
    getUserCount() {
        return this.userRepository.getUserCount();
    }
    getCommentCount() {
        return this.commentList.length;
    }
    getTopEmotes(topCount = 0) {
        return this.emoteRepository.getTopEmotes(topCount);
    }
    getTopChatters(topCount = 0) {
        return this.userRepository.getTopChatters(topCount);
    }
    getComments() {
        return this.commentList;
    }
    getTotalBits() {
        return this.commentList.reduce((prev, curr) => prev + curr.bits, 0);
    }
    filter(ft) {
        return this.commentList.filter((comment) => ft.eval(comment));
    }
    // TODO: The current code has a bug that doesn't show empty counts
    // Between the last chat and till the stream ends. To fix this, we need
    // a second parameter (max time)
    getCountsByRelativeTime(timeSize) {
        const times = this.commentList.map((comment) => comment.relativeTime);
        const counts = groupCountsByTime(times, timeSize);
        return counts;
    }
    static fromCommentsData(commentsData) {
        const comments = commentsData.map(models_Comment.parseComment);
        return new repository_CommentRepository(comments);
    }
}
function commentCompareFn(a, b) {
    const aTime = a.relativeTime, bTime = b.relativeTime;
    if (aTime < bTime) {
        return -1;
    }
    if (aTime > bTime) {
        return 1;
    }
    // If two comments are posted at the same time, compare by id for tie-breaking.
    // Very unlikely because the relative times are in miliseconds
    return a.id.localeCompare(b.id);
}


/***/ })
/******/ ]);