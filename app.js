const searchBar=document.querySelector('.search-box');
const searchBars=document.querySelector('.search-box').value;
const btn=document.querySelector('.btn');
const btnAdd=document.querySelector('.btn-add');
const container=document.querySelector('.item-container');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
});

const itemCreate=()=>{
    // e.preventDefault();
    
    const addInput=document.querySelector('.add-box').value;

    //create the div
    let div=document.createElement('div');
    div.classList.add('itemlist');

    //create the paragragh
    let paragraph=document.createElement('p');
    paragraph.innerText=addInput.toLowerCase();
    paragraph.classList.add('item-header');

    //create button
    let divBtn=document.createElement('button');
    divBtn.innerHTML='<i class="fas fa-times-circle"></i>';
    divBtn.classList.add('item-btn');

    //append the paragraph and the button to the div
    div.appendChild(paragraph);
    div.appendChild(divBtn);

    //append the div to the main div container
    // container.appendChild(div);

    addInput!=="" ? container.appendChild(div) : alert('input a value') ;


    //adding to the storage
    addItems(addInput);
    
};

//addbutton
btnAdd.addEventListener('click',(e)=>{
    e.preventDefault();

    itemCreate();
    // document.querySelector('.add-box').value="";

    document.querySelector('.add-box').value!=="" ?document.querySelector('.add-box').value="" : false;
});

// const remItem=(e)=>{

//     let items=e.target.parentElement;
//     e.target.classList.contains('fa-times-circle') ? container.removeChild(items.parentElement) :false;

//     removItems(e.target.parentElement.previousElementSibling.textContent)
// };

container.addEventListener('click',(e)=>{

    
    let items=e.target.parentElement;
    e.target.classList.contains('fa-times-circle') ? container.removeChild(items.parentElement) :false;

    removItems(e.target.parentElement.previousElementSibling.textContent)
});

//search bar

searchBar.addEventListener('keyup',(e)=>{

    const itemlist=container.querySelectorAll('.item-header');
    
    let txt=e.target.value.toLowerCase();

    Array.from(itemlist).forEach(item=>{
        let itemName=item.textContent.toLowerCase();
        
        txt.includes(itemName) ? item.parentElement.style.display='flex':item.parentElement.style.display='none';
    });

});

//storage

const itemGet=()=>{
    let items;
    if(localStorage.getItem('list')===null){
        items=[];

    }else{
        items=JSON.parse(localStorage.getItem('list'));
    }

    return items;
};

const addItems=(x)=>{
    const item=itemGet();
    if(x!==""){

        item.push(x);
        
    }
    

    localStorage.setItem('list',JSON.stringify(item));
};

const removItems=(x)=>{
    const items=itemGet();
    
    items.forEach((item)=>{
        if(x.match(item)){
            items.pop(item);
        }
    })

    localStorage.setItem('list',JSON.stringify(items));
};



document.addEventListener('DOMContentLoaded',()=>{
    const itemList=itemGet();

    itemList.forEach(item=>{

        const addInput=document.querySelector('.add-box').value;

        //create the div
        let div=document.createElement('div');
        div.classList.add('itemlist');
    
        //create the paragragh
        let paragraph=document.createElement('p');
        paragraph.innerText=item;
        // addInput.toLowerCase();
        paragraph.classList.add('item-header');
    
        //create button
        let divBtn=document.createElement('button');
        divBtn.innerHTML='<i class="fas fa-times-circle"></i>';
        divBtn.classList.add('item-btn');
    
        //append the paragraph and the button to the div
        div.appendChild(paragraph);
        div.appendChild(divBtn);

        container.appendChild(div)
    })
})

//if statement fot the ternary operators

//search
// if(txt.includes(itemName)){
        //     item.parentElement.style.display='flex';
        // }else{
        //     item.parentElement.style.display='none';
        // }


        //remove
//console.log(e.target);
    // if(e.target.classList.contains('fa-times-circle')){
        
    //     let items=e.target.parentElement;
    //     container.removeChild(items.parentElement)
    // }else{
    //     return false;
    // }
