function validation(){

    var userna = document.getElementById('userna').value;
    var passwordd = document.getElementById('passwordd').value;



    if(userna == ""){
        document.getElementById('username2').innerHTML =" ** Please fill the username field";
        return false;
    }
    if(passwordd == ""){
        document.getElementById('password2').innerHTML =" ** Please Enter Password";
        return false;
    }

}
