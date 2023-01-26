import axios from 'axios';
import { EvalSourceMapDevToolPlugin } from 'webpack';

let loadMoreButton = document.querySelector<HTMLButtonElement>(".loadButton");
let allCountryData = document.querySelector<HTMLTableElement>(".tableBody");
let maxDataLoaded: number = 20;
//let nextPage: number = 1; 
let url = "http://localhost:3004/countries";

type Countries = {
    name: string,
    code: string,
    capital: string,
    region: string,
    currency: {
        code: string,
        name: string,
        symbol: string
    },
    language: {
        code: string,
        name: string
    },
    flag: string,
    dialling_code: string,
    isoCode: string
}

loadData(maxDataLoaded);

// loadMoreData(maxDataLoaded);
function loadData(maxDataLoaded: number) {
    axios.get<Countries[]>(url)
        .then((data) => {
            for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                allCountryData.innerHTML +=
                    `<tr>
            <th> ${data.data[i].name}</th>
            <th>${data.data[i].capital}</th>
            <th>${data.data[i].currency.code}</th>
            <th>${data.data[i].language.name}</th>
          </tr>`;
            }
        }).catch((error) => { console.log(error); })
}
//pagination for json server 
// http://localhost:3004/countries?_page=1_limit=20
loadMoreButton.addEventListener("click", () => {
    if (maxDataLoaded < 235) {
        maxDataLoaded = maxDataLoaded + 20;
        loadData(maxDataLoaded);
    } else {
        loadMoreButton.style.display = 'none'
        loadData(maxDataLoaded);
    }
})


