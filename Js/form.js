document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o redirecionamento padrão

    const formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            this.reset(); // Limpa o formulário
        } else {
            alert('Erro ao enviar a mensagem. Tente novamente.');
        }
    }).catch(error => {
        alert('Erro ao enviar a mensagem. Tente novamente.');
    });
});