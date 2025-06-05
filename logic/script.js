let currentScroll = 0;
let targetScroll = 0;
let isScrolling = false;

function smoothScroll() {
  if (!isScrolling) return;
  currentScroll += (targetScroll - currentScroll) * 0.15; // Perbedaan dikali easing
  window.scrollTo(0, currentScroll);
  if (Math.abs(targetScroll - currentScroll) > 0.4) {
    requestAnimationFrame(smoothScroll);
  } else {
    isScrolling = false;
  }
}

window.addEventListener("wheel", (e) => {
  e.preventDefault();
  const scrollAmount = e.deltaY;
  targetScroll += scrollAmount;
  targetScroll = Math.max(0, Math.min(document.body.scrollHeight - window.innerHeight, targetScroll));
  if (!isScrolling) {
    isScrolling = true;
    smoothScroll();
  }
}, { passive: false });


document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const targetClasses = [
      "hidden-before-animate-1",
      "fadeinright-project",
      "fadeinright-experience",
      "fadeinright-achievement",
      "fadeinright-contact",
      "fadeinleft-rafif",
      "fadeinleft-sava",
      "fadeinleft-adyvka"
    ];

    document.querySelectorAll("*").forEach(el => {
      targetClasses.forEach(cls => {
        if (el.classList.contains(cls)) {
          el.classList.remove(cls);
        }
      });
    });
  }, 2500); // waktu delay animasi
});

  
new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2 
    },
    1024: {
      slidesPerView: 3
    },
  }
});

gsap.registerPlugin(DrawSVGPlugin);

  const headline = document.querySelector('.text-draw__p');
  const path = document.querySelector('.text-draw__box-svg path');

  // Set awal ke 0 (belum tergambar)
  gsap.set(path, { drawSVG: "0% 0%" });

  headline.addEventListener('mouseenter', () => {
    gsap.to(path, {
      duration: 1,
      drawSVG: "0% 100%",
      ease: "power2.out"
    });
  });

  headline.addEventListener('mouseleave', () => {
    gsap.to(path, {
      duration: 0.5,
      drawSVG: "0% 0%",
      ease: "power2.in"
    });
  });

  const btn1 = document.getElementById("btnLinkedin");
  const circle1 = btn1.querySelector(".circle-bg");

  const btn2 = document.getElementById("btnProjects");
  const circle2 = btn2.querySelector(".circle-bg");

  const btn3 = document.getElementById("btnWork");
  const circle3 = btn3.querySelector(".circle-bg");

  const btn4 = document.getElementById("btnAbout");
  const circle4 = btn4.querySelector(".circle-bg");

  // Fungsi reusable untuk animasi
  function setupButtonHover(btn, circle) {
    btn.addEventListener("mouseenter", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      circle.style.transform = "translate(-50%, -50%) scale(1)";
      circle.style.opacity = "1";
    });

    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
    });

    btn.addEventListener("mouseleave", () => {
      circle.style.transform = "translate(-50%, -50%) scale(0)";
      circle.style.opacity = "0";
    });
  }

  // Pasang ke dua tombol
  setupButtonHover(btn1, circle1);
  setupButtonHover(btn2, circle2);
  setupButtonHover(btn3, circle3);
  setupButtonHover(btn4, circle4);

 const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const iconHamburger = document.getElementById('icon-hamburger');
  const iconClose = document.getElementById('icon-close');
  const navLinks = mobileNav.querySelectorAll('a');

  let isOpen = false;

  menuToggle.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
      mobileNav.classList.remove('translate-x-full');
      mobileNav.classList.add('-translate-x-75');

      iconHamburger.classList.add('hidden');
      iconClose.classList.remove('hidden');

      // Animasi fade-in per item
      navLinks.forEach((link, i) => {
        setTimeout(() => {
          link.classList.add('fadein');
        }, i * 100); // delay bertahap 100ms
      });
    } else {
      mobileNav.classList.remove('translate-x-0');
      mobileNav.classList.add('translate-x-full');

      iconHamburger.classList.remove('hidden');
      iconClose.classList.add('hidden');

      // Reset animasi
      navLinks.forEach(link => {
        link.classList.remove('fadein');
      });
    }
  });