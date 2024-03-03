"use client";

import React, { useCallback } from "react";
// Components
import FormCreateCategory, {
  CategoryValues,
} from "@/components/category/form_create_category";
import HeaderLayout from "@/components/header_layout";
import { useRouter, usePathname, useParams } from "next/navigation";

interface IEditCategoryPage {}
const EditCategoryPage: React.FC<IEditCategoryPage> = (props) => {
  //   const { id } = props.params;
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const { id } = params ?? {};
  console.log("Pathname: ", { searchParams: id });
  const onSubmit = useCallback((values: CategoryValues) => {
    console.log("Category: ", values);
  }, []);
  return (
    <div className="flex flex-col">
      <HeaderLayout showBack title="Edit Category" />
      <div className="mt-8 w-full bg-white rounded-xl">
        <div className="flex flex-col p-8">
          <FormCreateCategory
            onSubmit={onSubmit}
            data={{
              name: "Test",
              description: "Test",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditCategoryPage;
