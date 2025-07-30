export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 font-sans">
      {/* Mission Statement */}
      <section className="text-center mb-16 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400 text-gray-800 shadow-md rounded-xl p-10">
        <h2 className="text-5xl font-extrabold mb-6">🌟 Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          At FitnessForward, we’re here to simplify your health journey. Our tools
          are designed to make fitness science accessible, helping you take control
          of your wellness with confidence. Whether it’s tracking progress or
          planning workouts, we’re with you every step of the way.
        </p>
      </section>

      {/* Science Behind the Journey */}
      <section className="mb-16 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 text-gray-800 shadow-md rounded-xl p-10">
        <h2 className="text-4xl font-bold mb-6">🔬 The Science Behind the Journey</h2>
        <p className="text-lg leading-relaxed mb-4">
          Fitness shouldn’t be guesswork. That’s why our tools are based on proven
          methods trusted by health professionals. From BMI to calorie tracking, we
          provide clarity so you can focus on what matters most — your health.
        </p>
      </section>

      {/* Tools Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="bg-blue-100 shadow-md rounded-xl p-6 border-t-4 border-blue-300">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">🔢 BMI Calculator</h3>
          <p className="text-blue-700 leading-relaxed">
            Understand your weight category and take the first step toward better
            health.
          </p>
        </div>

        <div className="bg-blue-100 shadow-md rounded-xl p-6 border-t-4 border-blue-400">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">🔥 Calorie Needs Calculator</h3>
          <p className="text-blue-700 leading-relaxed">
            Discover how much to eat for your goals — whether it’s weight loss,
            maintenance, or muscle gain.
          </p>
        </div>

        <div className="bg-blue-100 shadow-md rounded-xl p-6 border-t-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">💪 Workout Planner</h3>
          <p className="text-blue-700 leading-relaxed">
            Build a fitness routine that fits your lifestyle and helps you achieve
            your goals.
          </p>
        </div>

        <div className="bg-blue-100 shadow-md rounded-xl p-6 border-t-4 border-blue-600">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">📊 Fitness Tracker</h3>
          <p className="text-blue-700 leading-relaxed">
            Track your activities and see how every effort brings you closer to
            your goals.
          </p>
        </div>
      </section>

      {/* Why Choose FitnessForward? */}
      <section className="text-center mt-16 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 text-gray-800 shadow-md rounded-xl p-10">
        <h2 className="text-4xl font-bold mb-6">Why Choose FitnessForward?</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-4">
          FitnessForward is your partner in health. Our tools are simple, effective,
          and tailored to your needs. Whether you’re starting out or leveling up,
          we’re here to make your journey easier and more rewarding.
        </p>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Join thousands who trust FitnessForward to guide their fitness journey.
          Let’s make progress together.
        </p>
      </section>

      {/* Closing Statement */}
      <section className="text-center mt-16 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-200 text-blue-800 shadow-md rounded-xl p-10">
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          FitnessForward is more than tools — it’s a community. Together, we’re
          building healthier lives, one step at a time.
        </p>
      </section>
    </main>
  );
}