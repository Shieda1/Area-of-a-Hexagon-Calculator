// https://calculator.swiftutors.com/area-of-a-hexagon-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const areaofHexagonRadio = document.getElementById('areaofHexagonRadio');
const edgeLengthRadio = document.getElementById('edgeLengthRadio');

let areaofHexagon;
let edgeLength = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

areaofHexagonRadio.addEventListener('click', function() {
  variable1.textContent = 'Edge Length';
  edgeLength = v1;
  result.textContent = '';
});

edgeLengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of Hexagon';
  areaofHexagon = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(areaofHexagonRadio.checked)
    result.textContent = `Area of Hexagon = ${computeAreaofHexagon().toFixed(5)}`;

  else if(edgeLengthRadio.checked)
    result.textContent = `Edge Length = ${computeEdgeLength().toFixed(5)}`;
})

// calculation

function computeAreaofHexagon() {
  return ((3 * Math.sqrt(3)) / 2) * Math.pow(Number(edgeLength.value), 2);
}

function computeEdgeLength() {
  return Math.sqrt((Number(areaofHexagon.value) * 2) / (3 * Math.sqrt(3)));
}