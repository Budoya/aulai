interface Nave {
    nomeNave: string;
    piloto: string;
    limiteTripulacao: number;
    tripulacao: string[];
    emMissao: boolean;
  }
  
  let naves: Nave[] = [];
  
  function criarNave(nave: Nave): void {
    naves.push(nave);
  }
  
  const novaNave: Nave = {
    nomeNave: "Nave Espacial 1",
    piloto: "João da Silva",
    limiteTripulacao: 10,
    tripulacao: ["João da Silva", "Maria Oliveira"],
    emMissao: false
  };
  const segundanave : Nave = {
    nomeNave: "Nave 2",
    piloto: "ze",
    limiteTripulacao: 3,
    tripulacao: ["João da Silva", "Maria Oliveira","rodnei"],
    emMissao: false
  }
  
  criarNave(novaNave);
  criarNave(segundanave)
  console.log(naves)

  function adicionarMembro(membro: string, nomeNave: string): void {
    
    const naveIndex = naves.findIndex(nave => nave.nomeNave === nomeNave);
  
    if (naveIndex !== -1) {
      const nave = naves[naveIndex];
  
    
      if (nave.limiteTripulacao > nave.tripulacao.length) {
        nave.tripulacao.push(membro);
        console.log(`Membro "${membro}" adicionado à nave "${nomeNave}".`);
      } else {
        console.log(`Limite de tripulação da nave "${nomeNave}" atingido!`);
      }
    } else {
      console.log(`Nave "${nomeNave}" não encontrada.`);
    }
  }
  
  /*
adicionarMembro("fulano","Nave Espacial 1")  
console.log("adicionado memrbo fulano")
console.log(naves)*/

function iniciarmissao(nomeNave: string) :void {
  const naveIndex = naves.findIndex(nave => nave.nomeNave === nomeNave);
  if(naveIndex !== -1){
    const nave = naves[naveIndex];
    if(nave.tripulacao.length > nave.limiteTripulacao/3 ){
      if(nave.emMissao !== true){
      console.log("enviando em missao!!!")
      console.log("")
      console.log("")
      console.log("")
      console.log("")
      console.log("")
      nave.emMissao = true
      }else{
        console.log("ela ja esta em missao")
      }
    }else{
      console.log("necessida de mais tripulacao")
    }
  }else{
    console.log("lhe falta index")
  }
}
iniciarmissao("Nave 2")
iniciarmissao("Nave 2")
