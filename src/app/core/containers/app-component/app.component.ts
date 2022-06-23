import { SidebarsService } from './../../services/sidebars.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  $rightSidebarStatus: Observable<number> | undefined;

  constructor(private rightSidebarService: SidebarsService) {}

  ngOnInit(): void {
    this.$rightSidebarStatus = this.rightSidebarService.getSidebarStatus();
  }
}
