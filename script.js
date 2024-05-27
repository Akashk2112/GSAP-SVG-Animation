var intialValue = "M 10 200 Q 800 200 1590 200";
var finalValue = "M 10 200 Q 800 200 1590 200";

var main = document.querySelector("#main");

main.addEventListener("mousemove", function (dets) {
  path = `M 10 200 Q ${dets.x} ${dets.y} 1590 200`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

main.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalValue },
    duration: 0.8,
    ease: "elastic.out(1,0.1)",
  });
});
