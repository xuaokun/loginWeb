 const puppeteer = require('puppeteer');
 async function keyboard() {
         try{
                 //创建一个Browser浏览器实例，并设置相关参数
                 const browser = await puppeteer.launch({
                         timeout: 5000,
                         headless: false,
                         defaultViewport: null,
                         args: ['--start-maximized'],
                         ignoreDefaultArgs: ['--enable-automation']
                 });
                 //创建一个Page实例
                 const page = await browser.newPage();
                 //打开百度首页
                 let url = 'https://www.baidu.com/'
                 //https://authserver.hainanu.edu.cn/authserver/login
                 await page.goto(url);
                 const name = await page.$('#kw');
                 await name.type('新闻');
                 //键盘输入
                 // const password = await page.$('#password');
                 // await password.type('987654321');
                 //模拟键盘“回车”键
                 await page.keyboard.press('Enter');
                 //等待3s
                 await page.waitFor(3000);
                 let newUrl = page.url();//获取新页面的链接
                 console.log(newUrl);
                 if(newUrl != url){
                         console.log('验证成功！');
                 }else{
                         console.log('验证失败！');
                 }
                 await browser.close();
         }catch (e){
                 console.log(e);
         }
     }
 keyboard();
