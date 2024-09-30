const abDiv = document.getElementById('about');
const toDiv = document.getElementById('tool');
const coDiv = document.getElementById('contact');

window.addEventListener("load", () => {
  abDiv.style.display = 'block';
  toDiv.style.display = 'none';
  coDiv.style.display = 'none';
});

function about() {
  abDiv.style.display = 'block';
  toDiv.style.display = 'none';
  coDiv.style.display = 'none';
}

function tool() {
  abDiv.style.display = 'none';
  toDiv.style.display = 'block';
  coDiv.style.display = 'none';
}

function contact() {
  abDiv.style.display = 'none';
  toDiv.style.display = 'none';
  coDiv.style.display = 'block';
}

function gen() {
  document.getElementById('qrcode').src = "https://api.qrserver.com/v1/create-qr-code/?data=" + document.getElementById('qrtxt').value;
}