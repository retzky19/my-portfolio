const omoideButton = document.getElementById("omoide");
const favButton = document.getElementById("fav");
const iineButton = document.getElementById("iine");
const icehockeyPhoto = document.getElementById("icehockey");
const birthdayPhoto = document.getElementById("birthday");
const italyPhoto = document.getElementById("italy");
const highPhoto = document.getElementById("high");
const thaiPhoto = document.getElementById("thai");
const favCount = document.getElementById("fav-count");
const iineCount = document.getElementById("iine-count");

const photo = [icehockeyPhoto, birthdayPhoto, italyPhoto, highPhoto, thaiPhoto];
let n = 0;
omoideButton.onclick = function () {
  photo[n].classList.remove("opacity");
  console.log(n);
  n = n + 1;
};

let favcount = 0;
if (localStorage.favcount) {
  favcount = Number(localStorage.favcount);
  favCount.textContent = favcount;
}

favButton.onclick = function () {
  favcount += 1;
  favCount.textContent = favcount;
  localStorage.favcount = favcount;
};

let iinecount = 0;
if (localStorage.iinecount) {
  iinecount = Number(localStorage.iinecount);
  iineCount.textContent = iinecount;
}
iineButton.onclick = function () {
  iinecount += 1;
  iineCount.textContent = iinecount;
  localStorage.iinecount = iinecount;
};
