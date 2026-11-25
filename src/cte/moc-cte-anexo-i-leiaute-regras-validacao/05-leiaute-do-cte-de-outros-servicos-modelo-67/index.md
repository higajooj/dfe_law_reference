# 5. Leiaute do CTe de Outros Serviços (Modelo 67)

<!-- p.85 -->

Legendas coluna **Ele** (Elemento): A – Atributo, E – Elemento, G – Grupo, ES – Elemento da Sequência, CE – Choice Element (escolha entre elementos), CG – Choice Group (Escolha entre grupos).

Legendas coluna **Tipo**: N – Numérico, C – Caracteres, D – Data.

ERXX – Expressão Regular (ver tabela de expressões regulares).

DXX – Valores de Domínio (ver tabela de valores de domínio).

Ocorr: 0 - 1 (opcional sem repetição), 1 – 1 (obrigatório sem repetição), 0 – n (opcional com múltiplas ocorrências), 1 – n (obrigatório com múltiplas ocorrências).

As subseções deste capítulo estão em:

- [5.1. Leiaute do Modal Rodoviário OS](05-01-leiaute-do-modal-rodoviario-os.md)
- [5.2. Expressões Regulares e Valores de Domínio do Modelo 67](05-02-expressoes-regulares-e-valores-de-dominio-do-modelo-67.md)

