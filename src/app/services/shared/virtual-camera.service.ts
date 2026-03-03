import { Injectable } from '@angular/core';
import { Bounds } from 'src/app/properties/Bounds';

@Injectable({
  providedIn: 'root',
})
export class VirtualCameraService {
  
  bounds: Bounds = new Bounds();
  horizontalZoom = 1;
  verticalZoom = 1;
  horizontalSpace = 10;

  resetBounds() {
    this.bounds.left.apply(0);
    this.bounds.right.apply(0); 
    this.bounds.top.apply(0);
    this.bounds.bottom.apply(0);
  }

}
