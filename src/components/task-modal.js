import { LitElement, html, css } from 'lit';

export class TaskModal extends LitElement {
  static properties = {
    visible: { type: Boolean }
  };

  constructor() {
    super();
    this.visible = false;
  }

  static styles = css`
      *, *::before, *::after {
        box-sizing: border-box;
      }
      dialog::backdrop {
        background-color: rgba(16, 35, 28, 0.9);
      }
      dialog {
        border: none;
        border-radius: 12px;
        padding: 0;
        background: #17352b;
        color: white;
        min-width: 340px;
        max-width: 480px;
        box-shadow: 0 4px 20px 0 rgba(0,0,0,0.25);
        animation: slideDown 0.3s;
      }
      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #2f6a55;
        padding: 18px 24px 12px 24px;
      }
      .modal-title {
        font-size: 22px;
        font-weight: bold;
        color: #8ecdb7;
      }
      .close-btn {
        background: none;
        border: none;
        color: #8ecdb7;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        transition: color 0.2s;
      }
      .close-btn:hover {
        color: #019863;
      }
      .modal-body {
        padding: 16px 24px 24px 24px;
      }
    `;

  firstUpdated() {
    this.dialog = this.renderRoot.querySelector('dialog');
  }

  updated(changedProps) {
    if (!this.dialog) return;

    if (changedProps.has('visible')) {
      if (this.visible && !this.dialog.open) {
        this.dialog.showModal();
      } else if (!this.visible && this.dialog.open) {
        this.dialog.close();
      }
    }
  }

  render() {
    return html`
      <dialog @close=${() => this.visible = false}>
        <div class="modal-header">
          <span class="modal-title">Nueva tarea</span>
          <button class="close-btn" @click=${() => this.visible = false} title="Cerrar">&times;</button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </dialog>
    `;
  }
}
customElements.define('task-modal', TaskModal);