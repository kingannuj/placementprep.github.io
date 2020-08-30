const ham = document.querySelector(".ham");
const navLinks = document.querySelector(".nav-item");
const links = document.querySelectorAll(".nav-item li");


ham.addEventListener('click',() =>{
  navLinks.classList.toggle("open");
  links.forEach(link =>{
    link.classList.toggle("fade");
  });
});
