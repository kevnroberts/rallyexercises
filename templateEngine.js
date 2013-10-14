/* exercise 5 - templating engine */

function templateEngine(values, template) {
    'use strict';
    var result = template;
    var tokenRegex = /\$\{\w*\}/gi;
    var tokens = template.match(tokenRegex);
    var prop, propRegex;
    var i, len;

    for (i = 0, len = tokens.length; i < len; i += 1) {
        prop = tokens[i].replace(/\$\{/, '').replace(/\}/, '');
        if (values[prop] === undefined) {
            throw new Error(tokens[i] + ' has not been assigned');
        }

        propRegex = new RegExp('\\$\\{' + prop + '\\}', 'gi');

        result = result.replace(propRegex, values[prop]);
    }

    return result;
}