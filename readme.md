# 🛒 EBAC Shop - Projeto Final de QA (TCC)

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)
![Cypress](https://img.shields.io/badge/Cypress-UI_Tests-green)
![Appium](https://img.shields.io/badge/Appium-Mobile_Tests-blue)
![Supertest](https://img.shields.io/badge/Supertest-API_Tests-yellow)
![K6](https://img.shields.io/badge/K6-Performance-purple)

Este repositório contém o **Trabalho de Conclusão de Curso (TCC)** da formação **Engenheiro de Qualidade de Software** da EBAC. O projeto consiste numa estratégia completa de testes automatizados para validar o e-commerce "EBAC Shop", cobrindo interfaces Web, Mobile, API e Performance.

---

## 🏗️ Arquitetura do Projeto

O projeto foi estruturado em diretórios independentes para garantir a organização e a escalabilidade:

* 📂 **API/**: Testes de integração e contrato (REST) utilizando **Supertest**, **Mocha** e **Chai**.
* 📂 **UI/**: Testes End-to-End (E2E) para interface Web utilizando **Cypress** com padrão Page Object.
* 📂 **Mobile/**: Automação Mobile (Android) utilizando **WebdriverIO** e **Appium**.
* 📂 **Performance/**: Testes de carga utilizando **K6**.
* 📂 **.github/workflows/**: Pipeline de Integração Contínua (CI) configurado no **GitHub Actions**.

---

## 🚀 Tecnologias Utilizadas

* **Linguagem:** JavaScript / Node.js
* **Web UI:** Cypress
* **API:** Supertest + Mocha + Chai + Allure Reports
* **Mobile:** WebdriverIO + Appium + UiAutomator2
* **Performance:** K6 + Docker
* **CI/CD:** GitHub Actions
* **Massa de Dados:** Faker.js

---

## ⚙️ Pré-requisitos

Para executar este projeto localmente, você precisará ter instalado:
* [Node.js](https://nodejs.org/) (v18 recomendada)
* [Docker Desktop](https://www.docker.com/) (Para ambiente local e testes de performance)
* [Android Studio](https://developer.android.com/studio) (Para emuladores Mobile)
* [Java JDK 8+](https://www.oracle.com/java/technologies/downloads/)

---

## 📦 Como Executar os Testes

### 1. Testes de API
Validação de endpoints, status codes e contratos.

```bash
cd API
npm install
npm test