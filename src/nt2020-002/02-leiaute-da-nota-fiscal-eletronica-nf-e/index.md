<!-- p.4 -->
# 2. Leiaute da Nota Fiscal eletrônica (NF-e)

Os campos da Nota Fiscal eletrônica (NF-e) relacionados com o Imposto sobre Produtos Industrializados (IPI) são:

## Grupo I(Produtos e Serviços da NF-e)

| # | ID | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|---|
| 105 | I06 | EXTIPI | E | I01 | N | 0-1 | 2-3 | EX_TIPI |

## Grupo O(Imposto sobre Produtos Industrializados)

| # | ID | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|---|
| **246** | **O01** | **IPI** | **CG** | **M01** | | **0-1** | | **Informar apenas quando o item for sujeito ao IPI** |
| 248 | O03 | CNPJProd | E | O01 | N | 0-1 | 14 | CNPJ do produtor da mercadoria, quando diferente do emitente. Somente para os casos de exportação direta ou indireta. |
| 249 | O04 | cSelo | E | O01 | C | 0-1 | 1-60 | Código do selo de controle IPI<br>Preenchimento conforme Anexo II-A da Instrução Normativa RFB Nº 770/2007 |
| 250 | O05 | qSelo | E | O01 | C | 0-1 | 1-12 | Quantidade de selo de controle |
| 251 | O06 | cEnq | E | O01 | N | 1-1 | 1-3 | Código de Enquadramento Legal do IPI (preenchimento conforme Anexo desta Nota Tecnica) |
| **252** | **O07** | **IPITrib** | **CG** | **O01** | | **1-1** | | **Grupo do CST 00, 49, 50 e 99<br>Informar apenas um dos grupos O07 ou O08 com base valor atribuído ao campo O09 – CST do IPI** |
| 253 | O09 | CST | E | O07 | N | 1-1 | 2 | Código da situação tributária do IPI<br>00=Entrada com recuperação de crédito<br>49=Outras entradas<br>50=Saída tributada<br>99=Outras saídas |
| **253.1** | **O09.1** | **-x-** | **CG** | **O07** | | **1-1** | | **Informar os campos O10 e O13 se o cálculo do IPI for por alíquota.** |
| 254 | O10 | vBC | E | O09.1 | N | 1-1 | 13v2 | Valor da BC do IPI |
| 257 | O13 | pIPI | E | O09.1 | N | 1-1 | 3v2-4 | Alíquota do IPI |
| **257.1** | **O13.1** | **-x-** | **CG** | **O07** | | **1-1** | | **Informar os campos O11 e O12 se o cálculo do IPI for de valor por unidade.** |
| 255 | O11 | qUnid | E | O13.1 | N | 1-1 | 12v0-4 | Quantidade total na unidade padrão para tributação (somente para os produtos tributados por unidade)<br>Informar os campos O11 e O12 se o cálculo do IPI for de valor por unidade. |
| 256 | O12 | vUnid | E | O13.1 | N | 1-1 | 11v0-4 | Valor por Unidade Tributável<br>Informar os campos O11 e O12 se o cálculo do IPI for de valor por unidade. |
| 259 | O14 | vIPI | E | O07 | N | 1-1 | 13v2 | Valor do IPI<br>Informar os campos O11 e O12 se o cálculo do IPI for de valor por unidade. |
| <!-- p.5 -->**260** | **O08** | **IPINT** | **CG** | **O01** | | **1-1** | | **Grupo CST 01, 02, 03, 04, 51, 52, 53,** |
| 261 | O09 | CST | E | O08 | C | 1-1 | 2 | Código da situação tributária do IPI<br>01=Entrada tributada com alíquota zero<br>02=Entrada isenta<br>03=Entrada não-tributada<br>04=Entrada imune<br>05=Entrada com suspensão<br>51=Saída tributada com alíquota zero<br>52=Saída isenta<br>53=Saída não-tributada  Observação<br>54=Saída imune<br>55=Saída com suspensão |

## Grupo UA(Tributos devolvidos para o item da NF-e)

| # | ID | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|---|
| **324r** | **UA03** | **IPI** | **G** | **UA01** | | **1-1** | | **Informação do IPI devolvido** |
| 324s | UA04 | vIPIDevol | E | UA03 | N | 1-1 | 13v2 | Valor do IPI devolvido |

## Grupo W(Total da NF-e)

| # | ID | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|---|
| **326** | **W01** | **total** | **G** | **A01** | | **1-1** | | **Grupo Totais da NF-e<br>O grupo de valores totais da NF-e deve ser informado com o somatório do campo correspondente dos itens.** |
| 337 | W12 | vIPI | E | W02 | N | 1-1 | 13v2 | Valor Total do IPI |
| 337.01 | W12a | vIPIDevol | E | W02 | N | 1-1 | 13v2 | Valor Total do IPI devolvido<br>Deve ser informado quando preenchido o Grupo Tributos Devolvidos na emissão de nota finNFe=4 (devolução) nas operações com não contribuintes do IPI. Corresponde ao total da soma dos campos id:UA04. |
