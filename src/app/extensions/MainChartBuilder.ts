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
        const canvas = this.canvasRef.nativeElement;
        this.camera.windowWidth = canvas.clientWidth;
        this.camera.windowHeight = canvas.clientHeight;

        this.chartBounds.left.apply(200);
        this.chartBounds.right.apply(this.camera.windowWidth - 200);
        this.chartBounds.top.apply(0);
        this.chartBounds.bottom.apply(this.camera.windowHeight - 200);

        this.initialize();
        this.lineChart.onCompute();
        this.lineChart.onDraw();
    }

    protected initialize() {
        if (!this.lineChart) {
            this.lineChart = new LineChart(this.mETHUSDService, this.camera, this.canvas2D, this.chartBounds);
        }
    }

    // 1st: Position the camera 
    abstract setCameraXPosition(): void

    abstract getRangeData(): void

    abstract getCameraPriceRange(): void

}