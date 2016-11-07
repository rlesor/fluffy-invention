function validateForm()
{
var pers=document.forms["reservasjon"]["res_antPers"].value;
var tidspunkt = document.forms["reservasjon"]["res_tidspunkt"].value;
var navn=document.forms["reservasjon"]["res_navn"].value;
var tidspunkt=document.forms["reservasjon"]["res_tidspunkt"].value;
var varighet=document.forms["reservasjon"]["res_varighet_min"].value;
var telefonnummer=document.forms["reservasjon"]["res_telefonnummer"].value;
var epost=document.forms["reservasjon"]["res_epost"].value;

if (pers==null || pers=="" || pers>=12 || tidspunkt = "" || varighet == "Varighet" || navn==null || navn=="" || telefonnummer == null|| telefonnummer=="" || epost ==null || epost=="" ) 
  {
  alert("Please Fill All Required Field");
  return false;
  }
}


function display_content(id) {
  document.getElementById(id).style.display = "block";

}
function hide_content(id) {
  document.getElementById(id).style.display = "none";
}
/*scroll til toppen*/
var timeOut;
function scrollToTop() {
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-50);
		timeOut=setTimeout("scrollToTop()",10);
	}
	else clearTimeout(timeOut);
}
