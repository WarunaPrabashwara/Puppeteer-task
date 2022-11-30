const browserObject = require('./browser');

//const emailadd = 'gam22ni@gmail.com'
const emailadd =  'h@gmail.com'
const pswd = "Gam@18"

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
		await page.keyboard.press("PageDown");
		//await page.type("input[name=email]", emailadd );
		await page.type("input[name=email]", emailadd );
		await page.type("input[name=password]", pswd );
		await page.click('#loginForm > div > div:nth-child(3) > button:nth-child(1)' )


		await page.click('.videothumbnail');
		//await page.click('#games__outer_top_id > li:nth-child(1)' )

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