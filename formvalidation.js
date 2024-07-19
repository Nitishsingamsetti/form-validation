function formValidation(){
    var username=document.forms["myForm"]["username"].value;

    var email=document.forms["myForm"]["email"].value;
    var password=document.forms["myForm"]["password"].value;
    var confirmPassword=document.forms["myForm"]["confirmPassword"].value;

    //REGEX

    var usernameRegex=/^[a-zA-Z0-9]{3,}$/;

    var emailRegex=/^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/;

    var passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,8}$/;

    if(!usernameRegex.test(username)){
        alert("invalid username")
        return false
    }

    if(!emailRegex.test(email)){
        alert("invalid email")
        return false
    }

    if(!passwordRegex.test(password)){
        alert("invalid password")
        return false
    }

    if(password!== confirmPassword){
        alert("password doesnt match")
        return false
    }

    else{
        alert("form submitted succesfully")
        return true
    }




}

