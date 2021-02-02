const students = [
    {id: 1, name: "Im Nayeon"},
    {id: 2, name: "Yoo Jeongyeon"},
    {id: 3, name: "Hirai Momo"},
    {id: 4, name: "Minatozaki Sana"},
    {id: 5, name: "Park Jihyo"},
    {id: 6, name: "Myoui Mina"},
    {id: 7, name: "Kim Dahyun"},
    {id: 8, name: "Son Chaeyoung"},
    {id: 9, name: "Chou Tzuyu"}
];

for(var i = 0; i < students.length; i++){
    console.log(students[i].name);
}

const names = students.map(function(student){
    return student.name;
})

console.log(names);

const pupil = students.map(student => student.name);
console.log(pupil);

const id = students.map(student => student.id);
console.log(id);

const ids = students.filter(students => students.id > 4);
console.log(ids);
