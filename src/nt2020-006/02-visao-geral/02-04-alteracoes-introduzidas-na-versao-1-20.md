<!-- p.7 -->
# 2.4. Alterações introduzidas na versão 1.20

- Inclusão da regra YA06-10 que verifica se o código da bandeira de cartão de crédito/débito existe na tabela publicada no portal nacional.
- Inclusão da regra YA02-60 que verifica se o código do meio de pagamento existe na tabela publicada no portal nacional.
- Alterado o campo meio de pagamento (YA02, tPag) para utilizar a tabela de códigos dos meios de pagamentos publicada no portal nacional.
- Alterada a regra YA02-50 que ficou desativada.
- Alterada a regra B25c-10, retirando a obrigatoriedade de preenchimento do campo Indicativo do Intermediador (tag: indIntermed) quando indPres=1, para não ter um grande impacto na NF-e/NFC-e, tendo em vista o grande volume de operações presenciais sem intermediador.
- Se em alguma operação presencial (indPres=1) houver intermediador, deve a empresa preencher indIntermed=1 e as informações do intermediador, por força da legislação tributária, mas não sendo obrigada pela regra de validação. Alterada a data de homologação para 03/05/2021.
- Corrigido a descrição da regra YB01-20 para considerar o Indicador do Intermediador.
- Criação do campo Descrição do Meio de Pagamento (YA02a, xPag) para preenchimento do meio de pagamento quando for utilizado o código do meio de pagamento 99-outros
- Inclusão da regra YA02a-10 e YA02a-20 que verifica se foi preenchida a descrição do meio de pagamento quando informado o meio de pagamento 99-outros.
- Incluído o capítulo 6 com orientações sobre o intermediador da transação.
