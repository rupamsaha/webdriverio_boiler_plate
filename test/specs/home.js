const assert = require('assert')
const envs = require('../../config/env')
const Home = require('../../pages/home')
const testData = require('../../testData')
let home 

describe('Employee base origin homepage', () => {

    before(async () => {
        home = new Home()
    })

    after(async () => {
        console.log('This is the after hook')
    })

    it('Verify that user is able to fetch the place of origin for an employee', async () => {
        await browser.url(envs.live)
        await home.checkFirstEmployeeCheckBox()
        await home.clickOnViewButton()
        let details = await home.employeeDetailsRowText(0)
        assert.strictEqual(details, testData.employeeOneDetails)
        // const title = await browser.getTitle()
        // assert.strictEqual(title, 'flight, browse our flight offers and explore the Emirates Experience')
    })
})