console.log("index.js connection confirmed");



// FOR THE LIST OF FEATURED PRODUCTS
const featuredProductsContainer = document.getElementById('featured-products-container');
const numOfFeaturedProducts = 8;


function fetchJSONData() {
  fetch("/main/json/products.json")
      .then((res) => {
          if (!res.ok) {
              throw new Error
                  (`HTTP error! Status: ${res.status}`);
          }
          return res.json();
      })
      .then((data) => {
        console.log(data.products);
        data.products.forEach((element) => {
          console.log(element.stars);
          const numOfStars = ``;
          if(element.stars == 5){
            this.numOfStars = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`;
          }else if(element.stars == 4){
            this.numOfStars = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>`;
          }else if(element.stars == 3){
            this.numOfStars = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`;
          }else if(element.stars == 2){            
            this.numOfStars = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`;
          }else if(element.stars == 1){
            this.numOfStars = `<i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`;
          }else{
            this.numOfStars = `<i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`;
          }
          const htmlString = ` 
          <div class="product">
          <img src="${element.file}" alt="">
          <div class="description pt-2">
            <span>${element.brand}</span>
            <h6>${element.name}</h6>
            <div class="star">${this.numOfStars}</div>
            <h4>Php ${element.price}</h4>
          </div>
          <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
          </div>`
          featuredProductsContainer.innerHTML += htmlString;
        });

      })
      .catch((error) => 
             console.error("Unable to fetch data:", error));
}
fetchJSONData();

