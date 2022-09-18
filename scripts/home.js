let busNumber = document.querySelector('.bus-number');
let routeNumber = document.querySelector('.route-number');
let busRoute = document.querySelector('.bus-route');
let barOne = document.querySelector('.one');
let barTwo = document.querySelector('.two');
let barThree = document.querySelector('.three');

busNumber.addEventListener("click", () => {
    busNumber.classList.remove("bg-white");
    busNumber.classList.add("bg-red");
    routeNumber.classList.remove("bg-red");
    routeNumber.classList.add("bg-white");
    busRoute.classList.remove("bg-red");
    busRoute.classList.add("bg-white");
    barOne.style.display = 'block';
    barTwo.style.display = 'none';
    barThree.style.display = 'none';
});

routeNumber.addEventListener('click', () => {
    busNumber.classList.remove('bg-red');
    busNumber.classList.add('bg-white');
    routeNumber.classList.remove('bg-white');
    routeNumber.classList.add('bg-red');
    busRoute.classList.remove("bg-red");
    busRoute.classList.add("bg-white");
    barOne.style.display = 'none';
    barTwo.style.display = 'block';
    barThree.style.display = 'none';
});

busRoute.addEventListener('click', () => {
    busNumber.classList.remove('bg-red');
    busNumber.classList.add('bg-white');
    routeNumber.classList.remove('bg-red');
    routeNumber.classList.add('bg-white');
    busRoute.classList.remove("bg-white");
    busRoute.classList.add("bg-red");
    barOne.style.display = 'none';
    barTwo.style.display = 'none';
    barThree.style.display = 'block';
});