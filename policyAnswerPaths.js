
function writePolicies() {
    firebase.database().ref('policies/').set({
        ctp: {
            answerpath1: ['1b', 'empty', 'empty'],
            answerpath2: ['1c', '2a', '3c'],
            answerpath3: ['1c', '2b', '3c']
        },
        tpp: {
            answerpath1: ['1c', '2a', '3a']
        },
        comp: {
            answerpath1: ['1a', 'empty', 'empty'],
            answerpath2: ['1c', '2c', 'empty']
        },
        ctpAndTpp: {
            answerpath1: ['1c', '2a', '3b']
        },
        tppAndComp: {
            answerpath1: ['1c', '2b', '3a']
        },
        any: {
            answerpath1: ['1c', '2b', '3b']
        }
    });
}
