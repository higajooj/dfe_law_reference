# 04.8 Final do Processamento

A validação da mensagem de requisição poderá resultar em:

- **Rejeição:** conforme as Regras de Validação definidas anteriormente, retornando o motivo da rejeição (tag: cStat e xMotivo);
- **Resultado da Consulta:** Caso não haja rejeição, serão retornados os dados da consulta, com a mensagem: “9490 – Consulta realizada com sucesso“.
