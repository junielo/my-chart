import { computed, Signal, signal } from "@angular/core";

export class Bounds {
    left: Signal<number>;
    right: Signal<number>;
    top: Signal<number>;
    bottom: Signal<number>;

    constructor(left = 0, right = 0, top = 0, bottom = 0) {
        this.left = signal(left);
        this.right = signal(right);
        this.top = signal(top);
        this.bottom = signal(bottom);
    }
}