import { products, categories } from "./productsData.js";

function createCard(product) {
    const card = document.createElement("li");
    const img = document.createElement("img");
    img.src = product.img;
    const div = document.createElement("div");
    div.classList.add("bottom-section-li__div");
    const p1 = document.createElement("p1");
    p1.innerHTML = `${product.band}   ${product.year}`;
    const h2 = document.createElement("h2");
    h2.innerHTML = product.title;

    const p2 = document.createElement("p");
    p2.innerHTML = `R$ ${product.price.toFixed(2)}`;
    const button = document.createElement("button");
    button.innerHTML = "Comprar";
    const span = document.createElement("span");
    span.append(p2, button);
    div.append(p1, h2, span);
    card.append(img, div);
    return card;
}

function createCategories(categoryArray){
    const list = document.querySelector(".gender-container__ul");
    categoryArray.forEach(category => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.innerHTML = category;
        li.appendChild(button);
        list.appendChild(li);
    });
}

function renderCards(productsArray){
    const list = document.querySelector(".bottom-section__ul");
    productsArray.forEach(product => {
        const card = createCard(product);
        list.appendChild(card);
    });
}

function clearCards(){ // Function to clear rendered li's
    const list = document.querySelectorAll(".bottom-section__ul li");
    list.forEach(li => {
        li.remove();
    });
}

function filteringEvents(categoryArray, productsArray){
    const pricerange = document.querySelector("#price-container__input");
    const pricevalue = document.querySelector(".price-container__p");
    const categoryBtns = document.querySelectorAll(".gender-container__ul li button");
    let categoryIndex = 0;
    let filteredArray = productsArray;

    categoryBtns.forEach(btn => {
        btn.addEventListener("click", () => {

            // Focus on buttons
            categoryBtns.forEach(btn => {
                btn.classList.remove("btn__focus");
            });
            btn.classList.toggle("btn__focus");
            
            // Filtering per category
            categoryIndex = categoryArray.indexOf(btn.innerHTML);
            if(categoryIndex === 0){
                filteredArray = productsArray;
                pricevalue.innerText = "Até R$ 100";
                pricerange.value = "100";
                clearCards();
                renderCards(filteredArray);
            } else{
                filteredArray = productsArray.filter(array => {
                    return array.category == categoryIndex;
                });
                pricevalue.innerText = "Até R$ 100";
                pricerange.value = "100";
                clearCards();
                renderCards(filteredArray);
            }
        });
    });

    // Filtering per price
    pricerange.addEventListener("input", () => {
        pricevalue.innerText = "Até R$" + pricerange.value;
        const filteredPriceArray = filteredArray.filter(array => {
            return array.price <= pricerange.value;
        });
        clearCards();
        renderCards(filteredPriceArray);
    });
}

createCategories(categories);
renderCards(products);
filteringEvents(categories, products);