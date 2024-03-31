import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24">
    <header className="flex w-full justify-between items-center mb-10">
      <h1 className="text-4xl font-bold">PeFi</h1>
      <nav>
        <a href="/login" className="text-lg p-2">Login</a>
        <a href="/register" className="text-lg p-2">Sign Up</a>
      </nav>
    </header>

    <section className="flex-1 flex flex-col items-center justify-center text-center mb-10">
      <h2 className="text-3xl font-semibold mb-6">
        Manage Your Finances with Ease
      </h2>
      <p className="mb-8 max-w-md">
        Take control of your financial life with all-in-one tracking, budgeting, and forecasting.
      </p>
      <Image src="/piggybank.jpg" alt="Finance Management" width={600} height={400} className="mb-8" />
      <a href="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Started
      </a>
    </section>

    <section className="w-full mb-10">
      <h3 className="text-2xl font-semibold text-center mb-6">Why Choose PeFi?</h3>
      <div className="flex justify-around">
        <div className="flex-1 max-w-sm">
          <h4 className="text-xl font-semibold mb-4">Real-Time Tracking</h4>
          <p>Monitor your expenses and incomes in real-time, get instant insights into your financial health.</p>
        </div>
        <div className="flex-1 max-w-sm">
          <h4 className="text-xl font-semibold mb-4">Budgeting Tools</h4>
          <p>Create and manage budgets to achieve your financial goals and save money effectively.</p>
        </div>
        <div className="flex-1 max-w-sm">
          <h4 className="text-xl font-semibold mb-4">Investment Analysis</h4>
          <p>Get detailed analytics on your investments to make informed decisions and grow your wealth.</p>
        </div>
      </div>
    </section>

    <section className="w-full">
      <h3 className="text-2xl font-semibold text-center mb-6">Testimonials</h3>
      <div className="flex justify-around">
        <div className="flex-1 max-w-sm text-center">
          <blockquote>&quot;FinanceApp has revolutionized the way I manage my finances. It’s user-friendly and incredibly effective.&quot;</blockquote>
          <p>- Jane Doe, satisfied user</p>
        </div>
        <div className="flex-1 max-w-sm text-center">
          <blockquote>&quot;I’ve never been better at budgeting and saving. Thanks to FinanceApp, I’m on track to meet my financial goals.&quot;</blockquote>
          <p>- John Smith, happy customer</p>
        </div>
      </div>
    </section>

    <footer className="w-full text-center p-4 mt-10">
      © {new Date().getFullYear()} FinanceApp. All rights reserved.
    </footer>
  </main>
  );
}
