const profilIkon = document.getElementById('profil_ikon');
const closeProfil = document.getElementById('open_profil_close');
const openProfil = document.getElementById('open_profil');

profilIkon.addEventListener('click', function(e){
    e.preventDefault()
    openProfil.classList.add('active');
});

closeProfil.addEventListener('click', () => {
    openProfil.classList.remove('active');
} )


