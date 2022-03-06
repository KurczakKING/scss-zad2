import { style } from "./css/index.scss";

let heading = document.querySelector("#demo"),
  sumValue = sum(10, 20);

heading.innerHTML = `30 + 20 = ${sumValue}`;

import Icon from "./assets/img/coffee.jpg";

let myIcon = new Image();
myIcon.src = Icon;
document.querySelector("div").appendChild(myIcon);
document.querySelector("div").classList.add("change");
