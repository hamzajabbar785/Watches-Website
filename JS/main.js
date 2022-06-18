const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navToggle.onclick = () => {
    navMenu.classList.add("show-menu")
}
navClose.onclick = () => {
    navMenu.classList.remove("show-menu")
}


const navLink = document.querySelectorAll(".nav__link");
// function linkAction() {
//     navMenu.classList.remove("show-menu")
// }
// navLink.forEach(i => i.addEventListener("click", linkAction))
navLink.forEach(i => i.onclick = () => {
    navMenu.classList.remove("show-menu")
})


function scrollHeader() {
    const header = document.getElementById("header");
    if(this.scrollY >= 50) {
        header.classList.add("scroll-header")
    } else {
        header.classList.remove("scroll-header")
    }
}
window.addEventListener("scroll", scrollHeader)


let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: "true",

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: "true",

    breakpoints: {
        570: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
});



const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link")
    } else {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link")
    }
  })
}
window.addEventListener("scroll", scrollActive);



function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if(this.scrollY >= 400){
    scrollUp.classList.add("show-scroll")
  } else {
    scrollUp.classList.remove("show-scroll")
  }
}
window.addEventListener("scroll", scrollUp)



const cart = document.getElementById("cart");
const cartShop = document.getElementById("cart-shop");
const cartClose = document.getElementById("cart-close");

cartShop.onclick = () => {
    cart.classList.add("show-cart")
}
cartClose.onclick = () => {
    cart.classList.remove("show-cart")
}












