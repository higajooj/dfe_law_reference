# 1 Introdução

<!-- p.06 -->

## Emissor Público Nacional NFS-e

A emissão da NFS-e Nacional é feita através de um sistema público de emissão, disponível para acesso via Web, Mobile ou API.

- **Emissão Web:** sistema para gerenciamento por parte do contribuinte, onde ele poderá se cadastrar, emitir, consultar e cancelar as NFS-e emitidas.
- **Emissão Mobile:** permitirá a emissão de NFS-e simplificada, visando atender especificamente aos contribuintes dos municípios que utilizam a Sefin Nacional, comunicando-se somente com o Sistema Nacional da NFS-e.
- **Emissão via API:** funciona como uma Secretária de Finanças Municipal (SEFIN Nacional NFS-e) com objetivo de recepcionar e validar as Declarações de Prestação de Serviços (DPS) dos contribuintes de municípios conveniados ao SN NFS-e – sejam estas DPS enviadas diretamente para API ou emitidas nos emissores públicos nacionais Web e APP. O município que não possuir um ambiente computacional para validar as DPS de seus contribuintes poderá se conveniar ao sistema nacional para utilização da Sefin Nacional NFS-e pelos seus contribuintes de ISSQN (Imposto Sobre Serviços de Qualquer Natureza).

Mais informações sobre os emissores encontram-se na Portal da Nota Fiscal de Serviço eletrônica.

Emissor Público Nacional NFS-e – Web

Este módulo consiste em um sistema para gerenciamento de NFS-e do contribuinte. Está basicamente estruturado nas funcionalidades para:

- Configuração do emissor;
- Emissão de NFS-e;
- Consultas NFS-e emitidas;
- Consultas NFS-e recebidas;
- Cancelamento de NFS-e;
- Substituição de NFS-e;
- Apuração Nacional – MAN (por ora, apenas em ambiente de Prod. Restrita);
- Registro de serviços mais realizados pelo emitente (favoritos); e
- Gravação de rascunhos.

Além destas funcionalidades, o Emissor Público Nacional NFS-e – Web realiza diversas integrações com outras bases de dados: Tabelas de convênios dos Municípios (Painel Administrativo <!-- p.07 -->Nacional), Tabelas Parametrizadas pelos Municípios (Painel Administrativo Municipal), Cadastros CNPJ, CPF, Simples Nacional, TOM e Cadastro Nacional de Contribuinte (CNC NFS-e).

O painel está disponível no endereço: https://www.nfse.gov.br/EmissorNacional.

> **Obs.:** para maiores informações sobre o Módulo de Apuração Nacional - MAN, acesse: Guia para Utilização do Módulo de Apuração Nacional.
