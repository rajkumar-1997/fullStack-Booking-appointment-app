
let addbill=document.getElementById('addbill');


const addBILL = async (e)=>{
    e.preventDefault();

    let price=document.getElementById('price').value;
    let dish=document.getElementById('dish').value;
    let tableNo=document.getElementById('table').value;

    let obj={
        price,
        dish,
        tableNo,
    }
    // axios.post("https://crudcrud.com/api/309ecc9d9d3f4b1b81753dcdcfb3ea15/billing",obj)
    // .then((response)=>{
    //     showdataonscreen(response.data);
    //     console.log(response);
    // })
    // .catch((error)=>{
    //    console.log(error);
    // })


    try{
        let data= await axios.post("https://crudcrud.com/api/84bb051ccca245ab81c1f3f47a0697c1/billing",obj);
       
        // if(!result.ok){
        //     console.log('problem');
        //     return;
        // }
       
        showdataonscreen(data.data);
         console.log(data);
      
    } catch(error){
        console.log(error);
    }


}
addbill.addEventListener('click',addBILL);

window.addEventListener('DOMContentLoaded', async ()=>{
    // axios.get("https://crudcrud.com/api/67def074d4304302a748311574eafda5/billing")
    // .then((response)=>{
    //     console.log(response);
    //     for(let i=0;i<response.data.length;i++){
    //         showdataonscreen(response.data[i]);
    //     }
    // }).catch((error)=>{
    //     console.log(error);
    // })

    try{
        let data= await axios.get("https://crudcrud.com/api/84bb051ccca245ab81c1f3f47a0697c1/billing");
      
        // if(!result.ok){
        //     console.log('problem');
        //     return;
        // }
       
        data.data.forEach(data=>{showdataonscreen(data);})
        console.log(data);
        
     
    } catch(error){
        console.log(error);
    }
       

})

function  showdataonscreen(obj){
    if(obj.tableNo=='Table1'){
        let parentNode=document.getElementById('table1');
 
        const childHTML=`<li class="my-2" id=${obj._id}> ${obj.price}-${obj.dish}-${obj.tableNo}
            <button class="btn btn-danger" onclick=deletedata1('${obj._id}')>x</button>
            
            </li> `
        parentNode.innerHTML=parentNode.innerHTML+childHTML;
    }
    else if(obj.tableNo=='Table2'){
        
            let parentNode=document.getElementById('table2');
     
            const childHTML=` <li class="my-2" id=${obj._id}> ${obj.price}-${obj.dish}-${obj.tableNo}
                <button class="btn btn-danger " onclick=deletedata2('${obj._id}')>x</button>
                
                </li> `
            parentNode.innerHTML=parentNode.innerHTML+childHTML;
       
    }

    else if(obj.tableNo=='Table3'){
        
        let parentNode=document.getElementById('table3');
 
        const childHTML=` <li class="my-2" id=${obj._id}> ${obj.price}-${obj.dish}-${obj.tableNo}
            <button class="btn btn-danger" onclick=deletedata3('${obj._id}')>x</button>
            
            </li> `
        parentNode.innerHTML=parentNode.innerHTML+childHTML;
   
}
  
document.getElementById('price').value="";
document.getElementById('dish').value="";
document.getElementById('table').value="";
}


async function deletedata1(Id){
    try {
        removedatafromtable1(Id)
        // console.log(Id)
        

      await  axios.delete(`https://crudcrud.com/api/84bb051ccca245ab81c1f3f47a0697c1/billing/${Id}`)
    
       
  
        
    }
    catch(error) {
        console.log(error)
    }
       
}

    
async function deletedata2(Id){
    
    try {
        removedatafromtable2(Id)
        // console.log(Id)
        

      await  axios.delete(`https://crudcrud.com/api/84bb051ccca245ab81c1f3f47a0697c1/billing/${Id}`)
    
       
  
        
    }
    catch(error) {
        console.log(error)
    }

}


async function deletedata3(Id){
    
    try {
        removedatafromtable3(Id)
        // console.log(Id)
        

      await  axios.delete(`https://crudcrud.com/api/84bb051ccca245ab81c1f3f47a0697c1/billing/${Id}`)
    
       
  
        
    }
    catch(error) {
        console.log(error)
    }

}

function removedatafromtable1(Id){
    const parentNode1=document.getElementById('table1');
    const childNodeToBeDeleted1=document.getElementById(Id);
    parentNode1.removeChild(childNodeToBeDeleted1);
}

function removedatafromtable2(Id){
    const parentNode2=document.getElementById('table2');
    const childNodeToBeDeleted2=document.getElementById(Id);
    parentNode2.removeChild(childNodeToBeDeleted2);
}

function removedatafromtable3(Id){
    const parentNode3=document.getElementById('table3');
    const childNodeToBeDeleted3=document.getElementById(Id);
    parentNode3.removeChild(childNodeToBeDeleted3);
}