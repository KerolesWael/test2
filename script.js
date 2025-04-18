document.addEventListener("DOMContentLoaded", function () {
    var togglePassword = document.getElementById("togglePassword");
    var passwordField = document.getElementById("password");

    if (togglePassword && passwordField) {
        togglePassword.addEventListener("click", function () {
            if (passwordField.type === "password") {
                passwordField.type = "text";
                togglePassword.classList.remove("fa-eye");
                togglePassword.classList.add("fa-eye-slash");
            } else {
                passwordField.type = "password";
                togglePassword.classList.remove("fa-eye-slash");
                togglePassword.classList.add("fa-eye");
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // ✅ تسجيل المستخدم

    var registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            var fullName = document.getElementById("fullName").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            var user = {
                fullName: fullName,
                email: email,
                password: password
            };

            localStorage.setItem("user", JSON.stringify(user));

            alert("تم التسجيل بنجاح!");
            window.location.href = "login.html";
        });
    }

    // ✅ تسجيل الدخول
    var loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            var storedUser = JSON.parse(localStorage.getItem("user"));

            if (storedUser && storedUser.email === email && storedUser.password === password) {
                alert("تم تسجيل الدخول بنجاح!");
                window.location.href = "dashboard.html";
            } else {
                alert("البريد الإلكتروني أو كلمة المرور غير صحيحة!");
            }
        });
    }

    // ✅ تسجيل الخروج
    var logoutButton = document.getElementById("logout");

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("user");
            alert("تم تسجيل الخروج بنجاح!");
            window.location.href = "login.html";
        });
    }
});
