import { UniqueIdService } from './unique-id-service';

//estrura teste
describe(UniqueIdService.name, () => { // o artefato que quero testar

  let service: UniqueIdService = null;// criando uma variavel global

  //instância do servico que vai usar para todos os testes eles independentes
  beforeEach(() => { // var ser chamado antes de cada IT
    service = new UniqueIdService();//niva instacnia de uniquueID
  });

  // testando se está funcionando o numero de Id certo quando solicitado
  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');//chamei a primeira
    service.generateUniqueIdWithPrefix('app');//chamei a segunda
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);// espero que deve ser 2
  });

  //testanta se meu id vai vir com o prefixo esperado
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app'); //pedir pra gerar um ID
    expect(id.startsWith('app-')).toBeTrue(); // que meu id comece com um prefixo app seja verdadeiro
  });

  //testando se meu ID não vai repetir
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    não deve gearar IDs duplicados quando chamado multiplas vezes`, () => {
    const ids = new Set(); //criando um conjuntos de ID o set não aceitas elementos duplicados e quando tem ele ignora esse elemento
    for (let i = 0; i < 50; i++) { //gerando vários ID´s para verificar se não repete
      ids.add(service.generateUniqueIdWithPrefix('app')); // adicionando no set pelo add o metodo que gera o ID
    }
    // se não tiver adicionado vai ser menor que 50
    expect(ids.size).toBe(50);// espero que o tamanho seja igual 50
  });


  // se passar algo diferente (nulo, undefined, numero) do que esperado
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    devera lançar exceção quando chamado e estiver vazio`, () => {
      const emptyValues = [null, undefined, '', '0', '1'];
      emptyValues.forEach(emptyValue => {
        expect(() => service.generateUniqueIdWithPrefix(emptyValue)) //quando o metodo for excecão tem que ser chamado dentro de uma função
          .withContext(`Empty value: ${emptyValue}`)// withContext da contexto pra ver o que da fazendo falhar
          .toThrow();
      });
    });
});
