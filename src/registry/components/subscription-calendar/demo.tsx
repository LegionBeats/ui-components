import { SubscriptionCalendar, type SubscriptionDay } from "./subscription-calendar";

const days: SubscriptionDay[] = Array.from({ length: 35 }, (_, i) => {
  const date = i - 2; // pad first week
  return {
    date: date > 0 && date <= 31 ? date : 0,
    isMuted: date <= 0 || date > 31,
  };
});

export default function SubscriptionCalendarDemo() {
  return (
    <div className="flex items-center justify-center w-full p-6">
      <SubscriptionCalendar
        month="October"
        year={2026}
        days={days}
        monthlyTotal={148}
        subscriptionsCount={12}
        newCount={2}
      />
    </div>
  );
}