<?php
try {

    $usuario = "epiz_24037000";
    $contraseña = "jJtAMB0rBA";
    $conn = new PDO('mysql:host=sql202.epizy.com;dbname=epiz_24037000_database', $usuario, $contraseña);
    $output = array();
    $query = 
    "SELECT User.idUser, User.name, Team.team_name, 
    SUM(User_Game.hours_played) as hours_played
    FROM Team
    INNER JOIN User
    ON Team.idTeam = User.idTeam
    INNER JOIN User_Game
    ON User.idUser = User_Game.User_idUser
    GROUP BY User.idUser, User.name, Team.team_name
    ";
    foreach($conn->query($query) as $row) {
        $output[] = $row;
    }
    echo json_encode($output);
} catch (PDOException $e) {
    echo "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>