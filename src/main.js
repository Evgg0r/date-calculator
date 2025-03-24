import {
    BUTTON,
    DATE,
    TIME_LEFT,
    MILLISECONDS_IN_ONE_YEAR,
    MILLISECONDS_IN_ONE_DAY,
    MILLISECONDS_IN_ONE_HOUR,
} from "./constans.js"



const theDawnOfDifference = () => {
    const dateInput = DATE.value;
    const selectedDate = new Date(dateInput);
    const currentDate = new Date();

    if (isNaN(selectedDate)) {
        alert('Пожалуйста, введите корректную дату.');
        TIME_LEFT.innerHTML = ""
        return;
    }
    if (selectedDate <= currentDate) {
        alert('Пожалуйста, введите дату в будущем.');
        TIME_LEFT.innerHTML = ""
        return;
    }

    const dataDifference = selectedDate - currentDate;

    const yearsDifference = Math.floor(dataDifference / MILLISECONDS_IN_ONE_YEAR);
    const daysDifference = Math.floor((dataDifference % MILLISECONDS_IN_ONE_YEAR) / MILLISECONDS_IN_ONE_DAY);
    const hoursDifference = Math.floor((dataDifference % MILLISECONDS_IN_ONE_DAY) / MILLISECONDS_IN_ONE_HOUR);


    TIME_LEFT.innerHTML = ""
    const span = document.createElement("span");
    span.textContent = "Осталось времени:"
    const p = document.createElement("p");
    p.textContent = `${yearsDifference} лет ${daysDifference} дня ${hoursDifference} часа`
    TIME_LEFT.appendChild(span);
    TIME_LEFT.appendChild(p);
}

BUTTON.addEventListener('click', () => {
    if (!DATE.value) {
        alert('Пожалуйста, введите дату.');
        return;
    }
    return theDawnOfDifference();
});