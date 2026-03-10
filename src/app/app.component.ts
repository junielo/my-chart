import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MainChartBuilder } from './extensions/MainChartBuilder';
import { VirtualCameraService } from './services/shared/virtual-camera.service';
import { ETHUSDService } from './services/data/ETHUSD.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends MainChartBuilder {

  @ViewChild('canvas') canvasHTMLRef!: ElementRef<HTMLCanvasElement>;

  constructor(
    private virtualCameraService: VirtualCameraService,
    private ETHUSDService: ETHUSDService
  ) {
    super();
    this.camera = virtualCameraService;
    this.mETHUSDService = ETHUSDService;
  }

  ngAfterViewInit() {
    this.canvasRef = this.canvasHTMLRef;
    this.canvas2D = this.canvasHTMLRef.nativeElement.getContext('2d') as CanvasRenderingContext2D;
    this.scaleCanvas();
  }

  @HostListener('window:resize')
  onResize() {
    this.scaleCanvas();
  }

  override setCameraXPosition(): void {
    throw new Error('Method not implemented.');
  }
  override getRangeData(): void {
    throw new Error('Method not implemented.');
  }
  override getCameraPriceRange(): void {
    throw new Error('Method not implemented.');
  }

}
