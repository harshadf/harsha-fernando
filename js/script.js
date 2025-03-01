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

document.addEventListener("DOMContentLoaded", function() {
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
const texts = ["a Developer.", "a Designer.","an Editor." ,"a Videographer/Photographer."];
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
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
}

window.addEventListener('load', observeSections);

document.addEventListener('click', function(event) {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const isClickInsideNavbar = navbarToggler.contains(event.target) || navbarCollapse.contains(event.target);

  if (!isClickInsideNavbar && navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
      });
      bsCollapse.hide();
  }
});

