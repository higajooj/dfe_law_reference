# Grupo O. Imposto sobre Produtos Industrializados

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **246** | **IPI (O01)** | **CG** | **M01** |  | **0-1** |  | **Grupo IPI<br>Informar apenas quando o item for sujeito ao IPI** |
| 247 | clEnq (O02) | E | O01 | C | 0-1 | 1 - 5 | Classe de enquadramento do IPI para Cigarros e Bebidas<br>Preenchimento conforme Atos Normativos editados pela Receita Federal (Observação 2) (Excluído no leiaute 4.0 - NT2016.002) |
| 248 | CNPJProd (O03) | E | O01 | N | 0-1 | 14 | CNPJ do produtor da mercadoria, quando diferente do emitente. Somente para os casos de exportação direta ou indireta.<br>Informar os zeros não significativos |
| 249 | cSelo (O04) | E | O01 | C | 0-1 | 1 - 60 | Código do selo de controle IPI<br>Preenchimento conforme Anexo II-A da Instrução Normativa RFB Nº 770/2007 TIPO DE SELO CÓDIGO COR DO SELO Produto Nacional 9710-01 Verde combinado com marrom Produto Nacional 9710-10 Verde Escuro para Exportação - combinado com Tipo "1" marrom Produto Nacional 9710-11 Verde Escuro para Exportação - combinado com Tipo "2" marrom Produto Nacional 9710-12 Verde Escuro para Exportação - combinado com Tipo "3" marrom Produto Estrangeiro 8610-09 Vermelho combinado com azul (Atualizado na NT2016.002) |
| 250 | qSelo (O05) | E | O01 | N | 0-1 | 1 - 12 | Quantidade de selo de controle |
| 251 | cEnq (O06) | E | O01 | N | 1-1 | 1 - 3 | Código de Enquadramento Legal do IPI<br>Preenchimento conforme seção 8.9 do MOC – Visão Geral (Tabela do Código de Enquadramento do IPI) |
| **252** | **IPITrib (O07)** | **CG** | **O01** |  | **1-1** |  | **Grupo do CST 00, 49, 50 e 99<br>Informar apenas um dos grupos O07 ou O08 com base valor atribuído ao campo O09 – CST do IPI** |
| 253 | CST (O09) | E | O07 | N | 1-1 | 2 | Código da situação tributária do IPI<br>00=Entrada com recuperação de crédito 49=Outras entradas 50=Saída tributada 99=Outras saídas <!-- p.51 --> |
| **253,1** | **-x- (O09.1)** | **CG** | **O07** |  | **1-1** |  | **Sequência XML<br>Informar os campos O10 e O13 se o cálculo do IPI for por alíquota.** |
| 254 | vBC (O10) | E | O09.1 | N | 1-1 | 13v2 | Valor da BC do IPI |
| 257 | pIPI (O13) | E | O09.1 | N | 1-1 | 3v2-4 | Alíquota do IPI |
| **257,1** | **-x- (O13.1)** | **CG** | **O07** |  | **1-1** |  | **Sequência XML<br>Informar os campos O11 e O12 se o cálculo do IPI for de valor por unidade.** |
| 255 | qUnid (O11) | E | O13.1 | N | 1-1 | 12v0-4 | Quantidade total na unidade padrão para tributação (somente para os produtos tributados por unidade)<br>Informar os campos O11 e O12 se o cálculo do IPI for de valor por unidade. |
| 256 | vUnid (O12) | E | O13.1 | N | 1-1 | 11v0-4 | Valor por Unidade Tributável<br>Informar os campos O11 e O12 se o cálculo do IPI for de valor por unidade. |
| 259 | vIPI (O14) | E | O07 | N | 1-1 | 13v2 | Valor do IPI<br>Informar os campos O11 e O12 se o cálculo do IPI for de valor por unidade. |
| **260** | **IPINT (O08)** | **CG** | **O01** |  | **1-1** |  | **Grupo CST 01, 02, 03, 04, 51, 52, 53** |
| 261 | CST (O09) | E | O08 | C | 1-1 | 2 | Código da situação tributária do IPI<br>Código da situação tributária do IPI: 01=Entrada tributada com alíquota zero 02=Entrada isenta 03=Entrada não-tributada 04=Entrada imune 05=Entrada com suspensão 51=Saída tributada com alíquota zero 52=Saída isenta 53=Saída não-tributada 54=Saída imune 55=Saída com suspensão |
