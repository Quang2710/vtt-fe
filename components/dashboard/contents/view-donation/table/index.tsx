"use client";
import { Pagination } from "@heroui/react";
import { useState } from "react";
import { fakeDonations } from "./fakeData";

export default function DonationTable() {
  // Pagination logic
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(fakeDonations.length / pageSize);
  const paginatedDonations = fakeDonations.slice(
    (page - 1) * pageSize,
    page * pageSize
  );
  return (
    <div>
      <div className="overflow-x-auto border-2 border-gray-300">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-white">
            <tr className="text-gray-700 uppercase font-bold text-medium">
              <th className="px-4 border-gray-300 border-r-2 py-3">ID</th>
              <th className="px-4 border-gray-300 border-r-2 py-3">
                PAYMENT PLATFORM
              </th>
              <th className="px-4 border-gray-300 border-r-2 py-3">
                DONATION TYPE
              </th>
              <th className="px-4 border-gray-300 border-r-2 py-3">
                DATE ADDED (IN UTC)
              </th>
              <th className="px-4 border-gray-300 border-r-2 py-3">NAME</th>
              <th className="px-4 border-gray-300 border-r-2 py-3">AMOUNT</th>
              <th className="px-4 py-3">PACKAGE</th>
            </tr>
          </thead>
          <tbody>
            {paginatedDonations.map((donation) => (
              <tr
                key={donation.id}
                className="border-t-2 border-gray-300 hover:bg-gray-50"
              >
                <td className="px-4 py-2">{donation.id}</td>
                <td className="px-4 py-2">{donation.paymentPlatform}</td>
                <td className="px-4 py-2">{donation.donationType}</td>
                <td className="px-4 py-2">{donation.dateAdded}</td>
                <td className="px-4 py-2">{donation.name}</td>
                <td className="px-4 py-2">{donation.amount}</td>
                <td className="px-4 py-2">{donation.package}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          total={totalPages}
          page={page}
          onChange={setPage}
          color="danger"
        />
      </div>
    </div>
  );
}
