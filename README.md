# Desafio React Native — Contador de Cliques

Este desafio consiste em implementar um aplicativo móvel em React Native que contabiliza cliques, registra o carimbo de data e hora de cada clique, persiste localmente o histórico, e permite exportar e limpar esses dados.

## 📌 Resumo do Aplicativo

- Um botão principal incrementa um contador a cada toque.
- Cada clique gera um registro com data e hora precisas.
- O histórico é exibido em lista (mais recente → mais antigo) e é persistido localmente.
- A aplicação deve permitir exportar o histórico para um arquivo `.txt` e abrir o compartilhador nativo.
- Deve haver uma ação para limpar todo o histórico (com confirmação), zerando o contador.

## ✅ Requisitos Funcionais

### 1) Área do Contador

- Botão principal com o texto "Clique Aqui!" (ou similar).
- Exibição da contagem total de cliques.
- Ao pressionar o botão, incrementar o contador em 1.
- Cada clique gera um timestamp salvo no histórico.

### 2) Área de Histórico

- Lista com todos os cliques registrados.
- Cada item mostra data e hora exatas (ex.: `17/09/2025 15:30:05`).
- Ordenação: do mais recente para o mais antigo.
- Quando vazio, exibir: "Nenhum clique registrado ainda.".

### 3) Funcionalidades Adicionais

- Persistência local: restaurar contador e histórico ao reabrir o app (ex.: `@react-native-async-storage/async-storage`).
- Exportar histórico:
  - Botão "Exportar".
  - Gerar arquivo `.txt` com um registro por linha.
  - Abrir o menu de compartilhamento nativo imediatamente após gerar o arquivo (Android/iOS).
- Limpar histórico:
  - Botão "Limpar".
  - Solicitar confirmação: "Você tem certeza que deseja apagar todo o histórico?".
  - Confirmado: zerar contador e remover histórico da tela e do armazenamento local.

## 🔧 Requisitos Técnicos (Não-funcionais)

- Tecnologia: React Native.
- Gerenciamento de estado: livre (Context API, Redux, Zustand, hooks do React, etc.).
- Armazenamento local: `AsyncStorage` (ou similar).
- Navegação: opcional (ex.: React Navigation) se optar por separar em telas.
- Qualidade do código: limpo, organizado e comentado quando necessário.

## 🚀 Entrega

- Disponibilize o código-fonte em um repositório público (GitHub, GitLab, etc.).
- Inclua neste repositório um `README.md` com:
  - Nome do candidato: `<SEU_NOME_AQUI>`
  - Breve descrição do projeto.
  - Instruções claras de configuração e execução.
- Envie o link do repositório público para avaliação.

## ▶️ Como Executar (Sugestão)

Abaixo, um guia sugerido para quem for rodar seu projeto. Ajuste conforme sua stack.

### Pré-requisitos

- Node.js LTS
- Java JDK 17 (Android)
- Android Studio com SDK/Emulador configurados
- Xcode (para iOS, apenas macOS)
- Yarn ou npm

### Instalação

```pwsh
# dentro da pasta do projeto
npm install
# ou
yarn
```

### iOS (macOS)

```pwsh
# instala pods
npx pod-install ios
# executa em um simulador iOS
npx react-native run-ios
```

### Android

```pwsh
# com emulador Android iniciado ou dispositivo conectado
npx react-native run-android
```

## 💡 Dicas de Implementação

- Formatação de data/hora: use `Intl.DateTimeFormat`, `date-fns` ou similar.
- Persistência: salve o contador e o array de timestamps em chaves claras (ex.: `clickCounter`, `clickHistory`).
- Exportação/Compartilhamento:
  - Você pode usar bibliotecas como `react-native-share` para o compartilhamento e `react-native-fs` para criar o arquivo `.txt`.
  - Formato do arquivo: uma linha por registro, do mais recente para o mais antigo.
- Confirmação de limpeza: `Alert.alert` (API nativa do RN) com opções Confirmar/Cancelar.

## 🧪 Critérios de Avaliação

- Atendimento aos requisitos funcionais e técnicos.
- Boas práticas de código, organização e legibilidade.
- Tratamento de erros, feedback ao usuário e UX simples.
- Clareza do README final (como rodar e decisões técnicas).

---

Boa sorte e bom código! 💪
