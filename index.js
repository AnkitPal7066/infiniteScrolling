const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const showMore = document.querySelector(".more");
const container = document.querySelector(".container");

let inputData = "";
let page = 1;

function debounce(func, delay){
  let timeoutId;
  return function(){
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function(){
      func.apply(context, args);
    }, delay);
  };
 }

async function searchImage(){
  inputData = searchInput.value;
  const api = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);
  const result = data.results;
  if(page === 1){
    container.innerHTML = "";
  }
  result.map((ele) =>{

    const imageBox = document.createElement("div");
    imageBox.classList.add("imgBox");
    
    const image = document.createElement("img");
    image.classList.add("image");
    image.src = ele.urls.small;
    image.alt = ele.alt_description;

    const imageLink = document.createElement("a");
    imageLink.classList.add("a");
    imageLink.href = ele.links.html;
    imageLink.textContent = ele.alt_description;

    imageBox.appendChild(image);
    imageBox.appendChild(imageLink);
    container.appendChild(imageBox);
  })
  page++;

  // if(page > 1){
  //   showMore.style.display = "block"
  // }

}

searchButton.addEventListener("click", () =>{
  page = 1;
  searchImage();
});

searchInput.addEventListener("keyup", () =>{
  page = 1;
  debouncedSearch();
})
window.addEventListener("scroll", function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    searchImage();
  }
});
const debouncedSearch = debounce(searchImage, 700);

showMore.addEventListener("click", searchImage);

const theme = document.getElementById("theme");
theme.addEventListener("change", themeChange);


function themeChange(){
    const bodyColor = document.getElementById("body");
    const anchorlink = document.querySelectorAll(".a");

    if(theme.value === "Dark"){
        bodyColor.style.backgroundColor = "black";
        bodyColor.style.color = "white";
        anchorlink.forEach((link) =>{
          link.style.backgroundColor = "rgb(13, 13, 14)";
        })
    }else{
        bodyColor.style.backgroundColor = "white";
        bodyColor.style.color = "black";
        anchorlink.forEach((link) =>{
          link.style.backgroundColor = "rgb(3, 152, 3)";
        })
    }
}