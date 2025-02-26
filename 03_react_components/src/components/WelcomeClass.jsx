import { Component } from "react";
import PrpoTypes from "prop-types";

class WelcomeClass extends Component {
  //渲染
  render() {
    return (
      <>
        <h1>Hello , {this.props.name}!</h1>
      </>
    );
  }
}

WelcomeClass.PrpoTypes = {
  name: PrpoTypes.string,
};

export default WelcomeClass;
