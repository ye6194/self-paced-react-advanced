import styled from "styled-components";

export const RestaurantDetailModalContainer = styled.div`
  .text-body {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }

  .text-caption {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }

  .modal {
    display: none;
  }

  .modal--open {
    /* display: block; */
    display: none;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.35);
  }

  .modal-container {
    position: fixed;
    bottom: 0;
    width: 100%;

    padding: 32px 16px;

    border-radius: 8px 8px 0px 0px;
    background: var(--grey-100);
  }

  .modal-title {
    margin-bottom: 36px;
  }

  .form-item {
    display: flex;
    flex-direction: column;

    margin-bottom: 36px;
  }

  .form-item label {
    color: var(--grey-400);
    font-size: 14px;
  }

  .form-item--required label::after {
    padding-left: 4px;

    color: var(--primary-color);
    content: "*";
  }

  .form-item .help-text {
    color: var(--grey-300);
  }

  .form-item input,
  .form-item textarea,
  .form-item select {
    padding: 8px;
    margin: 6px 0;

    border: 1px solid var(--grey-200);
    border-radius: 8px;

    font-size: 16px;
  }

  .form-item textarea {
    resize: none;
  }

  .form-item select {
    height: 44px;

    padding: 8px;

    border: 1px solid var(--grey-200);
    border-radius: 8px;

    color: var(--grey-300);
  }

  input[name="name"],
  input[name="link"] {
    height: 44px;
  }

  .button-container {
    display: flex;
  }

  .button {
    width: 100%;
    height: 44px;

    margin-right: 16px;

    border: none;
    border-radius: 8px;

    font-weight: 600;
    cursor: pointer;
  }

  .button:last-child {
    margin-right: 0;
  }

  .button--secondary {
    border: 1px solid var(--grey-300);
    background: transparent;

    color: var(--grey-300);
  }

  .button--primary {
    background: var(--primary-color);

    color: var(--grey-100);
  }

  .restaurant-info {
    margin-bottom: 24px;
  }
`;
