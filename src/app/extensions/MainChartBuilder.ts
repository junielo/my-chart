import { ElementRef } from "@angular/core";
import { ETHUSDService } from "../services/data/ETHUSD.service";
import { VirtualCameraService } from "../services/shared/virtual-camera.service";
import { Bounds } from "../properties/Bounds";
import { OHLCV } from "../properties/OHLCV";
import { LineChart } from "../designs/LineChart";

export abstract class MainChartBuilder {

    private chartBounds: Bounds = new Bounds();
    private priceBounds: Bounds = new Bounds();
    private rangeBounds: Bounds = new Bounds();
    private lineChart!: LineChart;
    protected canvas2D!: CanvasRenderingContext2D;
    protected canvasRef!: ElementRef<HTMLCanvasElement>;
    protected camera!: VirtualCameraService;
    protected mETHUSDService!: ETHUSDService

    protected scaleCanvas(): void {
        console.log('Resizing canvas...');
        const canvas = this.canvasRef.nativeElement;
        this.camera.canvasWidth = canvas.width;
        this.camera.canvasHeight = canvas.height;

        this.canvas2D.clearRect(0, 0, canvas.width, canvas.height);
        this.computeChartPart();
        this.drawChartPart();
    }

    protected initialize() {
        this.scaleCanvas();
        this.lineChart = new LineChart(
            this.mETHUSDService,
            this.camera, 
            this.canvas2D, 
            this.chartBounds
        );
        this.computeChartPart();
        this.drawChartPart();
    }

    private computeChartPart() {

    }

    private drawChartPart() {
        if (!!this.lineChart) {
            this.lineChart.onDraw();
        }
    }

    // 1st: Position the camera 
    abstract setCameraXPosition(): void

    abstract getRangeData(): void

    abstract getCameraPriceRange(): void

}