<?php
$mysqli = new mysqli("localhost", "root", "", "my_database1");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT id, title
FROM posts  WHERE id = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();   
$stmt->store_result();
$stmt->bind_result($id, $title);
$stmt->fetch();
$stmt->close();

echo "<table>"; 
echo "<tr>";
echo "<th>CustomerID</th>";
echo "<td>" . $id . "</td>";
echo "</tr>";
echo "<tr>";
echo "<th>CompanyName</th>";
echo "<td>" . $title . "</td>";
echo "</tr>";
echo "</table>";
?>