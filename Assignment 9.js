document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    const totalPages = 5;

    const updatePageVisibility = () => {
        for (let i = 1; i <= totalPages; i++) {
            const page = document.getElementById(`q${i}`);
            page.classList.remove('visible');
            if (i === currentPage) {
                page.classList.add('visible');
            }
        }
    };

    document.querySelectorAll('.menu').forEach(item => {
        item.addEventListener('click', (e) => {
            currentPage = parseInt(e.target.getAttribute('data-target'));
            updatePageVisibility();
        });
    });

    document.getElementById('prev').addEventListener('click', () => {
        if (currentPage > 1) currentPage--;
        updatePageVisibility();
    });

    document.getElementById('next').addEventListener('click', () => {
        if (currentPage < totalPages) currentPage++;
        updatePageVisibility();
    });

    updatePageVisibility();
});
