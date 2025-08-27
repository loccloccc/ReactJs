import React from 'react'
import LiThuyet from './components/LiThuyet/LiThuyet'
import TodoList from './components/LiThuyet/TodoList'
import Ex1 from './components/PTIT_CNTT04_IT104_Session18_Bai01/Ex1'
import Ex2 from './components/PTIT_CNTT04_IT104_Session18_Bai02/Ex2'
import Ex3 from './components/PTIT_CNTT04_IT104_Session18_Bai03/Ex3'
import Ex4 from './components/PTIT_CNTT04_IT104_Session18_Bai04/Ex4'
import Ex5 from './components/PTIT_CNTT04_IT104_Session18_Bai05/Ex5'
import Ex6 from './components/PTIT_CNTT04_IT104_Session18_Bai06/Ex6'
import Ex7 from './components/PTIT_CNTT04_IT104_Session18_Bai07/Ex7'

export default function App() {
  return (
    <div>
       <p>Li thuyet</p>
       <LiThuyet></LiThuyet>
       <TodoList></TodoList>
       <p>Bai 1</p>
       <Ex1></Ex1>
       <p>Bai 2</p>
       <Ex2></Ex2>
       <p>Bai 3</p>
       <Ex3></Ex3>
       <p>Bai 4</p>
       <Ex4></Ex4>
       <p>Bai 5</p>
       <Ex5></Ex5>
       <p>Bai 6</p>
       <Ex6></Ex6>
       <p>BAi 7 va Bai 8</p>
       <Ex7></Ex7>
    </div>
  )
}
