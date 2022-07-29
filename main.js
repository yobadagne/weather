
        window.addEventListener("load", ()=>{featcher("addis ababa")});
        document.querySelector(".search").addEventListener("click",()=>{ 
            
            let city= document.querySelector(".searchBar").value;
            featcher(city)} )


      function featcher(city){
        const apikey = "33b651f233d66391f161d0a9fab7f293";
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+
        apikey+"&units=metric").then((response)=>response.json())
        .then((data)=>displayweather(data))
    
        function displayweather(data){
        const{ message }=data;
        if (message==="city not found")
        {
        document.querySelector(".city").innerHTML="city not found";
        document.querySelector(".temp").innerHTML="unknown";
        document.querySelector(".icon").innerHTML="unknown";
        document.querySelector(".state").innerHTML="unknown";
        document.querySelector(".humidity").innerHTML="unknown";
        document.querySelector(".windSpeed").innerHTML="unknown"; 
       
        }   
    
        else 
        { 
        const{ name }=data;
        const{ icon, description}=data.weather[0];
        const{ temp, humidity}= data.main;
        const { speed}=data.wind;
        const { country }=data.sys
        
        document.querySelector(".city").innerHTML="Weather in: "+ name +", " +country;
        document.querySelector(".temp").innerHTML="Temp: " + temp+" °c";
        document.querySelector(".icon").src= "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
        document.querySelector(".state").innerHTML=description;
        document.querySelector(".humidity").innerHTML= "Humidity: "+ humidity+" %";
        document.querySelector(".windSpeed").innerHTML="Wind Speed: "+ speed+" Km/h";
        }    
    }

    
    }