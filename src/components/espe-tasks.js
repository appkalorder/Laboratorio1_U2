import { LitElement, html, css } from 'lit';
import './espe-layout.js';
import './task-card.js';
import './task-form.js';
import './task-modal.js';

export class EspeTasks extends LitElement {
  static properties = {
    tasks: { type: Array },
    showModal: { type: Boolean }
  };

  constructor() {
    super();
    this.tasks = [];
    this.showModal = false;
  }

  handleAddTask(e) {
    const task = e.detail;
    this.tasks = [...this.tasks, task];
    this.showModal = false;
  }

  render() {
    return html`
      <espe-layout>
        <button @click=${() => this.showModal = true}>Agregar Tarea</button>
        <task-modal .visible=${this.showModal}>
          <task-form @submit-task=${this.handleAddTask}></task-form>
        </task-modal>

        ${this.tasks.map(t => html`
          <task-card
            .title=${t.title}
            .description=${t.description}
            .date=${t.date}
            @delete-task=${() => this.tasks = this.tasks.filter(x => x !== t)}
          ></task-card>
        `)}
      </espe-layout>
    `;
  }
}
customElements.define('espe-tasks', EspeTasks);
