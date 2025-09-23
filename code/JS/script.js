document.addEventListener('DOMContentladed', () => {
    const infoButtons = document.querySelectorAll('.meer-info-btn');

    infoButtons.forEach(button => {
        button.addEventListener('click', (event) =>{
            const card = event.target.closest('.property-card');
            const priceElement = card.querySelector('.property-price');

            priceElement.textContent = 'Prijs is aangepast!';
            alert('De prijs is aangepast.Dit is een demo');
        });
    });
    });