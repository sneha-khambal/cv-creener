

// array of objects contains information about the candidates
const applicants = [
    { 
    name: 'Rohan Das',
     age: 23,
     city: 'Kolkata',
     language: 'Python',
     framework: 'Django',
     image: 'https://randomuser.me/api/portraits/men/56.jpg'
    },

    { 
    name: 'Shweta Sharma',
    age: 25,
    city: 'Banglore',
    language: 'Javascript',
    framework: 'Angular',
    image: 'https://randomuser.me/api/portraits/women/67.jpg'
   },

   { 
    name: 'Shubham Patil',
   age: 28,
   city: 'Kolhapur',
   language: 'Python',
   framework: 'Django',
   image: 'https://randomuser.me/api/portraits/men/35.jpg'
  },

  { 
  name: 'Akshay sharma',
  age: 30,
  city: 'Mumbai',
  language: 'Python',
  framework: 'Flask',
  image: 'https://randomuser.me/api/portraits/men/23.jpg'
 },

 { 
name: 'Kiran Mehta',
 age: 28,
 city: 'Delhi',
 language: 'Python',
 framework: 'Django',
 image: 'https://randomuser.me/api/portraits/women/76.jpg'
},
]

// CV Iterator
 function cvIterator(profiles){
let nextIndex = 0;
return {
    next :function(){
        return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false} : {done: true}
    }
}
back(nextIndex) 
 }

 const currentCandidates = cvIterator(applicants);

// btn listener for next button 
var next = document.getElementById('next');

next.addEventListener('click' , nextCv);

function nextCv( ){
 
const data  = currentCandidates.next().value;
if(data !== undefined){
   const image = document.getElementById('image');
   const profile = document.getElementById('profile');

   image.innerHTML = `<img src= ${data.image} class="img-thumbnail" ></img>`;
   profile.innerHTML = `
       <div class="card shadow-sm p-3 mb-5 bg-white rounded text-dark fw-bold" style="width: 18rem; justify-content:center;  width:100%;
       height:15%;padding:5px;">
   <ul class="list-group list-group-flush">
   <li class="list-group-item   font-weight-bolder  ">   Name :  ${data.name}</li>
   <li class="list-group-item   font-weight-bolder  ">   Age : ${data.age}</li>
     <li class="list-group-item    font-weight-bolder  ">  Live in : ${data.city} </li>
     <li class="list-group-item   font-weight-bolder  ">  Work on :  ${data.language} </li>
     <li class="list-group-item   font-weight-bolder  ">  Framework: ${data.framework} </li>
   </ul>
 </div>
 <button type="button" class="btn btn-secondary mb-5 " style="  width: 50%;" onClick="back(${data.id})"  >Previous</button>

    `;
}
else{
    alert('no more applications')
}
}

nextCv(currentCandidates);

//back to previous cantidates
 function back(index){
     console.log(index)
 }