const student = require('../exam');

describe('Exam', () => {
    it(`Exam of ${student.firstName} ${student.secondName}`, () => {
        const { task: func } = student;

        /* Correct input */
        expect(func(1, 1)).toEqual([]);
        expect(func(1, 300)).toEqual([[220, 284]]);
        expect(func(1, 1210)).toEqual([[220, 284], [1184, 1210]]);
        expect(func(284, 500)).toEqual([]);

        /* Not correct input */
        expect(func(-1, 300)).toBe(false);
        expect(func(300, 1)).toBe(false);
        expect(func('1', '300')).toBe(false);
    });
});

