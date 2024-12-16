function highlight() {
  //Write your code here
  let strong = document.querySelectorAll("strong");

  for (let t of strong) {
    t.style.color = "green";
  }
}

function return_normal() {
  //Write your code here
  let strong = document.querySelectorAll("strong");
  for (let t of strong) {
    t.style.color = "initial";
  }
}
