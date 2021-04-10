document.addEventListener('DOMContentLoaded', () => {
    const previousButton = document.getElementById('previous');
    let previousUrl = null;
    if (previousButton) {
        previousUrl = previousButton.href;
    }
    
    const nextButton = document.getElementById('next');
    let nextUrl = null;
    if (nextButton) {
        nextUrl = nextButton.href;
    }

    document.addEventListener('keydown', e => {
        const key = e.code;

        if (['ArrowLeft', 'Backspace'].includes(key) && previousUrl !== null) {
            window.location.href = previousUrl;
        } else if (['ArrowRight', 'Space'].includes(key) && nextUrl !== null) {
            window.location.href = nextUrl;
        }
    })    
})


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