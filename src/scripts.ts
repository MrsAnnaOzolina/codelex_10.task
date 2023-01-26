import axios from 'axios';
//import { EvalSourceMapDevToolPlugin } from 'webpack';

let loadMoreButton = document.querySelector<HTMLButtonElement>(".loadButton");
let allCountryData = document.querySelector<HTMLTableElement>(".tableBody");
let maxDataLoaded: number = 20;
//let nextPage: number = 1; 
let url = "http://localhost:3004/countries";
let urlchanged: string = "";
let firstElement: string = "?"
let secondElement: string = "&"

// input values
const countryInput = document.querySelector<HTMLInputElement | null>(".countryinput");
const capitalinput = document.querySelector<HTMLInputElement | null>(".capitalinput");
const currencyinout = document.querySelector<HTMLInputElement>(".currencyinout");
const languageinput = document.querySelector<HTMLInputElement>(".languageinput");
const searchButton = document.querySelector<HTMLButtonElement | null>(".searchButton");
const clearButton = document.querySelector(".clearButton");

const sortButtonsDown = document.querySelectorAll(".arrowDown");
const sortButtonsUp = document.querySelectorAll(".arrowUp");



let filterSearchLink: string = "";
let nameSortLinkDesc: string = "";
let nameSortLinkAsc: string = "";
let capitalSortLinkDesc: string = "";
let capitalSortLinkAsc: string = "";
let currencySortLinkDesc: string = "";
let currencySortLinkAsc: string = "";
let languageSortLinkDesc: string = "";
let languageSortLinkAsc: string = "";

let countryFilter: string | undefined = "";
let capitalFilter: string | undefined = "";
let currencyFilter: string | undefined = "";
let languageFilter: string | undefined = "";

let limit: string = "?_limit=";
let firstlimit: string = "http://localhost:3004/countries?_limit="
let firstLimitMid: string = "&_limit="
let urlnew:string = "";

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

loadData(maxDataLoaded, url, limit);


