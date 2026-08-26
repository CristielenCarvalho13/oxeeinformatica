const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const burger = document.getElementById('burgerBtn');


// =========================
// MENU MOBILE
// =========================

function toggleMenu(){

  sidebar.classList.toggle('open');

  overlay.classList.toggle('open');

}

burger.addEventListener('click', toggleMenu);

overlay.addEventListener('click', toggleMenu);


// =========================
// LINKS DO MENU
// =========================

const links = document.querySelectorAll('.sidebar nav a');

links.forEach(link => {

  link.addEventListener('click', () => {

    links.forEach(l => {
      l.classList.remove('active');
    });

    link.classList.add('active');

    if(sidebar.classList.contains('open')){
      toggleMenu();
    }

  });

});


// =========================
// MENU ATIVO CONFORME A SEÇÃO
// =========================

const sections = document.querySelectorAll('main section[id]');

const spy = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        links.forEach(l => {
          l.classList.remove('active');
        });

        const active = document.querySelector(
          '.sidebar nav a[href="#' +
          entry.target.id +
          '"]'
        );

        if(active){
          active.classList.add('active');
        }

      }

    });

  },
  {
    rootMargin:'-40% 0px -50% 0px'
  }
);

sections.forEach(section => {
  spy.observe(section);
});


