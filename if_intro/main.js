let weatherValue=" "
if (weatherValue==="raining" || weatherValue==="hot"){
    document.getElementById('result').innerHTML="Take an Umberalla "
}else if (weatherValue==="sunny")
    document.getElementById('result').innerHTML="Take an sunglass "
else{
    document.getElementById('result').innerHTML=" nothing needed  "
}