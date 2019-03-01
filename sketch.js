const LENGTH = 400;
const SPEED = 1;    //update per frames

let LINE_WIDTH;
let LINE_HEIGHT_STEP;

let arr = new Array(LENGTH);
let arrCopy = new Array(LENGTH);
let rendezve = false;
let actionsB = [];
let actionsJ = [];
let btn;
let cnv;




function setup() {
  cnv = createCanvas(800, 400);
  cnv.mousePressed(mousePrsd);
  frameRate(60);

  createP("Click to sort with Selection Sort");
  btn = createButton("Reset");
  btn.mousePressed(btnPressed);

  LINE_WIDTH = width / LENGTH;
  LINE_HEIGHT_STEP = height / LENGTH;

  for (let i = 0; i < LENGTH; i++) {
    arr[i] = floor(random() * LENGTH);
    arrCopy[i] = arr[i];
  }
}

function draw() {
  background (0);

  for (let i = 0; i < LENGTH; i++) {
    fill(255, 255, 0);
    stroke(255, 255, 0);
    strokeWeight(0);
    rect(i * LINE_WIDTH, height - (arrCopy[i] * LINE_HEIGHT_STEP), LINE_WIDTH, arrCopy[i] * LINE_HEIGHT_STEP);
  }

  if (rendezve && frameCount % SPEED == 0) {
    nextStep();
  }
}

function mousePrsd() {
  if (!rendezve) {
    selectionSort();
    rendezve = true;
  }
}

function btnPressed() {
  rendezve = false;
  actionsB = [];
  actionsJ = [];

  for (let i = 0; i < LENGTH; i++) {
    arr[i] = floor(random() * LENGTH);
    arrCopy[i] = arr[i];
  }
}




function csere(array, egyik, masik) {
  let tmp = array[egyik];
  array[egyik] = array[masik];
  array[masik] = tmp;
}

function selectionSort() {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min != i) {
      csere(arr, i, min);
      actionsB.push(i);
      actionsJ.push(min);
    }
  }
}

function nextStep() {
  let bal = actionsB.shift();
  let jobb = actionsJ.shift();
  csere(arrCopy, bal, jobb);
}
