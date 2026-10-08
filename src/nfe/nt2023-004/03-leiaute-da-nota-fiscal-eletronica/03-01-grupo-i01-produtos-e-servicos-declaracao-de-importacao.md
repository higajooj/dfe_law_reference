<!-- p.7 -->
# 3.1. Grupo I01. Produtos e Serviços / Declaração de Importação

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **117** | **I18** | **DI** | **Declaração de Importação** | **G** | **I01** | | **0-100** | | **Informar dados da importação** |
| 118 | I19 | nDI | Número do Documento de Importação (DI, DSI, DIRE, DUImp) | E | I18 | C | 1-1 | 1 - 15 | (NT 2011/004) |
| 119 | I20 | dDI | Data de Registro do documento | E | I18 | D | 1-1 | | Formato: “AAAA-MM-DD” |
| 120 | I21 | xLocDesemb | Local de desembaraço | E | I18 | C | 1-1 | 1 - 60 | |
| 121 | I22 | UFDesemb | Sigla da UF onde ocorreu o Desembaraço Aduaneiro | E | I18 | C | 1-1 | 2 | |
| 122 | I23 | dDesemb | Data do Desembaraço Aduaneiro | E | I18 | D | 1-1 | | Formato: “AAAA-MM-DD” |
| 122.01 | I23a | tpViaTransp | Via de transporte internacional informada na Declaração de Importação (DI) ou na Declaração Única de Importação (DUImp) | E | I18 | N | 1-1 | 2 | 1=Marítima<br>2=Fluvial<br>3=Lacustre<br>4=Aérea<br>5=Postal<br>6=Ferroviária;<br>7=Rodoviária<br>8=Conduto/Rede Transmissão<br>9=Meios Próprios<br>10=Entrada/Saída Ficta<br>11=Courier<br>12=Em mãos<br>13=Por reboque |
| 122.02 | I23b | vAFRMM | Valor da AFRMM - Adicional ao Frete para Renovação da Marinha Mercante | E | I18 | N | 0-1 | 13v2 | A tag deve ser informada no caso da via de transporte marítima. |
| 122.03 | I23c | tpIntermedio | Forma de importação quanto a intermediação | E | I18 | N | 1-1 | 1 | 1=Importação por conta própria;<br>2=Importação por conta e ordem;<br>3=Importação por encomenda |
| 122.04 | I23d | CNPJ | CNPJ do adquirente ou do encomendante | CE | I18 | N | 0-1 | 14 | Obrigatória a informação no caso de importação por conta e ordem ou por encomenda. Informar os zeros não significativos |
| 122.05 | I23d1 | CPF | CPF do adquirente ou do encomendante | CE | I18 | N | 0-1 | 11 | Obrigatória a informação no caso de importação por conta e ordem ou por encomenda. Informar os zeros não significativos |
| 122.06 | I23e | UFTerceiro | Sigla da UF do adquirente ou do encomendante | E | I18 | C | 0-1 | 2 | Obrigatória a informação no caso de importação por conta e ordem ou por encomenda. Não aceita o valor "EX". |
| 123 | I24 | cExportador | Código do Exportador | E | I18 | C | 1-1 | 1 - 60 | Código do Exportador, usado nos sistemas internos de informação do emitente da NF-e |
| **124** | **I25** | **adi** | **Adições e/ou itens** | **G** | **I18** | | **1-999** | | **(NT 2011/004)** |
| 125 | I26 | nAdicao | Número da Adição | E | I25 | N | 0-1 | 1 - 3 | No caso de DUImp esse campo não deverá ser preenchido |
| 126 | I27 | nSeqAdic | Número sequencial do item | E | I25 | N | 1-1 | 1 - 5 | |
| 127 | I28 | cFabricante | Código do fabricante estrangeiro | E | I25 | C | 1-1 | 1 - 60 | Código do fabricante estrangeiro, usado nos sistemas internos de informação do emitente da NF-e |
| 128 | I29 | vDescDI | Valor do desconto do item | E | I25 | N | 0-1 | 13v2 | |
| 128.01 | I29a | nDraw | Número do ato concessório de Drawback | E | I25 | C | 0-1 | 1-20 | O número do Ato Concessório de Suspensão deve ser preenchido com 11 dígitos (AAAANNNNNND) e o número do Ato Concessório de Drawback Isenção deve ser preenchido com 9 dígitos (AANNNNNND). (Observação incluída na NT 2013/005 v. 1.10) |
| **128.20** | **I50** | **detExport** | **Grupo de informações de exportação para o item** | **G** | **I01** | | **0-500** | | **Informar apenas no Drawback e nas exportações** |
| 128g | I51 | nDraw | Número do ato concessório de Drawback | E | I50 | C | 0-1 | 1-20 | O número do Ato Concessório de Suspensão deve ser preenchido com 11 dígitos (AAAANNNNNND) e o número do Ato Concessório de Drawback Isenção deve ser preenchido com 9 dígitos (AANNNNNND). (Observação incluída na NT 2013/005 v. 1.10) |
