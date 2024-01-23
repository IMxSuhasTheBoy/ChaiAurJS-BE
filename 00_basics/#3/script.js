const heading = document.querySelector(".main-text");
const texts = ["Hi! I'm coding", "Let's dive deeper in JS", "Then Backend"];
let endValue = 0;
let isForwards = true;
let arrayEleIdx = 0;

const id = setInterval(() => {
  heading.textContent = texts[arrayEleIdx].substring(0, endValue);

  if (isForwards) {
    endValue++;
  } else {
    endValue--;
  }

  console.log(endValue);

  if (endValue >= texts[arrayEleIdx].length + 3) {
    console.log(texts[arrayEleIdx]);
    isForwards = false;
  } else if (endValue <= 0) {
    isForwards = true;
    arrayEleIdx++;
  }
  if (arrayEleIdx === texts.length) {
    arrayEleIdx = 0;
  }
}, 100);
