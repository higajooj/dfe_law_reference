# Grupo BA. Documento Fiscal Referenciado

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **29x.1** | **NFref (BA01)** | **G** | **B01** |  | **0-500** |  | **Informação de Documentos Fiscais referenciados<br>Grupo com informações de Documentos Fiscais referenciados. Informação utilizada nas hipóteses previstas na legislação. (Ex.: Devolução de mercadorias, Substituição de NF cancelada, Complementação de NF, etc.).** |
| 29x.2 | refNFe (BA02) | CE | BA01 | N | 1-1 | 44 | Chave de acesso da NF-e referenciada<br>Referencia uma NF-e (modelo 55) emitida anteriormente, vinculada a NF-e atual, ou uma NFC-e (modelo 65) |
| **29x.3** | **refNF (BA03)** | **CG** | **BA01** |  | **1-1** |  | **Informação da NF modelo 1/1A ou NF modelo 2 referenciada (alterado pela NT2016.002)** |
| 29x.4 | cUF (BA04) | E | BA03 | N | 1-1 | 2 | Código da UF do emitente<br>Utilizar a Tabela do IBGE (Seção 8.1 do MOC Visão Geral- Tabela de UF, Município e País) |
| 29x.5 | AAMM (BA05) | E | BA03 | N | 1-1 | 4 | Ano e Mês de emissão da NF-e<br>AAMM da emissão da NF |
| 29x.6 | CNPJ (BA06) | E | BA03 | N | 1-1 | 14 | CNPJ do emitente<br>Informar o CNPJ do emitente da NF |
| 29x.7 | mod (BA07) | E | BA03 | N | 1-1 | 2 | Modelo do Documento Fiscal<br>01=modelo 01 02=modelo 02 (incluído na NT2016.002) <!-- p.12 --> |
| 29x.8 | serie (BA08) | E | BA03 | N | 1-1 | 1 - 3 | Série do Documento Fiscal<br>Informar zero se não utilizada Série do documento fiscal. |
| 29x.9 | nNF (BA09) | E | BA03 | N | 1-1 | 1 - 9 | Número do Documento Fiscal<br>Faixa: 1–999999999 |
| **29x.10** | **refNFP (BA10)** | **CG** | **BA01** |  | **1-1** |  | **Informações da NF de produtor rural referenciada** |
| 29x.11 | cUF (BA11) | E | BA10 | N | 1-1 | 2 | Código da UF do emitente<br>Utilizar a Tabela do IBGE (Seção 8.1 do MOC – Visão Geral, Tabela de UF, Município e País) (v2.0) |
| 29x.12 | AAMM (BA12) | E | BA10 | N | 1-1 | 4 | Ano e Mês de emissão da NF-e<br>AAMM da emissão da NF de produtor (v2.0) |
| 29x.13 | CNPJ (BA13) | CE | BA10 | N | 1-1 | 14 | CNPJ do emitente<br>Informar o CNPJ do emitente da NF de produtor (v2.0) |
| 29x.14 | CPF (BA14) | CE | BA10 | N | 1-1 | 11 | CPF do emitente<br>Informar o CPF do emitente da NF de produtor (v2.0) |
| 29x.15 | IE (BA15) | E | BA10 | N | 1-1 | 2 - 14 | IE do emitente<br>Informar a IE do emitente da NF de Produtor ou o literal “ISENTO” (v2.0) |
| 29x.16 | mod (BA16) | E | BA10 | N | 1-1 | 2 | Modelo do Documento Fiscal<br>04=NF de Produtor; 01=NF (v2.0) |
| 29x.17 | serie (BA17) | E | BA10 | N | 1-1 | 1 - 3 | Série do Documento Fiscal<br>Informar a série do documento fiscal (informar zero se inexistente) (v2.0). |
| 29x.18 | nNF (BA18) | E | BA10 | N | 1-1 | 1 - 9 | Número do Documento Fiscal<br>Faixa: 1–999999999 |
| 29x.19 | refCTe (BA19) | CE | BA01 | N | 1-1 | 44 | Chave de acesso do CT-e referenciada<br>Utilizar esta TAG para referenciar um CT-e emitido anteriormente, vinculada a NF-e atual - (v2.0). |
| **29x.20** | **refECF (BA20)** | **CG** | **BA01** |  | **1-1** |  | **Informações do Cupom Fiscal referenciado<br>Grupo do Cupom Fiscal vinculado à NF-e (v2.0).** |
| 29x.21 | mod (BA21) | E | BA20 | C | 1-1 | 2 | Modelo do Documento Fiscal<br>"2B"=Cupom Fiscal emitido por máquina registradora (não ECF); "2C"=Cupom Fiscal PDV; "2D"=Cupom Fiscal (emitido por ECF) (v2.0). |
| 29x.22 | nECF (BA22) | E | BA20 | N | 1-1 | 3 | Número de ordem sequencial do ECF<br>Informar o número de ordem sequencial do ECF que emitiu o Cupom Fiscal vinculado à NF-e (v2.0). |
| 29x.23 | nCOO (BA23) | E | BA20 | N | 1-1 | 6 | Número do Contador de Ordem de Operação - COO<br>Informar o Número do Contador de Ordem de Operação - COO vinculado à NF-e (v2.0). |
