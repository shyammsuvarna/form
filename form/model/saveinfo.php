<?php
include 'define.php';

var_dump($_REQUEST);
/**
 * function test_input 
 * @param string $fs_data 
 */
function test_input($fs_data)
{
	$fs_data = trim($fs_data);
	$fs_data = stripslashes($fs_data);
	$fs_data = htmlspecialchars($fs_data);
	return $fs_data;
}
?>

<?php

function saveInfo(){
	
// define variables and set to empty values
$gs_nameErr = $gs_lname1err = $gs_address1err = $gs_country1err = $gs_state1err = $gs_city1err= $gs_pin1err = $gs_phone1err = $gs_email1err = $gs_uname1err = $gs_password1err = $gs_password2err ="";
$gs_name1 = $gs_lname1 = $gs_address1 = $gs_country1 = $gs_state1 = $gs_city1= $gi_pin1 = $gi_phone1 = $gs_email1 = $gs_uname1 = $gs_password1 = $gs_password2 =  "";

if (empty ($_POST["firstname"])) {
	$gs_nameErr = "Name is required";
}else{
	$gs_name1 = test_input ($_POST["firstname"]);
	
	// check if name only contains letters and whitespace
	if (!preg_match("/^[a-zA-Z ]*$/",$gs_name1)) {
		$gs_nameErr = "Only letters and white space allowed";
	}
}

if (empty ($_POST["lname"])) {
     $gs_lname1err = "last Name is required";
}else{
	$gs_lname1 = test_input($_POST["lname"]);
	// check if name only contains letters and whitespace
	if (!preg_match("/^[a-zA-Z ]*$/",$gs_name1)) {
		$gs_lname1err = "Only letters and white space allowed";
	}
}

$gs_address1 = test_input($_POST["address"]);
   
if (empty($_POST["country"])) {
	$gs_country1err = "country is required";
}else{
	 $gs_country1 = test_input($_POST["country"]);
	// check if name only contains letters and whitespace
	if (!preg_match("/^[a-zA-Z ]*$/",$gs_country1)) {
		$gs_country1err = "Only letters and white space allowed";
	}
}

$gs_state1 = test_input($_POST["state"]);
$gs_city1 = test_input($_POST["city"]);

if (empty($_POST["pin"])) {
	$gs_pin1err = "pin is required";
}else{
	$gi_pin1 = test_input($_POST["pin"]);
	// check if name only contains letters and whitespace
	if (!preg_match("/^[0-9 ]*$/",$gi_pin1)) {
		$gs_pin1err = "Only numbers allowed";
	}
}

if (empty($_POST["phone"])) {
	$gs_phone1err = "last Name is required";
	}else{
	$gi_phone1 = test_input($_POST["phone"]);
	// check if name only contains letters and whitespace
	if (!preg_match("/^[0-9 ]*$/",$gi_phone1)) {
		$gs_phone1err = "Only numbers allowed";
	}
}

if (empty($_POST["email"])) {
	$gs_email1err = "last Name is required";
	}else{
	$gs_email1 = test_input($_POST["email"]);
	// check if name only contains letters and whitespace
	if (!filter_var($gs_email1, FILTER_VALIDATE_EMAIL)) {
		$gs_email1err = "Invalid email format"; 
	}
}


if (empty($_POST["uname"])) {
	$gs_uname1err = "last Name is required";
	}else{
	$gs_uname1 = test_input($_POST["uname"]);
	// check if name only contains letters and whitespace
	if (!preg_match("/^[a-zA-Z ]*$/",$gs_uname1)) {
		$gs_uname1err = "Only letters and white space allowed";
	}
}

if (empty($_POST["password1"])) {
	$gs_password1err = "last Name is required";
}else{
	$gs_password1 = test_input($_POST["password1"]);
	$gs_passwordmd5=md5($gs_password1);
	// check if name only contains letters and whitespace
	if (!preg_match("/^(?=.*[!@#$%^&*\(\)\-\=\+\-\_\|\/\.\,\>\<\`\~\'\"\;\:\/\?])(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*\(\)\-\=\+\-\_\|\/\.\,\>\<\`\~\'\"\;\:\/\?]{6,}$/",$gs_password1)) {
		$gs_password1err = "password must have one or more capital letter,digits and special characters";
	}
}

if (empty($_POST["password2"])) {
	$gs_password2err = "last Name is required";
}else{
	$gs_password2 = test_input($_POST["password2"]);
	if($gs_password2!=$gs_password1err)
		$gs_password2err = "password doesnot match";
		// check if name only contains letters and whitespace
	if (!preg_match("/^[a-zA-Z0-9 ]*$/",$gs_password2)) {
		$gs_password2err = "password must have one or more capital letter,digits and special characters";
	}
}

	
	
if(empty($gs_nameErr) && empty($gs_email1err) && empty($gs_uname1err)&& empty($gs_password1err) ){

	$gr_connection = mysql_connect(HOSTNAME,UNAME,PASSWORD);
	$gb_db = mysql_select_db( DB,$gr_connection);
	
	if(!$gr_connection){
	echo SE_CONNECT_ERROR; 
	exit;
	}
	if(!$gb_db){
	echo DB_CONNECT_ERROR; 
	exit;
	}

	$gs_sql=" INSERT INTO form_element VALUES('','$gs_name1','$gs_lname1','$gs_address1','$gs_country1','$gs_state1','$gs_city1','$gi_pin1','$gi_phone1','$gs_email1','$gs_uname1','$gs_passwordmd5')";
	$gs_query = mysql_query($gs_sql) or die(mysql_error());

	if($gs_query)
		return "success";
	//echo "Form Submitted succesfully";
	else
		return "notsuccess";
	//echo "username/email already exist";

}else{
	return "notsuccess";
	//echo "please enter all required fields properly";
	//echo "error".$gs_nameErr;
	//echo "error".$gs_email1err;
	//echo "error".$gs_uname1err;
	//echo "error".$gs_password1err;
	//echo "error".$gs_password2err;
}

}
?>