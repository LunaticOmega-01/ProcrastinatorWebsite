let phrases = [
  "call your mom to ask how she's doing", 
  "go through your old pictures on social media", 
  "deconstruct the lyrics of your favorite rap song", 
  "read the latest discussions on your favorite subreddits", 
  "calculate your future salary at Facebook", 
  "think of smart responses to an argument you had last year",
  "read the news online and argue with people in the comments section",
"listen to sad songs and relive the mistakes of your youth",
"watch the trailer for a TV show and then the whole first season for bonus points",
"consider taking a Data Science course"
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector(".button");
let phrase = document.querySelector(".phrase");
let advice = document.querySelector(".advice");
let image = document.querySelector(".image");



button.addEventListener("click",function(){
  phrase.textContent = getRandomElement(phrases);
  if (RandomElement.length==40)
  {
    advice.style.fontSize = "33px";
  }
  else{
    advice.style.fontSize = "42px";
  }
  phrase.textContent = randomElement;
});
