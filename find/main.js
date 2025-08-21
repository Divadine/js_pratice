let emails=["hello@mail.com","hello1@mail.com","test@mail.com"]

document.getElementById('submitbtn').addEventListener('click',(item) =>{
    let searchemail= document.getElementById('input').value 
    emails.find(item =>{
        return searchemail===item
    })
    if(searchemail===undefined) {
        document.getElementById('result').innerHTML= " email not found "
    
    }else{
        document.getElementById('result').innerHTML= " email found "
    }

})