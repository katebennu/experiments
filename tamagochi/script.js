/**
 * Created by kbennu on 12.1.2017.
 */

var tamagochi = {
    name:"Terry",
    age:5,
    pic: "http://cdn.bulbagarden.net/upload/thumb/b/b8/Terri_Hitmontop.png/200px-Terri_Hitmontop.png",
    greet: function(name) {
        return "Hi, my name is " + this.name;
    }
};
//var tamagochi = Object.create(Tama);

listProps = function() {
    var pr = document.getElementById("pr");
    var met = document.getElementById("met");
    var imgFrame = document.getElementById("imgFrame");
    var objFrame = document.getElementById("objFrame");

    pr.innerHTML = "";
    imgFrame.innerHTML = "";
    met.innerHTML = "";
    objFrame.innerHTML = "";

    for (var i in tamagochi) {
        if (i == "pic") {
            var img = document.createElement("img");
            img.setAttribute("src", tamagochi["pic"]);
            imgFrame.appendChild(img);
            continue;
        }
        if (typeof (tamagochi[i]) == "function" /*|| tamagochi[i].startsWith("funct")*/) {
            var m = document.createElement("li");
            var a = document.createElement("a");
            a.setAttribute("href", "#");
            a.setAttribute("onclick", "dispOut()");
            a.innerHTML = i;
            m.appendChild(a);
            met.appendChild(m);
            continue;
        }
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(i + ": " + tamagochi[i]+ " "+typeof (tamagochi[i])));
        pr.appendChild(li);
    }
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(JSON.stringify(tamagochi)));
    objFrame.appendChild(p);
};

addProp = function () {
    var name = document.getElementById("pName").value;
    tamagochi[name] = document.getElementById("pVal").value;
};

dispOut = function () {
    var out = document.getElementById("output");
    out.innerHTML = "";
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(tamagochi.greet())); // fix this to work with any method of the obj
    out.appendChild(p);
};

addMet = function () {
    var name = document.getElementById("mName").value;
    var val =  document.getElementById("mVal").value;
    tamagochi[name] = function(i) { eval(val) };
};



/*
* NEXT:
* - addEventListeners instead of inline events for all 3 buttons and the methods in the list
* - allow passing properties to methods
*
* - AJAX or smth so that only new elements of the object are updated, without removing children each time
* - How to parse code to make methods from the input
*
* - Save object as json
* - Make a simple backend to kbennu to store json object(s) (can delete everything from github repo and upload again a django or node project - read smth about deployment to github)
* - Send json to a server with http
* - Get it from the server with http
*
*
* - Make a super lightweight backend to store the inputs
*
* - publish on my site
*
* - How to hack input so that it doesn't require parsing
*
*
* - Do same thing with React
*
*
* DONE:
* - display props on page load
* - add some styling
* - Add methods (list as links that cause action)
*  - How to act upon methods on the page (output block etc.)
* */