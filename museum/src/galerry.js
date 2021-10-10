export default randomImg;

const pictureInnerContainer = document.querySelector(
  ".picture-inner-container"
);

let arrImg = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

function randomImg() {
  shuffle(arrImg);
  arrImg.map((e) => {
    const img = `<img src="./assets/galery/galery${e}.jpg" alt="galery1">`;
    
    pictureInnerContainer.innerHTML += img;
  });
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
