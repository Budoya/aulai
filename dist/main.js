var naves = [];
function criarNave(nave) {
    naves.push(nave);
}
var novaNave = {
    nomeNave: "Nave Espacial 1",
    piloto: "João da Silva",
    limiteTripulacao: 10,
    tripulacao: ["João da Silva", "Maria Oliveira"],
    emMissao: false
};
var segundanave = {
    nomeNave: "Nave 2",
    piloto: "ze",
    limiteTripulacao: 3,
    tripulacao: ["João da Silva", "Maria Oliveira", "rodnei"],
    emMissao: false
};
criarNave(novaNave);
criarNave(segundanave);
console.log(naves);
function adicionarMembro(membro, nomeNave) {
    var naveIndex = naves.findIndex(function (nave) { return nave.nomeNave === nomeNave; });
    if (naveIndex !== -1) {
        var nave = naves[naveIndex];
        if (nave.limiteTripulacao > nave.tripulacao.length) {
            nave.tripulacao.push(membro);
            console.log("Membro \"".concat(membro, "\" adicionado \u00E0 nave \"").concat(nomeNave, "\"."));
        }
        else {
            console.log("Limite de tripula\u00E7\u00E3o da nave \"".concat(nomeNave, "\" atingido!"));
        }
    }
    else {
        console.log("Nave \"".concat(nomeNave, "\" n\u00E3o encontrada."));
    }
}
/*
adicionarMembro("fulano","Nave Espacial 1")
console.log("adicionado memrbo fulano")
console.log(naves)*/
function iniciarmissao(nomeNave) {
    var naveIndex = naves.findIndex(function (nave) { return nave.nomeNave === nomeNave; });
    if (naveIndex !== -1) {
        var nave = naves[naveIndex];
        if (nave.tripulacao.length > nave.limiteTripulacao / 3) {
            if (nave.emMissao !== true) {
                console.log("enviando em missao!!!");
                console.log("");
                console.log("");
                console.log("");
                console.log("");
                console.log("");
                nave.emMissao = true;
            }
            else {
                console.log("ela ja esta em missao");
            }
        }
        else {
            console.log("necessida de mais tripulacao");
        }
    }
    else {
        console.log("lhe falta index");
    }
}
iniciarmissao("Nave 2");
iniciarmissao("Nave 2");
