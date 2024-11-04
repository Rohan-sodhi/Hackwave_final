import Footer from "./Component/Layout/Footer";
import Header from "./Component/Layout/Header";

export default function SampleInnerPage(){
    return(
        <>
         
            <main id="main">
  {/* ======= Breadcrumbs ======= */}
  <div className="breadcrumbs">
    <div
      className="page-header d-flex align-items-center"
      style={{ backgroundImage: 'url("")' }}
    >
      <div className="container position-relative">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 text-center">
            <h2>Sample Inner Page</h2>
            <p>
              Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
              quo odio sint voluptas consequatur ut a odio voluptatem. Sit
              dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
              quaerat ipsum dolorem.
            </p>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <div className="container">
        <ol>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Sample Inner Page</li>
        </ol>
      </div>
    </nav>
  </div>
  {/* End Breadcrumbs */}
  <section className="sample-page">
    <div className="container" data-aos="fade-up">
      <p>
        You can duplicate this sample page and create any number of inner pages
        you like!
      </p>
    </div>
  </section>
</main>

       
            <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
        </>
    )
}