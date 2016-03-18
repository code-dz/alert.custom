function Box(href){
    setTimeout(function(){
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogbox = document.getElementById('dialogbox');
    var dialogoverlay = document.getElementById('dialogoverlay');
    dialogbox.style.top = "0";
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH + "px";
    dialogbox.style.margin = "100px auto";
    dialogbox.style.display = "block";
    var classs = "class ='col-lg-12 col-md-12 col-sm-12 col-xs-12' ",
    dialog = "If you are sure delete press OK",
    text = "Warning";    
    if(href == ""){ var url = window.location.href;}else { var  url = href; }
    dialogbox.innerHTML = "<div id='clear'><div id='dialogboxhead' "+classs+" ><i onclick='Box.close()' class='glyphicon glyphicon-remove'></i><span>"+text+"</span></div>" + "<div id='dialogboxbody' "+classs+"><span>" + dialog + "</span></div>" + "<div id='dialogboxfoot'" +classs+ "><button onclick=\"Box.ok('"+url+"')\" class='btn btn-primary' >OK</button><button class='btn btn-danger' onclick='Box.close()'>close</button></div></div>";   
},200);} 
  
Box.close = function() {
    var dialogbox = document.getElementById('dialogbox');
    var dialogoverlay = document.getElementById('dialogoverlay');
    dialogbox.style.top = "-500px";
    dialogbox.removeChild(document.getElementById("clear")); 
    dialogoverlay.style.display = "none";
}

Box.ok = function(ulr) { window.location.assign(ulr); }