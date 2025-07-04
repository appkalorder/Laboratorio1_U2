import { LitElement, html, css } from 'lit';
import './espe-layout.js';
import './task-card.js';
import './task-form.js';
import './task-modal.js';

function getDateLabel(dateStr) {
  if (!dateStr) return '';
  // Forzar a local: separar año, mes, día
  const [year, month, day] = dateStr.split('T')[0].split('-').map(Number);
  const date = new Date(year, month - 1, day); // Local midnight
  const today = new Date();
  const todayLocal = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const diff = Math.floor((date - todayLocal) / (1000 * 60 * 60 * 24));
  if (diff === 0) return 'Hoy';
  if (diff === 1) return 'Mañana';
  if (diff === -1) return 'Ayer';
  return date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'short' });
}

export class EspeTasks extends LitElement {
  static properties = {
    tasks: { type: Array },
    showModal: { type: Boolean },
    nextId: { type: Number },
    editingTask: { type: Object }
  };

  constructor() {
    super();
    this.tasks = [];
    this.showModal = false;
    this.nextId = 1;
    this.editingTask = null;
  }

  handleSubmitTask(e) {
    const data = e.detail;
    if (this.editingTask) {
      this.tasks = this.tasks.map(t =>
        t.id === this.editingTask.id ? { ...t, ...data } : t
      );
    } else {
      const task = { ...data, id: this.nextId++ };
      this.tasks = [...this.tasks, task];
    }
    this.showModal = false;
    this.editingTask = null;
    this._forceKey = Math.random(); // fuerza reinicio del form
  }

  handleEditTask(e) {
    this.showModal = false;
    this.editingTask = null;
    this.updateComplete.then(() => {
      this.editingTask = e.detail;
      this._forceKey = Math.random(); // fuerza reinicio del formulario
      this.showModal = true;
    });
  }


  groupTasksByDate(tasks) {
    const groups = {};
    tasks.forEach(task => {
      const label = getDateLabel(task.date);
      if (!groups[label]) groups[label] = [];
      groups[label].push(task);
    });
    // Ordena por fecha descendente
    return Object.entries(groups).sort(([a], [b]) => {
      if (a === 'Hoy') return -1;
      if (b === 'Hoy') return 1;
      if (a === 'Mañana') return -1;
      if (b === 'Mañana') return 1;
      if (a === 'Ayer') return 1;
      if (b === 'Ayer') return -1;
      return 0;
    });
  }

  render() {
    const grouped = this.groupTasksByDate(this.tasks);

    return html`
      <div @edit-task=${this.handleEditTask}>
        <espe-layout>
          ${grouped.length === 0 ? html`
            <div style="color:#8ecdb7;text-align:center;margin-top:32px;">No hay tareas</div>
          ` : grouped.map(([label, tasks]) => html`
            <div>
              <div style="font-weight:bold;font-size:18px;margin:24px 0 8px 0;color:#8ecdb7">${label}</div>
              ${tasks.map(t => html`
                <task-card
                  .id=${t.id}
                  .title=${t.title}
                  .description=${t.description}
                  .date=${t.date}
                  @delete-task=${() => this.tasks = this.tasks.filter(x => x.id !== t.id)}
                ></task-card>
              `)}
            </div>
          `)}
          <div style="margin: 16px 0;">
            <button
              style="background:#019863;color:#fff;border:none;padding:8px 18px;border-radius:6px;font-size:15px;cursor:pointer"
              @click=${() => {
                this.showModal = false;
                this.editingTask = null;
                this.updateComplete.then(() => {
                  this._forceKey = Math.random(); // fuerza nuevo form
                  this.showModal = true;
                });
              }}
            >Agregar Tarea</button>
          </div>
          <task-modal
            .visible=${this.showModal}
            @close=${() => { this.showModal = false; this.editingTask = null; }}
          >
            <task-form
              key=${this.editingTask ? 'edit-' + this.editingTask.id : 'new-' + this._forceKey}
              .title=${this.editingTask?.title || ''}
              .description=${this.editingTask?.description || ''}
              .date=${this.editingTask?.date || ''}
              @submit-task=${this.handleSubmitTask}
            ></task-form>
          </task-modal>
        </espe-layout>
      </div>
    `;
  }
}
customElements.define('espe-tasks', EspeTasks);