// inout search country
const countryInput = document.querySelector<HTMLInputElement | null>(".countryinput");
const capitalinput = document.querySelector<HTMLInputElement | null>(".capitalinput");
const currencyinout = document.querySelector<HTMLInputElement>(".currencyinout");
const languageinput = document.querySelector<HTMLInputElement>(".languageinput");
const searchButton = document.querySelector<HTMLButtonElement | null>(".searchButton");
let searchedValues = document.querySelector<HTMLTableElement | null>(".tableBody3");
//search function too long 
searchButton.addEventListener("click", () => {
    allCountryData.innerHTML = " "
    if (Number(countryInput.value.trim()) !== 0 && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) === 0 && Number(languageinput.value.trim()) === 0) {
        axios.get<Countries[]>(`http://localhost:3004/countries?name=${countryInput.value}`)
            .then((fileredData) => {
                url = `http://localhost:3004/countries?name=${countryInput.value}`;
                for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                    allCountryData.innerHTML +=
                        `<tr>
                    <th> ${fileredData.data[i].name}</th>
                    <th>${fileredData.data[i].capital}</th>
                    <th>${fileredData.data[i].currency.code}</th>
                    <th>${fileredData.data[i].language.name}</th>
                    </tr>`;

                }
            })
    } else if (Number(countryInput.value.trim()) !== 0 && Number(capitalinput.value.trim()) !== 0 && Number(currencyinout.value.trim()) === 0 && Number(languageinput.value.trim()) === 0) {
        axios.get<Countries[]>(`http://localhost:3004/countries?name=${countryInput.value}&capital=${capitalinput.value}`)
            .then((fileredData) => {
                url = `http://localhost:3004/countries?name=${countryInput.value}&capital=${capitalinput.value}`;
                for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                    allCountryData.innerHTML +=
                        `<tr>
                    <th> ${fileredData.data[i].name}</th>
                    <th>${fileredData.data[i].capital}</th>
                    <th>${fileredData.data[i].currency.code}</th>
                    <th>${fileredData.data[i].language.name}</th>
                    </tr>`;

                }
            })
    }else if (Number(countryInput.value.trim()) !== 0 && Number(capitalinput.value.trim()) !== 0 && Number(currencyinout.value.trim()) !== 0 && Number(languageinput.value.trim()) === 0) {
        axios.get<Countries[]>(`http://localhost:3004/countries?name=${countryInput.value}&capital=${capitalinput.value}&currency.code=${currencyinout.value}`)
            .then((fileredData) => {
                url = `http://localhost:3004/countries?name=${countryInput.value}&capital=${capitalinput.value}&currency.code=${currencyinout.value}`;
                for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                    allCountryData.innerHTML +=
                        `<tr>
                    <th> ${fileredData.data[i].name}</th>
                    <th>${fileredData.data[i].capital}</th>
                    <th>${fileredData.data[i].currency.code}</th>
                    <th>${fileredData.data[i].language.name}</th>
                    </tr>`;

                }
            })
    } else if (Number(countryInput.value.trim()) !== 0 && Number(capitalinput.value.trim()) !== 0 && Number(currencyinout.value.trim()) !== 0 && Number(languageinput.value.trim()) !== 0) {
        axios.get<Countries[]>(`http://localhost:3004/countries?name=${countryInput.value}&capital=${capitalinput.value}&currency.code=${currencyinout.value}&language.name=${languageinput.value}`)
            .then((fileredData) => {
                url = `http://localhost:3004/countries?name=${countryInput.value}&capital=${capitalinput.value}&currency.code=${currencyinout.value}&language.name=${languageinput.value}`;
                for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                    allCountryData.innerHTML +=
                        `<tr>
                    <th> ${fileredData.data[i].name}</th>
                    <th>${fileredData.data[i].capital}</th>
                    <th>${fileredData.data[i].currency.code}</th>
                    <th>${fileredData.data[i].language.name}</th>
                    </tr>`;

                }
            })
    }else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) !== 0 && Number(currencyinout.value.trim()) === 0 && Number(languageinput.value.trim()) === 0) {
        axios.get<Countries[]>(`http://localhost:3004/countries?capital=${capitalinput.value}`)
            .then((fileredData) => {
                url = `http://localhost:3004/countries?&capital=${capitalinput.value}`;
                for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                    allCountryData.innerHTML +=
                        `<tr>
                    <th> ${fileredData.data[i].name}</th>
                    <th>${fileredData.data[i].capital}</th>
                    <th>${fileredData.data[i].currency.code}</th>
                    <th>${fileredData.data[i].language.name}</th>
                    </tr>`;

                }
            })
    }else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) !== 0 && Number(languageinput.value.trim()) === 0) {
        axios.get<Countries[]>(`http://localhost:3004/countries?currency.code=${currencyinout.value}`)
            .then((fileredData) => {
                url = `http://localhost:3004/countries?&currency.code=${currencyinout.value}`;
                for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                    allCountryData.innerHTML +=
                        `<tr>
                    <th> ${fileredData.data[i].name}</th>
                    <th>${fileredData.data[i].capital}</th>
                    <th>${fileredData.data[i].currency.code}</th>
                    <th>${fileredData.data[i].language.name}</th>
                    </tr>`;

                }
            })
    }else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) === 0 && Number(languageinput.value.trim()) !== 0) {
        axios.get<Countries[]>(`http://localhost:3004/countries?language.name=${languageinput.value}`)
            .then((fileredData) => {
                url = `http://localhost:3004/countries?language.name=${languageinput.value}`;
                for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                    allCountryData.innerHTML +=
                        `<tr>
                    <th> ${fileredData.data[i].name}</th>
                    <th>${fileredData.data[i].capital}</th>
                    <th>${fileredData.data[i].currency.code}</th>
                    <th>${fileredData.data[i].language.name}</th>
                    </tr>`;

                }
            })
    }else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) !== 0 && Number(languageinput.value.trim()) !== 0) {
        axios.get<Countries[]>(`http://localhost:3004/countries?currency.code=${currencyinout.value}&language.name=${languageinput.value}`)
            .then((fileredData) => {
                url = `http://localhost:3004/countries?currency.code=${currencyinout.value}&language.name=${languageinput.value}`;
                for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                    allCountryData.innerHTML +=
                        `<tr>
                    <th> ${fileredData.data[i].name}</th>
                    <th>${fileredData.data[i].capital}</th>
                    <th>${fileredData.data[i].currency.code}</th>
                    <th>${fileredData.data[i].language.name}</th>
                    </tr>`;

                }
            })
    }else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) !== 0 && Number(currencyinout.value.trim()) !== 0 && Number(languageinput.value.trim()) !== 0) {
        axios.get<Countries[]>(`http://localhost:3004/countries?capital=${capitalinput.value}&currency.code=${currencyinout.value}&language.name=${languageinput.value}`)
            .then((fileredData) => {
                url = `http://localhost:3004/countries?capital=${capitalinput.value}&currency.code=${currencyinout.value}&language.name=${languageinput.value}`;
                for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                    allCountryData.innerHTML +=
                        `<tr>
                    <th> ${fileredData.data[i].name}</th>
                    <th>${fileredData.data[i].capital}</th>
                    <th>${fileredData.data[i].currency.code}</th>
                    <th>${fileredData.data[i].language.name}</th>
                    </tr>`;

                }
            })
    }else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) !== 0 && Number(currencyinout.value.trim()) !== 0 && Number(languageinput.value.trim()) === 0) {
        axios.get<Countries[]>(`http://localhost:3004/countries?capital=${capitalinput.value}&currency.code=${currencyinout.value}`)
            .then((fileredData) => {
                url = `http://localhost:3004/countries?capital=${capitalinput.value}&currency.code=${currencyinout.value}`;
                for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                    allCountryData.innerHTML +=
                        `<tr>
                    <th> ${fileredData.data[i].name}</th>
                    <th>${fileredData.data[i].capital}</th>
                    <th>${fileredData.data[i].currency.code}</th>
                    <th>${fileredData.data[i].language.name}</th>
                    </tr>`;

                }
            })
    }else if (Number(countryInput.value.trim()) !== 0 && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) !== 0 && Number(languageinput.value.trim()) === 0) {
        axios.get<Countries[]>(`http://localhost:3004/countries?name=${countryInput.value}&currency.code=${currencyinout.value}`)
            .then((fileredData) => {
                url = `http://localhost:3004/countries?name=${countryInput.value}&currency.code=${currencyinout.value}`;
                for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                    allCountryData.innerHTML +=
                        `<tr>
                    <th> ${fileredData.data[i].name}</th>
                    <th>${fileredData.data[i].capital}</th>
                    <th>${fileredData.data[i].currency.code}</th>
                    <th>${fileredData.data[i].language.name}</th>
                    </tr>`;

                }
            })
    }else if (Number(countryInput.value.trim()) !== 0 && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) !== 0 && Number(languageinput.value.trim()) !== 0) {
        axios.get<Countries[]>(`http://localhost:3004/countries?name=${countryInput.value}&currency.code=${currencyinout.value}&language.name=${languageinput.value}`)
            .then((fileredData) => {
                url = `http://localhost:3004/countries?name=${countryInput.value}&currency.code=${currencyinout.value}&language.name=${languageinput.value}`;
                for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                    allCountryData.innerHTML +=
                        `<tr>
                    <th> ${fileredData.data[i].name}</th>
                    <th>${fileredData.data[i].capital}</th>
                    <th>${fileredData.data[i].currency.code}</th>
                    <th>${fileredData.data[i].language.name}</th>
                    </tr>`;

                }
            })
    }else {
        location.reload();
    }
})

