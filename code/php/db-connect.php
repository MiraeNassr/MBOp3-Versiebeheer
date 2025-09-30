<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "homefinder_db";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    //die("FATAL ERROR: De verbinding met de database is mislukt. Controleer de inloggegevens in db_connect.php. Fout: " . $conn->connect_error);
    die("Database Connection Failed. Check credentials in db_connect.php.");
}
