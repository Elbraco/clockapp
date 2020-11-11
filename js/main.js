// URL API
const urlWorldTime = "http://worldtimeapi.org/api/ip" ;
const urlLocation = "https://freegeoip.app/json/"
const urlQuotesRandom = "https://programming-quotes-api.herokuapp.com/quotes/random";


function getQuotes(response){
    let p = document.querySelector('p');
    let author = document.querySelector('#author')

    p.textContent = response.en
    author.innerHTML = response.author
}


function getParis(response) {

    let hours = document.querySelector('#hours');
    let abbr = document.querySelector('#abbr');
    let hello = document.querySelector('#hello')
    let meteo = document.querySelector('#meteo')
    let background = document.querySelector('.background')
    let currenttime = document.querySelector('#current-timezone')
    let dayYear = document.querySelector('#dayoftheyear')
    let dayWeek = document.querySelector('#dayoftheweek')
    let WNumber = document.querySelector('#weeknumber')
    let sun = document.createElement('img')
    let item = document.querySelector('.item')
    let colorH2 = document.querySelectorAll('h2')
    let colorPara = document.querySelectorAll('.item article ')


    
    let ville = response.datetime.substr(11, 5)
    let abbreviation = response.abbreviation;
    let timezone = response.timezone;
    let dayOftheYear = response.day_of_year
    let dayoftheWeek = response.day_of_week
    let weekNumber = response.week_number

    let numberWeek = document.createElement('p');
    numberWeek.textContent = weekNumber;
    WNumber.appendChild(numberWeek)

    let week = document.createElement('p')
    week.textContent = dayOftheYear
    dayWeek.appendChild(week)


    let day = document.createElement('p')
    day.textContent = dayoftheWeek;
    dayYear.appendChild(day)

     let currentzone = document.createElement('p')
     currentzone.textContent = timezone;
     currenttime.appendChild(currentzone)
    


    hours.textContent = ville 
    abbr.textContent = abbreviation
    
    
    console.log('heure' , ville);
    console.log(response.utc_offset);


    
    if( ville > '05:00' && ville < '12:00') {
        hello.textContent = "good morning"

         background.classList.add('background-day')
         sun.setAttribute("src", "assets/desktop/icon-sun.svg");
         meteo.appendChild(sun)

         for(let i = 0; i < colorPara.length; i++){

            colorPara[i].classList.add('colorparaday')

         }

    } else if(ville > '12:00' && ville < '18:00' ) {
        hello.textContent = 'good afternoon'
        background.classList.add('background-day')
        // let sun = document.createElement('img')
        sun.setAttribute("src", "assets/desktop/icon-sun.svg");
        meteo.appendChild(sun)

        for(let i = 0; i < colorPara.length; i++){

            colorPara[i].classList.add('colorparaday')

         }
    } else {
        hello.textContent = 'good evening';
        sun.setAttribute("src", "assets/desktop/icon-moon.svg")
        background.classList.add('background-night')

        for(let i = 0; i < colorH2.length; i++){
            colorH2[i].classList.add('colorparanight')
        }
        item.classList.add('night')
        // currentzone.classList.add('colorparaday')
    }

}


function getLocation(response){
    
    console.log(response.city);
    console.log(response.country_code);
    let city = document.querySelector('#city');
    
    city.textContent = response.city +', '+ response.country_code 
    
}

const button = document.querySelector('#quotes')

button.addEventListener('click', function(e) {
    e.preventDefault();
    dataQuotes();
})


//
getJson(urlWorldTime, getParis);

getJson(urlLocation, getLocation);

getJson(urlQuotesRandom, getQuotes);
