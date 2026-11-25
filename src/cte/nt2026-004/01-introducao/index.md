<!-- p.04 -->

# 1 Introdução

## Criação de campos para o valor líquido do produto

<mark>Com o objetivo de ampliar a transparência na formação do preço da operação, foi criado o campo Valor Líquido da Prestação. Esse campo permite identificar o valor da prestação do serviço antes da incorporação dos tributos vigentes que compõem o preço final, possibilitando distinguir, de forma clara, o valor líquido dos valores tributários agregados ao preço.</mark>

<mark>A medida busca preservar a rastreabilidade da formação do valor informado no DFe, especialmente diante da sistemática do IBS e da CBS.</mark>

<mark>Dessa forma, o novo campo permite evidenciar o valor líquido total da prestação do serviço, proporcionando maior transparência ao contribuinte, ao adquirente e às Administrações Tributárias quanto à composição do preço e à participação dos tributos no valor final da prestação.</mark>

<mark>O IBS e a CBS são tributos calculados por fora, não integrando suas próprias bases de cálculo. A base de cálculo dos tributos deverá ser determinada de acordo com a legislação aplicável. Desta forma:</mark>

- <mark>No campo vPrestLiq deve ser informado o valor líquido do serviço, sem qualquer tributo;</mark>
- <mark>No campo vPrest deve ser informado o valor total do serviço, desconsiderados os valores de IBS e CBS.</mark>

<mark>No total do documento fiscal:</mark>

- <mark>No campo vTotDFe deve ser informado o valor correspondente a soma do vTPrest + IBS + CBS.</mark>

## Criação de campo para informar o ICMS previsto

<mark>O novo campo “Valor do ICMS Previsto no Pagamento Antecipado” (tag: vICMSPrevisto) deverá ser informado quando o documento fiscal emitido for referente a um pagamento realizado antes do fornecimento. O objetivo do campo é permitir a correta tributação do IBS e da CBS no pagamento antecipado, com a identificação do valor do ICMS que incidirá no momento do fornecimento futuro.</mark>
