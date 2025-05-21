const input = document.getElementById('searchInput').value.toUpperCase().trim();
  const items = document.querySelectorAll('.item');
  const noResults = document.getElementById('noResults');
  function filter() {
  let found = 0;

  for (let item of items) {
    const h2 = item.querySelector('h2');
    const text = h2 ? h2.innerText.toUpperCase() : "";

    // Obtem o <a> que envolve o .item
    const wrapper = item.closest('a');

    if (text.includes(input)) {
      wrapper.style.display = "";
      found++;
    } else {
      wrapper.style.display = "none";
    }
  }

  if (input && found === 0) {
    noResults.style.display = "block";
    noResults.innerText = `Esse produto não existe no catálogo "${document.getElementById('searchInput').value}"`;
  } else {
    noResults.style.display = "none";
  }
}
function filterDesktop() {
  let found = 0;

  for (let item of items) {
    const h2 = item.querySelector('h2');
    const text = h2 ? h2.innerText.toUpperCase() : "";

    // Obtem o <a> que envolve o .item
    const wrapper = item.closest('a');

    if (text.includes(input)) {
      wrapper.style.display = "";
      found++;
    } else {
      wrapper.style.display = "none";
    }
  }

  if (input && found === 0) {
    noResults.style.display = "block";
    noResults.innerText = `Esse produto não existe no catálogo "${document.getElementById('searchInput').value}"`;
  } else {
    noResults.style.display = "none";
  }
}
  function carBar() {
    const carBar = document.getElementById('carBar')
    const close = document.getElementById('close')
    const carrinho = document.getElementById('carrinho')

    carBar.classList.toggle('burger-ativo')
    carrinho.classList.add('active')

    if (close) {
      close.addEventListener('click', () => {
        carrinho.classList.remove('active')
      })
    }
  }

  document.getElementById('carBar')?.addEventListener('click', carBar)

  function clickMenu() {
    const menu = document.getElementById('menu');
    const burger = document.getElementById('burger');

    burger.classList.toggle('burger-ativo');

    if (menu.style.display === 'block') {
      menu.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      menu.style.opacity = '0';
      menu.style.transform = 'translateY(-20px)';
      setTimeout(() => menu.style.display = 'none', 300);
    } else {
      menu.style.display = 'block';
      menu.style.opacity = '0';
      menu.style.transform = 'translateY(-20px)';
      menu.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      void menu.offsetWidth;
      menu.style.opacity = '1';
      menu.style.transform = 'translateY(0)';
    }
  }
  
