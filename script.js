let phrases = [
  { text: "call your mom to ask how she's doing", image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-developer/procrastinator/images/moved_social.png" }, 
  { text: "go through your old pictures on social media", image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-developer/procrastinator/images/moved_social.png"}, 
  { text: "deconstruct the lyrics of your favorite rap song", image:"https://practicum-content.s3.us-west-1.amazonaws.com/web-developer/procrastinator/images/moved_social.png"}, 
  { text: "read the latest discussions on your favorite subreddits", image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-developer/procrastinator/images/moved_social.png"}, 
  { text: "calculate your future salary at Facebook", image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-developer/procrastinator/images/moved_social.png"}, 
  { text: "think of smart responses to an argument you had last year", image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-developer/procrastinator/images/moved_social.png"},
  { text: "read the news online and argue with people in the comments section", image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-developer/procrastinator/images/moved_social.png"},
  { text: "listen to sad songs and relive the mistakes of your youth", image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-developer/procrastinator/images/moved_social.png"},
  { text: "watch the trailer for a TV show and then the whole first season for bonus points", image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-developer/procrastinator/images/moved_social.png"},
  { text: "consider taking a Data Science course", image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-developer/procrastinator/images/moved_social.png"}
  
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector(".button");
let phrase = document.querySelector(".phrase");
let advice = document.querySelector(".advice");
let image = document.querySelector(".image");

button.addEventListener("click", function () {
  let randomElement = getRandomElement(phrases);
  phrase.textContent = randomElement.text;
  image.src = randomElement.image;

  if (randomElement.text.length > 40) {
    advice.style.fontSize = "33px";
  } else {
    advice.style.fontSize = "42px";
  }
});

