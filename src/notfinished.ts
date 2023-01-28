
// import axios from 'axios';
// import { EvalSourceMapDevToolPlugin } from 'webpack';

// // choose table and buttons 
// let allCountryData = document.querySelector<HTMLTableElement>(".tableBody");
// let loadMoreButton = document.querySelector<HTMLButtonElement>(".loadButton");
// const searchButton = document.querySelector<HTMLButtonElement | null>(".searchButton");
// const clearButton = document.querySelector<HTMLButtonElement | null>(".clearButton");

// const sortButtonsDown = document.querySelectorAll(".arrowDown");
// const sortButtonsUp = document.querySelectorAll(".arrowUp");

// let filterSearchLink: string = "";
// let nameSortLinkDesc: string = "";
// let nameSortLinkAsc: string = "";
// let capitalSortLinkDesc: string = "";
// let capitalSortLinkAsc: string = "";
// let currencySortLinkDesc: string = "";
// let currencySortLinkAsc: string = "";
// let languageSortLinkDesc: string = "";
// let languageSortLinkAsc: string = "";

// let countryFilter: string | undefined = "";
// let capitalFilter: string | undefined = "";
// let currencyFilter: string | undefined = "";
// let languageFilter: string | undefined = "";

// // url's 
// let url = "http://localhost:3004/countries";
// let urlchanged: string = "http://localhost:3004/countries";
// let urlchanged2: string = "http://localhost:3004/countries?";

// // data loaded 
// let maxDataLoaded: number = 20;
// let maxDataChanged: number = 20; 
// let limit: string = "&_limit=";

// type Countries = {
//     name: string,
//     code: string,
//     capital: string,
//     region: string,
//     currency: {
//         code: string,
//         name: string,
//         symbol: string
//     },
//     language: {
//         code: string,
//         name: string
//     },
//     flag: string,
//     dialling_code: string,
//     isoCode: string
// }

// let urlchangedinSortinf:string = "";
// let firstElement: string = "?"
// let secondElement: string = "&"

// // input values
// const countryInput = document.querySelector<HTMLInputElement | null>(".countryinput");
// const capitalinput = document.querySelector<HTMLInputElement | null>(".capitalinput");
// const currencyinout = document.querySelector<HTMLInputElement>(".currencyinout");
// const languageinput = document.querySelector<HTMLInputElement>(".languageinput");




// let basic:string = "&_limit=20"

// let firstlimit: string = "http://localhost:3004/countries?_limit="
// let firstLimitMid: string = "&_limit="
// let urlnew:string = "";


// //filter function +sort 
// function chooseInputValue(countryFilter: string | undefined, capitalFilter: string | undefined, currencyFilter: string | undefined) {
//     searchButton.addEventListener("click", () => {
//       maxDataLoaded = 20;

//         allCountryData.innerHTML = " "
//         if (Number(countryInput.value) === 0 && Number(capitalinput.value) !== 0 && Number(currencyinout.value) === 0 && Number(languageinput.value) === 0) {
//             capitalFilter = `capital=${capitalinput.value}`
//             axios.get<Countries[]>(`${url}?${capitalFilter}&${basic}`)
//                 .then((data) => {
//                     urlchanged = `${url}?${capitalFilter}&${basic}`;
//                     data.data.forEach(i => {
//                         allCountryData.innerHTML +=
//                             `<tr>
//                             <th> ${i.name}</th>
//                             <th>${i.capital}</th>
//                             <th>${i.currency.code}</th>
//                             <th>${i.language.name}</th>
//                             </tr>`;
//                     });
//                 }).then(() => {
                   
//                   //loadData(, urlchanged, limit);
//                 })
//         } else if (Number(countryInput.value) !== 0 && Number(capitalinput.value) === 0 && Number(currencyinout.value) === 0 && Number(languageinput.value) === 0) {
//             countryFilter = `name=${countryInput.value}`;
//             axios.get<Countries[]>(`${url}?${countryFilter}&${basic}`)
//                 .then((data) => {
//                     urlchanged = `${url}?${countryFilter}&${basic}`;
//                     data.data.forEach(i => {
//                         allCountryData.innerHTML +=
//                             `<tr>
//                             <th> ${i.name}</th>
//                             <th>${i.capital}</th>
//                             <th>${i.currency.code}</th>
//                             <th>${i.language.name}</th>
//                             </tr>`;
//                     });
                    
