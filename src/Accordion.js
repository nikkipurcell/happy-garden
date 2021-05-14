import React from "react";
import { monthlyColor } from "./utils";
import "./App.css";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  getClassNames = () => {
    let className = ["accordion"];

    if (this.state.active) {
      className.push("active");
    }
    monthlyColor(className, this.props.item.month);

    return className.join(" ");
  };

  render() {
    const { item } = this.props;

    return (
      <React.Fragment>
        <button className={this.getClassNames()} onClick={this.toggleClass}>
          {item.month}
          <span className="circleBase" />
        </button>
        <div className="panel">
          {item.flowers && (
            <>
              <h3>FLOWERS</h3>
              <ul>
                {item.flowers.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </>
          )}
          {item.lawn && item.lawn.length !== 0 && (
            <>
              <h3>LAWN</h3>
              <ul>
                {item.lawn.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Accordion;
