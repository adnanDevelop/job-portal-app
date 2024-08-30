import { useParams } from "react-router-dom";
import PageHeader from "../../components/global/PageHeader";

const BlogDetail = () => {
  const { id } = useParams();

  return (
    <div>
      {/* Page header section */}
      <section>
        <PageHeader title="Blog Detail" breadCrumb="Blog" />
      </section>

      {/* Blog Detail */}
    </div>
  );
};

export default BlogDetail;
