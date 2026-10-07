<!-- p.6 -->
# 5. Série de emissão dos documentos.

Para viabilizar a utilização de software emissor próprio e também a emissão via PAA ou até mais de um PAA pelo Emitente, é necessário fazer o controle da utilização da série do documento a fim de evitar duplicidade de documentos com mesma série e número. Deste modo, ao estabelecer o vínculo do PAA, o Portal da SVRS irá atribuir àquele vínculo uma Série específica que será utilizada pelo PAA para emitir os documentos daquele Emitente.

<!-- p.7 -->

| Emit | Processo Emissão | Assinatura | Série | Ch Acesso | Numeração |
|---|---|---|---|---|---|
| CNPJ | Aplicativo da Empresa | e-CNPJ do Emitente (procEmi <> 1,2) | 000-889 | CNPJ do Emitente | Sequencial por CNPJ, controlado pelo emitente |
| CNPJ | Programa Emissor Fisco | e-CNPJ do Emitente (procEmi <> 1,2) | 000-889 | CNPJ do Emitente | Sequencial por CNPJ, controlado pelo emitente |
| CNPJ/CPF | Site SEFAZ (NFA-e) | e-CNPJ da SEFAZ (procEmi=1) | 890-899 | CNPJ da SEFAZ | Sequencial pela SEFAZ, independentemente do emitente (CPF ou CNPJ) |
| **Faixas reservadas a partir da NT 2018.001** | | | | | |
| CNPJ/CPF | Site SEFAZ | e-CNPJ da SEFAZ (procEmi=1), ou e-CNPJ do Emitente (procEmi=2) | 900-909 | CNPJ do Emitente | Sequencial por CNPJ, controlado pela SEFAZ |
| CPF | Site SEFAZ | e-CNPJ da SEFAZ (procEmi=1), ou e-CPF do Emitente (procEmi=2) | 910-919 | CPF do Emitente | Sequencial pelo CPF, controlado pela SEFAZ |
| CPF | Aplicativo da Empresa | e-CPF do Emitente (procEmi<>1,2) | 920-969 | CPF do Emitente | Sequencial por CPF, controlado pelo emitente |
| **Faixa reservada para o PAA** | | | | | |
| ~~CNPJ~~<br>CPF | PAA | e-CNPJ do PAA | 970-979 | CPF do Emitente | Sequencial por CPF do emitente, controlado pelo PAA |
| CNPJ | PAA | e-CNPJ do PAA | 980-989 | CNPJ do Emitente | Sequencial por CNPJ do emitente, controlado pelo PAA |

> **Revogado/Descontinuado:** a palavra “CNPJ” da linha da faixa 970-979 está riscada na NT original.
