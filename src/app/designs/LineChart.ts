import { effect } from "@angular/core";
import { OHLCV } from "../properties/OHLCV";
import { ETHUSDService } from "../services/data/ETHUSD.service";
import { VirtualCameraService } from "../services/shared/virtual-camera.service";
import { Bounds } from "../properties/Bounds";

export class LineChart {
    
    
    constructor(
        private ETHUSDService: ETHUSDService,
        private camera: VirtualCameraService,
        private canvas: CanvasRenderingContext2D,
        private chartBounds: Bounds
        
    ) {}

    onCompute() {
        
    }

    onDraw() {
        console.log('Drawing line chart...' + this.camera.canvasWidth);
        // Draw the background
        this.canvas.fillStyle = 'lightblue'; // Set background color
        this.canvas.fillRect(50, 0, this.camera.canvasWidth - 100, this.camera.canvasHeight); // Fill the background
    }

}