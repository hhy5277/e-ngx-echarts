import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ENgxEChartsModule } from '../../src';

@NgModule({
	imports: [
		BrowserModule,
		ENgxEChartsModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
