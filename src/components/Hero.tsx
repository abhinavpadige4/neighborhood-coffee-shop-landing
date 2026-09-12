export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-coffee-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="relative pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20 dark:opacity-30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-coffee-800 dark:text-coffee-100 mb-6">
              Welcome to Neighborhood Brew
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Artisanal coffee roasted in-house, served with a smile in our cozy neighborhood spot
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#menu" className="btn-primary px-8 py-3">
                See Our Menu
              </a>
              <a href="#contact" className="btn-outline px-8 py-3">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}