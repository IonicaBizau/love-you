
# love-you

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/love-you.svg)](https://www.npmjs.com/package/love-you) [![Downloads](https://img.shields.io/npm/dt/love-you.svg)](https://www.npmjs.com/package/love-you) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

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


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
