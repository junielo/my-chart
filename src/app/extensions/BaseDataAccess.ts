
import { VirtualCameraService } from '../services/shared/virtual-camera.service';

export abstract class BaseDataAccess<T> {
    protected data: T[];
    protected camera: VirtualCameraService;

    constructor(camera: VirtualCameraService) {
        this.data = [];
        this.camera = camera;
    }

    getRangeData(): T[] { // From camera position
        return this.data.slice(0, 99);
    }

    abstract loadData(): void;
}