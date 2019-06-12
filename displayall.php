<?php
try {
    $variable = file_get_contents("php://input");
    $request = json_decode($variable);
    $idUser = $request->newName;
    $usuario = "epiz_24037000";
    $contraseña = "jJtAMB0rBA";
    $conn = new PDO('mysql:host=sql202.epizy.com;dbname=epiz_24037000_database', $usuario, $contraseña);
    $output = array();
    $query = 
    "SELECT User.idUser, User.name AS un, User_Game.hours_played, Game.name AS gn, Game.main_category
    FROM User
    INNER JOIN User_Game
    ON User.idUser = User_Game.User_idUser
    INNER JOIN Game
    ON User_Game.Game_idGame = Game.idGame
    WHERE User.idUser = " . $idUser;
    foreach($conn->query($query) as $row) {
        $output[] = $row;
    }
    echo json_encode($output);
} catch (PDOException $e) {
    echo "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>
