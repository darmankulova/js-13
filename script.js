const div = document.querySelector('div')
const h2 = document.querySelector('h2')
const input = document.querySelector('input')
const btn = document.querySelector('button')

const handleCheck = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=69b2c82c42a147eb94b41930233107&q=${input.value}&days=aqi=no&alerts=no`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const { temp_c, condition, humidity } = data.current
            const { name } = data.location
            div.innerHTML = `It is ${temp_c}°C degrees in ${name} and humidity is ${humidity}%.`
            h2.innerHTML = condition.text
        })
}

btn.addEventListener('click', handleCheck)