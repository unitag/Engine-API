module.exports = function (hljs) {
	var LITERALS = {literal: 'true false null'};
	var KEY = hljs.inherit(hljs.QUOTE_STRING_MODE, {
		className: null,
		lexemes: '"[$a-zA-Z]\\w*"',
		keywords: {
			keyword: '"if" "then" "else" "goto" "switch" "cases" "default" "try" "catch"',
			builtin: '"input" "$then" "trigger"'
		}
	});
	var FIELD = {
		begin: '"[^"]*"\\s*:', end: '', returnBegin: true,
		contains: [KEY]
	};
	var STRING = {
		begin: '"[^"]*"\\s*[^:]', end: '', returnBegin: true,
		contains: [hljs.QUOTE_STRING_MODE]
	};
	return {
		contains: [FIELD, STRING, hljs.C_NUMBER_MODE],
		keywords: LITERALS
	};
};
