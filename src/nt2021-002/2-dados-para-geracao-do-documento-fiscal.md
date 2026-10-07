<!-- p.5 -->
# 2. Dados para Geração do Documento Fiscal

## 2.1. Chave de Acesso

A chave de acesso da NFF será gerada pelo App NFF, utilizando os espaços destinados à serie e número da NF-e para, conforme mostrado na tabela a seguir, armazenar as seguintes informações: número do dispositivo; ano, mês e dia da emissão; tipo de identificação do emissor (CPF ou CNPJ); número sequencial diário.

| | Código da UF | AAMM da emissão | CPF / CNPJ | Modelo (mod) | Série (serie) | Número (nDF) | Forma de emissão | Código Numérico | DV |
|---|---|---|---|---|---|---|---|---|---|
| **Quantidade de caracteres** | 02 | 04 | 14 | 02 | 03 | 09 | 01 | 08 | 01 |

- cUF - Código da UF do emitente do DF-e
- AAMM - Ano e Mês de emissão da NF-e
  - Deverá ser obtido no dispositivo móvel
- CPF/CNPJ - CPF ou CNPJ do emitente Produtor Primário preenchido com zeros a esquerda.
  - CPF ou CNPJ do Produtor Primário identificado no app
- mod - Modelo do Documento Fiscal: 55 para NF-e / 65 para NFC-e
- serie - Série do Documento Fiscal
  - Gerado e controlado por dispositivo
    - 1 dígito para identificar tipo de emissão OnLine/OffLine [0 = OnLine, 1 = OffLine]
    - 2 dígitos para identificar o ano
- nNF - Número do Documento Fiscal
  - Gerado e controlado sequencialmente por dispositivo:
    - 2 dígitos do dia da emissão
    - 2 dígitos do mês da emissão
    - 1 dígito para identificar CPF [2= CPF]
    - 4 dígitos sequenciais para o número com reinício diário por dispositivo
- tpEmis - forma de emissão do DF-e
  - 3 – Emissão pelo regime especial da NFF
- cNF - Código Numérico que compõe a Chave de Acesso
  - Aleatório de 8 dígitos
- cDV - Dígito Verificador da Chave de Acesso

O dígito verificador da chave de acesso do DF-e é baseado em um cálculo do módulo 11.

<!-- p.6 -->
## 2.2. Faixas de Serie

Diversas séries da NF-e são utilizadas para colocar informações adicionais na chave de acesso, conforme o quadro a seguir:

| Série | Emitente | Processo Emissão | Assinatura | Chave Acesso | Numeração |
|---|---|---|---|---|---|
| 000-899 | CNPJ | Aplicativo da Empresa | e-CNPJ do Emitente (procEmi <> 1,2) | CNPJ do Emitente | Sequencial por CNPJ, controlado pelo emitente |
| 000-999 | CNPJ / CPF | Aplicativo NFF | e-CNPJ da PROCERGS (procemi = 3) | CPF ou CNPJ do emitente | Gerado e controlado pelo APP NFF conforme item 2.1 desta NT. |
| 890-899 | CNPJ / CPF | Site SEFAZ | e-CNPJ da SEFAZ (procEmi = 1) | CNPJ da SEFAZ | Sequencial pela SEFAZ, independente do emitente (CPF ou CNPJ) |
| 900-909 | CNPJ | Site SEFAZ | e-CNPJ da SEFAZ (procEmi=1), ou e-CNPJ do Emitente (procEmi=2) | CNPJ do Emitente | Sequencial por CNPJ, controlado pela SEFAZ |
| 910-919 | CPF | Site SEFAZ | e-CNPJ da SEFAZ (procEmi=1), ou e-CPF do Emitente (procEmi=2) | CPF do Emitente | Sequencial por CPF, controlado pela SEFAZ |
| 920-969 | CPF | Aplicativo da Empresa | e-CPF do Emitente (procEmi<>1,2) | CPF do Emitente | Sequencial por CPF, controlado pelo emitente |
