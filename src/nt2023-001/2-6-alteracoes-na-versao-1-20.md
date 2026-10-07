<!-- p.15 -->
# 2.6. Alterações na versão 1.20

## 2.6.1. Alteração da documentação dos campos cProdANP e descANP

A coluna observação destes campos foi alterada para que constasse a Tabela de Códigos de Produto da ANP, publicada no Portal Nacional da NF-e como referência para o preenchimento dos valores.

## 2.6.2. Criação dos campos qBCMono, adRemICMS, vICMSMonoOp, pDif e vICMSMono para o CST 53 e revogação dos campos qBCMonoDif e adRemICMSDif.

Campos criados para atender a previsão de diferimento parcial, conforme previsto no Convênio ICMS 10/23 que altera o Convênio ICMS 199/22.

## 2.6.3. Correção do Número de referência da tag XML (Coluna #) de alguns campos

Nas versões anteriores a numeração de referência das tags XML estava errada, não respeitando a sequência das tags. Correção meramente documental realizada para evitar falhas na interpretação.

<!-- p.16 -->
## 2.6.4. Alteração na documentação das Regras I13-20, LA17-10, LA17-20, LA18-10, LA18-30

Algumas colunas da Tabela de Combustíveis Sujeitos à tributação Monofásica, publicada no Portal Nacional da NF-e, tinham o mesmo nome de tags do XML. Isso poderia causar confusão na interpretação destas regras. Os nomes das colunas das tabelas foram trocados juntamente com a documentação destas regras para evitar essa confusão.

## 2.6.5. Alteração da regra de Validação LA18-20

Excluída a aplicação desta regra de validação na NFC-e, modelo 65. Adicionada exceção para que a regra também não seja aplicada na NF-e, nas operações com consumidor final, (tag: indFinal) igual a 1.

## 2.6.6. Exclusão da regra de Validação LA03d-10

A exigência do campo estava relacionada à tributação do GLP/GLGN que possuía diferentes regras e alíquotas. O valor de partida (preço sem ICMS) era utilizado nas auditorias para conferência da composição das bases de cálculo do GLGNn e GLGNi que, nas operações interestaduais eram tributados a 12% e 4% respectivamente. Com a tributação Monofásica, esta informação deixa de ser relevante, pois as bases de cálculo passam a ser as quantidades e a alíquota definida é igual para GLGN nacional ou importado.

## 2.6.7. Exclusão da regra de Validação N45-10

O campo “Valor do ICMS retido anteriormente” (tag: vICMSMonoRet) receberá 100% do imposto correspondente ao volume de Óleo Diesel A e 33,33% do imposto correspondente ao volume de B100, não sendo possível a aplicação da regra de validação conforme especificada.
