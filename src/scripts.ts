import axios from 'axios';
import { EvalSourceMapDevToolPlugin } from 'webpack';

let loadMoreButton = document.querySelector<HTMLButtonElement>(".loadButton");
let allCountryData = document.querySelector<HTMLTableElement>(".tableBody");
let maxDataLoaded: number = 20;
//let nextPage: number = 1; 
let url = "http://localhost:3004/countries";

//test 
// axios.get("http://localhost:3004/countries?_limit=20&_sort=name&_order=desc").then((dataTable)=>{
//     console.log(dataTable)
// })

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
    searchedValues.innerHTML = "";
    allCountryData.style.display = "none";
    loadMoreButton.style.display = 'none'
    axios.get<Countries[]>(`http://localhost:3004/countries`)
        .then((data) => {
            for (let i = 0; i < data.data.length; i++) {
                if ((countryInput.value.trim().toLowerCase() === data.data[i].name.toLowerCase()) && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) === 0 && Number(languageinput.value.trim()) === 0) {
                    //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
                    searchedValues.innerHTML +=
                        `<tr>
                    <th> ${data.data[i].name}</th>
                    <th>${data.data[i].capital}</th>
                    <th>${data.data[i].currency.code}</th>
                    <th>${data.data[i].language.name}</th>
                  </tr>`;

                } else if ((countryInput.value.trim().toLowerCase() === data.data[i].name.toLowerCase()) && capitalinput.value.trim().toLowerCase() === data.data[i].capital.toLowerCase() && Number(currencyinout.value.trim()) === 0 && Number(languageinput.value.trim()) === 0) {
                    //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
                    searchedValues.innerHTML +=
                        `<tr>
                <th> ${data.data[i].name}</th>
                <th>${data.data[i].capital}</th>
                <th>${data.data[i].currency.code}</th>
                <th>${data.data[i].language.name}</th>
              </tr>`;

                } else if ((countryInput.value.trim().toLowerCase() === data.data[i].name.toLowerCase()) && capitalinput.value.trim().toLowerCase() === data.data[i].capital.toLowerCase() && currencyinout.value.trim().toLowerCase() === data.data[i].currency.code.toLowerCase() && Number(languageinput.value.trim()) === 0) {
                    searchedValues.innerHTML +=
                        `<tr>
            <th> ${data.data[i].name}</th>
            <th>${data.data[i].capital}</th>
            <th>${data.data[i].currency.code}</th>
            <th>${data.data[i].language.name}</th>
          </tr>`;

                } else if ((countryInput.value.trim().toLowerCase() === data.data[i].name.toLowerCase()) && capitalinput.value.trim().toLowerCase() === data.data[i].capital.toLowerCase() && currencyinout.value.trim().toLowerCase() === data.data[i].currency.code.toLowerCase() && languageinput.value.trim().toLowerCase() === data.data[i].language.name.toLowerCase()) {
                    searchedValues.innerHTML +=
                        `<tr>
        <th> ${data.data[i].name}</th>
        <th>${data.data[i].capital}</th>
        <th>${data.data[i].currency.code}</th>
        <th>${data.data[i].language.name}</th>
      </tr>`;

                } else if (Number(countryInput.value.trim()) === 0 && capitalinput.value.trim().toLowerCase() === data.data[i].capital.toLowerCase() && Number(currencyinout.value.trim()) === 0 && Number(languageinput.value.trim()) === 0) {
                    //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
                    searchedValues.innerHTML +=
                        `<tr>
        <th> ${data.data[i].name}</th>
        <th>${data.data[i].capital}</th>
        <th>${data.data[i].currency.code}</th>
        <th>${data.data[i].language.name}</th>
      </tr>`;

                } else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) === 0 && currencyinout.value.trim().toLowerCase() === data.data[i].currency.code.toLowerCase() && Number(languageinput.value.trim()) === 0) {
                    //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
                    searchedValues.innerHTML +=
                        `<tr>
        <th> ${data.data[i].name}</th>
        <th>${data.data[i].capital}</th>
        <th>${data.data[i].currency.code}</th>
        <th>${data.data[i].language.name}</th>
      </tr>`;

                } else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) === 0 && languageinput.value.trim().toLowerCase() === data.data[i].language.name.toLowerCase()) {
                    //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
                    searchedValues.innerHTML +=
                        `<tr>
        <th> ${data.data[i].name}</th>
        <th>${data.data[i].capital}</th>
        <th>${data.data[i].currency.code}</th>
        <th>${data.data[i].language.name}</th>
      </tr>`;

                } else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) === 0 && currencyinout.value.trim().toLowerCase() === data.data[i].currency.code.toLowerCase() && languageinput.value.trim().toLowerCase() === data.data[i].language.name.toLowerCase()) {
                    //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
                    searchedValues.innerHTML +=
                        `<tr>
        <th> ${data.data[i].name}</th>
        <th>${data.data[i].capital}</th>
        <th>${data.data[i].currency.code}</th>
        <th>${data.data[i].language.name}</th>
      </tr>`;

                } else if (Number(countryInput.value.trim()) === 0 && capitalinput.value.trim().toLowerCase() === data.data[i].capital.toLowerCase() && currencyinout.value.trim().toLowerCase() === data.data[i].currency.code.toLowerCase() && languageinput.value.trim().toLowerCase() === data.data[i].language.name.toLowerCase()) {
                    //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
                    searchedValues.innerHTML +=
                        `<tr>
        <th> ${data.data[i].name}</th>
        <th>${data.data[i].capital}</th>
        <th>${data.data[i].currency.code}</th>
        <th>${data.data[i].language.name}</th>
      </tr>`;

                } else if (Number(countryInput.value.trim()) === 0 && capitalinput.value.trim().toLowerCase() === data.data[i].capital.toLowerCase() && currencyinout.value.trim().toLowerCase() === data.data[i].currency.code.toLowerCase() && Number(languageinput.value.trim()) === 0) {
                    //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
                    searchedValues.innerHTML +=
                        `<tr>
        <th> ${data.data[i].name}</th>
        <th>${data.data[i].capital}</th>
        <th>${data.data[i].currency.code}</th>
        <th>${data.data[i].language.name}</th>
      </tr>`;

                } else if (countryInput.value.trim().toLowerCase() === data.data[i].name.toLowerCase() && Number(capitalinput.value.trim()) === 0 && currencyinout.value.trim().toLowerCase() === data.data[i].currency.code.toLowerCase() && Number(languageinput.value.trim()) === 0) {
                    //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
                    searchedValues.innerHTML +=
                        `<tr>
        <th> ${data.data[i].name}</th>
        <th>${data.data[i].capital}</th>
        <th>${data.data[i].currency.code}</th>
        <th>${data.data[i].language.name}</th>
      </tr>`;

                } else if (Number(countryInput.value.trim()) === 0 && capitalinput.value.trim().toLowerCase() === data.data[i].capital.toLowerCase() && Number(currencyinout.value.trim()) === 0 && languageinput.value.trim().toLowerCase() === data.data[i].language.name.toLowerCase()) {
                    //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
                    searchedValues.innerHTML +=
                        `<tr>
        <th> ${data.data[i].name}</th>
        <th>${data.data[i].capital}</th>
        <th>${data.data[i].currency.code}</th>
        <th>${data.data[i].language.name}</th>
      </tr>`;

                } else if ((Number(countryInput.value.trim()) === 0) && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) === 0 && Number(languageinput.value.trim()) === 0) {
                    //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
                    location.reload();

                }
            }
        })
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

