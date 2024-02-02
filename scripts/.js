let num1 = prompt("Enter num 1");
num1 = number(num1);

let num3 = prompt("+ - * /");

let num2 = prompt("Enter num 2");
num2 = number(num2);

if (action === "+") {
    alert(num1 + num2);
} else if (action === "-") {
    alert (num1 - num2);
} else if (action === "*") {
    alert (num1 * num2);
} else if (action === "/") {
    alert(num1 / num2);
} else {
    alert("invalid charapter provided, please use either: + = * /");
}


