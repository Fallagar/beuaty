
function textToggle() {
    const getData = document.getElementById("toggleScript");
    const data = getData.getAttribute('data-description');
    const btnToggle = document.getElementById('toggleBtn');
    console.log(data);
    const toggle = document.getElementById("description");
    console.log(toggle.innerHTML)
    console.log(data)
    if (toggle.innerHTML < data) {
        toggle.innerHTML = data + data;
        console.log('First If')
        btnToggle.innerHTML = 'Згорнути опис'
    } else {
        toggle.innerHTML = "";
        toggle.innerHTML = data.slice(0, 120);
        btnToggle.innerHTML = 'Разгорнути опис'
        console.log('Second If')
    }
}
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
 