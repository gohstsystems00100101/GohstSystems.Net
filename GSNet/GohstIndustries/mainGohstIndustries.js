function showAbout()
{
 //alert("Showing about");
 showDiv("about");
 hideDiv("products");
 hideDiv("policies");
 hideDiv("partnerUp");
}

function showProducts()
{
 //alert("Showing products");
 hideDiv("about");
 showDiv("products");
 hideDiv("policies");
 hideDiv("partnerUp");
}

function showPolicies()
{
 //alert("Showing policies");
 hideDiv("about");
 hideDiv("products");
 showDiv("policies");
 hideDiv("partnerUp");
}

function showPartnerUp()
{
 //alert("Showing partner up");
 hideDiv("about");
 hideDiv("products");
 hideDiv("policies");
 showDiv("partnerUp");
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

document.getElementById("portfolioTabButton").addEventListener("click", function(){
    showDiv("portfolioDiv");
    hideDiv("classroomDiv");
    hideDiv("dormDiv");
    hideDiv("shopDiv");
});
