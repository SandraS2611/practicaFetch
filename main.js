async function contriesApi (){
const request = await fetch("https://restcountries.com/v3.1/all");
const data = await request.json()
console.log(request);
}
contriesApi()
fetch ("https://restcountries.com/v3.1/name/Argentina")
.then(res => res.json())
.then((informacion)=> {
    console.log(informacion);
})


async function countriesApiArg() {
    const res = await fetch("https://restcountries.com/v3.1/name/Argentina")
      const informacion = await res.json()
      console.log(informacion);   
      }
      countriesApiArg()

async function callbackApiArg(cb) {
  const res = await fetch("https://restcountries.com/v3.1/name/Argentina")
    const informacion = await res.json()
    cb(informacion)    
    }
    function callbackApiArg(info) {
        console.log(info);
    }
    callbackApiArg(callbackApiArg)
