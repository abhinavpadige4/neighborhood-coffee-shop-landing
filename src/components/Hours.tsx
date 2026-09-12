export default function Hours() {
  const hours = [
    { day: "Monday", time: "7:00 AM - 6:00 PM" },
    { day: "Tuesday", time: "7:00 AM - 6:00 PM" },
    { day: "Wednesday", time: "7:00 AM - 6:00 PM" },
    { day: "Thursday", time: "7:00 AM - 7:00 PM" },
    { day: "Friday", time: "7:00 AM - 8:00 PM" },
    { day: "Saturday", time: "8:00 AM - 8:00 PM" },
    { day: "Sunday", time: "8:00 AM - 5:00 PM" }
  ];

  return (
    <section id="hours" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-coffee-800 dark:text-coffee-100 mb-12">
          Opening Hours
        </h2>
        <div className="max-w-2xl mx-auto grid gap-4 sm:grid-cols-2">
          {hours.map((hour, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="font-medium text-gray-800 dark:text-gray-100">{hour.day}</span>
              <span className="text-gray-600 dark:text-gray-300 font-mono">{hour.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}