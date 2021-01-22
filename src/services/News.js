// Source of the false data
const url = "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=82965f348be144828e8a35bd69e804a8";

// Recovery of false data in json format
export async function getNews() {
    let result = await
        fetch(url)
            .then(response => response.json())
            .catch(error => console.log('Error', error));
    return result.articles;
}