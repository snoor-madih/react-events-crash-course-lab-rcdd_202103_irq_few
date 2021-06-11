import React, { Component } from "react";
import {
  drawChromeBoiAtCoords,
  toggleCycling,
  resize
} from "./canvasHelpers.js";

export default class ChromeBoisDomain extends Component {
  handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    drawChromeBoiAtCoords(x, y);
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
  };
  handleClick() {
    toggleCycling();
  }
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
  handleKey(e) {
    if (e.key === "a"){resize("+")}
    else if( e.key === "s") {
      resize("-");
    }
  }


  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyDown={this.handleKey}
        width="900"
        height="600"
        tabIndex="0"
      ></canvas>
    );
  }
}
