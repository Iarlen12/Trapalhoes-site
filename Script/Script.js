
  
  function filterProducts(inputId, noResultsId) {
  const inputField = document.getElementById(inputId);
  const inputValue = inputField.value.toUpperCase().trim();
  const items = document.querySelectorAll('.item');
  const noResults = document.getElementById(noResultsId);

  let found = 0;

  items.forEach(item => {
    const h2 = item.querySelector('h2');
    const text = h2 ? h2.innerText.toUpperCase() : "";

    const wrapper = item.closest('a');

    if (text.includes(inputValue)) {
      wrapper.style.display = "";
      found++;
    } else {
      wrapper.style.display = "none";
    }
  });

  if (inputValue && found === 0) {
    noResults.style.display = "block";
    noResults.innerHTML = `Nenhum resultado encontrado com 
    <span style="color:#910eff; margin-left:5px;">"${inputField.value}"</span>`;
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
  