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

        console.log(e.code);

        if (key === 'ArrowLeft' && previousUrl !== null) {
            window.location.href = previousUrl;
        } else if (['ArrowRight', 'Space'].includes(key) && nextUrl !== null) {
            window.location.href = nextUrl;
        }
    })    
})

