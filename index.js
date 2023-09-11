function printName() {
  let name = "KUMAR AMBUJ";
  let nameText = document.getElementById("homePageName");
  nameText.textContent = "";

  let i = -1;
  let flag = true;
  let id = setInterval(() => {
    if (flag) {
      i++;
      let ns = name.slice(0, i + 1);
      nameText.textContent = ns;
    } else {
      i--;
      let ns = name.slice(0, i + 1);
      nameText.textContent = ns;
    }

    if (i == name.length - 1) {
      setTimeout(() => {
        flag = false;
      }, 1000);
    }
    if (i == -1) {
      setTimeout(() => {
        flag = true;
      }, 1000);
    }
  }, 200);

  let webDeveloperName = "WEB DEVELOPER";
  let webDeveloperText = document.getElementById("homePageWebDeveloper");
  webDeveloperText.textContent = "";
  let j = -1;
  let flag2 = true;
  setInterval(() => {
    if (flag2) {
      j++;
      let ns = webDeveloperName.slice(0, j + 1);
      webDeveloperText.textContent = ns;
    } else {
      j--;
      let ns = webDeveloperName.slice(0, j + 1);
      webDeveloperText.textContent = ns;
    }

    if (j == webDeveloperName.length - 1) {
      setTimeout(() => {
        flag2 = false;
      }, 250);
    } else if (j == -1) {
      setTimeout(() => {
        flag2 = true;
      }, 250);
    }
  }, 200);
}

//printName();

//up and down

function upAndDown() {
  //left corner box
  let flag1 = true;
  let i = 1;
  let fullStackBox = document.getElementById("homePageChild11");
  setInterval(() => {
    if (flag1 == true) {
      i++;
      fullStackBox.style.top = i + "%";
    } else {
      i--;
      fullStackBox.style.top = i + "%";
    }

    if (i > 33) {
      setTimeout(() => {
        flag1 = false;
      });
    } else if (i < 2) {
      setTimeout(() => {
        flag1 = true;
      });
    }
  }, 100);

  // bottom left corner
  let flag2 = true;
  let i1 = 1;
  let frontEndBox = document.getElementById("homePageChild12");
  setInterval(() => {
    if (flag2 == true) {
      i1++;
      frontEndBox.style.bottom = i1 + "%";
    } else {
      i1--;
      frontEndBox.style.bottom = i1 + "%";
    }

    if (i1 > 33) {
      setTimeout(() => {
        flag2 = false;
      });
    } else if (i1 < 2) {
      setTimeout(() => {
        flag2 = true;
      });
    }
  }, 100);

  //right top corner

  let flag3 = true;
  let i3 = 1;
  let backEndBox = document.getElementById("homePageChild31");

  setInterval(() => {
    if (flag3 == true) {
      i3++;
      backEndBox.style.top = i3 + "%";
    } else {
      i3--;
      backEndBox.style.top = i3 + "%";
    }

    if (i3 > 33) {
      setTimeout(() => {
        flag3 = false;
      }, 100);
    } else if (i3 < 2) {
      setTimeout(() => {
        flag3 = true;
      }, 100);
    }
  }, 100);

  // bottom right corener
  let flag4 = true;
  let i4 = 1;
  let softwareEngineer = document.getElementById("homePageChild32");
  setInterval(() => {
    if (flag4 == true) {
      i4++;
      softwareEngineer.style.bottom = i4 + "%";
    } else {
      i4--;
      softwareEngineer.style.bottom = i4 + "%";
    }

    if (i4 > 33) {
      setTimeout(() => {
        flag4 = false;
      }, 100);
    } else if (i4 < 2) {
      setTimeout(() => {
        flag4 = true;
      }, 100);
    }
  }, 100);
}
//upAndDown();

// about me text printing

function printAboutMeText() {
  let aboutMe = ` Hi I am KUMAR AMBUJ, a Computer Science graduate with a B.Tech
  degree. I am a passionate developer known for my strong coding
  skills. I thrive on solving complex problems and continuously
  improving my technical abilities. Collaborative and driven, I
  aspire to excel in the dynamic world of technology and software
  development. I am always eager to learn and contribute. I am
  committed to pushing the boundaries of what is possible in the
  world of technology, and I am excited to be part of its
  ever-evolving landscape.`;
  let aboutMeText = document.getElementById("aboutMeText");
  aboutMeText.textContent = "";
  let i = -1;
  let flag = true;
  setInterval(() => {
    if (flag) {
      i++;
      let ns = aboutMe.slice(0, i + 1);
      aboutMeText.textContent = ns;
    }

    if (i == aboutMe.length - 1) {
      setTimeout(() => {
        i = -1;
        aboutMeText.textContent = "";
      }, 5000);
    }
  }, 50);
}
//printAboutMeText();

