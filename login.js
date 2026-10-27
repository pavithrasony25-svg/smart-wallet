function login(){
    const username=document.getElementById("uname").value
    const password=document.getElementById("pswd").value
    console.log(username);

  const saveduname=localStorage.getItem("uname")
    const savedpswd=localStorage.getItem("pswd")
 if(username != saveduname){

        alert("User not registered. Please register")

    }
    else if(password != savedpswd){

        alert("Wrong password")

    }
    else{

        alert("Login successful")
        window.location.href = "home.html"

    }
}