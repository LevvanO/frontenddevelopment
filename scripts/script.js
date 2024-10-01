document.addEventListener('DOMContentLoaded', function () {
    // Constantes en variabelen
    const carousel = document.querySelector('main > section > section > ul'); // Selecteert de juiste ul binnen de structuur
    const hamburgerMenu = document.getElementById('hamburger-menu');

    let listItems = carousel.children;

    // Controleer of carousel bestaat
    if (!carousel) {
        console.log('Carousel element niet gevonden');
        return; // Stop de uitvoering als het element niet bestaat
    }

    // Controleer of er listItems zijn
    if (listItems.length === 0) {
        console.log('Geen items gevonden in de carrousel');
        return; 
    }

    const firstItemClone = listItems[0].cloneNode(true); // Clone het eerste item
    const lastItemClone = listItems[listItems.length - 1].cloneNode(true); // Clone het laatste item

    let itemWidth = listItems[0].clientWidth; // Verkrijg de breedte van het eerste item
    let currentIndex = 0;
    let isTransitioning = false;
    

    

    // Voeg de klonen toe aan de carrousel
    carousel.appendChild(firstItemClone);
    carousel.insertBefore(lastItemClone, listItems[0]);

    listItems = carousel.children; // Vernieuwt de lijst items na het clonen
    carousel.style.transform = `translateX(-${itemWidth}px)`; // Zet de initiële transform

    // Carousel prompt chatgpt: hoe zorg ik ervoor bij section2 ul Dat als ik klik op de section2 ul li content knopje klik dat ik dan links en rechts kan sliden naar de andere list items.
    // nog een prompt: hoe zorg ik ervoor dat de buttons naast de h2 staan. en dat het een soort loop is. dat je bij de eerste foto dus ook naar links kan gaan
    // Ik wilde een loop maken, maar het lukte niet dus vroeg ik het aan chatgpt.
    // CHat gpt prompt lang: Hoe zorg ik ervoor dat je in de ul van de .section2 de list items in het midden van de pagina staan en dat links en rechts een beetje kan zien van de list items. En hoe zorg ik ervoor dat de Carousel Smooth doorloopt als ie weer komt bij de eerste list item in plaats van een soort glitch wat ie nu doet?

    // Functie om de carrousel bij te werken
    function updateCarousel() {
        if (isTransitioning) return;
        isTransitioning = true;
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(-${(currentIndex + 1) * itemWidth}px)`;
    }

    // Verplaats de carrousel naar rechts
    document.getElementById('slideRight')?.addEventListener('click', function () {
        if (!isTransitioning) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Verplaats de carrousel naar links
    document.getElementById('slideLeft')?.addEventListener('click', function () {
        if (!isTransitioning) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Hamburger menu functionaliteit
    // Hamburger menu prompt chatgpt: Hoe zorg ik ervoor dat 
    // de list items van .hamburger-menu netjes onder elkaar staan en dat als je het 
    // hamburger menu opent dat het bijna het hele scherm bedekt. Alleen een beetje 
    // ruimte aan de rechterkant van het scherm.
    
    // chatgpt prompt: Hoe zorg ik ervoor dat als ik op de image hamburger menu klik dat er dan een hamburger menu wordt geopend
    document.getElementById('hamburger')?.addEventListener('click', function (event) {
        event.preventDefault();
        hamburgerMenu.classList.toggle('active');
        const isActive = hamburgerMenu.classList.contains('active');
        this.setAttribute('aria-expanded', isActive);
    });

    document.getElementById('close-button')?.addEventListener('click', function (event) {
        hamburgerMenu.classList.remove('active');
        document.getElementById('hamburger')?.setAttribute('aria-expanded', 'false');
    });

    // Event listener voor de overgang van de carrousel
    carousel.addEventListener('transitionend', () => {
        isTransitioning = false;
        if (currentIndex >= listItems.length - 2) {
            carousel.style.transition = 'none';
            currentIndex = 0;
            carousel.style.transform = `translateX(-${itemWidth}px)`;
        } else if (currentIndex < 0) {
            carousel.style.transition = 'none';
            currentIndex = listItems.length - 3;
            carousel.style.transform = `translateX(-${(currentIndex + 1) * itemWidth}px)`;
        }
    });

    // Event listener voor venstergrootte wijziging
    window.addEventListener('resize', function () {
        itemWidth = listItems[0].clientWidth; // Update de breedte van het item
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(-${(currentIndex + 1) * itemWidth}px)`;
    });
});






