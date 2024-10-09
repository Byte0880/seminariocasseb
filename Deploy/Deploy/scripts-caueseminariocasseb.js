document.getElementById('botao-notificacao').addEventListener('click', function() {
    const notification = document.getElementById('notificacao');
    
  
    if (notification.style.display === 'block') {

        notification.classList.remove('fade-in'); 
        notification.style.display = 'none'; 
    } else {

        notification.textContent = '🎉 Cauê foi essencial em cada projeto, trazendo inovação e eficiência, além de inspirar toda a equipe com suas ideias visionárias! 🚀';
        notification.style.display = 'block'; 
        notification.classList.add('fade-in'); 

        setTimeout(() => {
            notification.classList.remove('fade-in'); 
            notification.style.display = 'none'; 
        }, 5000);
    }
});