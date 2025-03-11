function displaycoctel(response) {

    console.log(response.data.answer)
    let coctelData = response.data.answer

   new Typewriter("#coctel", {
        strings: coctelData,
        autoStart: true,
        delay: 10,
        cursor: ""
      });
}


function generatecoctel(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let word = searchInputElement.value;
    
    let apikey = "401t83c73f9a5ce923fbbco0d7594958";
    let prompt = 

    "Please be precise and simple, not use more than 20 lines. The structure must be title, ingredients, instructions in basic HTML code adding the coctelStructure class in the main container. Use h3 for all titles size and only include what's inside the body without the HTML start and quotes. Add a </br> before the h3 Ingredient, h3 Instructions. Please put the enjoy recommendations outside the list but inside the div, add a </br> starting, a 🍸 at the end and make it brief"

    let context = `Generate a coctel recipe using the ingredients ${word}`;
    let EndPoint = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
    axios.get(EndPoint).then(displaycoctel);
    console.log(EndPoint);
  
    let body = document.querySelector("body");
    body.classList.add("coctelDisplay");
  
    new Typewriter("#ingredient", {
        strings: `${word} 💥`,
        autoStart: true,
        delay: 50,
        cursor: ""
      });
    
    let poem = document.querySelector("#coctel");
    poem.style.display = "none"

    coctel.style.display = "flex" 
    new Typewriter("#coctel", {
      strings: ("..."),
      autoStart: true,
      delay: 300,
      cursor: ""
    });

    searchInputElement.value = "";

}

let poemFormElement = document.querySelector("#coctelForm")
poemFormElement.addEventListener("submit", generatecoctel)