let banner = document.querySelectorAll(".banner");
let dayNight = document.querySelectorAll(".daynight");

dayNight.forEach((ele) => {
  ele.addEventListener("click", () => {
    banner.forEach((ele) => {
      ele.classList.toggle("night");
    });
  });
});

let typingText = new Typed("#text", {
  strings: ["Gunjan", "WebDeveloper", "Coder", "Marvel Fan", "Music Addict"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
});
let typingText2 = new Typed("#text2", {
  strings: ["Gunjan", "WebDeveloper", "Coder", "Marvel Fan", "Music Addict"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
});
