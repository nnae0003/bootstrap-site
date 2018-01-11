var toggle = 0;
var sidebar = document.getElementById('sidebar');
var hamburger = document.getElementById('hamburger');
var sidebarLis = sidebar.children[0].children;
var btn_close = document.getElementById('close');
// var navbar = document.getElementById('main-nav');

var open = function(){
    sidebar.style.transform = "translateX(0)";
    toggle ++;
}

var close = function(){
    sidebar.style.transform = "translateX(-200px)";
    toggle--;
}

// MAIN NAVBAR LISTENER
// var lists = navbar.children[2].children[0].children;
//
// for(var j = 0; j < lists.length; ++j){
//     console.log(lists[j]);
//     lists[j].addEventListener("click", function(){
//         for(var i = 0; i < lists.length; ++i){
//             lists[i].className = lists[i].className.replace("active", "");
//         }
//         this.className += " active"
//     });
// }

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

// LISTENERS FOR SIDEBAR NAVIGATION
for(var i = 0; i < sidebarLis.length-1; ++i){
    sidebarLis[i].addEventListener("mouseover", function(){
        this.className = this.className.replace("bg-info", "bg-primary");
    });

    sidebarLis[i].addEventListener("mouseout", function(){
        this.className = this.className.replace("bg-primary", "bg-info");
    });
}

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

//DOCUMENT LISTENER
if(window.matchMedia("(min-width: 771px)").matches){
    close();
    toggle = 0;
}
// console.log(sidebar.children[0].children[1].className);
