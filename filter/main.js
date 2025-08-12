let fruits=["apple","banana","grapes","orange"]

// filtered_fruits=fruits.filter(item =>{
//     return item.includes("r")

// })
// filtered_fruits.forEach(item => {
//     document.getElementById("result").innerHTML +=`<h1> ${item}</h1>`
// });

document.getElementById('search').addEventListener('keyup',()=>{
    document.getElementById("result").innerHTML=''
    let searchKey=document.getElementById('search').value 

    filtered_fruits=fruits.filter(item =>{
        return item.includes("searchKey")
    })

    filtered_fruits.forEach(item => {
    document.getElementById("result").innerHTML += `<h1> ${item} </h1>`
    })
})
