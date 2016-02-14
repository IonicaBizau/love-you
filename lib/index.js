"use strict";

const loveObj = require("./love-you")
    , iterateObject = require("iterate-object")
    , list = []
    , deffy = require("deffy")
    , Err = require("err")
    ;

let add = value => {
    if (typeof value === "string") {
        list.push(value);
    } else {
        iterateObject(value, add);
    }
};

add(loveObj);

let loveYou = module.exports = {};
loveYou.list = list;
loveYou.i18n = loveObj;

/**
 * random
 * Returns *I love you* in a random language.
 *
 * @name random
 * @function
 * @return {String} *I love you* in a random language.
 */
loveYou.random = function random () {
    return list[Math.floor(Math.random() * list.length)];
};

/**
 * say
 * Returns *I love you* translation based on who says it and in what language.
 *
 * @name say
 * @function
 * @param {String} lang The language (lowercase). If not provided, a random one will be used.
 * @param {Boolean} byMan A flag representing if a man tells these magic words to a woman (default: `true`).
 * @return {String} *I love you* in the specified language.
 */
loveYou.say = function say (lang, byMan) {
    byMan = deffy(byMan, true)
    let val = loveObj[lang];
    if (!lang) {
        return this
    }
    if (!val) {
        throw new Err(`There is no translation for this language: ${lang}.`, "NO_TRANSLATION");
    }
    if (typeof val === "string") {
        return val;
    }
    if (byMan) {
        return val.by_man || val.to_woman;
    }
};
