//pagination

// axios.get<Countries[]>('http://localhost:3004/countries')
// .then((countries)=>{
//     let listItems = document.querySelectorAll("tr")
//     console.log(listItems.length)

// const paginationNumbers = document.getElementById("pagination-numbers");
// // const nextButton = document.getElementById("next-button");
// // const prevButton = document.getElementById("prev-button");
// const paginationLimit:number = 20;
// const pageCount:number = Math.ceil(listItems.length / paginationLimit);

// let currentPage:number=1;
// const appendPageNumber = (index:number) => {
//     const pageNumber = document.createElement("button");
//     pageNumber.className = "pagination-number";
//     pageNumber.innerHTML = String(index);
//     pageNumber.setAttribute("page-index", index.toString());
//     pageNumber.setAttribute("aria-label", "Page " + index);
//     paginationNumbers.appendChild(pageNumber);
//   };
//   const getPaginationNumbers = () => {
//     for (let i = 1; i <= pageCount; i++) {
//       appendPageNumber(i);
//     }
//   };
//   const handleActivePageNumber = () => {
//     document.querySelectorAll(".pagination-number").forEach((button) => {
//       button.classList.remove("active");
      
//       const pageIndex = Number(button.getAttribute("page-index"));
//       if (pageIndex == currentPage) {
//         button.classList.add("active");
//       }
//     });
//   };
//   const setCurrentPage = (pageNum:number) => {
//     currentPage = pageNum;
    
//     handleActivePageNumber();

//     const prevRange = (pageNum - 1) * paginationLimit;
//     const currRange = pageNum * paginationLimit;
//     listItems.forEach((item, index:number) => {
//         item.classList.add("hidden");
//         if (index >= prevRange && index < currRange) {
//           item.classList.remove("hidden");
//         }
//       });
//   };

//   window.addEventListener("load", () => {
//     getPaginationNumbers();
//     setCurrentPage(1);
//     document.querySelectorAll(".pagination-number").forEach((button) => {
//         const pageIndex = Number(button.getAttribute("page-index"));
//         if (pageIndex) {
//           button.addEventListener("click", () => {
//             setCurrentPage(pageIndex);
//           });
//         }
//       });
//   });

// })


// load more data button 


// function loadMoreData (maxDataLoaded:number){
//     let loadMoreButton = document.querySelector<HTMLButtonElement>(".loadButton");
// //     let loadMoreButtonDiv = document.querySelector(".loadButtonDiv");
    
//     loadMoreButton.addEventListener("click", ()=>{
//     // axios.get<Countries[]>(`http://localhost:3004/countries`)
//     // // .then((countries)=>{
//     // //     console.log(countries);
//     // // })
//     // .then((data) => {
       
//     //     let tableContent2:string="";
//         if (maxDataLoaded !== 235 && maxDataLoaded < 234){
//             // for (let i=21 ; i<maxDataLoaded; i++){
//                 maxDataLoaded = maxDataLoaded+40;
            //     document.querySelector(".tableBody2").innerHTML=tableContent2;
            //     tableContent2+=`<tr>
            //     <th> ${data.data[i].name}</th>
            //     <th>${data.data[i].capital}</th>
            //     <th>${data.data[i].currency.code}</th>
            //     <th>${data.data[i].language.name}</th>
            //   </tr>`;
    //         loadData(maxDataLoaded);
    //         }

    //     } else {
    //         loadMoreButton.style.display ='none';
    //         loadData(maxDataLoaded);

    //     }
        
    // });
// })
// })
// }


// https://webdesign.tutsplus.com/tutorials/pagination-with-vanilla-javascript--cms-41896

// hot to search in table started 
//let  table = document.querySelector(".dataTable");
// let  tr = table.getElementsByTagName("tr")
// for (let i=0; i <20; i++ ){
//   let  th = tr[i].getElementsByTagName("th")[0]
// //    console.log(countryInput.value);
// //    console.log(th.textContent);
//    if (countryInput.value.toLowerCase() === th.textContent.trim().toLowerCase()){
//        console.log(th.textContent)
//         for (let i=0; i<5 ; i++ ){
//            searchedValues.innerHTML+=  `<tr>
//            <th> ${th.textContent}</th>
          
//          </tr>`;
//    }
//    } else {
//        for (let i=0; i<5 ; i++ ){
//            allCountryData.innerHTML+=  `<tr>
//            <th> ${th.style.display=""}</th>
          
//          </tr>`;
//    }

//        // <th>${data.data[i].capital}</th>
//            // <th>${data.data[i].currency.code}</th>
//            // <th>${data.data[i].language.name}</th>
// }
// }
