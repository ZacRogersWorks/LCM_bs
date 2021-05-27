// window.addEventListener("resize", function () {
//     "use strict"; window.location.reload();
// });

document.addEventListener("DOMContentLoaded", function () {

    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {

        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
            everydropdown.addEventListener('hidden.bs.dropdown', function () {
                // after dropdown is hidden, then find all submenus
                this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
                    // hide every submenu as well
                    everysubmenu.style.display = 'none';
                });
            })
        });

        let menuBtn = document.querySelector('#myDropdown')
        menuBtn.addEventListener('mouseover', function (e) {

            let nextEl = document.querySelector('.submenu');
            if (nextEl) {
                // prevent opening link if link needs to open dropdown
                // e.preventDefault();

                if (nextEl.style.display == 'block') {
                    nextEl.style.display = 'none';
                } else {
                    nextEl.style.display = 'block';
                }

            }
        })
    }
    // end if innerWidth

});
// DOMContentLoaded  end