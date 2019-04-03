window.addEventListener('load', function(){
    document.querySelector('.last-update .btn-update-weather').addEventListener('click', function(){
        console.log(this);

        this.classList.add('active');

        let timeOut = setTimeout(() => {
            this.classList.remove('active');
        }, 700);
    })
})