// searchButton.addEventListener("click", () => {
//     searchedValues.innerHTML = "";
//     allCountryData.style.display = "none";
//     loadMoreButton.style.display = 'none'
//     axios.get<Countries[]>(`http://localhost:3004/countries`)
//         .then((data) => {
//             for (let i = 0; i < data.data.length; i++) {
//                 if ((countryInput.value.trim().toLowerCase() === data.data[i].name.toLowerCase()) && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) === 0 && Number(languageinput.value.trim()) === 0) {
//                     searchedValues.innerHTML +=
//                         `<tr>
//                     <th> ${data.data[i].name}</th>
//                     <th>${data.data[i].capital}</th>
//                     <th>${data.data[i].currency.code}</th>
//                     <th>${data.data[i].language.name}</th>
//                   </tr>`;

//                 } else if ((countryInput.value.trim().toLowerCase() === data.data[i].name.toLowerCase()) && capitalinput.value.trim().toLowerCase() === data.data[i].capital.toLowerCase() && Number(currencyinout.value.trim()) === 0 && Number(languageinput.value.trim()) === 0) {
//                     searchedValues.innerHTML +=
//                         `<tr>
//                 <th> ${data.data[i].name}</th>
//                 <th>${data.data[i].capital}</th>
//                 <th>${data.data[i].currency.code}</th>
//                 <th>${data.data[i].language.name}</th>
//               </tr>`;

//                 } else if ((countryInput.value.trim().toLowerCase() === data.data[i].name.toLowerCase()) && capitalinput.value.trim().toLowerCase() === data.data[i].capital.toLowerCase() && currencyinout.value.trim().toLowerCase() === data.data[i].currency.code.toLowerCase() && Number(languageinput.value.trim()) === 0) {
//                     searchedValues.innerHTML +=
//                         `<tr>
//             <th> ${data.data[i].name}</th>
//             <th>${data.data[i].capital}</th>
//             <th>${data.data[i].currency.code}</th>
//             <th>${data.data[i].language.name}</th>
//           </tr>`;

//                 } else if ((countryInput.value.trim().toLowerCase() === data.data[i].name.toLowerCase()) && capitalinput.value.trim().toLowerCase() === data.data[i].capital.toLowerCase() && currencyinout.value.trim().toLowerCase() === data.data[i].currency.code.toLowerCase() && languageinput.value.trim().toLowerCase() === data.data[i].language.name.toLowerCase()) {
//                     searchedValues.innerHTML +=
//                         `<tr>
//         <th> ${data.data[i].name}</th>
//         <th>${data.data[i].capital}</th>
//         <th>${data.data[i].currency.code}</th>
//         <th>${data.data[i].language.name}</th>
//       </tr>`;

//                 } else if (Number(countryInput.value.trim()) === 0 && capitalinput.value.trim().toLowerCase() === data.data[i].capital.toLowerCase() && Number(currencyinout.value.trim()) === 0 && Number(languageinput.value.trim()) === 0) {
//                     //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
//                     searchedValues.innerHTML +=
//                         `<tr>
//         <th> ${data.data[i].name}</th>
//         <th>${data.data[i].capital}</th>
//         <th>${data.data[i].currency.code}</th>
//         <th>${data.data[i].language.name}</th>
//       </tr>`;

//                 } else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) === 0 && currencyinout.value.trim().toLowerCase() === data.data[i].currency.code.toLowerCase() && Number(languageinput.value.trim()) === 0) {
//                     //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
//                     searchedValues.innerHTML +=
//                         `<tr>
//         <th> ${data.data[i].name}</th>
//         <th>${data.data[i].capital}</th>
//         <th>${data.data[i].currency.code}</th>
//         <th>${data.data[i].language.name}</th>
//       </tr>`;

//                 } else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) === 0 && languageinput.value.trim().toLowerCase() === data.data[i].language.name.toLowerCase()) {
//                     //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
//                     searchedValues.innerHTML +=
//                         `<tr>
//         <th> ${data.data[i].name}</th>
//         <th>${data.data[i].capital}</th>
//         <th>${data.data[i].currency.code}</th>
//         <th>${data.data[i].language.name}</th>
//       </tr>`;

//                 } else if (Number(countryInput.value.trim()) === 0 && Number(capitalinput.value.trim()) === 0 && currencyinout.value.trim().toLowerCase() === data.data[i].currency.code.toLowerCase() && languageinput.value.trim().toLowerCase() === data.data[i].language.name.toLowerCase()) {
//                     //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
//                     searchedValues.innerHTML +=
//                         `<tr>
//         <th> ${data.data[i].name}</th>
//         <th>${data.data[i].capital}</th>
//         <th>${data.data[i].currency.code}</th>
//         <th>${data.data[i].language.name}</th>
//       </tr>`;

//                 } else if (Number(countryInput.value.trim()) === 0 && capitalinput.value.trim().toLowerCase() === data.data[i].capital.toLowerCase() && currencyinout.value.trim().toLowerCase() === data.data[i].currency.code.toLowerCase() && languageinput.value.trim().toLowerCase() === data.data[i].language.name.toLowerCase()) {
//                     //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
//                     searchedValues.innerHTML +=
//                         `<tr>
//         <th> ${data.data[i].name}</th>
//         <th>${data.data[i].capital}</th>
//         <th>${data.data[i].currency.code}</th>
//         <th>${data.data[i].language.name}</th>
//       </tr>`;

//                 } else if (Number(countryInput.value.trim()) === 0 && capitalinput.value.trim().toLowerCase() === data.data[i].capital.toLowerCase() && currencyinout.value.trim().toLowerCase() === data.data[i].currency.code.toLowerCase() && Number(languageinput.value.trim()) === 0) {
//                     //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
//                     searchedValues.innerHTML +=
//                         `<tr>
//         <th> ${data.data[i].name}</th>
//         <th>${data.data[i].capital}</th>
//         <th>${data.data[i].currency.code}</th>
//         <th>${data.data[i].language.name}</th>
//       </tr>`;

//                 } else if (countryInput.value.trim().toLowerCase() === data.data[i].name.toLowerCase() && Number(capitalinput.value.trim()) === 0 && currencyinout.value.trim().toLowerCase() === data.data[i].currency.code.toLowerCase() && Number(languageinput.value.trim()) === 0) {
//                     //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
//                     searchedValues.innerHTML +=
//                         `<tr>
//         <th> ${data.data[i].name}</th>
//         <th>${data.data[i].capital}</th>
//         <th>${data.data[i].currency.code}</th>
//         <th>${data.data[i].language.name}</th>
//       </tr>`;

//                 } else if (Number(countryInput.value.trim()) === 0 && capitalinput.value.trim().toLowerCase() === data.data[i].capital.toLowerCase() && Number(currencyinout.value.trim()) === 0 && languageinput.value.trim().toLowerCase() === data.data[i].language.name.toLowerCase()) {
//                     //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
//                     searchedValues.innerHTML +=
//                         `<tr>
//         <th> ${data.data[i].name}</th>
//         <th>${data.data[i].capital}</th>
//         <th>${data.data[i].currency.code}</th>
//         <th>${data.data[i].language.name}</th>
//       </tr>`;

//                 } else if ((Number(countryInput.value.trim()) === 0) && Number(capitalinput.value.trim()) === 0 && Number(currencyinout.value.trim()) === 0 && Number(languageinput.value.trim()) === 0) {
//                     //|| currencyinout.value === data.data[i].currency.code || languageinput.value === data.data[i].language.name
//                     location.reload();

//                 }
//             }
//         })
// })
