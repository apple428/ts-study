// 問題文
// ある商品のN日間の売上が整数列 A1, A2, ..., AN として与えられる。
// Ai (1≦i≦N) が i日目の売上を表す。
//
// 2日目以降の各日について、その日の売上が前日の売上よりどれだけ高かったか
// (あるいは低かったか) を出力するプログラムを作成する。
//
// より具体的には、プログラムは N−1 行を出力し、i行目 (1≦i≦N−1) の内容は次の通りである。
//
// • Ai+1 が Ai と等しい場合: stay
// • Ai+1 が Ai より小さい場合: down [減少量]
//   ここで [減少量] は整数値 Ai − Ai+1
// • Ai+1 が Ai より大きい場合: up [増加量]
//   ここで [増加量] は整数値 Ai+1 − Ai
//
// 制約
// • 2 ≦ N ≦ 100,000
// • 0 ≦ Ai ≦ 1,000,000,000
// • 入力中の値はすべて整数である。

let stdin = [3, 10, 12, 9];

for(let i = 1; i < stdin.length - 1; i++){
    let result = stdin[i+1] - stdin[i];
    if(result > 0){
        console.log("up" + " " + result);
    }else if(result === 0){
        console.log("stay");
    }else{
        console.log("down" + " " + result * -1);
    }
}