// nilai konstan
const size = 600;
const center = 0; // untuk pusat lingkaran awalnya di 0,0
const radius = 86;
var yHillsBottom = 130; // posisi awal bukit dibawah (diluar frame)
var yHillsTop = -130; // posisi awal 
const rate = 4; // faktor laju pergerakan
var degree = 0; // derajat untuk perputaran
var initialZoom = 7

function setup() {
  createCanvas(size, size); // buat ukuran kotak
}

function draw() {
  var s = second();
  background('#a8d8f1');
  strokeWeight(2); // tebal garis 2px
  // gambar segi enam dengan warna hitam
  // fill('#232323');
  fill(0);
  polygon(width / 2, width / 2, width / 2, 6);
  noStroke();

  push();
  translate(width / 2, height / 2); // pindah posisi pusat ke tengah
  scale(initialZoom); // zoom flowerOfLife
  // jika lebih dari 1 kurangi nilainya sebesar 0.2
  if (initialZoom > 1) {
    initialZoom -= 0.2;
  }
  flowerOfLife(center, radius, 255); // lingkaran ditengah
  pop();

  // push matrix agar blend hanya diterapkan untuk object gradient saja
  push();
  translate(width / 2, height / 2); // pindah posisi pusat ke tengah
  blendMode("darken"); // agar warna gradient blend dengan warna putih dan hilang pada warna hitam
  rotate(radians(degree)); // putar gradient nya
  gradient(0); // gradient yang di-blend
  degree += 1 * rate; // increment derajat dikali factor laju nya
  pop();

  sideDecor(); // dekorasi di kiri
  // dekorasi yang sama tapi dipindah ke kanan bawah dan diputar 180 derajat
  push();
  translate(600, 600);
  rotate(radians(180));
  sideDecor();
  pop();

  // bukit bawah
  push();
  translate(0, yHillsBottom);
  // jika sudah 0, berhenti naik
  if (yHillsBottom <= 0) {
    yHillsBottom = 0;
  } else {
    yHillsBottom -= 3;
  }

  // bukit-bukit kiri bawah
  greenHills();
  pinkHills();
  brownHills();
  greyHills();

  // bukit-bukit kanan bawah
  push();
  translate(width, 0);
  scale(-1, 1);
  greenHills();
  pinkHills();
  brownHills();
  greyHills();
  pop();
  pop();

  // bukit atas
  push();
  translate(0, yHillsTop);
  // jika sudah 0, berhenti naik
  if (yHillsTop >= 0) {
    yHillsTop = 0;
  } else {
    yHillsTop += 3;
  }
  // bukit-bukit kanan atas
  push();
  translate(600, 600);
  rotate(radians(-180));
  // scale(-1,1);
  greenHills();
  pinkHills();
  brownHills();
  greyHills();
  pop();

  // bukit-bukit kiri atas
  push();
  translate(0, 600);
  rotate(radians(-180));
  scale(-1, 1);
  greenHills();
  pinkHills();
  brownHills();
  greyHills();
  pop();
  pop();

  // dekorasi awan
  clouds();

  push();
  translate(width, 0);
  scale(-1, 1);
  clouds();
  pop();

  push();
  translate(600, 600);
  rotate(radians(-180));
  clouds();
  pop();

  push();
  translate(0, 600);
  rotate(radians(-180));
  scale(-1, 1);
  clouds();
  pop();

  // membuat text
  fill(0);
  text('Vauwez Sam El Fareez', 10, 20);
  text('2009106054', 10, 35);
}

// fungsi untuk membuat flower of life (lingkaran-lingkaran ditengah)
function flowerOfLife(center, radius, stroke_color) {
  noFill(); // tanpa warna fill
  stroke(stroke_color);
  // kolom tengah, 5 lingkaran saling berpotongan
  // dimana pusat lingkaran yang berdekatan (atas bawah) akan berjarak sebesar radius lingkaran tetangga
  circle(center, center - radius, radius);
  circle(center, center - radius / 2, radius);
  circle(center, center, radius); // pusat semua lingkaran
  circle(center, center + radius / 2, radius);
  circle(center, center + radius, radius);

  // kolom kanan
  circle(center + radius / 2 - radius / 16, center - radius / 2 - radius / 4, radius);
  circle(center + radius / 2 - radius / 16, center - radius / 4, radius);
  circle(center + radius / 2 - radius / 16, center + radius / 4, radius);
  circle(center + radius / 2 - radius / 16, center + radius / 2 + radius / 4, radius);

  // kolom kiri
  circle(center - radius / 2 + radius / 16, center - radius / 2 - radius / 4, radius);
  circle(center - radius / 2 + radius / 16, center - radius / 4, radius);
  circle(center - radius / 2 + radius / 16, center + radius / 4, radius);
  circle(center - radius / 2 + radius / 16, center + radius / 2 + radius / 4, radius);

  // kolom paling kanan
  circle(center + radius - radius / 8, center - radius / 2, radius);
  circle(center + radius - radius / 8, center, radius);
  circle(center + radius - radius / 8, center + radius / 2, radius);

  // kolom paling kiri
  circle(center - radius + radius / 8, center - radius / 2, radius);
  circle(center - radius + radius / 8, center, radius);
  circle(center - radius + radius / 8, center + radius / 2, radius);

  noStroke();
}

