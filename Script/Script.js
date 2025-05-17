
function carBar() {
  const carBar = document.getElementById('carBar')
  const close = document.getElementById('close')
  const carrinho = document.getElementById('carrinho')
  
  carBar.classList.toggle('burger-ativo')
  carrinho.classList.add('active')
  
  if (close) {
    close.addEventListener('click', () =>{
      carrinho.classList.remove('active')
    })
  }
}
document.getElementById('carBar').addEventListener('click', carBar)


function clickMenu() {
  const menu = document.getElementById('menu');
  const burger = document.getElementById('burger');

  burger.classList.toggle('burger-ativo');

  if (menu.style.display === 'block') {
    // Animação para fechar
    menu.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    menu.style.opacity = '0';
    menu.style.transform = 'translateY(-20px)';

    setTimeout(() => {
      menu.style.display = 'none';
    }, 300);
  } else {
    // Mostra e anima para abrir
    menu.style.display = 'block';
    menu.style.opacity = '0';
    menu.style.transform = 'translateY(-20px)';
    menu.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

    // Força o reflow para aplicar a transição
    void menu.offsetWidth;

    menu.style.opacity = '1';
    menu.style.transform = 'translateY(0)';
  }
}