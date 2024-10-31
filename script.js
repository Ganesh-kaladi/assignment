
setTimeout(funH1Diasable, 3000);
function funH1Diasable() {
    document.getElementById('logo').remove();
}


setTimeout(funVisible, 3000);
function funVisible() {
    document.getElementById('section').style.display = "block";
}

var img = document.getElementsByTagName('img');
for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('mouseover', funImageMosemoveEvent);
    img[i].addEventListener('mouseout', funImageMoseoutEvent);
}
//mouse move event
function funImageMosemoveEvent(e) {

    var selectedImg = e.target;
    var getSrc = selectedImg.getAttribute('src');
    funRemoveSrc(getSrc);
}



function funRemoveSrc(e) {
    for (var i = 0; i < img.length; i++) {
        var imgSrc = img[i].getAttribute('src');
        var parentDivStyleAdd = img[i].parentElement;

        if (imgSrc === e) {
            parentDivStyleAdd.setAttribute('class', 'add-style-img-event-border');
        }
        else {
            img[i].setAttribute('class', 'add-style-img-event');
            parentDivStyleAdd.setAttribute('class', 'add-style-img-event-border');

        }

    }

}
//mouseout event
function funImageMoseoutEvent(e) {
    var attr = e.target;
    var srcAttr = attr.getAttribute('src');

    for (var j = 0; j < img.length; j++) {
        var imgSrc = img[j].getAttribute('src');
        var parentDivStyleRemove = img[j].parentElement;

        if (imgSrc === srcAttr) {
            parentDivStyleRemove.removeAttribute('class', 'add-style-img-event-border');
        }
        else {
            img[j].removeAttribute('class', 'add-style-img-event');
            parentDivStyleRemove.removeAttribute('class', 'add-style-img-event-border');
        }


    }
}