const browserObject = require('./browser');

const emailadd = "kasun@gmail.com"
const pswd = "Wa1n@1111"

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();


const scraperObject = {
	url: 'https://fruitlab.com/',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url , {timeout: 0});
	
		// to acept cookies		
		await page.click('#qc-cmp2-ui > div.qc-cmp2-footer.qc-cmp2-footer-overlay.qc-cmp2-footer-scrolled > div > button.css-n2s0rs' )
        await page.click('body > div.header__section > header > div.header__profile-wallet-and-responsive.header--login.signin > button.gap-10.button.button---link.button--inverted' )
		// you must go down of the page to get the paths of elements recognizable
		await page.keyboard.press("PageDown");
		await page.click('#login > div:nth-child(7) > button' )
		
		await page.keyboard.press("PageDown");
		await page.type("input[name=signupEmail]", emailadd );
		await page.type("input[name=signupPassword]", pswd );
		await page.type("input[name=confirmPassword]",  pswd);
		await page.$eval('input[name="signupTerms"]', check => check.checked = true);
	
		await page.click('#btn_registerform' )
	}
}

async function scrapeAll(browserInstance){
	let browser;
	try{
		browser = await browserInstance;
		scrapobj = await scraperObject ;
		await scrapobj.scraper(browser);	
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}


// Pass the browser instance to the scraper controller
scrapeAll(browserInstance)