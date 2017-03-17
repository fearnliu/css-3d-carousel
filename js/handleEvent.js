
const carouselPanel = document.querySelector('.carousel-panel');
const controlPanel  = document.querySelector('.control-panel');

let rotationalAngle = 0;

carouselPanel.style.transform = `rotateY(${rotationalAngle}deg)`;

console.log(carouselPanel.style.transform);

controlPanel.addEventListener('click', (event) => {
    if (event.target.dataset.direction === 'prev') {
        rotationalAngle -= 60;
        carouselPanel.style.transform = `rotateY(${rotationalAngle}deg)`;
    }

    if (event.target.dataset.direction === 'next') {
        rotationalAngle += 60;
        carouselPanel.style.transform = `rotateY(${rotationalAngle}deg)`;
    }
}, false)
