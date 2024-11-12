
export class smartTable{


    updateAgeByFirstName(name, age){

    
            cy.get('tbody').contains('tr', name).then( TableRow =>{
            cy.wrap(TableRow).find('.nb-edit').click()
            cy.wrap(TableRow).find('[placeholder="Age"]').clear().type(age)
            cy.wrap(TableRow).find('[class="nb-checkmark"]').click()
            cy.wrap(TableRow).find('td').eq(6).should('contain', age)

    })
}
    
    addNewRrecordWithFirstAndLastName(first,last){
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then(TableRow =>{
            cy.wrap(TableRow).find('[placeholder="First Name"]').type(first)
            cy.wrap(TableRow).find('[placeholder="Last Name"]').type(last)
            cy.wrap(TableRow).find('[class="nb-checkmark"]').click()

        } )

        cy.get('tbody tr').first().find('td').then( tableColumn =>{
            cy.wrap(tableColumn).eq(2).should('contain',first)
            cy.wrap(tableColumn).eq(3).should('contain',last)

        })
     }

     deleteRowByIndex(index){
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').eq(index).find('.nb-trash').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })

     }
        
    }





export const onSmartTablePage = new smartTable()