Na coluna **Descrição/Observação**, os códigos da coluna de domínio e de expressão regular da fonte aparecem como *Dom.:* e *ER:*.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 1 | versao | A | 0 | C | 1 - 1 | | Versão do leiaute. *ER:* ER56. |
| 2 | **infCte** | **G** | **0** | | **1 - 1** | | **Informações do CTe Outros Serviços** |
| 3 | versao | A | 1 | C | 1 - 1 | | Versão do leiaute. *ER:* ER56. Ex: "4.00" |
| 4 | Id | A | 1 | C | 1 - 1 | 47 | Identificador da tag a ser assinada. *ER:* ER45. Informar a chave de acesso do CTe OS e precedida do literal "CTe" |
| 5 | **ide** | **G** | **1** | | **1 - 1** | | **Identificação do CTe Outros Serviços** |
| 6 | cUF | E | 2 | N | 1 - 1 | 2 | Código da UF do emitente do CTe. *Dom.:* D2. Utilizar a Tabela do IBGE. |
| 7 | cCT | E | 2 | C | 1 - 1 | 8 | Código numérico que compõe a Chave de Acesso. *ER:* ER41. Número aleatório gerado pelo emitente para cada CTe, com o objetivo de evitar acessos indevidos ao documento. |
| 8 | CFOP | E | 2 | C | 1 - 1 | 4 | Código Fiscal de Operações e Prestações. *ER:* ER51. |
| 9 | natOp | E | 2 | C | 1 - 1 | 1 - 60 | Natureza da Operação. *ER:* ER36. |
| 10 | mod | E | 2 | N | 1 - 1 | 2 | Modelo do documento fiscal. *Dom.:* D4. Utilizar o código 67 para identificação do CTe Outros Serviços, emitido em substituição a Nota Fiscal Modelo 7 para transporte de pessoas, valores e excesso de bagagem. |
| 11 | serie | E | 2 | C | 1 - 1 | 1 - 3 | Série do CTe OS. *ER:* ER34. Preencher com "0" no caso de série única |
| 12 | nCT | E | 2 | C | 1 - 1 | 1 - 9 | Número do CTe OS. *ER:* ER32. |
| 13 | dhEmi | E | 2 | C | 1 - 1 | 21 | Data e hora de emissão do CTe OS. *ER:* ER1. Formato AAAA-MM-DDTHH:MM:DD TZD |
| 14 | tpImp | E | 2 | N | 1 - 1 | 1 | Formato de impressão do DACTE OS. *Dom.:* D1. Preencher com:<br>1 - Retrato;<br>2 - Paisagem. |
| 15 | tpEmis | E | 2 | N | 1 - 1 | 1 | <!-- p.86 -->Forma de emissão do CTe. *Dom.:* D27. Preencher com:<br>1 - Normal;<br>5 - Contingência FSDA;<br>7 - Autorização pela SVC-RS;<br>8 - Autorização pela SVC-SP |
| 16 | cDV | E | 2 | C | 1 - 1 | 1 | Digito Verificador da chave de acesso do CTe. *ER:* ER42. Informar o dígito de controle da chave de acesso do CTe, que deve ser calculado com a aplicação do algoritmo módulo 11 (base 2,9) da chave de acesso. |
| 17 | tpAmb | E | 2 | N | 1 - 1 | 1 | Tipo do Ambiente. *Dom.:* D1. Preencher com:1 - Produção; 2 - Homologação |
| 18 | tpCTe | E | 2 | N | 1 - 1 | 1 | Tipo do CTe OS. *Dom.:* D39. Preencher com:<br>0 - CTe Normal;<br>1 - CTe Complementar;<br>3 - CTe de Substituição. |
| 19 | procEmi | E | 2 | N | 1 - 1 | 1 | Identificador do processo de emissão do CTe OS. *Dom.:* D43. Preencher com:<br>0 - emissão de CTe com aplicativo do contribuinte;<br>3- emissão CTe pelo contribuinte com aplicativo fornecido pelo Fisco. |
| 20 | verProc | E | 2 | C | 1 - 1 | 1 - 20 | Versão do processo de emissão. *ER:* ER36. Informar a versão do aplicativo emissor de CTe. |
| 21 | cMunEnv | E | 2 | C | 1 - 1 | 7 | Código do Município de envio do CTe (de onde o documento foi transmitido). *ER:* ER3. Utilizar a tabela do IBGE. Informar 9999999 para as operações com o exterior. |
| 22 | xMunEnv | E | 2 | C | 1 - 1 | 2 - 60 | Nome do Município de envio do CTe (de onde o documento foi transmitido). *ER:* ER36. Informar PAIS/Município para as operações com o exterior. |
| 23 | UFEnv | E | 2 | C | 1 - 1 | 2 | Sigla da UF de envio do CTe (de onde o documento foi transmitido). *Dom.:* D11. Informar 'EX' para operações com o exterior. |
| 24 | modal | E | 2 | N | 1 - 1 | 2 | Modal do CTe OS. *Dom.:* D41. Preencher com:<br>01-Rodoviário;<br>02- Aéreo;<br>03 - Aquaviário;<br>04 - Ferroviário. |
| 25 | tpServ | E | 2 | N | 1 - 1 | 1 | Tipo do Serviço. *Dom.:* D28. Preencher com:<br>6 - Transporte de Pessoas;<br>7 - Transporte de Valores;<br>8 - Excesso de Bagagem. |
| 26 | indIEToma | E | 2 | N | 1 - 1 | 1 | Indicador da IE do tomador:<br>1 – Contribuinte ICMS;<br><!-- p.87 -->2 – Contribuinte isento de inscrição;<br>9 – Não Contribuinte. *Dom.:* D17. Aplica-se ao tomador que for indicado no toma3 ou toma4 |
| 27 | cMunIni | E | 2 | C | 0 - 1 | 7 | Código do Município de início da prestação. *ER:* ER3. Utilizar a tabela do IBGE. Informar 9999999 para operações com o exterior. |
| 28 | xMunIni | E | 2 | C | 0 - 1 | 2 - 60 | Nome do Município do início da prestação. *ER:* ER36. Informar 'EXTERIOR' para operações com o exterior. |
| 29 | UFIni | E | 2 | C | 0 - 1 | 2 | UF do início da prestação. *Dom.:* D11. Informar 'EX' para operações com o exterior. |
| 30 | cMunFim | E | 2 | C | 0 - 1 | 7 | Código do Município de término da prestação. *ER:* ER3. Utilizar a tabela do IBGE. Informar 9999999 para operações com o exterior. |
| 31 | xMunFim | E | 2 | C | 0 - 1 | 2 - 60 | Nome do Município do término da prestação. *ER:* ER36. Informar 'EXTERIOR' para operações com o exterior. |
| 32 | UFFim | E | 2 | C | 0 - 1 | 2 | UF do término da prestação. *Dom.:* D11. Informar 'EX' para operações com o exterior. |
| 33 | **infPercurso** | **G** | **2** | | **0 - 25** | | **Informações do Percurso do CTe Outros Serviços** |
| 34 | UFPer | E | 3 | C | 1 - 1 | 2 | Sigla das Unidades da Federação do percurso do veículo. *Dom.:* D11. Não é necessário repetir as UF de Início e Fim |
| # | --- x --- | - | 2 | - | 0 - 1 | | Sequência XML |
| 36 | dhCont | ES | 2 | C | 1 - 1 | 21 | Data e Hora da entrada em contingência. *ER:* ER1. Informar a data e hora no formato AAAA-MM-DDTHH:MM:SS |
| 37 | xJust | ES | 2 | C | 1 - 1 | 15 - 256 | Justificativa da entrada em contingência. *ER:* ER36. |
| 38 | **compl** | **G** | **1** | | **0 - 1** | | **Dados complementares do CTe para fins operacionais ou comerciais** |
| 39 | xCaracAd | E | 2 | C | 0 - 1 | 1 - 15 | Característica adicional do transporte. *ER:* ER36. Texto livre:<br>REENTREGA; DEVOLUÇÃO; REFATURAMENTO; etc |
| 40 | xCaracSer | E | 2 | C | 0 - 1 | 1 - 30 | Característica adicional do serviço. *ER:* ER36. Texto livre:<br>ENTREGA EXPRESSA; LOGÍSTICA REVERSA; CONVENCIONAL; EMERGENCIAL; etc |
| 41 | xEmi | E | 2 | C | 0 - 1 | 1 - 20 | Funcionário emissor do CTe. *ER:* ER36. |
| 42 | xObs | E | 2 | C | 0 - 1 | 1 - 2000 | Observações Gerais. *ER:* ER36. |
| 43 | **ObsCont** | **G** | **2** | | **0 - 10** | | **Campo de uso livre do contribuinte. Informar o nome do campo no atributo xCampo e o conteúdo do campo no XTexto** |
| 44 | xCampo | A | 3 | C | 1 - 1 | 1 - 20 | Identificação do campo. *ER:* ER36. |
| 45 | xTexto | E | 3 | C | 1 - 1 | 1 - 160 | Conteúdo do campo. *ER:* ER36. |
| 46 | **ObsFisco** | **G** | **2** | | **0 - 10** | | <!-- p.88 -->**Campo de uso livre do contribuinte. Informar o nome do campo no atributo xCampo e o conteúdo do campo no XTexto** |
| 47 | xCampo | A | 3 | C | 1 - 1 | 1 - 20 | Identificação do campo. *ER:* ER36. |
| 48 | xTexto | E | 3 | C | 1 - 1 | 1 - 60 | Conteúdo do campo. *ER:* ER36. |
| 49 | **emit** | **G** | **1** | | **1 - 1** | | **Identificação do Emitente do CTe OS** |
| 50 | CNPJ | E | 2 | C | 1 - 1 | 14 | CNPJ do emitente. *ER:* ER5. Informar zeros não significativos |
| 51 | IE | E | 2 | C | 1 - 1 | 14 | Inscrição Estadual do Emitente. *ER:* ER29. |
| 52 | IEST | E | 2 | C | 0 - 1 | 14 | Inscrição Estadual do Substituto Tributário. *ER:* ER29. |
| 53 | xNome | E | 2 | C | 1 - 1 | 2 - 60 | Razão social ou Nome do emitente. *ER:* ER36. |
| 54 | xFant | E | 2 | C | 0 - 1 | 2 - 60 | Nome fantasia. *ER:* ER36. |
| 55 | **enderEmit** | **G** | **2** | | **1 - 1** | | **Endereço do emitente** |
| 56 | xLgr | E | 3 | C | 1 - 1 | 2 - 60 | Logradouro. *ER:* ER36. |
| 57 | nro | E | 3 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 58 | xCpl | E | 3 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 59 | xBairro | E | 3 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 60 | cMun | E | 3 | C | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE). *ER:* ER3. |
| 61 | xMun | E | 3 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. |
| 62 | CEP | E | 3 | C | 0 - 1 | 8 | CEP. *ER:* ER41. Informar zeros não significativos |
| 63 | UF | E | 3 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D12. |
| 64 | fone | E | 3 | C | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 65 | CRT | E | 2 | N | 1 - 1 | 1 | Código do Regime Tributário. *Dom.:* D24. Informar:<br>1 - Simples Nacional;<br>2 - Simples Nacional, excesso sublimite de receita bruta;<br>3 - Regime Normal;<br>4=Simples Nacional - Microempreendedor Individual – MEI. |
| 66 | **toma** | **G** | **1** | | **0 - 1** | | **Informações do Tomador/Usuário do Serviço. Opcional para Excesso de Bagagem** |
| 67 | CNPJ | CE | 2 | C | 1 - 1 | 14 | Número do CNPJ. *ER:* ER8. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros. Informar os zeros não significativos. |
| 68 | CPF | CE | 2 | C | 1 - 1 | 11 | Número do CPF. *ER:* ER9. Informar os zeros não significativos. |
| 69 | IE | E | 2 | C | 0 - 1 | 14 | Inscrição Estadual. *ER:* ER30. Informar a IE do tomador ou ISENTO se tomador é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o tomador não seja <!-- p.89 -->contribuinte do ICMS não informar o conteúdo. |
| 70 | xNome | E | 2 | C | 1 - 1 | 2 - 60 | Razão social ou nome do tomador. *ER:* ER36. |
| 71 | xFant | E | 2 | C | 0 - 1 | 2 - 60 | Nome fantasia. *ER:* ER36. |
| 72 | fone | E | 2 | C | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 73 | **enderToma** | **G** | **2** | | **1 - 1** | | **Dados do endereço** |
| 74 | xLgr | E | 3 | C | 1 - 1 | 2 - 255 | Logradouro. *ER:* ER36. |
| 75 | nro | E | 3 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 76 | xCpl | E | 3 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 77 | xBairro | E | 3 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 78 | cMun | E | 3 | C | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE). *ER:* ER3. Informar 9999999 para operações com o exterior. |
| 79 | xMun | E | 3 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. Informar EXTERIOR para operações com o exterior. |
| 80 | CEP | E | 3 | C | 0 - 1 | 8 | CEP. *ER:* ER41. Informar os zeros não significativos |
| 81 | UF | E | 3 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D11. Informar EX para operações com o exterior. |
| 82 | cPais | E | 3 | C | 0 - 1 | 1 - 4 | Código do país. *ER:* ER31. Utilizar a tabela do BACEN |
| 83 | xPais | E | 3 | C | 0 - 1 | 2 - 60 | Nome do país. *ER:* ER36. |
| 84 | email | E | 2 | C | 0 - 1 | 1 - 60 | Endereço de email. *ER:* ER52. |
| 85 | **vPrest** | **G** | **1** | | **1 - 1** | | **Valores da Prestação de Serviço** |
| 86 | vTPrest | E | 2 | C | 1 - 1 | 13, 2 | Valor Total da Prestação do Serviço. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais.<br>Pode conter zeros quando o CTe for de complemento de ICMS |
| 87 | vRec | E | 2 | C | 1 - 1 | 13, 2 | Valor a Receber. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 88 | **Comp** | **G** | **2** | | **0 - n** | | **Componentes do Valor da Prestação** |
| 89 | xNome | E | 3 | C | 1 - 1 | 1 - 15 | Nome do componente. *ER:* ER36. Exemplos: FRETE PESO, FRETE VALOR, SEC/CAT, ADEME, AGENDAMENTO, etc |
| 90 | vComp | E | 3 | C | 1 - 1 | 13, 2 | Valor do componente. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 91 | **imp** | **G** | **1** | | **1 - 1** | | **Informações relativas aos Impostos** |
| 92 | **ICMS** | **G** | **2** | | **1 - 1** | | **Informações relativas ao ICMS** |
| 93 | **ICMS00** | **CG** | **3** | | **1 - 1** | | **Prestação sujeito à tributação normal do ICMS** |
| 94 | CST | E | 4 | N | 1 - 1 | 2 | classificação Tributária do Serviço. *Dom.:* D31. 00 - Tributação normal ICMS |
| 95 | vBC | E | 4 | C | 1 - 1 | 13, 2 | <!-- p.90 -->Valor da BC do ICMS. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 96 | pICMS | E | 4 | C | 1 - 1 | 3, 2 | Alíquota do ICMS. *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 97 | vICMS | E | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 98 | **ICMS20** | **CG** | **3** | | **1 - 1** | | **Prestação sujeito à tributação com redução de BC do ICMS** |
| 99 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do serviço. *Dom.:* D32. 20 - Tributação com BC reduzida do ICMS |
| 100 | pRedBC | E | 4 | C | 1 - 1 | 3, 2 | Percentual de redução da BC. *ER:* ER15. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 101 | vBC | E | 4 | C | 1 - 1 | 13, 2 | Valor da BC do ICMS. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 102 | pICMS | E | 4 | C | 1 - 1 | 3, 2 | Alíquota do ICMS. *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 103 | vICMS | E | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 104 | **ICMS45** | **CG** | **3** | | **1 - 1** | | **ICMS Isento, não Tributado ou diferido** |
| 105 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do Serviço. *Dom.:* D33. Preencher com:<br>40 - ICMS isenção;<br>41 - ICMS não tributada;<br>51 - ICMS diferido |
| 106 | **ICMS90** | **CG** | **3** | | **1 - 1** | | **ICMS Outros** |
| 107 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do Serviço. *Dom.:* D35. 90 - Outros |
| 108 | pRedBC | E | 4 | C | 0 - 1 | 3, 2 | Percentual de redução da BC. *ER:* ER15. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 109 | vBC | E | 4 | C | 1 - 1 | 13, 2 | Valor da BC do ICMS. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 110 | pICMS | E | 4 | C | 1 - 1 | 3, 2 | Alíquota do ICMS. *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 111 | vICMS | E | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 112 | vCred | E | 4 | C | 0 - 1 | 13, 2 | Valor do Crédito Outorgado/Presumido. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 113 | **ICMSOutraUF** | **CG** | **3** | | **1 - 1** | | **ICMS devido à UF de origem da prestação, quando diferente da UF do emitente** |
| 114 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do Serviço. *Dom.:* D35. 90 - ICMS Outra UF |
| 115 | pRedBCOutraUF | E | 4 | C | 0 - 1 | 3, 2 | Percentual de redução da BC. *ER:* ER15. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 116 | vBCOutraUF | E | 4 | C | 1 - 1 | 13, 2 | <!-- p.91 -->Valor da BC do ICMS. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 117 | pICMSOutraUF | E | 4 | C | 1 - 1 | 3, 2 | Alíquota do ICMS. *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 118 | vICMSOutraUF | E | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS devido outra UF. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 119 | **ICMSSN** | **CG** | **3** | | **1 - 1** | | **Simples Nacional** |
| 120 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do Serviço. *Dom.:* D35. 90 - ICMS Simples Nacional |
| 121 | indSN | E | 4 | N | 1 - 1 | 1 | Indica se o contribuinte é Simples Nacional 1=Sim. *Dom.:* D20. |
| 122 | vTotTrib | E | 2 | C | 0 - 1 | 13, 2 | Valor Total dos Tributos. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 123 | infAdFisco | E | 2 | C | 0 - 1 | 1 - 2000 | Informações adicionais de interesse do Fisco. *ER:* ER36. Norma referenciada, informações complementares etc. |
| 124 | **ICMSUFFim** | **G** | **2** | | **0 - 1** | | **Informações do ICMS de partilha com a UF de término do serviço de transporte na operação interestadual. Grupo a ser informado nas prestações interestaduais para consumidor final, não contribuinte do ICMS** |
| 125 | vBCUFFim | E | 3 | C | 1 - 1 | 13, 2 | Valor da BC do ICMS na UF de término da prestação do serviço de transporte. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 126 | pFCPUFFim | E | 3 | C | 1 - 1 | 3, 2 | Percentual do ICMS relativo ao Fundo de Combate à pobreza (FCP) na UF de término da prestação do serviço de transporte. *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais.<br>Alíquota adotada nas operações internas na UF do destinatário |
| 127 | pICMSUFFim | E | 3 | C | 1 - 1 | 3, 2 | Alíquota interna da UF de término da prestação do serviço de transporte. *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais.<br>Alíquota adotada nas operações internas na UF do destinatário |
| 128 | pICMSInter | E | 3 | C | 1 - 1 | 3, 2 | Alíquota interestadual das UF envolvidas. *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais.<br>Alíquota interestadual das UF envolvidas |
| 129 | vFCPUFFim | E | 3 | C | 1 - 1 | 13, 2 | Valor do ICMS relativo ao Fundo de Combate á Pobreza (FCP) da UF de término da prestação. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 130 | vICMSUFFim | E | 3 | C | 1 - 1 | 13, 2 | Valor do ICMS de partilha para a UF de término da prestação do serviço de transporte. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 131 | vICMSUFIni | E | 3 | C | 1 - 1 | 13, 2 | Valor do ICMS de partilha para a UF de início da prestação do serviço de transporte. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 132 | **infTribFed** | **G** | **2** | | **0 - 1** | | <!-- p.92 -->**Informações dos tributos federais. Grupo a ser informado nas prestações interestaduais para consumidor final, não contribuinte do ICMS** |
| 133 | vPIS | E | 3 | C | 0 - 1 | 13, 2 | Valor do PIS. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 134 | vCOFINS | E | 3 | C | 0 - 1 | 13, 2 | Valor COFINS. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 135 | vIR | E | 3 | C | 0 - 1 | 13, 2 | Valor de Imposto de Renda. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 136 | vINSS | E | 3 | C | 0 - 1 | 13, 2 | Valor do INSS. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 137 | vCSLL | E | 3 | C | 0 - 1 | 13, 2 | Valor do CSLL. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 138 | **infCTeNorm** | **CG** | **1** | | **1 - 1** | | **Grupo de informações do CTe OS Normal** |
| 139 | **infServico** | **G** | **2** | | **1 - 1** | | **Informações da Prestação do Serviço** |
| 140 | xDescServ | E | 3 | C | 1 - 1 | 1 - 30 | Descrição do Serviço prestado. *ER:* ER36. |
| 141 | **infQ** | **G** | **3** | | **0 - 1** | | **Informações de quantidades da Carga do CTe. Para Transporte de Pessoas indicar número de passageiros, para excesso de bagagem e transporte de valores indicar número de Volumes/Malotes** |
| 142 | qCarga | E | 4 | C | 1 - 1 | 11, 4 | Quantidade. *ER:* ER21. 15 posições, sendo 11 inteiras e 4 casas decimais. |
| 143 | **infDocRef** | **G** | **2** | | **0 - n** | | **Informações dos documentos referenciados** |
| 144 | nDoc | E | 3 | C | 1 - 1 | 1 - 20 | Número. *ER:* ER36. |
| 145 | serie | E | 3 | C | 0 - 1 | 1 - 3 | Série. *ER:* ER36. |
| 146 | subserie | E | 3 | C | 0 - 1 | 1 - 3 | Subsérie. *ER:* ER36. |
| 147 | dEmi | E | 3 | D | 1 - 1 | 10 | Data de Emissão. *ER:* ER11. Formato AAAA-MM-DD |
| 148 | vDoc | E | 3 | C | 0 - 1 | 13, 2 | Valor Transportado. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 149 | chBPe | CE | 3 | C | 1 - 1 | 44 | Chave de acesso do BP-e que possui eventos excesso de bagagem. *ER:* ER4. |
| 150 | **seg** | **G** | **2** | | **0 - n** | | **Informações de Seguro da Carga** |
| 151 | respSeg | E | 3 | N | 1 - 1 | 1 - 1 | Responsável pelo seguro. *Dom.:* D29. Preencher com:<br>4 - Emitente do CTe;<br>5 - Tomador de Serviço. |
| 152 | xSeg | E | 3 | C | 0 - 1 | 1 - 30 | Nome da Seguradora. *ER:* ER36. |
| 153 | nApol | E | 3 | C | 0 - 1 | 1 - 20 | Número da Apólice. *ER:* ER36. Obrigatório pela lei 11.442/07 (RCTRC) |
| 154 | **infModal** | **G** | **2** | | **0 - 1** | | <!-- p.93 -->**Informações do modal<br>Obrigatório para Pessoas e Bagagem** |
| 155 | versaoModal | A | 3 | C | 1 - 1 | 4 | Versão do leiaute específico para o Modal. *ER:* ER48. |
| 156 | xs:any | E | 3 | C | 1 - 1 | | XML do modal<br>Insira neste local o XML específico do modal. O elemento do tipo -any- permite estender o documento XML com elementos não especificados pelo schema. Insira neste local - any- o XML específico do modal (rodoviário). A especificação do schema XML para cada modal pode ser encontrada nos arquivos que acompanham este pacote de liberação: Rodoviário - ver arquivo CTeModalRodoviarioOS_v9.99<br><br>Onde v9.99 é a a designação genérica para a versão do arquivo. Por exemplo, o arquivo para o schema do modal Rodoviário na versão 4.00 será denominado "CTeModalRodoviarioOS_v4.00". |
| 157 | **infCteSub** | **G** | **2** | | **0 - 1** | | **Informações do CTe de substituição** |
| 158 | chCte | E | 3 | C | 1 - 1 | 44 | Chave de acesso do CTe a ser substituído (original). *ER:* ER4. |
| 159 | refCTeCanc | E | 2 | C | 0 - 1 | 44 | Chave de acesso do CTe Cancelado<br>Somente para Transporte de Valores. *ER:* ER4. |
| 160 | **cobr** | **G** | **2** | | **0 - 1** | | **Dados da cobrança do CTe** |
| 161 | **fat** | **G** | **3** | | **0 - 1** | | **Dados da fatura** |
| 162 | nFat | E | 4 | C | 0 - 1 | 1 - 60 | Número da fatura. *ER:* ER36. |
| 163 | vOrig | E | 4 | C | 0 - 1 | 13, 2 | Valor original da fatura. *ER:* ER28. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 164 | vDesc | E | 4 | C | 0 - 1 | 13, 2 | Valor do desconto da fatura. *ER:* ER28. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 165 | vLiq | E | 4 | C | 0 - 1 | 13, 2 | Valor líquido da fatura. *ER:* ER28. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 166 | **dup** | **G** | **3** | | **0 - n** | | **Dados das duplicatas** |
| 167 | nDup | E | 4 | C | 0 - 1 | 1 - 60 | Número da duplicata. *ER:* ER36. |
| 168 | dVenc | E | 4 | D | 0 - 1 | 10 | Data de vencimento da duplicata (AAAA-MM-DD). *ER:* ER11. |
| 169 | vDup | E | 4 | C | 0 - 1 | 13, 2 | Valor da duplicata. *ER:* ER28. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 170 | **infGTVe** | **G** | **2** | | **0 - n** | | <!-- p.94 -->**Informações das GTVe relacionadas ao CTe OS** |
| 171 | chCTe | E | 3 | C | 1 - 1 | 44 | Chave de acesso da GTVe. *ER:* ER4. |
| 172 | **Comp** | **G** | **3** | | **1 - n** | | **Componentes do Valor da GTVe** |
| 173 | tpComp | E | 4 | N | 1 - 1 | 1 | Tipo do Componente. *Dom.:* D30. 1-Custodia<br>2-Embarque<br>3-Tempo de espera<br>4-Malote<br>5-Ad Valorem<br>6-Outros |
| 174 | vComp | E | 4 | C | 1 - 1 | 13, 2 | Valor do componente. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 175 | xComp | E | 4 | C | 0 - 1 | 0 - 15 | Nome do componente (informar apenas para outros). *ER:* ER36. Exemplos: FRETE PESO, FRETE VALOR, SEC/CAT, ADEME, AGENDAMENTO, etc |
| 176 | **infCteComp** | **CG** | **1** | | **1 - 10** | | **Detalhamento do CTe complementado** |
| 177 | chCTe | E | 2 | C | 1 - 1 | 44 | Chave do CTe complementado. *ER:* ER4. |
| 178 | **autXML** | **G** | **1** | | **0 - 10** | | **Autorizados para download do XML do DF-e. Informar CNPJ ou CPF. Preencher os zeros não significativos.** |
| 179 | CNPJ | CE | 2 | C | 1 - 1 | 14 | CNPJ do autorizado. *ER:* ER5. Informar zeros não significativos. |
| 180 | CPF | CE | 2 | C | 1 - 1 | 11 | CPF do autorizado. *ER:* ER9. Informar zeros não significativos. |
| 181 | **infRespTec** | **G** | **1** | | **0 - 1** | | **Informações do Responsável Técnico pela emissão do DF-e** |
| 182 | CNPJ | E | 2 | C | 1 - 1 | 14 | CNPJ da pessoa jurídica responsável técnica pelo sistema utilizado na emissão do documento fiscal eletrônico. *ER:* ER5. Informar o CNPJ da pessoa jurídica desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. |
| 183 | xContato | E | 2 | C | 1 - 1 | 2 - 60 | Nome da pessoa a ser contatada. *ER:* ER36. Informar o nome da pessoa a ser contatada na empresa desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. No caso de pessoa física, informar o respectivo nome. |
| 184 | email | E | 2 | C | 1 - 1 | 1 - 60 | Email da pessoa jurídica a ser contatada. *ER:* ER52. |
| 185 | fone | E | 2 | C | 1 - 1 | 7 - 12 | Telefone da pessoa jurídica a ser contatada. *ER:* ER50. Preencher com o Código DDD + número do telefone. |
| # | --- x --- | - | 0 | - | 0 - 1 | | Sequência XML |
| 187 | idCSRT | ES | 2 | C | 1 - 1 | 3 | Identificador do código de segurança do responsável técnico. *ER:* ER35. Identificador do CSRT utilizado para geração do hash |
| 188 | hashCSRT | ES | 2 | C | 1 - 1 | 20 | Hash do token do código de segurança do responsável técnico. O hashCSRT é o resultado das funções SHA-1 e base64 do token CSRT fornecido pelo fisco + chave de acesso do DF-e.<!-- p.95 --> (Implementação em futura NT)<br><br>Observação: 28 caracteres são representados no schema como 20 bytes do tipo base64Binary |
| 189 | **infCTeSupl** | **G** | **0** | | **0 - 1** | | **Informações suplementares do CTe** |
| 190 | qrCodCTe | E | 1 | C | 1 - 1 | 50 - 1000 | Texto com o QR-Code impresso no DACTE. *ER:* ER70. |
| 191 | | E | 0 | C | 1 - 1 | | ds:Signature |
