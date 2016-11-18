
document.addEventListener('DOMContentLoaded', function() {
    var save = document.getElementById('save');
    // onClick's logic below:
    save.addEventListener('click', function() {
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;
			localStorage["username"] = username;
			localStorage["password"] = password;
			document.getElementById("confirm").innerHTML = "Credentials set!";
    });
});
