import React, { useReducer } from 'react'

export default function Bai8() {
  const initState = {
    name: '',
    email: ''
  }
  const formReducer = (state:any, action:any) => {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.payload }
      case 'SET_EMAIL':
        return { ...state, email: action.payload }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(formReducer, initState)
  return (
    <div>
      <h2>User Information Form</h2>
      <div>
        <label>Ten </label>
        <input
          type="text"
          value={state.name}
          onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
        />
      </div>
      <div>
        <label>Email </label>
        <input
          type="email"
          value={state.email}
          onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
        />
      </div>
      <h3>Thong tin nguoi dung</h3>
      <p>Ten: {state.name || '(Chua nhap)'}</p>
      <p>Email: {state.email || '(Chua nhap)'}</p>
    </div>
  )
}