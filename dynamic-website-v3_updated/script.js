// Smooth scrolling for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Back-to-top button (optional feature)
const backToTop = document.createElement("button");
backToTop.innerText = "↑ Top";
backToTop.className = "btn btn-dark position-fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.display = "none";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
