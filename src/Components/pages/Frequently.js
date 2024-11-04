export default function Frequently() {
    return(
        <>
  {/* ======= Frequently Asked Questions Section ======= */}
  <section id="faq" className="faq">
    <div className="container" data-aos="fade-up">
      <div className="row gy-4">
        <div className="col-lg-4">
          <div className="content px-xl-5">
            <h3>
              Frequently Asked <strong>Questions</strong>
            </h3>
            <p>
              Get answers to all the Frequently Asked Quesitons Here.
            </p>
          </div>
        </div>
        <div className="col-lg-8">
          <div
            className="accordion accordion-flush"
            id="faqlist"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-content-1"
                >
                  <span className="num">1.</span>
                  How to participate?
                </button>
              </h3>
              <div
                id="faq-content-1"
                className="accordion-collapse collapse"
                data-bs-parent="#faqlist"
              >
                <div className="accordion-body">
                  For participation you need to login or register and fill your details. If slots are free you can apply and see the status in History.
                </div>
              </div>
            </div>
            {/* # Faq item*/}
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-content-2"
                >
                  <span className="num">2.</span>
                  What are the prize if we win?
                </button>
              </h3>
              <div
                id="faq-content-2"
                className="accordion-collapse collapse"
                data-bs-parent="#faqlist"
              >
                <div className="accordion-body">
                  Prizes can vary from cash or gifts or coupons. The prizes also depend on the event and Sponsors. You can see the prize in the description on each event.
                </div>
              </div>
            </div>
            {/* # Faq item*/}
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-content-3"
                >
                  <span className="num">3.</span>
                  Why my application got rejected?
                </button>
              </h3>
              <div
                id="faq-content-3"
                className="accordion-collapse collapse"
                data-bs-parent="#faqlist"
              >
                <div className="accordion-body">
                  The application can be rejected because of various reasons, one being that the user has applied multiple time, Account information not being proper, or Slots getting filled, Lastly if you still face issue you can mail us -hackwave@gmail.com to know more.
                </div>
              </div>
            </div>
            {/* # Faq item*/}
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-content-4"
                >
                  <span className="num">4.</span>
                    How will I know if my application got accepted?
                </button>
              </h3>
              <div
                id="faq-content-4"
                className="accordion-collapse collapse"
                data-bs-parent="#faqlist"
              >
                <div className="accordion-body">
                  You can check the status of your application in History, As well as we contact the selected person regarding the same.
                </div>
              </div>
            </div>
            {/* # Faq item*/}
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-content-5"
                >
                  <span className="num">5.</span>
                  Can I cancel after my application got accepted?
                </button>
              </h3>
              <div
                id="faq-content-5"
                className="accordion-collapse collapse"
                data-bs-parent="#faqlist"
              >
                <div className="accordion-body">
                  Unfortunetly we don't have such feature now. 
                </div>
              </div>
            </div>
            {/* # Faq item*/}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Frequently Asked Questions Section */}
</>

    )
}