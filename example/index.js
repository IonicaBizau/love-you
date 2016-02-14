const loveYou = require("../lib");

console.log(loveYou.random());
// Мин сағаа хынчам ‎

console.log(loveYou.say("english"));
// I love you

console.log(loveYou.say("punjabi"));
// ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ

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
