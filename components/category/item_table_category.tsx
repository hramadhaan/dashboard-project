"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { LuActivity, LuPencil, LuTrash } from "react-icons/lu";

export interface Category {
  id: string;
  category_name: string;
  category_parent: string;
  category_level: number;
  isCheck: boolean;
}
interface IItemTableCategory {
  data: Category;
  onCheck: (id: string, value: boolean) => void;
}

const ItemTableCategoryComponent: React.FC<IItemTableCategory> = (props) => {
  const router = useRouter();
  return (
    <tr>
      <th>
        <label>
          <input
            className="checkbox checkbox-primary"
            type="checkbox"
            checked={props.data.isCheck}
            onChange={(event) => {
              event.preventDefault();
              props.onCheck(props.data.id, event.target.checked);
            }}
          />
        </label>
      </th>
      <td>
        <div>
          <LuActivity />
        </div>
      </td>
      <td>{props.data.category_name}</td>
      <td>{props.data.category_parent}</td>
      <td>{props.data.category_level}</td>
      <td>
        <div className="join join-horizontal">
          <div
            role="button"
            className="btn join-item btn-primary"
            onClick={(event) => {
              event.preventDefault();
              router.push(`/dashboard/categories/edit/${props.data.id}`);
            }}
          >
            <LuPencil />
          </div>
          <div role="button" className="btn join-item btn-error text-white">
            <LuTrash />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ItemTableCategoryComponent;
