
const heading = document.querySelector(".form-box h3");
let Btn = document.getElementById("adddata");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let numberInput = document.getElementById("number");
let timeInput = document.getElementById("time");
let editing=false;
let userdatabox=document.querySelector('.userdatabox'); 

Btn.addEventListener('click',savedata);

function savedata(e) {
  e.preventDefault();
 
 
    let obj = {
      name: nameInput.value,
      email: emailInput.value,
      number: numberInput.value,
      time: timeInput.value,
    };
  
      

         axios.post("http://localhost:3000/user/add-user", obj)
        .then((response) => { 
         
          showDataOnScreen(response.data);
          console.log(response);
        })

        .catch((err) => console.log(err));
      
    }
   
  


window.addEventListener("DOMContentLoaded",   () => {
  
    axios.get("http://localhost:3000/user/load-data")
    .then((response)=>{
        for(let i=0;i<response.data.length;i++){
          showDataOnScreen(response.data[i]);
        }
    }).catch((err) =>{
      
      console.log((err) => console.log(err));
    } );
  
    heading.innerHTML = "Add User"; 

    })
  


function showDataOnScreen(obj) {
  let parent = document.getElementById("booking-data");
  // console.log(obj.time,'this is obj');
  let childHTML = `<li class="listItem" id="${obj.id}"> Name:<span>${obj.name} </span> Email: <span>${obj.email}  </span>  Mob-Number:<span> ${obj.number} </span> Time: <span> ${obj.time}  </span> <button class="btn1" onclick=deletedata('${obj.id}')>Delete</button><button class="editbtn" id="${obj.id}"  >Edit</button></li>`;
  parent.innerHTML += childHTML;
   
  name = document.getElementById("name").value = "";
  email = document.getElementById("email").value = "";
  number = document.getElementById("number").value = "";  
  time = document.getElementById("time").value = "";
}


// Delete data from backend
function deletedata(id) {
 
  axios.delete(`http://localhost:3000/user/delete-appointment/${id}`)
  .then((response)=>{
    console.log(response);
    removeDataFromScreen(id);

  }).catch((err)=>{
    console.log((err) => console.log(err));
  })
}

function  removeDataFromScreen(id){
  const parent=document.getElementById('booking-data');
  const childNodeToBeDeleted=document.getElementById(id);
  parent.removeChild( childNodeToBeDeleted);
}

document.querySelector('.btnupdate').addEventListener('click',e=>{
  e.preventDefault();
  if(e.target.classList.contains('btnupdate')){
      let id=e.target.value;
      // console.log(id);
      let name=nameInput.value;
      let email=emailInput.value;
      let number=numberInput.value;
      let time=timeInput.value;

      let lol= {
        name:name,
        email:email,
        number:number,
        time:time, 
    }
    axios
    .put(`http://localhost:3000/user/edit-appointment/${id}`, lol)
    .then((res) => {
      // console.log( document.getElementById(id))
      document.getElementById(id).children[0].textContent=name;
      document.getElementById(id).children[1].textContent=email;
      document.getElementById(id).children[2].textContent=number;
      document.getElementById(id).children[3].textContent=time;
    
      nameInput.value="";
      emailInput.value="";
      numberInput.value="";
      timeInput.value="";
      document.querySelector('.btnupdate').value="";
    
      // console.log("result coming");
      document.querySelector('#adddata').style.display="block";
    document.querySelector('.btnupdate').style.display="none";
    heading.innerHTML = "Add User";
      
    })
    .catch((err) => console.log(err));

  }
});


document.querySelector('.userdatabox').addEventListener('click',e=>{

 
  if(e.target.classList.contains('editbtn')){
    document.querySelector('#adddata').style.display="none";
    document.querySelector('.btnupdate').style.display="block";
   let  Id=e.target.id;
  //  console.log(Id);
   document.querySelector('.btnupdate').value=Id
   nameInput.value=e.target.parentElement.children[0].textContent;
   emailInput.value=e.target.parentElement.children[1].textContent;
   numberInput.value=e.target.parentElement.children[2].textContent;
 let  time=e.target.parentElement.children[3].textContent.split('-');
//  console.log(time);
   let finalTime=`${time[0]}-${time[1]}-${time[2]}`.trim();
  //  console.log(finalTime)
    timeInput.value=finalTime;
    heading.innerHTML = "Edit User";
  }
})
   
