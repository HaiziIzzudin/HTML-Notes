let theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
console.log(theme);
if (theme == 'dark') {
    document.querySelector('body')?.classList.add('dark-theme');
} else {
    document.querySelector('body')?.classList.add('light-theme');
}




// DROPDOWN CONFIGURATIONS
let dropdownButton = document.querySelector('.theme-button');
let myQuerySelector = document.querySelector("body")
dropdownButton?.addEventListener('click', () => {
    if (myQuerySelector?.classList.contains('light-theme')) {
        myQuerySelector?.classList.remove('light-theme');
        myQuerySelector?.classList.add('dark-theme');
    } else {
        myQuerySelector?.classList.remove('dark-theme');
        myQuerySelector?.classList.add('light-theme');
    }
});