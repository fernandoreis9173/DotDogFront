import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public menuService: MenuService){
  }

  ngOnInit(){
    this.menuService.menuSelecionado = 1;
  }
}
