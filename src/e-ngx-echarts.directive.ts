import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ENgxEchartsService } from './e-ngx-echarts.service';

@Directive({
	selector: '[echarts]',
	exportAs: 'eNgxECharts'
})
export class ENgxEChartsDirective implements OnInit, OnDestroy {
	echartsIntance: any;

	@Input() options: any = {};
	@Input() theme: any;
	@Input() initOpts: any;
	@Output() ready: EventEmitter<any> = new EventEmitter<any>();
	@Output() chartClick: EventEmitter<any> = new EventEmitter<any>();
	@Output() chartDblClick: EventEmitter<any> = new EventEmitter<any>();
	@Output() chartMouseDown: EventEmitter<any> = new EventEmitter<any>();
	@Output() chartMouseMove: EventEmitter<any> = new EventEmitter<any>();
	@Output() chartMouseUp: EventEmitter<any> = new EventEmitter<any>();
	@Output() chartMouseOver: EventEmitter<any> = new EventEmitter<any>();
	@Output() chartMouseOut: EventEmitter<any> = new EventEmitter<any>();
	@Output() chartDataZoom: EventEmitter<any> = new EventEmitter<any>();

	constructor(public el: ElementRef, public es: ENgxEchartsService) {
	}

	ngOnInit() {
		this.echartsIntance = this.es.init(this.el.nativeElement, this.theme, this.initOpts);
		this.echartsIntance.setOption(this.options);
		this.initEvents();
		this.ready.emit(this);
	}

	ngOnDestroy() {
		this.es.dispose(this.el.nativeElement);
	}

	initEvents() {
		this.echartsIntance.on('click', (params: any) => {
			this.chartClick.emit(params);
		});
		this.echartsIntance.on('dblclick', (params: any) => {
			this.chartDblClick.emit(params);
		});
		this.echartsIntance.on('mousedown', (params: any) => {
			this.chartMouseDown.emit(params);
		});
		this.echartsIntance.on('mousemove', (params: any) => {
			this.chartMouseMove.emit(params);
		});
		this.echartsIntance.on('mouseup', (params: any) => {
			this.chartMouseUp.emit(params);
		});
		this.echartsIntance.on('mouseover', (params: any) => {
			this.chartMouseOver.emit(params);
		});
		this.echartsIntance.on('mouseout', (params: any) => {
			this.chartMouseOut.emit(params);
		});
		this.echartsIntance.on('dataZoom', (params: any) => {
			this.chartDataZoom.emit(params);
		});
	}
}
