function makeReg() {
    var L1 = document.getElementById("login1").value;
    var P1 = document.getElementById("password1").value;
    const L = document.getElementById("login").value;
    const P = document.getElementById("password").value;
    if (L == L1 && P == P1) {
        document.getElementById("in").innerHTML = "Перейти в личный кабинет";
        document.getElementById("inn").innerHTML = "";
    } else {
        document.getElementById("wr").innerHTML = "Неверный логин или пароль"
    }
}

function Reg() {
    document.getElementById("reg1").innerHTML = "Успешная регистрация"
}