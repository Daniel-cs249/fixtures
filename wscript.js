function login()
{
    

    const username=document.getElementById("username").value
    const password=document.getElementById("password").value
    
    if(!username && !password)
    {
        alert("enter the folowing details")
        return false
    }
    if(username=="danielcs" && password=="ishowlag")
    {
        window.location.href="http://127.0.0.1:5500/fixtures/namentry.html"
    }
    else{
        alert("invalid username or password")
    }
    
}


