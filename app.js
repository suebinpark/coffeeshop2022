function handleWindowOnline() {
  alert("Wow! You are now reconnected to the network. (smiling 수빈 ^^)");
}
function handleWindowOffline() {
  alert("The network connection has been lost ... (crying 수빈 ㅠㅠ)");
}
function handleWindowCopy() {
  alert("코피는 안 돼요. 🩸 Copyright©2022 by Suebin.");
}

window.addEventListener("online", handleWindowOnline);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("copy", handleWindowCopy);

//시계
function showClock() {
  let today = new Date();
  const divClock = document.getElementById("divClock");
  let time = "지금은 ";
  if (today.getHours() > 12) {
    time += "오후 ";
    time += today.getHours() - 12 + "시 ";
  } else {
    time += "오전 ";
    time += today.getHours() + "시 ";
  }
  time += today.getMinutes() + "분 ";
  time +=
    today.getSeconds() +
    "초입니다. 우리의 시간은 절대적인 것 같지만 실은 상대적입니다. 여기 이 커피숍의 시간과 당신이 서 있는(앉아 있거나 누워 있거나 혹은 물구나무 선) 곳의 시간은 다르게 흐를 겁니다. 당신은 몇 시에 있나요?";

  divClock.innerText = time;
  if (today.getMinutes() > 58) {
    divClock.style.color = "red";
  }
  setTimeout(showClock, 1000);
}

var timeleft = 10;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
  }
  let timeleftText = "✱❇︎✱ 이 박스는 " + timeleft + "초 뒤 사라집니다 ✱❇︎✱";
  leftClock.innerText = timeleftText;
  document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
}, 1000);

function AddMenu(el, dl) {
  if (el.value.trim() != "") {
    var opSelected = dl.querySelector(`[value="${el.value}"]`);
    var option = document.createElement("option");
    option.value = opSelected.value;
    option.text = opSelected.getAttribute("value");
    document.getElementById("Menu").appendChild(option);
  }
}
