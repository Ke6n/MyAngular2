import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 /* template:`<table border="1">
  <tr *ngFor="let trow of trs"> <td>{{cola}},{{trow}}</td> <td>{{cola+1}},{{trow}}</td> </tr>
</table>`,*/
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cola = 1;
  trs = [1,2,3,4]
}
