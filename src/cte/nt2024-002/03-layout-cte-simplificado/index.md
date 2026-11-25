<!-- p.21 -->

# 3 Layout CTe Simplificado

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **1** | **infCte** | **G** | **0** |  | **1 - 1** |  | **Informações do CT-e** |
| 2 | versao | A | 1 | C | 1 - 1 |  | Versão do leiaute *ER:* ER57. Ex: "4.00" |
| 3 | Id | A | 1 | C | 1 - 1 | 47 | Identificador da tag a ser assinada *ER:* ER45. Informar a chave de acesso do CT-e e precedida do literal "CTe" |
| **4** | **ide** | **G** | **1** |  | **1 - 1** |  | **Identificação do CT-e** |
| 5 | cUF | E | 2 | N | 1 - 1 | 2 | Código da UF do emitente do CT-e. *Dom.:* D2. Utilizar a Tabela do IBGE. |
| 6 | cCT | E | 2 | C | 1 - 1 | 8 | Código numérico que compõe a Chave de Acesso. *ER:* ER41. Número aleatório gerado pelo emitente para cada CT-e, com o objetivo de evitar acessos indevidos ao documento. |
| 7 | CFOP | E | 2 | C | 1 - 1 | 4 | Código Fiscal de Operações e Prestações *ER:* ER52. |
| 8 | natOp | E | 2 | C | 1 - 1 | 1 - 60 | Natureza da Operação *ER:* ER36. |
| 9 | mod | E | 2 | N | 1 - 1 | 2 | Modelo do documento fiscal *Dom.:* D7. Utilizar o código 57 para identificação do CT-e, emitido em substituição aos modelos de conhecimentos em papel. |
| 10 | serie | E | 2 | C | 1 - 1 | 1 - 3 | Série do CT-e *ER:* ER34. Preencher com "0" no caso de série única |
| 11 | nCT | E | 2 | C | 1 - 1 | 1 - 9 | Número do CT-e *ER:* ER32. |
| 12 | dhEmi | E | 2 | C | 1 - 1 | 21 | Data e hora de emissão do CT-e *ER:* ER1. Formato AAAA-MM-DDTHH:MM:DD TZD |
| 13 | tpImp | E | 2 | N | 1 - 1 | 1 | Formato de impressão do DACTE *Dom.:* D1. Preencher com: 1 - Retrato; 2 - Paisagem. |
| 14 | tpEmis | E | 2 | N | 1 - 1 | 1 | Forma de emissão do CT-e *Dom.:* D19. Preencher com:<br>1 - Normal;<br>3 - Regime Especial NFF;<br>4 - EPEC pela SVC;<br>7 - Autorização pela SVC-RS;<br>8 - Autorização pela SVC-SP |
| 15 | cDV | E | 2 | C | 1 - 1 | 1 | Digito Verificador da chave de acesso do CT-e *ER:* ER42. Informar o dígito de controle da chave de acesso do CT-e, que deve ser calculado com a aplicação do algoritmo módulo 11 (base 2,9) da chave de acesso. |
| 16 | tpAmb | E | 2 | N | 1 - 1 | 1 | Tipo do Ambiente *Dom.:* D1. Preencher com:1 - Produção; 2 - Homologação. |
| 17 | tpCTe | E | 2 | N | 1 - 1 | 1 | Tipo do CTe simplificado *Dom.:* D31. Preencher com:<br>5 - CTe Simplificado<br>6 - Substituição CTe Simplificado |
| 18 | procEmi | E | 2 | N | 1 - 1 | 1 | Identificador do processo de emissão do CT-e *Dom.:* D45. Preencher com:<br>0 - emissão de CT-e com aplicativo do contribuinte;<br>3- emissão CT-e pelo contribuinte com aplicativo fornecido pelo SEBRAE. |
| 19 | verProc | E | 2 | C | 1 - 1 | 1 - 20 | <!-- p.22 -->Versão do processo de emissão *ER:* ER36. Informar a versão do aplicativo emissor de CT-e. |
| 20 | cMunEnv | E | 2 | C | 1 - 1 | 7 | Código do Município de envio do CT-e (de onde o documento foi transmitido) *ER:* ER3. Utilizar a tabela do IBGE. Informar 9999999 para as operações com o exterior. |
| 21 | xMunEnv | E | 2 | C | 1 - 1 | 2 - 60 | Nome do Município de envio do CT-e (de onde o documento foi transmitido) *ER:* ER36. Informar País/Município para as operações com o exterior. |
| 22 | UFEnv | E | 2 | C | 1 - 1 | 2 | Sigla da UF de envio do CT-e (de onde o documento foi transmitido) *Dom.:* D11. Informar 'EX' para operações com o exterior. |
| 23 | modal | E | 2 | N | 1 - 1 | 2 | Modal *Dom.:* D44. Preencher com:<br>01-Rodoviário<br>02 -Aéreo<br>03-Aquaviário |
| 24 | tpServ | E | 2 | N | 1 - 1 | 1 | Tipo do Serviço *Dom.:* D20. Preencher com:<br>0 - Normal;<br>1 - Subcontratação;<br>2 - Redespacho; |
| 25 | UFIni | E | 2 | C | 1 - 1 | 2 | UF do início da prestação *Dom.:* D11. Informar 'EX' para operações com o exterior. |
| 26 | UFFim | E | 2 | C | 1 - 1 | 2 | UF do término da prestação *Dom.:* D11. Informar 'EX' para operações com o exterior. |
| 27 | retira | E | 2 | N | 1 - 1 | 1 | Indicador se o Recebedor retira no Aeroporto, Filial, Porto ou Estação de Destino? *Dom.:* D18. Preencher com: 0 - sim; 1 - não |
| 28 | xDetRetira | E | 2 | C | 0 - 1 | 1 - 160 | Detalhes do retira *ER:* ER36. |
| # | --- x --- | - | 2 | - | 0 - 1 |  | Sequência XML |
| 30 | dhCont | ES | 2 | C | 1 - 1 | 21 | Data e Hora da entrada em contingência *ER:* ER1. Informar a data e hora no formato AAAA-MM-DDTHH:MM:SS |
| 31 | xJust | ES | 2 | C | 1 - 1 | 15 - 256 | Justificativa da entrada em contingência *ER:* ER36. |
| **32** | **compl** | **G** | **1** |  | **0 - 1** |  | **Dados complementares do CT-e e para fins operacionais ou comerciais** |
| 33 | xCaracAd | E | 2 | C | 0 - 1 | 1 - 15 | Característica adicional do transporte *ER:* ER36. Texto livre:<br>REENTREGA; DEVOLUÇÃO; REFATURAMENTO; etc |
| 34 | xCaracSer | E | 2 | C | 0 - 1 | 1 - 30 | Característica adicional do serviço *ER:* ER36. Texto livre:<br>ENTREGA EXPRESSA; LOGÍSTICA REVERSA;<br>CONVENCIONAL; EMERGENCIAL; etc |
| **35** | **fluxo** | **G** | **2** |  | **0 - 1** |  | **Previsão do fluxo da carga Preenchimento obrigatório para o modal aéreo.** |
| 36 | xOrig | E | 3 | C | 0 - 1 | 1 - 60 | Sigla ou código interno da Filial/Porto/Estação/ Aeroporto de Origem *ER:* ER36. Observações para o modal aéreo:<br>- Preenchimento obrigatório para o modal aéreo.<br>- O código de três letras IATA do aeroporto de partida <!-- p.23 -->deverá ser incluído como primeira anotação. Quando não for possível, utilizar a sigla OACI. |
| **37** | **pass** | **G** | **3** |  | **0 - n** |  |  |
| 38 | xPass | E | 4 | C | 0 - 1 | 1 - 15 | Sigla ou código interno da Filial/Porto/Estação/Aeroporto de Passagem *ER:* ER36. Observação para o modal aéreo:<br>- O código de três letras IATA, referente ao aeroporto de transferência, deverá ser incluído, quando for o caso. Quando não for possível, utilizar a sigla OACI. Qualquer solicitação de itinerário deverá ser incluída. |
| 39 | xDest | E | 3 | C | 0 - 1 | 1 - 60 | Sigla ou código interno da Filial/Porto/Estação/Aeroporto de Destino *ER:* ER36. Observações para o modal aéreo:<br>- Preenchimento obrigatório para o modal aéreo.<br>- Deverá ser incluído o código de três letras IATA do aeroporto de destino. Quando não for possível, utilizar a sigla OACI. |
| 40 | xRota | E | 3 | C | 0 - 1 | 1 - 10 | Código da Rota de Entrega *ER:* ER36. |
| 43 | xObs | E | 2 | C | 0 - 1 | 1 - 2000 | Observações Gerais *ER:* ER36. |
| **44** | **ObsCont** | **G** | **2** |  | **0 - 10** |  | **Campo de uso livre do contribuinte Informar o nome do campo no atributo xCampo e o conteúdo do campo no xTexto** |
| 45 | xCampo | A | 3 | C | 1 - 1 | 1 - 20 | Identificação do campo *ER:* ER36. |
| 46 | xTexto | E | 3 | C | 1 - 1 | 1 - 160 | Conteúdo do campo *ER:* ER36. |
| **47** | **ObsFisco** | **G** | **2** |  | **0 - 10** |  | **Campo de uso livre do contribuinte Informar o nome do campo no atributo xCampo e o conteúdo do campo no xTexto** |
| 48 | xCampo | A | 3 | C | 1 - 1 | 1 - 20 | Identificação do campo *ER:* ER36. |
| 49 | xTexto | E | 3 | C | 1 - 1 | 1 - 60 | Conteúdo do campo *ER:* ER36. |
| **50** | **emit** | **G** | **1** |  | **1 - 1** |  | **Identificação do Emitente do CT-e** |
| 51 | CNPJ | CE | 2 | C | 1 - 1 | 14 | CNPJ do emitente *ER:* ER5. Informar zeros não significativos |
| 52 | CPF | CE | 2 | C | 1 - 1 | 11 | CPF do emitente *ER:* ER9. Informar zeros não significativos.<br><br>Usar com série específica 920-969 para emitente pessoa física com inscrição estadual |
| 53 | IE | E | 2 | C | 0 - 1 | 14 | Inscrição Estadual do Emitente *ER:* ER29. A IE do emitente somente ficará sem informação para o caso do Regime Especial da NFF (tpEmis=3) |
| 54 | IEST | E | 2 | C | 0 - 1 | 14 | Inscrição Estadual do Substituto Tributário *ER:* ER29. |
| 55 | xNome | E | 2 | C | 1 - 1 | 2 - 60 | Razão social ou Nome do emitente *ER:* ER36. |
| 56 | xFant | E | 2 | C | 0 - 1 | 2 - 60 | Nome fantasia *ER:* ER36. |
| **57** | **enderEmit** | **G** | **2** |  | **1 - 1** |  | **Endereço do emitente** |
| 58 | xLgr | E | 3 | C | 1 - 1 | 2 - 60 | Logradouro *ER:* ER36. |
| 59 | nro | E | 3 | C | 1 - 1 | 1 - 60 | <!-- p.24 -->Número *ER:* ER36. |
| 60 | xCpl | E | 3 | C | 0 - 1 | 1 - 60 | Complemento *ER:* ER36. |
| 61 | xBairro | E | 3 | C | 1 - 1 | 2 - 60 | Bairro *ER:* ER36. |
| 62 | cMun | E | 3 | C | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE) *ER:* ER3. |
| 63 | xMun | E | 3 | C | 1 - 1 | 2 - 60 | Nome do município *ER:* ER36. |
| 64 | CEP | E | 3 | C | 0 - 1 | 8 | CEP *ER:* ER41. Informar zeros não significativos |
| 65 | UF | E | 3 | C | 1 - 1 | 2 | Sigla da UF *Dom.:* D12. |
| 66 | fone | E | 3 | C | 0 - 1 | 6 - 14 | Telefone *ER:* ER6. |
| 67 | CRT | E | 2 | N | 1 - 1 | 1 | Código do Regime Tributário *Dom.:* D10. Informar:<br>1=Simples Nacional;<br>2=Simples Nacional, excesso sublimite de receita bruta;<br>3=Regime Normal.<br>4=Simples Nacional - Microempreendedor Individual – MEI. |
| **68** | **toma** | **G** | **1** |  | **1 - 1** |  | **Identificação do tomador do serviço no CT-e** |
| 69 | toma | E | 2 | N | 1 - 1 | 1 | Tomador do Serviço *Dom.:* D10. Preencher com:<br><br>0-Remetente;<br>1-Expedidor;<br>2-Recebedor;<br>3-Destinatário<br>4-Terceiro |
| 70 | indIEToma | E | 2 | N | 1 - 1 | 1 | Indicador do papel do tomador na prestação do serviço:<br>1 – Contribuinte ICMS;<br>2 – Contribuinte isento de inscrição;<br>9 – Não Contribuinte *Dom.:* D17. Aplica-se ao tomador que for indicado no toma |
| 71 | CNPJ | CE | 2 | C | 1 - 1 | 14 | Número do CNPJ *ER:* ER8. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros.<br>Informar os zeros não significativos. |
| 72 | CPF | CE | 2 | C | 1 - 1 | 11 | Número do CPF *ER:* ER9. Informar os zeros não significativos. |
| 73 | IE | E | 2 | C | 0 - 1 | 14 | Inscrição Estadual *ER:* ER30. Informar a IE do tomador ou ISENTO se tomador é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o tomador não seja contribuinte do ICMS não informar o conteúdo. |
| 74 | xNome | E | 2 | C | 1 - 1 | 2 - 60 | Razão Social ou Nome *ER:* ER36. |
| 75 | ISUF | E | 2 | C | 0 - 1 | 8 - 9 | <!-- p.25 -->Inscrição na SUFRAMA *ER:* ER43. (Obrigatório nas operações com as áreas com benefícios de incentivos fiscais sob controle da SUFRAMA) |
| 76 | fone | E | 2 | C | 0 - 1 | 6 - 14 | Telefone *ER:* ER6. |
| **77** | **enderToma** | **G** | **2** |  | **1 - 1** |  | **Dados do endereço** |
| 78 | xLgr | E | 3 | C | 1 - 1 | 2 - 255 | Logradouro *ER:* ER36. |
| 79 | nro | E | 3 | C | 1 - 1 | 1 - 60 | Número *ER:* ER36. |
| 80 | xCpl | E | 3 | C | 0 - 1 | 1 - 60 | Complemento *ER:* ER36. |
| 81 | xBairro | E | 3 | C | 1 - 1 | 2 - 60 | Bairro *ER:* ER36. |
| 82 | cMun | E | 3 | C | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE) *ER:* ER3. Informar 9999999 para operações com o exterior. |
| 83 | xMun | E | 3 | C | 1 - 1 | 2 - 60 | Nome do município *ER:* ER36. Informar EXTERIOR para operações com o exterior. |
| 84 | CEP | E | 3 | C | 0 - 1 | 8 | CEP *ER:* ER41. Informar os zeros não significativos |
| 85 | UF | E | 3 | C | 1 - 1 | 2 | Sigla da UF *Dom.:* D11. Informar EX para operações com o exterior. |
| 86 | cPais | E | 3 | C | 0 - 1 | 1 - 4 | Código do país *ER:* ER31. Utilizar a tabela do BACEN |
| 87 | xPais | E | 3 | C | 0 - 1 | 2 - 60 | Nome do país *ER:* ER36. |
| 88 | email | E | 2 | C | 0 - 1 | 1 - 60 | Endereço de email *ER:* ER53. |
| **89** | **infCarga** | **G** | **1** |  | **1 - 1** |  | **Informações da Carga do CT-e** |
| 90 | vCarga | E | 2 | C | 1 - 1 | 13, 2 | Valor total da carga *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 91 | proPred | E | 2 | C | 1 - 1 | 1 - 60 | Produto predominante *ER:* ER36. Informar a descrição do produto predominante |
| 92 | xOutCat | E | 2 | C | 0 - 1 | 1 - 30 | Outras características da carga *ER:* ER36. "FRIA", "GRANEL", "REFRIGERADA", "Medidas:<br>12X12X12" |
| **93** | **infQ** | **G** | **2** |  | **1 - n** |  | **Informações de quantidades da Carga do CT-e Para o Aéreo é obrigatório o preenchimento desse campo da seguinte forma.<br>1 - Peso Bruto, sempre em quilogramas (obrigatório);<br>2 - Peso Cubado; sempre em quilogramas;<br>3 - Quantidade de volumes, sempre em unidades (obrigatório);<br>4 - Cubagem, sempre em metros cúbicos (obrigatório apenas quando for impossível preencher as dimensões da(s) embalagem(ens) na tag xDime do leiaute do Aéreo).** |
| 94 | cUnid | E | 3 | N | 1 - 1 | 2 | Código da Unidade de Medida *Dom.:* D21. Preencher com:<br>00-M3;<br>01-KG;<br>02-TON;<br>03-UNIDADE;<br>04-LITROS;<br>05-MMBTU |
| 95 | tpMed | E | 3 | N | 1 - 1 | 1 - 2 | Tipo da Medida *Dom.:* D22. *ER:* ER36. Informar com:<br>00-Cubagem da NF-e<br>01-Cubagem Aferida pelo Transportador<br><!-- p.26 -->02-Peso Bruto da NF-e<br>03-Peso Bruto Aferido pelo Transportador<br>04-Peso Cubado<br>05-Peso Base do Cálculo do Frete<br>06-Peso para uso Operacional<br>07-Caixas<br>08-Paletes<br>09-Sacas<br>10-Containers<br>11-Rolos<br>12-Bombonas<br>13-Latas<br>14-Litragem<br>15-Milhão de BTU (British Thermal Units)<br>99-Outros |
| 96 | qCarga | E | 3 | C | 1 - 1 | 11, 4 | Quantidade *ER:* ER21. 15 posições, sendo 11 inteiras e 4 casas decimais. |
| 97 | vCargaAverb | E | 2 | C | 0 - 1 | 13, 2 | Valor da Carga para efeito de averbação *ER:* ER28. 15 posições, sendo 13 inteiras e 2 casas decimais.<br>Normalmente igual ao valor declarado da mercadoria, diferente por exemplo, quando a mercadoria transportada é isenta de tributos nacionais para exportação, onde é preciso averbar um valor maior, pois no caso de indenização, o valor a ser pago será maior |
| **98** | **det** | **G** | **1** |  | **1 - 999** |  | **Detalhamento das entregas / prestações do CTe Simplificado** |
| 99 | nItem | A | 2 | C | 1 - 1 | 3 | Número identificador do item agrupador da prestação *ER:* ER48. |
| # | --- x --- | - | 2 | - | 1 - 1 |  | Sequência XML |
| 101 | cMunIni | ES | 2 | C | 1 - 1 | 7 | Código do Município de início da prestação *ER:* ER3. Utilizar a tabela do IBGE. Informar 9999999 para operações com o exterior. |
| 102 | xMunIni | ES | 2 | C | 1 - 1 | 2 - 60 | Nome do Município do início da prestação *ER:* ER36. Informar 'EXTERIOR' para operações com o exterior. |
| # | --- x --- | - | 2 | - | 1 - 1 |  | Sequência XML |
| 104 | cMunFim | ES | 2 | C | 1 - 1 | 7 | Código do Município de término da prestação *ER:* ER3. Utilizar a tabela do IBGE. Informar 9999999 para operações com o exterior. |
| 105 | xMunFim | ES | 2 | C | 1 - 1 | 2 - 60 | Nome do Município do término da prestação *ER:* ER36. Informar 'EXTERIOR' para operações com o exterior. |
| 106 | vPrest | E | 2 | C | 1 - 1 | 13, 2 | Valor da Prestação do Serviço *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais.<br>Pode conter zeros quando o CT-e for de complemento de ICMS |
| 107 | vRec | E | 2 | C | 1 - 1 | 13, 2 | <!-- p.27 -->Valor a Receber *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| **108** | **Comp** | **G** | **2** |  | **0 - n** |  | **Componentes do Valor da Prestação** |
| 109 | xNome | E | 3 | C | 1 - 1 | 1 - 15 | Nome do componente *ER:* ER36. Exemplos: FRETE PESO, FRETE VALOR, SEC/CAT, ADEME, AGENDAMENTO, etc |
| 110 | vComp | E | 3 | C | 1 - 1 | 13, 2 | Valor do componente *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| **111** | **infNFe** | **CG** | **2** |  | **1 - n** |  | **Informações das NF-e** |
| 112 | chNFe | E | 3 | C | 1 - 1 | 44 | Chave de acesso da NF-e *ER:* ER4. |
| 113 | PIN | E | 3 | C | 0 - 1 | 2 - 9 | PIN SUFRAMA *ER:* ER47. PIN atribuído pela SUFRAMA para a operação. |
| 114 | dPrev | E | 3 | D | 0 - 1 | 10 | Data prevista de entrega *ER:* ER11. Formato AAAA-MM-DD |
| **115** | **infUnidCarga** | **G** | **3** |  | **0 - n** |  | **Informações das Unidades de Carga (Containeres/ULD/Outros) Dispositivo de carga utilizada (Unit Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu.** |
| 116 | tpUnidCarga | E | 4 | N | 1 - 1 | 1 | Tipo da Unidade de Carga *Dom.:* D10. 1 - Container<br>2 - ULD<br>3 - Pallet<br>4 - Outros |
| 117 | idUnidCarga | E | 4 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Carga *ER:* ER50. Informar a identificação da unidade de carga, por exemplo: número do container. |
| **118** | **lacUnidCarga** | **G** | **4** |  | **0 - n** |  | **Lacres das Unidades de Carga** |
| 119 | nLacre | E | 5 | C | 1 - 1 | 1 - 20 | Número do lacre *ER:* ER36. |
| 120 | qtdRat | E | 4 | C | 0 - 1 | 3, 2<br>3, 3 | Quantidade rateada (Peso,Volume) *ER:* ER14. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| **121** | **infUnidTransp** | **G** | **3** |  | **0 - n** |  | **Informações das Unidades de Transporte (Carreta/Reboque/Vagão) Deve ser preenchido com as informações das unidades de transporte utilizadas.** |
| 122 | tpUnidTransp | E | 4 | N | 1 - 1 | 1 | Tipo da Unidade de Transporte *Dom.:* D9. 1 - Rodoviário Tração<br>2 - Rodoviário Reboque<br>3 - Navio<br>4 - Balsa<br>5 - Aeronave<br>6 - Vagão<br>7 - Outros |
| 123 | idUnidTransp | E | 4 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Transporte *ER:* ER50. Informar a identificação conforme o tipo de unidade de transporte.<br>Por exemplo: para rodoviário tração ou reboque deverá preencher com a placa do veículo. |
| **124** | **lacUnidTransp** | **G** | **4** |  | **0 - n** |  | **Lacres das Unidades de Transporte** |
| 125 | nLacre | E | 5 | C | 1 - 1 | 1 - 20 | <!-- p.28 -->Número do lacre *ER:* ER36. |
| **126** | **infUnidCarga** | **G** | **4** |  | **0 - n** |  | **Informações das Unidades de Carga (Containeres/ULD/Outros) Dispositivo de carga utilizada (Unit Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu.** |
| 127 | tpUnidCarga | E | 5 | N | 1 - 1 | 1 | Tipo da Unidade de Carga *Dom.:* D10. 1 - Container<br>2 - ULD<br>3 - Pallet<br>4 - Outros |
| 128 | idUnidCarga | E | 5 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Carga *ER:* ER50. Informar a identificação da unidade de carga, por exemplo: número do container. |
| **129** | **lacUnidCarga** | **G** | **5** |  | **0 - n** |  | **Lacres das Unidades de Carga** |
| 130 | nLacre | E | 6 | C | 1 - 1 | 1 - 20 | Número do lacre *ER:* ER36. |
| 131 | qtdRat | E | 5 | C | 0 - 1 | 3, 2<br>3, 3 | Quantidade rateada (Peso,Volume) *ER:* ER14. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| 132 | qtdRat | E | 4 | C | 0 - 1 | 3, 2<br>3, 3 | Quantidade rateada (Peso,Volume) *ER:* ER14. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| **133** | **infDocAnt** | **CG** | **2** |  | **1 - n** |  | **Documentos anteriores** |
| 134 | chCTe | E | 3 | C | 1 - 1 | 44 | Chave de acesso do CT-e *ER:* ER4. |
| 135 | tpPrest | E | 3 | N | 1 - 1 | 1 | indica se a prestação é total ou parcial em relação as notas do documento anterior *Dom.:* D1. Preencher com:<br><br>1 - Total<br>2 - Parcial |
| **136** | **infNFeTranspParcial** | **G** | **3** |  | **0 - n** |  |  |
| 137 | chNFe | E | 4 | C | 1 - 1 | 44 | Chave de acesso da NF-e *ER:* ER4. Informando o tpPrest com “2 – Parcial” deve-se informar as chaves de acesso das NF-e que acobertam a carga transportada. |
| **138** | **infModal** | **G** | **1** |  | **1 - 1** |  | **Informações do modal** |
| 139 | versaoModal | A | 2 | C | 1 - 1 | 4 | Versão do leiaute específico para o Modal *ER:* ER49. |
| 140 | xs:any | E | 2 | C | 1 - 1 |  | XML do modal<br>Insira neste local o XML específico do modal (rodoviário, aéreo, ferroviário, aquaviário ou dutoviário). O elemento do tipo -any- permite estender o documento XML com elementos não especificados pelo schema.<br>Insira neste local - any- o XML específico do modal (rodoviário, aéreo, ferroviário, aquaviário ou dutoviário). A especificação do schema XML para cada modal pode ser encontrada nos arquivos que acompanham este pacote de liberação:<br>Rodoviário - ver arquivo CTeModalRodoviario_v9.99<br>Onde v9.99 é a a designação genérica para a versão do arquivo. Por exemplo, o arquivo para o schema do modal <!-- p.29 -->Rodoviário na versão 1.04 será denominado "CTeModalRodoviario_v1.04". |
| **141** | **cobr** | **G** | **1** |  | **0 - 1** |  | **Dados da cobrança do CT-e** |
| **142** | **fat** | **G** | **2** |  | **0 - 1** |  | **Dados da fatura** |
| 143 | nFat | E | 3 | C | 0 - 1 | 1 - 60 | Número da fatura *ER:* ER36. |
| 144 | vOrig | E | 3 | C | 0 - 1 | 13, 2 | Valor original da fatura *ER:* ER28. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 145 | vDesc | E | 3 | C | 0 - 1 | 13, 2 | Valor do desconto da fatura *ER:* ER28. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 146 | vLiq | E | 3 | C | 0 - 1 | 13, 2 | Valor líquido da fatura *ER:* ER28. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| **147** | **dup** | **G** | **2** |  | **0 - n** |  | **Dados das duplicatas** |
| 148 | nDup | E | 3 | C | 0 - 1 | 1 - 60 | Número da duplicata *ER:* ER36. |
| 149 | dVenc | E | 3 | D | 0 - 1 | 10 | Data de vencimento da duplicata (AAAA-MM-DD) *ER:* ER11. |
| 150 | vDup | E | 3 | C | 0 - 1 | 13, 2 | Valor da duplicata *ER:* ER28. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| **151** | **infCteSub** | **G** | **1** |  | **0 - 1** |  | **Informações do CT-e de substituição** |
| 152 | chCte | E | 2 | C | 1 - 1 | 44 | Chave de acesso do CT-e a ser substituído (original) *ER:* ER4. |
| 153 | indAlteraToma | E | 2 | N | 0 - 1 | 1 | Indicador de CT-e Alteração de Tomador *Dom.:* D23. |
| **154** | **imp** | **G** | **1** |  | **1 - 1** |  | **Informações relativas aos Impostos** |
| **155** | **ICMS** | **G** | **2** |  | **1 - 1** |  | **Informações relativas ao ICMS** |
| **156** | **ICMS00** | **CG** | **3** |  | **1 - 1** |  | **Prestação sujeito à tributação normal do ICMS** |
| 157 | CST | E | 4 | N | 1 - 1 | 2 | classificação Tributária do Serviço *Dom.:* D33. 00 - Tributação normal ICMS |
| 158 | vBC | E | 4 | C | 1 - 1 | 13, 2 | Valor da BC do ICMS *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 159 | pICMS | E | 4 | C | 1 - 1 | 3, 2 | Alíquota do ICMS *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 160 | vICMS | E | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| **161** | **ICMS20** | **CG** | **3** |  | **1 - 1** |  | **Prestação sujeito à tributação com redução de BC do ICMS** |
| 162 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do serviço *Dom.:* D34. 20 - Tributação com BC reduzida do ICMS |
| 163 | pRedBC | E | 4 | C | 1 - 1 | 3, 2 | Percentual de redução da BC *ER:* ER15. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 164 | vBC | E | 4 | C | 1 - 1 | 13, 2 | Valor da BC do ICMS *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 165 | pICMS | E | 4 | C | 1 - 1 | 3, 2 | Alíquota do ICMS *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 166 | vICMS | E | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| # | --- x --- | - | 1 | - | 0 - 1 |  | Sequência XML |
| 168 | vICMSDeson | ES | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS de desoneração *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 169 | cBenef | ES | 4 | C | 1 - 1 | 10 | <!-- p.30 -->Código de Benefício Fiscal na UF *ER:* ER36. Código de Benefício Fiscal utilizado pela UF |
| **170** | **ICMS45** | **CG** | **3** |  | **1 - 1** |  | **ICMS Isento, não Tributado ou diferido** |
| 171 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do Serviço *Dom.:* D35. Preencher com:<br>40 - ICMS isenção;<br>41 - ICMS não tributada;<br>51 - ICMS diferido |
| # | --- x --- | - | 1 | - | 0 - 1 |  | Sequência XML |
| 173 | vICMSDeson | ES | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS de desoneração *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 174 | cBenef | ES | 4 | C | 1 - 1 | 10 | Código de Benefício Fiscal na UF *ER:* ER36. Código de Benefício Fiscal utilizado pela UF |
| **175** | **ICMS60** | **CG** | **3** |  | **1 - 1** |  | **Tributação pelo ICMS60 - ICMS cobrado por substituição tributária. Responsabilidade do recolhimento do ICMS atribuído ao tomador ou 3º por ST** |
| 176 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do Serviço *Dom.:* D36. 60 - ICMS cobrado por substituição tributária |
| 177 | vBCSTRet | E | 4 | C | 1 - 1 | 13, 2 | Valor da BC do ICMS ST retido *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais.<br>Valor do frete sobre o qual será calculado o ICMS a ser substituído na Prestação. |
| 178 | vICMSSTRet | E | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS ST retido *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais.<br>Resultado da multiplicação do “vBCSTRet” x “pICMSSTRet” – que será valor do ICMS a ser retido pelo Substituto. Podendo o valor do ICMS a ser retido efetivamente, sofrer ajustes conforme a opção tributária do transportador substituído. |
| 179 | pICMSSTRet | E | 4 | C | 1 - 1 | 3, 2 | Alíquota do ICMS *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais.<br>Percentual de Alíquota incidente na prestação de serviço de transporte. |
| 180 | vCred | E | 4 | C | 0 - 1 | 13, 2 | Valor do Crédito outorgado/Presumido *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais.<br>Preencher somente quando o transportador substituído, for optante pelo crédito outorgado previsto no Convênio 106/96 e corresponde ao percentual de 20% do valor do ICMS ST retido. |
| # | --- x --- | - | 1 | - | 0 - 1 |  | Sequência XML |
| 182 | vICMSDeson | ES | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS de desoneração *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 183 | cBenef | ES | 4 | C | 1 - 1 | 10 | Código de Benefício Fiscal na UF *ER:* ER36. Código de Benefício Fiscal utilizado pela UF |
| **184** | **ICMS90** | **CG** | **3** |  | **1 - 1** |  | **ICMS Outros** |
| 185 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do Serviço *Dom.:* D37. 90 - ICMS outros |
| 186 | pRedBC | E | 4 | C | 0 - 1 | 3, 2 | <!-- p.31 -->Percentual de redução da BC *ER:* ER15. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 187 | vBC | E | 4 | C | 1 - 1 | 13, 2 | Valor da BC do ICMS *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 188 | pICMS | E | 4 | C | 1 - 1 | 3, 2 | Alíquota do ICMS *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 189 | vICMS | E | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 190 | vCred | E | 4 | C | 0 - 1 | 13, 2 | Valor do Crédito Outorgado/Presumido *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| # | --- x --- | - | 1 | - | 0 - 1 |  | Sequência XML |
| 192 | vICMSDeson | ES | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS de desoneração *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 193 | cBenef | ES | 4 | C | 1 - 1 | 10 | Código de Benefício Fiscal na UF *ER:* ER36. Código de Benefício Fiscal utilizado pela UF |
| **194** | **ICMSOutraUF** | **CG** | **3** |  | **1 - 1** |  | **ICMS devido à UF de origem da prestação, quando diferente da UF do emitente** |
| 195 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do Serviço *Dom.:* D37. 90 - ICMS Outra UF |
| 196 | pRedBCOutraUF | E | 4 | C | 0 - 1 | 3, 2 | Percentual de redução da BC *ER:* ER15. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 197 | vBCOutraUF | E | 4 | C | 1 - 1 | 13, 2 | Valor da BC do ICMS *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 198 | pICMSOutraUF | E | 4 | C | 1 - 1 | 3, 2 | Alíquota do ICMS *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 199 | vICMSOutraUF | E | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS devido outra UF *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| # | --- x --- | - | 1 | - | 0 - 1 |  | Sequência XML |
| 201 | vICMSDeson | ES | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS de desoneração *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 202 | cBenef | ES | 4 | C | 1 - 1 | 10 | Código de Benefício Fiscal na UF *ER:* ER36. Código de Benefício Fiscal utilizado pela UF |
| **203** | **ICMSSN** | **CG** | **3** |  | **1 - 1** |  | **Simples Nacional** |
| 204 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do Serviço *Dom.:* D37. 90 - ICMS Simples Nacional |
| 205 | indSN | E | 4 | N | 1 - 1 | 1 | Indica se o contribuinte é Simples Nacional 1=Sim *Dom.:* D23. |
| 206 | vTotTrib | E | 2 | C | 0 - 1 | 13, 2 | Valor Total dos Tributos *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 207 | infAdFisco | E | 2 | C | 0 - 1 | 1 - 2000 | Informações adicionais de interesse do Fisco *ER:* ER36. Norma referenciada, informações complementares, etc |
| **208** | **ICMSUFFim** | **G** | **2** |  | **0 - 1** |  | **Informações do ICMS de partilha com a UF de término do serviço de transporte na operação interestadual Grupo a ser informado nas prestações interestaduais para consumidor final, não contribuinte do ICMS** |
| 209 | vBCUFFim | E | 3 | C | 1 - 1 | 13, 2 | Valor da BC do ICMS na UF de término da prestação do serviço de transporte *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 210 | pFCPUFFim | E | 3 | C | 1 - 1 | 3, 2 | Percentual do ICMS relativo ao Fundo de Combate à pobreza (FCP) na UF de término da <!-- p.32 -->prestação do serviço de transporte *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais.<br>Alíquota adotada nas operações internas na UF do destinatário |
| 211 | pICMSUFFim | E | 3 | C | 1 - 1 | 3, 2 | Alíquota interna da UF de término da prestação do serviço de transporte *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais.<br>Alíquota adotada nas operações internas na UF do destinatário |
| 212 | pICMSInter | E | 3 | C | 1 - 1 | 3, 2 | Alíquota interestadual das UF envolvidas *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais.<br>Alíquota interestadual das UF envolvidas |
| 213 | vFCPUFFim | E | 3 | C | 1 - 1 | 13, 2 | Valor do ICMS relativo ao Fundo de Combate á Pobreza (FCP) da UF de término da prestação *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 214 | vICMSUFFim | E | 3 | C | 1 - 1 | 13, 2 | Valor do ICMS de partilha para a UF de término da prestação do serviço de transporte *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 215 | vICMSUFIni | E | 3 | C | 1 - 1 | 13, 2 | Valor do ICMS de partilha para a UF de início da prestação do serviço de transporte *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| **216** | **total** | **G** | **1** |  | **1 - 1** |  | **Valores Totais do CTe** |
| 217 | vTPrest | E | 2 | C | 1 - 1 | 13, 2 | Valor Total da Prestação do Serviço *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais.<br>Pode conter zeros quando o CT-e for de complemento de ICMS |
| 218 | vTRec | E | 2 | C | 1 - 1 | 13, 2 | Valor total a Receber *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| **219** | **autXML** | **G** | **1** |  | **0 - 10** |  | **Autorizados para download do XML do DF-e Informar CNPJ ou CPF. Preencher os zeros não significativos.** |
| 220 | CNPJ | CE | 2 | C | 1 - 1 | 14 | CNPJ do autorizado *ER:* ER5. Informar zeros não significativos |
| 221 | CPF | CE | 2 | C | 1 - 1 | 11 | CPF do autorizado *ER:* ER9. Informar zeros não significativos |
| **222** | **infRespTec** | **G** | **1** |  | **0 - 1** |  | **Informações do Responsável Técnico pela emissão do DF-e** |
| 223 | CNPJ | E | 2 | C | 1 - 1 | 14 | CNPJ da pessoa jurídica responsável técnica pelo sistema utilizado na emissão do documento fiscal eletrônico *ER:* ER5. Informar o CNPJ da pessoa jurídica desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. |
| 224 | xContato | E | 2 | C | 1 - 1 | 2 - 60 | Nome da pessoa a ser contatada *ER:* ER36. Informar o nome da pessoa a ser contatada na empresa desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. No caso de pessoa física, informar o respectivo nome. |
| 225 | email | E | 2 | C | 1 - 1 | 1 - 60 | Email da pessoa jurídica a ser contatada *ER:* ER53. |
| 226 | fone | E | 2 | C | 1 - 1 | 7 - 12 | Telefone da pessoa jurídica a ser contatada *ER:* ER51. Preencher com o Código DDD + número do telefone. |
| # | --- x --- | - | 0 | - | 0 - 1 |  | Sequência XML |
| 228 | idCSRT | ES | 2 | C | 1 - 1 | 3 | <!-- p.33 -->Identificador do código de segurança do responsável técnico *ER:* ER35. |
| 229 | hashCSRT | ES | 2 | C | 1 - 1 | 20 | Hash do token do código de segurança do responsável técnico O hashCSRT é o resultado das funções SHA-1 e base64 do token CSRT fornecido pelo fisco + chave de acesso do DF-e. (Implementação em futura NT)<br><br>Observação: 28 caracteres são representados no schema como 20 bytes do tipo base64Binary |
| **230** | **infSolicNFF** | **G** | **1** |  | **0 - 1** |  | **Grupo de informações do pedido de emissão da Nota Fiscal Fácil** |
| 231 | xSolic | E | 2 | C | 1 - 1 | 2 - 8000 | Solicitação do pedido de emissão da NFF. *ER:* ER36. Será preenchido com a totalidade de campos informados no aplicativo emissor serializado. |
| **232** | **infPAA** | **G** | **1** |  | **0 - 1** |  | **Grupo de Informação do Provedor de Assinatura e Autorização** |
| 233 | CNPJPAA | E | 2 | C | 1 - 1 | 14 | CNPJ do Provedor de Assinatura e Autorização *ER:* ER5. |
| **234** | **PAASignature** | **G** | **2** |  | **1 - 1** |  | **Assinatura RSA do Emitente para DFe gerados por PAA** |
| 235 | SignatureValue | E | 3 | C | 1 - 1 |  | Assinatura digital padrão RSA Converter o atributo Id do DFe para array de bytes e assinar com a chave privada do RSA com algoritmo SHA1 gerando um valor no formato base64. |
| **236** | **RSAKeyValue** | **G** | **3** |  | **1 - 1** |  | **Chave Pública no padrão XML RSA Key** |
| 237 | Modulus | E | 4 | C | 1 - 1 |  |  |
| 238 | Exponent | E | 4 | C | 1 - 1 |  |  |
| **239** | **infCTeSupl** | **G** | **0** |  | **0 - 1** |  | **Informações suplementares do CT-e** |
| 240 | qrCodCTe | E | 1 | C | 1 - 1 | 50 - 1000 | Texto com o QR-Code impresso no DACTE *ER:* ER46. |
| 241 |  | E | 0 | C | 1 - 1 |  | ds:Signature |
