<?php
//if($gs_id !=="")
$gs_id=isset($_REQUEST['id'])?$_REQUEST['id']:'';
if($gs_id =="")
	$gs_id=isset($_REQUEST['submit'])?$_REQUEST['submit']:$gs_id;
//var_dump($_REQUEST);

//echo $gs_id;
//echo "hii";
switch($gs_id){
case "login":
	//echo $gs_id;
	include '../model/validate_user.php'; 
	$ls_info = validateInfo();
	if($ls_info === TRUE)
		header("Location:../view/home.html");
	else
		echo "invalid user name/password";
	break;

case "submit";
	include '../model/saveinfo.php'; 
	$ls_info = saveInfo();
	echo $ls_info;
	
	break;
}
?>