import { Injectable } from "@angular/core";
import { BaseDataAccess } from "../../extensions/BaseDataAccess";
import { OHLCV } from "../../properties/OHLCV";
import { VirtualCameraService } from "../shared/virtual-camera.service";
import { CSVtoArrayOHLCV } from "src/app/utils/FileHandler";

@Injectable({
  providedIn: 'root'
})
export class ETHUSDService extends BaseDataAccess<OHLCV> {
    constructor(camera: VirtualCameraService) {
        super(camera);
    }
    
    async loadData(): Promise<void> {
        this.data = await CSVtoArrayOHLCV("Binance_ETHTUSD_d.csv");
    }
}