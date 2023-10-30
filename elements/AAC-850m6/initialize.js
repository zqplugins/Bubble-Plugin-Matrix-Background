function(instance, context) {


     var basicstyle = `   
    body, html {
    padding: 0;
    margin: 0;
	background-repeat: repeat-y; 
}
.slider {
    position: fixed;
    top: 10px;
    right: 20px;
    width: 150px;
    color: white;
    font-family: sans-serif;
    text-align: right;
}
.slider input {
    width: 100%;
    margin-bottom: 5px;
}

`

$('<style>'+ basicstyle +'</style>').appendTo('head');  


    
var html =`<canvas id=q>`


var div = $(html);

    
$(instance.canvas[0]).html(div); 
}