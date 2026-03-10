import { effect } from "@angular/core";
import { OHLCV } from "../properties/OHLCV";
import { ETHUSDService } from "../services/data/ETHUSD.service";
import { VirtualCameraService } from "../services/shared/virtual-camera.service";
import { Bounds } from "../properties/Bounds";

export class LineChart {

    ETHUSDService: ETHUSDService
    camera: VirtualCameraService;
    
    constructor(
        ETHUSDService: ETHUSDService,
        camera: VirtualCameraService,
        private canvas: CanvasRenderingContext2D,
        private chartBounds: Bounds
        
    ) {
        this.ETHUSDService = ETHUSDService;
        this.camera = camera;
        effect(() => {
            console.log("Camera moved: ", this.camera.centerX())
            this.onCompute();
            this.onDraw();
        });
    }

    onCompute() {
        
    }

    onDraw() {
        this.canvas.clearRect(this.chartBounds.left(), this.chartBounds.top(), this.chartBounds.right() - this.chartBounds.left(), this.chartBounds.bottom() - this.chartBounds.top());
        // Draw the background
        this.canvas.fillStyle = 'lightblue'; // Set background color
        this.canvas.fillRect(this.chartBounds.left(), this.chartBounds.top(), this.chartBounds.right() - this.chartBounds.left(), this.chartBounds.bottom() - this.chartBounds.top());
    }

}