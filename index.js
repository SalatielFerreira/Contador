// Função encaminhada para o HTML
function contar() {
    let inicio = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

// Alerta de dados
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        window.alert('[SUCESSO] Contagem concluída!')
        // Contagem dos Numeros
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f) {
            //Contagem Crescente
            for(let c = i ; c <= f ; c += p)
                res.innerHTML += `${c} \u{27A1} `
        } else {
            //Contagem Regressiva
            for(let c = i ; c >= f ; c -= p)
                res.innerHTML += `${c} \u{27A1} `
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
