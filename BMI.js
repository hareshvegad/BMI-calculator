const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')


    if(height === "" || height < 0 || isNaN(height)){
        results.innerHTML = `Please Give a Valid Height ${height}`
    } else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please Give a Valid weight ${weight}`
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // show the result
        if (bmi < '18.6'){
            results.innerHTML = `<p>Your Body Mass Index is ${bmi} <br> ${bmi} is Under Weight</p>`
        }else if ('18.6'<= bmi <= '24.9'){
            results.innerHTML = `<p>Your Body Mass Index is ${bmi} <br> ${bmi} is Normal Range</p>`
        } if (bmi > '24.9') {
            results.innerHTML = `<p>Your Body Mass Index is ${bmi} <br> ${bmi} is Over Weight</p>`
        }
    }
},false)