//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Entrada de dados. O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
const totalSalas = parseInt(gets());
//Aqui temos uma demonstração de array com valores já predefinidos:
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

//Forma de loop para percorrer cada sala da masmorra:
for (let sala = 1; sala <= totalSalas; sala++) {
    
//Utiliza o .includes() para verificar se um número está presente nos arrays:
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

//Implementa uma condição necessária para verificar e exibir se há tesouro na sala e se há montro na sala:
    if ( salasComTesouro, temTesouro) {
        print("Tesouro na sala " + sala + "!");
    } else if ( salasComMonstro, temMonstro ) {
        print("Monstro na sala " + sala + "!");
    }
}
