"use client";

import ItemTableCategoryComponent from "./item_table_category";
import { Category } from "@/types/category";

interface ITableCategory {
  data: Category[] | undefined;
  headerLabel: string[];
  withAction: boolean;
  editAction?: (id: string) => void;
}

const TableCategoryComponent: React.FC<ITableCategory> = (props) => {
  const { data, headerLabel, withAction = false, editAction } = props;
  // const [table, setTable] = useState(DATA_CATEGORIES ?? []);
  // const [_isPending, startTransition] = useTransition();

  // const isCheckedAllValue = useMemo(() => {
  //   return table.every((item) => item.isCheck);
  // }, [table]);

  // const checkAllCategories = useCallback(() => {
  //   if (isCheckedAllValue) {
  //     startTransition(() => {
  //       setTable(DATA_CATEGORIES.map((item) => ({ ...item, isCheck: false })));
  //     });
  //   } else {
  //     startTransition(() => {
  //       setTable(DATA_CATEGORIES.map((item) => ({ ...item, isCheck: true })));
  //     });
  //   }
  // }, [isCheckedAllValue]);

  // const checkCategory = useCallback(
  //   (id: string, value: boolean) => {
  //     startTransition(() => {
  //       setTable(
  //         table.map((item) => {
  //           if (item.id === id) {
  //             return { ...item, isCheck: value };
  //           }
  //           return item;
  //         })
  //       );
  //     });
  //   },
  //   [table]
  // );

  return (
    <table className="table">
      <thead>
        <tr>
          {headerLabel.map((item, index) => {
            return <th key={`header-${index}`}>{item}</th>;
          })}
          {withAction && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item: Category, index) => {
            return (
              <ItemTableCategoryComponent
                key={`item-category-${index}`}
                headerLabel={headerLabel}
                data={item}
                withAction={withAction}
                editAction={editAction}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default TableCategoryComponent;
