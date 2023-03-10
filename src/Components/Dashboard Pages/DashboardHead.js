import { useState } from "react";

function DashboardHead() {
  const date = new Date();

  const fullDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const [search, setSearch] = useState("");

  return (
    <section className=" w-full flex justify-between items-center">
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 rounded-xl outline-blue-500"
        type="text"
        name="search"
        placeholder="Search"
        value={search}
      />
      <div className="text-gray-500 text-xs md:text-sm">{fullDate}</div>
    </section>
  );
}

export default DashboardHead;
