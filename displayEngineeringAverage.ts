// 擬似API
async function fetchEmployees(): Promise<Employee[]> {
    await new Promise(r => setTimeout(r, 2000));
    return [{ id: 1, name: "Alice", department: "Engineering", salary: 600000, isActive: true }];
}

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

async function displayEngineeringAverage() {
    try{
        const employees = await fetchEmployees();
        const avg = calcEngineeringAverage(employees);
        console.log(avg);
    }catch(error){
        console.error("平均給与の計算に失敗しました。", error);
    }
}

displayEngineeringAverage();