(function(){
    const DojoObject = {
        click: function(onclick){
            document.getElementById('myBtn').addEventListener('click', onclick);
        },

        hover: function(hoverIn, hoverOut){
            document.getElementById('myBtn').addEventListener('mouseover', hoverIn);
            document.getElementById('myBtn').addEventListener('mouseout', hoverOut);
        }
    };

    window.$Dojo = function $Dojo(buttonID) {
        return DojoObject;
    };
})();

$Dojo().click(function(){ console.log("The button was clicked!"); });

$Dojo().hover(function(){ console.log(" Hover on button!") }, function(){ console.log("Hover off!") });