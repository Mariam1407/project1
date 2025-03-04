

    // ===========================================================
    
    let userFromLocal=JSON.parse(localStorage.getItem("login"))
    let text=document.getElementById("text")
    console.log(userFromLocal)
    
   
    // ==========================================================

    // fetch("./card.json").then((response)=>response.json())
    // .then((data)=>{
    //     data.forEach(value =>{
    //         console.log(value)
    //     })
    // })
    
    const createCard=(dataFunc) =>{
        let container = document.getElementById("card-container");

        dataFunc.forEach(value => {
            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${value.image}" alt="${value.title}">
                <h2>${value.title}</h2>
                <p>${value.paragraph}</p>
                <p class="price">${value.price}</p>
            `;
            container.appendChild(card);
        });
    }
    fetch("./card.json")
            .then(response => response.json())
            .then((data) => {
   createCard(data)

            })
            .catch((error)=>{
               console.log(error)
            }) 