const {
  validateExpense,
  calculateTotalExpenses,
} = require("../../frontend/src/expenseLogic");

describe("expense logic", () => {
  test("accepts a valid expense", () => {
    const expense = {
      title: "Lunch",
      amount: 120,
      description: "Meal",
      date: "2026-05-20",
    };

    expect(validateExpense(expense)).toEqual({
      valid: true,
      errors: [],
    });
  });

  test("rejects an expense with an empty title", () => {
    const expense = {
      title: "",
      amount: 120,
      description: "Meal",
      date: "2026-05-20",
    };

    expect(validateExpense(expense).valid).toBe(false);
    expect(validateExpense(expense).errors).toContain("Title is required");
  });

  test("calculates the total amount of expenses", () => {
    const expenses = [
      { title: "Lunch", amount: 120 },
      { title: "Fare", amount: 30 },
      { title: "Snack", amount: 50 },
    ];

    expect(calculateTotalExpenses(expenses)).toBe(200);
  });
});