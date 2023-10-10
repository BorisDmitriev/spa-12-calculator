const puppeteer = require("puppeteer");
const path = require('path');
const browserOptions = {
    headless: true,
    ignoreHTTPSErrors: true,
}

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch(browserOptions);
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
}, 30000);

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
});

describe('Browser-Calculator', () => {
    it("Should add given numbers and display the result", async () => {
        const addInput = await page.$('#add_1');
        await addInput.type('5');
        const addInput2 = await page.$('#add_2');
        await addInput2.type('10');
        const addResult = await page.$('#add_result');
        expect(await addResult.evaluate(node => node.value)).toBe('15');
    });
    it("Should subtract given numbers and display the result", async () => {
        const subtractInput = await page.$('#subtract_1');
        await subtractInput.type('10');
        const subtractInput2 = await page.$('#subtract_2');
        await subtractInput2.type('5');
        const subtractResult = await page.$('#subtract_result');
        expect(await subtractResult.evaluate(node => node.value)).toBe('5');
    });
    it("Should multiply given numbers and display the result", async () => {
        const multiplyInput = await page.$('#multiply_1');
        await multiplyInput.type('5');
        const multiplyInput2 = await page.$('#multiply_2');
        await multiplyInput2.type('10');
        const multiplyResult = await page.$('#multiply_result');
        expect(await multiplyResult.evaluate(node => node.value)).toBe('50');
    });
    it("Should divide given numbers and display the result", async () => {
        const divideInput = await page.$('#divide_1');
        await divideInput.type('100');
        const divideInput2 = await page.$('#divide_2');
        await divideInput2.type('20');
        const divideResult = await page.$('#divide_result');
        expect(await divideResult.evaluate(node => node.value)).toBe('5');
    });
    it("Should return the remainder of the  given numbers and display the result", async () => {
        const moduloInput = await page.$('#modulo_1');
        await moduloInput.type('5');
        const moduloInput2 = await page.$('#modulo_2');
        await moduloInput2.type('2');
        const moduloResult = await page.$('#modulo_result');
        expect(await moduloResult.evaluate(node => node.value)).toBe('1');
        //await page.screenshot({ path: './screenshot.png' });
    });
});