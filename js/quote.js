const quotes = [
  {
    quote: "죽음보다 두려운 것은 공복이다",
    author: "개랑맨",
  },
  {
    quote: "난 여전히 배고프다.",
    author: "개랑맨",
  },
  {
    quote: "와 이걸 개랑이 이기네",
    author: "골차를 뒤집는 강원",
  },
  {
    quote: "치킨이 귀했다면 한마리에 100만원은 했을 것",
    author: "개랑맨",
  },
  {
    quote: "형들도 이젠 우승 좀 하자",
    author: "매탄고 우승을 본 개랑쉑",
  },
  {
    quote: "킹상빈!!킹상빈!!!킹상빈!!!",
    author: "정상빈에 빠진 개랑맨",
  },
  {
    quote: "아 퇴근하고 싶다",
    author: "출근하자마 첫 마디",
  },
  {
    quote: "퇴근하고 뭐먹지",
    author: "점심을 먹으며",
  },    {
    quote: "아 5부제",
    author: "회사 주차장 게이트 앞에서",
  },    {
    quote: "... 네 김영범입니다",
    author: "휴가 날 걸려온 전화를 받으며",
  },
];

const quotesIdx = Math.floor(Math.random()*quotes.length);
const quote = document.body.querySelector("#quotes span:first-child");
const author = document.body.querySelector("#quotes span:last-child");

quote.innerText=quotes[quotesIdx].quote;
author.innerText=quotes[quotesIdx].author;
