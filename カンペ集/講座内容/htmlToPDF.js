
  const puppeteer = require('puppeteer');

  if (process.argv.length > 2) {
    fileName = process.argv[2];
  } else {
    fileName = '2日目';
  }

  result = process.argv[1].split( '\\' );
  result[result.length-1] = 'html';
  result[result.length] = fileName;

  (async () => {
   const browser = await puppeteer.launch({
     ignoreDefaultArgs: ['--disable-extensions'],
     executablePath: 'C:\\Users\\m-yasukawa\\node_modules\\puppeteer\\.local-chromium\\win64-1011831\\chrome-win\\chrome.exe'
   });
   const page = await browser.newPage();
     // PDF出力対象ページ
     await page.goto(result.slice(0, result.length).join("\\\\")+'.html');
  
     // PDF作成処理
     await page.pdf({
       path: 'pdf\\\\'+fileName+'.pdf',
       printBackground:true,
       format:'A4',
       margin: {
        top: "0.5cm",
        bottom: "1cm",
        left: "1cm",
        right: "1cm"
      }
  
     });
   
   //await browser.exportPdf();
   await browser.close();
  })();