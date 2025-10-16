export default function Features(){
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Clean & Standardize</h3>
          <p className="text-sm text-gray-600">Remove duplicates, fix emails & phones, standardize country codes.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Fast & Scalable</h3>
          <p className="text-sm text-gray-600">Process thousands of rows in minutes with AI + rules.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Secure & Compliant</h3>
          <p className="text-sm text-gray-600">GDPR-friendly workflows and automatic file purge.</p>
        </div>
      </div>
    </section>
  )
}
