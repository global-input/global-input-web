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
      formDataTransfer2: async ({page})=> await page.goto('http://localhost:3000/global-input-app/form-data-transfer?formData=U2FsdGVkX1/L75KqmW46k9IT5KBo4KloQufXzt0/lX9q+1FqmsXZXIvNp7IShCYVSxrJWm5+JmK1EPCGbsrrgp9KHov+EKJ7Y5MAaT4lXDg402LkXFPZZmJ/J6qQmuw/rZU6w3zyfgrs3nb+nrQ6yziO7NCKRfdNxipODXz41E5AVPNRczY2M6cUfS156mz+r0COHP9gPGGCTJdQMTAF7IfOIZyGp/NGLgqsBRWJSn8WSvgsdPaNJ7YSzoxQeX2ehBDOxPAm9od24v/YENS8rAk6XDPDyCHigiJTj1O/VzJvxvkV6rA7nthKvRkeGtiLuMnfGWIfUlYe9sNgz4ZhXQ%3D%3D'),
            
      mobileEcryption:async ({page})=> {
        debugger;
        await page.goto('http://localhost:3000/global-input-app/mobile-encryption')
      },      
}
const loadTestPage=urls.formDataTransfer2;
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