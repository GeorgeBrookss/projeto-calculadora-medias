const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji feliz">';
const imgReprovado ='<img src="./images/reprovado.png"alt="emoji triste">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">reprovado</span>';
const notaMinima = parseFloat(prompt("digite a nota minima: "));


let linhas = '';
form.addEventListener('submit', function (e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMedia()
});


function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNota = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`a atividade: ${inputNomeAtividade.value} ja esta inserida`);
    }else{

    

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNota.value));


    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNota.value}</td>`;
    linha += `<td>${inputNota.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNota.value = ''  

    atualizaTabela()

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas


}

    function atualizaMedia(){
        const mediafinal = calculaMediaFinal();

        document.getElementById('media-final').innerHTML = mediafinal;
        document.getElementById('media-final-resultado').innerHTML = mediafinal >= notaMinima ? spanAprovado : spanReprovado;

    
        

    }
    function calculaMediaFinal(){
        let somaDasNotas = 0;

        for (let i = 0; i< notas.length; i++){
            somaDasNotas += notas[i];
        }

        return somaDasNotas / notas.length;
    }   