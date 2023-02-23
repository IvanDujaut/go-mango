/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'goMango'

  constructor(private router: Router) {}

  goTo(route: string) {
    this.router.navigate([route])
  }

  open(id: string) {
    const section = document.getElementById(id)
    section!.style.display = 'flex'
  }

  close(id: string) {
    const section = document.getElementById(id)
    section!.style.display = 'none'
  }
}

