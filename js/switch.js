let day = prompt("Enter day of the week", 1)
switch (+day) {
    case 1:
        console.log("Overtime salary is 200/hr")
        break;
    case 2:
        console.log("Overtime salary is 210/hr")
        break;
    case 3:
        console.log("Overtime salary is 220/hr")
        break;
    case 4:
        console.log("Overtime salary is 230/hr")
        break;
    case 5:
        console.log("Overtime salary is 250/hr")
        break;
    default:
        console.log("No pay for other days")
}