const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", () => {
    countryInput.value = "";
    capitalinput.value = "";
    currencyinout.value = "";
    languageinput.value = "";
    location.reload();
})


const sortButtonsDown = document.querySelectorAll(".arrowDown");
const sortButtonsUp = document.querySelectorAll(".arrowUp");
sortButtonsDown[0].addEventListener("click", () => {
    allCountryData.innerHTML = " "
    axios.get<Countries[]>('http://localhost:3004/countries?_sort=name&_order=desc')
        .then((data) => {
            url = "http://localhost:3004/countries?_sort=name&_order=desc"
            for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                allCountryData.innerHTML +=
                    `<tr>
<th> ${data.data[i].name}</th>
<th>${data.data[i].capital}</th>
<th>${data.data[i].currency.code}</th>
<th>${data.data[i].language.name}</th>
</tr>`;
            }
        }).catch((error) => { console.log(error); })
})
sortButtonsUp[0].addEventListener("click", () => {
    allCountryData.innerHTML = " "
    axios.get<Countries[]>('http://localhost:3004/countries?_sort=name&_order=asc')
        .then((data) => {
            url = "http://localhost:3004/countries?_sort=name&_order=asc"
            for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                allCountryData.innerHTML +=
                    `<tr>
<th> ${data.data[i].name}</th>
<th>${data.data[i].capital}</th>
<th>${data.data[i].currency.code}</th>
<th>${data.data[i].language.name}</th>
</tr>`;
            }
        }).catch((error) => { console.log(error); })

})
sortButtonsDown[1].addEventListener("click", () => {
    allCountryData.innerHTML = " "
    axios.get<Countries[]>('http://localhost:3004/countries?_sort=capital&_order=desc')
        .then((data) => {
            url = "http://localhost:3004/countries?_sort=capital&_order=desc"
            for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                allCountryData.innerHTML +=
                    `<tr>
<th> ${data.data[i].name}</th>
<th>${data.data[i].capital}</th>
<th>${data.data[i].currency.code}</th>
<th>${data.data[i].language.name}</th>
</tr>`;
            }
        }).catch((error) => { console.log(error); })
})
sortButtonsUp[1].addEventListener("click", () => {
    allCountryData.innerHTML = " "
    axios.get<Countries[]>('http://localhost:3004/countries?_sort=capital&_order=asc')
        .then((data) => {
            url = "http://localhost:3004/countries?_sort=capital&_order=asc"
            for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                allCountryData.innerHTML +=
                    `<tr>
<th> ${data.data[i].name}</th>
<th>${data.data[i].capital}</th>
<th>${data.data[i].currency.code}</th>
<th>${data.data[i].language.name}</th>
</tr>`;
            }
        }).catch((error) => { console.log(error); })

})

