import { Dom } from "./classes/utilityfunctions.js";

const dom = new Dom();

const hamburger = dom.select(".hamburger");

const cancel = dom.select(".cancel");

const mobileNavigation = dom.select("#navigation--mobile");

const container = dom.select("#container");

hamburger.addEventListener("click", () => {
  mobileNavigation.classList.add("show");
  container.classList.add("overlay");
});

cancel.addEventListener("click", () => {
  mobileNavigation.classList.remove("show");
  container.classList.remove("overlay");
});
