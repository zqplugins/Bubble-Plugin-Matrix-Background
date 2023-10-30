function(instance, properties) {
	
var preview = Math.min(properties.bubble.height, properties.bubble.width);
    
    var imgElement = document.createElement("IMG");
    imgElement.setAttribute("src", "https://e7.pngegg.com/pngimages/535/506/png-clipart-atmosphere-sky-astronomy-black-star-get-snowing-s-miscellaneous-monochrome-thumbnail.png");
    imgElement.style.width ='90%';
    imgElement.style.height = '100%';
    imgElement.style.horizontalAlign = "middle";
    instance.cansas[0].style.color = "#000000"
    //instance.canvas[0].appendChild(imgElement);
}