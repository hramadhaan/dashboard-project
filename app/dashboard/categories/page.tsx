"use client";

import HeaderLayout from "@/components/header_layout";
import TableCategoryComponent from "@/components/category/table_category";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { getCategory } from "@/hooks/useCategory";
import { isEmpty } from "lodash";

const CategoriesPage = () => {
  const router = useRouter();
  const { categories, isLoading, error } = getCategory();

  const navigateToAddCategory = useCallback(() => {
    router.push("/dashboard/categories/create");
  }, []);

  const renderAction = useMemo<React.ReactNode>(() => {
    return (
      <div
        role="button"
        onClick={navigateToAddCategory}
        className="btn btn-primary text-white"
      >
        <span>Add Category</span>
      </div>
    );
  }, []);

  return (
    <div className="flex flex-col">
      <HeaderLayout title="Categories" action={renderAction} />
      {/* Error */}
      {/* <div role="alert" className="alert alert-error mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div> */}
      <div className="mt-8 w-full bg-white rounded-xl">
        {isLoading && (
          <div className="flex justify-center py-4">
            <span className="loading loading-dots loading-md"></span>
          </div>
        )}
        {categories && !isEmpty(categories) && !error && isEmpty(error) && (
          <div className="overflow-x-auto">
            <TableCategoryComponent
              data={categories}
              headerLabel={["Name", "Description"]}
              withAction
              editAction={(id: string) =>
                router.push(`/dashboard/categories/edit/${id}`)
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
