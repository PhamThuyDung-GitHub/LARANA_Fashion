const URL_API = `http://localhost:3000`;
async function getData(URL) {
    const promist = await fetch(URL);
    const data = await promist.json();
    return data;
}
