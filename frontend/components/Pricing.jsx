export default function Pricing(){
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow text-center">
          <h4 className="font-bold mb-2">Starter</h4>
          <p className="text-2xl font-bold">£0</p>
          <p className="text-sm text-gray-600">Up to 3 files / month</p>
        </div>
        <div className="p-6 bg-white rounded shadow text-center">
          <h4 className="font-bold mb-2">Pro</h4>
          <p className="text-2xl font-bold">£29 / month</p>
          <p className="text-sm text-gray-600">Unlimited cleaning, reports</p>
        </div>
        <div className="p-6 bg-white rounded shadow text-center">
          <h4 className="font-bold mb-2">Enterprise</h4>
          <p className="text-2xl font-bold">Custom</p>
          <p className="text-sm text-gray-600">API & dedicated support</p>
        </div>
      </div>
    </section>
  )
}
