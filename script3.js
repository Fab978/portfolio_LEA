function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

  
    const accounts = [
        { user: "J.Johnson", pass: "Hfkgcsx5" },
        { user: "J.Hollman", pass: "Dlcndcg1" },
        { user: "B.Anderson", pass: "Bvgjlmd8" },
        { user: "Sheriff", pass: "Sheriff" }
    ];

    const valid = accounts.find(acc => 
        acc.user === username && acc.pass === password
    );

    if (valid) {
        
        window.location.href = "index1.html"; 
    } else {
        error.textContent = "Identifiant ou mot de passe incorrect";
    }
}
