let card = document.querySelector('.card'); 

    try{
        fetch('../data.json').then(response => {
            response.json().then((dataJson) => {
               dataJson.map((apartments) => {
                card.innerHTML += ` 
                <div class="property">
                    <img src="${apartments.image}" alt="Imagem do imóvel"/>
                        <p id="price1" class="poppins-600">${apartments.price}</p>
                        <p id="meters1" class="poppins-400 meters">${apartments.size} m²</p>
                    <div class="home-descption">
                        <p id="bedrooms1" class="btn-card">${apartments.bedrooms} quarto</p>
                        <p id="bathrooms1" class="btn-card">${apartments.bathrooms} banheiros</p>
                    </div>
                </div> `
               }); 

            });
        }); 

    }catch (error){
        console.error("An error occurred:", error.message);
    }finally {
        console.log("Execution completed.");
    }