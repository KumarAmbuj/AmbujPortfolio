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

printName();

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
upAndDown();

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
printAboutMeText();
