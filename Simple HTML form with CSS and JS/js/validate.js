function validate()
{
   var uid= document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
    
    if(uid === "" || pwd === "" )
        {
            document.getElementById("successMessage").style.visibility='hidden';
            document.getElementById("unameError").style.visibility='visible';
           
        }
            
    else{
        
       document.getElementById("unameError").style.visibility='hidden'; 
        document.getElementById("successMessage").innerHTML="Success! You have logged in as: "+ uid; document.getElementById("successMessage").style.visibility='visible';
    }
    
    return false;    
 
}