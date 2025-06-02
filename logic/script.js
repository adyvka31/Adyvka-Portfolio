new Swiper('.blogWrapper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
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