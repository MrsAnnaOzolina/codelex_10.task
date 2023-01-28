import axios from 'axios';
import { EvalSourceMapDevToolPlugin } from 'webpack';

type Allcountries = {
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

class Countries {
    rootElement: HTMLElement;
    searchButton: HTMLButtonElement;
    clearButton: HTMLButtonElement;
    loadMoreButton: HTMLButtonElement;
    allCountryData: HTMLTableElement;
    sortButtonsDown1: HTMLButtonElement;
    sortButtonsDown2: HTMLButtonElement;
    sortButtonsDown3: HTMLButtonElement;
    sortButtonsDown4: HTMLButtonElement;
    sortButtonsUp1: HTMLButtonElement;
    sortButtonsUp2: HTMLButtonElement;
    sortButtonsUp3: HTMLButtonElement;
    sortButtonsUp4: HTMLButtonElement;
    countryInput:HTMLInputElement;
    capitalinput:HTMLInputElement;
    currencyinout:HTMLInputElement;
    languageinput:HTMLInputElement;
    url: string;
    maxloaded: number;
    maxloadedDataEdit: number
    limit: string;
    element: any;
    nameSortLinkDesc: string = "";
    nameSortLinkAsc: string = "";
    countryFilter: string | undefined = "";
    capitalFilter: string | undefined = "";
    currencyFilter: string | undefined = "";
    languageFilter: string | undefined = "";
    urlLength:number 

    constructor(selector: any) {
        this.rootElement = document.querySelector(selector);
        this.allCountryData = this.rootElement.querySelector(".tableBody");
        this.loadMoreButton = this.rootElement.querySelector(".loadButton");
        this.searchButton = this.rootElement.querySelector(".searchButton");
        this.clearButton = this.rootElement.querySelector(".clearButton");
        this.sortButtonsDown1 = this.rootElement.querySelector(".arrowDown1");
        this.sortButtonsDown2 = this.rootElement.querySelector(".arrowDown2");
        this.sortButtonsDown3 = this.rootElement.querySelector(".arrowDown3");
        this.sortButtonsDown4 = this.rootElement.querySelector(".arrowDown4");
        this.sortButtonsUp1 = this.rootElement.querySelector(".arrowUp1");
        this.sortButtonsUp2 = this.rootElement.querySelector(".arrowUp2");
        this.sortButtonsUp3 = this.rootElement.querySelector(".arrowUp3");
        this.sortButtonsUp4 = this.rootElement.querySelector(".arrowUp4");
        this.countryInput = this.rootElement.querySelector(".countryinput");
        this.capitalinput = this.rootElement.querySelector(".capitalinput");
        this.currencyinout = this.rootElement.querySelector(".currencyinout");
        this.languageinput = this.rootElement.querySelector(".languageinput");
        this.url = "http://localhost:3004/countries";
        this.maxloaded = 20;
        this.maxloadedDataEdit = 20;
        this.limit = "_limit=";

        this.event(this.url)
    }

    event(f: string) {
        axios.get<Allcountries[]>(`${f}?${this.limit}${this.maxloaded}`)
            .then((data) => {
                this.urlLength = data.data.length;
                data.data.forEach(i => {
                    this.allCountryData.innerHTML +=
                        `<tr>
         <th> ${i.name}</th>
         <th>${i.capital}</th>
         <th>${i.currency.name}  (${i.currency.symbol})</th>
         <th>${i.language.name}</th>
         </tr>`;
                });
            })
        this.loadMoreButton.addEventListener("click", () => {
            this.allCountryData.innerHTML = " ";
            if (this.maxloadedDataEdit < 220 && this.maxloadedDataEdit < this.urlLength ) {

                this.maxloadedDataEdit = this.maxloadedDataEdit + 20;
                axios.get<Allcountries[]>(`${f}?${this.limit}${this.maxloadedDataEdit}&${this.nameSortLinkDesc}&${this.nameSortLinkAsc}&${ this.countryFilter }&${this.capitalFilter}&${this.currencyFilter}&${this.languageFilter }`)
                    .then((data) => {
                        this.urlLength = data.data.length;
                        console.log(this.urlLength)
                         //  console.log(`${f}?${this.limit}${this.maxloadedDataEdit}&${this.nameSortLinkDesc}&${this.nameSortLinkAsc}`);
                        data.data.forEach(i => {
                            this.allCountryData.innerHTML +=
                                `<tr>
               <th> ${i.name}</th>
               <th>${i.capital}</th>
               <th>${i.currency.name}  (${i.currency.symbol})</th>
               <th>${i.language.name}</th>
               </tr>`;
                        });
                    })
            } else {
                this.loadMoreButton.style.display = 'none'
                this.maxloadedDataEdit = this.maxloadedDataEdit + 20;
                axios.get<Allcountries[]>(`${f}?${this.limit}${this.maxloadedDataEdit}&${this.nameSortLinkDesc}&${this.nameSortLinkAsc}&${ this.countryFilter }&${this.capitalFilter}&${this.currencyFilter}&${this.languageFilter }`)
                    .then((data) => {
                        data.data.forEach(i => {
                            this.allCountryData.innerHTML +=
                                `<tr>
                               <th> ${i.name}</th>
                               <th>${i.capital}</th>
                               <th>${i.currency.name}  (${i.currency.symbol})</th>
                               <th>${i.language.name}</th>
                               </tr>`;
                        });
                    })
            }
        })
        this.sortButtonsDown1.addEventListener("click", () => {
            this.allCountryData.innerHTML = " ";
            this.nameSortLinkAsc = " ";
            this.nameSortLinkDesc = `_sort=name&_order=desc`;
            axios.get<Allcountries[]>(`${f}?${this.limit}${this.maxloadedDataEdit}&${this.nameSortLinkDesc}&${ this.countryFilter }&${this.capitalFilter}&${this.currencyFilter}&${this.languageFilter }`)
                .then((data) => {
                    console.log(this.nameSortLinkDesc)

                    data.data.forEach(i => {
                        this.allCountryData.innerHTML +=
                            `<tr>
                                <th> ${i.name}</th>
                                <th>${i.capital}</th>
                                <th>${i.currency.name}  (${i.currency.symbol})</th>
                                <th>${i.language.name}</th>
                                </tr>`;
                    });
                })
        })
        this.sortButtonsUp1.addEventListener("click", () => {
            this.allCountryData.innerHTML = " ";
            this.nameSortLinkDesc = " ";
            this.nameSortLinkAsc = `_sort=name&_order=asc`;
            axios.get<Allcountries[]>(`${f}?${this.limit}${this.maxloadedDataEdit}&${this.nameSortLinkAsc}&${ this.countryFilter }&${this.capitalFilter}&${this.currencyFilter}&${this.languageFilter }`)
                .then((data) => {
                    data.data.forEach(i => {
                        this.allCountryData.innerHTML +=
                            `<tr>
                                <th> ${i.name}</th>
                                <th>${i.capital}</th>
                                <th>${i.currency.name}  (${i.currency.symbol})</th>
                                <th>${i.language.name}</th>
                                </tr>`;
                    });
                })
        })
        this.sortButtonsDown2.addEventListener("click", () => {
            this.allCountryData.innerHTML = " ";
            this.nameSortLinkAsc = " ";
            this.nameSortLinkDesc = `_sort=capital&_order=desc`;
            axios.get<Allcountries[]>(`${f}?${this.limit}${this.maxloadedDataEdit}&${this.nameSortLinkDesc}&${ this.countryFilter }&${this.capitalFilter}&${this.currencyFilter}&${this.languageFilter }`)
                .then((data) => {
                    data.data.forEach(i => {
                        this.allCountryData.innerHTML +=
                            `<tr>
                                <th> ${i.name}</th>
                                <th>${i.capital}</th>
                                <th>${i.currency.name}  (${i.currency.symbol})</th>
                                <th>${i.language.name}</th>
                                </tr>`;
                    });
                })
        })
        this.sortButtonsUp2.addEventListener("click", () => {
            this.allCountryData.innerHTML = " ";
            this.nameSortLinkDesc = " ";
            this.nameSortLinkAsc = `_sort=capital&_order=asc`;
            axios.get<Allcountries[]>(`${f}?${this.limit}${this.maxloadedDataEdit}&${this.nameSortLinkAsc}&${ this.countryFilter }&${this.capitalFilter}&${this.currencyFilter}&${this.languageFilter }`)
                .then((data) => {
                    data.data.forEach(i => {
                        this.allCountryData.innerHTML +=
                            `<tr>
                                <th> ${i.name}</th>
                                <th>${i.capital}</th>
                                <th>${i.currency.name}  (${i.currency.symbol})</th>
                                <th>${i.language.name}</th>
                                </tr>`;

                    });
                })
        })
        this.sortButtonsDown3.addEventListener("click", () => {
            this.allCountryData.innerHTML = " ";
            this.nameSortLinkAsc = " ";
            this.nameSortLinkDesc = `_sort=currency.name&_order=desc`;
            axios.get<Allcountries[]>(`${f}?${this.limit}${this.maxloadedDataEdit}&${this.nameSortLinkDesc}&${ this.countryFilter }&${this.capitalFilter}&${this.currencyFilter}&${this.languageFilter }`)
                .then((data) => {
                    data.data.forEach(i => {
                        this.allCountryData.innerHTML +=
                            `<tr>
                                <th> ${i.name}</th>
                                <th>${i.capital}</th>
                                <th>${i.currency.name}  (${i.currency.symbol})</th>
                                <th>${i.language.name}</th>
                                </tr>`;
                    });
                })
        })
        this.sortButtonsUp3.addEventListener("click", () => {
            this.allCountryData.innerHTML = " ";
            this.nameSortLinkDesc = " ";
            this.nameSortLinkAsc = `_sort=currency.name&_order=asc`;
            axios.get<Allcountries[]>(`${f}?${this.limit}${this.maxloadedDataEdit}&${this.nameSortLinkAsc}&${ this.countryFilter }&${this.capitalFilter}&${this.currencyFilter}&${this.languageFilter }`)
                .then((data) => {
                    data.data.forEach(i => {
                        this.allCountryData.innerHTML +=
                            `<tr>
                                <th> ${i.name}</th>
                                <th>${i.capital}</th>
                                <th>${i.currency.name}  (${i.currency.symbol})</th>
                                <th>${i.language.name}</th>
                                </tr>`;

                    });
                })
        })

        this.sortButtonsDown4.addEventListener("click", () => {
            this.allCountryData.innerHTML = " ";
            this.nameSortLinkAsc = " ";
            this.nameSortLinkDesc = `_sort=language.name&_order=desc`;
            axios.get<Allcountries[]>(`${f}?${this.limit}${this.maxloadedDataEdit}&${this.nameSortLinkDesc}&${ this.countryFilter }&${this.capitalFilter}&${this.currencyFilter}&${this.languageFilter }`)
                .then((data) => {
                    data.data.forEach(i => {
                        this.urlLength = data.data.length;
                        this.allCountryData.innerHTML +=
                            `<tr>
                                <th> ${i.name}</th>
                                <th>${i.capital}</th>
                                <th>${i.currency.name}  (${i.currency.symbol})</th>
                                <th>${i.language.name}</th>
                                </tr>`;
                    });
                })
        })
        this.sortButtonsUp4.addEventListener("click", () => {
            this.allCountryData.innerHTML = " ";
            this.nameSortLinkDesc = " ";
            this.nameSortLinkAsc = `_sort=language.name&_order=asc`;
            axios.get<Allcountries[]>(`${f}?${this.limit}${this.maxloadedDataEdit}&${this.nameSortLinkAsc}&${ this.countryFilter }&${this.capitalFilter}&${this.currencyFilter}&${this.languageFilter }`)
                .then((data) => {
                    this.urlLength = data.data.length;
                    data.data.forEach(i => {
                        this.allCountryData.innerHTML +=
                            `<tr>
                                <th> ${i.name}</th>
                                <th>${i.capital}</th>
                                <th>${i.currency.name}  (${i.currency.symbol})</th>
                                <th>${i.language.name}</th>
                                </tr>`;

                    });
                })
        })
        this.clearButton.addEventListener("click", () => {
            this.allCountryData.innerHTML="";
            this.maxloadedDataEdit = 20;
            this.urlLength = 0;
    this.countryInput.value = "";
    this.capitalinput.value = "";
    this.currencyinout.value = "";
    this.languageinput.value = "";
    axios.get<Allcountries[]>(`${f}?${this.limit}${this.maxloaded}`)
                .then((data) => {
                    data.data.forEach(i => {
                        this.allCountryData.innerHTML +=
                            `<tr>
                            <th> ${i.name}</th>
                            <th>${i.capital}</th>
                            <th>${i.currency.name}  (${i.currency.symbol})</th>
                            <th>${i.language.name}</th>
                            </tr>`;
                    });
                })

})
    this.searchButton.addEventListener("click", () => {
        this.allCountryData.innerHTML = " "
            this.countryFilter = `name_like=${this.countryInput.value}`
            this.capitalFilter = `capital_like=${this.capitalinput.value}`
            this.currencyFilter = `currency.name_like=${this.currencyinout.value}`
            this.languageFilter = `language.name_like=${this.languageinput.value}`
            console.log(this.countryInput.value)
            axios.get<Allcountries[]>(`${f}?${this.limit}${this.maxloadedDataEdit}&${this.nameSortLinkDesc}&${this.nameSortLinkAsc}&${ this.countryFilter }&${this.capitalFilter}&${this.currencyFilter}&${this.languageFilter }`)
                .then((data) => {
                    this.urlLength = data.data.length;
                    data.data.forEach(i => {
                        this.allCountryData.innerHTML +=
                            `<tr>
                            <th> ${i.name}</th>
                            <th>${i.capital}</th>
                            <th>${i.currency.name}  (${i.currency.symbol})</th>
                            <th>${i.language.name}</th>
                            </tr>`;
                    });
                })
        })
    }
}

const countries = new Countries('.js-searchSection');




