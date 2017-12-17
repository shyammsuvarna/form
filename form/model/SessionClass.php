<?php
include 'define.php';
/**
 *SessionClass
  * @package database application
 * @author shyam
 * @copyright 2015
 * @version $1$
 * @access public
 */ 
class SessionClass{
	private $ga_sessionstatus = false;
	var $ga_user_info = array ();
	
	//constructor method
	function SessionClass ()
	{
		if (!isset($_SESSION))
			session_start (); 
		
		if (isset($_SESSION['username1']) && !empty($_SESSION['username1']))
		{
			$this->ga_sessionstatus = true;
			$this->ga_user_info['username1'] = $_SESSION['username1'];
		}
	}
	
	/**
	* validate validate_User () 
	* @param String $fs_username
	* @param String $fs_password
	* @param Resource $fs_dbConn
	* return $resStr;
	 */
	function validateUser ($fs_username, $fs_password, $fr_getServerId)
	{
		$ls_retStr = false; 
		if (!empty($fs_username) && !empty($fs_password) )
		{
			// query to validate user 
			$lr_query = mysql_query ("select username from form_element where username='".$fs_username."' and password='".$fs_password."' limit 1", $fr_getServerId);	
			if($lr_query && mysql_num_rows ($lr_query)){
				$la_getRow = mysql_fetch_array ($lr_query);
				$ls_retStr = $la_getRow['username'];
			}
			else
				$ls_retStr = "error: ".QUERY_NOT_SUCESS; 
		}
		return $ls_retStr;	
	}

	/**
	 * setUserInfo ();
	 * @param Integer $fi_uid
	 * @param Resource $fr_dbConn
	 * No return 
	 */
	function setUserInfo ($fi_userId, $fr_getServerId)
	{
		// query for getting user name
		$sql = "select username from users where userid= '".$fi_userId."'  limit 1";
		$lquery = mysql_query ($sql, $fr_getServerId);

		if ($lquery && mysql_num_rows ($lquery)) {
			$rows = mysql_fetch_assoc ($lquery);
			
			// set session
			$ls_username = $rows['username'];
			$_SESSION['username1']= $ls_username;
			$this->ga_sessionstatus= true;
			$this->ga_user_info['username1']=$_SESSION['username1'];
		}
		else 
			$str = "error: ".QUERY_NOT_SUCESS; 
	}

	//get session status
	function getSessionStatus ()
	{ 		
		return $this->ga_sessionstatus;
	}
	
	//get user info
	function getUserInfo ()
	{
		return $this->ga_user_info;
	}
	
	//unset session
	function unsetSession ()
	{
		// Getting session status 
		$this->ga_sessionstatus = false;
		$this->ga_user_info = array ();
		session_destroy ();
	}
}
?>