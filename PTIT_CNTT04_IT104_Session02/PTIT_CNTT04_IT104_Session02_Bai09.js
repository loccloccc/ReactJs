const student = {
    name : "Dev",
    age : 20,
    listMonHoc : [
        {subject : "Math" , score : 9},
        {subject : "English" , score : 7.5},
        {subject : "Physics" , score : 6},
        {subject : "Literature" , score : 8.5},
    ]
}
function avgeSocre (...stu){
    let sum = 0 
    let count = 0 
    stu.forEach(e=>
        e.listMonHoc.forEach(
            i => {
                sum += i.score 
                count++;
            }
        )
    )
    return sum/count
}
let agev = avgeSocre(student).toFixed(2);
let scoreSort = student.listMonHoc.sort((a,b) => a.score - b.score)
let weak = scoreSort[0];
let best = scoreSort[student.listMonHoc.length-1];
if(agev>=8.5){
    console.log(`
        ${student.name} is ${student.age} years old.
        Average score : ${agev} -> Hoc sinh gioi
        Best subject : ${best.subject} -> (${best.score})
        weakest subject ${weak.subject} ->(${weak.score})
    `);
}else if(agev>=7){
    console.log(`
        ${student.name} is ${student.age} years old.
        Average score : ${agev} -> Hoc sinh kha
        Best subject : ${best.subject} -> (${best.score})
        weakest subject ${weak.subject} ->(${weak.score})
    `);
}else if(agev>=5){
    console.log(`
        ${student.name} is ${student.age} years old.
        Average score : ${agev} -> Hoc sinh trung binh
        Best subject : ${best.subject} -> (${best.score})
        weakest subject ${weak.subject} ->(${weak.score})
    `);
}else{
    console.log(`
        ${student.name} is ${student.age} years old.
        Average score : ${agev} -> Hoc sinh yeu
        Best subject : ${best.subject} -> (${best.score})
        weakest subject ${weak.subject} ->(${weak.score})
    `);
}

