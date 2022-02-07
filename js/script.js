const input__width = document.getElementsByClassName('input__width');
const input__ratio = document.getElementsByClassName('input__ratio');
const input__rim = document.getElementsByClassName('input__rim');

const result__diameter = document.getElementsByClassName('result__diameter');
const result__width = document.getElementsByClassName('result__width');
const result__sidewall = document.getElementsByClassName('result__sidewall');
const result__circumference = document.getElementsByClassName('result__circumference');
const result__revs = document.getElementsByClassName('result__revs');

function compareTires() {
    for(let i = 0; i < 3; i++) {
        const width = input__width[i].value / 25.6;
        const sidewall = (input__width[i].value * (input__ratio[i].value / 100)) / 25.6;
        const diameter = parseFloat(input__rim[i].value) + (parseFloat(sidewall) * 2);
        const circumference = 2 * Math.PI * (parseFloat(diameter) / 2);
        const revs = 63360 / parseFloat(circumference);

        result__width[i].value = width.toFixed(2) + '\"';
        result__sidewall[i].value = sidewall.toFixed(2) + '\"';
        result__diameter[i].value = diameter.toFixed(2) + '\"';
        result__circumference[i].value = circumference.toFixed(2) + '\"';
        result__revs[i].value = revs.toFixed(2) + '\"';
    }
}