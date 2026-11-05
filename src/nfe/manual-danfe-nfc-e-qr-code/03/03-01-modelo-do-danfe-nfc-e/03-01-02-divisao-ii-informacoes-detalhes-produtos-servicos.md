# 3.1.2 Divisão II – Informações de detalhes de produtos/serviços

![Detalhes de produtos/serviços](../../img/fig-02-detalhes-produtos-servicos.png)

*Figura 2: Detalhes de produtos/serviços*

A divisão II (exibida na Figura 2) corresponde ao local onde poderão ser impressas as informações de detalhamento dos produtos/serviços adquiridos. A critério da Unidade Federada poderá ser autorizado ao emissor de NFC-e, pela legislação estadual, imprimir o DANFE NFC-e sem o detalhamento dos itens de mercadoria/serviço, desde que o consumidor esteja de acordo. Nesta hipótese não existirá a divisão II no DANFE NFC-e.

Caso exista a divisão II, não são reguladas as posições das informações dos detalhes de produtos/serviços e forma de sua impressão, mas são obrigatórias, no mínimo, as seguintes informações:

- **Código**: código do produto adotado pelo estabelecimento (ID: I02, tag: cProd);
- **Descrição**: descrição do produto (ID: I04, tag: xProd);
- **Qtde**: quantidade de unidades do produto adquiridas pelo consumidor (ID: I10, tag: qCom);
- **Um**: unidade de medida do produto (ID: I09, tag: uCom);
- **Valor unit.**: valor de uma unidade do produto (ID: I10a, tag: vUnCom);
- **Valor total**: valor total do produto (ID: I11, tag: vProd).

As informações de valores devem ter as casas decimais separadas por vírgula e ser utilizado ponto para a indicação de milhar.
