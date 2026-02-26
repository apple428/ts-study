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