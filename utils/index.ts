
const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=audi&limit=30';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8a14750c70mshf39c4d7ca0cad52p1dd066jsn0c4cccd9f6f0',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '8a14750c70mshf39c4d7ca0cad52p1dd066jsn0c4cccd9f6f0',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers,
    })

    const result = await response.json()

    return result

}