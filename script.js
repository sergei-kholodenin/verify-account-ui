const codes = document.querySelectorAll('.code');
codes[0].focus();

codes.forEach((code, i) => {
    code.addEventListener('keyup', (e) => {
        if (e.key >= 0 && e.key <= 9 ) {
            codes[i + 1].focus();            
        }
        if (e.key === 'Backspace') {
            codes[i - 1].focus();
            codes[i - 1].value = '';
        }
    })
})