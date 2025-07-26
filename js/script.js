document.addEventListener("DOMContentLoaded", function () {
  function revealTimelineItems() {
    let items = document.querySelectorAll(".timeline-item-modern");
    let triggerBottom = window.innerHeight * 0.85;

    items.forEach((item) => {
      let itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerBottom) {
        item.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealTimelineItems);
  revealTimelineItems();
});

document.addEventListener("DOMContentLoaded", function () {
  const about = document.querySelectorAll("#about");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const combinedSections = [...about, ...sections];

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  combinedSections.forEach(section => {
    observer.observe(section);
  });
});

const typingText = document.querySelector('.typing-text');
const cursor = document.querySelector('.cursor');
const texts = ["a Developer.", "a Designer."];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[index];

  if (!isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 2000);
    } else {
      setTimeout(type, 100);
    }
  } else {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, 50);
    }
  }
}

type();

const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');
const overlayInfo = document.getElementById('overlay-info');
const imageElement = document.getElementById('dynamic-image');
const experienceTitle = document.getElementById('experience-title');
const timelineHeaders = document.getElementsByClassName('timeline-content-header');

document.querySelectorAll('.timeline-item-modern').forEach(item => {
  item.addEventListener('click', () => {
    const info = item.querySelector('.additional-info').innerHTML;
    const h4Content = item.querySelector('.timeline-content-modern h4').textContent;
    var imageUrl = "";
    switch (h4Content) {
      case "Senior Software Engineer": {
        imageUrl = "./assets/senior.svg";
        break;
      }
      case "Software Engineer": {
        imageUrl = "./assets/software-eng.svg";
        break;
      }
      case "Associate Software Engineer": {
        imageUrl = "./assets/associate.svg";
        break;
      }
      case "Junior Developer": {
        imageUrl = "./assets/junior.svg";
        break;
      }
      default: {
        console.log("Invalid Response");
      }
    }
    overlayInfo.innerHTML = info;
    overlay.style.display = 'flex';
    setTimeout(() => {
      overlay.classList.add('show');
      imageElement.setAttribute("src", imageUrl);
    }, 10);

    setTimeout(() => {
      const imageElement = document.getElementById("dynamic-image");
      imageElement.classList.toggle("circle-img-animation");
    }, 5000);

  });
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('show');
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 300);
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    overlay.classList.remove('show');
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300);
  }
});

function observeSections() {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '80px 0px 0px 0px'
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}

window.addEventListener('load', observeSections);

let isNavbarToggled = false;
document.addEventListener('click', function (event) {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const isClickInsideNavbar = navbarToggler.contains(event.target) || navbarCollapse.contains(event.target);
  const navbar = document.querySelector('.navbar');

  if (!isClickInsideNavbar && navbarCollapse.classList.contains('show')) {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });
    bsCollapse.hide();
    isNavbarToggled = false;
  }

  if (isNavbarToggled) {
    navbar.classList.remove('navbar-white');
    navbar.classList.add('navbar-white-open');
  }
  if (!isNavbarToggled) {
    navbar.classList.remove('navbar-white-open');
    navbar.classList.add('navbar-white');
  }
});


document.querySelector('.navbar-toggler').addEventListener('click', function () {
  isNavbarToggled = !isNavbarToggled;
});

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  const footerSection = document.getElementById('footer-section');
  const aboutBottom = footerSection.getBoundingClientRect().bottom + window.scrollY;
  const scrollPosition = window.scrollY + 56;

  if (scrollPosition > aboutBottom) {
    navbar.classList.add('navbar-white');
    navbar.classList.remove('navbar-transparent');

  } else {
    navbar.classList.add('navbar-transparent');
    navbar.classList.remove('navbar-white');
  }
});


document.querySelectorAll('.tech-icon').forEach(icon => {
  icon.addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.2) rotate(5deg)';
    this.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.3)';
  });

  icon.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1) rotate(0deg)';
    this.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.1)';
  });
});

document.querySelectorAll('.tech-icon').forEach(icon => {
  icon.addEventListener('click', function () {

    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(16, 185, 129, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.width = '100px';
    ripple.style.height = '100px';
    ripple.style.marginLeft = '-50px';
    ripple.style.marginTop = '-50px';
    ripple.style.pointerEvents = 'none';

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

  });
});

const style = document.createElement('style');
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);

function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDelay = Math.random() * 15 + 's';
  particle.style.animationDuration = (Math.random() * 10 + 10) + 's';

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 25000);
}

setInterval(createParticle, 2000);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function () {
  const backToTop = document.querySelector('.back-to-top');
  if (window.pageYOffset > 300) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});


let loadingPercentage = 0;
let contentLoaded = false;
let resourcesLoaded = false;
let minTimeElapsed = false;

const loadingScreen = document.getElementById('loadingScreen');
const mainContent = document.getElementById('mainContent');
const percentageDisplay = document.getElementById('loadingPercentage');
const loadingBar = document.getElementById('loadingBar');

const updateProgress = (target, speed = 5) => {
  const progressInterval = setInterval(() => {
    if (loadingPercentage < target) {
      loadingPercentage += Math.random() * speed + 1;
      loadingPercentage = Math.min(loadingPercentage, target);
      percentageDisplay.textContent = Math.floor(loadingPercentage) + '%';
      loadingBar.style.width = Math.floor(loadingPercentage) + '%';
    } else {
      clearInterval(progressInterval);
      checkIfReady();
    }
  }, 100);
};

const checkIfReady = () => {
  if (contentLoaded && resourcesLoaded && minTimeElapsed && loadingPercentage >= 100) {
    hideLoadingScreen();
  }
};

const hideLoadingScreen = () => {
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    mainContent.classList.add('show');
  }, 300);
};

updateProgress(30, 3);

document.addEventListener('DOMContentLoaded', () => {
  contentLoaded = true;
  updateProgress(60, 4);
  console.log('DOM content loaded');
});

window.addEventListener('load', () => {
  resourcesLoaded = true;
  updateProgress(90, 2);
  console.log('All resources loaded');

  setTimeout(() => {
    updateProgress(100, 1);
  }, 200);
})

setTimeout(() => {
  minTimeElapsed = true;
  console.log('Minimum time elapsed');
  checkIfReady();
}, 2500);

setTimeout(() => {
  if (!loadingScreen.classList.contains('hidden')) {
    console.log('Fallback: Force hiding loading screen');
    loadingPercentage = 100;
    percentageDisplay.textContent = '100%';
    loadingBar.style.width = '100%';
    contentLoaded = true;
    resourcesLoaded = true;
    minTimeElapsed = true;
    hideLoadingScreen();
  }
}, 6000);