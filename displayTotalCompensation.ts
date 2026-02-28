// 擬似API 1
async function fetchEmployees(): Promise<Employee[]> {
    await new Promise(r => setTimeout(r, 2000));
    return [{ id: 1, name: "Alice", department: "Engineering", salary: 600000, isActive: true }];
}

// 擬似API 2（部署ごとのボーナス額）
async function fetchDepartmentBonus(): Promise<{ [key: string]: number }> {
    await new Promise(r => setTimeout(r, 2000));
    return { "Engineering": 50000, "Sales": 30000 };
}

async function displayTotalCompensation(): Promise<void> {

    let totalCompensation: number = 0;

    const [employees, bonuses] = await Promise.all(
        [
            fetchEmployees(),
            fetchDepartmentBonus()   
        ]
    );

    for(const employee of employees) {
        if(employee.department !== "Engineering") continue;

        totalCompensation = employee.salary + bonuses["Engineering"];
    }

    console.log(totalCompensation);
}

displayTotalCompensation();