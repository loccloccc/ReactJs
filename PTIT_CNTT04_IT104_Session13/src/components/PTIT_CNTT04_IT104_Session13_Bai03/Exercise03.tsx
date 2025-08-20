import React, { Component } from 'react'
type usersState = {
    users:{id:number,name:string,age:number}[];
}
export default class Exercise03 extends Component <object, usersState>{
  constructor(props:object){
    super(props)
    this.state={
        users:[
            {
                id:1,
                name:"JOHN",
                age:20
            },
            {
                id:2,
                name:"MARY",
                age:21
            },
            {
                id:3,
                name:"JANE",
                age:22
            }
        ]
    }
  }
    render() {
    return (
      <table border={1}>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
        </tr>
        {
            this.state.users.map((value,index)=> 
            <tr key={index}>
                <th>{value.id}</th>
                <th>{value.name}</th>
                <th>{value.age}</th>
            </tr>)   
        }
      </table>
    )
  }
}
