<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = htmlspecialchars(trim($_POST['nombre']));
    $correo = filter_var(trim($_POST['correo']), FILTER_SANITIZE_EMAIL);
    $telefono = htmlspecialchars(trim($_POST['telefono']));
    $puesto = htmlspecialchars(trim($_POST['puesto']));
    $mensaje = htmlspecialchars(trim($_POST['mensaje']));

    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        echo "Correo inválido.";
        exit;
    }

    $para = "morelkevin232@gmail.com";
    $asunto = "Solicitud de trabajo de $nombre";

    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Correo: $correo\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Puesto deseado: $puesto\n";
    $cuerpo .= "Mensaje adicional:\n$mensaje\n";

    $cabeceras = "From: $correo\r\n";
    $cabeceras .= "Reply-To: $correo\r\n";
    $cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($para, $asunto, $cuerpo, $cabeceras)) {
        echo "Gracias por tu solicitud, te contactaremos pronto.";
    } else {
        echo "Hubo un error al enviar tu solicitud. Intenta nuevamente.";
    }
}
?>

