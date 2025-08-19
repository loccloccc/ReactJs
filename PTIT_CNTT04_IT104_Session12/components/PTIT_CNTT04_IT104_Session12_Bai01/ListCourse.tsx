
import React from 'react'

export default function ListCourse() {
  const subjects :string[]=["HTML","CSS","JavaScript","ReactJs"];
  return (
    <>
      
      <p><b>Danh sach cac khoa hoc</b></p>
      <ol>
        {subjects && subjects.map((i:string,index:number)=>{
          return <li key={index}>{i}</li>
        })}
      </ol>
    </>
  );
}
