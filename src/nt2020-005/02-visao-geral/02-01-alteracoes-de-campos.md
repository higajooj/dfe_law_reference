<!-- p.5 -->
# 2.1. Alterações de Campos

<!-- p.6 -->
## 2.1.1. Novos Campos para Códigos de Barra (Grupo I)

Conforme especificado na NT2017.001, os campos cEAN (I03) e cEANTrib (I12) devem ser utilizados exclusivamente para informação de códigos GTIN (Global Trade Item Number) do produto, antigo código EAN.

Como existem outros códigos de barras em uso no Brasil, para que um contribuinte possa informar simultaneamente o código de barras utilizado por seu fornecedor e o seu (do contribuinte) código interno, ficam criados os campos cBarra (I03a) e cBarraTrib (I12a), sem validações, para que seja possível a informação de códigos de barras diferentes do padrão GTIN usados pelo emitente e pelo destinatário.

## 2.1.2. Produtos e Serviços / Declaração de Importação (Grupo I01)

- Introduzidos novos códigos no campo para informação da via de transporte internacional (tpViaTransp – I23a) em razão das alterações relacionadas com as declarações de importação:
  - 8=Conduto/Rede Transmissão
  - 9=Meios Próprios
  - 10=Entrada/Saída Ficta
  - 11=Courier
  - 12=Em mãos
  - 13=Por reboque
- Alterações no grupo adi (I25):
  - Aumentado o número máximo de ocorrências do grupo;
  - Grupo também pode registar itens da Declaração Única de Importação (DUImp), não apenas adições a documentos de importação;
  - O número do ato concessório de Drawback agora pode ser alfanumérico, e seu tamanho máximo foi aumentado.

## 2.1.3. Alteração do Campo cAgreg para Alfanumérico (Grupo I80)

A NT2016.002 introduziu o grupo I80 para permitir a rastreabilidade de qualquer produto sujeito a regulações sanitárias. Observou-se a necessidade de alterar o campo onde se informa o Código de Agregação (cAgreg – I85) de numérico para alfanumérico.

## 2.1.4. Campos para ICMS ST Desonerado (Grupos de Tributação do ICMS=10, 70 e 90)

Para permitir o detalhamento do ICMS de substituição tributária em operações relacionadas com uso na agropecuária ou com órgão de fomento e desenvolvimento agropecuário ficam criados os campos destinados à informação do Valor do ICMS-ST desonerado (vICMSSTDeson – N33a) e do Motivo da desoneração do ICMS-ST (motDesICMSST – N33b) nos grupos relativos a operações tributada e com cobrança do ICMS por substituição tributária (CST 10), com tributação do ICMS com redução de base de cálculo e cobrança do ICMS por substituição tributária (CST 70), e com outras tributações do ICMS (CST 90).

## 2.1.5. Campos para ICMS Diferido em Operações com FCP (Grupo de Tributação do ICMS=51)

No grupo relativo a operações com tributação por diferimento (CST 51) ficam criados campos para informação do percentual do diferimento do ICMS relativo ao Fundo de Combate à Pobreza (FCP) (pFCPDif – N17d), do valor do ICMS relativo ao FCP diferido (vFCPDif – N17e) e do valor efetivo do ICMS relativo ao FCP (vFCPefet – N17f).

As unidades federadas onde existe esta possibilidade publicarão instruções sobre como estes campos devem ser preenchidos.

<!-- p.7 -->
## 2.1.6. Nova Modalidade de Base de Cálculo do ICMS ST nos Grupos de Tributação do ICMS=70 e ICMS=90

Identificou-se a necessidade de criação de novo tipo de modalidade de Base de Cálculo do ICMS ST (modBCST – N18) para operações com tributação do ICMS com redução de base de cálculo e cobrança do ICMS por substituição tributária (CST 70), Tributação ICMS: Outros (CST 90);

## 2.1.7. Inclusão de Indicadores Relacionados com Valor Total da Nota (Grupos R e T)

Inclusão de campos indicadores sobre se os valores de PIS Substituição Tributária (indSomaPISST – R07) e de COFINS Substituição Tributária (indSomaCOFINSST – T07) integram o valor total da Nota.

## 2.1.8. Produtos e Serviços / Declaração de Exportação (Grupo I03)

O número do ato concessório de Drawback agora pode ser alfanumérico, e seu tamanho máximo foi aumentado.
