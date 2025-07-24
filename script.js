const ข้อความ = [
  "รักฟิล์มมากเลยน้า 💖",
  "คิดถึงทุกวันเลย",
  "20/06/2025",
  "ฮึบ! อยู่กับฟิล์มแล้วมีความสุขที่สุด",
  "รักเธอที่สุด 1000 เท่า!",
  "รักแฟนมาก",
  "แฟนน่ารักที่สุดในโลก",
  "เอ็นดูเธอมากๆ",
  "เธอคือความสุขของฉัน",
  "เธอทำให้ฉันยิ้มได้เสมอ",
  "เธอคือทุกอย่างของฉัน",
  "เธอทำให้โลกนี้สดใสขึ้น",
  "เธอทำให้ฉันรู้สึกมีค่า",
  "เธอคือเหตุผลที่ฉันตื่นขึ้นมาในทุกๆ วัน",
  "เธอทำให้ฉันรู้สึกว่าชีวิตนี้มีความหมาย",
];

const แฟน = [
  "love1.jpg", "love2.jpg", "love3.jpg", "love4.jpg",
  "love5.jpg", "love6.jpg", "love7.jpg", "love8.jpg",
];

function สุ่มที่(x) {
  return Math.floor(Math.random() * x);
}

function ปล่อยข้อความ() {
  const el = document.createElement('div');
  el.className = 'ข้อความ';
  el.innerText = ข้อความ[สุ่มที่(ข้อความ.length)];
  el.style.left = สุ่มที่(window.innerWidth) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 10000);
}

function ปล่อยหัวใจ() {
  const el = document.createElement('div');
  el.className = 'หัวใจ';
  el.innerText = '❤';
  el.style.left = สุ่มที่(window.innerWidth) + 'px';
  el.style.fontSize = (1 + Math.random() * 2) + 'rem';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 10000);
}

function ปล่อยแฟน() {
  const el = document.createElement('div');
  el.className = 'แฟน';
  const img = document.createElement('img');
  img.src = แฟน[สุ่มที่(แฟน.length)];
  el.style.left = สุ่มที่(window.innerWidth) + 'px';
  el.appendChild(img);
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 10000);
}

setInterval(ปล่อยข้อความ, 600);
setInterval(ปล่อยหัวใจ, 800);
setInterval(ปล่อยแฟน, 1000);

function เปิดปิดเพลง() {
  const เพลง = document.getElementById('เพลงรัก');
  const ปุ่ม = document.querySelector('.ปุ่มเสียง');
  if (เพลง.paused) {
    เพลง.play();
    ปุ่ม.innerText = '🔊 ปิดเสียง';
  } else {
    เพลง.pause();
    ปุ่ม.innerText = '🔈 เปิดเสียง';
  }
}
