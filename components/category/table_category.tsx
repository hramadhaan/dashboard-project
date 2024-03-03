"use client";

import React, { useCallback, useMemo, useState, useTransition } from "react";
import ItemTableCategoryComponent, { Category } from "./item_table_category";

interface ITableCategory {}

const DATA_CATEGORIES = [
  {
    id: "1",
    category_name: "Ruang Makan",
    category_parent: "-",
    category_level: 1,
    isCheck: false,
  },
  {
    id: "2",
    category_name: "Kamar Mandi",
    category_parent: "-",
    category_level: 1,
    isCheck: false,
  },
  {
    id: "3",
    category_name: "Dapur",
    category_parent: "-",
    category_level: 1,
    isCheck: false,
  },
  {
    id: "4",
    category_name: "Tempat Tidur",
    category_parent: "-",
    category_level: 1,
    isCheck: false,
  },
];

const TableCategoryComponent: React.FC<ITableCategory> = (props) => {
  const [table, setTable] = useState(DATA_CATEGORIES ?? []);
  const [_isPending, startTransition] = useTransition();

  const isCheckedAllValue = useMemo(() => {
    return table.every((item) => item.isCheck);
  }, [table]);

  const checkAllCategories = useCallback(() => {
    if (isCheckedAllValue) {
      startTransition(() => {
        setTable(DATA_CATEGORIES.map((item) => ({ ...item, isCheck: false })));
      });
    } else {
      startTransition(() => {
        setTable(DATA_CATEGORIES.map((item) => ({ ...item, isCheck: true })));
      });
    }
  }, [isCheckedAllValue]);

  const checkCategory = useCallback(
    (id: string, value: boolean) => {
      startTransition(() => {
        setTable(
          table.map((item) => {
            if (item.id === id) {
              return { ...item, isCheck: value };
            }
            return item;
          })
        );
      });
    },
    [table]
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <label>
              <input
                className="checkbox checkbox-primary"
                type="checkbox"
                onChange={(event) => {
                  event.preventDefault();
                  checkAllCategories();
                }}
                checked={isCheckedAllValue}
              />
            </label>
          </th>
          <th>Icon</th>
          <th>Category Name</th>
          <th>Category Parent</th>
          <th>Category Level</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {table.map((item: Category, index) => {
          return (
            <ItemTableCategoryComponent
              key={`item-category-${index}`}
              data={item}
              onCheck={checkCategory}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TableCategoryComponent;
