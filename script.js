function hello () {
   
        console.log("The script is loaded and the hello() function has run.");
    }
    
   
    console.log("This message shows the script itself is loaded, outside any function.");
    
    function hello() {
        console.log("The script is loaded and the hello() function has run.");
    }
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('clickMe').addEventListener('click', function() {
            window.scrollBy(0, 100);
        }); 
    });
    function divClicked() {
        alert("divClicked function is running!");
    }
    
    function divClicked() {
        
        var dorothyElement = document.getElementById('dorothy');
        
    
        dorothyElement.style.position = 'absolute'; 
        dorothyElement.style.left = '300px';
        dorothyElement.style.top = '400px';
        

        alert("Dorothy has moved!");
    }
    
    