var images = 
["myfam.jpg","Mehul.jpg","Unnati.jpg","Shaan.jpg","Sanya.jpg"]

var names =
["Family Book","Mehul Patel (Dad)","Unnati Patel (Mom)","Shaan Patel (Brother)","Sanya Patel (The Creator)"]

var i =0;
var number_of_family_members=5;
function update()
{    
    i++;    
    
    if(i > number_of_family_members)
    {       
        i=0;
    }
    
    var updateImages = images[i];
    var updateNames = names[i];
    document.getElementById("fm_pic").src=updateImages;
    document.getElementById("f_m_name").innerHTML=updateNames;
}
