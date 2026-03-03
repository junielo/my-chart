import { ElementRef } from "@angular/core";
import { ETHUSDService } from "../services/data/ETHUSD.service";

export abstract class MainChartBuilder {

    protected canvas2D!: CanvasRenderingContext2D;
    protected canvasRef!: ElementRef<HTMLCanvasElement>;

    protected rescaleCanvas() {
        const canvas = this.canvas.nativeElement;
        // const dpr = window.devicePixelRatio || 1;

        // canvas.width = canvas.clientWidth * dpr;
        // canvas.height = canvas.clientHeight * dpr;

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        // Scale the drawing context
        // this.drawShape.scale(dpr, dpr);

        const windowWidth = canvas.clientWidth;
        const windowHeight = canvas.clientHeight;

        this.camera.resetBounds();
        if(windowWidth > windowHeight) {
            const ratio = windowWidth / windowHeight;
            const newWidth = ((this.camera.defaultWidth * ratio));
            this.camera.setWidth(newWidth);
        }
        else if (windowWidth < windowHeight) {
            const ratio = windowHeight / windowWidth;
            const newHeight = ((this.camera.defaultHeight * ratio));
            this.camera.setHeight(newHeight);
        }
    }

    private draw() {

    }

    // 1st: Position the camera 
    abstract setCameraXPosition(): void

    abstract getRangeData(): void

    abstract getCameraPriceRange(): void

}