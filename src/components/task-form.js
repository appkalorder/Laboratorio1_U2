import { LitElement, html, css } from 'lit';
import { sharedStyles } from '../styles/shared-styles.js';

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

  static styles = [sharedStyles];

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
        <input type="date" .value=${this.date} @input=${e => this.date = e.target.value} required />
        <button type="submit" style="margin-top: 0.5rem;">Guardar</button>
      </form>
    `;
  }
}
customElements.define('task-form', TaskForm);
