let count = 0;

let value = document.querySelector('#value');
value.textContent = count;
value.style.color = "rgb(48, 42, 42)";
let btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget)
        const btnclass = e.currentTarget.classList;
        if (btnclass.contains('decrease')) {
            count--;
        } else if (btnclass.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "rgb(48, 42, 42)";
        }

        value.textContent = count;
    })
}) 