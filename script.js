// script.js
// Funções em JavaScript baseadas nas aulas 8 e 9
// - mostra data/hora atual
// - confirma o agendamento do pet

// Atualiza o texto com a data e hora atual
function mostrarHoraAtual() {
  const span = document.getElementById('hora-atual');
  if (!span) return;

  const agora = new Date();
  const dataBrasil = agora.toLocaleString('pt-BR'); // formato brasileiro
  span.textContent = dataBrasil;
}

// Função chamada quando o formulário de agendamento for enviado
function confirmarAgendamento(evento) {
  // impede o envio real do formulário (só pra exibir a mensagem)
  evento.preventDefault();

  const nomeCliente = document.getElementById('nomeCliente')?.value || 'Cliente não informado';
  const nomePet = document.getElementById('nomePet')?.value || 'Pet não informado';

  const servico = document.querySelector('input[name="servico"]:checked')?.value || 'Serviço não selecionado';
  const metodo = document.querySelector('input[name="metodo"]:checked')?.value || 'Método não selecionado';

  const data = document.getElementById('dataAgendamento')?.value || 'Data não escolhida';
  const hora = document.getElementById('horaAgendamento')?.value || 'Horário não escolhido';

  const mensagem =
    'Agendamento recebido!\n\n' +
    'Cliente: ' + nomeCliente + '\n' +
    'Pet: ' + nomePet + '\n' +
    'Serviço: ' + servico + '\n' +
    'Forma de atendimento: ' + metodo + '\n' +
    'Dia: ' + data + ' às ' + hora;

  alert(mensagem);
}

// Quando a página terminar de carregar
document.addEventListener('DOMContentLoaded', function () {
  // atualiza a hora atual
  mostrarHoraAtual();

  // conecta o JS com o formulário de agendamento
  const form = document.getElementById('form-agendamento');
  if (form) {
    form.addEventListener('submit', confirmarAgendamento);
  }
});
