        // Ejemplo 1: Mostrar mensaje al copiar texto
        function mostrarMensajeCopia() {
            document.getElementById("mensajeCopia").innerHTML = "¡Copiaste el texto!";
        }

        // Ejemplo 2: Mostrar mensaje al cortar texto
        function mostrarMensajeCorte() {
            document.getElementById("mensajeCorte").innerHTML = "¡Cortaste el texto!";
        }

        // Ejemplo 3: Agrandar y reducir la imagen
        function agrandarImagen(x) {
            x.style.transform = "scale(2)";
        }

        function reducirImagen(x) {
            x.style.transform = "scale(1)";
        }