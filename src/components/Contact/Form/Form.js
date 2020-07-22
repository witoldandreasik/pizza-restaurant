import React from "react";
import "./Form.scss";

function Form() {
  return (
    <div className="card">
      <h3 className="card__title">Write to us:</h3>
      <p className="card__warning">Form for presentation only</p>
      <div className="form__container">
        <form action="" className="form">
          <div className="form__section">
            <input
              type="text"
              name="name"
              className="form__input"
              autoComplete="off"
              required
            />
            <label forHtml="name" className="form__label">
              <span className="form__content">Name</span>
            </label>
          </div>
          <div className="form__section">
            <input
              type="email"
              name="email"
              className="form__input"
              autoComplete="off"
              required
            />
            <label forHtml="email" className="form__label">
              <span className="form__content">Email</span>
            </label>
          </div>
          <div className="form__section">
            <input
              type="number"
              name="phone"
              className="form__input"
              autoComplete="off"
              required
            />
            <label forHtml="phone" className="form__label">
              <span className="form__content">Phone</span>
            </label>
          </div>
          <div className="form__section">
            <input
              type="text"
              name="message"
              className="form__input"
              autoComplete="off"
              required
            />
            <label forHtml="message" className="form__label">
              <span className="form__content">Message</span>
            </label>
          </div>
          <button
            className="form__button"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <em class="form__send-icon fas fa-paper-plane"></em>
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
