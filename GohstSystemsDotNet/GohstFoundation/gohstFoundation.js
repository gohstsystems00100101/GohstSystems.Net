function showAbout()
{
 //alert("Showing about");
 showDiv("about");
 hideDiv("projects");
 hideDiv("policies");
 hideDiv("supportUs");
}

function showProjects()
{
 //alert("Showing projects");
 hideDiv("about");
 showDiv("projects");
 hideDiv("policies");
 hideDiv("supportUs");
}

function showPolicies()
{
 //alert("Showing policies");
 hideDiv("about");
 hideDiv("projects");
 showDiv("policies");
 hideDiv("supportUs");
}

function showSupportUs()
{
 //alert("Showing partner up");
 hideDiv("about");
 hideDiv("projects");
 hideDiv("policies");
 showDiv("supportUs");
}


function showDiv(div) 
{
  var x = document.getElementById(div);
  x.style.display = "block";
}

function hideDiv(div)
{
  var x = document.getElementById(div);
  x.style.display = "none";
}
