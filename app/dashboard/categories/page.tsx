"use client";

import HeaderLayout from "@/components/header_layout";
import TableCategoryComponent from "@/components/category/table_category";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { LuActivity, LuPencil, LuTrash } from "react-icons/lu";

const CategoriesPage = () => {
  const router = useRouter();

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
      <div className="mt-8 w-full bg-white rounded-xl">
        <div className="overflow-x-auto">
          <TableCategoryComponent />
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
