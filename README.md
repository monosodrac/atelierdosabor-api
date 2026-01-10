[EXPRESS_BADGE]:https://img.shields.io/badge/express-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white
[JSONSERVER_BADGE]:https://img.shields.io/badge/JSON%20Server-%23404d59.svg?style=for-the-badge&logo=json&logoColor=white
[PRS_BADGE]:https://img.shields.io/badge/PRs-welcome-green?style=for-the-badge

<h1 align="center" style="font-weight: bold;">Atelier do Sabor API 🍽️</h1>

![express][EXPRESS_BADGE]
![jsonserver][JSONSERVER_BADGE]
![prs][PRS_BADGE]

<details open="open">
<summary>Table of Contents</summary>

- [🚀 Getting Started](#started)
  - [Prerequisites](#prerequisites)
  - [Cloning](#cloning)
  - [Environment Setup](#environment)
  - [Running the Application](#running)
- [📍 How It Works](#how-it-works)
- [⚙️ Technologies Used](#tech)
- [🤝 How to Reach Me](#reach)
- [📫 Contribute](#contribute)
- [📌 Notes](#notes)

</details>

<p align="center">
  <b>A Node.js-based restaurant api using JSON Server for serving dynamic content, including menu, services, and events, with a interactive interface.</b>
</p>

---

<h2 id="started">🚀 Getting Started</h2>

<h3 id="prerequisites">Prerequisites</h3>

- [Node.js](https://nodejs.org/en/) – JavaScript runtime for backend development
- [Express](https://expressjs.com/) – Web framework for Node.js
- [JSON Server](https://github.com/typicode/json-server) – A simple way to create a REST API using a JSON file
- [NPM](https://www.npmjs.com/) – Package manager for managing dependencies

<h3 id="cloning">Cloning</h3>

```bash
git clone https://github.com/monosodrac/atelierdosabor-api.git
cd atelierdosabor-api
```

<h3 id="environment">Environment Setup</h3>

**Install dependencies:**

```bash
npm install
```

<h3 id="running">Running the Application</h3>

To start the server, run:

```bash
node server.js
```

This will run the server at `http://localhost:3000`.

<h2 id="how-it-works">📍 How It Works</h2>

Atelier do Sabor's api is powered by a Node.js backend using **Express** and **JSON Server**. The api showcases services, a menu, and events, all served through static files:

1. **API**: The backend serves dynamic data from a local JSON file (`db.json`) using **JSON Server**.
2. **Static Files**: The api includes images and assets for the carousel and menu.
3. **Routes**: Custom routes are set up to serve static files and handle API requests for the menu and services.

<h2 id="tech">⚙️ Technologies Used</h2>

- ⚙️ **Node.js** – JavaScript runtime for the server
- 🚀 **Express** – Web framework for handling routes and server logic
- 🗄️ **JSON Server** – Simulated REST API using a local JSON file
- 📦 **NPM** – Package manager for dependencies

<h2 id="reach">🤝 How to reach me</h2>

<table>
  <tr>
    <td align="center">
      <a href="https://linktr.ee/monosodrac">
        <img src="https://avatars.githubusercontent.com/u/141099551?v=4" width="100px;" alt="Mono Cardoso Profile Picture"/><br>
        <sub>
          <b>Mono</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h2 id="contribute">📫 Contribute</h2>

Contributions are welcome! 🧩
If you'd like to improve this project or add new features, follow these steps:

1. Clone the repository
```bash
git clone https://github.com/monosodrac/atelierdosabor-api.git
```
2. Create a new branch for your feature or fix
```bash
git checkout -b feature/your-feature-name
```
3. Follow good commit practices
4. After implementing your changes, open a Pull Request including:
    - Description of what was improved or added
    - How to test the update
    - (Optional) example of api usage or screenshots

Once submitted, your PR will be reviewed and merged if approved 🚀

<h2 id="notes">📌 Notes</h2>

- This project uses **JSON Server** to serve data from a local JSON file (`db.json`).
- The server listens on port **3000** by default.
- Static assets such as images for the menu, carousel, and services are served through custom routes.
