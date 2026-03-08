// 問題文
// 6 つの相異なる整数 A, B, C, D, E, F が与えられる。
// このうち 3 番目に大きい数を調べるプログラムを作成せよ。

// 制約
// 1 ≦ A, B, C, D, E, F ≦ 100
// A, B, C, D, E, F はすべて異なる。
// 入力中の値はすべて整数である。

const numArray:number[] = [87,45,90,24,100,1];
const newArray:number[] = [];
numArray.sort((a:number ,b:number) => b - a);
console.log(numArray[2]);