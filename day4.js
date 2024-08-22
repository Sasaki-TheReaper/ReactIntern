async function getData() {
    isLoading(true);
    const response = await fetch("https://swapi.dev/api/planets/");
    const data = await response.json()
        .then(data => {
            isLoading(false);
            const processedData = data.results.map((item, index) => ({
                id: index + 1,
                ...item
            }));
            console.log(processedData);
            return processedData;
        })
        .catch(e => {
            console.error(e);
            isLoading(false);
        });
    return data;
}
console.log(getData);
