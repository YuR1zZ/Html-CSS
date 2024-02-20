const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isInteracting){
            entry.target.classlist.add('show');
        } else{
            entry.target.classlist.remove('show');
        }
    });
});




const banner = document.querySelectorAll('.banner');
bannerElements.forEach((el) => observer.observe(el));