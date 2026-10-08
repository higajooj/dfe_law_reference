# Alteração na regra de formação Número do Recibo de Lote

O número do Recibo do Lote será gerado pelo Ambiente Autorizador, com a seguinte regra de formação:

- 2 posições com o Código da UF do emitente (codificação do IBGE);
- 1 posição com o Tipo de Autorizador (9=Ambiente Nacional do MDF-e ou 2=Site Alternativo do Ambiente Nacional do MDFe);
- 12 posições numéricas sequenciais.

| Campo | Código da UF | Tipo Autorizador | Sequencial |
|---|---|---|---|
| Quantidade de caracteres | 02 | 01 | 12 |
