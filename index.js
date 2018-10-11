/*
    The pluralize() function returns the plural form of the given lowercase singular word (English only). 
    Based on ActiveState recipe http://code.activestate.com/recipes/413172/
*/

const ABERRANT_PLURAL_MAP = {
    'appendix': 'appendices',
    'barracks': 'barracks',
    'cactus': 'cacti',
    'child': 'children',
    'criterion': 'criteria',
    'deer': 'deer',
    'echo': 'echoes',
    'elf': 'elves',
    'embargo': 'embargoes',
    'focus': 'foci',
    'fungus': 'fungi',
    'goose': 'geese',
    'hero': 'heroes',
    'hoof': 'hooves',
    'index': 'indices',
    'knife': 'knives',
    'leaf': 'leaves',
    'life': 'lives',
    'man': 'men',
    'mouse': 'mice',
    'nucleus': 'nuclei',
    'person': 'people',
    'phenomenon': 'phenomena',
    'potato': 'potatoes',
    'self': 'selves',
    'syllabus': 'syllabi',
    'tomato': 'tomatoes',
    'torpedo': 'torpedoes',
    'veto': 'vetoes',
    'woman': 'women',
    }
 
    const VOWELS = new Set('aeiou');

    function pluralize(singular) {
        var suffix = "";
        if(!singular) return;

        var plural = ABERRANT_PLURAL_MAP[singular];
        if(plural) return plural;

        var root = singular;
        try {
            if(getCharacterFromLast(singular, 1) === 'y' && !VOWELS.has(getCharacterFromLast(singular, 2))) {
                root = getSubstringFromLast(singular, 1);
                suffix = 'ies';
            } else if(getCharacterFromLast(singular, 1) === 's') {
                if(VOWELS.has(getCharacterFromLast(singular, 2))) {
                    if(singular.substr(-3) === 'ius') {
                        root = getSubstringFromLast(singular, 2);
                        suffix = 'i';
                    }                  
                    else {
                        root = getSubstringFromLast(singular, 1);
                        suffix = 'ses';
                     }                    
                } else {
                    suffix = 'es';
                }
            } else if(singular.substr(-2) === 'ch' || singular.substr(-2) === 'sh') {
                suffix = 'es';
            } else {
                suffix = 's';
            }
        } catch(exception) {
            console.log(exception);
        }

        plural = root + suffix;
        return plural;
    }

    function getCharacterFromLast(string, pos) {
        return string.charAt(string.length - pos);
    }

    function getSubstringFromLast(string, pos) {
        return string.substring(0, string.length - pos);
    }

    console.log(pluralize('veto'));
    console.log(pluralize('nucleus'));
    console.log(pluralize('car'));
    console.log(pluralize('knife'));
    console.log(pluralize('woman'));