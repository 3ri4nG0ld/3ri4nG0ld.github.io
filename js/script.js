
function redirectToWebmin() {
    window.location.href = "https://3ri4nG0ld.duckdns.org:10000";
}
function switchDarkMode(){
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
    }
}