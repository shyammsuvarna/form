
/**
 * function checkName 
 * @param string fs_getId1
 * @param string fs_errId1
 */
function checkName (fs_getId1,fs_errId1) {
	var ls_name = document.getElementById (fs_getId1).value;
	if (ls_name==""){
		document.getElementById(fs_errId1).innerHTML = 'name cannot be empty fields';
		return false;
	}else
		document.getElementById(fs_errId1).innerHTML = '';

	var ls_checkName = /^[A-Za-z ]{1,50}$/;
	if (!ls_checkName.test(ls_name)) {
		document.getElementById(fs_errId1).innerHTML = 'name cannot have numbers/special chars'; //'<img src=/form/img1.jpg>'
		return false;
	}else{
		document.getElementById(fs_errId1).innerHTML = '';
		}
}
/**
 * function checkLName 
 * @param string fs_getId2
 * @param string fs_errId2
 */
function checkLName (fs_getId2,fs_errId2) {
	var ls_lname = document.getElementById (fs_getId2).value;
	var ls_checkName = /^[A-Za-z ]{0,50}$/;
	if (!ls_checkName.test(ls_lname)) {
		document.getElementById(fs_errId2).innerHTML = 'cannot have numbers/special chars';
		return false;
	}else
		document.getElementById(fs_errId2).innerHTML = '';
}

/**
 * function checkPin 
 * @param string fs_getId3
 * @param string fs_errId3
 */
 function checkPin (fs_getId3,fs_errId3) {
	var ls_pin = document.getElementById(fs_getId3).value;
		if (ls_pin=="") {
		document.getElementById(fs_errId3).innerHTML = 'empty fields';
		//return false;
	}else
		document.getElementById(fs_errId3).innerHTML = '';

	var ls_ck_pin = /^[0-9]{0,6}$/;
	if (!ls_ck_pin.test(ls_pin)) {
		document.getElementById(fs_errId3).innerHTML = 'minimum 6 digits';
		//return false;
	}else
		document.getElementById(fs_errId3).innerHTML = '';
}
/**
 * function checkPhone 
 * @param string fs_getId4
 * @param string fs_errId4
 */
function checkPhone (fs_getId4,fs_errId4) {
	var ls_phone = document.getElementById(fs_getId4).value;

		if (ls_phone=="") {
		document.getElementById(fs_errId4).innerHTML = 'cannot be empty';
		//return false;
	}else
		document.getElementById(fs_errId4).innerHTML = '';

	var ls_ck_phone = /^[0-9]{0,10}$/;
	if (!ls_ck_phone.test(ls_phone)) {
		document.getElementById(fs_errId4).innerHTML = 'minimum 10 digits';
		//return false;
	}else
		document.getElementById(fs_errId4).innerHTML = '';
}

/**
 * function checkUserName 
 * @param string fs_getId5
 * @param string fs_errId5
 */
function checkUserName (fs_getId5,fs_errId5) {
	var ls_uname = document.getElementById(fs_getId5).value;
		if (ls_uname=="") {
		document.getElementById(fs_errId5).innerHTML = 'user name cannot be empty';
		return false;
	}else
	document.getElementById(fs_errId5).innerHTML = '';

	var ls_checkName = /^[A-Za-z ]{1,50}$/;
	if (!ls_checkName.test(ls_uname)) {
		document.getElementById(fs_errId5).innerHTML = ' user name cannot contain numbers/special chars';
		return false;
	}else
	document.getElementById(fs_errId5).innerHTML = '';
}
/**
 * function checkEmail 
 * @param string fs_getId6
 * @param string fs_errId6
 */
function checkEmail (fs_getId6,fs_errId6) {
	var ls_email = document.getElementById(fs_getId6).value;
		if (ls_email=="") {
		document.getElementById(fs_errId6).innerHTML = ' email cannot be empty';
		return false;
	}else
		document.getElementById(fs_errId6).innerHTML = '';

	var ls_checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,50})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i ;
	if (!ls_checkEmail.test(ls_email)) {
		document.getElementById(fs_errId6).innerHTML = 'invalid email/ email empty';
		return false;
	}else
		document.getElementById(fs_errId6).innerHTML = '';
}
/**
 * function checkPass 
 * @param string fs_getId7
 * @param string fs_errId7
 */
