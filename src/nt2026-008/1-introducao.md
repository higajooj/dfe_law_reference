<!-- p.4 -->
# 1. Introdução

## Criação de campos para o valor líquido do produto

Com o objetivo de ampliar a transparência na formação do preço da operação, foram criados os campos Valor Líquido Unitário e Valor Líquido do Produto. Esses campos permitem identificar o valor da mercadoria ou do serviço antes da incorporação dos tributos vigentes que compõem o preço final, possibilitando distinguir, de forma clara, o valor líquido da operação dos valores tributários agregados ao preço.

A medida busca preservar a rastreabilidade da formação do valor informado na NF-e, especialmente diante da sistemática do IBS e da CBS, cujos valores passam a compor o valor do produto ou serviço para fins de representação documental, sem perder a identificação da parcela correspondente ao valor líquido da operação.

Dessa forma, os novos campos permitem evidenciar tanto o valor líquido unitário quanto o valor líquido total do item, proporcionando maior transparência ao contribuinte, ao adquirente e às Administrações Tributárias quanto à composição do preço e à participação dos tributos no valor final da operação.

## Composição do valor do produto com informações de IBS e CBS

O IBS e a CBS são tributos calculados por fora, não integrando suas próprias bases de cálculo. Para fins de preenchimento da NF-e e da NFC-e, os valores do IBS e da CBS incidentes na operação deverão ser acrescidos ao valor do produto ou serviço, compondo o valor informado no campo `vProd`. A inclusão dos valores do IBS e da CBS no campo `vProd` não implica sua inclusão na base de cálculo desses tributos. A base de cálculo do IBS e da CBS deverá ser determinada de acordo com a legislação aplicável.

Dessa forma, os valores do IBS e da CBS, por já estarem compreendidos no valor do produto ou serviço, não deverão ser adicionados novamente na composição do valor total da NF-e/NFC-e (`vNFTot`), evitando duplicidade. Os valores de IBS e CBS permanecem destacados nos respectivos grupos tributários, porém são meramente informativos, uma vez que já estão compreendidos no `vProd`.

<!-- p.5 -->
## Criação de campo para informar o ICMS previsto

O novo campo “Valor do ICMS Previsto no Pagamento Antecipado” (tag: `vICMSPrevisto`) deverá ser informado quando o documento fiscal emitido for referente a um pagamento realizado antes do fornecimento. O objetivo do campo é permitir a correta tributação do IBS e da CBS no pagamento antecipado, com a identificação do valor do ICMS que incidirá no momento do fornecimento futuro.
