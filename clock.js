// -90 deg to show 12'o clock position. 0deg will show 3'o clock
const startValue = -90;
// Clock hands
const hour = document.querySelector(".hr");
const minute = document.querySelector(".min");
const sec = document.querySelector(".sec");
// Digital time
const time = document.querySelector("#time");

function getAngle() {
  time.innerHTML =
    new Date().getHours().toString().padStart(2, "0") +
    ":" +
    new Date().getMinutes().toString().padStart(2, "0") +
    ":" +
    new Date().getSeconds().toString().padStart(2, "0");

  // 1 hr === 30 deg
  const hrAngle = (new Date().getHours() % 12) * 30 + startValue;
  // 1 min || 1 sec === 6 deg
  const minAngle = new Date().getMinutes() * 6 + startValue;
  const secAngle = new Date().getSeconds() * 6 + startValue;

  hour.style.transform = `rotate(${hrAngle}deg)`;
  minute.style.transform = `rotate(${minAngle}deg)`;
  sec.style.transform = `rotate(${secAngle}deg)`;
}
// calling function with 1s interval
setInterval(getAngle, 1000);