// searchButton.addEventListener("click", () => {
//     allCountryData.innerHTML = " "
//     if (Number(countryInput.value.trim()) !== 0 && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) === 0 && Number(languageinput.value.trim()) === 0) {
//         axios.get<Countries[]>(`http://localhost:3004/countries?name=${countryInput.value}`)
//             .then((fileredData) => {
//                 url = `http://localhost:3004/countries?name=${countryInput.value}`;
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
//                     <th> ${fileredData.data[i].name}</th>
//                     <th>${fileredData.data[i].capital}</th>
//                     <th>${fileredData.data[i].currency.code}</th>
//                     <th>${fileredData.data[i].language.name}</th>
//                     </tr>`;

//                 }
//             })
//     } else if (Number(countryInput.value.trim()) !== 0 && Number(capitalinput.value.trim()) !== 0 && Number(currencyinout.value.trim()) === 0 && Number(languageinput.value.trim()) === 0) {
//         axios.get<Countries[]>(`http://localhost:3004/countries?name=${countryInput.value}&capital=${capitalinput.value}`)
//             .then((fileredData) => {
//                 url = `http://localhost:3004/countries?name=${countryInput.value}&capital=${capitalinput.value}`;
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
//                     <th> ${fileredData.data[i].name}</th>
//                     <th>${fileredData.data[i].capital}</th>
//                     <th>${fileredData.data[i].currency.code}</th>
//                     <th>${fileredData.data[i].language.name}</th>
//                     </tr>`;

//                 }
//             })
//     }else if (Number(countryInput.value.trim()) !== 0 && Number(capitalinput.value.trim()) !== 0 && Number(currencyinout.value.trim()) !== 0 && Number(languageinput.value.trim()) === 0) {
//         axios.get<Countries[]>(`http://localhost:3004/countries?name=${countryInput.value}&capital=${capitalinput.value}&currency.code=${currencyinout.value}`)
//             .then((fileredData) => {
//                 url = `http://localhost:3004/countries?name=${countryInput.value}&capital=${capitalinput.value}&currency.code=${currencyinout.value}`;
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
//                     <th> ${fileredData.data[i].name}</th>
//                     <th>${fileredData.data[i].capital}</th>
//                     <th>${fileredData.data[i].currency.code}</th>
//                     <th>${fileredData.data[i].language.name}</th>
//                     </tr>`;

//                 }
//             })
//     } else if (Number(countryInput.value.trim()) !== 0 && Number(capitalinput.value.trim()) !== 0 && Number(currencyinout.value.trim()) !== 0 && Number(languageinput.value.trim()) !== 0) {
//         axios.get<Countries[]>(`http://localhost:3004/countries?name=${countryInput.value}&capital=${capitalinput.value}&currency.code=${currencyinout.value}&language.name=${languageinput.value}`)
//             .then((fileredData) => {
//                 url = `http://localhost:3004/countries?name=${countryInput.value}&capital=${capitalinput.value}&currency.code=${currencyinout.value}&language.name=${languageinput.value}`;
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
//                     <th> ${fileredData.data[i].name}</th>
//                     <th>${fileredData.data[i].capital}</th>
//                     <th>${fileredData.data[i].currency.code}</th>
//                     <th>${fileredData.data[i].language.name}</th>
//                     </tr>`;

//                 }
//             })
//     }else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) !== 0 && Number(currencyinout.value.trim()) === 0 && Number(languageinput.value.trim()) === 0) {
//         axios.get<Countries[]>(`http://localhost:3004/countries?capital=${capitalinput.value}`)
//             .then((fileredData) => {
//                 url = `http://localhost:3004/countries?&capital=${capitalinput.value}`;
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
//                     <th> ${fileredData.data[i].name}</th>
//                     <th>${fileredData.data[i].capital}</th>
//                     <th>${fileredData.data[i].currency.code}</th>
//                     <th>${fileredData.data[i].language.name}</th>
//                     </tr>`;

//                 }
//             })
//     }else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) !== 0 && Number(languageinput.value.trim()) === 0) {
//         axios.get<Countries[]>(`http://localhost:3004/countries?currency.code=${currencyinout.value}`)
//             .then((fileredData) => {
//                 url = `http://localhost:3004/countries?&currency.code=${currencyinout.value}`;
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
//                     <th> ${fileredData.data[i].name}</th>
//                     <th>${fileredData.data[i].capital}</th>
//                     <th>${fileredData.data[i].currency.code}</th>
//                     <th>${fileredData.data[i].language.name}</th>
//                     </tr>`;

