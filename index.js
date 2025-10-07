let show = document.querySelector('#showBalance')
let balance = 5000
let input = document.querySelector('input')
let table = document.querySelector('table tbody')
let history = [
]
let showBalance = ()=> {
    show.innerText = balance
}

   
let addDepoit = () => {
    let amount = +input.value
    history.push(
        { beforeBalance:balance, amount:amount, type:'deposit', afterBalance:balance+amount},
    )
    balance = balance + amount
    showHistory();
    showBalance();
    input.value=""
}

removrWithdraw = () => {
    let amount = +input.value
    if (balance >= amount){
        history.push(
            {beforeBalance:balance, amount:amount, type:'withdrow', afterBalance:balance-amount},
        )
        balance = balance - amount
        showHistory();
        showBalance ()
        input.value=""
    }else{
        alert('no money')
    }
}
let showHistory = ()=>{
    table.innerHTML=""
    history.forEach ((el , index )=> {
        table.innerHTML+=
         `
        <tr>
            <td>${index +1}</td>
            <td>${el.beforeBalance}</td>
            <td>${el.amount}</td>
            <td>${el.type}</td>
            <td>${el.afterBalance}</td>
        </tr>
        `
    })
}
