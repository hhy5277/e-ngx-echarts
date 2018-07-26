import { NgModule } from '@angular/core';
import { ENgxEChartsDirective } from './e-ngx-echarts.directive';
import { ENgxEchartsService } from './e-ngx-echarts.service';

@NgModule({
	declarations: [ENgxEChartsDirective],
	providers: [ENgxEchartsService],
	exports: [ENgxEChartsDirective]
})
export class ENgxEChartsModule {
}
