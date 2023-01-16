export const greet = (name, formal = true) => {
    if (formal) {
        console.log(`good evening ${name}`);
    } else {
        console.log(`hello ${name}`);
    }
}

export const calculate = (a,b,operation) => {
    let resulte;
    switch (operation) {
        case '+':
            resulte = a + b;
            console.log(resulte);
            break;
        case '-':
            resulte = a - b;
            console.log(resulte);
            break;
        case '*':
            resulte = a * b;
            console.log(resulte);
            break;
        case '/':
            resulte = a / b;
            console.log(resulte);
            break;
    }
}