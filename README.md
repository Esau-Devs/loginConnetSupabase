# Astro con Supabase

##  Login conectado con auntentificacion de google y githud
![image](https://github.com/user-attachments/assets/7b0ffc2f-dc9e-4910-b854-9c0b2ca48d03)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```js
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```
## 🧱 Pila de Tecnología

La aplicación aprovecha una pila de desarrollo web moderna con las siguientes tecnologías principales:

| **Componente**                | **Tecnología**        | **Objetivo**                                                                 |
|------------------------------|------------------------|------------------------------------------------------------------------------|
| Marco de interfaz de usuario | Astro                  | Representación del lado del servidor y generación de sitios estáticos       |
| Componentes de la interfaz   | React                  | Componentes interactivos del lado del cliente                               |
| Estilo                       | Tailwind CSS           | Framework CSS centrado en utilidades                                         |
| Lenguaje                     | TypeScript             | Desarrollo de JavaScript con tipado estático                                 |
| Autenticación                | Supabase               | Backend como servicio para gestión de usuarios                              |
| Sistema de construcción      | Vite                   | Herramienta de compilación rápida y servidor de desarrollo                   |
| Proveedores de OAuth         | Google, GitHub         | Servicios de autenticación de terceros                                       |

## Componentes principales del sistema
![image](https://github.com/user-attachments/assets/0f851a0f-2781-422f-a41f-a724e884b13a)


## 🧞 Commands
1. Download the project from `GitHub` and in the terminal 
```js
npm install
```
2. create environment Variables .env important create private .env.local
```
SUPABASE_URL=YOUR_SUPABASE_URL
SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```
3. Create new project in Supabase

> [!NOTE]
>  replace YOUR_SUPABASE_URL and YOUR_SUPABASE_ANON_KEY in .env

4. install supabase in terminal with your project
```js
npm install @supabase/supabase-js
```
5. Add this code in src/env.d.ts
```js
interface ImportMetaEnv {
  readonly SUPABASE_URL: string
  readonly SUPABASE_ANON_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```
6. Create new folder /lib in /src and file supabase.ts src/lib/supabase.ts
```js
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY,
);
```

7. add this is code in buttons for login and exit
```js
  <form action="/api/auth/login" method="post">

  <form action="/api/auth/logout">
```

8. Integrates Name and Email, Picture
```js
const name = data?.user?.user_metadata?.full_name; 
const picture = data?.user?.user_metadata?.avatar_url;
```
> [!IMPORTANT]
> Agrega esto en `astro.config.mjs`:

```js
export default defineConfig({
  output: 'server',
});
```

