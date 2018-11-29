import React, { Component } from "react";
import Top from "../img/top.png";
import "../css/buttonTop.css";

export default class ButtonUp extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.showButton.bind(this), false);
  }
  /* Adds/removes a scroll back to top button on scroll. */
  showButton() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 300) {
      this.buttonTop.classList.add("buttonTop_show");
    } else {
      this.buttonTop.classList.remove("buttonTop_show");
    }
  }
  /* Handles onClick event. Scrolls back to the top. */
  handleUp() {
    const t = setInterval(up, 10);
    function up() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        window.scrollBy(0, -100);
      } else {
        clearInterval(t);
      }
      return false;
    }
  }
  /* Renders scroll to top button. */
  render() {
    return (
      <div
        className="buttonTop"
        onClick={this.handleUp}
        ref={btn => {
          this.buttonTop = btn;
        }}
      >
      <img
        src={Top}
        alt="TOP"
      />
      </div>
    );
  }
}
