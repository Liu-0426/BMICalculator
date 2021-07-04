const hight = document.getElementById("hight")
const weight = document.getElementById("weight")
const count = document.getElementById("countBtn")
const list = document.getElementById("list")
const res = document.getElementById("res")
const BMI = document.getElementById("BMI")



function calculate(){
    
    hights = parseInt(hight.value, 10)/100
    weights = parseInt(weight.value, 10)
    let result = weights/hights**2
    result = result.toFixed(2);
    bmi.innerHTML = `<p>BMI：${result}</p>`
    if(result < 18.5){
        health.innerHTML = `<p>體重過輕</p>`
    }else if(result >= 18.5 || result < 24){
        health.innerHTML = `<p>正常範圍</p>`
    }else{
        health.innerHTML = `<p>體重過重</p>`
    }
}

countBtn.addEventListener('click', function () {
   
    calculate()
    })
