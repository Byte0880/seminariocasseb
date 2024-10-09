document.getElementById('botao-notificacao').addEventListener('click', function() {
    const notification = document.getElementById('notificacao');
    
  
    if (notification.style.display === 'block') {

        notification.classList.remove('fade-in'); 
        notification.style.display = 'none'; 
    } else {

        notification.textContent = '🚀 Henrique foi peça-chave no sucesso dos projetos, sempre entregando soluções inovadoras e colaborando com entusiasmo! 🌟';
        notification.style.display = 'block'; 
        notification.classList.add('fade-in'); 

        setTimeout(() => {
            notification.classList.remove('fade-in'); 
            notification.style.display = 'none'; 
        }, 5000);
    }
});