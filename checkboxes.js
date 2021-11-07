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
    const fs = require('fs');
    fs.writeFile('test.txt', content, err => {
        if(err)
        {
            console.err;
            return;
        }
    });
});





