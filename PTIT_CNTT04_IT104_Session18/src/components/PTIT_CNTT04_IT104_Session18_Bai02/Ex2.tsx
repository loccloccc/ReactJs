import React , {useMemo, useState }from "react";
type User = {
  id: number;
  name: string;
  age: number;
};
export default function Ex2() {
  const  [user, setUser] = useState<User[]>([
    {id: 1 , name :"loc" , age : 21},
    {id: 2 , name :"duc" , age : 20},
    {id: 3 , name :"an" , age : 17}
  ]);
  const age18 = useMemo(() => {
    return user.filter(i => i.age >= 18)
  },[user])
  return (
    <div>
        <h2>Danh sach nguoi tren 18 :</h2>
        {age18.map((v,i) => (
            <div key={i}>{v.name} - {v.age} tuoi</div>
        ))}
    </div>
  );
}
