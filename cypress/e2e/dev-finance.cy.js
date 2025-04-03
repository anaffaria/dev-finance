import { getFormattedDate, formatCurrency } from '../support/utils';

const pageUrl = "https://maratona-discover-devfinance.netlify.app/#";

describe('Testes funcionais', () => {

    beforeEach(function () {
        cy.visit(pageUrl);

        cy.fixture('../fixtures/selectors.json').then((selectors) => {
            cy.wrap(selectors).as('selectors');
        });

        cy.fixture('../fixtures/data.json').then((data) => {
            cy.wrap(data).as('data');
        });
    });

    it('Cadastro de transação de entrada', function () {
        const { standard: formattedDateStandard, custom: formattedDateCustom } = getFormattedDate();
    
        const formattedAmount = formatCurrency(this.data.incomingTransaction.amount);
        const formattedZeroExpense = formatCurrency(this.data.incomingTransaction.entries);
    
         // Inicia uma nova transação 
        cy.clickNewTransactionButton(
            this.selectors.homePage.btnNewTransaction,
            this.data.homePage.textBtnTransaction
        );
    
        // Aguarda o modal abrir 
        cy.modalNewTransactionOpen(
            this.selectors.modal.modalTransaction,
            this.data.modal.textModalTransaction
        );
    
        // Preenche os dados da transação
        cy.fillMandatoryFields([
            [this.selectors.modal.inputDescription, this.data.incomingTransaction.description],
            [this.selectors.modal.inputAmount, this.data.incomingTransaction.amount],
            [this.selectors.modal.inputDate, formattedDateStandard]
        ]);
    
        // Salva a transação
        cy.modalActionTransaction(
            this.selectors.modal.btnSave,
            this.data.modal.saveTransaction
        );
    
        // Valida os valores de entradas | saídas | total
        cy.validInfoValues([
            [this.selectors.balance.entry, formattedAmount],
            [this.selectors.balance.expense, formattedZeroExpense],
            [this.selectors.balance.total, formattedAmount]
        ]);
    
        // Valida lista da transação: descrição, valor e data
        cy.validInfoValues([
            [this.selectors.dataList.inputDescription, this.data.incomingTransaction.description],
            [this.selectors.dataList.inputAmountIncome, formattedAmount],
            [this.selectors.dataList.inputDate, formattedDateCustom]
        ]);
    });
    
    it('Cadastro de transação de saída', function () {
        const { standard: formattedDateStandard, custom: formattedDateCustom } = getFormattedDate();
    
        const formattedAmount = formatCurrency(this.data.expenseTransaction.amount);
        const formattedZeroExpense = formatCurrency(this.data.expenseTransaction.entries);

        // Inicia uma nova transação  
        cy.clickNewTransactionButton(
            this.selectors.homePage.btnNewTransaction,
            this.data.homePage.textBtnTransaction
        );
    
        // Aguarda o modal abrir 
        cy.modalNewTransactionOpen(
            this.selectors.modal.modalTransaction,
            this.data.modal.textModalTransaction
        );
    
        // Preenche os dados da transação 
        cy.fillMandatoryFields([
            [this.selectors.modal.inputDescription, this.data.expenseTransaction.description],
            [this.selectors.modal.inputAmount, this.data.expenseTransaction.amount],
            [this.selectors.modal.inputDate, formattedDateStandard]
        ]);
    
        // Salva a transação 
        cy.modalActionTransaction(
            this.selectors.modal.btnSave,
            this.data.modal.saveTransaction
        );
    
        // Valida os valores de entradas | saídas | total 
        cy.validInfoValues([
            [this.selectors.balance.entry, formattedZeroExpense],
            [this.selectors.balance.expense, formattedAmount],
            [this.selectors.balance.total, formattedAmount]
        ]);
    
        // Valida lista da transação: descrição, valor e data 
        cy.validInfoValues([
            [this.selectors.dataList.inputDescription, this.data.expenseTransaction.description],
            [this.selectors.dataList.inputAmountExpense, formattedAmount],
            [this.selectors.dataList.inputDate, formattedDateCustom]
        ]);
    })

    it('Cadastro de transação zerada contabilizada na lista', function () {
        const { standard: formattedDateStandard, custom: formattedDateCustom } = getFormattedDate();
    
        const formattedAmount = formatCurrency(this.data.expenseZeroTransaction.amount);
        const formattedZeroExpense = formatCurrency(this.data.expenseZeroTransaction.entries);

        // Inicia uma nova transação  
        cy.clickNewTransactionButton(
            this.selectors.homePage.btnNewTransaction,
            this.data.homePage.textBtnTransaction
        );
    
        // Aguarda o modal abrir 
        cy.modalNewTransactionOpen(
            this.selectors.modal.modalTransaction,
            this.data.modal.textModalTransaction
        );
    
        // Preenche os dados da transação 
        cy.fillMandatoryFields([
            [this.selectors.modal.inputDescription, this.data.expenseZeroTransaction.description],
            [this.selectors.modal.inputAmount, this.data.expenseZeroTransaction.amount],
            [this.selectors.modal.inputDate, formattedDateStandard]
        ]);

        // Salva a transação 
        cy.modalActionTransaction(
            this.selectors.modal.btnSave,
            this.data.modal.saveTransaction
        );
    
        // Valida os valores de entradas | saídas | total 
        cy.validInfoValues([
            [this.selectors.balance.entry, formattedZeroExpense],
            [this.selectors.balance.expense, formattedAmount],
            [this.selectors.balance.total, formattedAmount]
        ]);
    
        // Valida lista da transação: descrição, valor e data 
        cy.validInfoValues([
            [this.selectors.dataList.inputDescription, this.data.expenseZeroTransaction.description],
            [this.selectors.dataList.inputAmountExpense, formattedAmount],
            [this.selectors.dataList.inputDate, formattedDateCustom]
        ]);
    })

    it('Verificação de total de transação decimal', function () {
        const { standard: formattedDateStandard, custom: formattedDateCustom } = getFormattedDate();
    
        const formattedEntries = formatCurrency(this.data.verifyTotalTransactions.entriesIncome);
        const formattedExpanse = formatCurrency(this.data.verifyTotalTransactions.exitExpanse);
        const formattedTotal = formatCurrency(this.data.verifyTotalTransactions.total);

        // Inicia uma nova transação de entrada   
        cy.clickNewTransactionButton(
            this.selectors.homePage.btnNewTransaction,
            this.data.homePage.textBtnTransaction
        );
    
        // Aguarda o modal abrir 
        cy.modalNewTransactionOpen(
            this.selectors.modal.modalTransaction,
            this.data.modal.textModalTransaction
        );
    
        // Preenche os dados da transação 
        cy.fillMandatoryFields([
            [this.selectors.modal.inputDescription, this.data.verifyTotalTransactions.descriptionIncome],
            [this.selectors.modal.inputAmount, this.data.verifyTotalTransactions.amountIncome],
            [this.selectors.modal.inputDate, formattedDateStandard]
        ]);

        // Salva a transação 
        cy.modalActionTransaction(
            this.selectors.modal.btnSave,
            this.data.modal.saveTransaction
        );
    
        // Inicia uma nova transação de saída
        cy.clickNewTransactionButton(
            this.selectors.homePage.btnNewTransaction,
            this.data.homePage.textBtnTransaction
        );
    
        // Aguarda o modal abrir 
        cy.modalNewTransactionOpen(
            this.selectors.modal.modalTransaction,
            this.data.modal.textModalTransaction
        );
    
        // Preenche os dados da transação 
        cy.fillMandatoryFields([
            [this.selectors.modal.inputDescription, this.data.verifyTotalTransactions.descriptionExpanse],
            [this.selectors.modal.inputAmount, this.data.verifyTotalTransactions.amountIncomeExpanse],
            [this.selectors.modal.inputDate, formattedDateStandard]
        ]);

        // Salva a transação 
        cy.modalActionTransaction(
            this.selectors.modal.btnSave,
            this.data.modal.saveTransaction
        );

        // Valida os valores de entradas | saídas | total 
        cy.validInfoValues([
            [this.selectors.balance.entry, formattedEntries],
            [this.selectors.balance.expense, formattedExpanse],
            [this.selectors.balance.total, formattedTotal]
        ]);
    
    })
});


