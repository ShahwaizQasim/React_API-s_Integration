import axios from "axios";
import { useEffect, useState } from "react";
import { PrivateVariables } from "../../config/PrivateVariable";
import { getToken } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constant";
import qs from "qs";

interface ProductsData {
  ProductName: string;
  ProductPicture: string;
  ProductPrice: string;
  description: string;
}

type ParamsType = {
  ProductName?: string;
};

const ProductsPage = () => {
  const [data, setData] = useState<ProductsData[]>([]);
  const [loading, setLoading] = useState(false);
  const [ProductsName, setProductsName] = useState("");
  const token = getToken();

  console.log("+++++", ProductsName);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let params: ParamsType = {};
      console.log("params", params);

      if (ProductsName.trim()) params.ProductName = ProductsName.trim();

      const res = await axios.get(
        `${PrivateVariables.Api_Url}api/get/products-get`,
        {
          params,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("products+++++", res.data.products);
      setData(res.data.products || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const t = setTimeout(() => fetchProducts(), 400);
    return () => clearTimeout(t);
  }, [ProductsName]);
  return (
    <div className="min-h-screen container mx-auto">
      <h1 className="text-center mt-10 text-3xl font-semibold">
        Products Page
      </h1>
      <div>
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-400 p-2 py-3 rounded-sm"
          value={ProductsName}
          onChange={(e) => setProductsName(e.target.value)}
        />
      </div>
      <div className=" flex justify-center items-center gap-4 flex-col mt-8">
        {loading ? (
          <h1>loading....</h1>
        ) : // <div className="flex items-center justify-center h-screen bg-black">
        //   <span className="loader"></span>
        // </div>
        data.length > 0 ? (
          <>
            <div className=" grid grid-cols-3 gap-10 mt-4">
              {data.map((item, ind) => (
                <div key={ind} className="flex flex-col gap-2">
                  <div className="flex justify-center">
                    <img
                      src={item?.ProductPicture}
                      alt={item?.ProductName}
                      className="object-cover h-40 w-full"
                    />
                  </div>

                  <h1 className="mt-2">{item.ProductName}</h1>
                  <p>{item.description}</p>
                  <p>{item.ProductPrice}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>No data found</p>
        )}
        <Link to={ROUTES.HOME}>Go to Home Page</Link>
      </div>
    </div>
  );
};

export default ProductsPage;
