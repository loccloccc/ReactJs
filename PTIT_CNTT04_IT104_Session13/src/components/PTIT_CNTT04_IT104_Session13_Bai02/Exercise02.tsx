import React, { Component } from 'react'
type InfoState={
    id:number,
    name:string,
    birthDay:string,
    address:string
}
export default class  extends Component<object,InfoState> {
  constructor(props:object){
    super(props)
    this.state={
        id:1,
        name:"Duong Duc Loc",
        birthDay:"22/01/2000",
        address:"Thanh Xuan - Ha Noi"
    }
  }
    render() {
    return (
      <div>
        <b>Thong tin ca nhan :</b>
        <div>
            id : {this.state.id} <br />
            ten : {this.state.name} <br />
            ngany sinh : {this.state.birthDay} <br />
            dia chi : {this.state.address} <br />
        </div>
      </div>
    )
  }
}