//
//skill middle text

function printMiddleText() {
  let arr = [
    "Front End Skills 90%",
    "Back End Skills 70%",
    "Coding Skills 95%",
    "Tools 70%",
    "Database 70%",
    "Data Structure 95%",
    "Algorithm 95%",
    "Javascript 90%",
    "Python 90%",
    "Core Java 85%",
    "HTML 5 80%",
    "CSS 3 75%",
    "Bootstrap 70%",
    "Oops Concept 70%",
    "Django 65%",
    "MySql 70%",
    "Matplotlib 50%",
    "Git 60%",
    "Github 70%",
    "Numpy 50%",
    "Pandas 50%",
  ];
  let midText = document.getElementById("skillMiddleText");
  midText.textContent = "";
  let i = -1;
  let j = 0;
  let s = arr[j];
  let n = arr.length;
  let id = setInterval(() => {
    i++;
    let ns = s.slice(0, i + 1).toUpperCase();
    midText.textContent = ns;

    if (i == s.length - 1) {
      setTimeout(() => {
        j = (j + 1) % n;
        s = arr[j];
        i = -1;
      }, 600);
    }
  }, 120);
}

//printMiddleText();

function moveSkillIcon(icon) {
  let l = 5;
  let b = 4;
  icon.style.left.left = l + "%";
  icon.style.bottom = b + "%";
  let dir = "up";
  icon.style.display = "block";
  let id = setInterval(() => {
    if (dir === "up") {
      b += 0.2;
      icon.style.bottom = b + "%";
      if (b > 73) {
        dir = "right";
      }
    } else if (dir === "right") {
      l += 0.1;
      icon.style.left = l + "%";
      if (l > 80) {
        dir = "down";
      }
    } else if (dir == "down") {
      b -= 0.2;
      icon.style.bottom = b + "%";
      if (b < 5) {
        dir = "left";
      }
    } else if (dir == "left") {
      l -= 0.1;
      icon.style.left = l + "%";
      if (l < 5) {
        dir = "up";
      }
    }
  }, 19);
}

function skillicons() {
  let arr = [];
  let dsa = document.getElementById("dsa");
  arr.push(dsa);
  let python = document.getElementById("python");
  arr.push(python);

  let java = document.getElementById("java");
  arr.push(java);

  let javascript = document.getElementById("javascript");
  arr.push(javascript);

  let react = document.getElementById("react");
  arr.push(react);

  let html = document.getElementById("html");
  arr.push(html);

  let css = document.getElementById("css");
  arr.push(css);

  let django = document.getElementById("django");
  arr.push(django);

  let mysql = document.getElementById("mysql");
  arr.push(mysql);

  let matplotlib = document.getElementById("matplotlib");
  arr.push(matplotlib);

  let git = document.getElementById("git");
  arr.push(git);

  let github = document.getElementById("github");
  arr.push(github);

  let numpy = document.getElementById("numpy");
  arr.push(numpy);

  let pandas = document.getElementById("pandas");
  arr.push(pandas);

  for (let x of arr) {
    x.style.display = "none";
  }
  let i = -1;
  let id = setInterval(() => {
    i++;
    moveSkillIcon(arr[i]);
    if (i == arr.length - 1) {
      clearInterval(id);
    }
  }, 3000);
}

// calling skills section
//skillicons();

//project

function printProjectMiddleText() {
  let arr = [
    "Snake & Ladder",
    "Portfolio",
    "Annapurna Bazar",
    "Customer Churn Prediction",
    "Image Captioning",
    "Fooding Website",
    "Library Management",
    "Movies App",
  ];
  let midText = document.getElementById("projectMiddleText");
  midText.textContent = "";
  let i = -1;
  let j = 0;
  let s = arr[j];
  let n = arr.length;
  let id = setInterval(() => {
    i++;
    let ns = s.slice(0, i + 1).toUpperCase();
    midText.textContent = ns;

    if (i == s.length - 1) {
      setTimeout(() => {
        j = (j + 1) % n;
        s = arr[j];
        i = -1;
      }, 700);
    }
  }, 200);
}
//printProjectMiddleText();