//                 }
//             })
//     }else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) === 0 && Number(languageinput.value.trim()) !== 0) {
//         axios.get<Countries[]>(`http://localhost:3004/countries?language.name=${languageinput.value}`)
//             .then((fileredData) => {
//                 url = `http://localhost:3004/countries?language.name=${languageinput.value}`;
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
//                     <th> ${fileredData.data[i].name}</th>
//                     <th>${fileredData.data[i].capital}</th>
//                     <th>${fileredData.data[i].currency.code}</th>
//                     <th>${fileredData.data[i].language.name}</th>
//                     </tr>`;

//                 }
//             })
//     }else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) !== 0 && Number(languageinput.value.trim()) !== 0) {
//         axios.get<Countries[]>(`http://localhost:3004/countries?currency.code=${currencyinout.value}&language.name=${languageinput.value}`)
//             .then((fileredData) => {
//                 url = `http://localhost:3004/countries?currency.code=${currencyinout.value}&language.name=${languageinput.value}`;
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
//                     <th> ${fileredData.data[i].name}</th>
//                     <th>${fileredData.data[i].capital}</th>
//                     <th>${fileredData.data[i].currency.code}</th>
//                     <th>${fileredData.data[i].language.name}</th>
//                     </tr>`;

//                 }
//             })
//     }else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) !== 0 && Number(currencyinout.value.trim()) !== 0 && Number(languageinput.value.trim()) !== 0) {
//         axios.get<Countries[]>(`http://localhost:3004/countries?capital=${capitalinput.value}&currency.code=${currencyinout.value}&language.name=${languageinput.value}`)
//             .then((fileredData) => {
//                 url = `http://localhost:3004/countries?capital=${capitalinput.value}&currency.code=${currencyinout.value}&language.name=${languageinput.value}`;
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
//                     <th> ${fileredData.data[i].name}</th>
//                     <th>${fileredData.data[i].capital}</th>
//                     <th>${fileredData.data[i].currency.code}</th>
//                     <th>${fileredData.data[i].language.name}</th>
//                     </tr>`;

//                 }
//             })
//     }else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) !== 0 && Number(currencyinout.value.trim()) !== 0 && Number(languageinput.value.trim()) === 0) {
//         axios.get<Countries[]>(`http://localhost:3004/countries?capital=${capitalinput.value}&currency.code=${currencyinout.value}`)
//             .then((fileredData) => {
//                 url = `http://localhost:3004/countries?capital=${capitalinput.value}&currency.code=${currencyinout.value}`;
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
//                     <th> ${fileredData.data[i].name}</th>
//                     <th>${fileredData.data[i].capital}</th>
//                     <th>${fileredData.data[i].currency.code}</th>
//                     <th>${fileredData.data[i].language.name}</th>
//                     </tr>`;

//                 }
//             })
//     }else if (Number(countryInput.value.trim()) !== 0 && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) !== 0 && Number(languageinput.value.trim()) === 0) {
//         axios.get<Countries[]>(`http://localhost:3004/countries?name=${countryInput.value}&currency.code=${currencyinout.value}`)
//             .then((fileredData) => {
//                 url = `http://localhost:3004/countries?name=${countryInput.value}&currency.code=${currencyinout.value}`;
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
//                     <th> ${fileredData.data[i].name}</th>
//                     <th>${fileredData.data[i].capital}</th>
//                     <th>${fileredData.data[i].currency.code}</th>
//                     <th>${fileredData.data[i].language.name}</th>
//                     </tr>`;

//                 }
//             })
//     }else if (Number(countryInput.value.trim()) !== 0 && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) !== 0 && Number(languageinput.value.trim()) !== 0) {
//         axios.get<Countries[]>(`http://localhost:3004/countries?name=${countryInput.value}&currency.code=${currencyinout.value}&language.name=${languageinput.value}`)
//             .then((fileredData) => {
//                 url = `http://localhost:3004/countries?name=${countryInput.value}&currency.code=${currencyinout.value}&language.name=${languageinput.value}`;
//                 for (let i = maxDataLoaded - 20; i < maxDataLoaded; i++) {
//                     allCountryData.innerHTML +=
//                         `<tr>
//                     <th> ${fileredData.data[i].name}</th>
//                     <th>${fileredData.data[i].capital}</th>
//                     <th>${fileredData.data[i].currency.code}</th>
//                     <th>${fileredData.data[i].language.name}</th>
//                     </tr>`;

//                 }
//             })
//     }else {
//         location.reload();
//     }
// })