// templateEngine spec
describe('templateEngine', function() {
    it('should replace values into template', function(){
        var values = {
            'day': 'Thursday',
            'name': 'Billy'
        };
        var template = '${name} has an appointment on ${day}';

        var result = templateEngine(values, template);

        expect(result).toEqual('Billy has an appointment on Thursday');
    });

    it('should throw error if template uses a variable that has not been assigned', function(){
        var values = {
            'day': 'Thursday',
            'name': 'Billy'
        };
        var template = '${name} has an appointment on ${day} with ${doctor}';
        var result;

        try {
            result = templateEngine(values, template);
            expect(true).toBe(false); // should not be here
        } catch(e) {
            expect(e).toEqual(jasmine.any(Error));
        }
    });

    it('should provide a way to excape the strings', function(){
        var values = {
            'day': 'Thursday',
            'name': 'Billy'
        };
        var template = 'hello ${${name}}';

        var result = templateEngine(values, template);

        expect(result).toEqual('hello ${Billy}');
    });
});