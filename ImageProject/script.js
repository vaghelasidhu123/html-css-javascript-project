let Access_Key= "RPKeT-c6l1sgCV9T3s4c4Laju1JVqV49cccr76XTGMs";
let searchBtn = document.getElementById("searchBtn");
let search = document.getElementById("search");
let showData = document.querySelector(".showData");
let moreBtn = document.getElementById("moreBtn");


let page = 1;
const getData= async (searchValue,pageNo) => {
    let fetching = await fetch(`https://api.unsplash.com/search/photos?query=${searchValue}&per_Page=28&P=${pageNo}age&client_id=${Access_Key}`);
    let jsonData = await fetching.json();
    console.log(jsonData.results);

    if(pageNo === 1)
    {
        showData.innerHTML="";
    }
    if(search.value == ""){
        showData.innerHTML= `
        <h1>Please Search</h1>
        `
    }
    if(search.value != ""){
      showData.innerHTML="";
    }
    else{
        document.querySelector(".loadMore").style.display="block";
    }

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

moreBtn.addEventListener("click",function(){
    let searchValue = search.value;
    getData(searchValue,page++);
})