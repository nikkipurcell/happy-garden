import React from "react";
import { monthlyColor } from "./utils";
import "./App.css";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
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
          <ul>
            {item.tasks.map((task, i) => (
              <React.Fragment key={i}>
                <li>{task.text}</li>
                {task.subtasks && (
                  <ul>
                    {task.subtasks.map((subtask, j) => (
                      <li key={j}>{subtask}</li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Accordion;
