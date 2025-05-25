const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle menu
hamburger.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevents immediate close when clicking hamburger
  navLinks.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});
window.addEventListener("DOMContentLoaded", () => {
  const features = document.querySelectorAll(".feature");
  features.forEach((feature, index) => {
    setTimeout(() => {
      feature.classList.add("show");
    }, index * 300); // delay each by 300ms
  });
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        // Add staggered delay based on index
        const card = entry.target;
        const index = [...document.querySelectorAll('.pizza-card')].indexOf(card);
        setTimeout(() => {
          card.classList.add('show');
          card.classList.remove('hidden');
        }, index * 200);  // 200ms delay between each card
        
        observer.unobserve(card);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.pizza-card').forEach(card => {
    observer.observe(card);
  });

  document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, observerOptions);

  document.querySelectorAll(".animate-on-scroll").forEach(section => {
    observer.observe(section);
  });
});
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetID = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetID);

    if (target) {
      // Remove animation class
      target.classList.remove("visible");

      // Optional offset if you have a fixed header
      const yOffset = -70;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

      // Scroll smoothly
      window.scrollTo({ top: y, behavior: "smooth" });

      // Delay re-adding animation to allow scroll to complete
      setTimeout(() => {
        target.classList.add("visible");
      }, 500); // adjust delay if needed
    }
  });
});
