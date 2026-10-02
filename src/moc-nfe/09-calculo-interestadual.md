<!-- p.148 -->
# 9. Sistemática de Cálculo em Operações Interestaduais (EC 87/2015)

**PREENCHIMENTO DA NF-E E SISTEMÁTICA DE CÁLCULO**

**VENDA INTERESTADUAL PARA CONSUMIDOR FINAL NÃO-CONTRIBUINTE – EC 87/2015**

**(CONVÊNIO ICMS 93/2015 E NT 003.2015 v. 1.70)**

**LEGENDA:**

- **BC:** BASE DE CÁLCULO DO ICMS
- **FCP:** FUNDO DE COMBATE À POBREZA DO ESTADO DESTINATÁRIO
- **ALQ:** ALÍQUOTA DO IMPOSTO
- **ALQ INTER:** ALÍQUOTA INTERESTADUAL APLICÁVEL À OPERAÇÃO OU PRESTAÇÃO
- **ALQ INTRA:** ALÍQUOTA INTERNA NA UF DE DESTINO APLICÁVEL À OPERAÇÃO OU PRESTAÇÃO
- **DIFAL:** ICMS CORRESPONDENTE À DIFERENÇA ENTRE A ALÍQUOTA INTERNA DO ESTADO DESTINATÁRIO E A ALÍQUOTA INTERESTADUAL

## 1ª SITUAÇÃO:

**OPERAÇÕES SUJEITAS À ALÍQUOTA INTERESTADUAL DE 7%**

**(DE: Sul/Sudeste (exceto ES), E - PARA: Norte/Nordeste/Centro-Oeste/ES)**

| **Operação: ALÍQUOTA INTERESTADUAL DE 7%** | | | **ITEM 1 (Importado)** | **ITEM 2 (18%)** | **ITEM 3 (18% + FCP)** | **ITEM 4 (25% + FCP)** |
|---|---|---|---|---|---|---|
| **VALOR DA OPERAÇÃO** | BASE DE CÁLCULO-BC | | R$ 1.000,00 | R$ 1.000,00 | R$ 1.000,00 | R$ 1.000,00 |
| **ALÍQUOTA INTERESTADUAL** | ALQ INTER | | 4% | 7% | 7% | 7% |
| **ALÍQUOTA INTERNA NO DESTINO** | ALQ INTRA | | 18% | 18% | 18% | 25% |
| **ALÍQUOTA FCP NO DESTINO** | ALQ FCP | | | | 2% | 2% |
| **ICMS ORIGEM** | BC * ALQ INTER | (truncar o resultado da multiplicação) | R$ 40,00 | R$ 70,00 | R$ 70,00 | R$ 70,00 |
| **ICMS DIFAL** | [BC * ALQ INTRA] - [BC * ALQ INTER] | (truncar o resultado da multiplicação) | R$ 140,00 | R$ 110,00 | R$ 110,00 | R$ 180,00 |
| **PARTILHA DO DIFAL** | | | | | | |
| **2016 - 40% PARA DESTINO** | PARTILHA DESTINO | 40% | R$ 56,00 | R$ 44,00 | R$ 44,00 | R$ 72,00 |
| | PARTILHA ORIGEM | 60% | R$ 84,00 | R$ 66,00 | R$ 66,00 | R$ 108,00 |

<!-- p.149 -->
**PREENCHIMENTO DA NOTA FISCAL ELETRÔNICA – NF-E**

| **GRUPO** | **ICMSUFDest** | | | | | |
|---|---|---|---|---|---|---|
| **Campos (tag)** | vBCUFDest | | R$ 1.000,00 | R$ 1.000,00 | R$ 1.000,00 | R$ 1.000,00 |
| | pFCPUFDest | | 0% | 0% | 2% | 2% |
| | pICMSUFDest | | 18% | 18% | 18% | 25% |
| | pICMSInter | | 4% | 7% | 7% | 7% |
| | pICMSInterPart | 40% em 2016 | 40% | 40% | 40% | 40% |
| | vFCPUFDest | [vBCUFDest * 2%] | R$ 0,00 | R$ 0,00 | R$ 20,00 | R$ 20,00 |
| | vICMSUFDest | (PART DEST) | R$ 56,00 | R$ 44,00 | R$ 44,00 | R$ 72,00 |
| | vICMSUFRemet | (PART ORIGEM) | R$ 84,00 | R$ 66,00 | R$ 66,00 | R$ 108,00 |
| **GRUPO** | **ICMSTot** | | | | | |
| **Campos (tag)** | vFCPUFDest | (soma dos itens) | R$ 40,00 | | | |
| | vICMSUFDest | (soma dos itens) | R$ 216,00 | | | |
| | vICMSUFRemet | (soma dos itens) | R$ 324,00 | | | |

