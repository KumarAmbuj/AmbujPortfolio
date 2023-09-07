console.log("hello");
let s = "KUMAR AMBUJ '\n' I am a passsionate developer.";
console.log(s);
function fun() {
  let text = document.getElementById("text");
  text.textContent = "";
  let ns = "";
  let i = -1;
  let flag = true;
  let id = setInterval(() => {
    if (flag) {
      i++;
      ns = s.slice(0, i + 1);
      text.textContent = ns;
    } else {
      i--;
      ns = s.slice(0, i + 1);
      text.textContent = ns;
    }

    if (i == s.length - 1) {
      setTimeout(() => {
        flag = false;
      }, 300);
    }
    if (i == -1) {
      setTimeout(() => {
        flag = true;
      }, 300);
    }
  }, 200);
}
