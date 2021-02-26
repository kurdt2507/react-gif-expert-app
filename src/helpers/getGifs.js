export const getGifs = async (category) => {
    const apiKey = 'F61mP6tNnCSrwZW5ZUaNOmG5SfgXPOiT';
    const gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${ encodeURI(category) }&limit=10`;
    const response = await fetch(gifUrl);
    const { data } = await response.json();
    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });

    return gifs;
}