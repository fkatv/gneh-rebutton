import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rebutton',
  templateUrl: './rebutton.component.html',
  styleUrls: ['./rebutton.component.css']
})
export class RebuttonComponent {
  @ViewChild("svg") svg!: ElementRef;
  @Input() options!: {
    texto: string,
    click: any,
    contexto: any,
    color: string,
    uppercase: boolean,
    svg: string|null; //assets/img/ + svg
  };

  ngOnInit(): void {
      if (!this.options.click) {
        this.options.click = this.useless;
      }
  }

  useless(some: any) { }

  isUppercase(){
    return this.options?.uppercase;
  }

  isSecondary(): boolean {
    return this.options?.color == 'secondary';
  }

  isPrimary(): boolean {
    return this.options?.color == 'primary';
  }

  isSecondaryOutlined(): boolean {
    return this.options?.color == 'secondary outlined';
  }

  isPrimaryOutlined(): boolean {
    return this.options?.color == 'primary outlined';
  }
}
