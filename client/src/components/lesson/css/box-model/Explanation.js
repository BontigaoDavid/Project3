import React from "react";

function Explanation() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>
              When it comes to the web, pages are all made up of elements.
              Elements are things like paragraphs, headings, pictures, buttons,
              forms, and more. Elements are shaped as boxes with different
              adjustable parts, and the CSS Box Model is all about how an HTML
              element these parts.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray py-3 my-3 mb-4">
        <div className="container">

        <div className="row">
          <div className="col-12">
            <h3>Parts of an Element</h3>
            <p>
              An element as far as the box model is concerned is made up of four
              things: content, padding, borders, and margins.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-3 d-inline-flex justify-content-stretch">
            <div className="alert alert-dark bg-white">
              <p>
                <strong>Content</strong> is the text image or whatever else in
                an element.
              </p>
              <p>
                The size of the content in the box model is however much space
                that content takes up to the pixel.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 d-inline-flex justify-content-stretch">
            <div className="alert alert-dark bg-white">
              <p>
                <strong>Padding</strong> is the space between the borders of an
                element and the content in the element.
              </p>
              <p>The size of the padding can be set using css.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 d-inline-flex justify-content-stretch">
            <div className="alert alert-dark bg-white">
              <p>
                <strong>Borders</strong> are the edges of an element.
              </p>
              <p>
                Borders can be styled through css to have different thicknesses,
                colors, and styles.{" "}
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 d-inline-flex justify-content-stretch">
            <div className="alert alert-dark bg-white">
              <p>
                <strong>Margins</strong> are the space between the outside of
                the element and other elements in the page.
              </p>
              <p>The size of margins are adjustable with css.</p>
            </div>
          </div>
        </div>

        <p>
          One way to remember this is that an element is like a person. The
          content is the bones, the padding is the flesh, the border is the
          skin, and the margins are the person's personal space.
        </p>
        </div>
      </div>
    </div>
  );
}

export default Explanation;
