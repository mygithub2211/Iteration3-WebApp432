function alan() { 
    window.location.href = "alanwalker.html";/* a single click will go to next page */
}

function tiesto() { 
    var buttons = document.querySelectorAll("button");
    buttons.forEach(function(button){
        button.addEventListener("click", function() {/* have to double click to go to next page */
            window.location.href = "tiesto.html";
        });
    });
  
}

function marsh() { 
    var buttons = document.querySelectorAll("button");
    buttons.forEach(function(button){
        button.addEventListener("click", function() {/* have to double click to go to next page */
            window.location.href = "marshmellow.html";
        });
    });
  
}