<?php

include '../php/db-connect.php';

header('Content-Type: application/json');
if (empty($_REQUEST)) {
    http_response_code(400);
    echo json_encode(["erorr" => "Geen zoekparameters ontvangen."]);
    exit();
}
if (!isset($_REQUEST['postcode']) || empty($_REQUEST['postcode'])) {
    http_response_code(400);
    echo json_encode(["error" => "postcode is vereist."]);
    exit();
}
;

$postcode = $_REQUEST['postcode'];
// we use % hier for search the all location.....
$search_term = "%" . trim($postcode) . "%";

//Query: filters unmarked homes and filters by location (zip code)
$sql = "SELECT id, image, price, description, location FROM houses
WHERE status = 0 AND location LIKE ?";

// we use Prepared Statement 
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $search_term);
$stmt->execute();
$result = $stmt->get_result();

$houses = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $houses[] = $row;
    }
}

echo json_encode($houses);

$stmt->close();
$conn->close();

