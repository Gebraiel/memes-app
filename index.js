let button = document.querySelector('button');
let img = document.querySelector('.result img');
let h1 = document.querySelector('.name');
let error = document.querySelector('.error');
let input = document.querySelector('input');
button.addEventListener('click',()=>{
    setMeme();
})
input.addEventListener('keypress',(event)=>{
    event.key == "Enter" && setMeme();
})
function setMeme(){
    input.value == "" ? setError('Empty Input:please enter a number between 0 and 99'): isNaN(input.value) || input.value ==" " ? setError('Invalid input: please enter a number') : input.value < 0 || input.value > 99 ? setError("Invalid value: please enter a valid number between 0 and 99") :  fetch('https://api.imgflip.com/get_memes').then((res)=>
        res.json()
    ).then((data)=>{
        let meme = data.data.memes[input.value];
        let {name,url} = meme;
        console.log(meme);
        img.setAttribute('src',url);
        h1.innerHTML = name;
        input.value = "";
        error.innerHTML = "";
    }) 

}
function setError(message){
    img.setAttribute('src',"");
    h1.innerHTML = "";
    error.innerHTML = message;
    input.value = "";
}