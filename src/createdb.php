<?php

	$servername ="127.0.0.1";
	$username = "root";
	$password =NULL;

	$handler = mysqli_connect($servername, $username, $password);

	if(!$handler){
		die("Connection failed: ".mysqli_connect_error());
		}

	echo "Connected successfully";

	mysqli_query($handler, 'CREATE DATABASE feedback');

	if(mysqli_query($handler,'CREATE DATABASE feedback')){
		echo "Database created successfully";
		}

		else {
		echo "Error creating database: ".mysqli_error($handler);
		}

?>