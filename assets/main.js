let navBarHidden = false;
function hideNavigationBar() {
    if (!navBarHidden) {
        const elem = document.querySelector('.navigation-bar-container');
        if (elem) {
            elem.classList.remove('shown');
            elem.style.transform = 'translateY(0)';
            window.requestAnimationFrame(() => {
                elem.style.transform = null;
                elem.classList.add('is-hidden');
            });
        }
        navBarHidden = true;
    }
}
function showNavigationBar(force) {
    if (navBarHidden || force) {
        const elem = document.querySelector('.navigation-bar-container');
        if (elem) {
            elem.classList.remove('is-hidden');
            elem.style.transform = 'translateY(-100%)';
            window.requestAnimationFrame(() => {
                elem.style.transform = null;
                elem.classList.add('shown');
            });
        }
        navBarHidden = false;
    }
}
function initializeScrollListener() {
    let lastScrollPosition = 0;
    document.addEventListener('scroll', () => {
        if (lastScrollPosition < window.scrollY) {
            !navBarHidden && hideNavigationBar();
        } else {
            navBarHidden && showNavigationBar();
        }
        lastScrollPosition = window.scrollY;
    });
}

function initializeNavigatioBar() {
    const elem = document.querySelector('.navigation-bar-container');
    if (elem) {
        initializeScrollListener(); 
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigatioBar();
    showNavigationBar();
});