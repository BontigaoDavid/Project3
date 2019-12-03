import React from "react";

function Explanation() {
  return (
    <div className="row">
      <div className="col-12">
        <p>
          When it comes to the web, pages are all made up of elements. Elements
          are things like paragraphs, headings, pictures, buttons, forms, and
          more. Elements are shaped as boxes with different adjustable parts,
          and the CSS Box Model is all about how an HTML element these parts.
        </p>

      <h3>Parts of an Element</h3>
        <p>
          An element as far as the box model is concerned is made up of four
          things:
        </p>
        <ol>
          <li>Content</li>
          <li>Padding</li>
          <li>Borders</li>
          <li>Margins</li>
        </ol>

        <div className="row">
          <div className="col-12">
            <p className="h4">Content</p>
            <p>
              <strong>Content</strong> is the text image or whatever else in an element.
              <br />
              The size of the content in the box model is however much space that content takes up to the pixel.
            </p>
          </div>
          <div className="col-12">
            <p className="h4">Padding</p>
            <p>
              <strong>Padding</strong> is the space between the borders of an element and the content in the element.<br />
              The size of the padding can be set using css.
            </p>
          </div>
          <div className="col-12">
            <p className="h4">Borders</p>
            <p>
              <strong>Borders</strong> are the edges of an element.<br />
              Borders can be styled through css to have different widths, colors, and styles. 
            </p>
          </div>
          <div className="col-12">
            <p className="h4">Margins</p>
            <p>
              <strong>Margins</strong> are the space between the outside of the element and other elements in the page.<br />
              The size of margins are adjustable with css. By default they take up all the available horizontal space around them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explanation;
