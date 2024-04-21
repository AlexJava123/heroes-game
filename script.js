//psudocod
//dau click pe show heroes
//vrear sa se ascunda btn de show heroes
// vreau sa se afiseze btn start fight
//vreau sa se afiseze eroii
//ca sa dau click pe btn trebe sa iau elementu din HTML in Java

// let showHeroesBtn = document.getElementById("show-heroes");
let showHeroesBtn = document.querySelector("#show-heroes");
let startFightBtn = document.querySelector("#start-fight");
let heroesContainer = document.querySelector(".heroes-container");

let showWinnerContainer = document.querySelector("#show-winner");
showWinnerContainer.innerHTML = epicFight.findWinner();

// console.log(showHeroesBtn);
showHeroesBtn.addEventListener("click", showHeroesFunc);

function showHeroesFunc() {
  //     vrear sa se ascunda btn de show heroes
  showHeroesBtn.classList.add("d-none");
  // // vreau sa se afiseze btn start fight
  startFightBtn.classList.add("d-block");
  // //vreau sa se afiseze eroii
  heroesContainer.classList.add("d-flex");
  console.log("Show Heroes!!!!");
}

//1dau click pe fight start
startFightBtn.addEventListener("click", startFightFunc);

function startFightFunc() {
  //2 vreau sa ascund btn start
  startFightBtn.classList.remove("d-block");
  //3 vreau sa afisez winner

  showWinnerContainer.classList.add("d-block");
}
