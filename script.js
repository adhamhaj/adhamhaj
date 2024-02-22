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
        // Get the element by its ID
        var dorothyElement = document.getElementById('dorothy');
        
        // Change the left and top style attributes
        dorothyElement.style.position = 'absolute'; // Ensure the element's position is set to absolute
        dorothyElement.style.left = '300px';
        dorothyElement.style.top = '400px';
        
        // For testing that the function runs
        alert("Dorothy has moved!");
    }
    
    