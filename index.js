const express = require('express');
const app = express();
const puppeteer = require('puppeteer');

app.get('/', function(req, res) {
    puppeteer.launch({headless: false}).then(async function(browser) {
        const page = await browser.newPage();
        await page.goto('https://independientes.aportesenlinea.com/Portal/Paginas/Home.aspx');
        page.setDefaultTimeout(60_000)

        await page.waitForSelector('#Contenido_txtNumeroDocumento');
        await page.type('#Contenido_txtNumeroDocumento', '1037629138');

        await page.waitForSelector('#Contenido_aPagarYa');
        await page.click('#Contenido_aPagarYa');

        await page.waitForSelector('#Contenido_tbClave');
        await page.type('#Contenido_tbClave', 'mqfUMZ4akt9yuk');

        await page.waitForSelector('#Contenido_aContinuar');
        await page.click('#Contenido_aContinuar');

        await page.waitForSelector('#Contenido_btPago');
        await page.click('#Contenido_btPago');

        await page.waitForSelector('#Contenido_BtnPagar');
        await page.click('#Contenido_BtnPagar');

        await page.waitForSelector('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only');
        await page.click('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only');

        await page.waitForSelector('#ddlBancos');
        await page.select('#ddlBancos', '1051');

        await page.waitForSelector('label[for="personal"]');
        await page.click('label[for="personal"]');

        await page.waitForSelector('#btnPagar');
        await page.click('#btnPagar');

        // PSE
        await page.waitForSelector('#PNEMail');
        await page.type('#PNEMail', 'andreadiaz1220@gmail.com');

        await page.waitForSelector('#btnSeguir2');
        await page.click('#btnSeguir2');

        // await browser.close();
    });
});

const PORT = 3000;
app.listen(PORT, function() {
    console.log(`Running on port ${PORT}`);
});
