import React, { Component } from "react";
type Count = {
  count: number;
};
export default class Counter extends Component<object, Count> {
  private id: number;
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.id = window.setInterval(() => this.counter(), 1000);
  }
  componentWillUnmount() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
  counter() {
    let newCount = this.state.count === 10 ? 0 : this.state.count + 1;
    this.setState({ count: newCount });
  }

  render() {
    return <div>Count : {this.state.count}</div>;
  }
}
