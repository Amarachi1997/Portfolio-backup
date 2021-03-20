
$(document).ready(function(){
    var typed = new Typed('#typed', {
        strings: ['A front end developer', 'UX Writer', 'and Content Writer'],
        typeSpeed: 40,
        backSpeed: 0,
        fadeOut: true,
        loop: true
      });
})

var ajax = new XMLHttpRequest();
ajax.responseType = "blob";
ajax.open("GET", "Amarachi_Chiaha_Resume.pdf", true);
ajax.send();

ajax.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200) {
    var obj = window.URL.createObjectURL(this.response);
    document.getElementById("anchor").setAttribute("href", obj);

    setTimeout(function(){
      window.URL.revokeObjectURL(obj);
    }, 0 * 1000);
  }
};

//projects
var changeImage = document.getElementById("imagechange");
var changeHeadText = document.getElementById("headtextchange");
var changeContent = document.getElementById("contentchange");
var changeLink = document.getElementById("linkchange");

var projectOne = document.getElementById("pr1");
var projectTwo = document.getElementById("pr2");
var projectThree = document.getElementById("pr3");
var projectFour = document.getElementById("pr4");
var projectFive = document.getElementById("pr5");
var projectSix = document.getElementById("pr6");
var projectSeven = document.getElementById("pr7");
var projectEight = document.getElementById("pr8");
var projectNine = document.getElementById("pr9");




if(projectTwo){
  projectTwo.addEventListener('click', function(e){
    changeImage.setAttribute("src", "image/astract.PNG");
    changeHeadText.innerText = "Astract9 Mini Test";
    changeContent.innerHTML = "(Wordpress, Astra Theme, Elementor Builder)";
    changeLink.setAttribute("href", "https://astract.000webhostapp.com/");
  });
}

if(projectThree){
  projectThree.addEventListener('click', function(e){
    changeImage.setAttribute("src", "image/jevic.PNG");
    changeHeadText.innerText = "Jevic Integated Services";
    changeContent.innerHTML = "(Javascript, HTML, CSS and Materialize CSS Framework)- Company site";
    changeLink.setAttribute("href", "https://amaraecommercetest.000webhostapp.com/");
  });
}

if(projectFour){
  projectFour.addEventListener('click', function(e){
    changeImage.setAttribute("src", "image/ruthsyne.PNG");
    changeHeadText.innerText = "Ruth Syne Saloon";
    changeContent.innerHTML = "(Wordpress, Astra Theme, Elementor Builder)- Company Site";
    changeLink.setAttribute("href", "https://ruthsyne.000webhostapp.com/");
  });
}

if(projectFive){
  projectFive.addEventListener('click', function(e){
    changeImage.setAttribute("src", "image/p1.PNG");
    changeHeadText.innerText = "My Node Newsletter Project";
    changeContent.innerHTML = "(NodeJs, ExpresssJs, HTML, CSS and materialize CSS framework)";
    changeLink.setAttribute("href", "http://mara-newsletter.herokuapp.com/");
  });
}

if(projectSix){
  projectSix.addEventListener('click', function(e){
    changeImage.setAttribute("src", "image/rambod.PNG");
    changeHeadText.innerText = "Rambod Optometry";
    changeContent.innerHTML = "(Wordpress, Astra Theme, Elementor Builder)- Company Site";
    changeLink.setAttribute("href", "https://rambodoptometry.com/");
  });
}

if(projectSeven){
  projectSeven.addEventListener('click', function(e){
    changeImage.setAttribute("src", "image/p5.PNG");
    changeHeadText.innerText = "Letter likkio";
    changeContent.innerHTML = "(Javascript, HTML, CSS and Materialize css framework)- A letter mailing Site";
    changeLink.setAttribute("href", "https://github.com/Amarachi1997/Letter-Web");
  });
}

if(projectEight){
  projectEight.addEventListener('click', function(e){
    changeImage.setAttribute("src", "image/she.PNG");
    changeHeadText.innerText = "Silent Hustlers Clothing Store";
    changeContent.innerHTML = "(Wordpress, Divi Theme & Builder, Woo Commerce)- Online Store";
    changeLink.setAttribute("href", "https://nxrthboiimuniie.com/");
  });
}

if(projectNine){
  projectNine.addEventListener('click', function(e){
    changeImage.setAttribute("src", "image/p2.PNG");
    changeHeadText.innerText = "Northboii Muniie";
    changeContent.innerHTML = "(HTML & CSS)- Artiste site";
    changeLink.setAttribute("href", "http://northboiimuniie.000webhostapp.com/");
  });
}






