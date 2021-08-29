var boardList = [];

function calculate() {
  var length = document.getElementById('length').value;
  var width = document.getElementById('width').value;
  var thickness = document.getElementById('thickness').value;

  var price = document.getElementById('price').value;
  var rounding = document.getElementById('rounding').value;

  var boardfeet = (length * width * thickness) / 144;
  boardfeet = boardfeet.toFixed(rounding);

  boardList.push(parseFloat(boardfeet));
  document.getElementById('boardlist').value = boardList;

  var tboardfeet = boardList.reduce((a, b) => a + b, 0);
  tboardfeet = tboardfeet.toFixed(rounding);
  document.getElementById('tboardfeet').value = tboardfeet;
  document.getElementById('tboards').value = boardList.length;

  document.getElementById('boardfeet').value = boardfeet;

  if (price.length !== 0) {
    var pricecalc = boardfeet * price;
    pricecalc = pricecalc.toFixed(rounding);
    document.getElementById('pricecalc').value = pricecalc;
  }
}

function clear() {
  boardList = [];
  document.getElementById('length').value = "";
  document.getElementById('width').value = "";
  document.getElementById('thickness').value = "";
  document.getElementById('price').value = "";
  document.getElementById('rounding').value = "2";
  document.getElementById('boardlist').value = "";
  document.getElementById('tboardfeet').value = "";
  document.getElementById('tboards').value = "";
  document.getElementById('boardfeet').value = "";
  document.getElementById('pricecalc').value = "";
}
