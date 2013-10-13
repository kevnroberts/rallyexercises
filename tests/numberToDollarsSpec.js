// numberToDollars spec
describe('numberToDollars', function() {
    it('should throw an exception if a number is not passed in', function(){
        try{
            numberToDollars('foo');
            expect(true).toBe(false); // should not be here
        } catch(e){
            expect(e).toEqual(jasmine.any(Error));
        }
    });

    it('should return "One and 00/100 dollars" when passing 1', function(){
        var result = numberToDollars(1);
        expect(result).toEqual('One and 00/100 dollars');
    });

    it('should return "Twenty-six and 01/100 dollars" when passing 26.01', function(){
        var result = numberToDollars(26.01);
        expect(result).toEqual('Twenty-six and 01/100 dollars');
    })

    it('should return "Five hundred thirty-two and 50/100 dollars" when passing 532.50', function(){
        var result = numberToDollars(532.50);
        expect(result).toEqual('Five hundred thirty-two and 50/100 dollars');
    })

    it('should return "Two thousand five hundred twenty-three and 04/100 dollars" when passing 2523.04', function(){
        var result = numberToDollars(2523.04);
        expect(result).toEqual('Two thousand five hundred twenty-three and 04/100 dollars');
    })

    it('should return "Thirty thousand eight and 00/100 dollars" when passing 30008.00', function(){
        var result = numberToDollars(30008.00);
        expect(result).toEqual('Thirty thousand eight and 00/100 dollars');
    })

    it('should return "Nine hundred eighty-seven thousand six hundred fifty-four and 32/100 dollars" when passing 987654.32', function(){
        var result = numberToDollars(987654.32);
        expect(result).toEqual('Nine hundred eighty-seven thousand six hundred fifty-four and 32/100 dollars');
    })

    it('should return "Zero and 01/100 dollars" when passing 0.01', function(){
        var result = numberToDollars(0.01);
        expect(result).toEqual('Zero and 01/100 dollars');
    })
});