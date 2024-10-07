const API_KEY = 'i4patFMlcmD1sLWJCg7XrYjSjbNcM87aOWiqIw1X';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export default async (string)=>{

    try{
        const response = await fetch(`${API_URL}?api_key=${API_KEY}`);
        const data = await response.json();
        return Promise.resolve(data);
    }catch(err){
        console.error('Error fetching data:',err);
        return nPromise.reject(err);
    }
}