import Head from "next/head";
import Link from "next/link";
import React from "react";
import LayoutAdmin from "../../../components/Layout/admin";
import useProducts from "../../../hooks/use-product";

type Props = {};

function ListProduct({}: Props) {
  const { data, error, remove } = useProducts();
  if (error) return <div>error</div>;
  if (!data) return <div>loading</div>;
  return (
    <>
      <Head>
        <title>Admin Product</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64 flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="mt-4 mx-4">
          <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <Link href="product/add">
              <a className="float-right bg-blue-600 my-2 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span>Add</span>
              </a>
            </Link>
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th className="px-4 py-3">STT</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">Price Sale</th>
                    <th className="px-4 py-3">Image</th>
                    <th className="px-4 py-3">Status</th>
                    {/* <th className="px-4 py-3">Categories ID</th> */}
                    <th className="px-4 py-3">Auth</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                  {data.map((item: any, index: any) => (
                    <tr
                      className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
                      key={index}
                    >
                      <td className="px-4 py-3 text-sm">{index + 1}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <p className="font-semibold">{item.name}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">{item.price}</td>
                      <td className="px-4 py-3 text-xs">{item.sale_price}</td>
                      <td className="px-4 py-3 text-sm">
                        <img src={item.image} alt={item.name} />
                      </td>
                      <td className="px-4 py-3 text-sm">{item.status}</td>
                      {/* <td className="px-4 py-3 text-sm">{item.categoryId}</td> */}
                      <td className="px-4 py-3 text-sm">{item.author}</td>
                      <td className="px-4 py-3 text-sm">
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            <Link href={`/admin/product/${item._id}`}>
                              Edit
                            </Link>
                          </span>
                          /
                          <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                            <button onClick={() => remove(item._id)}>
                              Delete
                            </button>
                          </span>
                        </td>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ListProduct.Layout = LayoutAdmin;

export default ListProduct;
