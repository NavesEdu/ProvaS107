import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid'; //importando a biblioteca uuid
@Injectable() // para informar que essa classe pode ser injetada em nossos módulos
export class UniqueIdService {

  //metodo para contar o numero de ID´s gerados
  private numberOfGeneratedIds = 0;
  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

//metodo para colocar um prefixo nesse ID
  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix || !this.validId.test(prefix)) { // se não tiver prefixo vai falhar lançando exceção ou se não passou no teste
      throw new Error('Prefixo não pode ser vazio');
    }
    const uniqueId = this.generateUniqueId(); // vai ser o resultado de generateUniqueId
    this.numberOfGeneratedIds++; // vai incrementar os ids
    return `${prefix}-${uniqueId}`;// ta retornando a concatenação do profixo com o ID unico gerado
  }

  //retorno um numero total de IdS UNICOS GERADOS
  public getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  //retornando o Id gerado
  private generateUniqueId(): string {
    return uuidv4();
  }
}
