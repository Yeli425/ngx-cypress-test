
function selecyGroupMenuItem(groupname){
    cy.contains('a', groupname).then( menu =>{
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr =>{
            if(attr.includes('left')){
                cy.wrap(menu).click()
            }

        })
    })
}
export class navigationPage{

    formLayoutsPage(){
        selecyGroupMenuItem('Form')
        cy.contains('Form Layouts').click()
    }

    datePickerPage(){
      selecyGroupMenuItem('Form')
        cy.contains('Datepicker').click()
    }


    tosterPage(){ 
        selecyGroupMenuItem('Modal & Overlays')
        cy.contains('Toastr').click()
    }

    smartTablePage(){    
        selecyGroupMenuItem('Tables & Data')
        cy.contains('Smart Table').click()
    }

     toolTipPage(){          
            selecyGroupMenuItem('Modal & Overlays')
            cy.contains('Tooltip').click()
        }
}

export const navigateTo = new navigationPage()