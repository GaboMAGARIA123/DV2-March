const Info = document.getElementById('GetInfo');

applyInfo = async () => {
    const response = await fetch('https://restcountries.com/v3.1/name/Georgia');
    const items = await response.json();

    const itemsList = document.getElementById('GeoIN');
    itemsList.innerHTML = "";

    items.forEach(item => {

        const languages = Object.values(item.languages).join(', ');

        itemsList.innerHTML = `
        <p>დედაქალაქი: ${item.capital}</p>
        <p>მოსახლეობა: ${item.population}</p>
        <p>ოფიციალური ენა: ${languages}</p>
        <img src="${item.flags.png}" class="Img" alt="Flag of Georgia">`
    });
    console.log(items);
}

Info.addEventListener('click', applyInfo)