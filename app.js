var brushBtn = document.querySelector("#set");
var color = document.querySelector(".colorName");
var brushBox = document.querySelector("#brush-box");

var changebrushBox = function (event) {
  event.preventDefault();
  brushBox.style.backgroundColor = color.value;
};

brushBtn.addEventListener("click", changebrushBox);

var numOfPixels = 2050;
var canvas = document.querySelector("#canvas");

for (var i = 0; i < 2050; i++) {
  var elem = document.createElement("div");
  elem.classList.add("canvas");
  canvas.appendChild(elem);
}

var pixels = document.querySelector("#canvas");

var changePixelColor = function (event) {
  if (event.target.classList.contains("canvas")) {
    event.target.style.backgroundColor = color.value;
  }
};

pixels.addEventListener("click", changePixelColor);

var movieBtn = document.querySelector("#movie");
var movieName = document.querySelector(".movieName");

movieBtn.addEventListener("click", (event) => {
  event.preventDefault();

  axios
    .get(`https://omdbapi.com/?t=${movieName.value}&apikey=8f66dc3c`)
    .then((res) => {
      canvas.style.backgroundImage = `url(${res.data.Poster})`;
    });
});
