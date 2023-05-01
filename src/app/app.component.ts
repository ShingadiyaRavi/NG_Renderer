import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Renderer';

  /*  This is used for the render the document and change on it using rendere so in constructor we have define it. */
  constructor(private renderer:Renderer2){}
  @ViewChild('rendererData',{read:ElementRef}) rendererDataRef!:ElementRef;

  ngAfterViewInit(){

    /*
      This is renderer used for the change style and property add to the element using renderer.
      This is a proper way to add property and style etc for the direct dom element.
    */
    this.renderer.setStyle(this.rendererDataRef.nativeElement,'backgroundColor','blue');
    this.renderer.setStyle(this.rendererDataRef.nativeElement,'color','#fff');
    this.renderer.setProperty(this.rendererDataRef.nativeElement,'title','This is a Header(h1) tag');
  }
}
