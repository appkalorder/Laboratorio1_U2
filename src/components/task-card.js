import { LitElement, html, css } from 'lit';

export class TaskCard extends LitElement {
  static properties = {
    id: { type: Number },
    title: { type: String },
    description: { type: String },
    date: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      background: #18382d;
      border-radius: 8px;
      margin: 12px 0;
      padding: 16px;
      color: #fff;
      box-shadow: 0 2px 8px #0002;
    }
    .title {
      font-weight: bold;
      font-size: 18px;
    }
    .desc {
      margin: 8px 0;
      color: #b5e2d6;
    }
    .date {
      font-size: 13px;
      color: #8ecdb7;
    }
    button {
      align-self: flex-end;
      background: #019863;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 10px 10px;
      cursor: pointer;
      margin-left: 8px;
      display: flex;
      align-items: center;
    }
    .card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 32px;
    }
    .task-details {
      display: flex;
      gap: 32px;
    }
    .task-icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .task-buttons {
      display: flex;
    }
  `;

  render() {
    // Formatea la fecha y hora si existe
    let dateStr = '';
    if (this.date) {
      const dateObj = new Date(this.date);
      // Ejemplo: martes, 2 jul 2024, 14:30
      dateStr = dateObj.toLocaleString('es-ES', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
    return html`
    <div class="card">
      <div class="task-details">
        <div class="task-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="17" cy="8" r="4" stroke="#FFFFFF" stroke-width="2"></circle> <circle cx="12" cy="17" r="3" stroke="#FFFFFF" stroke-width="2"></circle> <circle cx="6.5" cy="9.5" r="2.5" stroke="#FFFFFF" stroke-width="2"></circle> </g></svg>
        </div>
        <div>
          <div class="title">${this.title}</div>
          <div class="date">${dateStr}</div>
        </div>
      </div>
      
      <div class="task-buttons">
        <button 
          @click=${() => this.dispatchEvent(new CustomEvent('edit-task', {
            detail: {
              id: this.id,
              title: this.title,
              description: this.description,
              date: this.date
            },
            bubbles: true,
            composed: true
          }))}
          data-task-id="${this.id}">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
          </svg>
        </button>
        <button @click=${() => this.dispatchEvent(new CustomEvent('delete-task', { bubbles: true, composed: true }))}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
          </svg>
        </button>
      </div>
    </div>
    `;
  }
}

customElements.define('task-card', TaskCard);