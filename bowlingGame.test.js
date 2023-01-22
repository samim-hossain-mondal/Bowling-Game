const { calculateTotalScore, bestScore } = require('./bowlingGame');

describe('Total Score', () => {
    it('Should return error', () => {
        expect(() => { calculateTotalScore([[]]); }).toThrow('Invalid Input');
    });
    it('Should return error', () => {
        expect(() => { calculateTotalScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); }).toThrow('Invalid Input');
    });
    it('Should return 30', () => {
        const result = calculateTotalScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
        expect(result).toEqual(30);
    });
    it('Should return 16', () => {
        const result = calculateTotalScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        expect(result).toEqual(16);
    });
    it('Should return 300', () => {
        const result = calculateTotalScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
        expect(result).toEqual(300);
    });
});

describe('Best Score', () => {
    it('Should return maximum score as 90', () => {
        const result = bestScore([[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10], [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
        expect(result).toEqual(90);
    });
    it('Should return maximum score as 300', () => {
        const result = bestScore([[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10], [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]]);
        expect(result).toEqual(300);
    });
});