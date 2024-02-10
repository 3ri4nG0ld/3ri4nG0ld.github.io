
function redirectToWebmin() {
    window.location.href = "https://3ri4nG0ld.duckdns.org:10000";
}
function switchColorScheme() {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
    }
}
function setDefaultColorScheme() {
    /*
    Este codigo Se encarga de ver que tema esta usando el
    nevegador del cliente para mostrar la pagina con el tema 
    correspondiente.
*/
    const handleColorSchemeChange = (e) => {
        const theme = e.matches ? 'dark' : 'light';
        console.log(`El usuario prefiere el modo ${theme}`);
        document.documentElement.setAttribute('data-bs-theme', theme);
        // Agregar aquí el código para adaptar tu interfaz al modo oscuro o claro
    };
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addListener(handleColorSchemeChange);
    handleColorSchemeChange(darkModeMediaQuery);
}

// --- MAIN ---

setDefaultColorScheme()

