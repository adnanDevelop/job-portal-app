import { useParams } from "react-router-dom";

// components
import CompanyDetailHeader from "./component/CompanyDetailHeader";
import CompanyProfileDetail from "./component/CompanyProfileDetail";

// Apis
import { useGetCompanyByIdQuery } from "../../redux/features/companyApi";

const CompanyProfile = () => {
  const { id } = useParams();
  const { data: getCompanyData } = useGetCompanyByIdQuery({ id });

  return (
    <main className="relative">
      <CompanyDetailHeader />
      <CompanyProfileDetail data={getCompanyData?.data} />
    </main>
  );
};

export default CompanyProfile;
