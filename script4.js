function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    const accounts = [
        { user: "J.West", pass: "aqsdf01x" },
        { user: "H.Milk", pass: "fdA421s4" },
        { user: "D.Morgan", pass: "Tydncf5" }
    ];

    const valid = accounts.find(acc => 
        acc.user === username && acc.pass === password
    );

    if (valid) {
        window.location.href = "index2.html"; 
    } else {
        error.textContent = "Accès refusé";
    }
}