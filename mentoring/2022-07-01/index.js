/* peomise.all */
/* 
const promise1= new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('Hallo from p1')
    }, 5000)
})
const promise2= new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('Sorry i am from p2 rejected')
    }, 8000)
})
const promise3= new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('Hallo from p3')
    }, 2000)
});
const promiseResolving = async()=>{
    const response = await Promise.all([promise1, promise2, promise3])
    console.log(response)
};
promiseResolving()
 */
////////////Promise.all real example///////////////
const api1 = fetch(
  "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
);
const api2 = fetch("https://dog.ceo/api/breeds/image/random");
const api3 = fetch("https://api.zippopotam.us/us/33162");
const fetchData = async () => {
  const response = await Promise.all([api1, api2, api3]);
  const data = await Promise.all(response.map((x) => x.json()));
  console.log(data);
  document.getElementById("demo").innerHTML = `
   <div class="card" style="width: 18rem;">
  <img src=${data[1].message} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Hallo i am from: ${data[2].country}</h5>
    <p class="card-text">Mein name: ${data[0].source[0].annotations.source_name}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
   `;
};
fetchData();
