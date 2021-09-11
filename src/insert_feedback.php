<?php

	$servername ="127.0.0.1";
	$username = "root";
	$password =NULL;
	$dbname= "feedback";

	$handler = mysqli_connect($servername, $username, $password, $dbname);

	if(!$handler){
		die("Connection failed: ".mysqli_connect_error());
		}

	echo "Connected successfully";

	$sql_query ="INSERT INTO user_list (id, Time_stamp, uname, phone, email, feedback)
				VALUES('$id', $Time_stamp, $uname, $phone, $email, $feedback)";

?>