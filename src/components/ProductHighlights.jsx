const products = [
    { id: 1, name: "Product A", desc: "High quality and stylish." },
    { id: 2, name: "Product B", desc: "Perfect blend of design and utility." },
    { id: 3, name: "Product C", desc: "Crafted with care and passion." },
];

export default function ProductHighlights() {
    return (
        <section className="h-[38.2vh] px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50">
            {products.map((p) => (
                <div key={p.id} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                    <p className="text-gray-600">{p.desc}</p>
                </div>
            ))}
        </section>
    );
}
