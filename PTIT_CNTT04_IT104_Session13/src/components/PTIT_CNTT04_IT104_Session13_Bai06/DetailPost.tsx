import React, { Component } from 'react'
type List = {
    list: {
    id: number;
    title: string;
    content: string;
    author: string;
  }[];
}
export default class DetailPost extends Component<List> {
  render() {
    return (
      <div>
        <b>Danh sach bai viet</b>
        {this.props.list.map((value,index) => 
            <div key = {index}>
                <p>id : {value.id}</p>
                <p>Title : {value.title}</p>
                <p>Content : {value.content}</p>
                <p>Author : {value.author}</p>
                <hr />
            </div>
        )}
      </div>
    )
  }
}
