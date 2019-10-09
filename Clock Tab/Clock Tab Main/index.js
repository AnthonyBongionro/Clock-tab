// Clock
var timer = setInterval(clock ,10);

function clock() {
    var date = new Date();

    document.getElementById("clock").innerHTML = date.toLocaleTimeString();
    document.getElementById("date").innerHTML = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    document.title = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
}

// Settings Menu
function openNav() {
    document.getElementById("mySidenav").style.width = "210px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNav2() {
    document.getElementById("mySidenav2").style.width = "200px";
}

function closeNav2() {
    document.getElementById("mySidenav2").style.width = "0";
}

function openNav3() {
    document.getElementById("mySidenav3").style.width = "200px";
}

function closeNav3() {
    document.getElementById("mySidenav3").style.width = "0";
}

// Color Settings

// // Return the southern hemisphere season for a date
// // If no date provided, uses current system date
// function getSeason(d) {
//   d = d || new Date();
//   var mon = d.getMonth() + 1;  // Adjust to be indexed from 1
//   var day = d.getDate();
//   var seasons = ['summer','autumn','winter','spring'];

//   // Do silly seasons here
//   if (mon == 12) {
//     if (day >= 13 && day <= 27) {
//       return 'xmas';
//     }
//     if (day >= 28 && day <= 31) {
//       return 'nye';
//     }
//   }

