import Squest from "../../components/icons/outline/squest.png";
import { useQuery } from "@tanstack/react-query";
import AuthService from "../../config/service/auth.service";
import { Table } from "antd";
import { useState } from "react";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router";




interface Assignment {
  id: number |string;
  key: React.Key;
  title: string;
  plan_title: string;
}

 interface TableParams {
        pagination: {
            current: number;
            pageSize: number;
        };
        filters?: Record<string, any>;
        sortOrder?: "ascend" | "descend";
        sortField?: string;
    }
const SideQuest = () => {
   const [tableParams, setTableParams] = useState<TableParams>({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });

  const { data: Assigment } = useQuery({
    queryKey: ["Assigment"],
    queryFn: () => AuthService.getAssignments(),
  });
  console.log(Assigment?.results);

  if (Squest === undefined) {
    return <div className="w-screen h-screen  bg-slate-900 " />;
  }
  

  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
        setTableParams({
            pagination,
            filters,
            sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
            sortField: Array.isArray(sorter) ? undefined : sorter.field,
        });
    };

 const columns: ColumnsType<Assignment> = [
  {
    title: <p className="text-center table_th">N</p>,
    key: "index",
    render: (_: unknown, __: Assignment, index: number) => {
      const currentPage = tableParams.pagination?.current || 1;
      const pageSize = tableParams.pagination?.pageSize || 10;
      const rowNumber = (currentPage - 1) * pageSize + index + 1;
      return <p className="text-center">{rowNumber}</p>;
    },
    width: 75,
  },
  {
    title: <p className="table_th">Id</p>,
    dataIndex: "id",
    key: "id",
    width: 135,
    render: (_, record) => (
      <Link to={`${record?.id}`} className="line-clamp-1">
        {record.id || "-"}
      </Link>
    ),
  },
  {
    title: <p className="table_th">Nomi</p>,
    dataIndex: "title",
    key: "title",
    width: 135,
    render: (_, record) => (
      <Link to={`${record?.id}`} className="line-clamp-1">
        {record?.title ? record?.title : "-"}
      </Link>
    ),
  },
  {
    title: <p className="table_th">Plan title</p>,
    dataIndex: "plan_title",
    key: "plan_title",
    render: (_, record) => {
      if (!record?.plan_title) return "-";
      const formattedText = record?.plan_title.startsWith("+")
        ? record?.plan_title
        : `+${record?.plan_title}`;
      return (
        <Link to={`${record?.id}`} className="line-clamp-1">
          {formattedText}
        </Link>
      );
    },
    width: 205,
  },
];

  return (
    <div>
      <section className="relative h-[80vh]">
        <div className="fixed inset-0 -z-10 w-full h-full">
        <img
          src={Squest}
          loading="lazy"
          alt="start test background"
          className="w-full h-full object-cover"
        />
      </div>
<div className="">
    <Table
     key={JSON.stringify(tableParams)}
    bordered
    rowKey={(record) => record.id}
    dataSource={Assigment?.results || []}
    onChange={handleTableChange}
       scroll={{y: "calc(100vh - 440px)"}}
    className="hf-table mx-4 sm:mx-16 mt-4 sm:mt-0  !bg-transparent"
    columns={columns}
   pagination={{...tableParams.pagination,
                        position: ["bottomRight"],
                        // total: immigrants?.count || 0,
                        showSizeChanger: true,
                        showQuickJumper: true,
                        className: "custom-pagination",
                        itemRender: (_, type, originalElement) => {
                            if (type === "prev") {
                                return (
                                    <a className=" border px-3 py-[7px] rounded-lg flex items-center gap-1 dark:text-white dark:border-[#3A405A]">
                                        <p className="text-[#414651] text-base font-semibold dark:text-white">
                                           prev
                                        </p>
                                    </a>
                                );
                            }
                            if (type === "next") {
                                return (
                                    <a className=" border px-3 py-[7px] rounded-lg flex items-center gap-1 dark:border-[#3A405A] dark:text-white">
                                        <p className="text-[#414651] text-base font-semibold dark:text-white">
                                            {" "}
                                           next
                                        </p>
                                       
                                    </a>
                                );
                            }
                            return originalElement;
                        },
                    }}
    />

</div>

      </section>
      
    </div>
  );
};

export default SideQuest;
