function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
    let content = alert(getSelectedCheckboxValues('class'));
    content = getSelectedCheckboxValues('class');
    alert(content);

    
});
const fs = require('fs');
fs.writeFile('test.txt', "yo", err => {
    if(err)
    {
        console.err;
        return;
    }
});
