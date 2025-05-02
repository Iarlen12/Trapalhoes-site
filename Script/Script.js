function clickMenu() {
  const menu = document.getElementById('menu');
  
  if (menu.style.display === 'block') {
    // Animação para fechar
    menu.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    menu.style.opacity = '0';
    menu.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
      menu.style.display = 'none';
    }, 300); // Espera a animação terminar antes de esconder
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