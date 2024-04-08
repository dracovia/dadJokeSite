const btnel =document.getElementById("btn");
const jokeel=document.getElementById("joke");
const apikey="usIi9s/jHaejqVmQU1qpvQ==dU2uD8laOJ4nnTAB";
const apiurl="https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options={
    method:"GET",
    headers:{"X-Api-Key":apikey},
};
async function getjoke(){
    try {
 jokeel.innerText="updating...";
btnel.disable=true;
btnel.innerText="loading";
const response = await fetch(apiurl,options);
const data= await response.json();
btnel.disable=false;
btnel.innerText="tell me a joke ";
jokeel.innerText=data[0].joke;
    
} catch (error) {
    jokeel.innerText="An error happened,try again";
    btnel.disable=false;
    btnel.innerText="tell me a joke ";
    console.log(error)
}
    
};
btnel.addEventListener("click",getjoke);