// HFTable.tsx
import React from 'react';
import { Table, TableProps } from 'antd';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ css}) => {
    const antCls = '.ant';
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
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
}

export function HFTable<T extends { key: React.Key }>({
  headerComponent,
  footerComponent,
  controlPanel,
  className,
  ...tableProps
}: HFTableProps<T>) {
  const { styles } = useStyle();

  return (
    <div className="hf-table-wrapper">
      {controlPanel && (
        <div className="hf-table-control-panel">
          {controlPanel}
        </div>
      )}
      {headerComponent && (
        <div className="hf-table-header">
          {headerComponent}
        </div>
      )}
      <Table<T>
        className={`${styles.customTable} ${className || ''}`}
        {...tableProps}
      />
      {footerComponent && (
        <div className="hf-table-footer">
          {footerComponent}
        </div>
      )}
    </div>
  );
}

export default HFTable;
