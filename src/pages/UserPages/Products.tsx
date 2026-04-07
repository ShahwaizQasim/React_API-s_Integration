import axios from "axios";
import { useEffect, useState } from "react";
import { PrivateVariables } from "../../config/PrivateVariable";
import { getToken } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { CircularProgress, Pagination } from "@mui/material";

interface ProductsData {
  _id: string;
  ProductName: string;
  ProductPicture: string;
  ProductPrice: string;
  description: string;
}

type ParamsType = {
  ProductName?: string;
  page?: number;
  limit?: number;
};

const ProductsPage = () => {
  const [data, setData] = useState<ProductsData[]>([]);
  const [loading, setLoading] = useState(false);
  const [ProductsName, setProductsName] = useState("");
  const [totalPages, setTotalPages] = useState(3);
  const [page, setPage] = useState(1);
  const token = getToken();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let params: ParamsType = {
        page: page,
        limit: 3,
      };
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
      setData(res.data.products || []);
      setPage(res.data.currentPage || 1);
      setTotalPages(res.data.totalPages || 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const t = setTimeout(() => fetchProducts(), 400);
    return () => clearTimeout(t);
  }, [ProductsName, page]);

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
          onChange={(e) => {
            setProductsName(e.target.value);
            setPage(1);
          }}
        />
      </div>
      <div className=" flex justify-center items-center gap-4 flex-col mt-8">
        {loading ? (
          <CircularProgress />
        ) : data.length > 0 ? (
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
                  <div className="flex justify-between">
                    <p>{item.ProductPrice}</p>
                    <Link
                      to={`/products/${item?._id}`}
                      className="hover:text-blue-500"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(e, value) => setPage(value)}
              variant="outlined"
              shape="rounded"
            />
          </>
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
