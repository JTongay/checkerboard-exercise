// Your JS goes here
(function(doc) {

    var body = doc.getElementsByTagName('body')[0];
    var wrapper = doc.createElement('div');


    function createBoard() {
        var colors = doc.createElement('div');
        colors.style.float = "left"
        colors.style.width = "11.1%"
        colors.style.paddingBottom = "11.1%"
        colors.className = "colors"
        colors.style.backgroundColor = randomColor();



        wrapper.appendChild(colors)
        body.appendChild(wrapper);
    }

    for (var i = 0; i < 63; i++) {

        createBoard()
    }

    function randomColor() {
        return "#" + (Math.floor(Math.random() * 1000)).toString()
    }

    setInterval(function() {
        var getColors = doc.getElementsByClassName("colors");
        for (var j = 0; j < getColors.length; j++) {
            getColors[j].style.backgroundColor = randomColor();
        }
    }, 2000)



    // function newBoard() {
    //     setTimeout(randomColor, 2000)
    // }







})(document)
