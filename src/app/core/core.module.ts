import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './containers/app-component/app.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, LeftSidebarComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
