import { useState, useEffect } from 'react';
// const data = [
//   {
//     id: 1,
//     name: 'Earthen Bottle',
//     href: '#',
//     price: 48,
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
//     imageAlt:
//       'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//     categoriy: 'bottles',
//     productInStock: true,
//   },
//   {
//     id: 2,
//     name: 'Nomad Tumbler',
//     href: '#',
//     price: 35,
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
//     imageAlt:
//       'Olive drab green insulated bottle with flared screw lid and flat top.',
//     categoriy: 'bottles',
//     productInStock: true,
//   },
//   {
//     id: 3,
//     name: 'Focus Paper Refill',
//     href: '#',
//     price: 89,
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
//     imageAlt:
//       'Person using a pen to cross a task off a productivity paper card.',
//     categoriy: 'papers',
//     productInStock: true,
//   },
//   {
//     id: 4,
//     name: 'Machined Mechanical Pencil',
//     href: '#',
//     price: 20,
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//     imageAlt:
//       'Hand holding black machined steel mechanical pencil with brass tip and top.',
//     categoriy: 'pens',
//     productInStock: false,
//   },
//   {
//     id: 5,
//     name: 'Machined Mechanical Pencil',
//     href: '#',
//     price: 80,
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//     imageAlt:
//       'Hand holding black machined steel mechanical pencil with brass tip and top.',
//     categoriy: 'pens',
//     productInStock: true,
//   },
//   {
//     id: 6,
//     name: 'Machined Mechanical Pencil',
//     href: '#',
//     price: 100,
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//     imageAlt:
//       'Hand holding black machined steel mechanical pencil with brass tip and top.',
//     categoriy: 'pens',
//     productInStock: true,
//   },
//   {
//     id: 7,
//     name: 'Machined Mechanical Pencil',
//     href: '#',
//     price: 135,
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//     imageAlt:
//       'Hand holding black machined steel mechanical pencil with brass tip and top.',
//     categoriy: 'pens',
//     productInStock: false,
//   },
//   // More products...
// ];

export default function Products_list({
  search,
  categories,
  min_price,
  max_price,
  status,
}) {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((value) => {
        setData(value.products);
        setProducts(value.products); // Set products after data is fetched
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setProducts(
      data.filter(
        (item) =>
          (search == ''
            ? true
            : item.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())) &&
          (categories == 'all' ? true : item.category == categories) &&
          (min_price >= max_price
            ? item.price >= min_price
            : item.price >= min_price && item.price <= max_price) &&
          (status == true ? item.stock >= 1 : item.stock == 0)
      )
    );
  }, [search, categories, min_price, max_price, status]);

  // useEffect(() => {
  //   setProducts(
  //     data.filter((item) =>
  //       categories == 'all' ? true : item.categoriy == categories
  //     )
  //   );
  // }, [categories]);

  // useEffect(() => {
  //   setProducts(data.filter((item) => item.price >= min_price));
  // }, [min_price]);

  // useEffect(() => {
  //   setProducts(
  //     data.filter((item) =>
  //       max_price <= min_price
  //         ? item.price >= min_price
  //         : item.price <= max_price && item.price >= min_price
  //     )
  //   );
  // }, [max_price]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 px-10 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href="#" className="group relative">
              <span
                className={
                  product.stock >= 1
                    ? 'block stock bg-green-400'
                    : 'block stock bg-red-400'
                }
              ></span>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.images[0]}
                  className="maxh h-full w-full object-center bg-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
      {products.length <= 0 ? (
        <h1 className="text-red-400 m-4">No Such element in stock</h1>
      ) : (
        true
      )}
    </div>
  );
}
