# 1.2 Sobre o Leiaute da NF-e

As principais mudanças documentadas nesta versão relacionadas com o leiaute da NF-e são:

- Retirado o campo indicador da Forma de Pagamento do Grupo B (id:B05).
- Inclusão no campo refNF (id:BA07) da opção 2 = Nota Fiscal modelo 02, que possibilitará referenciar este modelo de documento no Grupo Documentos Fiscais Referenciados.
- No campo Indicador de presença “indPres” (id: B25b) foi incluída a opção 5 (operação presencial, fora do estabelecimento, utilizada no caso de venda ambulante), no Grupo Identificação da Nota Fiscal Eletrônica.
- Criação de novo grupo “Rastreabilidade de produto” (Grupo I80) para permitir a rastreabilidade de qualquer produto sujeito a regulações sanitárias, casos de recolhimento/recall, além de defensivos agrícolas, produtos veterinários, odontológicos, medicamentos, bebidas, águas envasadas, embalagens, etc., a partir da indicação de informações de número de lote, data de fabricação/produção.
- Inclusão de campo para informar o Código ANVISA (id:K01a) no grupo específico de Medicamentos.
- Inclusão de campos no Grupo Combustível para que sejam informados os percentuais de mistura do GLP (id: LA03a, b e c) e a descrição do código ANP (LA03).
- Criação de campos relativos ao FCP para operações internas ou interestaduais com ST. Altera o leiaute da NF-e para identificar o valor devido em decorrência do percentual de ICMS relativo ao Fundo de Combate à Pobreza, previsto na Constituição Federal, no Art. 82 do ADCT - Ato das Disposições Constitucionais Transitórias, nas operações internas ou nas operações interestaduais com Substituição Tributárias, não atendidas pelos campos criados no Grupo de Tributação do ICMS para a UF de destino.

<!-- p.13 -->
- Acrescentada a opção de informar o Grupo de Repasse do ICMS ST (ID: N10b) nas operações com combustíveis quando informado CST 60.
- Inclusão de campo no Grupo Total da NF-e para informar o valor total do IPI (id: W12a) no caso de devolução de mercadoria por estabelecimento não contribuinte desse imposto.
- Alterado Grupo X- Informações do Transporte da NF-e com a criação de novas modalidades de frete (id: X02).
- Alteração do nome do Grupo “Formas de Pagamento" para “Informações de Pagamento” com a inclusão do campo valor do troco (id: YA09). O preenchimento deste grupo passa a ser possível também para NFe, modelo 55.
