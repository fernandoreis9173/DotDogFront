// import { Component } from '@angular/core';
// import { MenuService } from '../../services/menu.service';

// export interface PeriodicElement {
//   name: string;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {name: 'Beryllium', weight: 9.0122, symbol: 'Be'}
// ];

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   displayedColumns: string[] = [ 'name', 'weight', 'symbol'];
//   dataSource = ELEMENT_DATA;
//   constructor(public menuService: MenuService){
//   }

 

//   ngOnInit(){
//     this.menuService.menuSelecionado = 1;
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dog1 = './assets/images/1-img-dog.png';
  dog2 = './assets/images/2-img-dog.png';
  dog3 = './assets/images/3-img-dog.png';
  dog4 = './assets/images/4-img-dog.png';
  dog5 = './assets/images/5-img-dog.png';
  dog6 = './assets/images/6-img-dog.png';
  dog7 = './assets/images/6-img-dog.png';
}
