import { LitElement, html, css } from 'lit';
import { sharedStyles } from '../styles/shared-styles.js';

export class TaskModal extends LitElement {
  static properties = {
    visible: { type: Boolean }
  };

  constructor() {
    super();
    this.visible = false;
  }

  static styles = [sharedStyles, css`
    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.7);
    }

    dialog {
      border: none;
      border-radius: 12px;
      padding: 1rem;
      background: #2c2c3a;
      color: white;
    }
  `];

  firstUpdated() {
    this.dialog = this.renderRoot.querySelector('dialog');
  }

  updated() {
    if (this.visible) this.dialog.showModal();
    else this.dialog.close();
  }

  render() {
    return html`
      <dialog @close=${() => this.visible = false}>
        <slot></slot>
        <div style="text-align:right;">
          <button @click=${() => this.visible = false}>Cerrar</button>
        </div>
      </dialog>
    `;
  }
}
customElements.define('task-modal', TaskModal);
