let imgList = [
    "./images/photo1.jpg",
    "./images/photo2.jpeg",
    "./images/photo3.jpg",
    "./images/photo4.jpg",
    "./images/photo5.jpg",
  ];
  
  function clickPreviousButton() {
    let imgElem = document.getElementById("img-elem");
    let nameImg = "./images" + imgElem.src.split("images")[1];
    let imgIndex = imgList.indexOf(nameImg);
    if (imgIndex > 0) {
      imgElem.src = imgList[imgIndex - 1];
    } else {
      imgElem.src = imgList[imgList.length - 1];
    }
  }
  
  function clickNextButton() {
    let imgElem = document.getElementById("img-elem");
    let nameImg = "./images" + imgElem.src.split("images")[1];
    let imgIndex = imgList.indexOf(nameImg);
    if (imgIndex + 1 < imgList.length) {
      imgElem.src = imgList[imgIndex + 1];
    } else {
      imgElem.src = imgList[0];
    }
  }

//вариант для двух фотографий
/*function clickPreviousButton() {
    let imgElem = document.getElementById("img-elem");
    imgElem.src = "./images/photo1.jpg";
  }
  
  function clickNextButton() {
    let imgElem = document.getElementById("img-elem");
    imgElem.src = "./images/photo2.jpeg";
  }
    */