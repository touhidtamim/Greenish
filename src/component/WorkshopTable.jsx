import React from "react";

const WorkshopTable = ({ schedule }) => (
  <div className="mt-16 bg-white p-6 rounded-xl shadow-sm border border-green-200">
    <h3 className="text-2xl font-bold text-green-900 mb-4">
      📅 Upcoming Workshops
    </h3>
    <table className="min-w-full table-auto mt-4 text-green-800">
      <thead>
        <tr className="bg-green-100 text-green-900 uppercase text-sm">
          <th className="py-3 px-4 text-left">Date</th>
          <th className="py-3 px-4 text-left">Topic</th>
          <th className="py-3 px-4 text-left">Time</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((workshop, index) => (
          <tr
            key={index}
            className="border-b hover:bg-green-50 transition duration-200"
          >
            <td className="py-3 px-4">{workshop.date}</td>
            <td className="py-3 px-4">{workshop.topic}</td>
            <td className="py-3 px-4">{workshop.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default WorkshopTable;
