window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            const id = encodeURI(entry.target.getAttribute('id')).toLowerCase();
            if (entry.intersectionRatio > 0) {
                clearActiveStatesInTableOfContents();
                document.querySelector(`li a[href="#${id}"]`).parentElement.classList.add('active');
            } else if (entries[index+1].intersectionRatio > 0) {
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