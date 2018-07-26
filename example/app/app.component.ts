import { Component } from '@angular/core';
import { ENgxEchartsService } from '../../src';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	options = {
		title: {
			text: '堆叠区域图'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		legend: {
			data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
		},
		toolbox: {
			feature: {
				saveAsImage: {}
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		series: [
			{
				name: '邮件营销',
				type: 'line',
				stack: '总量',
				areaStyle: {normal: {}},
				data: [120, 132, 101, 134, 90, 230, 210]
			},
			{
				name: '联盟广告',
				type: 'line',
				stack: '总量',
				areaStyle: {normal: {}},
				data: [220, 182, 191, 234, 290, 330, 310]
			},
			{
				name: '视频广告',
				type: 'line',
				stack: '总量',
				areaStyle: {normal: {}},
				data: [150, 232, 201, 154, 190, 330, 410]
			},
			{
				name: '直接访问',
				type: 'line',
				stack: '总量',
				areaStyle: {normal: {}},
				data: [320, 332, 301, 334, 390, 330, 320]
			},
			{
				name: '搜索引擎',
				type: 'line',
				stack: '总量',
				label: {
					normal: {
						show: true,
						position: 'top'
					}
				},
				areaStyle: {normal: {}},
				data: [820, 932, 901, 934, 1290, 1330, 1320]
			}
		]
	};

	constructor(public es: ENgxEchartsService) {
		es.echarts.registerTheme('wonderland', {
				'color': [
					'#4ea397',
					'#22c3aa',
					'#7bd9a5',
					'#d0648a',
					'#f58db2',
					'#f2b3c9'
				],
				'backgroundColor': 'rgba(255,255,255,0)',
				'textStyle': {},
				'title': {
					'textStyle': {
						'color': '#666666'
					},
					'subtextStyle': {
						'color': '#999999'
					}
				},
				'line': {
					'itemStyle': {
						'normal': {
							'borderWidth': '2'
						}
					},
					'lineStyle': {
						'normal': {
							'width': '3'
						}
					},
					'symbolSize': '8',
					'symbol': 'emptyCircle',
					'smooth': false
				},
				'radar': {
					'itemStyle': {
						'normal': {
							'borderWidth': '2'
						}
					},
					'lineStyle': {
						'normal': {
							'width': '3'
						}
					},
					'symbolSize': '8',
					'symbol': 'emptyCircle',
					'smooth': false
				},
				'bar': {
					'itemStyle': {
						'normal': {
							'barBorderWidth': 0,
							'barBorderColor': '#ccc'
						},
						'emphasis': {
							'barBorderWidth': 0,
							'barBorderColor': '#ccc'
						}
					}
				},
				'pie': {
					'itemStyle': {
						'normal': {
							'borderWidth': 0,
							'borderColor': '#ccc'
						},
						'emphasis': {
							'borderWidth': 0,
							'borderColor': '#ccc'
						}
					}
				},
				'scatter': {
					'itemStyle': {
						'normal': {
							'borderWidth': 0,
							'borderColor': '#ccc'
						},
						'emphasis': {
							'borderWidth': 0,
							'borderColor': '#ccc'
						}
					}
				},
				'boxplot': {
					'itemStyle': {
						'normal': {
							'borderWidth': 0,
							'borderColor': '#ccc'
						},
						'emphasis': {
							'borderWidth': 0,
							'borderColor': '#ccc'
						}
					}
				},
				'parallel': {
					'itemStyle': {
						'normal': {
							'borderWidth': 0,
							'borderColor': '#ccc'
						},
						'emphasis': {
							'borderWidth': 0,
							'borderColor': '#ccc'
						}
					}
				},
				'sankey': {
					'itemStyle': {
						'normal': {
							'borderWidth': 0,
							'borderColor': '#ccc'
						},
						'emphasis': {
							'borderWidth': 0,
							'borderColor': '#ccc'
						}
					}
				},
				'funnel': {
					'itemStyle': {
						'normal': {
							'borderWidth': 0,
							'borderColor': '#ccc'
						},
						'emphasis': {
							'borderWidth': 0,
							'borderColor': '#ccc'
						}
					}
				},
				'gauge': {
					'itemStyle': {
						'normal': {
							'borderWidth': 0,
							'borderColor': '#ccc'
						},
						'emphasis': {
							'borderWidth': 0,
							'borderColor': '#ccc'
						}
					}
				},
				'candlestick': {
					'itemStyle': {
						'normal': {
							'color': '#d0648a',
							'color0': 'transparent',
							'borderColor': '#d0648a',
							'borderColor0': '#22c3aa',
							'borderWidth': '1'
						}
					}
				},
				'graph': {
					'itemStyle': {
						'normal': {
							'borderWidth': 0,
							'borderColor': '#ccc'
						}
					},
					'lineStyle': {
						'normal': {
							'width': '1',
							'color': '#cccccc'
						}
					},
					'symbolSize': '8',
					'symbol': 'emptyCircle',
					'smooth': false,
					'color': [
						'#4ea397',
						'#22c3aa',
						'#7bd9a5',
						'#d0648a',
						'#f58db2',
						'#f2b3c9'
					],
					'label': {
						'normal': {
							'textStyle': {
								'color': '#ffffff'
							}
						}
					}
				},
				'map': {
					'itemStyle': {
						'normal': {
							'areaColor': '#eeeeee',
							'borderColor': '#999999',
							'borderWidth': 0.5
						},
						'emphasis': {
							'areaColor': 'rgba(34,195,170,0.25)',
							'borderColor': '#22c3aa',
							'borderWidth': 1
						}
					},
					'label': {
						'normal': {
							'textStyle': {
								'color': '#28544e'
							}
						},
						'emphasis': {
							'textStyle': {
								'color': 'rgb(52,158,142)'
							}
						}
					}
				},
				'geo': {
					'itemStyle': {
						'normal': {
							'areaColor': '#eeeeee',
							'borderColor': '#999999',
							'borderWidth': 0.5
						},
						'emphasis': {
							'areaColor': 'rgba(34,195,170,0.25)',
							'borderColor': '#22c3aa',
							'borderWidth': 1
						}
					},
					'label': {
						'normal': {
							'textStyle': {
								'color': '#28544e'
							}
						},
						'emphasis': {
							'textStyle': {
								'color': 'rgb(52,158,142)'
							}
						}
					}
				},
				'categoryAxis': {
					'axisLine': {
						'show': true,
						'lineStyle': {
							'color': '#cccccc'
						}
					},
					'axisTick': {
						'show': false,
						'lineStyle': {
							'color': '#333'
						}
					},
					'axisLabel': {
						'show': true,
						'textStyle': {
							'color': '#999999'
						}
					},
					'splitLine': {
						'show': true,
						'lineStyle': {
							'color': [
								'#eeeeee'
							]
						}
					},
					'splitArea': {
						'show': false,
						'areaStyle': {
							'color': [
								'rgba(250,250,250,0.05)',
								'rgba(200,200,200,0.02)'
							]
						}
					}
				},
				'valueAxis': {
					'axisLine': {
						'show': true,
						'lineStyle': {
							'color': '#cccccc'
						}
					},
					'axisTick': {
						'show': false,
						'lineStyle': {
							'color': '#333'
						}
					},
					'axisLabel': {
						'show': true,
						'textStyle': {
							'color': '#999999'
						}
					},
					'splitLine': {
						'show': true,
						'lineStyle': {
							'color': [
								'#eeeeee'
							]
						}
					},
					'splitArea': {
						'show': false,
						'areaStyle': {
							'color': [
								'rgba(250,250,250,0.05)',
								'rgba(200,200,200,0.02)'
							]
						}
					}
				},
				'logAxis': {
					'axisLine': {
						'show': true,
						'lineStyle': {
							'color': '#cccccc'
						}
					},
					'axisTick': {
						'show': false,
						'lineStyle': {
							'color': '#333'
						}
					},
					'axisLabel': {
						'show': true,
						'textStyle': {
							'color': '#999999'
						}
					},
					'splitLine': {
						'show': true,
						'lineStyle': {
							'color': [
								'#eeeeee'
							]
						}
					},
					'splitArea': {
						'show': false,
						'areaStyle': {
							'color': [
								'rgba(250,250,250,0.05)',
								'rgba(200,200,200,0.02)'
							]
						}
					}
				},
				'timeAxis': {
					'axisLine': {
						'show': true,
						'lineStyle': {
							'color': '#cccccc'
						}
					},
					'axisTick': {
						'show': false,
						'lineStyle': {
							'color': '#333'
						}
					},
					'axisLabel': {
						'show': true,
						'textStyle': {
							'color': '#999999'
						}
					},
					'splitLine': {
						'show': true,
						'lineStyle': {
							'color': [
								'#eeeeee'
							]
						}
					},
					'splitArea': {
						'show': false,
						'areaStyle': {
							'color': [
								'rgba(250,250,250,0.05)',
								'rgba(200,200,200,0.02)'
							]
						}
					}
				},
				'toolbox': {
					'iconStyle': {
						'normal': {
							'borderColor': '#999999'
						},
						'emphasis': {
							'borderColor': '#666666'
						}
					}
				},
				'legend': {
					'textStyle': {
						'color': '#999999'
					}
				},
				'tooltip': {
					'axisPointer': {
						'lineStyle': {
							'color': '#cccccc',
							'width': 1
						},
						'crossStyle': {
							'color': '#cccccc',
							'width': 1
						}
					}
				},
				'timeline': {
					'lineStyle': {
						'color': '#4ea397',
						'width': 1
					},
					'itemStyle': {
						'normal': {
							'color': '#4ea397',
							'borderWidth': 1
						},
						'emphasis': {
							'color': '#4ea397'
						}
					},
					'controlStyle': {
						'normal': {
							'color': '#4ea397',
							'borderColor': '#4ea397',
							'borderWidth': 0.5
						},
						'emphasis': {
							'color': '#4ea397',
							'borderColor': '#4ea397',
							'borderWidth': 0.5
						}
					},
					'checkpointStyle': {
						'color': '#4ea397',
						'borderColor': 'rgba(60,235,210,0.3)'
					},
					'label': {
						'normal': {
							'textStyle': {
								'color': '#4ea397'
							}
						},
						'emphasis': {
							'textStyle': {
								'color': '#4ea397'
							}
						}
					}
				},
				'visualMap': {
					'color': [
						'#d0648a',
						'#22c3aa',
						'#adfff1'
					]
				},
				'dataZoom': {
					'backgroundColor': 'rgba(255,255,255,0)',
					'dataBackgroundColor': 'rgba(222,222,222,1)',
					'fillerColor': 'rgba(114,230,212,0.25)',
					'handleColor': '#cccccc',
					'handleSize': '100%',
					'textStyle': {
						'color': '#999999'
					}
				},
				'markPoint': {
					'label': {
						'normal': {
							'textStyle': {
								'color': '#ffffff'
							}
						},
						'emphasis': {
							'textStyle': {
								'color': '#ffffff'
							}
						}
					}
				}
			});
	}

	onEChartsReady(evt: any) {
		console.log(evt);
	}

	onChartClick(evt: any) {
		console.log(evt);
	}
}
