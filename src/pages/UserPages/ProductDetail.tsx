import axios from "axios";
import { useEffect, useState } from "react";
import { PrivateVariables } from "../../config/PrivateVariable";
import { getToken } from "../../utils/helpers";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

interface ProductsData {
  _id: string;
  ProductName: string;
  ProductPicture: string;
  ProductPrice: string;
  description: string;
}

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState<ProductsData | null>(null);
  const [loading, setLoading] = useState(false);
  const token = getToken();

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${PrivateVariables.Api_Url}api/get/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const product = res.data.product || res.data.products || res.data;
      setData(Array.isArray(product) ? product[0] || null : product || null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  console.log("++++++++++", data);

  useEffect(() => {
    const t = setTimeout(() => fetchProducts(), 400);
    return () => clearTimeout(t);
  }, [id]);

  return (
    <div className="min-h-screen container mx-auto">
      <h1 className="text-center mt-10 text-3xl font-semibold">
        Product Detail
      </h1>
      <div className=" flex justify-center items-center gap-4 flex-col mt-8">
        {loading ? (
          <CircularProgress />
        ) : data ? (
          <div className=" max-w-xl flex justify-center gap-10 mt-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-center">
                <img
                  src={data.ProductPicture}
                  alt={data.ProductName}
                  className="object-cover h-40 w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="mt-2">{data.ProductName}</h1>
                <p>{data.description}</p>
                <p>{data.ProductPrice}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
