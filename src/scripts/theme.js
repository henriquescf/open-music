/* Desenvolva sua lógica aqui ... */

function darkMode(){
    const html = document.querySelector("html");
    const svg = document.querySelector(".header__icon");
    const btn = document.querySelector(".header__btn");

    btn.addEventListener("click", () => {
        if(html.classList.contains("dark-mode")){
            svg.src = "./src/assets/img/moon.svg";
        } else{
            svg.src = "./src/assets/img/sun.svg";
        }

        if(JSON.parse(localStorage.getItem("@openMusic:darkMode"))){
            localStorage.setItem("@openMusic:darkMode", JSON.stringify(false));
        } else{
            localStorage.setItem("@openMusic:darkMode", JSON.stringify(true));
        }

        html.classList.toggle("dark-mode");
    });

    if (JSON.parse(localStorage.getItem("@openMusic:darkMode"))) {
        svg.src = "./src/assets/img/sun.svg";
        html.classList.add("dark-mode");
    } else{
        svg.src = "./src/assets/img/moon.svg";
        html.classList.remove("dark-mode"); 
    }
}

darkMode();

