export default function Menu() {
  const menuItems = [
    {
      category: "Espresso",
      items: [
        { name: "Espresso", description: "Single shot of rich, bold espresso", price: "$2.50" },
        { name: "Double Espresso", description: "Double shot for extra kick", price: "$3.50" },
        { name: "Americano", description: "Espresso with hot water", price: "$3.00" },
        { name: "Long Black", description: "Hot water poured over espresso", price: "$3.00" }
      ]
    },
    {
      category: "Milk-Based",
      items: [
        { name: "Latte", description: "Espresso with steamed milk and light foam", price: "$4.00" },
        { name: "Cappuccino", description: "Equal parts espresso, steamed milk, and foam", price: "$4.25" },
        { name: "Flat White", description: "Espresso with velvety microfoam", price: "$4.00" },
        { name: "Mocha", description: "Espresso with chocolate and steamed milk", price: "$4.75" }
      ]
    },
    {
      category: "Cold Brew",
      items: [
        { name: "Iced Coffee", description: "Cold brewed coffee served over ice", price: "$3.75" },
        { name: "Cold Brew", description: "Slow-steeped cold brew concentrate", price: "$4.25" },
        { name: "Nitro Cold Brew", description: "Cold brew infused with nitrogen", price: "$5.00" },
        { name: "Iced Latte", description: "Espresso with cold milk over ice", price: "$4.50" }
      ]
    },
    {
      category: "Pastries",
      items: [
        { name: "Croissant", description: "Buttery, flaky french pastry", price: "$2.75" },
        { name: "Blueberry Muffin", description: "Fresh blueberries in sweet muffin", price: "$3.25" },
        { name: "Chocolate Chip Cookie", description: "Warm, gooey chocolate chip cookie", price: "$2.00" },
        { name: "Banana Bread", description: "Moist banana bread with walnuts", price: "$3.50" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-coffee-800 dark:text-coffee-100 mb-12">
          Our Menu
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-coffee-600 dark:text-coffee-200 border-b-2 pb-2">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-100">{item.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                    <span className="text-gray-800 dark:text-gray-100 font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}