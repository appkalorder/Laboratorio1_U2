# 📝 ESPE Tasks - Gestor de Tareas con LitElement

ESPE Tasks es una aplicación web desarrollada con **LitElement** y **Webpack**, que permite gestionar tareas mediante componentes web personalizados. Incluye funcionalidades como creación, edición y eliminación de tareas, todo con un diseño moderno, modular y reutilizable.

---

## 🚀 Características

- ✅ Crear, editar y eliminar tareas.
- 🗂 Agrupación de tareas por fecha (Hoy, Mañana, etc.).
- ✨ Interfaz basada en Web Components y Shadow DOM.
- 🔥 Estilos personalizados y adaptados al tema oscuro.
- 🔧 Arquitectura modular con componentes reutilizables.

---

## 📦 Estructura del Proyecto

```
Laboratorio1_U2/
├── src/
│   ├── components/
│   │   ├── espe-layout.js
│   │   ├── espe-tasks.js
│   │   ├── task-card.js
│   │   ├── task-form.js
│   │   └── task-modal.js
│   └── index.js
├── index.html
├── package.json
├── webpack.config.js
└── .babelrc
```

---

## 📥 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/appkalorder/Laboratorio1_U2.git
cd Laboratorio1_U2
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm start
```

4. Abre el navegador en `http://localhost:8080` para ver la aplicación.

---

## ⚙️ Configuración de Webpack

El proyecto está configurado con Webpack para:

- Compilar JavaScript moderno con Babel.
- Cargar estilos CSS.
- Usar `HtmlWebpackPlugin` para inyectar el HTML base.

Archivo principal: [`webpack.config.js`](./webpack.config.js)

---

## 🧩 ¿Cómo reutilizar los componentes en otro proyecto?

1. Copia los componentes desde `src/components/` a tu proyecto.
2. Asegúrate de instalar Lit:

```bash
npm install lit
```

3. Importa el componente deseado en tu archivo principal:

```js
import './components/espe-tasks.js';
```

4. Usa la etiqueta correspondiente en tu HTML:

```html
<espe-tasks></espe-tasks>
```

> También puedes usar los componentes individualmente como `<task-card>`, `<task-form>`, `<task-modal>`, etc.

---

## ✅ Requisitos

- Node.js ≥ 16
- Navegador moderno compatible con Web Components

---

## 📸 Capturas de Pantalla

1. Vista general del componentes de layout
![Vista general Layout](/img/Captura1.png)

2. Vista con tareas creadas
![Vista general Layout con tareas creadas](/img/Captura2.png)

3. Vista del componente de modal para crear tareas
![Vista del componente modal para crear tareas](/img/Captura3.png)

4. Vista del componente de modal para editar
![Vista del componente modal para editar tareas](/img/Captura4.png)

5. Vista con tarea eliminada
![Vista del componente con tarea eliminada](/img/Captura5.png)

---

## 🙌 Autor

**Jordy Mejía** – _Estudiante de Ingeniería en Tecnologías de la Información_

Proyecto desarrollado como parte de laboratorio de **Programación Integrativa de Componentes Web** en la **Universidad de las Fuerzas Armadas ESPE**.