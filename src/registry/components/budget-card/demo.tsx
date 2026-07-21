import { BudgetCard } from "./budget-card";

export default function BudgetCardDemo() {
  return (
    <div className="flex items-center justify-center w-full p-6">
      <BudgetCard
        month="October"
        totalBudget={3200}
        spentAmount={2145}
        breakdown={[
          { label: "Housing", amount: 1200, color: "#6366f1" },
          { label: "Food", amount: 420, color: "#22c55e" },
          { label: "Transport", amount: 240, color: "#f59e0b" },
          { label: "Subscriptions", amount: 185, color: "#ec4899" },
          { label: "Other", amount: 100, color: "#64748b" },
        ]}
      />
    </div>
  );
}