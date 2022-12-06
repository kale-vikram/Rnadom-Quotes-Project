(function () {
  const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: "Life",
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith",
    },
    {
      quote:
       `आयुष्यात मला भावलेलं एक गुज सांगतो.उपजिविकेसाठीआवश्यक असणाऱ्या विषयाचं शिक्षण जरुर घ्या. 
        पोटापाण्याचा उद्योग जिद्दीनं करा,पण एवढ्यावरच थांबू नका.साहित्य, चित्र, संगीत, नाट्य,शिल्प, 
        खेळ ह्यांतल्या एखाद्या तरी कलेशी मैत्री जमवा.पोटापाण्याचा उद्योग तुम्हाला जगवील,
        पण कलेशी जमलेली मैत्री तुम्ही का जगायचं हे सांगून जाईल`,

       author: "पुरुषोत्तम लक्ष्मण देशपांड",
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh",
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly",
    },
  ];

  const button=document.getElementById('generate-btn')

button.addEventListener('click',function(){
    let random= Math.floor(Math.random()*quotes.length)
    // console.log(random)

document.getElementById('quote').textContent=quotes[random].quote;
document.querySelector('.author').textContent=quotes[random].author;
});

})();



