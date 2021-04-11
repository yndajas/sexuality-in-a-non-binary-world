document.addEventListener('DOMContentLoaded', () => {
    const {previousUrl, nextUrl} = getPreviousAndNextUrls();
    const main = document.getElementsByTagName('main')[0];

    addFontSizeListener(main);
    addKeyListener(previousUrl, nextUrl, main);
})

function getPreviousAndNextUrls() {
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');

    let previousUrl = null;
    if (previousButton) {
        previousUrl = previousButton.href;
    }
    
    let nextUrl = null;
    if (nextButton) {
        nextUrl = nextButton.href;
    }

    return {previousUrl: previousUrl, nextUrl: nextUrl};
}

function addFontSizeListener(main) {
    const decreaseFontButton = document.getElementById('decrease-font');
    const increaseFontButton = document.getElementById('increase-font');

    decreaseFontButton.addEventListener('click', () => {
        decreaseFontSize(main);
    })

    increaseFontButton.addEventListener('click', () => {
        increaseFontSize(main);
    })
}

function addKeyListener(previousUrl, nextUrl, main) {
    document.addEventListener('keydown', e => {
        const key = e.code;

        if (['ArrowLeft', 'Backspace', 'KeyP'].includes(key) && previousUrl !== null) {
            window.location.href = previousUrl;
        } else if (['ArrowRight', 'Space', 'KeyN'].includes(key) && nextUrl !== null) {
            window.location.href = nextUrl;
        } else if (key === 'KeyD') {
            decreaseFontSize(main);
        } else if (key === 'KeyI') {
            increaseFontSize(main);
        } else if (key === 'KeyH') {
            window.location.href = `${window.location.protocol}//${window.location.host}`;
        }
    })
}

function decreaseFontSize(main) {
    const currentFontSize = getCurrentFontSize(main);
    if (currentFontSize > 4) {
        main.style.fontSize = `${currentFontSize - 4}px`;
    }
}

function increaseFontSize(main) {
    const currentFontSize = getCurrentFontSize(main);
    main.style.fontSize = `${currentFontSize + 4}px`;
}

function getCurrentFontSize(main) {
    return parseInt(getComputedStyle(main)['font-size']);
}

// main credit: https://stackoverflow.com/a/23593099
function formattedDateNow() {
    const dateNow = new Date;
    let month = `${dateNow.getMonth() + 1}`,
        day = `${dateNow.getDate()}`,
        year = `${dateNow.getFullYear()}`;

    if (month.length < 2) {
        month = `0${month}`;        
    }

    if (day.length < 2) {
        day = `0${day}`;
    } 

    return [year, month, day].join('-');
}