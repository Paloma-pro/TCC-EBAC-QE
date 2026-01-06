# 🚀 EBAC Shop - Automação de Testes End-to-End

**Repositório do TCC em Engenharia de Qualidade de Software**  
[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/Paloma-pro/TCC-EBAC-QE/main.yml?style=flat-square&logo=githubactions)](https://github.com/Paloma-pro/TCC-EBAC-QE/actions)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen?style=flat-square&logo=nodedotjs)](https://nodejs.org/)

Implementação de uma estratégia completa de testes automatizados para o e-commerce EBAC Shop, contemplando múltiplas camadas de qualidade:

## 🧪 Abrangência de Testes
| Camada          | Tecnologias                          | Cobertura               |
|------------------|--------------------------------------|-------------------------|
| **Web UI**       | Cypress + Page Objects               | Fluxos críticos de compra |
| **Mobile**       | WebdriverIO + Appium (Android)       | Compatibilidade mobile  |
| **API**          | Supertest + Mocha/Chai               | Integração & Contract   |
| **Performance**  | K6 + Docker                          | Testes de carga         |

## ⚙️ Funcionalidades Chave
- **Pipeline CI/CD Integrado**
  - Execução paralela de suites de teste no GitHub Actions
  - Validação de PRs com relatórios Allure automatizados
- **Data Factory**  
  Geração dinâmica de massa de dados com Faker.js
- **Cross Testing**
  - 80+ casos de teste web/mobile
  - 30+ testes de API REST
  - 5 cenários de performance

## 🛠 Pré-requisitos
```bash
Node.js 18.x+
Java JDK 8 (para Appium)
Android Studio (emuladores)
Docker Desktop (testes K6)
```

## 📥 Instalação
```bash
git clone https://github.com/Paloma-pro/TCC-EBAC-QE.git
cd TCC-EBAC-QE
npm install
```

## ▶️ Execução
```bash
# Testes Web
npm run cy:run

# Testes Mobile
npm run wdio:android

# Testes de Performance
docker-compose up -d k6

# Gerar relatórios
allure serve allure-results
```

## 📊 Arquitetura do Projeto
```
TCC-EBAC-QE/
├── web/               # Testes Cypress
├── mobile/            # Config WebdriverIO
├── api/               # Suites Supertest
├── performance/       # Scripts K6
└── github/            # Workflows CI/CD
```

## 📄 Licença
Projeto acadêmico desenvolvido para a EBAC - Escola Britânica de Artes Criativas