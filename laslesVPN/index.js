let navb = document.getElementById("navb");
// console.log(navb);
window.addEventListener("scroll", function () {
  if (window.scrollY != 0) {
    navb.style.position = "fixed";
    navb.style.zIndex = "1";
    navb.style.backgroundColor = "#fff";
    navb.style.borderBottom = "2px solid  #f53855";
    navb.style.boxShadow = "0px 2px 10px rgba(245,56,56,.5)";
  } else {
    navb.style.position = "none";
    navb.style.zIndex = "none";
    navb.style.backgroundColor = "none";
    navb.style.borderBottom = "none";
    navb.style.boxShadow = "none";
  }
  console.log(window.scrollY);
});
