let btn_on = document.getElementById("btn-on");
let btn_off = document.getElementById("btn-off");
const ip = 'http://192.168.5.241:3000';

btn_on.onclick = function () {

    fetch(ip+'/arduino/ledon')
        .then(response => response.json())
        .then(data => console.log(data));            
}

btn_off.onclick = function () {

    fetch(ip+'/arduino/ledoff')
    .then(response => response.json())
    .then(data => console.log(data));            
}