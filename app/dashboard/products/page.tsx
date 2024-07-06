"use client";

import TableCategoryComponent from "@/components/category/table_category";
import HeaderLayout from "@/components/header_layout";
import { getProduct } from "@/hooks/useProduct";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/navigation";

interface IProductsPage {}

export default function ProductsPage(props: IProductsPage) {
  const router = useRouter();
  const { products, isLoading, error } = getProduct();
  return (
    <div className="flex flex-col">
      <HeaderLayout title="Products"></HeaderLayout>
      <div className="mt-8 w-full bg-white rounded-xl">
        {isLoading && (
          <div className="flex justify-center py-4">
            <span className="loading loading-dots loading-md"></span>
          </div>
        )}
        {products && !isEmpty(products) && !error && isEmpty(error) && (
          <div className="overflow-x-auto">
            <TableCategoryComponent
              data={products}
              headerLabel={["Name", "Price", "SKU", "Status", "Quantity"]}
              withAction
              editAction={(id: string) => {
                router.push(`/dashboard/products/edit/${id}`);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