//   // If wasn't a silly season, do others
//   mon = Math.floor((mon % 12) / 3);
//   return seasons[mon];
// }
// function seasonal {
//   if (getSeason() == "summer") {
// alert("summer")
//   }
//   if (getSeason() == "autumn") {
// alert("autumn")
//   }
//   if (getSeason() == "winter") {
//   alert("winter")
//   }
//   if (getSeason() == "spring") {
//     alert("spring")
//   }
// }
function dark() {
    document.body.style.color = "#E2C044";
    document.body.style.backgroundColor = "#1E2019";
    document.getElementById("mySidenav").style.backgroundColor = "#BFB500";
    document.getElementById("mySidenav2").style.backgroundColor = "#7F7900";
    document.getElementById("mySidenav3").style.backgroundColor = "#7F7900";
    localStorage.setItem("setting1", "#1E2019");
    localStorage.setItem("setting2", "#E2C044");
    localStorage.setItem("setting3", "#BFB500");
    localStorage.setItem("setting4", "#7F7900");
    localStorage.setItem("setting5", "#7F7900");
}
function Blood() {
    document.body.style.color = "#46211A";
    document.body.style.backgroundColor = "#A43820";
    document.getElementById("mySidenav").style.backgroundColor = "#7F0A00";
    document.getElementById("mySidenav2").style.backgroundColor = "#400500";
    document.getElementById("mySidenav3").style.backgroundColor = "#400500";
    localStorage.setItem("setting1", "#A43820");
    localStorage.setItem("setting2", "#46211A");
    localStorage.setItem("setting3", "#7F0A00");
    localStorage.setItem("setting4", "#400500");
    localStorage.setItem("setting5", "#400500");
}
function Forest() {
    document.body.style.color = "#2E4600";
    document.body.style.backgroundColor = "#A2C523";
    document.getElementById("mySidenav").style.backgroundColor = "#007F00";
    document.getElementById("mySidenav2").style.backgroundColor = "#004000";
    document.getElementById("mySidenav3").style.backgroundColor = "#004000";
    localStorage.setItem("setting1", "#A2C523");
    localStorage.setItem("setting2", "#2E4600");
    localStorage.setItem("setting3", "#007F00");
    localStorage.setItem("setting4", "#004000");
    localStorage.setItem("setting5", "#004000");
}
function Ocean() {
    document.body.style.color = "#111E6C";
    document.body.style.backgroundColor = "#7285A5";
    document.getElementById("mySidenav").style.backgroundColor = "#00567F";
    document.getElementById("mySidenav2").style.backgroundColor = "#002B40";
    document.getElementById("mySidenav3").style.backgroundColor = "#002B40";
    localStorage.setItem("setting1", "#7285A5");
    localStorage.setItem("setting2", "#111E6C");
    localStorage.setItem("setting3", "#00567F");
    localStorage.setItem("setting4", "#002B40");
    localStorage.setItem("setting5", "#002B40");
}
function Bumblebee() {
    document.body.style.color = "#FCD12A";
    document.body.style.backgroundColor = "#FFFDD0";
    document.getElementById("mySidenav").style.backgroundColor = "#FFD32A";
    document.getElementById("mySidenav2").style.backgroundColor = "#E5BE26";
    document.getElementById("mySidenav3").style.backgroundColor = "#E5BE26";
    localStorage.setItem("setting1", "#FFFDD0");
    localStorage.setItem("setting2", "#FCD12A");
    localStorage.setItem("setting3", "#FFD32A");
    localStorage.setItem("setting4", "#E5BE26");
    localStorage.setItem("setting5", "#E5BE26");
}
function pink() {
    document.body.style.color = "#DE3163";
    document.body.style.backgroundColor = "#FFA6C9";
    document.getElementById("mySidenav").style.backgroundColor = "#71007F";
    document.getElementById("mySidenav2").style.backgroundColor = "#380040";
    document.getElementById("mySidenav3").style.backgroundColor = "#380040";
    localStorage.setItem("setting1", "#FFA6C9");
    localStorage.setItem("setting2", "#DE3163");
    localStorage.setItem("setting3", "#71007F");
    localStorage.setItem("setting4", "#380040");
    localStorage.setItem("setting5", "#380040");
}
function orange() {
    document.body.style.color = "#FC6600";
    document.body.style.backgroundColor = "#1e1e1e";
    document.getElementById("mySidenav").style.backgroundColor = "#FC6600";
    document.getElementById("mySidenav2").style.backgroundColor = "#7F3400";
    document.getElementById("mySidenav3").style.backgroundColor = "#7F3400";
    localStorage.setItem("setting1", "#1e1e1e");
    localStorage.setItem("setting2", "#FC6600");
    localStorage.setItem("setting3", "#FC6600");
    localStorage.setItem("setting4", "#7F3400");
    localStorage.setItem("setting5", "#7F3400");
}
function grey() {
    document.body.style.color = "#6e7f80";
    document.body.style.backgroundColor = "#36454f";
    document.getElementById("mySidenav").style.backgroundColor = "#527F74";
    document.getElementById("mySidenav2").style.backgroundColor = "#29403A";
    document.getElementById("mySidenav3").style.backgroundColor = "#29403A";
    localStorage.setItem("setting1", "#36454f");
    localStorage.setItem("setting2", "#6e7f80");
    localStorage.setItem("setting3", "#527F74");
    localStorage.setItem("setting4", "#29403A");
    localStorage.setItem("setting5", "#29403A");
}
function lavender() {
    document.body.style.color = "#330240";
    document.body.style.backgroundColor = "#67037F";
    document.getElementById("mySidenav").style.backgroundColor = "#563A7F";
    document.getElementById("mySidenav2").style.backgroundColor = "#2B1D40";
    document.getElementById("mySidenav3").style.backgroundColor = "#2B1D40";
    localStorage.setItem("setting1", "#67037F");
    localStorage.setItem("setting2", "#330240");
    localStorage.setItem("setting3", "#563A7F");
    localStorage.setItem("setting4", "#2B1D40");
    localStorage.setItem("setting5", "#2B1D40");
}
function smoked() {
    document.body.style.color = "#CC5146";
    document.body.style.backgroundColor = "#998381";
    document.getElementById("mySidenav").style.backgroundColor = "#7F504B";
    document.getElementById("mySidenav2").style.backgroundColor = "#402825";
    document.getElementById("mySidenav3").style.backgroundColor = "#402825";
    localStorage.setItem("setting1", "#998381");
    localStorage.setItem("setting2", "#CC5146");
    localStorage.setItem("setting3", "#7F504B");
    localStorage.setItem("setting4", "#402825");
    localStorage.setItem("setting5", "#402825");
}
function leather() {
    document.body.style.color = "#262216";
    document.body.style.backgroundColor = "#97743a";
    document.getElementById("mySidenav").style.backgroundColor = "#7F4501";
    document.getElementById("mySidenav2").style.backgroundColor = "#402201";
    document.getElementById("mySidenav3").style.backgroundColor = "#402201";
    localStorage.setItem("setting1", "#97743a");
    localStorage.setItem("setting2", "#262216");
    localStorage.setItem("setting3", "#7F4501");
    localStorage.setItem("setting4", "#402201");
    localStorage.setItem("setting5", "#402201");
}

