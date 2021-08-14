let nav_lists = [
    {
        name:"Home",
        url:"head"
    }
]

let navList = document.querySelector('.head__nav-list')
for(let i=0;i<nav_lists.length;i++){
    navList.innerHTML+= `<li>
    <a href="${nav_lists[i].url}">
    <p>${nav_lists[i].name}</p>
    <i class="far fa-angle-right"></i>
    </a>
</li>`
}

function navOpen(){
document.querySelector(".head__nav-list").classList.toggle('show')
document.querySelector(".head__nav-close").classList.toggle('show')
}

// search nav
function searchNav(){
    document.querySelector(".head__search").classList.toggle('show')
    document.querySelector(".head__search-close").classList.toggle('show')
}

window.onload = Covid
async function Covid(){
    let res = await fetch('https://api.covid19api.com/summary')
    let data = await res.json()
    console.log(data)
    
    // Global Statics
    let global = data.Global 
    let newC = global.NewConfirmed
    let newD = global.NewDeaths
    let newR = global.NewRecovered
    let tC = global.TotalConfirmed
    let tD = global.TotalDeaths
    let tR = global.TotalRecovered
    // global array
    let dailyG = [newC,newD,newR,tC,tD,tR]

    let date = new Date()
    let day = date.getDate()
    if(day < 10){day='0'+day}
    let month = date.getMonth() + 1
    if(month < 10){month='0'+month}
    let year = date.getFullYear()

    let sana = `${day}/${month}/${year}`
    document.querySelector(".head__content-text strong").innerHTML= sana
    document.querySelector(".head__content-text b").innerHTML= newC

    // daily countries statics
    let country = data.Countries 
    
    for(let c=0;c<country.length;c++){
    let c_name = country[c].Country
    let c_newC = country[c].NewConfirmed
    let c_newD = country[c].NewDeaths
    let c_newR = country[c].NewRecovered
    let c_tC = country[c].TotalConfirmed
    let c_tD = country[c].TotalDeaths
    let c_tR = country[c].TotalRecovered

    fetchdata = data

        document.querySelector(".head__search-list ul").innerHTML+= `
        <li onclick="open_c(${c})"><h3>${c_name}</h3> <i class="far fa-search"></i></li>`
    }  
}

let c_country =  document.querySelector(".head__search-country")
function open_c(d){
    let country = fetchdata.Countries 
    let c__name = country[d].Country
    let c__newC = country[d].NewConfirmed
    let c__newD = country[d].NewDeaths
    let c__newR = country[d].NewRecovered
    let c__tC = country[d].TotalConfirmed
    let c__tD = country[d].TotalDeaths
    let c__tR = country[d].TotalRecovered
     
    c_country.classList.toggle('show')
        c_country.innerHTML=`
<h2 class="far fa-arrow-left" onclick="close_c()"></h2>
<ul>
    <li><h3>${c__name}</h3></li>
    <li><p>New Confirmed</p> <p>${c__newC}</p></li>
    <li><p>New Deaths</p> <p>${c__newD}</p></li>
    <li><p>New Recovered</p> <p>${c__newR}</p></li>
    <li><p>Total Confirmed</p> <p>${c__tC}</p></li>
    <li><p>Total Deaths</p> <p>${c__tD}</p></li>
    <li><p>Total Recovered</p> <p>${c__tR}</p></li>
</ul>        `
    searchNav()
}
function close_c(){
    c_country.classList.toggle('show')
}

function searchCountry(filter){
    console.log("working")
    let allproject = document.querySelector(".head__search-list ul")
    let s_project = allproject.querySelectorAll("li")
    for(let i=0;i<s_project.length;i++){
        let s_name = s_project[i].querySelector("h3")
        if(s_name){
            let s_value = s_name.innerHTML;
            if(s_value.toUpperCase().indexOf(filter) > -1){
                s_project[i].style.display=""
            }else{
                s_project[i].style.display="none"
            }
        }
    }
}