function moveOneSection(icon, l) {
  let left = -30;
  let id = setInterval(() => {
    left++;
    icon.style.left = left + "%";
    if (left > l) {
      clearInterval(id);
    }
  }, 40);
}

let icon1 = document.getElementById("projectChild11");
let icon2 = document.getElementById("projectChild21");
let icon3 = document.getElementById("projectChild31");
let icon4 = document.getElementById("projectChild41");
let icon5 = document.getElementById("projectChild51");
let icon6 = document.getElementById("projectChild61");

let arr = [icon6, icon5, icon4, icon3, icon2, icon1];
let leftValue = [6, 14, 22, 30, 38, 52];
if (window.innerWidth > 500) {
  for (let x of arr) {
    x.style.display = "none";
  }
}
//moveOneSection(icon);
let count = -1;
document.getElementById("Projects").addEventListener("mouseover", () => {
  count++;

  if (window.innerWidth > 600) {
    for (let i = 0; i < 6; i++) {
      if (count == 0) {
        arr[i].style.display = "flex";
        //moveOneSection(arr[i], leftValue[i]);
        setInterval(() => {
          //moveOneSection(arr[i], leftValue[i]);
        }, 15000);
      }
    }
  }
});

//achievent section
let achieventIcon1 = document.getElementById("achievementChild11");
let achieventIcon2 = document.getElementById("achievementChild21");
let achieventIcon3 = document.getElementById("achievementChild31");
let achieventIcon4 = document.getElementById("achievementChild41");
let array = [achieventIcon1, achieventIcon2, achieventIcon3, achieventIcon4];

//achievent section
function achieventIconMoveRight(icon, l) {
  let left = -50;
  let id = setInterval(() => {
    left++;
    icon.style.left = left + "%";
    if (left > l) {
      clearInterval(id);
    }
  }, 50);
}
function achieventIconMoveLeft(icon, l) {
  let left = 100;
  let id = setInterval(() => {
    left--;
    icon.style.left = left + "%";
    if (left < l) {
      clearInterval(id);
    }
  }, 50);
}
//achieventIconMoveRight(array[0], 30);
//achieventIconMoveLeft(array[1], 20);
//achieventIconMoveRight(array[2], 30);
//achieventIconMoveLeft(array[3], 20);

let count1 = -1;
document.getElementById("Achievements").addEventListener("mouseover", () => {
  count1++;

  if (window.innerWidth > 600) {
    if (count1 == 0) {
      achieventIconMoveRight(array[0], 35);
      achieventIconMoveLeft(array[1], 15);
      achieventIconMoveRight(array[2], 35);
      achieventIconMoveLeft(array[3], 15);

      setInterval(() => {
        achieventIconMoveRight(array[0], 35);
        achieventIconMoveLeft(array[1], 15);
        achieventIconMoveRight(array[2], 35);
        achieventIconMoveLeft(array[3], 15);
      }, 15000);
    }
  } //else {
  //if (count1 == 0) {
  //  achieventIconMoveRight(array[0], 3);
  //  achieventIconMoveLeft(array[1], 2);
  //  achieventIconMoveRight(array[2], 3);
  //  achieventIconMoveLeft(array[3], 2);
  //
  //  setInterval(() => {
  //    achieventIconMoveRight(array[0], 3);
  //    achieventIconMoveLeft(array[1], 2);
  //    achieventIconMoveRight(array[2], 3);
  //    achieventIconMoveLeft(array[3], 2);
  //  }, 9000);
  //}
  //}
});

let leetcodeRank = document.getElementById("leetcodeRank");
let hackerrankPython = document.getElementById("hackerrankPython");

let flag = true;
setInterval(() => {
  if (flag) {
    leetcodeRank.style.visibility = "visible";
    hackerrankPython.style.visibility = "visible";
  } else {
    leetcodeRank.style.visibility = "hidden";
    hackerrankPython.style.visibility = "hidden";
  }
  flag = !flag;
}, 600);

// achievement section
