import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsComponent } from './graphics/graphics.component';
import { CardComponent } from './card/card.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home.component';
import {ModalsModule} from '../../modals/modals.module';


@NgModule({
  declarations: [
      HomeComponent,
      CardComponent,
      GraphicsComponent,
      ListUsersComponent,
      SidebarComponent
  ],
  imports: [
    CommonModule,
    ModalsModule,
  ],
})
export class HomeModule { }
