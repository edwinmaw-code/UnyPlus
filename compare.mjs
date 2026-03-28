import puppeteer from 'puppeteer';
import fs from 'fs';

const base64 = fs.readFileSync('./screenshots/r2-full.png').toString('base64');
const imgH = 5993;
const imgW = 1440;

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: imgW, height: imgH });
await page.setContent(`
  <html><body style="margin:0;padding:0;background:#fff;">
    <img src="data:image/png;base64,${base64}" style="width:${imgW}px;height:${imgH}px;display:block;" />
  </body></html>
`);
await new Promise(r => setTimeout(r, 800));

const slices = [
  { name: 'r2-s1-hero',       y: 0    },
  { name: 'r2-s2-uni',        y: 700  },
  { name: 'r2-s3-features',   y: 1300 },
  { name: 'r2-s4-features2',  y: 2000 },
  { name: 'r2-s5-howitworks', y: 2600 },
  { name: 'r2-s6-study',      y: 3300 },
  { name: 'r2-s7-study2',     y: 4000 },
  { name: 'r2-s8-video',      y: 4600 },
  { name: 'r2-s9-cta',        y: 5100 },
  { name: 'r2-s10-footer',    y: 5600 },
];

for (const { name, y } of slices) {
  const h = Math.min(800, imgH - y);
  await page.screenshot({ path: `./screenshots/${name}.png`, clip: { x: 0, y, width: imgW, height: h } });
  console.log(`${name}.png`);
}
await browser.close();
