var boardList = [];
var prices = [];

function calculate() {
  var length = document.getElementById('length').value;
  var width = document.getElementById('width').value;
  var thickness = document.getElementById('thickness').value;

  var price = document.getElementById('price').value;

  var boardfeet = (length * width * thickness) / 144;
  boardfeet = boardfeet.toFixed(2);

  boardList.push(parseFloat(boardfeet));
  document.getElementById('boardlist').value = boardList;

  var tboardfeet = boardList.reduce((a, b) => a + b, 0);
  tboardfeet = tboardfeet.toFixed(2);
  document.getElementById('tboardfeet').value = tboardfeet;
  document.getElementById('tboards').value = boardList.length;

  document.getElementById('boardfeet').value = boardfeet;

  if (price.length !== 0) {
    var pricecalc = boardfeet * price;
    pricecalc = pricecalc.toFixed(2);

    prices.push(parseFloat(pricecalc));
    var tprice = prices.reduce((a, b) => a + b, 0);
    tprice = tprice.toFixed(2);

    document.getElementById('tprice').value = tprice;
    document.getElementById('pricecalc').value = pricecalc;
  }
}

function clear() {
  boardList = [];
  prices = [];
  var resetValues = ['length', 'width', 'thickness', 'price', 'boardlist', 'tboardfeet', 'tboards', 'boardfeet', 'tprice', 'pricecalc'];
  resetValues.forEach((item, i) => {
    document.getElementById(item).value = "";
  });
}
