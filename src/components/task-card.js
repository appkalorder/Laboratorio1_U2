import { LitElement, html, css } from 'lit';

export class EspeTaskItem extends LitElement {
  static properties = {
    task: { type: Object }
  };

  static styles = css`
    :host {
      display: block;
      padding: 0.5rem;
      border-bottom: 1px solid var(--border-color);
    }
    .done {
      text-decoration: line-through;
      color: gray;
    }
  `;

  render() {
    return html`
      <div class="${this.task.done ? 'done' : ''}">${this.task.title}</div>
    `;
  }
}

customElements.define('espe-task-item', EspeTaskItem);