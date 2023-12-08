const products = [
  {
    id: 1,
    name: "course1",
    href: "#course",
    price: "Rs500",
    imageSrc: "images/marketing.jpg",
    imageAlt: "marketing",
  },
  {
    id: 2,
    name: "course1",
    href: "#course",
    price: "Rs500",
    imageSrc: "images/marketing.jpg",
    imageAlt: "marketing",
  },
  {
    id: 3,
    name: "course1",
    href: "#course",
    price: "Rs500",
    imageSrc: "images/marketing.jpg",
    imageAlt: "marketing",
    
  },
  {
    id: 4,
    name: "course1",
    href: "#course",
    price: "Rs500",
    imageSrc: "images/marketing.jpg",
    imageAlt: "marketing",
  },
  {
    id: 5,
    name: "course1",
    href: "#course",
    price: "Rs500",
    imageSrc: "images/marketing.jpg",
    imageAlt: "marketing",
  },
  {
    id: 6,
    name: "course1",
    href: "#course",
    price: "Rs500",
    imageSrc: "images/marketing.jpg",
    imageAlt: "marketing",
  },
  {
    id: 7,
    name: "course1",
    href: "#course",
    price: "Rs500",
    imageSrc: "images/marketing.jpg",
    imageAlt: "marketing",
  },
  {
    id: 8,
    name: "course1",
    href: "#course",
    price: "Rs500",
    imageSrc: "images/marketing.jpg",
    imageAlt: "marketing",
  },
];

export default function Products() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Courses</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
