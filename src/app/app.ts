import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './view/layout/footer/footer';
import { Header } from './view/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
