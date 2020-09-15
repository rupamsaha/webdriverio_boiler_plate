
SELECTORS = {
    "allEmployeeTitle": '.jqx-tree-grid-title',
    "employeeCheckbox" : '#row0treeGrid .jqx-tree-grid-checkbox',
    "viewButton" : '#btn',
    "firstEmployeeDetails": '#listitem0listBoxSelected'     
}

module.exports = class Home {

    async employeeDetailsRowText(rowNum){
        let selector = '#listitem' + `${rowNum}` + 'listBoxSelected'
        let element =  await browser.$(selector)
        return element.getText()
    }

    async checkFirstEmployeeCheckBox () {
        const employee1CheckboxElement = await browser.$(SELECTORS.employeeCheckbox)
        await employee1CheckboxElement.click()             
    }

    async checkEmployeeCheckBox (name) {
        let checkboxElement
        let i
        const employeeCheckboxElement = await browser.$$(SELECTORS.allEmployeeTitle)
        // console.log(employeeCheckboxElement.length)
        for (i = 0; i < employeeCheckboxElement.length; i++){
            console.log(employeeCheckboxElement[i].getText())
            if (employeeCheckboxElement[i].getText() === name){
                checkboxElement = '#row1' + `${i}` + 'treeGrid .jqx-tree-grid-checkbox'
                await browser.$(checkboxElement).click()
                break
            }
        }
        return false            
    }

    async clickOnViewButton () {
        const viewButtonElement = await browser.$(SELECTORS.viewButton)
        await viewButtonElement.click()      
    }

    // async searchForText (text) {
    //     const searchButtonElement = await browser.$(SELECTORS.searchButton)
    //     await searchButtonElement.click()
    //     const searchBoxElement = await browser.$(SELECTORS.searchBox)
    //     await searchBoxElement.waitForDisplayed()
    //     await searchBoxElement.setValue(text)
    //     await browser.keys('Enter')
    // }
}