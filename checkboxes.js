function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

<<<<<<< HEAD
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
=======
function writeToFile() {
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', (event) => {
        let content = alert(getSelectedCheckboxValues('class'));
        content = getSelectedCheckboxValues('class');
        const fs = require('fs');
        fs.writeFile('test.txt', content, err => {
            if (err) {
                console.err;
                return;
            }
        });
    });
}
>>>>>>> f64ac9d5ac322166eea2f4e3686a2f005069a4f8
