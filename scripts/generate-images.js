const fs = require('fs');
const path = require('path');

const types = [
  { code: 'OJBK', name: '无所谓人' },
  { code: 'THAN-K', name: '感恩者' },
  { code: 'FAKE', name: '伪人' },
  { code: 'SEXY', name: '尤物' },
  { code: 'MALO', name: '吗喽' },
  { code: 'Dior-s', name: '屌丝' },
  { code: 'MUM', name: '妈妈' },
  { code: 'ZZZZ', name: '装死者' },
  { code: 'LOVE-R', name: '多情者' },
  { code: 'IMSB', name: '傻者' },
  { code: 'SOLO', name: '孤儿' },
  { code: 'CTRL', name: '拿捏者' },
  { code: 'FUCK', name: '草者' },
  { code: 'OH-NO', name: '哦不人' },
  { code: 'GOGO', name: '行者' },
  { code: 'JOKE-R', name: '小丑' },
  { code: 'MONK', name: '僧人' },
  { code: 'SHIT', name: '愤世者' },
  { code: 'DEAD', name: '死者' },
  { code: 'ATM-er', name: '送钱者' },
  { code: 'THIN-K', name: '思考者' },
  { code: 'IMFW', name: '废物' },
  { code: 'WOC!', name: '握草人' },
  { code: 'POOR', name: '贫困者' },
  { code: 'BOSS', name: '领导者' },
  { code: 'DRUNK', name: '酒鬼' },
  { code: 'HHHH', name: '傻乐者' },
];

const dir = path.join(__dirname, '../public/images/results');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

types.forEach(t => {
  const bgColor = getRandomColor();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
  <rect width="100%" height="100%" fill="${bgColor}" />
  <rect x="50" y="50" width="500" height="700" fill="#ffffff" rx="20" opacity="0.9" />
  <text x="300" y="300" font-family="sans-serif" font-size="80" font-weight="bold" fill="#333" text-anchor="middle">${t.code}</text>
  <text x="300" y="450" font-family="sans-serif" font-size="100" font-weight="bold" fill="#111" text-anchor="middle">${t.name}</text>
  <text x="300" y="600" font-family="sans-serif" font-size="30" fill="#666" text-anchor="middle">SBTI 性格测试</text>
</svg>`;
  // handle special characters in filename like "WOC!" or "Dior-s"
  const filename = t.code.replace(/[^a-zA-Z0-9-]/g, '') + '.svg';
  fs.writeFileSync(path.join(dir, filename), svg);
});

console.log('Images generated successfully in public/images/results/');
