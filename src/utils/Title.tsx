export function title() {
    //get location of page url
    const url = window.location.pathname;
    const page = url.split('/')[2];

    //if domain is not empty
    if (page == null) {
        document.title = 'Journal'
    } else {
        document.title = page;
    }
}