var toggle = 0;
var sidebar = document.getElementById('sidebar');
var hamburger = document.getElementById('hamburger');
var sidebarLis = sidebar.children[0].children;
var btn_close = document.getElementById('close');

var open = function(){
    sidebar.style.transform = "translateX(0)";
    toggle ++;
}

var close = function(){
    sidebar.style.transform = "translateX(-200px)";
    toggle--;
}

// HAMBURGER LISTENERS
hamburger.addEventListener("click",  function(){
    if(toggle == 0){
        open();
    }

    else if(toggle == 1){
        close();
    }
});

btn_close.addEventListener("click", function(){
    close();
});

sidebarLis[3].addEventListener("mouseover", function(){
    this.style.width = "300px";
    this.children[0].children[0].children[0].style.display = "inline-block";
    this.style.transitionDuration = "0.5s";
});

sidebarLis[3].addEventListener("mouseout", function(){
    this.style.width = "200px";
    this.children[0].children[0].children[0].style.display = "none";
    this.style.transitionDuration = "0.5s";
});
