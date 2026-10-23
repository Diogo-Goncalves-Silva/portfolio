// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function (event) {
        // Previne o envio padrão do formulário (recarregamento da página)
        event.preventDefault();

        // Captura os valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Validação: Verifica se todos os campos estão preenchidos
        if (nome === '' || email === '' || mensagem === '') {
            exibirMensagem('Por favor, preencha todos os campos antes de enviar.', 'error');
            return;
        }

        // Validação: Verifica se o e-mail possui um formato válido usando expressão regular
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            exibirMensagem('Por favor, informe um endereço de e-mail válido (exemplo: usuario@dominio.com).', 'error');
            return;
        }

        // Simulação do envio bem-sucedido
        exibirMensagem('Mensagem enviada com sucesso! Obrigado pelo contato.', 'success');
        
        // Limpa os campos do formulário após o envio simulado
        contactForm.reset();
    });

    // Função auxiliar para exibir mensagens de feedback na tela
    function exibirMensagem(texto, tipo) {
        formMessage.textContent = texto;
        formMessage.className = 'form-message ' + tipo;

        // Remove a mensagem de feedback após 5 segundos
        setTimeout(function () {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 5000);
    }
});
