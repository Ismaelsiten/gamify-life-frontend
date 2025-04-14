# 🎮 Gamify Life — Frontend

**Gamify Life** es una aplicación desarrollada en Angular 19 que convierte tus metas reales en un videojuego personal. Puedes crear "juegos" con objetivos reales y desbloquear recompensas a medida que avanzas.

Este frontend ha sido construido con:
- Angular 19 (standalone components y signals)
- Firebase Authentication (login con Google)
- Bootstrap + Angular Material para la interfaz
- Arquitectura modular y limpia para facilitar la escalabilidad

---

## 🚀 Demo

Disponible en `http://localhost:4200/` tras iniciar el servidor.  
(Próximamente desplegado en producción)

---

## 🛠️ Cómo ejecutar en local

### 1. Clona el repositorio

```bash
git clone https://github.com/Ismaelsiten/gamify-life-frontend.git
cd gamify-life-frontend
```

### 2. Instala dependencias

```bash
npm install
```

### 3. Ejecuta el servidor de desarrollo

```bash
ng serve
```

🔗 Abre [http://localhost:4200](http://localhost:4200) en tu navegador.

---

## ⚙️ Scripts disponibles

| Comando            | Descripción                           |
|--------------------|---------------------------------------|
| `ng serve`         | Lanza el servidor de desarrollo       |
| `ng build`         | Compila el proyecto                   |
| `ng test`          | Ejecuta tests unitarios               |
| `ng generate`      | Crea componentes / servicios, etc.    |

---

## 🔐 Variables de entorno

Este proyecto no utiliza `.env`, las claves de Firebase se gestionan desde `src/environments/environment.ts`.

❗ Si lo vas a desplegar o compartir, usa claves ficticias o mueve las reales a `environment.local.ts` (añadido al `.gitignore`).

---


## 📦 Dependencias clave

- [Angular CLI](https://angular.dev/tools/cli)
- [Firebase](https://firebase.google.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Angular Material](https://material.angular.io/)

---

## ✨ Autor

Desarrollado con 💡 por [Ismael Site Nsegue](https://github.com/Ismaelsiten)

---

> Proyecto personal en construcción. Próximamente se añadirá más funcionalidad como panel de usuario, conexión con el backend, y despliegue automático.

---

📘 Documentación Angular disponible en [angular.dev](https://angular.dev)

🛠️ Soporte adicional: [gptonline.ai/es](https://gptonline.ai/es)
