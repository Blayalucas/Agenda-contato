const form = document.getElementById('agenda-contato');
const imgsinaltelefone = '<img src="./images/telefone.png" alt= "sinal telefone" />';

let linhas = '';
form.addEventListener('submit', function (e){
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-completo');
    const inputNumberContato = document.getElementById('telefone');


    let linha = '<tr>';
    linha +=`<td>${inputNomeContato.value}</td>`;
    linha +=`<td>${inputNumberContato.value}</td>`;
    linha +=`</tr>`;

    linhas+=linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    alert(`Contato: ${inputNomeContato.value} - Telefone: ${inputNumberContato.value} - Gravado`);
});

