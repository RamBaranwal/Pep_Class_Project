function appdata(){
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    let bmi = weight / (height * height)
    bmi = bmi.toFixed(2);
    if(!weight || !height){
        alert("fill the details");
        return;
    }

    let div = document.createElement('div');
    div.innerHTML = `Your BMI is ${bmi}`
     
    let appendResult = document.getElementById('result');
    appendResult.appendChild(div);
    // const result = document.getElementById("result").innerText = " Your BMI: " + bmi.toFixed(2);
    // result.appendChild();

}