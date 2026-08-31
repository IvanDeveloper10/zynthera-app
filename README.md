<<<<<<< HEAD
<img width="1896" height="922" alt="image" src="https://github.com/user-attachments/assets/2e575ba3-2558-43aa-9c87-12695d21505a" />
=======
# React + TypeScript + Vite
>>>>>>> a20de71 (Zynthera v2 finish)

# Zynthera

**Zynthera** is an educational platform I'm building to make learning topics related to technology, science, and mathematics more practical and interactive.

The idea isn't to simply create another course platform. I want to bring learning, practice, and interactive activities together in one place.

<img width="1917" height="925" alt="Captura de pantalla 2026-08-30 200328" src="https://github.com/user-attachments/assets/b3a8672b-48f1-4004-b33f-433295a26105" />


## What am I building?

<<<<<<< HEAD
Zynthera currently has two main types of users:

* **Students:** can access courses, lessons, activities, and other experiences throughout the platform.
* **Teachers:** have their own dashboard where they can manage their courses.

Some of the features included in the project are:

* Registration and login system.
* User profiles.
* Student and teacher roles.
* Courses and lessons.
* Quizzes.
* Badge system.
* Interactive activities.
* Real-time trivia.
* Laboratories.
* A community space planned for the future.

<img width="1892" height="925" alt="Captura de pantalla 2026-08-30 200319" src="https://github.com/user-attachments/assets/db4f7367-4d4c-4c37-bac7-3e238b520d24" />


## Technologies

The frontend is built with:

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router

For the backend and platform services, I'm mainly using:

* Supabase
* Supabase Auth
* PostgreSQL
* Supabase Realtime
* Firebase for some real-time features.

## Structure

The project is organized to keep pages, components, contexts, and services separated.

```text
src/
├── components/
├── contexts/
├── pages/
├── lib/
├── App.tsx
└── main.tsx
```

Authentication is handled through a global context, while protected routes use a `ProtectedRoute` component to control access depending on the user and their role.

## Database

Supabase handles most of the platform's main data.

Some of the entities used in the project are:

`profiles`
Stores additional user information and their role.

`courses`
Stores information about courses created on the platform.

`lessons`
Contains the content associated with each course.

`quizzes`
Stores questions and activities used to evaluate learning.

I'm also using **Row Level Security (RLS)** policies to control what each user can access or modify.

<img width="867" height="597" alt="Captura de pantalla 2026-08-29 133648" src="https://github.com/user-attachments/assets/eaaa0c1b-7a8b-4e45-8790-b756dc25be96" />


## The part I'm most interested in

One of the things I want to develop further in Zynthera is the interactive side.

For example, the trivia section is designed so a teacher can start an activity and have multiple students participate at the same time.

The goal is for the platform to be more than:

> log in → read → leave.

I want there to be a reason to stay, participate, and learn by doing.

## Project status

Zynthera is still in development.

Some features are already implemented while others are being built step by step. The architecture is also evolving as new requirements come up.

This repository shows the actual process of building the project, from the initial authentication and structure to the bigger features I want to add.

## Running locally

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd zynthera
npm install
```

Create your `.env` file with the required variables for Supabase and the other services being used.

Then run:

```bash
npm run dev
```

To create a production build:

```bash
npm run build
```

## Why Zynthera?

Because I don't think learning something should only be about reading theory and taking a test.

The idea behind Zynthera is to build a platform where learning also means **interacting, practicing, making mistakes, and trying again**.

There's still a lot to build, but that's exactly what makes the project interesting.

---

**Zynthera**
*Learning by doing.*
=======
If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
>>>>>>> a20de71 (Zynthera v2 finish)
