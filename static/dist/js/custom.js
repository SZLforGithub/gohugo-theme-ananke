window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = encodeURI(entry.target.getAttribute('id')).toLowerCase();
            if (entry.intersectionRatio > 0) {
                clearActiveStatesInTableOfContents();
                document.querySelector(`li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('h2[id], h3[id], h4[id]').forEach((section) => {
        observer.observe(section);
    });
    
});

function clearActiveStatesInTableOfContents() {
    document.querySelectorAll('.toc-nav .nav .nav li').forEach((section) => {
        section.classList.remove('active');
    });
}