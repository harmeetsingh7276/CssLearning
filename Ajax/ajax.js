console.log("AJAX");
let fetchBtn=document.getElementById("fetchBtn");
fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler() {
    console.log("Fetch Button Clicked");

    const xhr=new XMLHttpRequest();

    //xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

    //POST
    xhr.open('POST','https://dummyjson.com/users/add',true); 
    xhr.setRequestHeader('Content-type','application/json');
    params=``;
    xhr.send(params);
    //optional
    xhr.onprogress=function () {
        console.log("on progress");
    }
    //response Ready
    xhr.onload=function () {
        if(this.status===200){
            console.log(this.responseText)
        }
        else{
            console.error("Some error occured")
        }
    }
    xhr.onreadystatechange=function () {
        console.log("Ready State=>"+xhr.readyState);
    }
    //send request
   // xhr.send();
    console.log("we are done!")
    


}