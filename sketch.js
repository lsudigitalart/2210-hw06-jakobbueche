/*  let img;
let f,x,y
let opacity = 2

function preload() {

    redBarn = loadImage("Portsmouth.jpg")

}


function setup() {
    createCanvas(800,800)
    frameRate(30);
}


function draw() {
    f = frameCount*4
    x = random(0,100);
    y = random(0,100);

    background(220)
    
    text(frameCount,500,50)

    if(frameCount>=150) {
        f = frameCount/(frameCount*0.01)
        //framecount/(frameCount*4)
    }

    tint(255,f)
    image(redBarn,20,20,200,200)

}  */

let img, Beach, Aub, Fire;
let alpha = 0;
let redA = 0;
let aubA = 0
let NolaA = 0;
let FireA = 0;
let whA = 0;
let wwA = 0;
let bosA = 0;
let dA = 0;
let xA = 0
let dissolveSpeed = 4;
let redD = 4;
let aubD = 4;
let NolaD = 4;
let FireD = 4
let whD = 4
let wwD = 4
let bosD = 4
let dD = 4
let xD = 4

function preload() {
  img = loadImage('VibeyJakobNew.jpg');
  Beach = loadImage('Beach.jpg')
  Aub = loadImage('Aub.jpg')
  Nola = loadImage('Nola.JPG')
  Fire = loadImage('Fire.JPG')
  White1 = loadImage('White1.jpg')
  White2 = loadImage('White2.JPG')
  Bos = loadImage('Bos.jpg')
  Bday = loadImage('Bday.JPG')
  Fox = loadImage('TheFox.jpg')

}

function setup() {
  createCanvas(500, 500);
  frameRate(30)
  x = random(20,350);
  y = random(20,350);
  rx = random(20,350)
  ry = random(20,350)
  ax = random(20,350)
  ay = random(20,350)
  bx = random(20,350)
  by = random(20,350)
  fx = random(20,350)
  fy = random(20,350)
  w1x = random(20,350)
  w1y = random(20,350)
  w2x = random(20,350)
  w2y = random(20,350)
  bosx = random(20,350)
  bosy = random(20,350)
  scale = random(100,200)
  rscale = random(100,200)
  ascale = random(100,200)
  bscale = random(100,200)
  fscale = random(100,200)
  w1scale = random(100,200)
  w2scale = random(100,200)
  bosscale = random(100,200)
  dscale = random(100,200)
  dscale = random(100,200)
  xscale = random(100,200)
  dx = random(20,350)
  dy = random(20,350)
  xx = random(20,350)
  xy = random(20,350)
}

