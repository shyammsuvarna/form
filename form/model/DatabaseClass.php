<?php
/**
 *DatabaseClass
  * @package database application
 * @author shyam
 * @copyright 2015
 * @version $1$
 * @access public
 */ 
class DatabaseClass {   
	var $lr_getServerId;
	
	/**
	* setServerConn ();
	* @param String $fs_hostname
	* @param String @fs_username
	* @param String @fs_password
	* return Rosource $this->lr_getServerId
	*/
    public function getServerConn($fs_hostname, $fs_username, $fs_password)
	{

        $this->lr_getServerId = mysql_connect ($fs_hostname, $fs_username, $fs_password);
		return $this->lr_getServerId;
	}
   
	/**
	* setdbConn ();
	* @param String $fs_database
	* return Boolean True/False
	*/
	public function setdbConn($fs_database)
	{		
	
        if (mysql_select_db ($fs_database, $this->lr_getServerId))
			return true;
		else
			return false;
    }
}
?>