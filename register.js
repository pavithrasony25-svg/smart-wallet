function register(){
    const username=document.getElementById("uname").value 
    const password=document.getElementById("pswd").value

    localStorage.setItem("uname",username)
    localStorage.setItem("pswd",password)
        alert("Registration successful!")
        window.location.href="login.html"
}