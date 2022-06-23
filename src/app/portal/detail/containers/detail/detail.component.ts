import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent {

  constructor(private router: Router) { }

  goBack(): void {
    this.router.navigate(['/news'])
  }
}
