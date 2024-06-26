// ===================================================================

// ========================== O P E N E R ============================

// ===================================================================

// ------------- INIT --------------------
window.scrollTo(0, 0);
var canvas = document.getElementById('gate');
var ctx = canvas.getContext('2d');

var data = [];
var radiusCircle = 250;
// ---------------------------------------

/**
 * Génère aléatoirement les données.
 * @param {*} nbline nombre de ligne à générer.
 */
let generateData = (nbline) => {
    for (let i = 0; i < nbline; i++) {
        let cursor = Math.floor(Math.random()*(canvas.width/3));
        if (Math.random() > 0.5) {
            cursor = - cursor;
        }
        data.push(
            {
                line1 : -cursor,
                line2 : -cursor,
                color : randomColor(),
                finish: false
            }
        );
    }
    // console.log(data);
}

/**
 * calcul de l'ouverture de chaque ligne de données.
 */
let openGateData = () => {
    data.forEach(line => {
        if (!line.finish) {
            line.line1 -= Math.floor(Math.random()*10);
            line.line2 += Math.floor(Math.random()*10);
        }
        if (line.line1 < -canvas.width && line.line2 > canvas.width) {
            line.finish = true;
        }
    })
}

/**
 * Dessin de chaque ligne.
 */
let drawData = () => {
    let y = 0
    data.forEach(line => {
        ctx.fillStyle = line.color;
        ctx.fillRect(0, y, (canvas.width/2 + line.line1)-1, (canvas.height / data.length));
        ctx.fillRect((canvas.width/2 + line.line2)+1, y, (canvas.width), (canvas.height / data.length));
        y += (canvas.height / data.length);
    });
}

/**
 * Fonction d'automatisation de l'ouverture de la porte.
 */
let openGate = () => {
    openGateData();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawData();
    let finish = true;
    data.forEach(line => {
        if (!line.finish) {
            finish = false;
        }
    });
    if (!finish) {
        setTimeout('openGate()', 15);
    } else {
        // console.log(data);
        console.log("OPEN GATE : SUCCESS");
        document.documentElement.style.overflow = 'initial';
    }
}

/**
 * dessin du cercle central.
 * @param {*} radius 
 */
let cicleClickDraw = (radius) => {
    let gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0,  canvas.width / 2, canvas.height / 2, 250);
    gradient.addColorStop(0, randomColor());
    gradient.addColorStop(0.5, randomColor());
    gradient.addColorStop(1, randomColor());
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.textBaseline = 'middle';
    ctx.fillText("Click it", canvas.width / 2, canvas.height / 2);
}

/**
 * suppression du cercle central.
 */
let removeCicle = () => {
    radiusCircle -= 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawData();
    cicleClickDraw(radiusCircle);
    if (radiusCircle > 0) {
        setTimeout('removeCicle()', 40);
    } else {
        setTimeout('openGate()', 40);
    }
}

/**
 * Mise à l'echel du canvas en cas de changement de taille.
 */
let resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawData();
    if (radiusCircle > 0) {
        cicleClickDraw(radiusCircle);
    }
}

/**
 * tire une couleur au hasard.
 * @returns une couleur au hasard.
 */
let randomColor = () => {
    let color = ["red", "blue", "yellow", "orange"]
    let index = Math.floor(Math.random() * color.length);
    return color[index];
}

/**
 * Lance la supression du cercle.
 * @param {*} event 
 */
function handleClick(event) {
    setTimeout('removeCicle()', 40);
    canvas.removeEventListener('click', handleClick);
}

// --------------------------------------------------------------
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
generateData(30);
drawData();
cicleClickDraw(250);
canvas.addEventListener('click', handleClick);
document.documentElement.style.overflow = 'hidden';
// --------------------------------------------------------------