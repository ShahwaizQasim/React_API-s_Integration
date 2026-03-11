import axios from "axios";
import { useEffect, useState } from "react";
import { PrivateVariables } from "../../config/PrivateVariable";
import { getToken } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constant";

interface ProductsData {
  ProductName: string;
  ProductPicture: string;
  ProductPrice: string;
  description: string;
}

const ProductsPage = () => {
  const [data, setData] = useState<ProductsData[]>([]);
  const [loading, setLoading] = useState(false);
  const token = getToken();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${PrivateVariables.Api_Url}api/get/products-get`,
        {
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
    fetchProducts();
  }, []);
  return (
    <div className="min-h-screen flex justify-center items-center gap-4 flex-col">
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-black">
          <span className="loader"></span>
        </div>
      ) : data.length > 0 ? (
        <>
          <h1 className="text-3xl font-semibold mb-4">Products Page</h1>
          <div className="container mx-auto grid grid-cols-3 gap-10 mt-4">
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
  );
};

export default ProductsPage;
