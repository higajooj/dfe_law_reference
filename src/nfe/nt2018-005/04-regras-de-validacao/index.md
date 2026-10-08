<!-- p.21 -->
# 4. Regras de Validação

## 4.1 Grupo F. Identificação do Local de Retirada

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| F11-10 | 55 | Se informado Código País do local de retirada (tag: retirada/cPais):<br>- Código do País inexistente (Tabela do BACEN, vide tabela de apoio publicada no Portal da NF-e).<br>**Observação:** O Código do País pode conter zeros não significativos. | Obrig. | 970 | Rej. | Rejeição: Código de País inexistente [local de retirada/entrega] |
| F15-10 | 55 | Se informada a IE do Expedidor:<br>– IE inválida para a UF do Expedidor (id: F09): erro no tamanho, na composição da IE, ou no dígito verificador | Obrig. | 971 | Rej. | Rejeição: IE inválida [local de retirada/entrega] |

## 4.2 Grupo G. Identificação do Local de Entrega

<!-- p.22 -->
| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| G11-10 | 55 | Se informado Código País do local de retirada (tag: entrega/cPais):<br>- Código do País inexistente (Tabela do BACEN, vide tabela de apoio publicada no Portal da NF-e).<br>**Observação:** O Código do País pode conter zeros não significativos. | Obrig. | 970 | Rej. | Rejeição: Código de País inexistente [local de retirada/entrega] |
| G15-10 | 55 | Se informada a IE do Recebedor:<br>– IE inválida para a UF do Recebedor (id: G09): erro no tamanho, na composição da IE, ou no dígito verificador | Obrig. | 971 | Rej. | Rejeição: IE inválida [local de retirada/entrega] |

## 4.3 Grupo N. Item / Tributo: ICMS

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| N12-81 | 55/~~65~~ | Se informado CST = 60 em operações que não sejam para consumidor final (tag: indFinal=0, “Normal”):<br>- Não informada Base de Cálculo ICMS Retido na operação anterior (tag: vBCSTRet), Alíquota suportada pelo Consumidor Final (tag: pST) , Valor do ICMS próprio do Substituto (tag: vICMSSubstituto) e Valor do ICMS ST Retido na operação anterior (tag: vICMSSTRet).<br>**Observação**: Implementação opcional a critério da UF. | Facult. | 938 | Rej. | Rejeição: Não informada vBCSTRet, pST, vICMSSubstituto e vICMSSTRet [nItem: 999] |
| N12-82 | 55/65 | Se Informado CST = 60 em operações a consumidor final (tag: indFinal=1, “Consumidor final”), preenchimento obrigatório dos campos do grupo opcional para informações do ICMS Efetivo (N33)<br>**Observação**: Implementação opcional a critério da UF. | Facul. | 906 | Rej. | Rejeição: Não informados os campos para informações do ICMS Efetivo. [nItem: nnn] |
| N12a-50 | 55/~~65~~ | Se informado CSOSN = 500 em operações que não sejam para consumidor final (tag: indFinal=0, “Normal”):<br>- Não informada Base de Cálculo ICMS Retido na operação anterior (tag: vBCSTRet), Alíquota suportada pelo Consumidor Final (tag: pST), Valor do ICMS próprio do Substituto (tag: vICMSSubstituto) e Valor do ICMS ST Retido na operação anterior (tag: vICMSSTRet).<br>**Observação**: Implementação opcional a critério da UF. | Facult. | 938 | Rej. | Rejeição: Não informada vBCSTRet, pST, vICMSSubstituto e vICMSSTRet [nItem: 999] |
| N12a-60 | 55/65 | Se Informado CSOSN = 500 em operações a consumidor final (tag: indFinal=1, “Consumidor final”), preenchimento obrigatório dos campos do grupo opcional para informações do ICMS Efetivo (N33)<br>**Observação**: Implementação opcional a critério da UF. | Facul. | 906 | Rej. | Rejeição: Não informados os campos para informações do ICMS Efetivo. [nItem: nnn] |
| ~~N33-10~~ | ~~55/65~~ | ~~Se Informado CST = 60 ou CSOSN=500 e indFinal=1 (id:B25a), preenchimento<!-- p.23 --> obrigatório dos campos do grupo opcional para informações do ICMS Efetivo (N33)~~<br>~~**Observação**: Implementação opcional a critério da UF.~~ | ~~Facul.~~ | ~~906~~ | ~~Rej.~~ | ~~Rejeição: Não informados os campos do grupo opcional para informações do ICMS Efetivo, obrigatório quando CST = 60 ou CSOSN=500 e operação com consumidor final [nItem: nnn]~~ |

> **Revogado/Descontinuado:** a regra N33-10 (linha inteira riscada no original) e o Modelo “65” das regras N12-81 e N12a-50 (riscado no original).

