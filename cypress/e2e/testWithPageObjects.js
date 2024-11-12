const { onDatePickerPage } = require("../support/page_objects/datePickerPage")
const { onFormLayoutPage } = require("../support/page_objects/formLayoutsPage")
const { onNavigationPage, navigateTo } = require("../support/page_objects/navigationPage")
const { onSmartTablePage } = require("../support/page_objects/smartTablePage")

describe('Test with page object', () => {

    beforeEach('open application',() =>{
       cy.openHomePage()
})


    it('verify navigations across the pages', () =>{
    navigateTo.formLayoutsPage()
    navigateTo.datePickerPage()
    navigateTo.smartTablePage()
    navigateTo.toolTipPage()
    navigateTo.tosterPage()
    })

    it.only('should submit Inline and Basic form and select tomorrow date in the calender', () =>{
    navigateTo.formLayoutsPage()
    onFormLayoutPage.submitInineFormWithNameAndEmail('elzat', 'elzat@test.com')
    onFormLayoutPage.submitInineFormWithEmailAndPassword('elzat', 'password')
    navigateTo.datePickerPage()
    onDatePickerPage.selectCommonDatePicker(1)
    onDatePickerPage.selectDatePickerWithRangeFromToday(7,14)
    navigateTo.smartTablePage()
    onSmartTablePage.addNewRrecordWithFirstAndLastName('Elzat', 'Azat')
    onSmartTablePage.updateAgeByFirstName('Elzat',28)
    onSmartTablePage.deleteRowByIndex(1)
    })

})