//                 }).then((data) => {
                    
//                 })
//         } else if (Number(currencyinout.value) !== 0 && Number(countryInput.value) === 0 && Number(capitalinput.value) === 0 && Number(languageinput.value) === 0) {
//             currencyFilter = `currency.code=${currencyinout.value}`
//             axios.get<Countries[]>(`${url}?${currencyFilter}&${basic}`)
//                 .then((data) => {
//                     urlchanged = `${url}?${currencyFilter}&${basic}`;
//                     data.data.forEach(i => {
//                         allCountryData.innerHTML +=
//                             `<tr>
//                             <th> ${i.name}</th>
//                             <th>${i.capital}</th>
//                             <th>${i.currency.code}</th>
//                             <th>${i.language.name}</th>
//                             </tr>`;
//                     });
//                    // onClickName(urlchanged);
//                 }).then(()=>{
//                     loadMoreData(urlchanged, firstLimitMid)
//                     onClickName(urlchanged);
//                 })
//         } else if (Number(languageinput.value) !== 0 && Number(currencyinout.value) === 0 && Number(countryInput.value) === 0 && Number(capitalinput.value) === 0) {
//             languageFilter = `language.name=${languageinput.value}`
//             axios.get<Countries[]>(`${url}?${languageFilter}&${basic}`)
//                 .then((data) => {
//                     urlchanged = `${url}?${languageFilter}&${basic}`;
//                    data.data.forEach(i => {
//                     allCountryData.innerHTML +=
//                         `<tr>
//                         <th> ${i.name}</th>
//                         <th>${i.capital}</th>
//                         <th>${i.currency.code}</th>
//                         <th>${i.language.name}</th>
//                         </tr>`;
//                 });
//                 }).then(()=>{
//                     onClickName(urlchanged);
//                     loadMoreData(urlchanged, firstLimitMid)
//                 })
//         } else if (Number(languageinput.value) !== 0 && Number(currencyinout.value) !== 0 && Number(countryInput.value) === 0 && Number(capitalinput.value) === 0) {
//             languageFilter = `language.name=${languageinput.value}`
//             currencyFilter = `currency.code=${currencyinout.value}`

//             axios.get<Countries[]>(`${url}?${languageFilter}&${currencyFilter}`)
//                 .then((fileredData) => {
//                     urlchanged = `${url}?${languageFilter}&${currencyFilter}`;
//                     onClickName(urlchanged);
//                     loadData(maxDataLoaded, urlchanged, firstLimitMid);
//                 })
//         } else if (Number(languageinput.value) !== 0 && Number(currencyinout.value) !== 0 && Number(countryInput.value) === 0 && Number(capitalinput.value) !== 0) {
//             languageFilter = `language.name=${languageinput.value}`
//             currencyFilter = `currency.code=${currencyinout.value}`
//             capitalFilter = `capital=${capitalinput.value}`

//             axios.get<Countries[]>(`${url}?${languageFilter}&${currencyFilter}&${capitalFilter}`)
//                 .then((fileredData) => {
//                     urlchanged = `${url}?${languageFilter}&${currencyFilter}&${capitalFilter}`;
//                     onClickName(urlchanged);
//                 }).then(() => {
//                     loadData(maxDataLoaded, urlchanged, firstLimitMid);
//                 })
//         } else if (Number(languageinput.value) !== 0 && Number(currencyinout.value) !== 0 && Number(countryInput.value) !== 0 && Number(capitalinput.value) === 0) {
//             languageFilter = `language.name=${languageinput.value}`
//             currencyFilter = `currency.code=${currencyinout.value}`
//             countryFilter = `name=${countryInput.value}`

//             axios.get<Countries[]>(`${url}?${languageFilter}&${currencyFilter}&${countryFilter}`)
//                 .then((fileredData) => {
//                     urlchanged = `${url}?${languageFilter}&${currencyFilter}&${countryFilter}`;
//                     onClickName(urlchanged);
//                 }).then(() => {
//                     loadData(maxDataLoaded, urlchanged, firstLimitMid);
//                 })
//         } else if (Number(languageinput.value) !== 0 && Number(currencyinout.value) === 0 && Number(countryInput.value) !== 0 && Number(capitalinput.value) === 0) {
//             languageFilter = `language.name=${languageinput.value}`
//             countryFilter = `name=${countryInput.value}`

