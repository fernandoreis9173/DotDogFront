import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class MenuService {
    menuSelecionado: number;

    constructor() {
        this.menuSelecionado = 0;
    }
    
}
