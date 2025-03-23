// Mobile Navigation
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  // Toggle Navigation
  nav.classList.toggle("active");

  // Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });

  // Burger Animation
  burger.classList.toggle("toggle");
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Section Visibility Animation
const sections = document.querySelectorAll("section");
const options = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px",
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// Service Cards Animation
const serviceCards = document.querySelectorAll(".service-card");
const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

serviceCards.forEach((card) => {
  cardObserver.observe(card);
});

// Navbar Scroll Effect
const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// Add animation delay to nav links
document.querySelectorAll(".nav-links li").forEach((link, index) => {
  link.style.setProperty("--item-index", index);
});

// Stats Counter Animation
const stats = document.querySelectorAll(".stat-item h3");
const statsOptions = {
  threshold: 1,
  rootMargin: "0px",
};

const startCounting = (el) => {
  const target = parseInt(el.textContent);
  const increment = target / 50;
  let current = 0;

  const updateCount = () => {
    if (current < target) {
      current += increment;
      el.textContent = Math.ceil(current);
      requestAnimationFrame(updateCount);
    } else {
      el.textContent = target;
    }
  };

  updateCount();
};

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounting(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
}, statsOptions);

stats.forEach((stat) => {
  statsObserver.observe(stat);
});

// Form Submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  // Here you would typically send the data to a server
  console.log("Form submitted:", data);

  // Show success message
  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});
