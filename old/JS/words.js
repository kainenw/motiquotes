const verb = {
    impSg: {
        pos: [
        'grow', 'let', 'go to', 'do', 'make', 'choose', 'plant', 'be', 'love', 'live', 'have', 'open', 'desire', 'remember', 'rest', 'read', 'listen to', 'experience', 'protect', 'strive for', 'want', 'say', 'act', 'conquer', 'understand', 'achieve', 'take', 'get', 'give', 'work', 'succeed', 'crave','further', 'find', 'feel', 'tell', 'care for', 'dream', 'keep', 'own', 'clear', 'come to', 'stand',  'change', 'see', 'refresh', 'think', 'know', 'hope', 'best', 'plant', 'water',
        ],
        neg: [
            'lose', 'stop', 'detach from',
        ]
    },
    ind: {
        pos: [
            'turning', '', 'doing', 'giving', 'laid', 'craved', 'generated',
        ],
        neg: [
            'collapses', 'shattered', 'buzzing', 'dropped', 
        ]
    },
    verb: [ 
         'has',  'aspired', 'frustrated', 'enjoying', 'compounding', 'crouching', 'feeling', 'going', 'heard', 'knowing', 'made', 'happening', 'began', 'means', 'traveled', 'informed', 'observed', 'driving', 'letting', 'learn', 'broken', 'lived', 'shaken', 'wanted', 'burning', 'did', 'enjoyed', 'provided','facing', 'does', 'was', 'changed', 'based', 'became', 'leading', 'searching', 'goes','making', 'were', 'happen', 'being', 'mean', 'faith', 'need', 'were', 'am', 
    ],
    modal: [
        'have to', 'can', 'will', 
    ],
    negVerbs: [
        'closed',
    ],
}

const noun = {
    sg: {
        pos: [
            'mind', 'information', 'health', 'effort', 'voice', 'wealth', 'happiness', 'life', 'success', 'hope', 'thing', 'human', 'page', 'circumstance', 'way', 'concept', 'proof', 'lamp', 'piece', 'example', 'youth', 'excitement', 'change', 'foundation', 'course', 'will to','love', 'world', 'day', 'something', 'forethought', 'innovation', 'given', 'condition', 'time', 'days',  'style', 'work', 'act', 'desire', 'news', 'substance', 'encouragement', 'book', 'opinion', 'experience', 'anything', 'result', 'moment','possibility', 'strength', 'action', 'being', 'soul', 'universe', 'gift', 'man',  'need', 'faith'
            ],
        neg: [
            'fears', 'problem', 'lows',
        ]
    },
    pl: {
        pos: ['hopes', 'aspirations', 'humans', 'dreams', 'others', 'highs', 'happenings', 'contentments','provisions', 'grades', 'means', 'thoughts',  'lessons', 'eyes', 'people',],
        neg: []
    },
    abstract: ['poverty', ]
}

const adj = {
    pos: [
        'one', 'little', 'greatest', 'more', 'long', 'able', 'easy', 'poorer', 'richer', 'firm', 'contrary', 'solid', 'supporting', 'demotivation', 'craziness', 'dull', 'baseless', 'only', 'giving', 'open', 'new', 'buzzing', 'some', 'best', 'done', 'aspired',  'frustrated', 'enjoying', 'compounding', 'crouching', 'great', 'clear', 'feeling', 'highly', 'old', 'public', 'heard', 'knowing', 'further', 'proper', 'closed', 'traveled', 'informed', 'rusty', 'observed', 'driving', 'given', 'broken', 'lived', 'shaken', 'wanted', 'burning', 'possible', 'enjoyed', 'provided', 'changed','well','very', 'worst', 'good', 'hard', 'free', 'different', 'contagious', 'necessary', 'precious', 'bad', 'poor', 'all', 'each', 'everything', 'any', 'rest', 'every', 'much', 'small'
    ],
    neg: ['shattered'],
}

const adv = [
    'only', 'anymore', 'sadly', 'today', 'always', 'now', 'then'
]
    
const pronoun = {
    subject: [ 'you', 'it', 'I', 'we', 'he', 'they'],
    object: ['me', 'you', 'us', 'I', 'he', 'them'],
    posessive: ['your', 'my', 'his', 'their', 'our'],
    intensive: ['yourself',  'own', 'themselves'],
    relative: ['when']
}
    
const other = {
    demonstratives: [
        'there', 'that', 'those', 'this'
    ],
    
    exclaimations: [
        'yes', 'wow', 'please', 'thanks'
    ],

    conjunctions: [
        'but', 'and', 'or',
    ],
    subordinatingConjunction : [
        'because', 'if', 'otherwise', 'until', 'so', 'even'
    ],
    
    negation : [
        'not', 'no', 'never'
    ],
    
    comparatives :[
        'than', 'as', 'same', 'almost', 'less', 'like'
    ],
    
    preposition : [
        'with', 'around', 'by', 'in', 'of', 'instead', 'through', 'after', 'at', 'for', 'about', 'from', 'on', 'beneath', 'out', 'away', 'up', 'without', 'into', 'before',
    ],
    
    article : [
        'the', 'a', 'an'
    ],
    
    quantifiers : []
}

export { verb, noun, other }