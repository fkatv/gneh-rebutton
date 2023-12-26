import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = "Este es el título";

  cambiaTexto (context: any) {
    context.title = "Hola! :D";
  }
}
