# Chiritsumo

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Chiritsumo is a Progressive Web App (PWA) that turns daily household chores into fun, engaging mini-games for kids. The name comes from a Japanese proverb, 「塵も積もれば山となる」 (*chiri mo tsumoreba yama to naru*), meaning "even dust, if piled up, can become a mountain." The app encourages building good habits through small, consistent efforts.

By completing tasks like sorting trash and cleaning, users earn stamps, level up, and learn fun facts, making chores a rewarding experience.

## Features

-   **Gamified Chore System**: Select tasks from a swipeable carousel of categories, including trash sorting and cleaning.
-   **Educational Tips**: Each mini-game presents "bean knowledge" (豆知識) – fun, educational trivia related to the chore.
-   **Stamp Collection**: Earn a unique, randomized stamp for every task you complete.
-   **Level-Up Mechanism**: Collect four stamps to level up your "chore helper" status, celebrated with a full-screen animation.
-   **Chore Diary (お手伝い手帳)**: Track your accomplishments on a calendar-style diary page that visually displays all the stamps you've collected.
-   **Engaging Animations**: Enjoy rewarding visual feedback, including confetti bursts and animated result screens.
-   **User Personalization**: Get started by setting your name and choosing a cute animal avatar.

## Tech Stack

-   **Framework**: Angular 15
-   **Language**: TypeScript
-   **Animations**: `canvas-confetti` for celebratory effects
-   **PWA**: Enabled with Angular Service Worker for an installable, app-like experience

## Getting Started

To run this project locally, you will need Node.js and the Angular CLI installed.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/chiritsumo.git
    cd chiritsumo
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    ng serve
    ```
    Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## License

This project is licensed under the MIT License.

---
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.