// loadMoreData(maxDataLoaded);
function loadData(maxDataLoaded: number, b: string, limitPart: string) {
    //  limit = `${firstElement}_limit=${maxDataLoaded}`
    axios.get<Countries[]>(`${b}${limitPart}${maxDataLoaded}`)
        .then((data) => {
            urlnew = `${b}${limitPart}${maxDataLoaded}`
            data.data.forEach(i => {
                allCountryData.innerHTML +=
                    `<tr>
                    <th> ${i.name}</th>
                    <th>${i.capital}</th>
                    <th>${i.currency.code}</th>
                    <th>${i.language.name}</th>
                    </tr>`;
            });
        }).then(() => {
            loadMoreData(b, limitPart);
            chooseInputValue(countryFilter, capitalFilter, currencyFilter);
            onClickName(urlnew);
        })
        .catch((error) => { console.log(error); })
}
function loadMoreData(a: string, c: string) {
     loadMoreButton.addEventListener("click", () => {
        allCountryData.innerHTML = " ";
        if (maxDataLoaded < 240) {
            maxDataLoaded = maxDataLoaded + 20;
          axios.get<Countries[]>(`${a}${c}${maxDataLoaded}`)
                .then((data) => {
                     console.log(`${a}${c}${maxDataLoaded}`);
                    data.data.forEach(i => {
                        allCountryData.innerHTML +=
                            `<tr>
                <th> ${i.name}</th>
                <th>${i.capital}</th>
                <th>${i.currency.code}</th>
                <th>${i.language.name}</th>
                </tr>`;
                    });
                })
        }
        else  {
                loadMoreButton.style.display = 'none'
                maxDataLoaded = maxDataLoaded + 20;
                limit = `${"?"}_limit=${maxDataLoaded}`
            axios.get<Countries[]>(`${a}${limit}`)
            .then ((data)=>{
                data.data.forEach(i => {
                    allCountryData.innerHTML +=
                        `<tr>
                        <th> ${i.name}</th>
                        <th>${i.capital}</th>
                        <th>${i.currency.code}</th>
                        <th>${i.language.name}</th>
                        </tr>`;
                });
            })
            }
    })
}
//filter function +sort 
function chooseInputValue(countryFilter: string | undefined, capitalFilter: string | undefined, currencyFilter: string | undefined) {
    searchButton.addEventListener("click", () => {
        maxDataLoaded = 20;
        allCountryData.innerHTML = " "
        if (Number(countryInput.value) === 0 && Number(capitalinput.value) !== 0 && Number(currencyinout.value) === 0 && Number(languageinput.value) === 0) {
            capitalFilter = `capital=${capitalinput.value}`
            axios.get<Countries[]>(`${url}?${capitalFilter}`)
                .then((fileredData) => {
                    urlchanged = `${url}?${capitalFilter}`;
                    onClickName(urlchanged);
                }).then(() => {
                    loadData(maxDataLoaded, urlchanged, firstLimitMid);
                })
        } else if (Number(countryInput.value) !== 0 && Number(capitalinput.value) === 0 && Number(currencyinout.value) === 0 && Number(languageinput.value) === 0) {
            countryFilter = `name=${countryInput.value}`;
            axios.get<Countries[]>(`${url}?${countryFilter}`)
                .then((fileredData) => {
                    urlchanged = `${url}?${countryFilter}`;
                    onClickName(urlchanged);
                }).then(() => {
                    loadData(maxDataLoaded, urlchanged, firstLimitMid);
                })
        } else if (Number(currencyinout.value) !== 0 && Number(countryInput.value) === 0 && Number(capitalinput.value) === 0 && Number(languageinput.value) === 0) {
            currencyFilter = `currency.code=${currencyinout.value}`
            axios.get<Countries[]>(`${url}?${currencyFilter}`)
                .then((fileredData) => {
                    urlchanged = `${url}?${currencyFilter}`;
                    loadData(maxDataLoaded, urlchanged, firstLimitMid);
                }).then(() => {
                    onClickName(urlchanged);
                })
        } else if (Number(languageinput.value) !== 0 && Number(currencyinout.value) === 0 && Number(countryInput.value) === 0 && Number(capitalinput.value) === 0) {
            languageFilter = `language.name=${languageinput.value}`
            axios.get<Countries[]>(`${url}?${languageFilter}`)
                .then((fileredData) => {
                    urlchanged = `${url}?${languageFilter}`;
                    onClickName(urlchanged);
                    loadData(maxDataLoaded, urlchanged, firstLimitMid);
                })
        } else if (Number(languageinput.value) !== 0 && Number(currencyinout.value) !== 0 && Number(countryInput.value) === 0 && Number(capitalinput.value) === 0) {
            languageFilter = `language.name=${languageinput.value}`
            currencyFilter = `currency.code=${currencyinout.value}`

            axios.get<Countries[]>(`${url}?${languageFilter}&${currencyFilter}`)
                .then((fileredData) => {
                    urlchanged = `${url}?${languageFilter}&${currencyFilter}`;
                    onClickName(urlchanged);
                    loadData(maxDataLoaded, urlchanged, firstLimitMid);
                })
        } else if (Number(languageinput.value) !== 0 && Number(currencyinout.value) !== 0 && Number(countryInput.value) === 0 && Number(capitalinput.value) !== 0) {
            languageFilter = `language.name=${languageinput.value}`
            currencyFilter = `currency.code=${currencyinout.value}`
            capitalFilter = `capital=${capitalinput.value}`

            axios.get<Countries[]>(`${url}?${languageFilter}&${currencyFilter}&${capitalFilter}`)
                .then((fileredData) => {
                    urlchanged = `${url}?${languageFilter}&${currencyFilter}&${capitalFilter}`;
                    onClickName(urlchanged);
                }).then(() => {
                    loadData(maxDataLoaded, urlchanged, firstLimitMid);
                })
        } else if (Number(languageinput.value) !== 0 && Number(currencyinout.value) !== 0 && Number(countryInput.value) !== 0 && Number(capitalinput.value) === 0) {
            languageFilter = `language.name=${languageinput.value}`
            currencyFilter = `currency.code=${currencyinout.value}`
            countryFilter = `name=${countryInput.value}`

            axios.get<Countries[]>(`${url}?${languageFilter}&${currencyFilter}&${countryFilter}`)
                .then((fileredData) => {
                    urlchanged = `${url}?${languageFilter}&${currencyFilter}&${countryFilter}`;
                    onClickName(urlchanged);
                }).then(() => {
                    loadData(maxDataLoaded, urlchanged, firstLimitMid);
                })
        } else if (Number(languageinput.value) !== 0 && Number(currencyinout.value) === 0 && Number(countryInput.value) !== 0 && Number(capitalinput.value) === 0) {
            languageFilter = `language.name=${languageinput.value}`
            countryFilter = `name=${countryInput.value}`

            axios.get<Countries[]>(`${url}?${languageFilter}&${countryFilter}`)
                .then((fileredData) => {
                    urlchanged = `${url}?${languageFilter}&${countryFilter}`;
                    onClickName(urlchanged);
                }).then(() => {
                    loadData(maxDataLoaded, urlchanged, firstLimitMid);
                })
        } else if (Number(languageinput.value) !== 0 && Number(currencyinout.value) === 0 && Number(countryInput.value) === 0 && Number(capitalinput.value) !== 0) {
            languageFilter = `language.name=${languageinput.value}`
            capitalFilter = `capital=${capitalinput.value}`

            axios.get<Countries[]>(`${url}?${languageFilter}&${capitalFilter}`)
                .then((fileredData) => {
                    urlchanged = `${url}?${languageFilter}&${capitalFilter}`;
                    onClickName(urlchanged);
                }).then(() => {
                    loadData(maxDataLoaded, urlchanged, firstLimitMid);
                })
        } else if (Number(languageinput.value) === 0 && Number(currencyinout.value) !== 0 && Number(countryInput.value) !== 0 && Number(capitalinput.value) === 0) {
            currencyFilter = `currency.code=${currencyinout.value}`
            countryFilter = `name=${countryInput.value}`

            axios.get<Countries[]>(`${url}?${currencyFilter}&${countryFilter}`)
                .then((fileredData) => {
                    urlchanged = `${url}?${currencyFilter}&${countryFilter}`;
                    onClickName(urlchanged);
                }).then(() => {
                    loadData(maxDataLoaded, urlchanged, firstLimitMid);
                })
        } else if (Number(languageinput.value) === 0 && Number(currencyinout.value) !== 0 && Number(countryInput.value) === 0 && Number(capitalinput.value) !== 0) {
            currencyFilter = `currency.code=${currencyinout.value}`
            capitalFilter = `capital=${capitalinput.value}`

            axios.get<Countries[]>(`${url}?${currencyFilter}&${capitalFilter}`)
                .then((fileredData) => {
                    urlchanged = `${url}?${currencyFilter}&${capitalFilter}`;
                    onClickName(urlchanged);
                }).then(() => {
                    loadData(maxDataLoaded, urlchanged, firstLimitMid);
                })
        }
          else if (Number(languageinput.value) === 0 && Number(currencyinout.value) === 0 && Number(countryInput.value) === 0 && Number(capitalinput.value) === 0 ){
            alert("Please add  atleast one value to one of filter input fields!  ");
            location.reload();
        }
    })
}


