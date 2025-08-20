import React, { Component } from "react";
type Status = {
  theme: string;
  language: string;
};
export default class App2 extends Component<object, Status> {
  constructor(props: object) {
    super(props);
    this.state = {
      theme: "light",
      language: "english",
    };
  }
  render() {
    return (
      <>
        {this.state.theme === "light" ? (
          <div style={{
            width:"800px",
            height:"200px",
            border:"1px solid gray",
            color:"black",
            backgroundColor:"white"
          }}>
            <h2>Nen Sang</h2>
            <h2>Ngon Ngu Tieng Viet</h2>
          </div>
        ) : (
          <div style={{
            width:"800px",
            height:"200px",
            border:"1px solid gray",
            color:"white",
            backgroundColor:"black"
          }}>
            <h2>Nen Toi</h2>
            <h2>Ngon Ngu Tieng Viet</h2>
          </div>
        )}
      </>
    );
  }
}
