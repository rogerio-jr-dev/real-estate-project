let card = document.querySelector('.card'); 
let dialog = document.querySelector(".dialog"); 
let containerModal = document.querySelector(".container-modal"); 
function load() {
        try {
        fetch("../data.json").then((response) => {
            response.json().then((dataJson) => {
            dataJson.forEach((apartments, index) => {
                let cardContent = document.createElement("div");
                cardContent.className = "property";

                cardContent.innerHTML = ` 
                        
                            <img src="${apartments.image}" alt="Imagem do imóvel"/>
                                <p id="price1" class="poppins-600">${apartments.price}</p>
                                <p id="meters1" class="poppins-400 meters">${apartments.size} m²</p>
                            <div class="home-descption">
                                <p id="bedrooms1" class="btn-card">${apartments.bedrooms} quarto</p>
                                <p id="bathrooms1" class="btn-card">${apartments.bathrooms} banheiros</p>
                            </div> `;
                cardContent.addEventListener("click", () => send(index, dataJson));
                card.appendChild(cardContent);
              });
            });
        });
        
        } catch (error) {
        console.error("An error occurred:", error.message);
        } finally {
        console.log("Execution completed.");
        }
}
    function send(index, dataJson) {
        let modal = dataJson[index]; 
        console.log(modal);
        containerModal.innerHTML = `
          <div class="modal">
            <div onclick="close()"><img id="close" src="../assets/icons/close.svg" alt="fechar"/></div>
            
            <div class="contain-img">
                <img class="picture" src="${modal.image}" alt="Imagem do imóvel"/>
            </div>
            <div class="price poppins-700 ">${modal.price}</div>
            <div class="description-modal">
              <p class="btn-card "> ${modal.bedrooms} quarto </p>
              <p class="btn-card "> ${modal.bathrooms} banheiros </p>
              <p class="poppins-400 meters"> ${modal.size} m² </p>
              <a class="btn-card" id="by">Comprar</a>
            </div>
          </div> `; 
        dialog.showModal(); 

        const close = document.querySelector("#close");

        close.onclick = function () {
          dialog.close();
        };
    }

    