//             axios.get<Countries[]>(`${url}?${languageFilter}&${countryFilter}`)
//                 .then((fileredData) => {
//                     urlchanged = `${url}?${languageFilter}&${countryFilter}`;
//                     onClickName(urlchanged);
//                 }).then(() => {
//                     loadData(maxDataLoaded, urlchanged, firstLimitMid);
//                 })
//         } else if (Number(languageinput.value) !== 0 && Number(currencyinout.value) === 0 && Number(countryInput.value) === 0 && Number(capitalinput.value) !== 0) {
//             languageFilter = `language.name=${languageinput.value}`
//             capitalFilter = `capital=${capitalinput.value}`

//             axios.get<Countries[]>(`${url}?${languageFilter}&${capitalFilter}`)
//                 .then((fileredData) => {
//                     urlchanged = `${url}?${languageFilter}&${capitalFilter}`;
//                     onClickName(urlchanged);
//                 }).then(() => {
//                     loadData(maxDataLoaded, urlchanged, firstLimitMid);
//                 })
//         } else if (Number(languageinput.value) === 0 && Number(currencyinout.value) !== 0 && Number(countryInput.value) !== 0 && Number(capitalinput.value) === 0) {
//             currencyFilter = `currency.code=${currencyinout.value}`
//             countryFilter = `name=${countryInput.value}`

//             axios.get<Countries[]>(`${url}?${currencyFilter}&${countryFilter}`)
//                 .then((fileredData) => {
//                     urlchanged = `${url}?${currencyFilter}&${countryFilter}`;
//                     onClickName(urlchanged);
//                 }).then(() => {
//                     loadData(maxDataLoaded, urlchanged, firstLimitMid);
//                 })
//         } else if (Number(languageinput.value) === 0 && Number(currencyinout.value) !== 0 && Number(countryInput.value) === 0 && Number(capitalinput.value) !== 0) {
//             currencyFilter = `currency.code=${currencyinout.value}`
//             capitalFilter = `capital=${capitalinput.value}`

//             axios.get<Countries[]>(`${url}?${currencyFilter}&${capitalFilter}`)
//                 .then((fileredData) => {
//                     urlchanged = `${url}?${currencyFilter}&${capitalFilter}`;
//                     onClickName(urlchanged);
//                 }).then(() => {
//                     loadData(maxDataLoaded, urlchanged, firstLimitMid);
//                 })
//         }
//           else if (Number(languageinput.value) === 0 && Number(currencyinout.value) === 0 && Number(countryInput.value) === 0 && Number(capitalinput.value) === 0 ){
//             alert("Please add  atleast one value to one of filter input fields!  ");
//             location.reload();
//         }
//     })
// }
// clearButton.addEventListener("click", () => {
//     countryInput.value = "";
//     capitalinput.value = "";
//     currencyinout.value = "";
//     languageinput.value = "";
//     location.reload();

// })

