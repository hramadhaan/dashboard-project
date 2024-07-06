"use client";

import React from "react";
import { LuPencil, LuTrash } from "react-icons/lu";

interface IItemTableCategory {
  data: any;
  withAction: boolean;
  headerLabel: string[];
  editAction?: Function;
}

const ItemTableCategoryComponent: React.FC<IItemTableCategory> = (props) => {
  const { withAction, data, headerLabel, editAction } = props;

  return (
    <tr>
      {headerLabel.map((label) => {
        return <td key={`label-${label}`}>{data[label.toLowerCase()]}</td>;
      })}
      {withAction && (
        <td>
          <div className="join join-horizontal">
            <div
              role="button"
              className="btn join-item btn-primary"
              onClick={(event) => {
                event.preventDefault();
                typeof editAction === "function" && editAction(data._id);
              }}
            >
              <LuPencil />
            </div>
            <div role="button" className="btn join-item btn-error text-white">
              <LuTrash />
            </div>
          </div>
        </td>
      )}
    </tr>
  );
};

export default ItemTableCategoryComponent;
