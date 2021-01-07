# Interaction-design Com525
**Southampton Solent university**

## Element 1- Loader Screens ##

![Loading-Screen-Animation](https://user-images.githubusercontent.com/55785835/103898558-023dae00-50ed-11eb-8e01-ba0c3920c43f.png)

Loader screens are seen by millions of people every day, they are used to give the user something to look out while they wait for their page to load. Loader screens are used as a source of information too, it makes it clearer to the reader that the page they are waiting for is loading rather than keep trying to refresh the page.  There are many different forms of loading screens, some are interactive whilst others are just basic spinning wheels, some loading screens even give you hints, tips and facts while you wait to make it more interactive for the user. There main purpose is to allow all the assets of the page to be loaded in a high quality so that when you get onto the page it is fault free with a crisp display. 

### Guidelines ###
In order to create a practical loading screen, you need to think about the positions and layout of the screen. The Loading screen should only be around 3-4 seconds, this is because you don't want to leave the user getting frustrated that the page/app hasn't loaded. The design for the Loader screen should be simple but visual, this may be the first thing a user sees entering a webpage; therefore, it is important for it to be designed with effect. With the overall positioning of the loader it is import for it to be central on the page, this is so its easy for the user to see straight away and the overall look on the page is better. It is also important for it to be central so it is clear, if the design was up in the corner it wouldn't be seen as quickly.  In terms of size it is important the loader doesn't over power the whole page, the loader should be around 200 x 200mm on a standard webpage; this size will mean it is visually clear for the user. It is important when designing a loader screen that it can easily adapted depending on what device it is being used on e.g. smartphone or laptop. It also needs to be able to adapt to sudden changes e.g. when an internet tab gets bigger/smaller, so that the user can see it at anytime. 

### Design Prototyping ### 
For the design protype the software Adobe XD was used; Adobe XD allowed for a visual representation of the loader screen to be created.  For the design three separate screens were create; the design is simple but affective, it started with just four circles. The idea of the design Is that the middle part rotates and changes size in order to represent a twist on the classic spinning wheel. Once this was perfected Text was added in order to make the page clearer; the text is also animated as it moves with the page loading, the idea of this is so when the page is loading the text gradually aligns in order for the user to see the pages progress as it is loading up.

<img width="400" alt="Screenshot 2021-01-07 at 11 31 23" src="https://user-images.githubusercontent.com/55785835/103897851-00271f80-50ec-11eb-9962-a4a8b4ce2290.png">

<img width="400" alt="Screenshot 2021-01-07 at 11 31 33" src="https://user-images.githubusercontent.com/55785835/103898335-affc8d00-50ec-11eb-902c-07de82019e0f.png">

<img width="400" alt="Screenshot 2021-01-07 at 11 31 40" src="https://user-images.githubusercontent.com/55785835/103898374-bd197c00-50ec-11eb-857a-3d1e8de77a12.png">

### Coding ###
The coding for this design was done on an react appliction. The first section of coding completed was App.js; The following code was used:
import React from "react";



function App() {
  return <LOADING {...lOADINGData} />;
  return <Loader {...loaderData} />;
}

export default App;


function LOADING(props) {
  const { loading } = props;

  return <h1 className="loading helveticaneue-bold-black-50px">{loading}</h1>;
}
const lOADINGData = {
    loading: "LOADING ",


};

function Loader(props) {
  const { ellipse5, ellipse4, ellipse2, ellipse3 } = props;

  return (
    <div className="loader">
      <img className="ellipse-" alt="circle1" src={ellipse5} />
      <div className="auto-flex">
        <img className="ellipse-" alt="circle4" src={ellipse4} />
        <img className="ellipse-2" alt="circle2" src={ellipse2} />
      </div>
      <img className="ellipse-3" alt="circle3" src={ellipse3} />
    </div>
  );
}
const loaderData = {
    ellipse5: "",
    ellipse4: "",
    ellipse2: "",
    ellipse3: "",
};

Then The focus was put on the CSS of the loader screen in which was coded like this: 
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: rgb(238, 135, 135);
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
 .helveticaneue-bold-black-50px {
    color: black;
    font-family: "HelveticaNeue-Bold", Helvetica, Arial, serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
  }
 .helveticaneue-bold-silver-50px {
    color: var(--silver);
    font-family: "HelveticaNeue-Bold", Helvetica, Arial, serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
  }
 .loading {
    background-color: transparent;
    height: auto;
    left: 0px;
    letter-spacing: 0px;
    line-height: 50px;
    position: absolute;
    text-align: left;
    top: 0px;
    width: 248px;
  }
 .loading-1 {
    background-color: transparent;
    height: auto;
    left: 9px;
    letter-spacing: 0px;
    line-height: 50px;
    position: absolute;
    text-align: center;
    top: 18px;
    width: 248px;
  }
 .overlap-group {
    background-color: transparent;
    flex-shrink: 0;
    height: 80px;
    position: relative;
    width: 257px;
  }
 :root {
    --silver: rgba(187, 190, 190, 1);
  }

 .auto-flex {
    align-items: flex-start;
    background-color: transparent;
    display: inline-flex;
    flex-direction: row;
    flex-shrink: 0;
    height: 65px;
    justify-content: flex-start;
    margin-top: 9px;
    min-width: 213px;
    width: auto;
  }
 .ellipse- {
    background-color: transparent;
    flex-shrink: 0;
    height: 65px;
    width: 65px;
  }
 .ellipse-2 {
    background-color: transparent;
    flex-shrink: 0;
    height: 65px;
    margin-left: 83px;
    width: 65px;
  }
 .ellipse-3 {
    background-color: transparent;
    flex-shrink: 0;
    height: 65px;
    margin-top: 9px;
    width: 65px;
  }
 .loader {
    align-items: center;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    height: auto;
    justify-content: flex-start;
    min-height: 213px;
    width: 213px;
  }

}

### Demonstration of the working loading screen ###
![LOADER](https://user-images.githubusercontent.com/55785835/103903415-c4905380-50f3-11eb-949b-30e926259c2e.gif)












## Element 2- Buttons ##

## Element 3- Notifications 

## Element 4- Forms ## 
##  Element 5 - 



