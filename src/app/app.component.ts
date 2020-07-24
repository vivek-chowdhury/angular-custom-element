import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showDialog: boolean;
  title = 'angular-custom-element';
  popupTitle = 'Dynamic Content';
  content = `By re-exporting CommonModule and FormsModule, any other module that imports this SharedModule, gets access to directives like NgIf and NgFor from CommonModule and can bind to component properties with [(ngModel)], a directive in the FormsModule.
  Even though the components declared by SharedModule might not bind with [(ngModel)] and there may be no need for SharedModule to import FormsModule, SharedModule can still export FormsModule without listing it among its imports. This way, you can give other modules access to FormsModule without having to import it directly into the @NgModule decorator.`;

  showDialogBox(): void {
    this.showDialog = true;
  }

  handleSaveClicked(): void {
    this.showDialog = false;
  }
}
