import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const refPath = path.resolve(__dirname, 'src/assets/Unyplus Landing Page.png');
const base64 = fs.readFileSync(refPath).toString('base64');

const scaledW = 1466;
const scaledH = Math.round((32768 / 5865) * scaledW);

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: scaledW, height: scaledH });
await page.setContent(`
  <html><body style="margin:0;padding:0;background:#fff;">
    <img src="data:image/png;base64,${base64}" style="width:${scaledW}px;height:${scaledH}px;display:block;" />
  </body></html>
`);
await new Promise(r => setTimeout(r, 3000));

const slices = [
  { name: 'ref-detail-uni',       y: 800  },
  { name: 'ref-detail-feat1',     y: 1200 },
  { name: 'ref-detail-feat2',     y: 1700 },
  { name: 'ref-detail-feat3',     y: 2200 },
  { name: 'ref-detail-how1',      y: 2700 },
  { name: 'ref-detail-study1',    y: 3400 },
  { name: 'ref-detail-study2',    y: 4000 },
  { name: 'ref-detail-study3',    y: 4600 },
  { name: 'ref-detail-video',     y: 5200 },
  { name: 'ref-detail-video2',    y: 5800 },
  { name: 'ref-detail-cta',       y: 6600 },
  { name: 'ref-detail-footer',    y: 7200 },
];

for (const { name, y } of slices) {
  await page.screenshot({
    path: `./screenshots/${name}.png`,
    clip: { x: 0, y, width: scaledW, height: 700 },
  });
  console.log(`Saved: ${name}.png`);
}
await browser.close();
console.log('Done.');
