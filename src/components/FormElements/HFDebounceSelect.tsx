import React, { useState, useEffect, useCallback } from "react";
import { Controller } from "react-hook-form";
import { Select } from "antd";

type Option = {
  label: React.ReactNode;
  value: string | number;
};

type DebounceSelectProps = {
  control: any;
  name: string;
  labelInValue?: boolean;
  placeholder?: string;
  fetchOptions?: (search: string) => Promise<Option[]>;
  onSearch?: (value: string) => void;
  filterOption?: boolean;
  notFoundContent?: React.ReactNode;
  loading?: boolean;
  options?: Option[];
  className?: string;
  defaultValue?: any;
  prefix?: React.ReactNode;
};

export const DebounceSelect: React.FC<DebounceSelectProps> = ({
  control,
  name,
  labelInValue = false,
  placeholder = "",
  onSearch,
  
  filterOption = false,
  notFoundContent,
  loading,
  options = [],
  className,
  defaultValue,
  prefix,
}) => {
  const [internalOptions, setInternalOptions] = useState<Option[]>([]);

  // Prevent unnecessary setState loops
  useEffect(() => {
    const isEqual =
      options.length === internalOptions.length &&
      options.every((opt, i) => opt.value === internalOptions[i]?.value);

    if (!isEqual) {
      setInternalOptions(options);
    }
  }, [options, internalOptions]);

  // Memoized search handler
  const handleSearch = useCallback(
    (value: string) => {
      if (onSearch) {
        onSearch(value);
      }
    },
    [onSearch]
  );



  return (
    <div className="relative w-full">
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Select
            showSearch
            prefix={prefix}
            labelInValue={labelInValue}
            placeholder={placeholder}
            filterOption={filterOption}
            onSearch={handleSearch}
            notFoundContent={notFoundContent}
            loading={loading}
            options={internalOptions}
            onChange={field.onChange}
            value={
              labelInValue ? field.value ?? null : field.value ?? undefined
            }
            className={`h-[40px] w-full !text-[#1E1E1E] border border-[#E5E7EB] rounded-lg text-sm font-normal ${className}`}
          />
        )}
      />
    </div>
  );
};
