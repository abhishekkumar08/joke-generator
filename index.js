var options = {
    method: 'GET',
    url: 'https://joke3.p.rapidapi.com/v1/joke',
    headers: {
        'x-rapidapi-key': '74fea0c7e4mshd4eb89dd74e10a7p10368ejsn48b887742e22',
        'x-rapidapi-host': 'joke3.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    document.getElementById("joke").innerHTML = response.data.content + "😂";
}).catch(function (error) {
    document.getElementById("joke").innerHTML = error;
});