function checkPass (fs_getId7,fs_errId7) {
	var ls_password = document.getElementById(fs_getId7).value;

	if (ls_password=="") {
		document.getElementById(fs_errId7).innerHTML = 'password cannot be empty';
		return false;
	}else
		document.getElementById(fs_errId7).innerHTML = '';

	var ls_checkPassword = (/^(?=.*[!@#$%^&*\(\)\-\=\+\-\_\|\/\.\,\>\<\`\~\'\"\;\:\/\?])(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*\(\)\-\=\+\-\_\|\/\.\,\>\<\`\~\'\"\;\:\/\?]{6,}$/);///^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
//(/^(?=.*\d)()
	if (!ls_checkPassword.test(ls_password)) {
		document.getElementById(fs_errId7).innerHTML = 'password must have one or more capital letter,digits and special characters';
		return false;
	}else
		document.getElementById(fs_errId7).innerHTML = '';
}
/**
 * function checkPass2 
 * @param string fs_getId7
 * @param string fs_getId8
 * @param string fs_errId8
 */
function checkPass2 (fs_getId7,fs_getId8,fs_errId8) {
	var ls_password = document.getElementById(fs_getId7).value;
	var ls_password2 = document.getElementById(fs_getId8).value;

	if (ls_password2=="") {
		document.getElementById(fs_errId8).innerHTML = 'password cannot be empty';
		return false;
	}else
		document.getElementById(fs_errId8).innerHTML = '';

	if(ls_password === ls_password2){
	 	document.getElementById(fs_errId8).innerHTML = '';
	}else{
		document.getElementById(fs_errId8).innerHTML = ' password doesnot match';
		return false;
	}
}
/**
 * function callAll 
 * @param string fs_getId 1-10 
 * @param string fs_errId1 1-10
 */
function callAll (fs_getId1,fs_errId1,fs_getId2,fs_errId2,fs_getId3,fs_errId3,fs_getId4,fs_errId4,fs_getId5,fs_errId5,fs_getId6,fs_errId6,fs_getId7,fs_errId7,fs_getId8,fs_errId8,fs_getId9,fs_errId9,fs_getId10,fs_errId10) {
ls_errors = true; 

ls_errors=checkName (fs_getId1,fs_errId1);
if(ls_errors === false)
	ls_errors = false;
ls_errors=checkLName (fs_getId2,fs_errId2);
if(ls_errors===false)
	ls_errors = false;
ls_errors=checkPin (fs_getId3,fs_errId3);
if(ls_errors===false)
	ls_errors =false;
ls_errors=checkPhone (fs_getId4,fs_errId4);
if(ls_errors===false)
	ls_errors =false;
ls_errors=checkLName (fs_getId9,fs_errId9);
if(ls_errors===false)
	ls_errors =false;
ls_errors=checkLName (fs_getId10,fs_errId10);
if(ls_errors===false)
	ls_errors =false;
ls_errors=checkEmail (fs_getId6,fs_errId6);
if(ls_errors===false)
	ls_errors =false;
ls_errors=checkUserName (fs_getId5,fs_errId5);
if(ls_errors===false)
	ls_errors =false;
ls_errors=checkPass (fs_getId7,fs_errId7);
if(ls_errors===false)
	ls_errors =false;
ls_errors=checkPass2 (fs_getId7,fs_getId8,fs_errId8);
if(ls_errors===false)
	ls_errors =false;

return ls_errors;
}
/**
 * function myFunction 
 * @param string fs_getId 1-11 
 * @param string fs_errId1 1-10
 */
function myFunction(fs_getId1,fs_errId1,fs_getId2,fs_errId2,fs_getId3,fs_errId3,fs_getId4,fs_errId4,fs_getId5,fs_errId5,fs_getId6,fs_errId6,fs_getId7,fs_errId7,fs_getId8,fs_errId8,fs_getId9,fs_errId9,fs_getId10,fs_errId10,fs_getId11,fs_btn,fs_getId12) {
	var ls_name = document.getElementById(fs_getId1).value;
	//alert (ls_name);
	var ls_lname = document.getElementById(fs_getId2).value;
	var ls_address = document.getElementById(fs_getId12).value;
	var ls_country = document.getElementById(fs_getId11).value;
	var ls_state = document.getElementById(fs_getId10).value;
	var ls_city = document.getElementById(fs_getId9).value;
	var ls_pin = document.getElementById(fs_getId3).value;
	var ls_phone = document.getElementById(fs_getId4).value;
	var ls_email = document.getElementById(fs_getId6).value;
	var ls_uname = document.getElementById(fs_getId5).value;
	var ls_password = document.getElementById(fs_getId7).value;
	var ls_passwordc = document.getElementById(fs_getId8).value;
	var ls_btn = document.getElementById(fs_btn).value;
	var xmlhttp;
	ls_errors=callAll(fs_getId1,fs_errId1,fs_getId2,fs_errId2,fs_getId3,fs_errId3,fs_getId4,fs_errId4,fs_getId5,fs_errId5,fs_getId6,fs_errId6,fs_getId7,fs_errId7,fs_getId8,fs_errId8,fs_getId9,fs_errId9,fs_getId10,fs_errId10);
	 if (ls_errors === false) {
	  return false;
	 }
	else{
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById("myDivId").innerHTML=xmlhttp.responseText;
			}
		  }
		xmlhttp.open("POST","/form/controller/mainController.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("firstname="+ls_name+"&lname="+ls_lname+"&address="+ls_address+"&country="+ls_country+"&state="+ls_state+"&city="+ls_city+"&pin="+ls_pin+"&phone="+ls_phone+"&email="+ls_email+"&uname="+ls_uname+"&password1="+ls_password+"&password2="+ls_passwordc+"&submit="+ls_btn);
	}
		
}
		
/**
* callAjax ();
* @param String name
* @param String password 
* @param String id
*return response
*/

function callAjax()
{
	var ls_name = document.getElementById("username").value;
	var ls_password = document.getElementById("password").value;
	var ls_id = document.getElementById("login").value;
	//alert(name);
	//alert(password);
	var xmlhttp;
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("POST","/form/controller/mainController.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("username1="+ls_name+"&password1="+ls_password+"&id="+ls_id);
}
