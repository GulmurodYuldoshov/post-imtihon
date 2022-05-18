var elContent=document.querySelector('.js-content');
posts.forEach(function(post) {
var elDiv = document.createElement('div')
elDiv.innerHTML = `
<div class="card w-75 mx-auto my-4 js-card" >
    <div class="card-list d-flex ">
            <img  class="user-img" src="https://picsum.photos/100" alt="user imag">
        <div class="card-user">
              <h4 class="m-0">${post.user.name}</h4>
              <p class="m-0">${post.user.username}</p>
        </div>
          
        <div class="modal modal-list fade" id="exampleModalToggle${post.id}" >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content  ">
                    <div class="mx-auto my-3  ">
                        <div class="d-flex justify-content-between my-4">
                            <h5 class="modal-title" id="exampleModalToggleLabel">User </h5>
                            <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <p> name: ${ post.user.name}</p>
                        <p>username: ${ post.user.username}</p>
                        <p> email:  ${ post.user.email}</p>
                        <p>phone:  ${ post.user.phone}</p>
                        <p>website:  ${ post.user.website}</p>
                    </div>
                </div>
            </div>
        </div>
            <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle${post.id}" role="button">See More</a>
    </div>
    <div class="card-body ">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">
             ${post.body}
            </p>
          <a class=" w-25 " data-bs-toggle="collapse" href="#collapseExample${post.id}">
              Comments
            </a>
    </div>`;
    for(var c in post.comments){
    elDiv.innerHTML +=`
    <div class="collapse card w-75 mx-auto  "id="collapseExample${post.id}" >
            <div class="card card-body">
                <h3>${post.comments[c].name}</h3>
                <p>${post.comments[c].body}</p>
            </div>
        </div>`;
}
elDiv.innerHTML+=`</div>`;

elContent.appendChild(elDiv)
})


let searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keyup', search);
let titles = document.querySelectorAll('.js-card');
let row = document.querySelectorAll('.js-card');
let searchTerm = '';
let tit = '';

function search(e) {
    searchTerm = e.target.value.toLowerCase();
    for(let i=0; i<titles.length; i++){
        tit = titles[i].textContent.toLowerCase();
        tit.includes(searchTerm) ? row[i].style.display = 'block' : row[i].style.display = 'none';
        console.log(tit)
    }

}