sortButtonsDown[2].addEventListener("click", () => {
    allCountryData.innerHTML = " "
    axios.get<Countries[]>('http://localhost:3004/countries?_sort=currency.code&_order=desc')
        .then((data) => {
            url = "http://localhost:3004/countries?_sort=currency.code&_order=desc"
            for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                allCountryData.innerHTML +=
                    `<tr>
<th> ${data.data[i].name}</th>
<th>${data.data[i].capital}</th>
<th>${data.data[i].currency.code}</th>
<th>${data.data[i].language.name}</th>
</tr>`;
            }
        }).catch((error) => { console.log(error); })
})
sortButtonsUp[2].addEventListener("click", () => {
    allCountryData.innerHTML = " "
    axios.get<Countries[]>('http://localhost:3004/countries?_sort=currency.code&_order=asc')
        .then((data) => {
            url = "http://localhost:3004/countries?_sort=currency.code&_order=asc"
            for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                allCountryData.innerHTML +=
                    `<tr>
<th> ${data.data[i].name}</th>
<th>${data.data[i].capital}</th>
<th>${data.data[i].currency.code}</th>
<th>${data.data[i].language.name}</th>
</tr>`;
            }
        }).catch((error) => { console.log(error); })

})

sortButtonsDown[3].addEventListener("click", () => {
    allCountryData.innerHTML = " "
    axios.get<Countries[]>('http://localhost:3004/countries?_sort=language.name&_order=desc')
        .then((data) => {
            url = "http://localhost:3004/countries?_sort=language.name&_order=desc"
            for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                allCountryData.innerHTML +=
                    `<tr>
<th> ${data.data[i].name}</th>
<th>${data.data[i].capital}</th>
<th>${data.data[i].currency.code}</th>
<th>${data.data[i].language.name}</th>
</tr>`;
            }
        }).catch((error) => { console.log(error); })
})
sortButtonsUp[3].addEventListener("click", () => {
    allCountryData.innerHTML = " "
    axios.get<Countries[]>('http://localhost:3004/countries?_sort=language.name&_order=asc')
        .then((data) => {
            url = "http://localhost:3004/countries?_sort=language.name&_order=asc"
            for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
                allCountryData.innerHTML +=
                    `<tr>
<th> ${data.data[i].name}</th>
<th>${data.data[i].capital}</th>
<th>${data.data[i].currency.code}</th>
<th>${data.data[i].language.name}</th>
</tr>`;
            }
        }).catch((error) => { console.log(error); })

})


