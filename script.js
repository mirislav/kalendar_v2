function login() {
    const users = [
        { email: "necum@gmail.com", password: "heslo123" },
        { email: "coe@gmail.com", password: "omg1222" },
        { email: "nenee@gmail.com", password: "sem420" },
    ];

    let userEmail = document.getElementById("emailIn").value;
    let userPassword = document.getElementById("passwordIn").value;
    let userLogin = userEmail + '.' + userPassword;

    for (let i = 0; i < users.length; i++) {
        if (userEmail === users[i].email && userPassword === users[i].password) {
            window.location.href = "index2.html";
            return;
        }
    }

    alert("Chybný email nebo heslo.");
}

