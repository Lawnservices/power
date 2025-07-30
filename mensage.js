window.onload = () =>{ 
const nuevo = document.createElement('p');
nuevo.textContent = 'THE BEST PRICES IN THE AREA.';
setTimeout(() => {
    document.getElementById('nuevomensaje').appendChild(nuevo);
}, 4000);

};