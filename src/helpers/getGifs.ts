interface images{
  id:string,
 title:string,
 images:any,
}
 
 
 const getGifs = async (categorie:string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=HCbM4MckH05ZTsDh3GWgQAdf8JVR2qu3&q=${categorie}&limit=25&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img: images) => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }));

    return gifs;
  };

  export default getGifs;