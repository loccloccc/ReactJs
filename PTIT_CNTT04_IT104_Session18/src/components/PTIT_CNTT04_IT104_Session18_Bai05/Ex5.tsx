import React, { useReducer } from 'react'
type Data = {
    dataInput:string,
    type:"CHANGE"
}
export default function Ex5() {
    const initial:Data = {
        dataInput:"",
        type:"CHANGE"
    }
    const dataReducer = (state:any,action:any) => {
        switch(action.type){
            case "CHANGE":
                return {...state,dataInput:action.payload}
            default : 
            return state
        }
    }
    const [data,dispatch] =  useReducer(dataReducer , initial);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type:"CHANGE" , payload:e.target.value})
    }
  return (
    <div>
      {data.dataInput} <br />
      <input type="text" name="dataInput" id="" onChange={handleChange}/>
    </div>
  )
}
