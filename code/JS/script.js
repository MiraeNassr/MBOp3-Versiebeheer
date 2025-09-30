document.addEventListener('DOMContentLoaded', () => {

    const propertyListContainer = document.querySelector('.property-list');

    const fetchHouses = async () => {
        try {
            const response = await fetch('php/database.php');
            
            if(!response.ok){
                throw new Error('HTTP error! status: ${response.status}');
            }

            const houses = await response.json();

            houses.forEach(house => {
                const cardHTML = `
                <div class ="property-card" data-id="${house.id}">
                    <img src="${house.image}" alt="Huis">
                    <h3 class="property-price">
  ${house.price && !isNaN(house.price) ? `€${Number(house.price).toLocaleString('nl-NL')}` : 'Prijs onbekend'}
</h3>
                        <p class="property-desc">${house.description}</p>
                        <p class="property-location">${house.location}</p>
                        <button class="meer-info-btn">Meer info</button>
                    </div>
                `;
               propertyListContainer.innerHTML += cardHTML;
            });

            attachEventListeners();
            
        }catch (error) {
          //  console.error('Error fetching data:'+error);
        propertyListContainer.innerHTML = '<p>Excuses, er zijn momenteel geen woningen beschikbaar. Probeer het later opnieuw.</p>';
        }
    };

    const attachEventListeners = (event) => {
        propertyListContainer.addEventListener('click', handleCardClick);
    };

    const handleCardClick = (event) => {
        if(event.target.classList.contains('meer-info-btn')) {
            const card = event.target.closest('.property-card');
            const houseId = card.dataset.id;

            alert(`U heeft op Woning ID: ${houseId} geklikt. Dit is de volgende stap!`);
        }
    };
    fetchHouses();    
    });