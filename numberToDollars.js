/* exercise 1 - number to dollars */
var numberToDollars = (function () {
    'use strict';

    function stringifySingle(single) {
        var singles = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        var num = parseInt(single, 10);
        return singles[num];
    }

    function stringifyTens(ten) {
        var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        var tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        var isTeen = false;
        var tenNum, single;
        var result = '';

        if (ten.length > 1) {
            // get ten value
            tenNum = parseInt(ten.charAt(0), 10);
            if (tenNum === 1) {
                isTeen = true;
                // get teen value
                result = teens[parseInt(ten.charAt(1), 10)];
            } else if (tenNum > 1) {
                // get tens value
                result = tens[tenNum - 2];
            }
        }

        if (!isTeen) {
            single = stringifySingle(ten.charAt(1));
            if (single !== 'zero') {
                result += '-' + single;
            }
        }

        return result;
    }

    function stringifyHundreds(numString) {
        var result = '';
        var single;

        if (numString.length === 3 && numString.charAt(0) !== '0') {
            result += stringifySingle(numString.charAt(0)) + ' hundred';
        }

        if (numString.length > 1 && numString.charAt(numString.length - 2) !== '0') {
            if (result) {
                result += ' ';
            }
            result += stringifyTens(numString.substring(numString.length - 2));
        } else {
            single = stringifySingle(numString);
            if (result && single !== 'zero') {
                result += ' ' + single;
            } else if (!result) {
                result = single;
            }
        }

        return result;
    }

    function numberToDollars(num) {
        var numString, numParts, whole, decimal;
        var largeGroups = ['thousand', 'million', 'billion', 'trillion', 'quadrillion'];
        var wholeGroups = [];
        var format = '{whole} and {decimal}/100 dollars';
        var wholeString = '';
        var i, len; // for iterators
        var groupResult;

        if (typeof num !== 'number') {
            throw new Error('"num" is not a number');
        }

        numString = num.toString();
        numParts = numString.split('.');
        whole = numParts[0];
        decimal = numParts.length === 2 ? numParts[1] : '00';

        // standarize the decimal portion
        if (decimal.length > 2) {
            decimal = decimal.substring(0, 2);
        }

        if (decimal.length < 2) {
            decimal = decimal + '0';
        }

        // whole numbers
        // break into groups of 3
        for (i = Math.ceil(whole.length / 3); i > 0; i -= 1) {
            if (whole.length > 3) {
                wholeGroups.push(whole.substring(whole.length - 3));
                whole = whole.substring(0, whole.length - 3);
            } else {
                wholeGroups.push(whole);
            }
        }

        // iterate over groups of 3
        for (i = 0, len = wholeGroups.length; i < len; i += 1) {
            groupResult = stringifyHundreds(wholeGroups[i]);
            if (i) {
                groupResult += ' ' + largeGroups[i - 1];
            }

            if (wholeString) {
                wholeString = ' ' + wholeString;
            }
            wholeString = groupResult + wholeString;
        }

        wholeString = wholeString.charAt(0).toUpperCase() + wholeString.slice(1);

        return format.replace(/\{whole\}/, wholeString).replace(/\{decimal\}/, decimal);
    }

    return numberToDollars;
}());