## 2ª SITUAÇÃO:

**OPERAÇÕES SUJEITAS À ALÍQUOTA INTERESTADUAL DE 12%**

**(DE: Norte/Nordeste/Centro-Oeste/ES, OU – PARA: Sul/Sudeste (exceto ES))**

| **Operação: ALÍQUOTA INTERESTADUAL DE 12%** | | | **ITEM 1 (Importado)** | **ITEM 2 (18%)** | **ITEM 3 (18% + FCP)** | **ITEM 4 (25% + FCP)** |
|---|---|---|---|---|---|---|
| **VALOR DA OPERAÇÃO** | BASE DE CÁLCULO-BC | | R$ 1.000,00 | R$ 1.000,00 | R$ 1.000,00 | R$ 1.000,00 |
| **ALÍQUOTA INTERESTADUAL** | ALQ INTER | | 4% | 12% | 12% | 12% |
| **ALÍQUOTA INTERNA NO DESTINO** | ALQ INTRA | | 18% | 18% | 18% | 25% |
| **ALÍQUOTA FCP NO DESTINO** | ALQ FCP | | | | 2% | 2% |
| **ICMS ORIGEM** | BC * ALQ INTER | (truncar o resultado da multiplicação) | R$ 40,00 | R$ 120,00 | R$ 120,00 | R$ 120,00 |
| **ICMS DIFAL** | [BC * ALQ INTRA] - [BC * ALQ INTER] | (truncar o resultado da multiplicação) | R$ 140,00 | R$ 60,00 | R$ 60,00 | R$ 130,00 |
| **PARTILHA DO DIFAL** | | | | | | |
| **2016 - 40% PARA DESTINO** | PARTILHA DESTINO | 40% | R$ 56,00 | R$ 24,00 | R$ 24,00 | R$ 52,00 |
| | PARTILHA ORIGEM | 60% | R$ 84,00 | R$ 36,00 | R$ 36,00 | R$ 78,00 |

<!-- p.150 -->
**PREENCHIMENTO DA NOTA FISCAL ELETRÔNICA – NF-E**

| **GRUPO** | **ICMSUFDest** | | | | | |
|---|---|---|---|---|---|---|
| **Campos (tag)** | vBCUFDest | | R$ 1.000,00 | R$ 1.000,00 | R$ 1.000,00 | R$ 1.000,00 |
| | pFCPUFDest | | 0% | 0% | 2% | 2% |
| | pICMSUFDest | | 18% | 18% | 18% | 25% |
| | pICMSInter | | 4% | 12% | 12% | 12% |
| | pICMSInterPart | 40% em 2016 | 40% | 40% | 40% | 40% |
| | vFCPUFDest | [vBCUFDest * 2%] | R$ 0,00 | R$ 0,00 | R$ 20,00 | R$ 20,00 |
| | vICMSUFDest | (PART DEST) | R$ 56,00 | R$ 24,00 | R$ 24,00 | R$ 52,00 |
| | vICMSUFRemet | (PART ORIGEM) | R$ 84,00 | R$ 36,00 | R$ 36,00 | R$ 78,00 |
| **GRUPO** | **ICMSTot** | | | | | |
| **Campos (tag)** | vFCPUFDest | (soma dos itens) | R$ 40,00 | | | |
| | vICMSUFDest | (soma dos itens) | R$ 156,00 | | | |
| | vICMSUFRemet | (soma dos itens) | R$ 234,00 | | | |
