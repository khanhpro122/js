var  students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]
var results = students.filter(student => {
    return ((student.firstName.indexOf('a') != -1 || student.firstName.indexOf('A') != -1) && (student.firstName.length >= 3));
})
var arrs = results.map(result => {
    return [`"id":${result.id}`, `"firstName":${result.firstName.charAt(0).toUpperCase()}` + 
    `${result.firstName.slice(1).toLowerCase()}`,`lastName: ${result.lastName}`]
})
console.log(arrs)