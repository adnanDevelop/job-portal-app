import CompanyCard from "./component/CompanyCard";
import PageHeader from "../../components/global/PageHeader";

import { companyData } from "./dummy";

const Companies = () => {
  return (
    <main>
      <section>
        <PageHeader title="Companies" breadCrumb="Companies" />
      </section>

      {/* Company Cards */}

      <section className="grid grid-cols-12 gap-4 padding-inline padding-block">
        {companyData.map((data: any, index) => {
          return (
            <div key={index} className="col-span-3">
              <CompanyCard data={data} />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Companies;
