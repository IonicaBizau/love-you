
# love-you

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/love-you.svg)](https://www.npmjs.com/package/love-you) [![Downloads](https://img.shields.io/npm/dt/love-you.svg)](https://www.npmjs.com/package/love-you)

> "I love you" in different languages.

## :heartbeat: About love :sparkling_heart:
> Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres. And now these three remain: faith, hope and love. But the greatest of these is love. (1 Corinthians 13:4-7, 13—NIV)

-----
> There is but little real, genuine, devoted, pure love. This precious article is very rare. Passion is termed love.
>
> True love is a high and holy principle, altogether different in character from that love which is awakened by impulse, and which suddenly dies when severely tested.
>
> Love is a plant of heavenly growth, and it must be fostered and nourished. Affectionate hearts, truthful, loving words, will make happy families and exert an elevating influence upon all who come within the sphere of their influence.
>
> —Ellen White


Keep this principle in its pure form and you will be happy. :blush:


## :cloud: Installation

```sh
$ npm i --save love-you
```


## :clipboard: Example



```js
const loveYou = require("love-you");

console.log(loveYou.random());
// Мин сағаа хынчам ‎

console.log(loveYou.say("english"));
// I love you

console.log(loveYou.say("punjabi"));
// ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ

// Promise-compatible :)
new Promise(function (answer) {
    answer(loveYou.say("french"));
}).then(function (yay) {
    console.log(yay);
    // Je t'aime
});

console.log(loveYou.list);
// [ 'I suɔ mo',
//   'Ek het jou lief',
//   'Mo dow',
//   ...
//   'Kenkamken',
//   'Mena tanda wena',
//   'I love you' ]

console.log(loveYou.i18n);
// { adangme: 'I suɔ mo',
//   afrikaans: 'Ek het jou lief',
//   ...
//   punjabi:
//    { by_man: 'ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ',
//      by_woman: 'ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦੀ ਹਾਂ' },
//   quechua: 'qanta munani',
//   romanian: 'Te iubesc',
//   ...
//   english: 'I love you' }
```

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


### `random()`
Returns *I love you* in a random language.

#### Return
- **String** *I love you* in a random language.

### `say(lang, byMan)`
Returns *I love you* translation based on who says it and in what language.

#### Params
- **String** `lang`: The language (lowercase). If not provided, a random one will be used.
- **Boolean** `byMan`: A flag representing if a man tells these magic words to a woman (default: `true`).

#### Return
- **String** *I love you* in the specified language.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
