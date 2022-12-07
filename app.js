
let activeButton, activePercent
let tipPerPerson,totalPerPerson =0

let p5Button = document.getElementById('p5')
let p10Button = document.getElementById('p10')
let p15Button = document.getElementById('p15')
let p25Button = document.getElementById('p25')
let p50Button = document.getElementById('p50')
let customButton = document.getElementById('custom')
let billField = document.getElementById('bill-field')
let peopleField =document.getElementById('people-field')
let warning = document.getElementById('warning')
let resetButton = document.querySelector('.reset-button')

//Button click events
p5Button.addEventListener('click',()=>compute(p5Button,.05));
p10Button.addEventListener('click',()=>compute(p10Button,.1));
p15Button.addEventListener('click',()=>compute(p15Button,.15));
p25Button.addEventListener('click',()=>compute(p25Button,.25));
p50Button.addEventListener('click',()=>compute(p50Button,.5));
customButton.addEventListener('keyup',()=>compute(custom,(document.getElementById('custom').value)/100));
peopleField.addEventListener('keyup',()=>compute(activeButton,activePercent));
billField.addEventListener('keyup',()=>compute(activeButton,activePercent));
resetButton.onclick = ()=>console.log(reset())


//Sets values and computes

function buttonState(button){
    if(button==null){

    }else if(button==custom){        
        p5Button.style.backgroundColor ='var(--very-dark-cyan)'
        p5Button.style.color='var(--white)'
        p10Button.style.backgroundColor ='var(--very-dark-cyan)'
        p10Button.style.color='var(--white)'
        p15Button.style.backgroundColor ='var(--very-dark-cyan)'
        p15Button.style.color='var(--white)'
        p25Button.style.backgroundColor ='var(--very-dark-cyan)'
        p25Button.style.color='var(--white)'
        p50Button.style.backgroundColor ='var(--very-dark-cyan)'
        p50Button.style.color='var(--white)'
    }else{
        //Reset buttons
        p5Button.style.backgroundColor ='var(--very-dark-cyan)'
        p5Button.style.color='var(--white)'
        p10Button.style.backgroundColor ='var(--very-dark-cyan)'
        p10Button.style.color='var(--white)'
        p15Button.style.backgroundColor ='var(--very-dark-cyan)'
        p15Button.style.color='var(--white)'
        p25Button.style.backgroundColor ='var(--very-dark-cyan)'
        p25Button.style.color='var(--white)'
        p50Button.style.backgroundColor ='var(--very-dark-cyan)'
        p50Button.style.color='var(--white)'
        customButton.value = ""
    
        //Apply active state
        button.style.backgroundColor ='var(--strong-cyan)'
        button.style.color='var(--very-dark-cyan)'
    }
}

//Resets all fields and values
function reset(){
    p5Button.style.backgroundColor ='var(--very-dark-cyan)'
    p5Button.style.color='var(--white)'
    p10Button.style.backgroundColor ='var(--very-dark-cyan)'
    p10Button.style.color='var(--white)'
    p15Button.style.backgroundColor ='var(--very-dark-cyan)'
    p15Button.style.color='var(--white)'
    p25Button.style.backgroundColor ='var(--very-dark-cyan)'
    p25Button.style.color='var(--white)'
    p50Button.style.backgroundColor ='var(--very-dark-cyan)'
    p50Button.style.color='var(--white)'
    customButton.value = ""
    
    document.getElementById('tip-p-person').innerHTML='$0.00'
    document.getElementById('total-p-person').innerHTML='$0.00'

    billField.value=""
    peopleField.value=""

    warning.style.visibility='hidden'
    peopleField.style.border='none'


    resetButton.disabled = true
    resetButton.style.opacity = .2
}



function compute(button,percent){
    let bill = document.getElementById('bill-field').value
    let people = document.getElementById('people-field').value
    activeButton = button
    activePercent = percent
    
    //reset button disabled and styles reset
    resetButton.disabled = false
    resetButton.style.opacity = 1

    buttonState(button)


    if(people==0){
        console.log('error')
        warning.style.visibility='visible'
        peopleField.style.border='2px solid rgb(251, 124, 27)'


    }else{
        tipPerPerson =(bill*activePercent)/people;
        totalPerPerson =tipPerPerson+(bill/people);

        warning.style.visibility='hidden'
        peopleField.style.border='none'

        document.getElementById('tip-p-person').innerHTML='$'+ tipPerPerson.toFixed(2)
        document.getElementById('total-p-person').innerHTML='$'+ totalPerPerson.toFixed(2)
    }
}