import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@dogemon/api-interfaces';

@Component({
  selector: 'dogemon-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dogemon';
}
