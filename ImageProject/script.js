let Access_Key= "RPKeT-c6l1sgCV9T3s4c4Laju1JVqV49cccr76XTGMs";
let searchBtn = document.getElementById("searchBtn");
let search = document.getElementById("search");
let showData = document.getElementById("showData");

const getData= async (searchValue) => {
    let fetching = await fetch(`https://api.unsplash.com/search/photos?query=${searchValue}&per_Page=28&P=1age&client_id=${Access_Key}`);
    let jsonData = await fetching.json();
    console.log(jsonData.results);

    jsonData.results.forEach(function(data) {
        console.log(data.urls.small)

        let div = document.createElement("div");
        div.classList.add("card");
        showData.appendChild(div);

        div.innerHTML=`
             <img src=${data.urls.small} alt="">
            <a href=${data.links.html}>${data.alt_description
            }</a>

        `

    })
    
}


searchBtn.addEventListener("click",function(){
    let searchValue = search.value;
    getData(searchValue);
})

getData()