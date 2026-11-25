<!-- p.12 -->

# 2.9 Validação da Área de Dados

## a) Validação de forma da área de dados

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| D01 | Verifica Schema XML da Área de Dados | Obrig. | 215 | Rejeição: Falha no schema XML |
| D02 | Verifica o uso de prefixo no namespace | Obrig. | 404 | Rejeição: Uso de prefixo de namespace não permitido |
| D03 | XML utiliza codificação diferente de UTF-8 | Obrig. | 402 | Rejeição: XML da área de dados com codificação diferente de UTF-8 |
| D04 | Versão dos Dados informada é superior à versão vigente | Facult. | 238 | Rejeição: Cabeçalho - Versão do arquivo XML superior a Versão vigente |
| D05 | Versão dos Dados não suportada | Obrig. | 239 | Rejeição: Cabeçalho - Versão do arquivo XML não suportada |

## b) Validação de regras de negócio

<!-- p.13 -->

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| H01 | Tipo do ambiente do CT-e difere do ambiente do Web Service | Obrig. | 252 | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| H02 | CNPJ do interessado na distribuição inválido (DV ou zeros) | Obrig. | 489 | Rejeição: CNPJ informado inválido (DV ou zeros) |
| H03 | CPF do interessado na distribuição inválido (DV ou zeros) | Obrig. | 490 | Rejeição: CPF informado inválido (DV ou zeros) |
| H04 | CNPJ do Certificado Digital utilizado na transmissão não tem o mesmo CNPJ base do CNPJ consultado | Obrig. | 593 | Rejeição: CNPJ-Base consultado difere do CNPJ-Base do Certificado Digital |
| H05 | CPF do Certificado Digital utilizado na transmissão diferente do CPF consultado | Obrig. | 472 | Rejeição: CPF consultado difere do CPF do Certificado Digital |
| H06 | Número do NSU informado superior ao maior NSU disponível para consulta | Obrig. | 589 | Rejeição: Número do NSU informado superior ao maior NSU da base de dados do Ambiente Nacional |
