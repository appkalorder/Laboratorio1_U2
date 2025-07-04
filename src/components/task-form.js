import { LitElement, html, css } from 'lit';

export class TaskForm extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    date: { type: String }
  };

  constructor() {
    super();
    this.title = '';
    this.description = '';
    this.date = '';
  }

  static styles = css`
      form {
        display: flex;
        flex-direction: column;
        gap: 16px;
        background: #17352b;
        border-radius: 8px;
        padding: 24px;
        color: #fff;
        box-shadow: 0 2px 8px #0002;
      }
      input, textarea {
        background: #214a3c;
        color: #fff;
        border: 1px solid #2f6a55;
        border-radius: 6px;
        padding: 10px;
        font-size: 15px;
        font-family: inherit;
        outline: none;
        width: 100%;
        box-sizing: border-box;
        resize: none;
      }
      textarea {
        min-height: 70px;
        max-width: 100%;
      }
      input:focus, textarea:focus {
        border-color: #019863;
      }
      button[type="submit"] {
        background: #019863;
        color: #fff;
        border: none;
        border-radius: 6px;
        padding: 10px 0;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: background 0.2s;
        width: 100%;
      }
      button[type="submit"]:hover {
        background: #027a4e;
      }
    `;

  handleSubmit(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('submit-task', {
      detail: {
        title: this.title,
        description: this.description,
        date: this.date
      },
      bubbles: true,
      composed: true
    }));
    this.title = '';
    this.description = '';
    this.date = '';
  }

  render() {
    return html`
      <form @submit=${this.handleSubmit}>
        <input type="text" placeholder="Título" .value=${this.title} @input=${e => this.title = e.target.value} required />
        <textarea placeholder="Descripción" .value=${this.description} @input=${e => this.description = e.target.value}></textarea>
        <input type="datetime-local" .value=${this.date} @input=${e => this.date = e.target.value} required />
        <button type="submit">Guardar</button>
      </form>
    `;
  }
}
customElements.define('task-form', TaskForm);