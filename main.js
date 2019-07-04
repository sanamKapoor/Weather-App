window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatureD = document.querySelector('.temp-desc');
  let tempDeg = document.querySelector('.temp-degree');
  let locationTime = document.querySelector('.location-timezone');

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      let proxy = 'https://cors-anywhere.herokuapp.com/';
      var api = `${proxy}https://api.darksky.net/forecast/fdf36c1e47d51baa0462804ed7bc27b1/${lat},${long}`;

   fetch(api)
    .then(res => {return res.json()})
    .then(data => {
      console.log(data);
      const {temperature, summary } = data.currently; 

      //      Set dom elements

      let celsius = (temperature - 32) * 5/9;
        tempDeg.textContent = Math.floor(celsius) + ' C';
      temperatureD.textContent = summary;
      locationTime.textContent = data.timezone;

      document.querySelector('.temp-degree').addEventListener('click', () =>{
        tempDeg.textContent = temperature + ' F';
      });
      
    });

    });

    
  }
 
})