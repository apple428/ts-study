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

function getEngineeringNames(employees: Employee[]): string[] {
    let engineers: string[] = [];
    for(let i = 0; i < employees.length; i++) {
        if(employees[i].department !== "Engineering") {
            continue;
        }
        if(!employees[i].isActive) {
            continue;
        }
        engineers.push(employees[i].name);
    }
    return engineers;
}

console.log(getEngineeringNames(employees));