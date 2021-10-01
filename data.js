function saveData(data){
    localStorage.setItem("user",JSON.stringify(data))
}
function loadData() {
    if (localStorage.hasOwnProperty("user")) {
        let data = localStorage.getItem("user");
        return JSON.parse(data);
    } else return [];
}

function saveUserLogin(name){
    localStorage.setItem("currentLogin",name);
}

function loadUserLogin(){
    if (localStorage.hasOwnProperty("currentLogin")) {
        return localStorage.getItem("currentLogin");
    } else return "";

}