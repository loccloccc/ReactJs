import React, { Component } from 'react'
import Ex01 from './components/PTIT_CNTT04_IT104_Session15_Bai01/Ex01'
import EX2 from './components/PTIT_CNTT04_IT104_Session15_Bai02/EX2'
import Ex3 from './components/PTIT_CNTT04_IT104_Session15_Bai03/Ex3'
import Ex4 from './components/PTIT_CNTT04_IT104_Session15_Bai04/Ex4'
import Ex9 from './components/PTIT_CNTT04_IT104_Session15_Bai09/Ex9'
import Clock from './components/PTIT_CNTT04_IT104_Session15_Bai07/Clock'
import Counter from './components/PTIT_CNTT04_IT104_Session15_Bai08/Counter'

export default class App extends Component {
  render() {
    return (
      <div>
        <p>Bai 1</p>
        <Ex01></Ex01>
        <p>Bai 2</p>
        <EX2></EX2>
        <p>Bai 3</p>
        <Ex3></Ex3>
        <p>Bai 4</p>
        <Ex4></Ex4>
        <p>Bai 9</p>
        <Ex9></Ex9>
        <p>Bai 7</p>
        <Clock></Clock>
        <p>Bai 8</p>
        <Counter></Counter>
      </div>
    )
  }
}
