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

function calcSalary(employees: Employee[]) : number {
    let sum: number = 0;
    for(let employee of employees) {
        if(employee.isActive){
            sum += employee.salary;
        }
    }
    return sum;
}

console.log(calcSalary(employees));
