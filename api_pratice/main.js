let postElements=document.querySelector('#posts')

fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
    return response.json()
}).then((data)=>{
    data.forEach(item => {
        postElements.innerHTML +=`<div>
                                    <h1>${item.id} - ${item.title}</h1>
                                    <p> ${item.body} </p>
                                    </div>
                                    
        
        
        
        
                                                    `
    });
})
    
