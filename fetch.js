var products = document.getElementById("products");
var searching = document.getElementById("searching");
let Searchproducts;
fetch("https://fakestoreapi.com/products").then((response) => {
    return response.json();
}).then((res) => {
    Searchproducts = res;
    console.log(res);
    for (var a = 0; a < res.length; a++) {
        products.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card" style="width:100%";>
              <img src="${res[a].image}" height="250px"
              class="card-img-top" alt="...">
            <div class="card-body">
                  <p class="card-text">${res[a].title}</p>
            </div>
        </div>          
        </div>`;
    }
});

searching.addEventListener("keyup", (e) => {

    let searchValue = e.target.value;

    let filterData = Searchproducts.filter((val) => {
        return val.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    console.log(filterData)
});