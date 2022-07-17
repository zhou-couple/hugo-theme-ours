function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

(function () {
    if ('double-zhou') {
        let password = getCookie("password");
        if (password !== 'double-zhou') {
            if (prompt('猜猜密码是什么呀') !== 'double-zhou') {
                alert('猜错了！');
                if (history.length === 1) {
                    window.opener = null;
                    window.open('', '_self');
                    window.close();
                } else {
                    history.back();
                }
            }
            else {
                setCookie("password", 'double-zhou', 1);
            }
        }
    }
})();