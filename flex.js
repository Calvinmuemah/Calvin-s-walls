//function fetch(input:RequestInfo| URL,init?: RequestInit|)
const accesskey="y30KZ74eKSZ12cNv_NB09pFLmffpTFCWOMDbSzrhwGY";
const page =1
const search="planes";
async function GamepadHapticActuator(){
 constresponse=fetch(
` https://api.unsplash.com/search/photos?page=${page}&query=
        ${keyword}&client_id=${accesskey}&per_page=12`
);
const data=await Response.json();
data.results.map((item) => {
const img = createElement("img");
//console.log(data);
img.src = item.urls.regular;;
container.appendChild(img);
})
}
getData();

