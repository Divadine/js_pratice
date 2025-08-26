// function checkOrder() {
    
//     return new Promise((resolve, reject) => {
//         let orderId=document.querySelector('#order-id').value 

//         if (orderId=='order123') {
//             resolve(" your order is delivered")
//         }else{
//             reject("your order is pending")
//         }
//     })
// }

async function checkOrder() {
    let orderId=document.querySelector('#order-id').value 

    if (orderId=='order123'){
        return " your order is delivered"
    }else{
        throw "your order is pending"
    }
}
document.querySelector('#checkBtn').addEventListener('click',async()=>{
    // checkOrder().then((sucess) => {
    //     document.querySelector('#result').innerHTML=sucess
    // }).catch((failure) => {
    //     document.querySelector('#result').innerHTML=failure
    // })
    try{
    let sucess= await checkOrder()
    document.querySelector('#result').innerHTML=sucess
    }catch(error){
        document.querySelector('#result').innerHTML=error

    }
})