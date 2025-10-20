import { CurrencyPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { InvestmentService } from '../../services/investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  constructor(private investintService: InvestmentService) {}

  results = computed(() => this.investintService.resultData());
}
