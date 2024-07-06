<?php
// Configuración de la base de datos
$servername = "sql10.freesqldatabase.com";
$username = "sql10717978";
$password = "wMW3DRWrzp";
$dbname = "sql10717978";
$port = 3306;

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir datos del formulario
$correo = $_POST['correo'];
$experiencia = $_POST['experiencia'];
$satisfaccion_calidad = $_POST['satisfaccion_calidad'];
$mejora_experiencia = $_POST['mejora_experiencia'];
$beneficios = $_POST['beneficios'];
$precio_justificado = $_POST['precio_justificado'];
$valor_agregado = $_POST['valor_agregado'];
$simbolo_dedicacion = $_POST['simbolo_dedicacion'];
$disenos_futuros = $_POST['disenos_futuros'];
$reunion_feedback = $_POST['reunion_feedback'];
$comentarios_adicionales = $_POST['comentarios_adicionales'];

// Preparar y ejecutar la consulta SQL
$sql = "INSERT INTO encuesta_af (correo, experiencia, satisfaccion_calidad, mejora_experiencia, beneficios, precio_justificado, valor_agregado, simbolo_dedicacion, disenos_futuros, reunion_feedback, comentarios_adicionales) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssssssss", $correo, $experiencia, $satisfaccion_calidad, $mejora_experiencia, $beneficios, $precio_justificado, $valor_agregado, $simbolo_dedicacion, $disenos_futuros, $reunion_feedback, $comentarios_adicionales);

if ($stmt->execute()) {
    echo "Encuesta enviada exitosamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>
