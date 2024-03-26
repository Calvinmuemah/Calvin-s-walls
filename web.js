const images=document.querySelector(".images");

// to do:put your access key from unsplash here
const accesskey="y30KZ74eKSZ12cNv_NB09pFLmffpTFCWOMDbSzrhwGY";
const page=5;
const keyword="vorks wagen";
async function getimages(){
    const res =await fetch(
    ` https://api.unsplash.com/search/photos?page=${page}&query=
        ${keyword}&client_id=${accesskey}&per_page=12`
        );
    const data= await res.json();
    console.log(data)
    data.results.map((item) => {
        let img = document.createElement("img");
        img.src = item.urls.regular;
        images.appendChild(img);
    });
}
getimages();
