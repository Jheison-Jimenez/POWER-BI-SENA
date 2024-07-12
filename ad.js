
function alertButton() {
    let btn = document.getElementById('btnPowerBi');
    btn.addEventListener('click', function () {
        let user = prompt('Usuario');
        let password = prompt('Password');
        fetchData(user, password)
    });
}

alertButton()

async function fetchData(user, password) {
    try {
        const response = await fetch('admin.json');
        const data = await response.json();
        if (user == data.API_KEY || password == data.API_PAS) {
            alert('Excelente...')
            window.location.href = "admin.html";
        }
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
    }
}

fetchData();