// function onClickName(urlValue: string) {
//     sortButtonsDown[0].addEventListener("click", () => {
//         allCountryData.innerHTML = " "
//         nameSortLinkDesc = `&_sort=name&_order=desc`
//         axios.get<Countries[]>(`${urlValue}${nameSortLinkDesc}`)
//             .then((data) => {
//                 console.log(`${urlValue}${nameSortLinkDesc}`)
//               //  urlchangedinSortinf = `${urlValue}${nameSortLinkDesc}`;
//                 data.data.forEach(i => {
//                     allCountryData.innerHTML +=
//                         `<tr>
//                         <th> ${i.name}</th>
//                         <th>${i.capital}</th>
//                         <th>${i.currency.code}</th>
//                         <th>${i.language.name}</th>
//                         </tr>`;
//                 });
//             }).catch((error) => { console.log(error); })
//     })
//     sortButtonsUp[0].addEventListener("click", () => {
//         allCountryData.innerHTML = " "
//         nameSortLinkAsc = `&_sort=name&_order=asc`
//         axios.get<Countries[]>(`${urlValue}${nameSortLinkAsc}`)
//             .then((data) => {
//                 console.log(`${urlValue}${nameSortLinkDesc}`)
//              //   urlchangedinSortinf = `${urlValue}${nameSortLinkAsc}`
//                 data.data.forEach(i => {
//                     allCountryData.innerHTML +=
//                         `<tr>
//                         <th> ${i.name}</th>
//                         <th>${i.capital}</th>
//                         <th>${i.currency.code}</th>
//                         <th>${i.language.name}</th>
//                         </tr>`;
//                 });
//             }).catch((error) => { console.log(error); })
//     })
//     sortButtonsDown[1].addEventListener("click", () => {
//         allCountryData.innerHTML = " "
//         capitalSortLinkDesc = `&_sort=capital&_order=desc`
//         axios.get<Countries[]>(`${urlValue}${capitalSortLinkDesc}`)
//             .then((data) => {
//               //  urlchangedinSortinf = `${urlValue}${capitalSortLinkDesc}`
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
//                     <th> ${data.data[i].name}</th>
//                     <th>${data.data[i].capital}</th>
//                     <th>${data.data[i].currency.code}</th>
//                     <th>${data.data[i].language.name}</th>
//                     </tr>`;
//                 }
//             }).catch((error) => { console.log(error); })
//     })
//     sortButtonsUp[1].addEventListener("click", () => {
//         allCountryData.innerHTML = " "
//         capitalSortLinkAsc = `&_sort=capital&_order=asc`
//         axios.get<Countries[]>(`${urlValue}${capitalSortLinkAsc}`)
//             .then((data) => {
//             //    urlchangedinSortinf = `${urlValue}${capitalSortLinkAsc}`
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
// <th> ${data.data[i].name}</th>
// <th>${data.data[i].capital}</th>
// <th>${data.data[i].currency.code}</th>
// <th>${data.data[i].language.name}</th>
// </tr>`;
//                 }
//             }).catch((error) => { console.log(error); })
//     })
//     sortButtonsDown[2].addEventListener("click", () => {
//         allCountryData.innerHTML = " "
//         currencySortLinkDesc = `&_sort=currency.code&_order=desc`
//         axios.get<Countries[]>(`${urlValue}${currencySortLinkDesc}`)
//             .then((data) => {
//             //   urlchangedinSortinf = `${urlValue}${currencySortLinkDesc}`
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
// <th> ${data.data[i].name}</th>
// <th>${data.data[i].capital}</th>
// <th>${data.data[i].currency.code}</th>
// <th>${data.data[i].language.name}</th>
// </tr>`;
//                 }
//             }).catch((error) => { console.log(error); })
//     })
//     sortButtonsUp[2].addEventListener("click", () => {
//         allCountryData.innerHTML = " "
//         currencySortLinkAsc = `&_sort=currency.code&_order=asc`
//         axios.get<Countries[]>(`${urlValue}${currencySortLinkAsc}`)
//             .then((data) => {
//               //  urlchangedinSortinf = `${urlValue}${currencySortLinkAsc}`
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
// <th> ${data.data[i].name}</th>
// <th>${data.data[i].capital}</th>
// <th>${data.data[i].currency.code}</th>
// <th>${data.data[i].language.name}</th>
// </tr>`;
//                 }
//             }).catch((error) => { console.log(error); })
//     })
//     sortButtonsDown[3].addEventListener("click", () => {
//         allCountryData.innerHTML = " "
//         languageSortLinkDesc = `&_sort=language.name&_order=desc`
//         axios.get<Countries[]>(`${urlValue}${languageSortLinkDesc}`)
//             .then((data) => {
//                // url = `${urlValue}${languageSortLinkDesc}`
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
//     <th> ${data.data[i].name}</th>
//     <th>${data.data[i].capital}</th>
//     <th>${data.data[i].currency.code}</th>
//     <th>${data.data[i].language.name}</th>
//     </tr>`;
//                 }
//             }).catch((error) => { console.log(error); })
//     })
//     sortButtonsUp[3].addEventListener("click", () => {
//         allCountryData.innerHTML = " "
//         languageSortLinkAsc = `&_sort=language.name&_order=asc`
//         axios.get<Countries[]>(`${urlValue}${languageSortLinkAsc}`)
//             .then((data) => {
//              //  url = `${urlValue}${languageSortLinkAsc}`
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
//     <th> ${data.data[i].name}</th>
//     <th>${data.data[i].capital}</th>
//     <th>${data.data[i].currency.code}</th>
//     <th>${data.data[i].language.name}</th>
//     </tr>`;
//                 }
//             }).catch((error) => { console.log(error); })
//     })

// }