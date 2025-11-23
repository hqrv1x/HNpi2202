document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('applicationModal');
    if (!modal) return;

    const openButtons = document.querySelectorAll('[data-application-open]');
    const overlay = modal.querySelector('[data-modal-overlay]');
    const closeButtons = modal.querySelectorAll('[data-modal-close]');
    const form = document.getElementById('applicationForm');

    const openModal = function (event) {
        if (event) event.preventDefault();
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = function () {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    // Відкрити з усіх кнопок "Подати заявку"
    openButtons.forEach(function (btn) {
        btn.addEventListener('click', openModal);
    });

    // Закриття по Х
    closeButtons.forEach(function (btn) {
        btn.addEventListener('click', closeModal);
    });

    // Закриття по miss click (клік по оверлею)
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }

    // Закриття по кнопці "Надіслати" без відправки даних
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            form.reset();
            closeModal();
        });
    }

    // Додатково: Закриття по Esc
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });

    const toTopBtn = document.getElementById('toTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            toTopBtn.classList.add('show');
        } else {
            toTopBtn.classList.remove('show');
        }
    });

    toTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});