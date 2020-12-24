const cars = [{
        id: 1,
        brand: "BMW",
        model: "m3",
        color: "Blue",
        year: 1987,
        price: 4000
    },
    {
        id: 2,
        brand: "Kia",
        model: "Magentis",
        color: "Silver",
        year: 2002,
        price: 9000,
    },
    {
        id: 3,
        brand: "Ferrari",
        model: "m365 GTB",
        color: "Red",
        year: 1968,
        price: 12000
    },
    {
        id: 4,
        brand: "Mercedez Benz",
        model: "AMG GT 43",
        color: "Black",
        year: 2009,
        price: 80000
    },
    {
        id: 5,
        brand: "Mazda",
        model: "CX-30",
        color: "White",
        year: 2015,
        price: 40000
    },
    {
        id: 6,
        brand: "Toyota",
        model: "Yaris",
        color: "White",
        year: 2016,
        price: 4000
    },
    {
        id: 7,
        brand: "Nissan",
        model: "Rogue",
        color: "Silver",
        year: 2018,
        price: 35000
    },
    {
        id: 8,
        brand: "Chevrolet",
        model: "Aveo",
        color: "Silver",
        year: 2006,
        price: 2000
    },
    {
        id: 9,
        brand: "Chevrolet",
        model: "Optra",
        color: "Blue",
        year: 2005,
        price: 3500
    },
    {
        id: 10,
        brand: "Honda",
        model: "Pilot",
        color: "Electric blue",
        year: 2019,
        price: 50000
    },
    {
        id: 11,
        brand: "Kia",
        model: "Sorento",
        color: "Red wine",
        year: 2008,
        price: 12000
    }
]

function printCars() {
    const container = document.getElementById('container-cars')
    let html = ''
    cars.forEach((cars) => {
        html += `<tr>
         <td>${cars.brand}</td>
         <td>${cars.model}</td>
         <td>${cars.color}</td>
         <td>${cars.year}</td>
         <td>$ ${cars.price}</td>
        <td>
             <button onclick="deleteCar(${cars.id})" class="btn btn-danger">
                Delete
            </button>
        </td>
        </tr>`
    });

    container.innerHTML = html;
}

function deleteCar(id) {
    const index = cars.findIndex((car) => car.id == id)
    cars.splice(index, 1)
    printCars()

}


function addBrand() {
    const brand = document.getElementById('brand').value
    const model = document.getElementById('model').value
    const color = document.getElementById('color').value
    const year = document.getElementById('year').value
    const price = document.getElementById('price').value


    const id = cars[cars.length - 1] + 1

    let newCar = {
        brand: brand,
        model: model,
        color: color,
        year: year,
        price: price


    }
    cars.push(newCar)
    printCars()

    document.getElementById('form-car').reset()
}
printCars()