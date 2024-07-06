"use client";

import React, { useCallback } from "react";
// Components
import FormCreateCategory, {
  CategoryValues,
} from "@/components/category/form_create_category";
import HeaderLayout from "@/components/header_layout";
import {
  useRouter,
  usePathname,
  useParams,
  useSearchParams,
} from "next/navigation";
import { getCategoryById } from "@/hooks/useCategory";
import { isEmpty } from "lodash";

interface IEditCategoryPage {}
const EditCategoryPage: React.FC<IEditCategoryPage> = (props) => {
  //   const { id } = props.params;
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { id } = params ?? {};
  const { category, isLoading, error } = getCategoryById(id);
  console.log("Detail Category: ", { category, isLoading, error });
  const onSubmit = useCallback((values: CategoryValues) => {
    console.log("Category: ", values);
    const params = new URLSearchParams(searchParams);
    params.set("search", "hanif");
    const query = params.size ? "?" + params.toString() : "";
    router.push("/dashboard/categories" + query);
  }, []);
  return (
    <div className="flex flex-col">
      <HeaderLayout showBack title="Edit Category" />
      <div className="mt-8 w-full bg-white rounded-xl">
        {category && !isEmpty(category) && (
          <div className="flex flex-col p-8">
            <FormCreateCategory
              onSubmit={onSubmit}
              data={{
                name: category?.name ?? "",
                description: category?.description ?? "",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EditCategoryPage;
