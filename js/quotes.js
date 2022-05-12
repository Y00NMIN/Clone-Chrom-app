const quotes = [
  {
    quote: "게으른 자여 개미에게 가서 그가 하는 것을 보고 지혜를 얻으라",
    author: "Proverbs 6:6",
  },
  {
    quote: "게으른 자여 네가 어느 때까지 누워 있겠느냐 네가 어느 때에 잠이 깨어 일어나겠느냐",
    author: "Proverbs 6:9",
  },
  {
    quote:
      "게으른 자는 그 부리는 사람에게 마치 이에 식초 같고 눈에 연기 같으니라",
    author: "Proverbs 10:26",
  },
  {
    quote: "부지런한 자의 손은 사람을 다스리게 되어도 게으른 자는 부림을 받느니라",
    author: "Proverbs 12:24",
  },
  {
    quote: "게으른 자는 그 잡을 것도 사냥하지 아니하나니 사람의 부귀는 부지런한 것이니라",
    author: "Proverbs 12:27",
  },
  {
    quote: "게으른 자는 마음으로 원하여도 얻지 못하나 부지런한 자의 마음은 풍족함을 얻느니라.",
    author: "Proverbs 13:4",
  },
  {
    quote: "게으른 자의 길은 가시 울타리 같으나 정직한 자의 길은 대로니라.",
    author: "Proverbs 15:19",
  },
  {
    quote: "게으른 자는 자기의 손을 그릇에 넣고서도 입으로 올리기를 괴로워하느니라.",
    author: "Proverbs 19:24",
  },
  {
    quote: "게으른 자는 가을에 밭 갈지 아니하나니 그러므로 거둘 때에는 구걸할지라도 얻지 못하리라.",
    author: "Proverbs 20:4",
  },
  {
    quote: "게으른 자의 욕망이 자기를 죽이나니 이는 자기의 손으로 일하기를 싫어함이니라.",
    author: "Proverbs 21:25",
  },
];

const quote = document.querySelector(".quote div:first-child");
const author = document.querySelector(".quote div:last-child");

const toDayQuote= quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDayQuote.quote;
author.innerText = toDayQuote.author;
