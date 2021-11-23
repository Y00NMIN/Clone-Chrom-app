const imges=[
  "earth.jpg",
  "moun.jpg",
  "wave.jpg"
];

const backgroundImg= imges[Math.floor(Math.random() * imges.length)];

const bgImges =document.createElement("img");

bgImges.src = `img/${backgroundImg}`;

document.body.appendChild(bgImges);