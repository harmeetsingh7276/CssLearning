console.log("AJAX");
let fetchBtn=document.getElementById("fetchBtn");
fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler() {
    console.log("Fetch Button Clicked");

    const xhr=new XMLHttpRequest();

    xhr.open('GET','data.txt',true);
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

    //send request
    xhr.send();

    xhr.onreadystatechange=function () {
        console.log("Ready State=>"+xhr.readyState);
    }

}