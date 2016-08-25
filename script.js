// Your JS goes here
(function(doc) {

    var body = doc.getElementsByTagName('body')[0];
    var wrapper = doc.createElement('div');

    for (var i = 0; i < 63; i++) {
        var colors = doc.createElement('div');

        colors.style.float = "left"
        colors.style.width = "11.1%"
        colors.style.paddingBottom = "11.1%"
        colors.style.backgroundColor = "#" + (Math.floor(Math.random() * 1000)).toString()


        // if (i % 2 === 0) {
        //     colors.style.backgroundColor = "red"
        // } else {
        //     colors.style.backgroundColor = "black"
        // }
        wrapper.appendChild(colors)
        body.appendChild(wrapper);
    }





})(document)
