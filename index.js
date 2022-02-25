const cOne = document.querySelector(`.cOne`);


// cach 1
// const n = document.querySelector(`input[name="n"]`);
// const opNumber = document.querySelector(`input[name="OppositeNumber"]`);
const result = document.querySelector(`.result`)
const opNumberIndex = document.querySelector(`.input`);
cOne.addEventListener(`click`, (e)=>{
    e.preventDefault();
    const n = Number(document.querySelector(`input[name="n"]`).value);
    const opNumber = Number(document.querySelector(`input[name="OppositeNumber"]`).value);
    if(opNumber >= 0 && opNumber <= n-1){ 
        result.innerHTML = ``   
        opNumberIndex.innerHTML = ``;
        const newElement = document.createElement(`div`);
        newElement.innerHTML =`
        <p class="red">${findNumber(n, opNumber)}</p>
        `
        result.appendChild(newElement);
    }else{
        opNumberIndex.innerHTML = ``;
        const newElement = document.createElement(`div`);
        newElement.innerHTML = `
            <p class="red">Wrong</p>
        `
        opNumberIndex.appendChild(newElement);
    }
    
})

// Khoang cach
const findNumber = (n, a)=>{
    if(a >= n/2){
        return (a - n/2);
    }else{
        return (n/2 + a);
    }
}

//  B
const cTwo = document.querySelector(`.cTwo`);
const result2 = document.querySelector(`.result2`)
cTwo.addEventListener(`click`, (e)=>{
    e.preventDefault();
    const string1 = document.querySelector(`input[name="string1"]`).value;
    const string2 = document.querySelector(`input[name="string2"]`).value;
    let endString = ``;
    for(let i =0; i < 10; i++ ){
        endString = `${endString}${string1.charAt(i)}${string2.charAt(i)}` 
    }
    result2.innerHTML =``;
    const newElement = document.createElement(`div`);
    newElement.innerHTML =`
    <p class="red">${endString}</p>
    `
    result2.appendChild(newElement);
})
