//hoja de js para la compra de tickets

function updateTotal() {
    const cantidadInput = document.getElementById('cantidad');
    const categoriaSelect = document.getElementById('categoria');
    const totalSpan = document.getElementById('total');

    const cantidad = parseInt(cantidadInput.value) || 0;
    const categoria = categoriaSelect.value;

    let descuento = 0;
    if (categoria === 'Estudiante') {
      descuento = 0.8; // 80% de descuento para estudiantes
    } else if (categoria === 'Trainee') {
      descuento = 0.5; // 50% de descuento para trainees
    } else if (categoria === 'Junior') {
      descuento = 0.15; // 15% de descuento para juniors
    }

    const precioUnitario = 200; // Precio unitario de una entrada
    const precioTotal = cantidad * precioUnitario * (1 - descuento);

    totalSpan.textContent = precioTotal.toFixed(2); // Mostrar el total con 2 decimales
  }

  function showSummary() {
    const totalSpan = document.getElementById('total');
    const precioTotal = totalSpan.textContent;

    alert('Resumen de compra\nTotal a pagar: $' + precioTotal);
  }