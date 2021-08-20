
export const getGifs = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria)}&limit=10&api_key=H7MWAX3csc2efqY5MFplb0mn3h3y5nL5`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(img => {
        return {
            id:img.id,
            title:img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}