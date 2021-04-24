document.addEventListener('DOMContentLoaded', () => {
    const {previousUrl, nextUrl} = getPreviousAndNextUrls();
    const main = document.getElementsByTagName('main')[0];

    loadFontSizePreference(main);
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

function loadFontSizePreference(main) {
    const fontSize = parseInt(localStorage.getItem('fontSize'));
    if (fontSize) {
        setFontSize(main, fontSize);
    }
}

function addFontSizeListener(main) {
    const decreaseFontButton = document.getElementById('decrease-font');
    const increaseFontButton = document.getElementById('increase-font');

    decreaseFontButton.addEventListener('click', () => {
        setFontSize(main, 'minus');
    })

    increaseFontButton.addEventListener('click', () => {
        setFontSize(main, 'plus');
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
            setFontSize(main, 'minus');
        } else if (key === 'KeyI') {
            setFontSize(main, 'plus');
        } else if (key === 'KeyH') {
            window.location.href = `${window.location.protocol}//${window.location.host}`;
        } else if (key === 'KeyR') {
            window.location.href = `${window.location.protocol}//${window.location.host}/references`;
        }
    })
}

function setFontSize(main, directionOrSize) {
    const currentFontSize = parseInt(getComputedStyle(main)['font-size']);
    let newFontSize = currentFontSize;
    
    if (Number.isInteger(directionOrSize)) {
        newFontSize = directionOrSize;
    } else if (directionOrSize === 'minus') {
        if (currentFontSize > 4) {
            newFontSize -=4;
        }
    } else {
        newFontSize +=4;
    }

    main.style.fontSize = `${newFontSize}px`;
    localStorage.setItem('fontSize', newFontSize);
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