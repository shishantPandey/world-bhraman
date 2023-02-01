let bars = document.getElementById("bars");
let xmarks = document.getElementById("xmark");
let navwrapper = document.getElementById("menus");
bars.onclick = () => {
  navwrapper.style.transform = `translateX(0px)`;
  xmarks.style.display = "block";
  bars.style.display = "none";
};
xmarks.onclick = () => {
  navwrapper.style.transform = `translateX(-500px)`;
  xmarks.style.display = "none";
  bars.style.display = "block";
};