// Font Settings

function cour() {
    document.getElementById("link2").style.fontFamily = "courier";
    localStorage.setItem("font", "courier");
}

function arial() {
    document.getElementById("link2").style.fontFamily = "arial";
    localStorage.setItem("font", "arial");
}

function times() {
    document.getElementById("link2").style.fontFamily = "Times New Roman";
    localStorage.setItem("font", "Times New Roman");
}

function geo() {
    document.getElementById("link2").style.fontFamily = "Georgia";
    localStorage.setItem("font", "Georgia");
}

function treb() {
    document.getElementById("link2").style.fontFamily = "Trebuchet MS";
    localStorage.setItem("font", "Trebuchet MS");
}

function ver() {
    document.getElementById("link2").style.fontFamily = "Palatino";
    localStorage.setItem("font", "Palatino");
}

function book() {
    document.getElementById("link2").style.fontFamily = "bookman";
    localStorage.setItem("font", "bookman");
}

function imp() {
    document.getElementById("link2").style.fontFamily = "impact";
    localStorage.setItem("font", "impact");
}

function gar() {
    document.getElementById("link2").style.fontFamily = "garamond";
    localStorage.setItem("font", "garamond");
}

function pix() {
    document.getElementById("link2").style.fontFamily = "'Press Start 2P', cursive";
    localStorage.setItem("font", "'Press Start 2P', cursive");
}

// Loading Functions

function loadColor() {
    document.body.style.backgroundColor = localStorage.getItem("setting1");
    document.body.style.color = localStorage.getItem("setting2");
    document.getElementById("mySidenav").style.backgroundColor = localStorage.getItem("setting3");
    document.getElementById("mySidenav2").style.backgroundColor = localStorage.getItem("setting4");
    document.getElementById("mySidenav3").style.backgroundColor = localStorage.getItem("setting5");
}

function loadFont() {
    document.getElementById("link2").style.fontFamily = localStorage.getItem("font");
}

// Listeners

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('button1');
    link.addEventListener('click', function() {
        dark();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('button2');
    link.addEventListener('click', function() {
        Blood();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('button3');
    link.addEventListener('click', function() {
        Forest();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('button4');
    link.addEventListener('click', function() {
        Ocean();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('button5');
    link.addEventListener('click', function() {
        Bumblebee();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('button6');
    link.addEventListener('click', function() {
        pink();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('button7');
    link.addEventListener('click', function() {
        orange();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('button8');
    link.addEventListener('click', function() {
        grey();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('button9');
    link.addEventListener('click', function() {
        lavender();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('button10');
    link.addEventListener('click', function() {
        smoked();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('button11');
    link.addEventListener('click', function() {
        leather();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('button12');
    link.addEventListener('click', function() {
        seasonal();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('openbtn');
    link.addEventListener('click', function() {
        openNav();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('closebtn');
    link.addEventListener('click', function() {
        closeNav();
    });
});
// On Loads
window.addEventListener("load", function(event) {
    loadColor();
  });

window.addEventListener("load", function(event) {
    loadFont();
  });

window.addEventListener("load", function(event) {
    getSeason();
  });

// Font Listeners

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('font1');
    link.addEventListener('click', function() {
        cour();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('font2');
    link.addEventListener('click', function() {
        arial();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('font3');
    link.addEventListener('click', function() {
        times();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('font4');
    link.addEventListener('click', function() {
        geo();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('font5');
    link.addEventListener('click', function() {
        treb();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('font6');
    link.addEventListener('click', function() {
        ver();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('font7');
    link.addEventListener('click', function() {
        book();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('font8');
    link.addEventListener('click', function() {
        imp();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('font9');
    link.addEventListener('click', function() {
        gar();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('font10');
    link.addEventListener('click', function() {
        pix();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('navTitle1');
    link.addEventListener('click', function() {
        openNav2();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('navTitle2');
    link.addEventListener('click', function() {
        openNav3();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('closebtn2');
    link.addEventListener('click', function() {
        closeNav2();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('closebtn3');
    link.addEventListener('click', function() {
        closeNav3();
    });
});