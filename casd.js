// ==UserScript==
// @name         CA Service Desk Access Key
// @namespace    ClaytonGOusley.com
// @version      1.0
// @description  Applies access keys and stylings to Service Desk
// @author       Clayton G. Ousley @ Clayton@ClaytonGOusley.com
// @match        servicedesk/*
// @grant        Free
// ==/UserScript==
 

//applies rules to all pages with "Request" in the page title (between the <title></title> HTML tags)
function request() {

    //assigns accesskey and styles to Status
    document.querySelector('select[title="Status *"]').accessKey = '=';
    document.getElementsByTagName("label")[5].innerText = "======Status======";
    document.getElementsByTagName("label")[5].style.color = "red";

    //assigns accesskey and styles to Resolution Area
    document.querySelector('textarea[title="Resolution"]').accessKey = '.';
    document.getElementsByTagName("label")[37].innerText = ".....Resolution.....";
    document.getElementsByTagName("label")[37].style.color = "red";

    //assigns accesskey and styles to Assignee
    document.querySelector('input[pdmqa="assignee"]').accessKey = ',';
    document.getElementsByTagName("label")[6].innerText = ",,,,,,,,Assignee,,,,,,,,";
    document.getElementsByTagName("label")[6].style.color = "red";
}

//applies rules to all pages with "Incident" in the page title (between the <title></title> HTML tags)
function incident() { 

    //assigns accesskey and styles to incident area
    document.querySelector('input[title="Incident Area"]').accessKey = '-';
    document.getElementsByTagName("label")[2].innerText = "-----Incident area-----";
    document.getElementsByTagName("label")[2].style.color = "red";
   

    //assigns accesskey and styles to Status
    document.querySelector('select[title="Status *"]').accessKey = '=';
    document.getElementsByTagName("label")[5].innerText = "======Status======";
    document.getElementsByTagName("label")[5].style.color = "red";

    //assigns accesskey and styles to Assignee
    document.querySelector('input[pdmqa="assignee"]').accessKey = ',';
    document.getElementsByTagName("label")[6].innerText = ",,,,,,,,Assignee,,,,,,,,";
    document.getElementsByTagName("label")[6].style.color = "red";

    //assigns accesskey and styles to Reason
    document.querySelector('input[title="Reason"]').accessKey = "[";
    document.getElementsByTagName("label")[19].innerText = "[[[[[[[Reason[[[[[[[";
    document.getElementsByTagName("label")[19].style.color = "red";

    //assigns accesskey and styles to Incident Type
    document.querySelector('select[title="Incident Type"]').accessKey = "]";
    document.getElementsByTagName("label")[24].innerText = "]]]]]]]]Incident Type]]]]]]]]";
    document.getElementsByTagName("label")[24].style.color = "red";

    //assigns accesskey and styles to Resolution Area
    document.querySelector('textarea[title="Resolution"]').accessKey = '.';
    document.getElementsByTagName("label")[37].innerText = ".....Resolution.....";
    document.getElementsByTagName("label")[37].style.color = "red";

}

 
//checks the page title after all the elements have loadwed on the page
document.addEventListener('DOMContentLoaded', function() {

     // checks the page title to see if "Incident" is present
    if (document.title.indexOf('Incident') != -1) {
      //If yes, applies the Incident page rules
      incident();
    }

    // checks the page title to see if "Request" is present
    else if (document.title.indexOf('Request') != -1){
        //If yes, applies the Request page rules
	request();
    }

}, false);
