import { Component } from '@angular/core';
import { Tooltip, initTE } from 'tw-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = "Este es el título";
  ngOnInit() {
    initTE({ Tooltip });
  }

  cambiaTexto (context: any) {
    context.title = "Hola! :D";
  }
}