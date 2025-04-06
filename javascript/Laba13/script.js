let defaultTheme = true;
let changeMode = document.querySelector('.themes');
let theme = document.getElementById('regular');

changeMode.addEventListener('click', function(){
        if(defaultTheme){
            theme.href = 'pink-mode.css';
            defaultTheme = false;
            localStorage.setItem('theme', 'pink');
        } else{
            theme.href = 'style.css';
            defaultTheme = true;
            localStorage.setItem('theme', 'default');
        }
})

function setTheme() {
    let currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'pink') {
        theme.href = 'pink-mode.css';
        defaultTheme = false;
    } 
    else {
        theme.href = 'style.css';
        defaultTheme = true;
    }
}

setTheme();

