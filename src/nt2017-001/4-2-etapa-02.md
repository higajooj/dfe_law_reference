# 4.2 Etapa 02

A regra de validação a seguir será implantada por grupo de CNAE e NCM conforme cronograma publicado no [Anexo I.01](anexo-i-01-tabela-cronograma-gtin-etapa-02.md).

## Banco de Dados: Cadastro SEFAZ

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 7I03-10 | 55/65 | Se não informado GTIN (cEAN=Nulo).<br><br>**Observação:** Para produtos que não possuem GTIN, utilizar a informação de "SEM GTIN" | Obrig. | 889 | Rej. | Rejeição: Obrigatória a informação do GTIN para o produto [nItem:999] |
