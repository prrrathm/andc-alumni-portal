import { useMemo } from "react";
import Table, {
  AvatarCell,
  SelectColumnFilter,
  StatusPill,
} from "../components/Student/Table";
import alumniDB from "../components/Student/alumniDB.json";

const column = [
  {
    Header: "id",
    accessor: "id",
  },
  {
    Header: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Batch",
    accessor: "batch",
    Filter: SelectColumnFilter, // new
    filter: "includes2",
  },
  {
    Header: "Department",
    accessor: "department",
    Filter: SelectColumnFilter,  // new
    filter: 'includes',
  },
];
const Students = () => {
  const columns = useMemo(() => column, []);

  const data = useMemo(() => alumniDB, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
            Students
          </h1>
          {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p> */}
        <div className="m-4">
          <Table columns={columns} data={data} />
        </div>
        </div>
        {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button> */}
      </div>
    </section>
  );
};

export default Students;