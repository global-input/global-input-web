const faker = require('faker');
const puppeteer = require('puppeteer');
const write = require ('write');
const person = {
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words()
};

describe('H1 Text', () => {
  test('transfer content', async () => {
    let browser = await puppeteer.launch({
      headless: false
    });
    
    let page = await browser.newPage();
    let code=null;
    page.on('console', msg => {
      if(msg && msg.text().indexOf('[[')>=0){
        console.log('CODE:', msg.text());  
        code=msg.text();
      }  
      else{
        console.log('LOG:', msg.text());
      }
      
    });
    
    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ''
    });
    
    //await page.goto('http://localhost:3000/global-input-app/content-transfer');
    await page.goto('http://localhost:3000/global-input-app/send-message');
    await page.waitForSelector('[data-testid="globalinput-qr-code-label"]');
    
    //const html = await page.$eval('.App-title', e => e.innerHTML);
    //expect(html).toBe('Welcome to React');


    
  
  
    if(code){
      let testData={
        input:code
      }
      write.sync('/tmp/test-data/test-code.json',JSON.stringify(testData),{overwrite:true});


      


    





    }
    await page.waitFor(60000)
    browser.close();
    
    
  }, 160000);
});