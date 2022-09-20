 function addRedSquare(){
let containerElement = document.getElementById("container")

    // step 1 Make a element 
   let redSquareElement = document.createElement("div")
    // Sysyle
    redSquareElement.style.backgroundColor = "red";
    redSquareElement.style.width = "200px";
    redSquareElement.style.height = "200px";


    // strep 3
    containerElement.appendChild(redSquareElement)
}

