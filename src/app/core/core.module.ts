import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './containers/app-component/app.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';

@NgModule({
  declarations: [AppComponent, LeftSidebarComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
