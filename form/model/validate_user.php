<?php
session_start();

include 'define.php';
include 'DatabaseClass.php';
/**
* function validateInfo
* ls_info is path valid/not
*/
function validateInfo ()
{
	$ls_info = false;
	
	//check post element
	$fs_username= isset($_POST['username1']) ? $_POST['username1'] : '';
	$fs_password= isset($_POST['password1']) ? md5($_POST['password1']) : '';


	if (!empty($fs_username) && !empty($fs_password))
	{
		$go_databaseClass=new DatabaseClass ();
		$gr_getServerId = $go_databaseClass->getServerConn(HOSTNAME, UNAME, PASSWORD);
		$go_databaseClass->setdbConn (DB);
	
		if (!empty($fs_username) && !empty($fs_password) )
		{
			// query to validate user 
			$lr_query = mysql_query ("select username from form_element where username='".$fs_username."' and password='".$fs_password."' limit 1", $gr_getServerId);	
			if($lr_query && mysql_num_rows ($lr_query)){
				$la_getRow = mysql_fetch_array ($lr_query);
				$_SESSION = $la_getRow['username'];
				$ls_info = TRUE;
			}
			else
				$ls_info = FALSE; 
		}
	
	//return $ls_info;

		
	}
	return $ls_info;
	
}

?>