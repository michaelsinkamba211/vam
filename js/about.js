
const homeElement = document.querySelector(".home");
const h2Element = document.querySelector(".home_content h2");
const onesElement = document.querySelector(".home .ones");
const twosElement = document.querySelector(".home .twos");

// const images = ["../images/home_image.jpg", "../images/home_img.jpg"];

const texts = [
  "",
  ""
];

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  //   homeElement.style.backgroundImage = `url(${images[currentIndex]})`;
  h2Element.innerHTML = texts[currentIndex];

  // Toggle background-color for .ones and .twos
  if (currentIndex === 0) {
    onesElement.style.backgroundColor = "var(--primary-color)";
    twosElement.style.backgroundColor = "";
  } else {
    onesElement.style.backgroundColor = "";
    twosElement.style.backgroundColor = "var(--primary-color)";
  }
}, 10000);

// changing the background color of the nav-setion when home section is done

const homeSection = document.querySelector(".home"); //grab the home section
const navSection = document.querySelector(".nav-section"); // grab the nav bar
const navLinks = document.querySelectorAll(".nav-links li a"); //grab the navLinks
const navliks = document.querySelectorAll(
  "header nav .nav-links .tablet-hide li a"
);
const companyName = document.querySelector("header nav h1"); //grab the main title

window.addEventListener("scroll", () => {
  if (homeSection.getBoundingClientRect().bottom <= 30) {
    navSection.style.backgroundColor = "#f8f8f8";
    navLinks.forEach((link) => (link.style.color = "#212529"));
    companyName.style.color = "#707070";
  } else {
    navSection.style.backgroundColor = "transparent";
    navLinks.forEach((link) => (link.style.color = "rgb(226, 18, 18)"));

    companyName.style.color = "rgb(226, 18, 18)";
    navLinks.forEach((link) => (link.style.fontWeight = "700"));
  }
});

// numbers counting
document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.numbers');
    const speed = 200; // Adjust the speed of counting
    const animationDuration = 3; // Adjust the animation duration in milliseconds
  
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
  
        const inc = target / (speed / (animationDuration / speed));
  
        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  });
  
  // counting for the dotation part





//  adding the border bottom of the current page

const links = document.querySelectorAll(".nav-section ul a");
const sections = document.querySelectorAll("section");
const headerHeight = 60; // Adjust this value according to your header height

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + headerHeight; // Add the header height to the scroll position

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      links.forEach((link, i) => {
        // Check if the width is 815px or above
        if ((link.offsetWidth = 815)) {
          link.style.borderBottom = "2px solid transparent";
          link.style.backgroundColor = "transparent"; // Reset background color

          link.addEventListener("mouseover", () => {
            // Reset styles for all links
            links.forEach((resetLink) => {
              resetLink.style.borderBottom = "2px solid transparent";
              resetLink.style.backgroundColor = "transparent";
            });

            // Apply styles for the hovered link
            link.style.borderBottom = "2px solid transparent";
            link.style.backgroundColor = "#insert";

            // Update the index to the one you're hovering over
            index = i;
          });
        } else {
          // Reset styles for links with width below 815px
          link.style.borderBottom = "none";
          link.style.backgroundColor = "transparent";
        }
      });

      // Apply styles for the currently active link
      links[index].style.borderBottom = "2px solid rgb(226, 18, 18)";
      links[index].style.color = "rgb(226, 18, 18)";
      links[index].style.padding = "10px 15px";
      links[index].style.backgroundColor = "#insert";
    }
  });
});

// for nav bar clicking off and on
const menuInput = document.getElementById("check"); // input
const mainUl = document.querySelector(".nav-links"); // nav holder
const navLink = mainUl.querySelectorAll(".nav-links li a");

// Function to close the menu
function closeMenu() {
  menuInput.checked = false; // Uncheck the .menu input
}

// Function to handle the menu behavior for larger screens
function handleLargeScreens() {
  if (window.innerWidth <= 815) {
    mainUl.style.display = "flex"; // Show the main-ul
  }
}

// Initially handle the menu behavior for larger screens
handleLargeScreens();

// Add event listeners to the navigation links to close the menu
navLink.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// smooth scrollinf

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

