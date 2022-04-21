const btnToggle = document.getElementById('toggleBtn');
const description = document.getElementById("description");
const headline = document.getElementById("headline");
btnToggle.addEventListener('click', () => { textToggle(btnToggle, headline, description) });

function textToggle(btn, original, replace) {
    const check = !!original.classList.contains("toggleOn");
           if (check) {
        original.classList.remove("toggleOn");
        original.classList.add("toggleOff");
        replace.classList.remove("toggleOff");
        replace.classList.add("toggleOn");
        btn.innerHTML = 'Згорнути опис'
        } else {
            replace.classList.remove("toggleOn");
        replace.classList.add("toggleOff");
        original.classList.remove("toggleOff");
        original.classList.add("toggleOn");
        btn.innerHTML = 'Розгорнути опис'
        }
    
}
