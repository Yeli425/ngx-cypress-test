/// <reference types= "cypress" />


describe('JSON object', () =>{

    it('JSON objects', ()=>{
        cy.openHomePage()

        const simpleObject = { "key": "value", "key2": "value2" }

        const simpleArrayOfValue = ["one","two", "three"]

        const arrayOfObjects = [{"key": "value"}, {"key2": "value2"}, {"key3": "value3"}]

        const typeOfData = {"string": "this is a string", "number": 10}


        const mix = {
                "FirstName": "Elzat",
                "LastName": "Azat",
                "Age": 28,
                "Students": [

                    {
                        "FirstName": "Lebron",
                        "LastName": "James",
                    },
                    {
                        "FirstName": "Kobe",
                        "LastName": "Bryant",
                    }

                ]
        }


        console.log(simpleObject.key2)
        console.log(simpleObject["key2"])
        console.log(simpleArrayOfValue[1])
        console.log(arrayOfObjects[2].key3)
        console.log(mix.Students[0].FirstName)

        
    })
})