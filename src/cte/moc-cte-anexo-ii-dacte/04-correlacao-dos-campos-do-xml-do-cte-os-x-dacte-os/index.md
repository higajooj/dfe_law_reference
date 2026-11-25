<!-- p.25 -->

# 4. Correlação dos campos do XML do CT-e OS x DACTE OS

| Quadro do DACTE OS | Campo do DACTE OS | Tag XML, do CT-e OS |
|---|---|---|
| **Identificação do Emitente** | Nome ou razão social | xNome ou xFant, de emit |
| | CNPJ | CNPJ, de emit |
| | Inscrição Estadual | IE, de emit |
| | Endereço | xLgr -nro -xCpl, de enderEmit |
| | Bairro | xBairro, de enderEmit |
| | Município | xMun, de enderEmit |
| | UF | UF, de enderEmit |
| | Telefone | fone, de enderEmit |
| | CEP | CEP, de enderEmit |
| **Modal** | Modal | 01-Rodoviário, de ide |
| **Modelo** | Modelo | mod, de ide |
| **Série** | Série | serie, de ide |
| **Número** | Número | nCT, de ide |
| **Data e hora de emissão** | Data e hora de emissão | dhEmi, de ide (HH.MM.SS) |
| **Chave de acesso** | Chave de acesso | Id, de infCte, sem as 3 primeiras letras |
| **Protocolo de Autorização de Uso** | Protocolo de Autorização de Uso | Quando com cStat = 100 (uso autorizado), nProt + " " + dhRecbto, de infProt, em protCTe |
| **Tipo do CT-e** | Tipo do CT-e | tpCTe, de ide |
| **Tipo do Serviço** | Tipo do Serviço | tpServ, de ide |
| **CFOP - Natureza da Operação** | Código Fiscal de Operações e Prestações - Natureza da Operação | CFOP - natOp, de ide |
| **Início da Prestação** | UF do início da prestação | UFIni -xMunIni, de ide |
| **Percurso do veículo** | UF do percurso do veículo | UFPer, de infPercurso |
| **Término da Prestação** | UF do término da prestação | UFFim -cMunFim – xMunFim, de ide |
| **Tomador/ Usuário do Serviço** | Tomador/Usuário do Serviço | xNome ou xFant, de toma |
| | CNPJ/CPF | CNPJ/ CPF, de toma |
| | Inscrição Estadual | IE, de toma |
| | Endereço | xLgr – nro -xCpl -xBairro, de enderToma |
| | Município | xMun, de enderToma |
| | UF | UF, de enderToma |
| | Fone | Fone, de toma |
| **Informações da Prestação do Serviço** | Descrição do Serviço prestado | xDescServ, de infServico |
| **Informações da quantidade do Serviço** | Quantidade | qCarga, de qCarga |
| **Componentes do valor da prestação de serviço** | Nome | xNome, de Comp |
| | Valor | vComp, de Comp |
| | Valor Total da Prestação do Serviço | vTPrest, de vPrest |
| | Valor a receber | vRec, de vPrest |
| **Informações relativas ao imposto** | Classificação Tributária do Serviço | <!-- p.26 -->CST, em ICMS |
| | Base de Cálculo | vBC, vBCSTRet ou vBCOutraUF, em ICMS |
| | Alíquota do ICMS | pICMS, pICMSSTRet ou pICMSOutraUF, em ICMS |
| | Valor do ICMS | vICMS, vICMSSTRet ou vICMSOutraUF, em ICMS, em ICMS |
| | % RED BC. CALC. | pRedBC ou pRedBCOutraUF, em ICMS |
| **Observações Gerais** | Observações Gerais | xObs, de compl |
| **Seguro da viagem** | Responsável | Caso respSeg , de seg seja: 4 -Emitente do CT-e; 5 -Tomador de Serviço. |
| | Nome da Seguradora | xSeg, de seg |
| | Número da Apólice | nApol, de seg |
| **INFORMAÇÕES ESPECÍFICAS DO MODAL RODOVIÁRIO** | Termo de Autorização de Fretamento – TAF | TAF, de rodoOS |
| | Número do Registro Estadual | NroRegEstadualm, de rodoOS |
| | Placa do veículo | placa, em veic |
| | RENAVAM do veículo | RENAVAM, em veic |
| | CPF | CPF, em prop |
| | CNPJ | CNPJ, de prop |
| | Termo de Autorização de Fretamento – TAF | TAF, de prop |
| | Número do Registro Estadual | NroRegEstadual, de prop |
| **Uso Exclusivo do Emissor de CT-e** | Uso Exclusivo do Emissor de CT-e | xTexto, em ObsCont |
| **Reservado ao Fisco** | Reservado ao Fisco | xTexto, em ObsFisco |
