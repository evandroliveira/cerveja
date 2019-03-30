import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  
  dadosClientes = [];
  

  constructor(private service: ClienteService) {

  }

  ngOnInit(): void {
    this.atualizar();
  }

  atualizar() {
    this.service.carregaClientes(()=>this.dadosClientes=this.service.dados);
  }
}
