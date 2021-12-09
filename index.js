var menuicon = document.querySelector('.menu-icon');
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuicon.onclick = function(){
    sidebar.classList.toggle('small-sidebar');
    container.classList.toggle("large-container")
}


var settingsmenu = document.querySelector('.settings-menu');
var darkbtn = document.getElementById('dark-btn');

function settingsMenuToggle(){
    settingsmenu.classList.toggle('settings-menu-height');

}

darkbtn.onclick = function(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle('dark-theme');

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme" , "dark");
    }
    else{
        localStorage.setItem("theme" , "light");
    }
}

if(localStorage.getItem("theme") == "light"){
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove('dark-theme');
}
else if(localStorage.getItem("theme") == "dark"){
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add('dark-theme');
}
else{
    localStorage.setItem("theme" , "light");
}
