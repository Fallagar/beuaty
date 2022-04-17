
function textToggle() {
    const toggle = document.getElementById("description");
    const getData = document.getElementById("toggleScript");
    const data = getData.getAttribute('data-description');
    const headline = getData.getAttribute('data-headline');
    const btnToggle = document.getElementById('toggleBtn');
    console.log(data);
    console.log(headline)
    console.log(data.length)
    if (toggle.innerHTML === headline) {
        toggle.innerHTML = `${data}`;
        btnToggle.innerHTML = 'Згорнути опис'
    } else {
        toggle.innerHTML = headline;
        btnToggle.innerHTML = 'Разгорнути опис'
       
        }
}
// function textToggle() {
//     const toggle = document.getElementById("description");
//     const getData = document.getElementById("toggleScript");
//     const data = getData.getAttribute('data-description');
//     const btnToggle = document.getElementById('toggleBtn');
//     console.log(data);
//     console.log(toggle.innerText.length)
//     console.log(data.length)
//     if (toggle.innerText.length < data.length) {
//         console.log("Contents of first if" + data);
//         toggle.innerText = "";
//         toggle.innerText = `${data}`;
//         console.log('First If')
//         btnToggle.innerText = 'Згорнути опис'
//     } else {
//         console.log("Contents of else");
//         console.log(data.slice(0, (data.indexOf("<break></break>") - 4)) + "...</p>");
//         const dataOne = `${data.slice(0, (data.indexOf("<break></break>") - 4))}` + "...</p>"
//         toggle.innerText = "";
//         toggle.innerText =`${dataOne}`;
//         btnToggle.innerText = 'Разгорнути опис'
//         console.log('Second If');
//         console.log("Inner text final of toggle:")
//         console.log(toggle.innerText);
//             }
// }
// function removeDgrid(query, id) {
//     console.log(query)
//     if (query) {
//         console.log('If' + query)
//         id.classList.add("d-grid")
//     } else {
//         console.log('Else' + query)
//         id.classList.remove("d-grid")
//     }
// }
// function removeDgrid(query, id) {
//     console.log(query)
//     query.matches ? id.classList.remove("mx-auto") : id.classList.add("mx-auto")
// }

// const toggleBtn = document.getElementById('toggleBtn');
// const width = window.matchMedia("(max-width: 576px)")


// width.addEventListener('change', function (e) {
//     console.log(this, toggleBtn)
//     removeDgrid(this, toggleBtn)
    
// })
 