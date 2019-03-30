import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) {

  }

  public dados = [];

  public carregaClientes(callback) {
    return this.httpClient.get(`https://alfa2019-mg.firebaseio.com/Clientes.json`)
    .toPromise().then(response => {
      this.dados = [];
      Object.keys(response).forEach(key => {
        this.dados.push({
          id: key,
          nome: response[key].nome,
          email: response[key].email
        });
        callback();
      });
    }).catch(
      error => console.log("ERROR", error)
    );
  }
}
