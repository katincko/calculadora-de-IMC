// Adiciona um listener ao formulário para processar o cálculo sem recarregar a página
document.getElementById('imc-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio padrão do formulário
  
    // Obtém os valores dos campos, converte para número
    const peso = parseFloat(document.getElementById('peso').value.replace(',', '.'));
    const altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));
    const res = document.getElementById('resultado');
    
    // Validação: garante que ambos os campos têm valores válidos e positivos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        res.innerHTML = `
        <span class="result-erro">
            Por favor, insira valores válidos para peso e altura.
        </span>`;
        return;
    }
      
    // Cálculo do IMC
    const imc = peso / (altura * altura);
  
    // Categorização do IMC de acordo com padrões reconhecidos
    let categoria = '';
    if (imc < 18.5) categoria = 'Abaixo do peso';
    else if (imc < 25) categoria = 'Peso normal';
    else if (imc < 30) categoria = 'Sobrepeso';
    else if (imc < 35) categoria = 'Obesidade grau 1';
    else if (imc < 40) categoria = 'Obesidade grau 2';
    else categoria = 'Obesidade grau 3';
  
    // Exibe o resultado de forma clara e destacada para o usuário
    res.innerHTML = `<span class="result-ok">Seu IMC é <b>${imc.toFixed(2)}</b><br>${categoria}</span>`;
  });