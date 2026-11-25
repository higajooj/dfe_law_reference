<!-- p.20 -->

# 3. Correlação dos campos do XML do CT-e x DACTE

| Quadro do DACTE | Campo do DACTE | Tag XML, do CT e |
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
| **Modal** | Modal | Caso o modal, de ide, seja: 01: Rodoviário; 02: Aéreo; 03: Aquaviário; 04: Ferroviário; 05: Dutoviário; 06: Multimodal |
| **Modelo** | Modelo | mod, de ide |
| **Série** | Série | serie, de ide |
| **Número** | Número | nCT, de ide |
| **Data e hora de emissão** | Data e hora de emissão | dhEmi, de ide (HH.MM.SS) MOC 4.00 |
| **Inscrição SUFRAMA Destinatário** | Inscrição SUFRAMA Destinatário | ISUF, de dest |
| **Chave de acesso** | Chave de acesso | Id, de infCte, sem as 3 primeiras letras |
| **Protocolo de Autorização de Uso** | Protocolo de Autorização de Uso | Quando com cStat = 100 (uso autorizado), nProt + " " + dhRecbto, de infProt, em protCTe |
| **Tipo do CT-e** | Tipo do CT-e | tpCTe, de ide |
| **Tipo do Serviço** | Tipo do Serviço | tpServ, de ide |
| **Tomador do Serviço** | Tomador do Serviço | Se toma, de toma4 (CNPJ, CPF, IE, xNome, xFant, fone) Se tom, de toma3 informado pegar estes campos da pessoa referenciada |
| **CT-e Globalizado** | Indicador do CT-e Globalizado | indGlobalizado, de ide |
| | Inform. do CT-e Globalizado | xObs, de infGlobalizado |
| **CFOP - Natureza da Operação** | Código Fiscal de Operações e Prestações - Natureza da Operação | CFOP - natOp, de ide |
| **Início da Prestação** | Início da prestação | UFIni -xMunIni, de ide |
| **Término da Prestação** | Término da prestação | UFFim -cMunFim – xMunFim, de ide |
| **Remetente** | Remetente | xNome, de rem |
| | Endereço | xLgr -nro -xCpl -xBairro, de enderReme |
| | Município | xMun, de enderReme |
| | CEP | CEP, de enderReme |
| | CNPJ/CPF | CNPJ/CPF de rem |
| | Inscrição Estadual | IE , de rem |
| | UF | UF, de enderReme |
| | País | xPais, de enderReme |
| | Fone | fone, de rem |
| **Destinatário** | Destinatário | <!-- p.21 -->xNome, de dest |
| | Endereço | xLgr -nro -xCpl -xBairro, de enderDest |
| | Município | xMun, de enderDest |
| | CEP | CEP, de enderDest |
| | CNPJ/CPF | CNPJ/ CPF, de dest |
| | Inscrição Estadual | IE, de dest |
| | UF | UF, de enderDest |
| | País | xPais, de enderDest |
| | Fone | Fone, de dest |
| **Expedidor** | Expedidor | xNome, de exped |
| | Endereço | xLgr -nro -xCpl -xBairro, de enderExped |
| | Município | xMun, de enderExped |
| | CEP | CEP, de enderExped |
| | CNPJ/CPF | CNPJ/ CPF, de exped |
| | Inscrição Estadual | IE, de exped |
| | UF | UF, de enderExped |
| | País | xPais, de enderExped |
| | Fone | Fone, de exped |
| **Recebedor** | Recebedor | xNome, de receb |
| | Endereço | xLgr -nro -xCpl -xBairro, de enderReceb |
| | Município | xMun, de enderReceb |
| | CEP | CEP , de enderReceb |
| | CNPJ/CPF | CNPJ/ CPF,de receb |
| | Inscrição Estadual | IE ,de receb |
| | UF | UF , de enderReceb |
| | País | xPais, de enderReceb |
| | Fone | Fone, de receb |
| **Tomador do Serviço** | Tomador do Serviço | Se toma, de toma4 (CNPJ, CPF, IE, xNome ou xFant). Se toma, de toma3 informado pegar estes campos da pessoa referenciada |
| | Endereço | Se existir toma4, xLgr – nro -xCpl -xBairro, de enderToma, ou dos campos da pessoa referenciada |
| | Município | XMun, de enderToma, ou dos campos da pessoa referenciada |
| | CEP | CEP, de enderToma |
| | CNPJ/CPF | CNPJ/ CPF, de toma4, ou dos campos da pessoa referenciada |
| | Inscrição Estadual | IE, de toma4, ou dos campos da pessoa referenciada |
| | UF | UF, de enderToma |
| | País | xPais, de toma4 ou dos campos da pessoa referenciada |
| | Fone | <!-- p.22 -->Fone, de Toma4 ou dos campos da pessoa referenciada |
| **Produto Predominante** | Produto Predominante | proPred, de infCarga |
| **Outras características da carga** | Outras características da carga | xOutCat, de infCarga |
| **Valor total da carga** | Valor total da carga | vCarga, em infCarga |
| **Peso Bruto (KG)** | Peso Bruto (KG) | qCarga x fator de conversão para KG, quando Peso Bruto, onde o fator = 1, para cUnid=01, fator = 1000, para cUnid=02 |
| **Peso Base Cálculo (Kg)** | Peso Base Cálculo (Kg) | qCarga x fator de conversão para KG, quando Peso Base de Cálculo, onde o fator = 1, para cUnid=01, fator = 1000, para cUnid=02 |
| **Peso Aferido (Kg)** | Peso Aferido (Kg) | qCarga x fator de conversão para KG, quando for peso auferido, onde o fator = 1, para cUnid=01, fator = 1000, para cUnid=02 |
| **Cubagem (m3)** | Cubagem (m3) | qCarga, quando cUnid = 00 |
| **Quantidade de Volumes (und)** | Quantidade de Volumes (und) | qCarga |
| **Componentes do valor da prestação de serviço** | Nome | xNome, de Comp |
| | Valor | vComp, de Comp |
| | Valor Total da Prestação do Serviço | vTPrest, de vPrest |
| | Valor a receber | vRec, de vPrest |
| **Informações relativas ao imposto** | Classificação Tributária do Serviço | CST, em ICMS |
| | Base de Cálculo | vBC, vBCSTRet ou vBCOutraUF, em ICMS |
| | Alíquota do ICMS | pICMS, pICMSSTRet ou pICMSOutraUF, em ICMS |
| | Valor do ICMS | vICMS, vICMSSTRet ou vICMSOutraUF, em ICMS |
| | % RED BC. CALC. | pRedBC ou pRedBCOutraUF, em ICMS |
| **Documentos Originários** | Tp Doc. | mod, de infNF |
| | CNPJ/CPF Emitente | CNPJ/ CPF, em rem |
| | Série/N° Documento | serie, em infNF |
| **Previsão do fluxo da carga** | Sigla ou código interno da Filial/Porto/Estação/Aeroporto de Origem | xOrig, em fluxo |
| | Sigla ou código interno da Filial/Porto/Estação/Aeroporto de Passagem | xPass, em pass |
| | Sigla ou código interno da Filial/Porto/Estação/Aeroporto de Destino | <!-- p.23 -->xDest, em fluxo |
| **Observações Gerais** | Observações Gerais | xObs, de compl |
| **INFORMAÇÕES ESPECÍFICAS DO MODAL RODOVIÁRIO** | RNTRC da Empresa | RNTRC, em rodo |
| **INFORMAÇÕES ESPECÍFICAS DO MODAL AÉREO** | Número Operacional do Conhecimento Aéreo | nOCA, em aereo |
| | Classe | CL, em Tarifa |
| | Código da Tarifa | cTar, em Tarifa |
| | Valor da Tarifa | vTar, em Tarifa |
| | Número da Minuta | nMinu, em aereo |
| | Retira( SIM NÃO ) | retira, em ide |
| | Dados Relativos a Retirada da Carga | xDetRetira, em ide |
| | Característica Adicional do Serviço | xCaracSer |
| | Data Prevista de Entrega | dPrevAereo, de aéreo |
| **Natureza da carga (AÉREO)** | Dimensão | xDime, de natCarga |
| | Informações do Manuseio | cInfManu, de natCarga |
| **INFORMAÇÕES ESPECÍFICAS DO MODAL AQUAVIÁRIO** | Identificação do Navio/Rebocador | xNavio, em aquav |
| | VLR. DO AFRMM | vAFRMM, em aquav |
| | Identificação da Balsa | xBalsa, em Balsa |
| | Lacre | nLacre, em detCont |
| | Identificação do Container | nCont, em detCont |
| **INFORMAÇÕES ESPECÍFICAS DO MODAL FERROVIÁRIO** | Tipo de tráfego | tpTraf, em ferrov |
| | Fluxo Ferroviário | fluxo, em ferrov |
| | Ferrovia Responsável pelo Faturamento | Preencher com: 1-Ferrovia de origem se respFat = 1 ou 2Ferrovia de destino se respFat = 2 |
| | Ferrovia Emitente do CT-e | ferrEmi, em trafMut |
| | Valor do Frete | vFrete, em ferrov |
| **INFORMAÇÕES DAS FERROVIAS ENVOLVIDAS** | CNPJ | <!-- p.24 -->CNPJ, em ferroEnv |
| | Inscrição Estadual | IE, em ferroEnv |
| | Cod. Interno | cInt, em ferroEnv |
| | Razão Social | xNome, em ferroEnv |
| **INFORMAÇÕES ESPECÍFICAS DO DUTOVIÁRIO** | Valor Unitário não ficou clara a expressão a ser utilizado no futuro para os campos do dutoviário | (A ser utilizado no futuro) |
| | Valor do Frete | (A ser utilizado no futuro) |
| | Outros | (A ser utilizado no futuro) |
| | Base de Cálculo | vBC |
| | Alíquota | pICMS |
| | Valor do Imposto | vICMS |
| | Valor Total do Frete | (A ser utilizado no futuro) |
| | Observações | xObs |
| | Emitente | CNPJ/ CPF, em rem |
| | Série | Serie, em infNF |
| | Número | Num, em infNF |
| **INFORMAÇÕES ESPECÍFICAS DO TRANSPORTE MULTIMODAL DE CARGAS** | Número do Certificado do Operador de Transporte Multimodal | COTM, em multimodal |
| | Indicador Negociável | indNegociavel, em multimodal |
| **Informações de Seguro do Multimodal** | Nome da Seguradora | xSeg, em infSeg |
| | CNPJ da seguradora | CNPJ, em infSeg |
| | Número da Apólice | nApol, em seg |
| | Número da Averbação | nAver, em seg |
| **Uso Exclusivo do Emissor de CT-e** | Uso Exclusivo do Emissor de CT-e | xTexto, em ObsCont |
| **Reservado ao Fisco** | Reservado ao Fisco | xTexto, em ObsFisco |

<!-- REVISAR p.24: na linha do DUTOVIÁRIO, a coluna Campo traz o texto "Valor Unitário não ficou clara a expressão a ser utilizado no futuro para os campos do dutoviário", que parece ser nota de edição do original; transcrito literalmente -->
