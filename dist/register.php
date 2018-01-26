<?php
	header("content-type:text/html;charset='utf-8'");
	$stuName = $_POST["name"];
	$stuPhone = $_POST["phone"];
	$stuPassword = $_POST["password"];

	$con = mysql_connect("localhost", "root", 123456);

	mysql_select_db("5lux");

	$sql = "INSERT INTO user VALUES('$stuName',$stuPhone,'$stuPassword');";

	$is_ok = mysql_query($sql);

	if($is_ok == true){
		echo "<script>alert(\"注册成功\");</script>";
	}else{
		echo "<script>alert(\"注册失败\");</script>";
	}

 ?>