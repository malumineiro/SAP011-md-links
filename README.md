# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Funcionalidades ](#3-funcionalidades)
* [4. Instalação e uso](#4-instalação-e-uso)
* [5. Testes unitários](#5-testes-unitários)
* [6. Tecnologias utilizadas](#6-tecnologias-utilizadas)
* [7. Desenvolvedora](#7-desenvolvedora)


***

## 1. Prefácio

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

A proposta é criar uma ferramenta, usando
[Node.js](https://nodejs.org/), que leia e analise arquivos no formato
`Markdown`, para verificar os arquivos que contenham links e mostrar algumas
estatísticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## 2. Resumo do projeto

Neste projeto, foi criada uma ferramenta na linha de comando (CLI) assim como a sua própria biblioteca (library) em Javascript. A construção é de um programa
executado com Node.js. e promove aprendizado sobre processos
(`process.env`, `process.argv`, ...) ,como interagir com sistemas de arquivos, como fazer consultas de rede, etc.

[Node.js](https://nodejs.org/pt-br/) é um ambiente de execução para JavaScript
construído com o [motor de JavaScript V8 do
Chrome](https://developers.google.com/v8/). Ele permite a execução de JavaScript no nosso sistema operacional, seja no seu computador ou em um servidor, o que abre portas para poder interagir com sistemas, arquivos, redes e etc.

Para desenvolver o projeto segui as sugestões de Marcos do canal do Slack e os conteúdos das oficinas de Checkout MdLinks realizadas durante o Bootcamp da Laboratória. 

## 3. Funcionalidades
* Leitura e extração de links de um arquivo Markdown (.md);
* Validação dos links com exibição de 'href', 'text', 'file', 'status' e 'ok' de cada link utilizando a option --validate;
* Mensagens de erro para os comandos executados incorretamente pelos usuários.

## 4. Instalação e uso

* O seu módulo deve ser instalável via `npm install <github-user>/md-links`. O
  módulo deve incluir um _executável_ que pode ser chamado tanto por linha de
  comando quanto importado com `require` para ser usado em seu código.

  +++ add implementação ao finalizar.

## 5. Testes unitários 

## 6. Tecnologias utilizadas 
![icons](image-5.png) 

## 7. Desenvolvedora

Maria Luiza Mineiro [GitHub](https://github.com/malumineiro) | [LinkedIn](https://www.linkedin.com/in/maria-luiza-mineiro/)
