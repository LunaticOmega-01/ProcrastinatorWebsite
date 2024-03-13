let phrases = [
    "call your mom to ask how she's doing", 
    "go through your old pictures on social media", 
    "deconstruct the lyrics of your favorite rap song", 
    "read the latest discussions on your favorite subreddits", 
    "calculate your future salary at Facebook", 
    "think of smart responses to an argument you had last year"
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector(".button");
  let phrase = document.querySelector(".phrase");
  let advice = document.querySelector(".advice");
  let image = document.querySelector(".image");
  
  phrase.textContent = getRandomElement(phrases);
  