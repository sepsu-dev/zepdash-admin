// Initialize on page load
window.addEventListener('load', () => {
    const loader = document.getElementById('mpa-loader');
    if (loader) {
        loader.style.width = '100%';
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.width = '0';
                loader.style.opacity = '1';
            }, 300);
        }, 300);
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // Toggle the side navigation
    const sidebarToggle = document.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('zd-sidenav-toggled');
            localStorage.setItem('zd|sidebar-toggle', document.body.classList.contains('zd-sidenav-toggled'));
        });
    }

    // Toggle Code Visibility
    document.querySelectorAll('.btn-toggle-code').forEach(btn => {
        btn.addEventListener('click', function () {
            const wrapper = this.closest('.code-wrapper');
            const codeBlock = wrapper.querySelector('pre');

            if (codeBlock.classList.contains('d-none')) {
                codeBlock.classList.remove('d-none');
                this.innerHTML = '<i class="ph-bold ph-eye-slash me-1"></i> Hide Code';
            } else {
                codeBlock.classList.add('d-none');
                this.innerHTML = '<i class="ph-bold ph-code me-1"></i> Show Code';
            }
        });
    });

    // Copy Code to Clipboard
    document.querySelectorAll('.btn-copy-code').forEach(btn => {
        btn.addEventListener('click', function () {
            const wrapper = this.closest('.code-wrapper');
            const codeContent = wrapper.querySelector('code').innerText;

            navigator.clipboard.writeText(codeContent).then(() => {
                const originalText = btn.innerHTML;
                btn.innerHTML = '<i class="ph-bold ph-check me-1"></i> Copied!';
                btn.classList.add('btn-success');
                btn.classList.remove('btn-outline-secondary');

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.remove('btn-success');
                    btn.classList.add('btn-outline-secondary');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });

    // MPA Loading Effect on link click
    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href !== '#' && !href.startsWith('http') && !link.hasAttribute('data-bs-toggle')) {
            link.addEventListener('click', () => {
                const loader = document.getElementById('mpa-loader');
                if (loader) {
                    loader.style.width = '70%';
                    loader.style.opacity = '1';
                }
            });
        }
    });

});
