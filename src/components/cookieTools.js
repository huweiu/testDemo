/**
         * @params name  cookie键
         * @params value cookie值
         * @params days  cookie过期时间
         */
export function setCookie(name, value, days) {
 
    var domain, domainParts, date, expires, host;
    // 设置过期时间 格林威治时间 (GMT)
    if (days) {
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }

    // 获取域名
    host = location.host;
    if (host.split('.').length === 1) {
        document.cookie = name + "=" + value + expires + "; path=/; domain=." + host;
    } else {
        domainParts = host.split('.');
        domainParts.shift();
        domain = '.' + domainParts.join('.');
        document.cookie = name + "=" + value + expires + "; path=/; domain=" + domain;
        if (getCookie(name) == null || getCookie(name) != value) {
            domain = '.' + host;
            document.cookie = name + "=" + value + expires + "; path=/; domain=" + domain;
        }
    }
}

export function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    if (arr = document.cookie.match(reg))
        return unescape(arr[2])
    else
        return null
}

export function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}