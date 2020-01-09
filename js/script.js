function calculate(type, value) {
    var inputElement = document.querySelector('.result');
    if (type === 'action') {
        if (value === 'c') {
            inputElement.value = '';
        }

        if (value === '*' || value === '+' || value === '/' || value === '-' || value === '.') {
            inputElement.value += value;
        }

        if (value === '=') {
            var equal = eval(inputElement.value);
            inputElement.value = equal;
        }
    } else if (type === 'value') {
        inputElement.value += value;
    }
}