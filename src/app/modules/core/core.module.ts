import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {RouterModule} from '@angular/router';
import {SidebarComponent} from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule {
}
