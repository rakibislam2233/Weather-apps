let Api_key = "656511421c984f7129deb2dacd36f5f6";
let result = document.getElementById("output")
const loadData = async(city_name)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${Api_key}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
    
}

const displayData = (data) =>{
    if(Object.values(data).length === 2){
        document.getElementById("error").classList.remove("hidden")
        document.getElementById("validation").classList.add("hidden")
        return
    }else{
        document.getElementById("error").classList.add("hidden")
    }
    result.innerHTML =`
    <h1 class="text-3xl py-2 font-semibold">${data.name}</h1>
    <h1 class="text-xl">${data.weather[0].main}</h1>
    <h1 class="text-xl">${data.weather[0].description}</h1>
    <img  class="m-auto w-20" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
    <h1 class="text-4xl font-bold">
    ${data.main.temp}</h1>
    <div class="flex py-2 justify-evenly">
    <h2 class="text-xl">Max Temp<br>
    <i class="fa-solid fa-temperature-high"></i> ${data.main.temp_max}
    </brA></h2>
    <h2 class="text-xl">Min Temp<br>
    <i class="fa-solid fa-temperature-low"></i> ${data.main.temp_min}</h2>
    </div>
    
    
    `
}

const searchBtn = ()=>{
    const inputField = document.getElementById("input");
    const inputValue = inputField.value;
    if(inputValue ===''){
        document.getElementById("validation").classList.remove("hidden")
        document.getElementById("error").classList.add("hidden")
        inputField.value = ''
        return
    }else{
        document.getElementById("validation").classList.add("hidden")
    }
    loadData(inputValue)
    inputField.value = ''

}
