document.addEventListener("DOMContentLoaded", function () {
   const menuBtn = document.querySelector('.menu-btn');
   const menus = document.querySelector('.menus');
   const menuItems = document.querySelectorAll('nav > ul > li:not(.dropdown-menu li)');

   menuBtn.addEventListener('click', function () {
      const itemCount = menuItems.length;
      menuBtn.classList.toggle('menuToggler');
      menus.classList.toggle('mobileMenu');

      if (menus.classList.contains('mobileMenu')) {
         menuItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`; // 0.1s delay for each item
            item.style.opacity = 1;
            item.style.transform = 'scale(1) translateY(0px)';
         });
      } else {
         menuItems.forEach((item, index) => {
            item.style.transitionDelay = `${(itemCount - index - 1) * 0.1}s`; // Reverse delay for hiding
            item.style.opacity = 0;
            item.style.transform = 'scale(0.8) translateY(20px)';
         });
      }
   });
});

// bouncy header
window.addEventListener('scroll', () => {
   const header = document.getElementsByTagName('header')[0];
   const scrollClass = window.scrollY > 50 ? 'scrollto' : 'scrolledback';
   header.classList.toggle('scrollto', window.scrollY > 50);
   header.classList.toggle('scrolledback', window.scrollY <= 50);
});

// back to top
function backToTop() {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
}

window.addEventListener('scroll', function () {
   var scrollY = window.scrollY;
   var topBtn = document.querySelector('.top-btn');
   topBtn.classList.toggle('show', scrollY > 30);
});

document.querySelector('.top-btn').onclick = backToTop;

// Mouse Follower
const follower = document.querySelector(".mouse-follower .cursor-outline");
const dot = document.querySelector(".mouse-follower .cursor-dot");
window.addEventListener("mousemove", (e) => {
   follower.animate(
      [{
         opacity: 1,
         left: `${e.clientX}px`,
         top: `${e.clientY}px`,
         easing: "ease-in-out"
      }], {
         duration: 3000,
         fill: "forwards"
      }
   );
   dot.animate(
      [{
         opacity: 1,
         left: `${e.clientX}px`,
         top: `${e.clientY}px`,
         easing: "ease-in-out"
      }], {
         duration: 1500,
         fill: "forwards"
      }
   );
});

// Mouse Follower Hide Function
const interactiveElements = document.querySelectorAll('a, button, img');
interactiveElements.forEach(element => {
   element.addEventListener('mouseenter', () => {
      document.querySelector('.mouse-follower').classList.add('hide-cursor');
   });

   element.addEventListener('mouseleave', () => {
      document.querySelector('.mouse-follower').classList.remove('hide-cursor');
   });
});

// Preloader Js
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.add('hidden');
            preloader.addEventListener('transitionend', () => preloader.style.display = 'none', { once: true });
        }
    }, 2200);
});


// counter up 
function startCounter(counterElement) {
    const endValue = parseInt(counterElement.textContent, 10);
    const maxDuration = 2000; // Duration for 100%
    const duration = (endValue / 100) * maxDuration; // Calculate duration based on percentage
    const stepTime = duration / endValue; // Time per increment

    let currentValue = 0;

    const updateCounter = () => {
        counterElement.textContent = `${currentValue++}%`;
        if (currentValue <= endValue) {
            setTimeout(updateCounter, stepTime);
        }
    };

    updateCounter();
}

document.querySelectorAll('.skill-box').forEach(skillBox => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target.querySelector('.counter'));
                observer.unobserve(entry.target); // Stop observing after start
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillBox);
});

// popup modal
// function openLightbox(imageSrc) {
//     var modal = document.getElementById("lightbox");
//     var modalImage = document.getElementById("lightbox-image");

//     // Set the image source
//     modalImage.src = imageSrc;

//     // Add the 'active' class to display the modal
//     modal.classList.add("popModal");

//     // Lock the body scroll by setting its overflow to hidden
//     document.body.style.overflow = "hidden";
// }

// // Function to close the lightbox
// function closeLightbox() {
//     var modal = document.getElementById("lightbox");

//     // Remove the 'active' class to hide the modal
//     modal.classList.remove("popModal");

//     // Unlock the body scroll by removing the overflow hidden style
//     document.body.style.overflow = "visible";
// }

// // Attach the click event listener to the .close element
// document.querySelector(".close").addEventListener("click", closeLightbox);

// // sliding effects
// document.addEventListener('scroll', function() {
//     const section = document.querySelector('.stack-bg');
//     const parallaxBgs = document.querySelectorAll('.parallax-bg');
    
//     // Ensure there are at least two .parallax-bg elements
//     if (parallaxBgs.length < 2) return;

//     // Get the position of the first .parallax-bg element
//     const firstParallaxBg = parallaxBgs[0];
//     const firstParallaxBgRect = firstParallaxBg.getBoundingClientRect();
//     const firstParallaxBgBottom = firstParallaxBgRect.bottom;

//     // Add class to the rest of the .parallax-bg elements if the user has scrolled past the first one
//     if (window.scrollY > firstParallaxBgBottom) {
//         parallaxBgs.forEach((bg, index) => {
//             if (index > 0) {
//                 bg.classList.add('stactIn');
//             }
//         });
//     } else {
//         parallaxBgs.forEach((bg, index) => {
//             if (index > 0) {
//                 bg.classList.remove('stactOut');
//             }
//         });
//     }
// });

// infinite slider
const marqueeSlider = document.querySelector('.marque-animation');
  const images = Array.from(marqueeSlider.children);

  // Clone the images and append to the marquee
  images.forEach(image => {
    const clone = image.cloneNode(true);
    marqueeSlider.appendChild(clone);
  });

  // Handle hover to pause/resume animation
  marqueeSlider.addEventListener('mouseover', () => {
    marqueeSlider.style.animationPlayState = 'paused';
  });

  marqueeSlider.addEventListener('mouseout', () => {
    marqueeSlider.style.animationPlayState = 'running';
});