function draw() {
  background(220);
  
  // 1. Beach Picture //

   if (frameCount >= 0 && frameCount <= 100) {
    tint(255, alpha);
    image(Beach, x, y, scale, scale);
    fill(150, 200, 255, alpha)
    text('Beach Trip',x,y)
    alpha += dissolveSpeed;
  }

  if (frameCount >= 100) {
    tint(255, alpha);
    image(Beach, x, y, scale, scale);
    fill(150, 200, 255, alpha)
    text('Beach Trip',x,y)
    alpha -= dissolveSpeed;
  }

  // 2. Red Barn Picture //

  if (frameCount >= 50 && frameCount <= 150) {
    tint(255, redA);
    image(img, rx, ry, rscale, rscale);
    fill(245, 88, 88, redA)
    text('Red Barn Picnic',rx,ry)
    redA += redD;
  }

  if (frameCount >= 150) {
    tint(255, redA);
    image(img, rx, ry, rscale, rscale);
    fill(245, 88, 88, redA)
    text('Red Barn Picnic',rx,ry)
    redA -= redD;
  } 

  // 3. Auburn Gameday Picture //

  if (frameCount >= 100 && frameCount <= 200) {
    tint(255, aubA);
    image(Aub, ax, ay, ascale, ascale);
    fill(255, 117, 62, aubA)
    text('Auburn Gameday',ax,ay)
    aubA += aubD;
  }

  if (frameCount >= 200) {
    tint(255, aubA);
    image(Aub, ax, ay, ascale, ascale);
    fill(255, 117, 62, aubA)
    text('Auburn Gameday',ax,ay)
    aubA -= aubD;
  } 

  // 4. Nola Picture //

  if (frameCount >= 150 && frameCount <= 250) {
    tint(255, NolaA);
    image(Nola, bx, by, bscale, bscale);
    fill(189, 173, 0, NolaA)
    text('New Orleans Day',bx,by)
    NolaA += NolaD;
  }

  if (frameCount >= 250) {
    tint(255, NolaA);
    image(Nola, bx, by, bscale, bscale);
    fill(189, 173, 0, NolaA)
    text('New Orleans Day',bx,by)
    NolaA -= NolaD;
  } 

  // 5. Fire Tower Picture //

  if (frameCount >= 200 && frameCount <= 300) {
    tint(255, FireA);
    image(Fire, fx, fy, fscale, fscale);
    fill(0, 155, 3, FireA)
    text('Fire Tower',fx,fy)
    FireA += FireD;
  }

  if (frameCount >= 300) {
    tint(255, FireA);
    image(Fire, fx, fy, fscale, fscale);
    fill(0, 155, 3, FireA)
    text('Fire Tower',fx,fy)
    FireA -= FireD;
  }

// 6. White Wall Picture from January //

if (frameCount >= 250 && frameCount <= 350) {
  tint(255, whA);
  image(White1, w1x, w1y, w1scale, w1scale);
  fill(125, 125, 125, whA)
  text('White Wall Pic January',w1x,w1y)
  whA += whD;
}

if (frameCount >= 350) {
  tint(255, whA);
  image(White1, w1x, w1y, w1scale, w1scale);
  fill(125, 125, 125, whA)
  text('White Wall Pic January',w1x,w1y)
  whA -= whD;
}

// 7. White Wall Picture from May //

if (frameCount >= 300 && frameCount <= 400) {
  tint(255, wwA);
  image(White2, w2x, w2y, w2scale, w2scale);
  fill(125, 125, 125, wwA)
  text('White Wall Pic May',w2x,w2y)
  wwA += wwD;
}

if (frameCount >= 400) {
  tint(255, wwA);
  image(White2, w2x, w2y, w2scale, w2scale);
  fill(125, 125, 125, wwA)
  text('White Wall Pic May',w2x,w2y)
  wwA -= wwD;
}

// 8. Boston Common Picture //

if (frameCount >= 350 && frameCount <= 450) {
  tint(255, bosA);
  image(Bos, bosx, bosy, bosscale, bosscale);
  fill(0, 185, 16, bosA)
  text('Boston Trip',bosx,bosy)
  bosA += bosD;
}

if (frameCount >= 450) {
  tint(255, bosA);
  image(Bos, bosx, bosy, bosscale, bosscale);
  fill(0, 185, 16, bosA)
  text('Boston Trip',bosx,bosy)
  bosA -= bosD;
}

// 9. Birthday Picture //

if (frameCount >= 400 && frameCount <= 500) {
  tint(255, dA);
  image(Bday, dx, dy, dscale, dscale);
  fill(255, 136, 183, dA)
  text('Happy Birthday!',dx,dy)
  dA += dD;
}

if (frameCount >= 500) {
  tint(255, dA);
  image(Bday, dx, dy, dscale, dscale);
  fill(255, 136, 183, dA)
  text('Happy Birthday!',dx,dy)
  dA -= dD;
}

// 10. The Fox Picture //

if (frameCount >= 450 && frameCount <= 550) {
  tint(255, xA);
  image(Fox, xx, xy, xscale, xscale);
  fill(193, 132, 255, xA)
  text('Coffee Shop!',xx,xy)
  xA += xD;
}

if (frameCount >= 550) {
  tint(255, xA);
  image(Fox, xx, xy, xscale, xscale);
  fill(193, 132, 255, xA)
  text('Coffee Shop!',xx,xy)
  xA -= xD;
}

}
