fetch("https://www.boredapi.com/api/activity")
 .then((response) => response.json())
 .then((data) => {
    let imageElement = document.getElementById("random-image");
    console.log(data)
 })