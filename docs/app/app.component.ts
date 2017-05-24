/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';
import { List } from 'immutable';

import { NgaMenuService, NgaMenuItem } from '../../src/framework/theme';
import { NgdAppService } from './app.service';

import 'style-loader!./app.theme.default.scss';

@Component({
  selector: 'ngd-app-root',
  template: `
    <nga-layout>
      <nga-layout-header></nga-layout-header>
      <nga-sidebar left>
        <nga-menu [items]="menuItems" tag="leftMenu" inverse></nga-menu>
      </nga-sidebar>
      <nga-layout-column>
        <router-outlet></router-outlet>
      </nga-layout-column>
    </nga-layout>
  `,
})
export class NgdAppComponent {

  structure: any;
  menuItems: List<NgaMenuItem> = List([]);

  constructor(private service: NgdAppService, private menuService: NgaMenuService) {
  }

  ngOnInit() {
    this.structure = this.service.getPreparedStructure();
    this.menuItems = this.service.getPreparedMenu();

    //console.log(this.menuItems);
    //this.menuService.addItems(this.menuItems, 'leftMenu');
  }
}
