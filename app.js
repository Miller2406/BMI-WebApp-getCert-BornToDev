// The formular is weight /(height^2) | height:meter weight:kg
let weight = 0;
let height = 0;
let result = 0;

// Calculation
const calBMI = (weight, height) => {
  return (weight / (height / 100) ** 2).toFixed(2);
};

// input
function onChangeWeight() {
  weight = document.querySelector("#weight").value;
}
function onChangeHeight() {
  height = document.querySelector("#height").value;
}
const formEle = document.querySelector("#inputForm");

// Event Listener for submit
formEle.addEventListener("submit", (e) => {
  e.preventDefault();
  result = calBMI(weight, height);
  document.querySelector("#result").innerHTML = result;
  resultDis();
});

// Display logic fn
const resultDis = () => {
  if (weight > 0 && height > 0) {
    vidShow();
    document.querySelector(".isResult").style.display = "block";
    document.querySelector(".errMessage").style.display = "none";
    if (result >= 25) {
      document.querySelector(".isResult").querySelector("p").innerHTML =
        "You BMI is Overweight!!! let get healty food & workout more!";
      document.querySelector(".display").style.backgroundColor = "yellow";
      document.querySelector(".display").style.color = "black";
      if (result >= 30) {
        document.querySelector(".isResult").querySelector("p").innerHTML =
          "<br>You BMI is Overweight!!! Massive weight!<br>You need to get a trainer</br>";
        document.querySelector(".display").style.backgroundColor = "red";
        document.querySelector(".display").style.color = "white";
      }
    } else if (result >= 18.5) {
      document.querySelector(".isResult").querySelector("p").innerHTML =
        "<b>You BMI is Normal!!! You are healthy <3 </b>";
      document.querySelector(".display").style.backgroundColor = "green";
    } else {
      document.querySelector(".isResult").querySelector("p").innerHTML =
        "You BMI is Mild Thinness!!!<br>You have to get good food & workout for more muscle ";
      document.querySelector(".display").style.backgroundColor = "yellow";
      document.querySelector(".display").style.color = "black";
      if (result <= 17) {
        document.querySelector(".isResult").querySelector("p").innerHTML =
          "<br>You BMI is Severe Thinness!!!<br>Get more healthy food & workout more!</br>";
        document.querySelector(".display").style.backgroundColor = "red";
        document.querySelector(".display").style.color = "white";
      }
    }
  } else {
    document.querySelector(".isResult").style.display = "none";
    document.querySelector(".errMessage").style.display = "block";
    document.querySelector(".errMessage").innerHTML =
      "Please Enter <br>The CORRECT NUMBERS";
  }
};

// Video import
const healthyYT =
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/Y8HIFRPU6pM?si=1ScmFPrEvBcWF9FA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
const healthyVid = document.querySelector("#healtyVid");
healthyVid.innerHTML = healthyYT;

// Video display fn
const vidShow = () => {
  return setTimeout(() => {
    return (document.querySelector(".center").style.display = "flex");
  }, 2000);
};
