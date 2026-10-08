<!-- p.7 -->
# 3.1. Grupo BA. Documento Fiscal Referenciado

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **29x.1** | **BA01** | **NFref** | **Informação de Documentos Fiscais referenciados** | **G** | **B01** | | **0-999** | | **Grupo com informações de Documentos Fiscais referenciados. Informação utilizada nas hipóteses previstas na legislação. (Ex.: Devolução de mercadorias, Substituição de NF cancelada, Complementação de NF, etc.).** |
| 29x.2 | BA02 | refNFe | Chave de acesso da NF-e referenciada | CE | BA01 | N | 1-1 | 44 | Referencia uma NF-e (modelo 55) emitida anteriormente, vinculada a NF-e atual, ou uma NFC-e (modelo 65) |
| 29x.2a | BA02a | refNFeSig | Chave da NF-e com o código numérico zerado. | CE | BA01 | N | 1-1 | 44 | Referencia uma NF-e (modelo 55) emitida anteriormente pela sua Chave de Acesso com código numérico zerado, permitindo manter o sigilo da NF-e referenciada. |
| **29x.3** | **BA03** | **refNF** | **Informação da NF modelo 1/1A ou NF modelo 2 referenciada (alterado pela NT2016.002)** | **CG** | **BA01** | | **1-1** | | |
| 29x.4 | BA04 | cUF | Código da UF do emitente | E | BA03 | N | 1-1 | 2 | Utilizar a Tabela do IBGE (Seção 8.1 do MOC Visão Geral- Tabela de UF, Município e País) |
| 29x.5 | BA05 | AAMM | Ano e Mês de emissão da NF-e | E | BA03 | N | 1-1 | 4 | AAMM da emissão da NF |
| 29x.6 | BA06 | CNPJ | CNPJ do emitente | E | BA03 | N | 1-1 | 14 | Informar o CNPJ do emitente da NF |
| 29x.7 | BA07 | mod | Modelo do Documento Fiscal | E | BA03 | N | 1-1 | 2 | 01=modelo 01<br>02=modelo 02 (incluído na NT2016.002) |
| 29x.8 | BA08 | serie | Série do Documento Fiscal | E | BA03 | N | 1-1 | 1 - 3 | Informar zero se não utilizada Série do documento fiscal. |
| 29x.9 | BA09 | nNF | Número do Documento Fiscal | E | BA03 | N | 1-1 | 1 - 9 | Faixa: 1 – 999999999 |
| **29x.10** | **BA10** | **refNFP** | **Informações da NF de produtor rural referenciada** | **CG** | **BA01** | | **1-1** | | |
| 29x.11 | BA11 | cUF | Código da UF do emitente | E | BA10 | N | 1-1 | 2 | Utilizar a Tabela do IBGE (Seção 8.1 do MOC – Visão Geral, Tabela de UF, Município e País) (v2.0) |
| 29x.12 | BA12 | AAMM | Ano e Mês de emissão da NF-e | E | BA10 | N | 1-1 | 4 | AAMM da emissão da NF de produtor (v2.0) |
| 29x.13 | BA13 | CNPJ | CNPJ do emitente | CE | BA10 | N | 1-1 | 14 | Informar o CNPJ do emitente da NF de produtor (v2.0) |
| 29x.14 | BA14 | CPF | CPF do emitente | CE | BA10 | N | 1-1 | 11 | Informar o CPF do emitente da NF de produtor (v2.0) |
| 29x.15 | BA15 | IE | IE do emitente | E | BA10 | N | 1-1 | 2 - 14 | Informar a IE do emitente da NF de Produtor ou o literal “ISENTO” (v2.0) |
| <!-- p.8 -->29x.16 | BA16 | mod | Modelo do Documento Fiscal | E | BA10 | N | 1-1 | 2 | 04=NF de Produtor; 01=NF (v2.0) |
| 29x.17 | BA17 | serie | Série do Documento Fiscal | E | BA10 | N | 1-1 | 1 - 3 | Informar a série do documento fiscal (informar zero se inexistente) (v2.0). |
| 29x.18 | BA18 | nNF | Número do Documento Fiscal | E | BA10 | N | 1-1 | 1 - 9 | Faixa: 1 – 999999999 |
| 29x.19 | BA19 | refCTe | Chave de acesso do CT-e referenciada | CE | BA01 | N | 1-1 | 44 | Utilizar esta TAG para referenciar um CT-e emitido anteriormente, vinculada a NF-e atual - (v2.0). |
| **29x.20** | **BA20** | **refECF** | **Informações do Cupom Fiscal referenciado** | **CG** | **BA01** | | **1-1** | | **Grupo do Cupom Fiscal vinculado à NF-e (v2.0).** |
| 29x.21 | BA21 | mod | Modelo do Documento Fiscal | E | BA20 | C | 1-1 | 2 | "2B"=Cupom Fiscal emitido por máquina registradora (não ECF);<br>"2C"=Cupom Fiscal PDV;<br>"2D"=Cupom Fiscal (emitido por ECF) (v2.0). |
| 29x.22 | BA22 | nECF | Número de ordem sequencial do ECF | E | BA20 | N | 1-1 | 3 | Informar o número de ordem sequencial do ECF que emitiu o Cupom Fiscal vinculado à NF-e (v2.0). |
| 29x.23 | BA23 | nCOO | Número do Contador de Ordem de Operação - COO | E | BA20 | N | 1-1 | 6 | Informar o Número do Contador de Ordem de Operação - COO vinculado à NF-e (v2.0). |
