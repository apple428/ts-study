type Employee = {
    id: number;
    name: string;
    department: string;
    salary: number;
    isActive: boolean;
}

const employees: Employee[] = [
  { id: 1, name: "Alice", department: "Engineering", salary: 600000, isActive: true },
  { id: 2, name: "Bob", department: "Sales", salary: 400000, isActive: true },
  { id: 3, name: "Charlie", department: "Engineering", salary: 500000, isActive: false },
  { id: 4, name: "David", department: "Engineering", salary: 700000, isActive: true },
  { id: 5, name: "Eve", department: "HR", salary: 350000, isActive: true }
];

function calcEngineeringAverage(employee: Employee[]): number {
    let avgSalary: number = 0;
    let sum: number = 0;
    let count: number = 0;
    for(let i = 0; i < employee.length; i++) {
        // 現役社員じゃない場合はスキップ
        if(!employee[i].isActive) continue;
        // エンジニアリング部門以外の人はスキップ
        if(employee[i].department !== "Engineering") continue;

        sum += employee[i].salary;
        count++;
    }

    // 対象社員がいた場合のみ、平均給与を計算する。
    if(count !== 0) {
        avgSalary = sum / count;
    }

    return avgSalary;
}

console.log(calcEngineeringAverage(employees));