import logo from "./logo.svg";
import "./App.css";
import "./AppMediaQueries.css";
import React from "react";
import Weather from "./Weather";

// import Tips from "./Components/tips";

function page_select(page) {
  let allimages = document.getElementsByClassName("map_iamges");

  for (let i = 0; i < allimages.length; i++) {
    allimages[i].classList.add("hidden");
  }
  let image;
  switch (page) {
    case 1:
      image = document.getElementById("map_image_1");
      image.getElementById("myElement").style.display = "block";
      break;
    case 2:
      image = document.getElementById("map_image_2");
      image.getElementById("myElement").style.display = "block";
      break;
    case 3:
      image = document.getElementById("map_image_3");
      image.getElementById("myElement").style.display = "block";
      break;
    case 4:
      image = document.getElementById("map_image_4");
      image.getElementById("myElement").style.display = "block";
      break;
    case 5:
      image = document.getElementById("map_image_5");
      image.getElementById("myElement").style.display = "block";
      break;
  }
}

function App() {
  return (
    <div className="base">
      {/* search bar section */}
      <Weather />
        
      {/* WEATHER TABLE >>> */}

      {/* image caution and tips  */}

    </div>
  );
}

export default App;