// fungsi untuk membuat polygon
function polygon(x, y, radius, npoints) {
  const angle = TWO_PI / npoints;
  beginShape();
  for (let i = 0; i < TWO_PI; i += angle) {
    var sx = x + cos(i) * radius;
    var sy = y + sin(i) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// fungsi untuk membuat dekorasi warna di pinggir
function sideDecor() {
  noStroke();

  // bentuk warna pink
  fill('#f766b8');
  beginShape();
  vertex(0, 0);
  vertex(60, 0);
  vertex(60, 600);
  vertex(0, 600);
  endShape(CLOSE);

  // bentuk warna merah
  fill('#f42a27');
  beginShape();
  vertex(0, 300 - 95 - 26 - 18 - 16 - 14 - 19 - 23 - 41);
  vertex(60, 0);
  vertex(60, 300 + 42 + 48 + 35 + 30 + 30 + 34 + 49);
  vertex(60, 600);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14 + 19 + 23 + 41);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14 + 19 + 23);
  endShape(CLOSE);

  // bentuk warna oren cerah
  fill('#e1c888');
  beginShape();
  vertex(0, 300 - 95 - 26 - 18 - 16 - 14 - 19 - 23);
  vertex(60, 300 - 42 - 48 - 35 - 30 - 30 - 34 - 49);
  vertex(60, 300 + 42 + 48 + 35 + 30 + 30 + 34);
  vertex(60, 300 + 42 + 48 + 35 + 30 + 30 + 34 + 49);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14 + 19 + 23);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14 + 19);
  endShape(CLOSE);

  // bentuk warna oren 
  fill('#e9824a');
  beginShape();
  vertex(0, 300 - 95 - 26 - 18 - 16 - 14 - 19);
  vertex(60, 300 - 42 - 48 - 35 - 30 - 30 - 34);
  vertex(60, 300 + 42 + 48 + 35 + 30 + 30);
  vertex(60, 300 + 42 + 48 + 35 + 30 + 30 + 34);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14 + 19);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14);
  endShape(CLOSE);

  // bentuk warna oren 
  fill('#e9824a');
  beginShape();
  vertex(0, 300 - 95 - 26 - 18 - 16 - 14 - 19);
  vertex(60, 300 - 42 - 48 - 35 - 30 - 30 - 34);
  vertex(60, 300 + 42 + 48 + 35 + 30 + 30);
  vertex(60, 300 + 42 + 48 + 35 + 30 + 30 + 34);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14 + 19);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14);
  endShape(CLOSE);

  // bentuk warna kuning
  fill('#f5c74c');
  beginShape();
  vertex(0, 300 - 95 - 26 - 18 - 16 - 14);
  vertex(60, 300 - 42 - 48 - 35 - 30 - 30);
  vertex(60, 300 + 42 + 48 + 35 + 30);
  vertex(60, 300 + 42 + 48 + 35 + 30 + 30);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14);
  vertex(0, 300 + 95 + 26 + 18 + 16);
  endShape(CLOSE);

  // bentuk warna kuning hijau
  fill('#d4df3e');
  beginShape();
  vertex(0, 300 - 95 - 26 - 18 - 16);
  vertex(60, 300 - 42 - 48 - 35 - 30);
  vertex(60, 300 + 42 + 48 + 35);
  vertex(60, 300 + 42 + 48 + 35 + 30);
  vertex(0, 300 + 95 + 26 + 18 + 16);
  vertex(0, 300 + 95 + 26 + 18);
  endShape(CLOSE);

  // bentuk warna hijau
  fill('#71d044');
  beginShape();
  vertex(0, 300 - 95 - 26 - 18);
  vertex(60, 300 - 42 - 48 - 35);
  vertex(60, 300 + 42 + 48);
  vertex(60, 300 + 42 + 48 + 35);
  vertex(0, 300 + 95 + 26 + 18);
  vertex(0, 300 + 95 + 26);
  endShape(CLOSE);

  // bentuk warna biru muda
  fill('#19c3ec');
  beginShape();
  vertex(0, 300 - 95 - 26);
  vertex(60, 300 - 42 - 48);
  vertex(60, 300 + 42);
  vertex(60, 300 + 42 + 48);
  vertex(0, 300 + 95 + 26);
  vertex(0, 300 + 95);
  endShape(CLOSE);

  // bentuk warna biru
  fill('#166fcc');
  beginShape();
  vertex(0, 300 - 55);
  vertex(0, 300 - 95);
  vertex(60, 300 - 42);
  vertex(60, 300);
  vertex(60, 300 + 42);
  vertex(0, 300 + 95);
  vertex(0, 300 + 55);
  vertex(31, 300);
  endShape(CLOSE);

  // bentuk warna ungu
  fill('#4739b6');
  beginShape();
  vertex(0, 300 - 55);
  vertex(31, 300);
  vertex(0, 300 + 55);
  vertex(0, 300 + 9);
  vertex(9, 300);
  vertex(0, 300 - 9);
  endShape(CLOSE);

  // bentuk warna pink
  fill('#7f629d');
  beginShape();
  vertex(0, 300 - 9);
  vertex(9, 300);
  vertex(0, 300 + 9);
  endShape(CLOSE);
}

