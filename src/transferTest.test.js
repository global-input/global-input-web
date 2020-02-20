/* istanbul ignore file */

const faker = require('faker');
const puppeteer = require('puppeteer');
const write = require ('write');
const person = {
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words()
};
const urls={
      loadVideoPlayer: async ({page})=>await page.goto('http://localhost:3000/global-input-app/video-player'),
      loadContentTransfer:async ({page})=>  await page.goto('http://localhost:3000/global-input-app/content-transfer'),
      sendMessage: async ({page})=>await page.goto('http://localhost:3000/global-input-app/send-message'),
      gameExample: async ({page})=>await page.goto('http://localhost:3000/global-input-app/game-example'),
      formDataTransfer: async ({page})=> await page.goto('http://localhost:3000/global-input-app/form-data-transfer'),
      mobileEcryptionOld: async ({page})=>await page.goto('http://localhost:3000/global-input-app/qr-printing'),      
      mobileEcryption:async ({page})=> {
        debugger;
        await page.goto('http://localhost:3000/global-input-app/mobile-encryption')
      },      
}
const loadTestPage=urls.loadVideoPlayer;
const testTime=600000;
const testTimeOut=testTime*2;
//const testTime=6000;
//const testTime=600000;




describe('H1 Text', () => {
  test('transfer content', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools:true
    });
    
    let page = await browser.newPage();
    let code=null;
    
    page.on('console', msg => {
      
      if(msg && msg.text().indexOf('[[')>=0){        
        const msgCode=msg.text(); 
        if(code!==msgCode){
          code=msgCode;
          let testData={
            input:code
          }        
          write.sync('/tmp/tests/test-data/test-code.json',JSON.stringify(testData),{overwrite:true});
        }    
      }  
      else{
        console.log('LOG:*******', msg.text());
      }
      
    });
    
    page.emulate({
      viewport: {
        width: 1200,
        height: 800
      },
      userAgent: ''
    });
    
    loadTestPage({page});
  
    
    //await page.waitForSelector('[data-testid="globalinput-qr-code-label"]');
    
    //const html = await page.$eval('.App-title', e => e.innerHTML);
    //expect(html).toBe('Welcome to React');

    await page.waitFor(testTime);
    browser.close();    
  }, testTimeOut);
});