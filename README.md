<style>
  .title {
    color: #ed1543;
    font-size: 34px !important;
    font-weight: bold !important;
  }

  .info {
    font-weight: bold !important;
    color: #ed1543;
  }
</style>

<div style="display: flex; align-items: center; justify-content: space-between;">
  <h1 class="title">Translation Microservice</h1>
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="200" alt="Nest Logo" />
  </a>
</div>

## Description

Translation Microservice can be used to translate messages in your backend application.\
This service provides you full messages customization by overriding.

---

## Microservice

**Transport**: <span class="info">TCP</span>\
**Port**: <span class="info">3333</span>

## Database

**Type**: <span class="info">MongoDB</span>\
**Port**: <span class="info">9999</span>

---

## Getting started

- Run **docker-compose** file from **Tools** directory
- Run from **Command Line**

  ```bash
    npm run seed
  ```

  or use Database Tool **seed.bat** from **Tools/Database** directory.

- Start application. Exec from **Command Line**

  ```bash
    npm run start:dev
  ```

---

## Documentation

- Generate docs
  ```bash
    npm run docs:generate
  ```
- Run static files serving server
  ```bash
    npm run docs:show
  ```
- Open URL

  [Microservice documentation](http://localhost:3334)

---

## Stay in touch

- Author - [Dawid Nienajadło](https://github.com/davidN96)
