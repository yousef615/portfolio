// change the active list item on click using js
let nav_item = document.querySelectorAll(".nav-item");
let nav_link = document.getElementsByClassName("nav-link");
for (var i = 0; i < nav_link.length; i++) {
  nav_link[i].onclick = function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  };
}

//Add a smooth scrolling effect to the navigation links
document.querySelectorAll(".nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// hide navbar when scroll down and show it when scroll up
let lastScrollTop = 0;
navbar = document.getElementById("nav");
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
  lastScrollTop = scrollTop;
});

//  The Form Validation
document.forms[0].onsubmit = function (e) {
  let nameField = false;
  let emailField = false;
  let messageField = false;
  let chNameField = document.querySelector("[name= 'namee']");
  let chEmailField = document.querySelector("[name= 'email']");
  let chMessageField = document.querySelector("[name= 'message']");
  // check (Your Name) field
  if (chNameField.value !== "") {
    nameField = true;
  } else {
    let NameFieldError = document.querySelector("[name = 'nameError'");
    NameFieldError.innerText = "this field is required";
    chNameField.focus();
  }
  // check (Your Email) field if the email is valid or it's invalid
  let invalidEmail = document.querySelector("[name = 'invalidEmail'");
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(chEmailField.value)) {
    emailValid === true; // Email is valid
  } else {
    invalidEmail.innerText = "Please enter a valid email address.";
    chEmailField.focus();
  }
  // check (Your Message) field
  if (chMessageField.value !== "") {
    messageField = true;
  } else {
    let MessageFieldError = document.querySelector("[name = 'messageError'");
    MessageFieldError.innerText = "this field is required";
    chMessageField.focus();
  }
  if (nameField === false || emailField === false || messageField === false) {
    e.preventDefault();
  }
};
// Slideshow for project1
let gallary = [
  "Images/project1-1.png",
  "Images/project1-2.png",
  "Images/project1-3.png",
];
let j = 0;

function slideIt() {
  document.imagesSlide1.src = gallary[j];
  if (j < gallary.length - 1) {
    j++;
  } else {
    j = 0;
  }
  stopIt = setTimeout("slideIt()", 3000);
}
function pause() {
  clearInterval(stopIt);
  stopIt = null;
}
document.getElementById("startIt").onclick = slideIt;
document.getElementById("hideIt").onclick = pause;

// Slideshow for project-2
let gallary2 = [
  "Images/project2-1.png",
  "Images/project2-2.png",
  "Images/project2-3.png",
];
let s = 0;

function slideIt2() {
  document.imagesSlide2.src = gallary2[s];
  if (s < gallary2.length - 1) {
    s++;
  } else {
    s = 0;
  }
  stopIt2 = setTimeout("slideIt2()", 3000);
}
function pause2() {
  clearInterval(stopIt2);
  stopIt2 = null;
}
document.getElementById("startIt2").onclick = slideIt2;
document.getElementById("hideIt2").onclick = pause2;

// Slideshow for project-3
let gallary3 = [
  "Images/project3-1.png",
  "Images/project3-2.png",
  "Images/project3-3.png",
];
let n = 0;

function slideIt3() {
  document.imagesSlide3.src = gallary3[n];
  if (n < gallary3.length - 1) {
    n++;
  } else {
    n = 0;
  }
  stopIt3 = setTimeout("slideIt3()", 3000);
}
function pause3() {
  clearInterval(stopIt3);
  stopIt3 = null;
}
document.getElementById("startIt3").onclick = slideIt3;
document.getElementById("hideIt3").onclick = pause3;

// Jquery

$(document).ready(function () {
  // scroll to top on load
  $(window).scrollTop(0);

  // login button event
  $(".login").click(function () {
    $(window).scrollTop(3700);
  });

  // Slide nav-button using jquery

  // if the page opened directly in small srcreen
  $(".nav-item").click(function () {
    $(".navbar-nav").slideUp("slow");
    $(".navbar-toggler").mousedown(function () {
      $(".navbar-nav").css("display", "block");
      $(".navbar-collapse").removeClass("show");
    });
  });
  // when screen size changes
  $(window).resize(function () {
    if ($(document).width() < 992) {
      $(".navbar-collapse").removeClass("show");
      $(".nav-item").click(function () {
        $(".navbar-nav").slideUp("slow");
      });
      $(".navbar-toggler").mousedown(function () {
        $(".navbar-nav").css("display", "block");
        $(".navbar-collapse").removeClass("show");
      });
    } else if ($(document).width() > 992) {
      $(".navbar-nav").css("display", "flex");
      // $(".navbar-nav").slideDown("slow");
      $(".nav-item").off("click");
    }
  });
  // });

  // open the slideShow1
  $("#startIt").click(function () {
    $("#slideShow").css("width", "100vw", "height", "100vh");
    $("#hideIt").css("display", "block");
  });
  $("#hideIt").click(function () {
    $("#slideShow").css("width", "0", "height", "0");
    $("#hideIt").css("display", "none");
  });

  // open the slideShow2
  $("#startIt2").click(function () {
    $("#slideShow2").css("width", "100vw", "height", "100vh");
    $("#hideIt2").css("display", "block");
  });
  $("#hideIt2").click(function () {
    $("#slideShow2").css("width", "0", "height", "0");
    $("#hideIt2").css("display", "none");
  });

  // open the slideShow3
  $("#startIt3").click(function () {
    $("#slideShow3").css("width", "100vw", "height", "100vh");
    $("#hideIt3").css("display", "block");
  });
  $("#hideIt3").click(function () {
    $("#slideShow3").css("width", "0", "height", "0");
    $("#hideIt3").css("display", "none");
  });

  // Effect on (read more..) button
  $(".read-more").click(function () {
    $(".read-more").slideToggle("slow");
    $(".more-about-me").slideToggle(1000, function () {
      $(".read-less").slideDown("swing");
    });
  });
  $(".read-less").click(function () {
    $(".more-about-me").slideToggle("slow", function () {
      $(".read-less").slideUp("slow");
      $(".read-more").slideDown("fast");
    });
  });
  // effect on say Hi buttom
  $(".login").on("click", function () {
    $(".login").animate({ height: "toggle", border: "0", padding: "0" }, 2000);
    $(".successfully").animate(
      { top: "50%", padding: "20px", width: "65vw", height: "20vh" },
      4000
    );
    $(".suc_text").animate({ fontSize: "200%" }, 4000),
      $(".successfully").animate(
        { top: "-20%", width: "0", height: "0" },
        2000
      );
    $(".suc_text").animate({ fontSize: "0%" }, 1000),
      $(".login").animate(
        { height: "toggle", border: "0", padding: "6px 12px" },
        2000
      );
  });
});
