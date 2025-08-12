document.getElementById('startbtn').addEventListener('click',function(){
    document.getElementById('result').innerHTML =' '
    let totalLap =parseInt(document.getElementById('input').value)
    let currentLap =1

    while (currentLap<=totalLap) {
        document.getElementById('result').innerHTML +=`<h1> lap ${currentLap} is completed </h1>`
        currentLap++
    }
    console.log("you won")

})