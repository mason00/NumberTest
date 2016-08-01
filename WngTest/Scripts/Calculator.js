function Calculator() {
    this.input = $('#numberBox');
    this.error = $('#error');
    this.output = $('#output');
    this.oddOutput = $('#oddOutput');
    this.evenOutput = $('#evenOutput');
    this.allceOutput = $('#allceOutput');
    this.fibonacciOutput = $('#fibonacciOutput');

    this.error.hide();
    this.enterButton = $('#enterButton').click(function () { enter() });

    this.inputNumbers = [];
    this.oddNumbers = [];
    this.evenNumbers = [];
    this.allceNumbers = [];
    this.fibonacciNumbers = [];

    initNumberArray = function () {
        this.inputNumbers = [];
        this.oddNumbers = [];
        this.evenNumbers = [];
        this.allceNumbers = [];
        this.fibonacciNumbers = [];
    }

    initNumberArray();
    this.input.val('');
    this.input.focus();

    this.enter = function () {
        reset();
        var number = Number.parseInt(input.val());
        if (Number.isInteger(number) && number > 0)
        {
            for (var i = 1; i <= number; i++)
            {
                inputNumbers.push(i);
                testOddNumber(i);
                testEvenNumber(i);
                allceTest(i);
            }
            fibonacciTest(number);
            refreshResult();
        }
        else
        {
            showError();
        }
        this.input.val('');
        this.input.focus();
    }

    this.showError = function () {
        this.error.show();
    }

    this.hideError = function () {
        this.error.hide();
    }

    this.refreshResult = function () {
        this.output.text(inputNumbers.join(','));
        this.oddOutput.text(oddNumbers.join(','));
        this.evenOutput.text(evenNumbers.join(','));
        this.allceOutput.text(allceNumbers.join(','));
        this.fibonacciOutput.text(fibonacciNumbers.join(','));
    }

    this.testOddNumber = function (number) {
        if (number % 2 != 0)
        {
            this.oddNumbers.push(number);
        }
    }

    this.testEvenNumber = function (number) {
        if (number % 2 == 0) {
            this.evenNumbers.push(number);
        }
    }

    this.allceTest = function (number) {
        if (number % 3 == 0 && number % 5 == 0) {
            this.allceNumbers.push('Z');
            return;
        }
        if (number % 5 == 0) {
            this.allceNumbers.push('E');
            return;
        }
        if (number % 3 == 0) {
            this.allceNumbers.push('C');
            return;
        }
        this.allceNumbers.push(number);
    }

    this.reset = function () {
        hideError();
        this.output.text('');
        this.oddOutput.text('');
        this.evenOutput.text('');
        this.allceOutput.text('');
        this.fibonacciOutput.text('');
        initNumberArray();
    }

    this.fibonacciTest = function (number) {
        var n1 = 0;
        var n2 = 1;
        var n3 = n1 + n2;

        while (n1 < number)
        {
            this.fibonacciNumbers.push(n1);
            n1 = n2;
            n2 = n3;
            n3 = n1 + n2;
        }
    }
};

Calculator();