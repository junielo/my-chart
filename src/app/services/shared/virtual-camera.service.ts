import { computed, Injectable } from '@angular/core';
import { Bounds } from 'src/app/properties/Bounds';

@Injectable({
  providedIn: 'root',
})
export class VirtualCameraService {
  
  camBounds: Bounds = new Bounds(200, 200, 100, 100);
  screenBounds: Bounds = new Bounds(0, 0, 0, 0);
  centerX = this.camBounds.right - this.camBounds.left / 2;
  horizontalZoom = 1;
  verticalZoom = 1;
  horizontalSpace = 10;
  highPrice = 0;
  lowPrice = 0;
  isPriceLocked = false;
  canvasWidth = 0;
  canvasHeight = 0;
}
