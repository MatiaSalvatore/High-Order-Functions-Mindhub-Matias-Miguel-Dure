
//1.
console.log("Ejercicio N°1")
const printMessage = (message) =>{console.log(message)};
printMessage("Hola")

//2.
console.log("Ejercicio N°2")
const createMultplication = (number1,number2) =>{return number1*number2}
console.log(createMultplication(2,3))

//3.
console.log("Ejercicio N°3")
const array = [ 1,2,3,4,5,6,7,8,9 ]
const map = array.map((x)=>createMultplication(x,2))
console.log(map)


//4.
console.log("Ejercicio N°4")
const most_alcoholic = (array) => {
    const sorted = array.toSorted((item1, item2) => item2.abv - item1.abv);
    const most_alcoholic = sorted.splice(0,10)
    return most_alcoholic
}

console.log(most_alcoholic(beers))

//5.
console.log("Ejercicio N°5")
const least_bitter = (array) =>{
    const sorted = array.toSorted((item1, item2) => item1.ibu - item2.ibu);
    const least_bitter = sorted.splice(0,10)
    return least_bitter
}

console.log(least_bitter(beers))

//6.
console.log("Ejercicio N°6")
const name_finder = (array,name)=>{
    const array_object = array.find(beer =>beer.name === name);
    return console.log(array_object)
}

name_finder(beers,'Trashy Blonde')

//7.
console.log("Ejercicio N°7")
const ibu_finder = (array,ibu) =>{
    const array_object = array.filter(beer => beer.ibu === ibu )
    if (array_object.length === 0){
        console.log("error")
    }
    else{
        console.log(array_object)
    }
}

ibu_finder(beers,8)

//8.
console.log("Ejercicio N°8")
const name_index_finder = (array,name)=>{
    const array_object = array.findIndex(beer =>beer.name === name);
    if (array_object >= 0){
        console.log(array_object)
    }
    else{
        console.log(name +" does not exist.")
    }
}

name_index_finder(beers,'Buzz')

//9.
console.log("Ejercicio N°9")
const alcohol_limit = (array,a_limit) =>{
    let new_array = [];
    let og_array = array.map(({name, abv,ibu}) => ({name, abv,ibu}));
    og_array.forEach(function(beer){
        if (beer.abv < a_limit){
            new_array.push(beer)
        }
    })
    new_array.map(({name, abv, ibu}) => ({name, abv, ibu}));
    return console.log(new_array)
}

alcohol_limit(beers,5)

//10.
console.log("Ejercicio N°10")
const ordenar_segun = (array,prop,ascending) =>{
    if (ascending){
        const order = array.toSorted((item1, item2) => item1[prop] - item2[prop]);
        spliced = order.splice(0,10)
        console.log(spliced)
    }
    else{
        const order = array.toSorted((item1, item2) => item1[prop] - item2[prop]);
        spliced = order.splice(0,10)
        console.log(spliced)
    }
}


ordenar_segun(beers,"ibu",false)

//11.
console.log("Ejercicio N°11 (en el html)")
function generardatostabla(beer){
    const row = `
    <tr>
    <td>${beer.name}</td>
    <td>${beer.abv}</td>
    <td>${beer.ibu}</td>
    </tr>
    `
    return row
}

const crear_tabla = (array, id) =>{
    const lugartabla = document.getElementById(id)
    const tabla = document.createElement('table')    
    lugartabla.appendChild(tabla)

    tabla.innerHTML += `
    <tr>
    <th>Name</th>
    <th>ABV</th>
    <th>IBU</th>
    </tr>
    `
    for (const element of array) {
        tabla.innerHTML += generardatostabla(element)
      }

}

crear_tabla(beers,"table")