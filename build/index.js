"use strict";

const cheerio = require("cheerio")
    , request = require("tinyreq")
    , ucfirst = require("ucfirst")
    , writeJson = require("w-json")
    ;

const result = {};

request("https://en.wiktionary.org/wiki/I_love_you#Translations", (err, res) => {
    if (err) { return console.error("Failed", err); }
    let $ = cheerio.load(res)
        // TODO I guess we shouldn't limit to these. <3
        //      Contributions are welcome!
      , $items = $("#Translations-affirmation_of_romantic_feeling .NavContent > table > tr > td li")
      ;

    for (let i = 0, $c = null; i < $items.length; ++i) {
        $c = $items.eq(i);
        let text = $c.text()
          , splits = text.split(":")
          , lang = splits[0].trim().toLowerCase()
          , value = splits[1].trim()
          ;

        value = value.replace(/ ?\([a-zôčšḥíām̐ẏāēśōɣəʔɬɣuɬĕăıōþq̇šíéáūĩēāçüīğıçӧǭöñŋṭū̃âú'k̄žṟṉáïŏ\,ʹ ]+\)/gi, "");
        value = ucfirst(value);

        switch (lang) {
            case "amharic":
                value = {
                    to_man: "እወድሻለሁ"
                  , to_woman: "እወድሃለሁ"
                };
                break;
            case "ancient greek":
            case "greek":
                // Well, here it'is complicated. Again, contributions are welcome. :D
                value = "Σ'αγαπώ";
                lang = "greek";
                break;
            case "low german":
                value = "Ik leev di";
                break;
            case "arabic":
                value = {
                    // TODO Arabic letters?
                    to_man: "Ana Behibak"
                  , to_woman: "Ana Behibek"
                };
            case "marathi":
                value = {
                    to_man: "मे तुझशि प्रेम कर्तो"
                  , to_woman: "मझे तुश्या वर प्रेम आहे"
                };
                break;
            case "armenian":
                value = "Ես քեզ սիրում եմ";
                break;
            case "mari":
                value = "мый тыйым йӧратем";
                break;
            case "assamese":
                value = " মই তোমাক ভাল পাওঁ";
                break;
            case "basque":
                value = "Maite haut";
                break;
            case "belarusian":
                value = "я цябе́ каха́ю";
                break;
            case "bhojpuri":
                value = "ham tahara se pyar karila";
                break;
            case "burmese":
                value = {
                    by_man: "ခင်ဗျားချစ်တယ် ‎"
                  , by_woman: "ရှင်ကိုချစ်တယ် ‎"
                };
                break;
            case "hindi":
                value = {
                    by_man: "मैं तुमसे प्यार करता"
                  , by_woman: "मैं तुमसे प्यार करती हूँ"
                };
                break;
            case "hebrew":
                value = {
                    to_man: "אני אוהבת אותך ‎"
                  , to_woman: "אני אוהב אותך"
                };
                break;
            case "kabyle":
                value = {
                    to_man: "Hamlaγk"
                  , to_woman: "Hamlaγkem"
                };
                break;
            case "checken":
                value = {
                    to_man: "суна хьо еза"
                  , to_woman: "суна хьо веза"
                };
                break;
            case "corsican":
                value = {
                    to_man: "ti tengu caru"
                  , to_woman: "ti tengu cara"
                };
                break;
            case "thai":
                value = {
                    to_man: "ฉันรักคุณ"
                  , to_woman: "ผมรักคุณ"
                };
                break;
            case "vietnamese":
                value = {
                    to_man: "em yêu anh"
                  , to_woman: "tôi yêu em"
                };
                break;
            case "khmer":
                value = {
                    to_man: "អូនស្រឡាញ់បង ‎"
                  , by_woman: "បងស្រឡាញ់អូន ‎"
                };
                break;
            case "kurdish":
                value = "Te dievînim";
                break;
            case "chinese":
                value = "我愛你";
                break;
            case "punjabi":
                value = {
                    by_man: "ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ"
                  , by_woman: "ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦੀ ਹਾਂ "
                };
                break;

        }

        if (typeof value === "string" && ~value.indexOf(",")) {
            value = value.substring(0, value.indexOf(","));
        }
        if (typeof value === "string") {
            value = value.trim();
        } else {
            value.to_man && (value.to_man = value.to_man.trim());
            value.to_woman && (value.to_woman = value.to_woman.trim());
            value.by_man && (value.by_man = value.by_man.trim());
            value.by_woman && (value.by_woman = value.by_woman.trim());
        }

        result[lang] = value;
    }

    result.english = "I love you";
    result.egyptian = "mrỉ˶ỉ˶ṯn";
    writeJson(__dirname + "/../lib/love-you.json", result);
});
