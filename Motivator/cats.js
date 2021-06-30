// const apiKey = '342f375e3ca844c5a1b1840e9b5c657b';

async function getCats(){
    try {
        console.log("Inside getCats()")
        const response = await fetch('https://api.thecatapi.com/v1/images/search')
        const myJson = await response.json(); //extract JSON from the http response
        console.log(myJson)
        return myJson
    }
    catch (error) {
        console.log(error)
    }

}

function setCats(){
    var catElement = document.getElementById("cat")
    
    try{
        getCats().then(response => {
        console.log(response[0])
        response = response[0]
        console.log(response.url)
        var res = '<img src="'+response.url+'">'
        const result = JSON.stringify(response);
        console.log(result);
        catElement.outerHTML = res
        console.log(catElement.outerHTML)
  })
    .catch(error => {
        console.log(error);
  });
    }catch(error){
        console.log(error)
    }
}

setCats()