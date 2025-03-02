// //Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// A Bootstrap styled table representing your choice of data.
// A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
//Bicycle Inventory List Form? (need type, brand, model)
//Need a table
//Need a form
//need a button to add info to table via event"click"

// column for inventory number
// // Bike Type      </th>
// <th> Brand       </th>
// <th> Model       </th>
// <th> Wheels  //</th>

// let element = document.getElementById("myElement");
// element.style.backgroundColor = "blue";

console.log("WELCOME TO THE BIKE LOG");

const formButton = document.getElementById('submit')

//starting the numbering process at 1 instead of 0
let index = 1

//getting the information to move from the form into the table

formButton.addEventListener('click', (event) => {
    event.preventDefault()

    let bikeType = document.getElementById('bikeType').value
    let brand = document.getElementById('brand').value
    let model = document.getElementById('model').value
    let wheels = document.getElementById('wheels').value

    let newRow = document.createElement('tr')

    let indexNode = document.createElement('td')
       indexNode.innerHTML = index
     newRow.append(indexNode)

    let bikeTypeNode = document.createElement('td')
        bikeTypeNode.innerHTML = bikeType
        newRow.append(bikeTypeNode)

     let brandNode = document.createElement('td')
        brandNode.innerHTML = brand
        newRow.append(brandNode)

     let modelNode = document.createElement('td')
        modelNode.innerHTML = model
        newRow.append(modelNode)

     let wheelsNode = document.createElement('td')
        wheelsNode.innerHTML = wheels
        newRow.append(wheelsNode)

//adding a new row for the entries in the table after they are applied        
        document.getElementById('tbody').appendChild(newRow)


//getting the form to clear after clicking "apply button"
        
        document.getElementById('bikeType').value = ""
        document.getElementById('brand').value = ""
        document.getElementById('model').value = ""
        document.getElementById('wheels').value = ""

        index++

})


