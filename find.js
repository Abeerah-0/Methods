// let inputValue = document.getElementById("a")
let brands = ["Sapphire", "Apple", "Gucci", "Khaadi", "Samsung"]

// // let a = brands.find((a) => {
// //          return  a === "Apple"
// // })
// //     console.log(a)

// // let userInput = prompt("Enter the brand name")
// inputValue.addEventListener("keyup", (e) => {
//     let a = brands.find((value) => {
//         return value.toLowerCase().includes(e.target.value.toLowerCase())
//     })
//     console.log(a);
//     if(a){
//         ""
//     }else{
//         alert("No brand Found")
//     }
// })



// let userInput = prompt("Enter your brand name:");

// if (userInput) {
//     
//     let foundBrand = brands.find((brand) => {
//         return brand.toLowerCase() === userInput.toLowerCase();
//     });

//     
//     if (foundBrand) {
//         alert("Brand found: " + foundBrand);
//     } else {
//         alert("No brand found");
//     }
// } else {
//     alert("No input provided");
// }


let inputValue = document.getElementById("a");

inputValue.addEventListener("keyup", (e) => {

   
    let foundBrand = brands.find((brand) => {
        return brand.toLowerCase().includes(e.target.value.toLowerCase());
    });

   
    if (foundBrand) {
        console.log("Brand found:", foundBrand);
        alert("Brand Found")
    } else {
        alert("No brand found");
    }
});