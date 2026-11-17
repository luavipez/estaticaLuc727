function enviarFormulario(event) {
event.preventDefault();
try {
const nombre = document.getElementById('nombre').value;
if (!nombre || !document.getElementById('email').value || !document.getElementById('telefono').value) {
alert('Por favor, completa todos los campos requeridos.');
return;
}
const email = document.getElementById('email').value;
const telefono = document.getElementById('telefono').value;
const servicio = document.getElementById('servicio').options[document.getElementById('servicio').selectedIndex].text;
const confirmacion = document.getElementById('mensajeConfirmacion');
confirmacion.style.display = 'block';
confirmacion.textContent = `✅¡Gracias, ${nombre}! Hemos recibido tu solicitud para "${servicio}". Nos pondremos en contacto contigo a la brevedad.`;
document.getElementById('pedidoForm').reset();
} catch (error) {
console.error('Error al enviar el formulario:', error);     
}}
