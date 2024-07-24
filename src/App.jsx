import { useState } from 'react';
import Products_list from './components/products-list';
import './App.css';

function App() {
  const [filterDate, setFilterDate] = useState({
    search: '',
    categories: 'all',
    min: 0,
    max: 0,
    inStock: true,
  });

  return (
    <>
      <div className="mainDiv bg-white">
        <div class="m-10 w-screen max-w-screen-md">
          <div class="flex flex-col">
            <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
              <div class="relative mb-10 w-full flex  items-center justify-between rounded-md">
                <svg
                  class="absolute left-2 block h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" class=""></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
                </svg>
                <input
                  onChange={(e) =>
                    setFilterDate({ ...filterDate, search: e.target.value })
                  }
                  value={filterDate.search}
                  type="name"
                  name="search"
                  class="bg-dark h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  placeholder="Search by name..."
                />
              </div>

              <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="flex flex-col">
                  <label
                    for="manufacturer"
                    class="text-sm font-medium text-stone-600"
                  >
                    Categories
                  </label>

                  <select
                    onChange={(e) =>
                      setFilterDate({
                        ...filterDate,
                        categories: e.target.value,
                      })
                    }
                    value={filterDate.categories}
                    id="manufacturer"
                    class="bg-dark mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option value="all" selected>
                      All
                    </option>
                    <option value="beauty">Beauty</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="groceries">Groceries</option>
                  </select>
                </div>

                <div class="flex flex-col">
                  <label for="name" class="text-sm font-medium text-stone-600">
                    Min Price
                  </label>
                  <div class="flex flex-row items-center">
                    <span className="block text-black font-bold">$</span>
                    <input
                      onChange={(e) =>
                        setFilterDate({
                          ...filterDate,
                          min:
                            e.target.value < 0
                              ? 0
                              : e.target.value == ''
                              ? 0
                              : e.target.value,
                        })
                      }
                      value={filterDate.min}
                      placeholder="000"
                      type="number"
                      id="price"
                      class="bg-dark mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>

                <div class="flex flex-col">
                  <label for="date" class="text-sm font-medium text-stone-600">
                    Max Price
                  </label>
                  <div class="flex flex-row items-center">
                    <span className="block text-black font-bold">$</span>
                    <input
                      onChange={(e) =>
                        setFilterDate({
                          ...filterDate,
                          max:
                            e.target.value < 0
                              ? 0
                              : e.target.value == ''
                              ? 0
                              : e.target.value,
                        })
                      }
                      value={filterDate.max}
                      placeholder="000"
                      type="number"
                      id="price"
                      class="bg-dark mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>

                <div class="flex flex-col">
                  <label
                    for="status"
                    class="text-sm font-medium text-stone-600"
                  >
                    Status
                  </label>

                  <select
                    onChange={(e) =>
                      setFilterDate({
                        ...filterDate,
                        inStock: e.target.value == 'true' ? true : false,
                      })
                    }
                    value={filterDate.inStock}
                    id="status"
                    class="bg-dark mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option value={true} selected>
                      In Stock
                    </option>
                    <option value={false}>Slod Out</option>
                  </select>
                </div>
              </div>

              {/* <div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                <button class="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">
                  Reset
                </button>
                <button class="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">
                  Search
                </button>
              </div> */}
            </div>
          </div>
        </div>
        {/* Products Component */}
        <Products_list
          search={filterDate.search}
          categories={filterDate.categories}
          min_price={filterDate.min}
          max_price={filterDate.max}
          status={filterDate.inStock}
        />
      </div>
    </>
  );
}

export default App;
