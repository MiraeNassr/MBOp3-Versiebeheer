<?php
include 'db_connect.php';

header('Content-Type: app;ication/json');

$sql = "SELECT id, price, description, location, image FROM houses";
$result = $conn->query($sql);

$houses = [];
if ($result->$result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $houses[] = $row;
    }
}
?>