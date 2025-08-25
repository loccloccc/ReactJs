import React from 'react'
import SubjectList from './components/PTIT_CNTT04_IT104_Session16_Bai01/SubjectList'
import LoginStatus from './components/PTIT_CNTT04_IT104_Session16_Bai02/LoginStatus'
import ClickCounter from './components/PTIT_CNTT04_IT104_Session16_Bai04/ClickCounter'
import EX3 from './components/PTIT_CNTT04_IT104_Session16_Bai03/EX3'
import UserForm from './components/PTIT_CNTT04_IT104_Session16_Bai05/UserForm'
import ThemeSwitcher from './components/PTIT_CNTT04_IT104_Session16_Bai06/ThemeSwitcher'
import Ex7 from './components/PTIT_CNTT04_IT104_Session16_Bai07/Ex7'

export default function App() {
  return (
    <div>
      {/* bai 1 */}
      <p>Bai 1</p>
      <SubjectList></SubjectList>
      <p>Bai 2</p>
      <LoginStatus></LoginStatus>
      <p>Bai 3</p>
      <EX3></EX3>
      <p>Bai 4</p>
      <ClickCounter></ClickCounter>
      <p>Bai 5</p>
      <UserForm></UserForm>
      <p>Bai 6</p>
      <ThemeSwitcher></ThemeSwitcher>
      <p>Bai 7 & Bai 8</p>
      <Ex7></Ex7>
    </div>
  )
}
