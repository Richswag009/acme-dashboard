import React from "react";

import CustomersTable from "@/app/ui/customers/table";
import Pagination from "@/app/ui/invoices/pagination";
import {
  fetchCustomers,
  fetchCustomersPages,
  fetchFilteredCustomers,
  fetchInvoicesPages,
} from "@/app/lib/data";
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);
  console.log(totalPages + currentPage);
  const customers = await fetchFilteredCustomers(query, currentPage);

  fetch;
  return (
    <div className="w-full">
      <CustomersTable customers={customers} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
