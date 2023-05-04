import React, { Component } from "react";
import "./Todo.css";

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      items: [],
      completedItems: [],
      result: "tasks-pending",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleAdd(event) {
    event.preventDefault();
    this.setState({
      input: "",
      items: [...this.state.items, this.state.input],
    });
  }

  handleComplete(index) {
    const completedItems = this.state.completedItems;
    if (completedItems.includes(index)) {
      this.setState({
        completedItems: completedItems.filter((i) => i !== index),
      });
    } else {
      this.setState({
        completedItems: [...completedItems, index],
      });
    }
  }

  render() {
    return (
      <section className="to-do">
        <div className="container">
          <div className="to-do-wrapper">
            <ul className="to-do__list">
              {this.state.items.map((item, index) =>
                item === "" ? (
                  ""
                ) : (
                  <li
                    className={
                      this.state.completedItems.includes(index)
                        ? "to-do__item completed"
                        : "to-do__item pending"
                    }
                    onClick={() => this.handleComplete(index)}
                    key={index}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
            <form className="form" onSubmit={this.handleAdd}>
              <input
                className="form__input"
                value={this.state.input}
                onChange={this.handleChange}
              />
              <button type="submit" className="form__button">
                Add
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default ToDo;
