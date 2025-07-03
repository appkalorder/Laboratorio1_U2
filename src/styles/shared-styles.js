import { css } from 'lit';

export const sharedStyles = css`
  :host {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
    background-color: #1e1e2f;
  }

  .card {
    background: #2c2c3a;
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  }

  button {
    background: #4e9af1;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    color: white;
    cursor: pointer;
  }

  input, textarea {
    background: #3a3a4f;
    border: none;
    padding: 0.5rem;
    border-radius: 6px;
    color: white;
    width: 100%;
  }

  h2, h3 {
    margin: 0;
    color: #fff;
  }
`;
