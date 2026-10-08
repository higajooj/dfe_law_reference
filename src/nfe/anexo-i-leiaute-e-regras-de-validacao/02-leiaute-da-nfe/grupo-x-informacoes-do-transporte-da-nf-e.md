# Grupo X. Informações do Transporte da NF-e

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **356** | **transp (X01)** | **G** | **A01** |  | **1-1** |  | **Grupo Informações do Transporte** |
| 357 | modFrete (X02) | E | X01 | N | 1-1 | 1 | Modalidade do frete<br>0=Contratação do Frete por conta do Remetente (CIF); 1=Contratação do Frete por conta do Destinatário (FOB); 2=Contratação do Frete por conta de Terceiros; 3=Transporte Próprio por conta do Remetente; 4=Transporte Próprio por conta do Destinatário; 9=Sem Ocorrência de Transporte. (Atualizado na NT2016.002) |
| **358** | **transporta (X03)** | **G** | **X01** |  | **0-1** |  | **Grupo Transportador** |
| 359 | CNPJ (X04) | CE | X03 | N | 0-1 | 14 | CNPJ do Transportador<br>Preencher os zeros não significativos. |
| 360 | CPF (X05) | CE | X03 | N | 0-1 | 11 | CPF do Transportador |
| 361 | xNome (X06) | E | X03 | C | 0-1 | 2 - 60 | Razão Social ou nome |
| 362 | IE (X07) | E | X03 | C | 0-1 | 2 - 14 | Inscrição Estadual do Transportador<br>Informar: - Inscrição Estadual do transportador contribuinte do ICMS, sem caracteres de formatação (ponto, barra, hífen, etc.); - Literal “ISENTO” para transportador isento de inscrição no cadastro de contribuintes ICMS; - Não informar a tag para não contribuinte do ICMS, A UF deve ser informada se informado uma IE. (v2.0) |
| 363 | xEnder (X08) | E | X03 | C | 0-1 | 1 - 60 | Endereço Completo |
| 364 | xMun (X09) | E | X03 | C | 0-1 | 1 - 60 | Nome do município |
| 365 | UF (X10) | E | X03 | C | 0-1 | 2 | Sigla da UF<br>A UF deve ser informada se informado uma IE. (v2.0). Informar "EX" para Exterior. |
| **366** | **retTransp (X11)** | **G** | **X01** |  | **0-1** |  | **Grupo Retenção ICMS transporte** |
| 367 | vServ (X12) | E | X11 | N | 1-1 | 13v2 | Valor do Serviço |
| 368 | vBCRet (X13) | E | X11 | N | 1-1 | 13v2 | BC da Retenção do ICMS |
| 369 | pICMSRet (X14) | E | X11 | N | 1-1 | 3v2-4 | Alíquota da Retenção |
| 370 | vICMSRet (X15) | E | X11 | N | 1-1 | 13v2 | Valor do ICMS Retido |
| 371 | CFOP (X16) | E | X11 | N | 1-1 | 4 | CFOP<br>CFOP de Serviço de Transporte (Seção 8.10 do MOC – Visão Geral,). |
| 372 | cMunFG (X17) | E | X11 | N | 1-1 | 7 | Código do município de ocorrência do fato gerador do ICMS do transporte<br>Utilizar a Tabela do IBGE (Seção 8.2 do MOC – Visão Geral, Tabela de UF, Município e País) |
| **372.1** | **-x- (X17.1)** | **CG** | **X01** |  | **0-1** |  | **Sequência XML<br>Transporte por Veículo, Vagão ou Balsa.** |
| **373** | **veicTransp (X18)** | **G** | **X17.1** |  | **0-1** |  | **Grupo Veículo Transporte<br>Informar o veículo trator (v2.0)** <!-- p.61 --> |
| 374 | placa (X19) | E | X18 | C | 1-1 | 7 | Placa do Veículo<br>Informar em um dos seguintes formatos: XXX9999, XXX999, XX9999 ou XXXX999. Informar a placa em informações complementares quando a placa do veículo tiver lei de formação diversa. (NT 2011/005) |
| 375 | UF (X20) | E | X18 | C | 1-1 | 2 | Sigla da UF<br>Informar "EX" se Exterior. |
| 376 | RNTC (X21) | E | X18 | C | 0-1 | 1 - 20 | Registro Nacional de Transportador de Carga (ANTT) |
| **377** | **reboque (X22)** | **G** | **X17.1** |  | **0-5** |  | **Grupo Reboque<br>Informar os reboques/Dolly (v2.0)** |
| 378 | placa (X23) | E | X22 | C | 1-1 | 7 | Placa do Veículo<br>Informar em um dos seguintes formatos: XXX9999, XXX999, XX9999 ou XXXX999. Informar a placa em informações complementares quando a placa do veículo tiver lei de formação diversa. (NT 2011/005) |
| 379 | UF (X24) | E | X22 | C | 1-1 | 2 | Sigla da UF<br>Informar "EX" se Exterior. |
| 380 | RNTC (X25) | E | X22 | C | 0-1 | 1 - 20 | Registro Nacional de Transportador de Carga (ANTT) |
| 380a | vagao (X25a) | CE | X01 | C | 0-1 | 1 - 20 | Identificação do vagão<br>(v2.0) |
| 380b | balsa (X25b) | CE | X01 | C | 0-1 | 1 - 20 | Identificação da balsa<br>(v2.0) |
| **381** | **vol (X26)** | **G** | **X01** |  | **0-5000** |  | **Grupo Volumes<br>(NT 2012/003)** |
| 382 | qVol (X27) | E | X26 | N | 0-1 | 1 - 15 | Quantidade de volumes transportados |
| 383 | esp (X28) | E | X26 | C | 0-1 | 1 - 60 | Espécie dos volumes transportados |
| 384 | marca (X29) | E | X26 | C | 0-1 | 1 -60 | Marca dos volumes transportados |
| 385 | nVol (X30) | E | X26 | C | 0-1 | 1 - 60 | Numeração dos volumes transportados |
| 386 | pesoL (X31) | E | X26 | N | 0-1 | 12v3 | Peso Líquido (em kg) |
| 387 | pesoB (X32) | E | X26 | N | 0-1 | 12v3 | Peso Bruto (em kg) |
| **387a** | **lacres (X33)** | **G** | **X26** |  | **0-5000** |  | **Grupo Lacres<br>(NT 2012/003)** |
| 388 | nLacre (X34) | E | X33 | C | 1-1 | 1 - 60 | Número dos Lacres |
