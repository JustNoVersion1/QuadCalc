document.querySelector(".submit-btn").addEventListener("click", function () {
  // get the inputs in variable
  const a = parseInt(document.querySelector("#a").value);
  const b = parseInt(document.querySelector("#b").value);
  const c = parseInt(document.querySelector("#c").value);
  // do the math
  const C =
    (Math.acos((c ** 2 - a ** 2 - b ** 2) / (-2 * a * b)) * 180.0) / Math.PI;
  console.log(C);
  document.querySelector("#answer1").textContent = C + " degrees";

  const Area = (a * b * Math.sin((C * Math.PI) / 180.0)) / 2;
  console.log(Area);
  document.querySelector("#answer2").textContent = Area + " square inches";
});
