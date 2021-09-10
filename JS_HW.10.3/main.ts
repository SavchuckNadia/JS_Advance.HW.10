function max(num1:number, num2:number, ...arg:number[]): number {
    return Math.max(num1, num2, ...arg)
}
console.log(max(5, -2));
console.log(max(5, -2, 30, 6));

