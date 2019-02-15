//Task #1
function userCard(num) {
    const tax = 0.5;
    const HUNDRED_PERCENT = 100;
    const options = {
        key: num,
        balance: 100,
        transactionLimit: 100,
        historyLogs: []
    }
    const getCardOptions = () => options;
    const putCredits = (amount) => { 
        options.balance += amount;
        options.historyLogs.push({
            operationType: 'Received credits',
            credits: amount,
            operationTime: new Date().toLocaleString('en-GB')
        });
    };
    const takeCredits = (amount) => {
        if(options.balance < amount) {
            console.error('Operation cancelled.The amount of money you want to take is bigger than your balance.');
        } else if(options.transactionLimit < amount) {
            console.error('Operation cancelled.The amount of money you want to take is bigger than transaction limit.');
        } else {
            options.balance -= amount;
            options.historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: amount,
                operationTime: new Date().toLocaleString('en-GB')
            });
            
        }
    }
    const setTransactionLimit = (limit) => {
        options.transactionLimit = limit;
        options.historyLogs.push({
            operationType: 'Transaction limit change',
            credits: limit,
            operationTime: new Date().toLocaleString('en-GB')
        });
    }
    const transferCredits = (amount, receiver) => {
        const taxedAmount = amount + amount * tax / HUNDRED_PERCENT;
        if(options.balance < amount ) {
            console.error(
                'Operation cancelled.The amount of credits you want to transfer is bigger than transaction limit.');
        } else if(options.transactionLimit < amount) {
            console.error('Operation cancelled. The taxed transfer you want to transfer is bigger than your balance.');
        } else {
            takeCredits(taxedAmount);
            receiver.putCredits(amount);
        }
    }

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    };
}

//Task #2
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.MAX_CARDS = 3
    }
    addCard() {
        if(this.cards.length < this.MAX_CARDS) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
			console.error('Adding cancelled.Exceeded allowed limit of cards.');
		}
    }

    getCardByKey(key) {
        return this.cards[key - 1];
    }
}