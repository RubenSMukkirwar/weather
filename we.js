window.addEventListener('load',()=>{
    let long;
    let latt;
    let icon = document.querySelector('.icon');
    let temp_dcrip = document.querySelector('.temp-disciption');
    let temp_degree = document.querySelector('.degree');
    let timezone = document.querySelector('.timezone');
    let feels_like = document.querySelector('.feels_c');
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        latt = position.coords.latitude;

        let api = `https://api.weatherapi.com/v1/current.json?key=b154af80ba9e4abd8a473355230406&q=${latt},${long} &aqi=no`;
        fetch(api).then(responce =>{
            return responce.json();
           })
           .then(data =>{
            console.log(data);
            const {feelslike_c,temp_c,conditiontext} = data.current; 
            temp_degree.textContent = temp_c; 
            feels_like.textContent = feelslike_c;
            //icon.outerHTML = data.current.condition.icon;
            temp_dcrip.textContent = data.current.condition.text;
            timezone.textContent = `${data.location.name}/${data.location.country}`;
           });
       });


          


    }else{
        h1.textContent = "not working broooooo";
    }
    /*function setIcons(icon,iconID){
        const skycons = new skycons({
            color:"white"
        });
        const currenticon = 

    };*/
});