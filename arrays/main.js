let fruits =["apple", "banana","mango","guava","kiwi"]

//fruits.forEach(function(items){
//document.getElementById('result').innerHTML +=`<h1> ${items} </h1>` })

fruits.forEach( item => {
    document.getElementById('result').innerHTML +=`<h1> ${item} </h1>`
})

