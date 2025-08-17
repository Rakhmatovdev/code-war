import React from "react";
import { Table, TableProps } from "antd";
import { createStyles } from "antd-style";
import { useTranslation } from "react-i18next";

// import ArrowLeftIcon from "@/components/icons/pagination/ArrowLeft.tsx";
// import ArrowRightIcon from "@/components/icons/pagination/ArrowRight.tsx";

const useStyle = createStyles(({ css }) => {
  const antCls = ".ant";
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: rgba(100, 116, 139, 0.4) transparent;
          }
          ${antCls}-table-body::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          ${antCls}-table-body::-webkit-scrollbar-track {
            background: transparent;
          }
          ${antCls}-table-body::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: rgba(100, 116, 139, 0.4);
            transition: background-color 0.2s, opacity 0.3s;
            opacity: 0;
          }
          .dark & {
            ${antCls}-table-body {
              scrollbar-color: rgba(148, 163, 184, 0.5) transparent;
            }

            ${antCls}-table-body::-webkit-scrollbar-thumb {
              background-color: rgba(148, 163, 184, 0.5);
            }

            ${antCls}-table-body:hover::-webkit-scrollbar-thumb {
              opacity: 1;
            }
          }
        }
      }
      .hf-table-header,
      .hf-table-footer,
      .hf-table-control-panel {
        margin-bottom: 8px;
        padding: 4px 8px;
        background: #fafafa;
        border: 1px solid #e8e8e8;
        border-radius: 4px;
      }
      .hf-table-control-panel {
        margin-bottom: 16px;
      }
    `,
  };
});

export interface HFTableProps<T> extends TableProps<T> {
  headerComponent?: React.ReactNode;
  footerComponent?: React.ReactNode;
  controlPanel?: React.ReactNode;
  total?: number;
  tableParams?: any;
  customPagination?: boolean;
}

export function HTable<T extends { key: React.Key }>({
                                                       headerComponent,
                                                       footerComponent,
                                                       controlPanel,
                                                       className,
                                                       total,
                                                       tableParams,
                                                       customPagination = false,
                                                       pagination,
                                                       ...tableProps
                                                     }: HFTableProps<T>) {
  const { styles } = useStyle();
  const { t } = useTranslation();

  // Default pagination configuration
  const defaultPagination = customPagination
    ? {
      ...tableParams?.pagination,
      position: ["bottomRight"] as const,
      locale: {
        page: "",
        prev_page: t("table.prev"),
        next_page: t("table.next"),
        items_per_page: "",
        jump_to: "",
        jump_to_confirm: "",
      },
      total: total || 0,
      showSizeChanger: true,
      showQuickJumper: true,
      className: "custom-pagination",
      itemRender: (
        _page: any,
        type: string,
        originalElement: React.ReactElement
      ) => {
        if (type === "prev") {
          return React.cloneElement(originalElement, {
            children: (
              <span className="flex items-center gap-1 px-3 py-[5px] rounded-lg border mt-[4px] dark:border-dborder dark:text-white">
                  {/* <ArrowLeftIcon /> */}
                  <span className="text-sm font-semibold text-mediumSlate dark:text-white">
                    {/* {t("table.prev")} */}
                    Oldingi
                  </span>
                </span>
            ),
          });
        }
        if (type === "next") {
          return React.cloneElement(originalElement, {
            children: (
              <span className="flex items-center gap-1 px-3 py-[5px] rounded-lg border mt-[4px] dark:border-dborder dark:text-white">
                  <span className="text-sm font-semibold text-mediumSlate dark:text-white">
                    {/* {t("table.next")} */}
Keyingi
                  </span>
                  {/* <ArrowRightIcon /> */}
                </span>
            ),
          });
        }
        return originalElement;
      },
      ...pagination,
    }
    : pagination;

  return (
    <div className="hf-table-wrapper">
      {controlPanel && (
        <div className="hf-table-control-panel">{controlPanel}</div>
      )}
      {headerComponent && (
        <div className="hf-table-header">{headerComponent}</div>
      )}
      <Table<T>
        className={`${styles.customTable} ${className || ""}`}
        pagination={defaultPagination}
        {...tableProps}
      />
      {footerComponent && (
        <div className="hf-table-footer">{footerComponent}</div>
      )}
    </div>
  );
}

export default HTable;
