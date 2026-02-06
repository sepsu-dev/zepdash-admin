// Configure NProgress immediately
if (typeof NProgress !== 'undefined') {
    NProgress.configure({ showSpinner: false });
    NProgress.start();
}

// Initialize on page load
$(window).on('load', () => {
    if (typeof NProgress !== 'undefined') {
        setTimeout(() => {
            NProgress.done();
        }, 200);
    }
});

$(function () {
    const $content = $('#layoutSidenav_content');

    // Add fadeIn on load if not already there
    if ($content.length && !$content.hasClass('animate__fadeIn')) {
        $content.addClass('animate__animated animate__fadeIn');
    }

    // Toggle the side navigation
    const $sidebarToggle = $('#sidebarToggle');
    if ($sidebarToggle.length) {
        $sidebarToggle.on('click', function (event) {
            event.preventDefault();
            $('body').toggleClass('zd-sidenav-toggled');
            localStorage.setItem('zd|sidebar-toggle', $('body').hasClass('zd-sidenav-toggled'));
        });
    }

    // MPA Loading Effect on link click with animate__fadeOut
    $(document).on('click', 'a', function (e) {
        const $link = $(this);
        const href = $link.attr('href');
        const target = $link.attr('target');

        // Only transition for internal links that are not toggles or anchors
        if (href &&
            href !== '#' &&
            !href.startsWith('http') &&
            !href.startsWith('javascript') &&
            !href.includes('#') &&
            !$link.attr('data-bs-toggle') &&
            !$link.attr('data-bs-dismiss') &&
            target !== '_blank') {

            e.preventDefault();

            if (typeof NProgress !== 'undefined') {
                NProgress.start();
            }

            if ($content.length) {
                // Ensure the content fade out is fast enough
                $content.css('animation-duration', '400ms');
                $content.removeClass('animate__fadeIn').addClass('animate__fadeOut');

                // Navigate after animation completes
                setTimeout(() => {
                    window.location.href = href;
                }, 350);
            } else {
                window.location.href = href;
            }
        }
    });

});
