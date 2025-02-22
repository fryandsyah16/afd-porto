// scroll-trigger.js

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
  
    // Animasi untuk judul seiring dengan scroll
    gsap.from(".display-3", {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: ".display-3",
        start: "top center",
        end: "center center",
        toggleActions: "play none none reverse",
      },
    });
  
    // Animasi untuk profil gambar seiring dengan scroll
    gsap.from(".profile-img", {
      opacity: 0,
      x: -50,
      scrollTrigger: {
        trigger: ".profile-img",
        start: "top center",
        end: "center center",
        toggleActions: "play none none reverse",
      },
    });
  
    // Tambahkan animasi lainnya sesuai kebutuhan
  });

  // Function to create slide-track animation
  function slideTrackAnimation() {
    const text = document.querySelector('.slider-track');
    const textWidth = text.offsetWidth;
    const parentWidth = text.parentNode.offsetWidth;
    const duration = (textWidth / parentWidth) * 10; // Adjust speed based on text width

    // Create animation
    text.animate([
        { transform: 'translateX(0)' },
        { transform: `translateX(-${textWidth}px)` }
    ], {
        duration: duration * 1000, // Convert to milliseconds
        iterations: Infinity
    });
}

// Call the function when the page loads
window.onload = function() {
    slideTrackAnimation();
};
  