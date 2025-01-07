let serachInput  = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let showData = document.querySelector(".showData");
let moreBtn = document.getElementById("moreBtn");

let Access_Key = "RPKeT-c6l1sgCV9T3s4c4Laju1JVqV49cccr76XTGMs";

let page = 1
const getData = async (searchValue,pageNo) =>{
    let fectching =  await fetch(`https://api.unsplash.com/search/photos?query=${searchValue} &per_Page=28&P=${pageNo}age&client_id=${Access_Key}`);
    let jsonData = await fectching.json()
    console.log(jsonData);

    if(pageNo === 1)
    {
        showData.innerHTML="";
    }
    if(serachInput.value == "")
    {
        showData.innerHTML = `
        <h1>Please Search</h1>
        `
    }
    if(search.value != ""){
        showData.innerHTML = "";
    }
    else{
        document.querySelector(".loadMore").style.display="block";
    }
     

    jsonData.results.forEach(function(data){
        console.log(data);
        let div = document.createElement("div");
        div.classList.add("card");
        showData.appendChild(div);

        div.innerHTML=`
         <img src=${data.urls.small} alt="">
            <a href=${data.links.html} target="_blank">${data.alt_description}</a>
        `
    })
}

searchBtn.addEventListener("click",function(){
    let searchValue = serachInput.value;
    getData(searchValue,1);
})

moreBtn.addEventListener("click",function(){
    let searchValue = serachInput.value;
    getData(searchValue,page++);
})