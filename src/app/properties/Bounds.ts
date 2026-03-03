import { computed, Signal, signal } from "@angular/core";

export class Bounds {
    left: Signal<number>;
    right: Signal<number>;
    highPrice: Signal<number>;
    lowPrice: Signal<number>;
    width = computed(() => this.right() - this.left());
    height = computed(() => this.lowPrice() - this.highPrice());
    centerX = computed(() => (this.left() + this.right()) / 2);

    constructor(left = 0, right = 0, highPrice = 0, lowPrice = 0) {
        this.left = signal(left);
        this.right = signal(right);
        this.highPrice = signal(highPrice);
        this.lowPrice = signal(lowPrice);
    }
}