# Grupo I01. Produtos e Serviços / Declaração de Importação

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **117** | **DI (I18)** | **G** | **I01** |  | **0-100** |  | **Declaração de Importação<br>Informar dados da importação** |
| 118 | nDI (I19) | E | I18 | C | 1-1 | 1 - 12 | Número do Documento de Importação (DI, DSI, DIRE, ...)<br>(NT 2011/004) |
| 119 | dDI (I20) | E | I18 | D | 1-1 |  | Data de Registro do documento<br>Formato: “AAAA-MM-DD” |
| 120 | xLocDesemb (I21) | E | I18 | C | 1-1 | 1 - 60 | Local de desembaraço |
| 121 | UFDesemb (I22) | E | I18 | C | 1-1 | 2 | Sigla da UF onde ocorreu o Desembaraço Aduaneiro |
| 122 | dDesemb (I23) | E | I18 | D | 1-1 |  | Data do Desembaraço Aduaneiro<br>Formato: “AAAA-MM-DD” |
| 122a | tpViaTransp (I23a) | E | I18 | N | 1-1 | 2 | Via de transporte internacional informada na Declaração de Importação (DI)<br>1=Marítima; 2=Fluvial; 3=Lacustre; 4=Aérea; 5=Postal; 6=Ferroviária; 7=Rodoviária; |
| 122b | vAFRMM (I23b) | E | I18 | N | 0-1 | 13v2 | Valor da AFRMM - Adicional ao Frete para Renovação da Marinha Mercante<br>A tag deve ser informada no caso da via de transporte marítima. |
| 122c | tpIntermedio (I23c) | E | I18 | N | 1-1 | 1 | Forma de importação quanto a intermediação<br>1=Importação por conta própria; 2=Importação por conta e ordem; 3=Importação por encomenda; <!-- p.20 --> |
| 122d | CNPJ (I23d) | E | I18 | N | 0-1 | 14 | CNPJ do adquirente ou do encomendante<br>Obrigatória a informação no caso de importação por conta e ordem ou por encomenda. Informar os zeros não significativos |
| 122e | UFTerceiro (I23e) | E | I18 | C | 0-1 | 2 | Sigla da UF do adquirente ou do encomendante<br>Obrigatória a informação no caso de importação por conta e ordem ou por encomenda. Não aceita o valor "EX". |
| 123 | cExportador (I24) | E | I18 | C | 1-1 | 1 - 60 | Código do Exportador<br>Código do Exportador, usado nos sistemas internos de informação do emitente da NF-e |
| **124** | **adi (I25)** | **G** | **I18** |  | **1-100** |  | **Adições<br>(NT 2011/004)** |
| 125 | nAdicao (I26) | E | I25 | N | 1-1 | 1 - 3 | Numero da Adição |
| 126 | nSeqAdic (I27) | E | I25 | N | 1-1 | 1 - 3 | Numero sequencial do item dentro da Adição |
| 127 | cFabricante (I28) | E | I25 | C | 1-1 | 1 - 60 | Código do fabricante estrangeiro<br>Código do fabricante estrangeiro, usado nos sistemas internos de informação do emitente da NF-e |
| 128 | vDescDI (I29) | E | I25 | N | 0-1 | 13v2 | Valor do desconto do item da DI – Adição |
| 128.01 | nDraw (I29a) | E | I25 | N | 0-1 | 0, 9 ou 11 | Número do ato concessório de Drawback<br>O número do Ato Concessório de Suspensão deve ser preenchido com 11 dígitos (AAAANNNNNND) e o número do Ato Concessório de Drawback Isenção deve ser preenchido com 9 dígitos (AANNNNNND). (Observação incluída na NT 2013/005 v. 1.10) |
