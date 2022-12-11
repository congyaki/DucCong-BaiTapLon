function validateForm(){
    let user = document.getElementById("emailForm").value;
    let pass = document.getElementById("passwordForm").value;
    var users = ["cong@gmail.com", "hieu@gmail.com", "hoa@gmail.com"];
    var pasws = ["congcong", "hieuhieu", "hoahoa"];

    if(user == "" || pass == ""){
        alert("Mời bạn nhập đầy đủ thông tin");
    }
    else {
        for(var i = 0; i < users.length; i++){
            if(user == users[i] && pass == pasws[i]){
                alert("Đăng nhập thành công");
                break;
            }
            while(i == ((users.length)-1)){
                alert("Đăng nhập thất bại");
                break;
            }
        }
        
    }
}
