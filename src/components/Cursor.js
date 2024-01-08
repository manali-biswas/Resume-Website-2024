import { useEffect } from "react";
import gsap from "gsap";
import { TweenMax } from "gsap/gsap-core";

let $bigBall = null
let $smallBall = null
let $hoverables = null
// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, 0.5, {
    x: e.pageX - 20,
    y: e.pageY - 20,
  });
  TweenMax.to($smallBall, 0.1, {
    x: e.pageX - 2,
    y: e.pageY - 2,
  });
}

// Hover an element
function onMouseHover() {
    console.log("hovered")
  TweenMax.to($bigBall, 0.3, {
    scale: 4,
  });
  TweenMax.to($smallBall, 0.3, {
    scale: 0,
  });
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, 0.3, {
    scale: 1,
  });
  TweenMax.to($smallBall, 0.3, {
    scale: 1,
  });
}

function Cursor() {
    
useEffect(() => {
    gsap.registerPlugin(TweenMax);
    $bigBall = document.querySelector(".cursor__ball--big");
    $smallBall = document.querySelector(".cursor__ball--small");
    $hoverables = document.querySelectorAll("a, .accordion-button, button, .card-link");
  
    // Listeners
    document.body.addEventListener("mousemove", onMouseMove);
    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener("mouseenter", onMouseHover);
      $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
    }
  });

  return (
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big ">
        <svg height="40" width="40">
          <circle cx="20" cy="20" r="16" strokeWidth="0"></circle>
        </svg>
      </div>

      <div className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
}

export default Cursor;
