function BMI(){

var ht = document.getElementById("Heightvalue").value
console.log(ht);

var wg = document.getElementById("WeightValue").value
console.log(wg);

var bmi = Math.round(wg/((ht/100)**2))
console.log(bmi);

var result = document.getElementById("result")

var comment = document.getElementById("comment")
if(bmi < 18.5){

result.textContent=`${bmi}`  
comment.textContent="Underweight -Eat calorie-surplus"
comment.style.color="red"
result.style.color="red"
}

else if(bmi > 18.5 && bmi < 24.9){
result.textContent=`${bmi} `   
comment.textContent="Normal"
comment.style.color="green"
result.style.color="green"
}
else if(bmi > 25 && bmi < 29.9){
    result.textContent=`${bmi}`
    comment.textContent="Overweight -Calorie Deficit and few more steps"
    comment.style.color="brown"
    result.style.color="brown"
    }
    else if(bmi >= 30){
        result.textContent=`${bmi}`
        comment.textContent="Obese -Lifesyle change required"
        comment.style.color="red"
        result.style.color="red"
        }
        else{
            comment.textContent="wrong input"
        }
}