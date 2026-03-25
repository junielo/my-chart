import { computed, Signal, signal } from "@angular/core";

export class Bounds {
    left: number;
    right: number;
    top: number;
    bottom: number;

    constructor(left = 0, right = 0, top = 0, bottom = 0) {
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
    }
}