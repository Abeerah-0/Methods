// let inputValue = document.getElementById("a");
// let names = ["Barira", "Raima", "Neha", "Muskan", "Abeerah", "Saima", "Faiza"]

// inputValue.addEventListener("keyup", (e) => {
//         let a = names.filter((value) => {
//             return value.toLowerCase().includes(e.target.value.toLowerCase());
//         });
        
//         if (a) {
//             console.log("Matched", a);
            
//         } else {
//             alert("Not Matched");
//         }
//     });

let students = [
    { name: "Abeerah", age: 19, gender: "female" },
    { name: "Muskan", age: 20, gender: "female" },
]

let filterData = students.filter((a) => {
    return a.name == "Abeerah"
})
console.log(filterData);