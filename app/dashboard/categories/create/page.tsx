"use client";

import React, { useCallback } from "react";
// Components
import FormCreateCategory, {
  CategoryValues,
} from "@/components/category/form_create_category";
import HeaderLayout from "@/components/header_layout";

const CreateCategoryPage = () => {
  const onSubmit = useCallback((values: CategoryValues) => {
    console.log("Category: ", values);
  }, []);

  return (
    <div className="flex flex-col">
      <HeaderLayout showBack title="Create Category" />
      <div className="mt-8 w-full bg-white rounded-xl">
        <div className="flex flex-col p-8">
          <FormCreateCategory onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CreateCategoryPage;
