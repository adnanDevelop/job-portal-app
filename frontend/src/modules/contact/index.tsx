import Form from "./component/Form";
import PageHeader from "../../components/global/PageHeader";
import Details from "./component/Details";

const Contact = () => {
  return (
    <main>
      <PageHeader title="Contact" breadCrumb="Contact" />
      <section className="padding-inline ">
        <Form />
        <Details />
      </section>
    </main>
  );
};

export default Contact;
