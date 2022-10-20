import { Component, OnInit } from '@angular/core';
import { Produto } from '../interface/produto';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  produtos: Produto[] = [];
  formularioCadastro = new FormGroup({
    logo: new FormControl(''),
    nome: new FormControl(''),
    localizacao: new FormControl(''),
    avaliacao: new FormControl(''),
    contato: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }
  enviar(){
    console.log(this.formularioCadastro.value);
  }
}