clearButton.addEventListener("click", () => {
    countryInput.value = "";
    capitalinput.value = "";
    currencyinout.value = "";
    languageinput.value = "";
    location.reload();

})

function onClickName(urlValue: string) {
    sortButtonsDown[0].addEventListener("click", () => {
        allCountryData.innerHTML = " "
        nameSortLinkDesc = `&_sort=name&_order=desc`
        axios.get<Countries[]>(`${urlValue}${nameSortLinkDesc}`)
            .then((data) => {
                url = `${urlValue}${nameSortLinkDesc}`;
                console.log(url)
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
        nameSortLinkAsc = `&_sort=name&_order=asc`
        //  url= "http://localhost:3004/countries";
        axios.get<Countries[]>(`${urlValue}${nameSortLinkAsc}`)
            .then((data) => {
                url = `${urlValue}${nameSortLinkAsc}`
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
        capitalSortLinkDesc = `&_sort=capital&_order=desc`
        axios.get<Countries[]>(`${urlValue}${capitalSortLinkDesc}`)
            .then((data) => {
                url = `${urlValue}${capitalSortLinkDesc}`
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
        capitalSortLinkAsc = `&_sort=capital&_order=asc`
        axios.get<Countries[]>(`${urlValue}${capitalSortLinkAsc}`)
            .then((data) => {
                url = `${urlValue}${capitalSortLinkAsc}`
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
        currencySortLinkDesc = `&_sort=currency.code&_order=desc`
        axios.get<Countries[]>(`${urlValue}${currencySortLinkDesc}`)
            .then((data) => {
                url = `${urlValue}${currencySortLinkDesc}`
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
        currencySortLinkAsc = `&_sort=currency.code&_order=asc`
        axios.get<Countries[]>(`${urlValue}${currencySortLinkAsc}`)
            .then((data) => {
                url = `${urlValue}${currencySortLinkAsc}`
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
        languageSortLinkDesc = `&_sort=language.name&_order=desc`
        axios.get<Countries[]>(`${urlValue}${languageSortLinkDesc}`)
            .then((data) => {
                url = `${urlValue}${languageSortLinkDesc}`
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
        languageSortLinkAsc = `&_sort=language.name&_order=asc`
        axios.get<Countries[]>(`${urlValue}${languageSortLinkAsc}`)
            .then((data) => {
                url = `${urlValue}${languageSortLinkAsc}`
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

}