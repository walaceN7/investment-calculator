import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { InvestmentResultComponent } from './components/investment-result/investment-result.component';
import { UserInputComponent } from './components/user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
})
export class AppComponent {}
