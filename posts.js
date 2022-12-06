let jsonRequest = new XMLHttpRequest();
jsonRequest.open("get", "https://jsonplaceholder.typicode.com/posts");
jsonRequest.send();

let jsonObject;

function jsonFunc(){
    jsonObject = jsonRequest.response;
    jsonObject = JSON.parse(jsonObject);
    console.log(jsonObject);
    // for(let i=0; i<jsonObject.length; i++){

    // }
}

jsonRequest.addEventListener("readystatechange", function(){

    if(jsonRequest.readyState === 4){
        if(jsonRequest.status === 200){
            jsonFunc();

            createPosts();
        }
    }
});

// <!-- <div class="post">
// <h3 class="post-title">he</h3>
// <p class="post-body">body</p>
// </div> -->

function createPosts(){
    const posts = document.querySelector("#posts-container");
    let title, body;

    for(let i=0; i<jsonObject.length; i++){
        title = jsonObject[i].title;
        body = jsonObject[i].body;

        console.log()
        console.log(title);
        console.log(body);

        posts.innerHTML += `<div class="post">
                            <h3 class="post-title"> ${title} </h3>
                            <br>
                            <p class="post-body"> ${body} </p>
                            </div>`;

    }    
}