function test() {
    console.log("In here")
    var e = document.getElementById("motivation")
    try {
        callMotivationQuoteAPI()
          .then(response => {
            var res = '<h2>'+response.content+'</h2> <h5>- '+response.author+'</h5>'
            const result = JSON.stringify(response);
            e.innerHTML = res;
          })
          .catch(error => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }

}

async function callMotivationQuoteAPI() {
    try {
        console.log("Inside callMotivationQuoteAPI()")
        const response = await fetch('https://api.quotable.io/random');
        const myJson = await response.json(); //extract JSON from the http response
        console.log(myJson)
        return myJson
    }
    catch (error) {
        console.log(error)
    }

}


test();