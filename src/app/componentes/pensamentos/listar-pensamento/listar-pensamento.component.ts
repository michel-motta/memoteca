import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
    conteudo: 'Olá!',
    autoria: 'Maria',
    modelo: 'modelo2'
    },
    {
      conteudo: 'Tchau',
      autoria: 'José',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae nisi sed ligula iaculis sodales. In sed erat at orci consequat rhoncus. Vivamus bibendum finibus metus sed placerat. Suspendisse non maximus diam. Phasellus et condimentum nunc. Duis tristique, eros non elementum euismod, quam orci dignissim diam, at cursus urna odio a ipsum. Nunc risus libero, rutrum et hendrerit eget, rutrum non metus. Nunc eu ultrices ex, id egestas metus. Integer lobortis feugiat dui. Morbi in suscipit mi.',
      autoria: 'João',
      modelo: 'modelo1'
    },
]

  constructor() {}

  ngOnInit(): void {}
}
