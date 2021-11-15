import { Tab } from "@headlessui/react";
import { classNames } from "../../utils";
import Table from "./components/Table";

interface ITables {
  data: Array<any>;
}
export default function Tables({ data }: ITables) {
  const tabs = Object.keys(data[0]);

  const renderTables = () =>
    data.map((item: any) =>
      tabs.map((tab) => (
        <Tab.Panel key={tab}>
          <Table data={item[tab]} />
        </Tab.Panel>
      ))
    );

  return (
    <div className="container">
      <Tab.Group>
        <div className="border-b border-gray-200 mb-5">
          <Tab.List className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((item) => (
              <Tab
                key={item}
                className={({ selected }) => {
                  return classNames(
                    selected
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm uppercase"
                  );
                }}
              >
                {item}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels>{renderTables()}</Tab.Panels>
      </Tab.Group>
    </div>
  );
}