// fungsi untuk menghasilkan bukit bukit
function greenHills() {
  fill('#3fa121');
  beginShape();
  vertex(width / 2, 486);
  bezierVertex(288, 486, 292, 492, 285, 491);
  bezierVertex(279, 491, 264, 472, 252, 471);
  bezierVertex(229, 471, 218, 485, 213, 489);
  bezierVertex(208, 492, 196, 492, 191, 498);
  bezierVertex(187, 504, 178, 505, 171, 510);
  bezierVertex(164, 516, 141, 537, 135, 545);
  bezierVertex(29, 552, 131, 584, 134, height);
  bezierVertex(134, height, width / 2, height, width / 2, height);
  endShape();
}

function pinkHills() {
  fill('#f46db6');
  beginShape();
  vertex(205, 521);
  bezierVertex(195, 514, 164, 515, 150, 516);
  bezierVertex(135, 516, 123, 550, 117, 550);
  bezierVertex(111, 551, 109, 541, 100, 539);
  bezierVertex(91, 537, 68, 527, 58, 530);
  bezierVertex(47, 534, 39, 562, 34, 559);
  bezierVertex(29, 557, 16, 550, 0, 538);
  vertex(0, height);
  vertex(216, height);
  bezierVertex(216, height, 217, 529, 205, 521);
  endShape();
}

function brownHills() {
  fill('#a9856a');
  beginShape();
  vertex(width / 2, 496);
  bezierVertex(285, 503, 272, 503, 266, 503);
  bezierVertex(262, 503, 253, 514, 249, 515);
  bezierVertex(245, 518, 239, 518, 224, 522);
  bezierVertex(209, 528, 186, 541, 173, 546);
  bezierVertex(161, 551, 144, 543, 134, 544);
  bezierVertex(126, 547, 101, 570, 91, 577);
  bezierVertex(81, 584, 88, 600, 88, 600);
  vertex(width / 2, height);
  endShape();
}

function greyHills() {
  fill('#bab6b5');
  beginShape();
  vertex(300, 589);
  bezierVertex(300, 588, 284, 584, 278, 578);
  bezierVertex(271, 572, 268, 577, 262, 578);
  bezierVertex(256, 579, 258, 574, 253, 573);
  bezierVertex(248, 572, 246, 577, 241, 577);
  bezierVertex(235, 577, 233, 570, 223, 570);
  bezierVertex(213, 570, 206, 577, 197, 577);
  bezierVertex(189, 577, 178, 569, 184, 569);
  bezierVertex(150, 570, 144, 577, 134, 577);
  bezierVertex(125, 577, 122, 568, 110, 569);
  bezierVertex(104, 569, 95, 577, 91, 577);
  bezierVertex(83, 577, 86, 572, 76, 572);
  bezierVertex(65, 571, 52, 600, 39, 589);
  bezierVertex(27, 579, 0, 571, 0, 571);
  vertex(0, height);
  vertex(width / 2, height);
  endShape();
}

// fungsi untuk menghasilkan linear gradient yang melingkar
function gradient(start) {
  colorMode(HSB, 360, 100, 100, 100); // untuk menghasilkan spektrum warna

  // buat line dengan warna berurutan sesuai dengan spektrum warna
  // dan rotasi nya bertambah 0.5 derajat
  // sehingga dihasilkan linear gradient yang melingkar
  for (let i = 0; i <= 360; i += 0.5) {
    push(); // push matrix agar hanya line yang berotasi
    rotate(radians(i));
    stroke(i, 100, 100); // increment nilai hue hingga 360

    // karena line akan dirotasi dengan pusat ditengah, supaya seluruh canvas terpenuhi
    // maka jarak terpanjang adalah dari tengah ke salah satu sudut (setengah diagonal)
    // untuk persegi, panjang diagonal adalah sisi kali akar 2.
    line(start, start, (start + width * sqrt(2)) / 2, start); // buat line dengan panjang setengah diagonal
    pop();
  }
  colorMode(RGB, 255); // kembalikan mode warna
}

// fungsi untuk membuat awan
function clouds() {
  fill('#bad0dd');
  beginShape();
  curveVertex(34, 339);
  curveVertex(34, 339);
  curveVertex(41, 335);
  curveVertex(53, 334);
  curveVertex(61, 326);
  curveVertex(89, 329);
  curveVertex(109, 342);
  curveVertex(87, 347);
  curveVertex(52, 344);
  curveVertex(36, 344);
  endShape();
}