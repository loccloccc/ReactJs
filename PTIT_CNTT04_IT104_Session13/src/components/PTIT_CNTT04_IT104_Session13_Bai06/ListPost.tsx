import React, { Component } from "react";
import DetailPost from "./DetailPost";
type List = {
  list: {
    id: number;
    title: string;
    content: string;
    author: string;
  }[];
};
export default class ListPost extends Component<object, List> {
  constructor(props: object) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          title: "Tai sao nen hoc ReactJs",
          content: "Hoc ReactJs de di lam",
          author: "David",
        },
        {
          id: 2,
          title: "Props trong ReactJs",
          content: "Props giup truyeng du lieu tu component con xuong component cha",
          author: "Linda",
        },
        {
          id: 3,
          title: "State trong ReacrJs la gi",
          content: "State giup giu trang thai du lieu ben trong mot component",
          author: "David",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <DetailPost list={this.state.list}></DetailPost>
      </div>
    );
  }
}
