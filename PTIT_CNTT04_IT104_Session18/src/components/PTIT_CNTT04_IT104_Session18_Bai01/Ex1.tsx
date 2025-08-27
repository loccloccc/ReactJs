import React, { useReducer } from 'react'

export default function Ex1() {
    const initState = {
        count : 0,
    };
    const countReducer  = (state:any,action:any) => {
        switch(action.type){
            case "INCREASE":
                return {count:state.count + action.payload};
            default :
                return state;
        }
    }
    const [state,dispatch] = useReducer(countReducer,initState);
    const increase = () => {
        dispatch({type:"INCREASE",payload:1})
    }
    return (
    <div>
      <p>{state.count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  )
}
