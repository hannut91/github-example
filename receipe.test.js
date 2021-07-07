class Receipe {
  constructor(ingredients, cookOrder) {
    this.ingredients = ingredients;
    this.cookOrder = cookOrder;
  }

  getIngredients() {
    return this.ingredients;
  }
}

describe('Receipe', () => {
  describe('getIngredients', () => {
    it('returns ingredients', () => {
      const ingredients = ['양파', '마늘', '고추장', '돼지고기'];
      const cookOrder = ['썰기', '볶기', '담기'];
      const 제육볶음 = new Receipe(ingredients, cookOrder);

      expect(제육볶음.getIngredients()).toEqual([
        '양파', '마늘', '고추장', '돼지고기'
      ]);
    });
  });
});