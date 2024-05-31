// =================================================================================

// ============================ M O R E   D E S I G N ==============================

// =================================================================================


// -------------- INIT ----------------------------------

var canvasmore = document.getElementById("more");
var ctxmore = canvasmore.getContext('2d');
canvasmore.height = canvasmore.width;
let dataPoint = []

let getRandomValueMove = () => {
    let index = Math.floor(Math.random() * 2);
    return [-1, 1][index];
}

for (let index = 0; index < 20; index++) {
    dataPoint.push({
        x : Math.floor(Math.random()*canvasmore.width),
        y : Math.floor(Math.random()*canvasmore.width),
        moveX : getRandomValueMove(),
        moveY : getRandomValueMove(),
    })
}

// -----------------------------------------------------

/**
 * trace les points selon la variable dataPoint.
 */
let drawPoint = () => {
    let radius = canvasmore.width / 100;
    dataPoint.forEach( point => {
        ctxmore.beginPath();
        ctxmore.arc(point.x, point.y, radius, 0, 2*Math.PI, false);
        ctxmore.fillStyle = "white";
        ctxmore.fill();
    });
}

/**
 * Dessine le texte au milieu du canvas.
 */
let drawText = () => {
    ctxmore.clearRect(0, (canvasmore.width/2)-15, canvasmore.height, 30);
    ctxmore.font = '15px TimeNewRoman';
    ctxmore.fillStyle = 'white';
    ctxmore.textAlign = 'center';
    ctxmore.textBaseline = 'middle';
    let text = "Notre plus grande limite, c'est nous même.";
    ctxmore.fillText(text, canvasmore.width / 2, canvasmore.height / 2);
}

/**
 * Calcul les mouvements des points et automatise le dessin des points et du texte.
 */
let movePoint = () => {
    dataPoint.forEach( point => {
        point.x = point.x + point.moveX;
        point.y = point.y + point.moveY;
        if (point.x <= 0 || point.x >= canvasmore.width) {
            point.moveX = -point.moveX;
        }
        if (point.y <= 0 || point.y >= canvasmore.width) {
            point.moveY = -point.moveY;
        }
    });
    ctxmore.clearRect(0, 0, canvasmore.width, canvasmore.height);
    drawPoint();
    drawText();
    setTimeout('movePoint()', 30);
}

// -----------------------------------

drawPoint();
movePoint();

// -----------------------------------