## 4.4 Grupo ZD. Informações do Responsável Técnico

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ZD01-10 | 55/65 | Não informado o grupo de informações do responsável técnico<br>~~**Observação:** Implementação a critério da UF~~<br>**Observação**: Implementação futura, exceto as UF AM, MS, PE, PR, SC e TO, nas quais estas regras já estão em vigor em ambiente de teste na data da publicação da versão 1.30 desta NT, e entrarão em vigor em ambiente de produção no dia 03 de junho de 2019 | Facult. | 972 | Rej. | Rejeição: Obrigatória as informações do responsável técnico |
| ZD02-10 | 55/65 | Informado CNPJ do responsável técnico inválido<br>– CNPJ com zeros, nulo ou DV inválido<br>~~**Observação:** Implementação a critério da UF~~<br>**Observação**: Implementação futura, exceto as UF AM, MS, PE, PR, SC e TO, nas quais estas regras já estão em vigor em ambiente de teste na data da publicação da versão 1.30 desta NT, e entrarão em vigor em ambiente de produção no dia 03 de junho de 2019 | Facult. | 973 | Rej. | Rejeição: CNPJ do responsável técnico inválido |
| ZD07-10 | 55/65 | Obrigatória a informação do identificador do CSRT (tag: idCSRT) e Hash do CSTR (tag: hashCSRT), ~~todas as UFs~~<br>~~**Observação:** Implementação a critério da UF para os estados que possuem cadastro de fornecedor de software~~<br>**Observação 1**: Regra válida para o PR, modelo 55, a partir de 19/01/2026 em homologação e 23/02/2026 em produção<br>**Observação 2**: Modelo 65, implementação futura<br>**Exceção 1:** Não se aplica para NFF (tpEmis = 3-NFF) e SVC (tpEmis = 7 ou 8) | Facult. | 975 | Rej. | Rejeição: Obrigatória a informação do identificador do CSRT e do Hash do CSRT |

## 4.5 Protocolo de Autorização na Rejeição por Duplicidade

A critério da UF, o sistema autorizador da NF-e e NFC-e poderá retornar o protocolo de autorização da nota, nos casos de duplicidade de NF-e/NFC-e. Porém, isso somente irá acontecer, no caso do hash (tag: DigestValue) da NF-e/NFC-e enviada/rejeitada ser igual a NF-e/NFC-e autorizada. Sendo assim, foi alterada a regra de validação 2B08-20.

<!-- p.24 -->
| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 2B08-20 | 55/65 | Acesso BD NFE (Chave: Modelo, UF, CNPJ/CPF Emitente, Série, Número):<br>– NF-e já cadastrada e não Cancelada/Denegada<br><br>**Observação 1:** Na resposta assíncrona, a SEFAZ pode devolver o nREC – Número do Recibo do Lote caso tenha condições.<br>**Observação 2:** A critério da UF, no caso do DigestValue ser igual a NF-e autorizada, poderá retornar o protocolo de Autorização. | Obrig. | 204 | Rej. | Rejeição: Duplicidade de NF-e [nRec:999999999999999] |

## 4.6 Banco de Dados: Cadastro da SEFAZ

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 7ZD02-10 | 55/65 | CNPJ do responsável técnico diverge do cadastrado para o emitente (UF/CNPJ).<br>~~**Observação:** Implementação a critério da UF para os estados que possuem cadastro de responsável técnico, e em data futura nos ambientes de Sefaz-Virtual de Contingência (SVC)~~<br>**Observação 1**: Regra válida para o PR, modelo 55, a partir de 16/09/2024 em homologação e 01/05/2025 em produção<br>**Observação 2**: Modelo 65, implementação futura<br>**Exceção 1:** Não se aplica para NFF (tpEmis = 3-NFF) e SVC (tpEmis = 7 ou 8) | Facult. | 974 | Rej. | Rejeição: CNPJ do responsável técnico diverge do cadastrado |
| 7ZD08-10 | 55/65 | Identificador do CSRT (tag: idCSRT) não cadastrado na SEFAZ.<br>~~**Observação:** Implementação a critério da UF para os estados que possuem cadastro de responsável técnico, e em data futura nos ambientes de Sefaz-Virtual de Contingência (SVC)~~<br>**Observação 1**: Regra válida para o PR, a partir de 16/09/2024 em homologação e 01/10/2024 em produção<br>**Observação 2**: Modelo 65, implementação futura<br>**Exceção 1:** Não se aplica para NFF (tpEmis = 3-NFF) e SVC (tpEmis = 7 ou 8) | Facult. | 976 | Rej. | Rejeição: Identificador do CSRT não cadastrado na SEFAZ |
| 7ZD08-20 | 55/65 | Identificador do CSRT (tag: idCSRT) revogado.<br>~~**Observação:** Implementação a critério da UF para os estados que possuem cadastro de responsável técnico, e em data futura nos ambientes de Sefaz-Virtual de Contingência (SVC)~~<br>**Observação 1**: Regra válida para o PR, a partir de 16/09/2024 em homologação e 01/10/2024 em produção<br>**Observação 2**: Modelo 65, implementação futura<br>**Exceção 1:** Não se aplica para NFF (tpEmis = 3-NFF) e SVC (tpEmis = 7 ou 8) | Facult. | 977 | Rej. | Rejeição: Identificador do CSRT revogado |
| <!-- p.25 -->7ZD09-10 | 55/65 | Hash do CSRT (tag: hashCSRT) diverge do calculado.<br>~~**Observação:** Implementação a critério da UF para os estados que possuem cadastro de responsável técnico, e em data futura nos ambientes de Sefaz-Virtual de Contingência (SVC)~~<br>**Observação 1**: Regra válida para o PR, a partir de 16/09/2024 em homologação e 01/10/2024 em produção<br>**Observação 2**: Modelo 65, implementação futura<br>**Exceção 1:** Não se aplica para NFF (tpEmis = 3-NFF) e SVC (tpEmis = 7 ou 8) | Facult. | 978 | Rej. | Rejeição: Hash do CSRT diverge do calculado |

> **Revogado/Descontinuado:** nas regras ZD01-10, ZD02-10 e ZD07-10 (item 4.4) e 7ZD02-10, 7ZD08-10, 7ZD08-20 e 7ZD09-10 (item 4.6), os trechos riscados no original (a observação “Implementação a critério da UF…” e, em ZD07-10, “todas as UFs”) estão indicados como ~~texto~~ nas respectivas tabelas.
