let Quotes = [
  {
    content:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    By: "Albert Einstein",
  },
  {
    content: "“Be yourself; everyone else is already taken.”",
    By: "Oscar Wilde",
  },
  {
    content:
      "“A friend is someone who knows all about you and still loves you.”",
    By: "Elbert Hubbard",
  },
  {
    content:
      "“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”",
    By: "H. Jackson Brown Jr., P.S. I Love You",
  },
  {
    content:
      "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    By: "Albert Einstein",
  },
  {
    content:
      "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
    By: "Mark Twain",
  },
];

let quoteVal = document.querySelector("#quote");
let quoteBy = document.querySelector("#By");
let QuoteNum, prevNum;

function getQuote() {
  QuoteNum = parseInt(Math.random() * 6);
  /*Handling the Quote from being repeated by the prevNum which indicates the number of index of the last quote*/

  /*  if two numbers are equal i will always dec the QuoteNum by 1 except if the QuoteNum=0 then i must increase it by 1 as if the quoteNum always dec in this case it would be -1*/
  if (QuoteNum == prevNum) {
    if (QuoteNum == 0) {
      QuoteNum++;
    } else {
      QuoteNum--;
    }
  }
  quoteVal.textContent = Quotes[QuoteNum].content;
  quoteBy.textContent = Quotes[QuoteNum].By;
  prevNum = QuoteNum;
}
