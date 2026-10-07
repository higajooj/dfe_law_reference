<!-- p.8 -->
# 4.2 Alteração em Regras de Validação – RV (Anexo II do MOC)

Nesta NT, são melhor documentadas algumas regras de validação já existentes e alteradas regras de validação considerando que o Emitente da NF-e pode ser um CPF. Seguem as alterações em regras de validação:

## B. Identificação da Nota Fiscal

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| B26-30 | 55/65 | Se Processo de Emissão pelo Fisco (procEmi=1 ou 2):<br>- Tipo de Emissão difere de 1-Emissão Normal ou Emissão na SVC (tpEmis<>1, 6 e 7) (NT 2018.001/ NT 2015.002)<br>Exceção 1: Para a UF SC, aceitar Tipo de Emissão igual a 9=Contingência off-line da NFC-e. | Obrig. | 370 | Rej. | Rejeição: Processo de emissão pelo Fisco com Tipo de Emissão inválido |
| B26-50 | 65 | Se Tipo de Emissão da NFC-e diferente de Regime Especial NFF (tpEmis<>3):<br>– Processo de Emissão pelo Contribuinte diferente de “0=Emissão de NF-e com aplicativo do contribuinte” (procEmi<>0)<br>Exceção 1: Para a UF SC, a regra não se aplica se Processo de Emissão é pelo Fisco (procEmi = 1 ou 2). | Obrig. | 957 | Rej. | Rejeição: Tipo de emissão incompatível com o Processo de Emissão |

## C. Identificação do Emitente

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| C02a-10 | 55/65 | Se informado CPF do emitente e tpEmis <> 3-NFF (NT 2021.002):<br>- Série difere da faixa para emitente CPF: 890-899 e 910-969 (NT 2018.001 / NT 2015.002) | Obrig. | 495 | Rej. | Rejeição: CPF do Emitente com Série incompatível |
| C02a-20 | 55/65 | Se informado CPF do emitente:<br>– CPF com zeros, nulo, 111..., 222..., ..., ou DV inválido (NT 2012/003) | Obrig. | 401 | Rej. | Rejeição: CPF do emitente inválido |
| C02a-30 | 55/65 | Se informado CPF do emitente:<br>– CPF do Emitente difere do CPF da primeira NF-e do Lote recebido | Facult. | 560 | Rej. | Rejeição: CNPJ Base/CPF do emitente difere do CNPJ Base/CPF da primeira NF-e do lote recebido |
