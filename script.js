document.getElementById('location-button').addEventListener('click', function() {
    // Redirige a Google Maps cuando se hace clic en el botón
    window.open('https://maps.app.goo.gl/34e74gkT4mcoRmXY7', '_blank');
});

document.getElementById('reception-button').addEventListener('click', function() {
    window.open('https://maps.app.goo.gl/SFcVZED5keeuu59X9', '_blank');
});

document.getElementById('confirmation-button').addEventListener('click', function() {
    const phoneNumber = '50250617744'; // Reemplaza con el número correcto
    const message = 'Hola, confirmo mi asistencia al evento.';

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');
});
