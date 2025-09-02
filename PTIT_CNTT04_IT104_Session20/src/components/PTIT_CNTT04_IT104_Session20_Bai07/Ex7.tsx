import React, { useReducer } from 'react'

export default function Ex7() {
    const initial = {
        count : 0
    }
    const countReducer = (state:any , action:any) => {
        switch (action.type) {
            case "INCREASE":
                return {count:state.count + action.payload}
            case "REDUCE":
                return {count : state.count - action.payload};
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(countReducer, initial)
    const increase = () => {
        dispatch({type:"INCREASE",payload:1})
    }
    const reduce = () => {
        dispatch({type:"REDUCE",payload:1})
    }
    return (
    <div>
      <p>So dem : {state.count}</p>
        <button onClick={increase}>Tang</button>
        <button onClick={reduce}>Giam</button>
    </div>
  )
}
