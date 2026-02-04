window.addEventListener('DOMContentLoaded', event => {
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        if (localStorage.getItem('zd|sidebar-toggle') === 'true') {
            document.body.classList.toggle('zd-sidenav-toggled');
        }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('zd-sidenav-toggled');
            localStorage.setItem('zd|sidebar-toggle', document.body.classList.contains('zd-sidenav-toggled'));
        });
    }
});