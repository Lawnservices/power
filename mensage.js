window.onload = () =>{ 
const nuevo = document.createElement('p');
nuevo.textContent = 'THE BEST PRICES IN THE AREA.';
nuevo.classList.add('fade-in');
setTimeout(() => {
    document.getElementById('nuevomensaje').appendChild(nuevo);

     
    void nuevo.offsetWidth;
    nuevo.classList.add('visible');


}, 4000);

};