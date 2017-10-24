function sabirac() {
    console.log(navigator.platform);
    console.log(navigator.appVersion);
    console.log(navigator.appCodeName);
}

function isOnline() {
    if (navigator.onLine) {
        console.log("Online!");
    } else {
        console.log("OFline!");
    }
}

function wiHi() {
    var a = screen.availWidth * screen.availWidth;
    var b = a / 1000000;
    console.log(screen.width + " " + screen.height);
    console.log(screen.availHeight + ' ' + screen.availWidth);
    console.log("Povrsina korisnog prostora je: " + b + " megapiksela");
}

function lokator() {
    console.log(location.href);
    console.log(location.hostname);
    console.log(location.protocol);
    console.log(location.search);
}

function reloadd() {
    location.reload();
}

function redirect(a) {
    location.href = a;
}

function base(lokacija, podatak) {
    localStorage.setItem(lokacija, podatak);
}

function reader(pointer) {
    if (localStorage.getItem(pointer)) {
        var a = localStorage.getItem(pointer);
        console.log(a);
    } else {
        console.log('Nema brt!');
    }

}
function brisac(pointer) {
    localStorage.removeItem(pointer);
   
}


