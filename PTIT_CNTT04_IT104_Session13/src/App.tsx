import React, { Component } from 'react'
import Exercises01 from './components/PTIT_CNTT04_IT104_Session13_Bai01/Exercises01'
import Exercise02 from './components/PTIT_CNTT04_IT104_Session13_Bai02/Exercise02'
import Exercise03 from './components/PTIT_CNTT04_IT104_Session13_Bai03/Exercise03'
import Parent_Comp from './components/PTIT_CNTT04_IT104_Session13_Bai04/Parent_Comp'
import Children from './components/PTIT_CNTT04_IT104_Session13_Bai05/Children'
import ListPost from './components/PTIT_CNTT04_IT104_Session13_Bai06/ListPost'
import App2 from './components/PTIT_CNTT04_IT104_Session13_Bai07/App2'
import TodoList from './components/PTIT_CNTT04_IT104_Session13_Bai08/TodoList'
import UpdateState from './components/PTIT_CNTT04_IT104_Session13_Bai09/UpdateState'
import Input from './components/PTIT_CNTT04_IT104_Session13_Bai10/Input'


export default class App extends Component {
  render() {
    return (
      <div>
        <p>Bai 1</p>
        <Exercises01></Exercises01>
        <p>Bai 2</p>
        <Exercise02></Exercise02>
        <p>Bai 3</p>
        <Exercise03></Exercise03>
        <p>Bai 4</p>
        <Parent_Comp></Parent_Comp>
        <p>Bai 5</p>
        <Children></Children>
        <p>Bai 6</p>
        <ListPost></ListPost>
        <p>Bai 7</p>
        <App2></App2>
        <p>Bai 8</p>
        <TodoList></TodoList>
        <p>Bai 9</p>
        <UpdateState></UpdateState>
        <p>Bai 10</p>
        <Input></Input>
      </div>
    )
  }
}


