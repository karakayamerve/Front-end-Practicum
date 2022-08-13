let sName = prompt("Lütfen adınızı giriniz:");
let h2 = document.querySelector("#sName");
h2.innerHTML = `${h2.innerHTML} ${sName}`;
console.log(h2.innerHTML);

const interval = setInterval(function () {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  let day = date.getDay();

  if (day == 1) {
    day = "Pazartesi";
  } else if (day == 2) {
    day = "Salı";
  } else if (day == 3) {
    day = "Çarşamba";
  } else if (day == 4) {
    day = "Perşembe";
  } else if (day == 5) {
    day = "Cuma";
  } else if (day == 6) {
    day = "Cumartesi";
  } else if (day == 7) {
    day = "Pazar";
  }
  document.querySelector("#myClock").innerHTML =
    hour + ":" + minute + ":" + seconds + " " + day;
}, 1000);
