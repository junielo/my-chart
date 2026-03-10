export function getIndexFromCamPos(left: number, right: number): [number, number] {
    let newLeft = left - (left % 10);
    let newRight = right - (right % 10) + 10;
    let indexLeft = newLeft / 10;
    let indexRight = newRight / 10;
    return [indexLeft, indexRight];
}