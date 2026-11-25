# 3. Leiaute do CTe de Transporte de Carga (Modelo 57)

<!-- p.51 -->

Legendas coluna Ele (Elemento): A – Atributo, E – Elemento, G – Grupo, ES – Elemento da Sequência, CE – Choice Element (escolha entre elementos), CG – Choice Group (Escolha entre grupos).

Legendas coluna Tipo: N – Numérico, C – Caracteres, D – Data.

ERXX – Expressão Regular (ver tabela de expressões regulares).

DXX – Valores de Domínio (ver tabela de valores de domínio).

Ocorr: 0 - 1 (opcional sem repetição), 1 – 1 (obrigatório sem repetição), 0 – n (opcional com múltiplas ocorrências), 1 – n (obrigatório com múltiplas ocorrências).

As subseções deste capítulo estão em:

- [3.1. Leiaute do Modal Rodoviário](03-01-leiaute-do-modal-rodoviario.md)
- [3.2. Leiaute do Modal Aéreo](03-02-leiaute-do-modal-aereo.md)
- [3.3. Leiaute do Modal Ferroviário](03-03-leiaute-do-modal-ferroviario.md)
- [3.4. Leiaute do Modal Aquaviário](03-04-leiaute-do-modal-aquaviario.md)
- [3.5. Leiaute do Modal Dutoviário](03-05-leiaute-do-modal-dutoviario.md)
- [3.6. Leiaute do Multimodal](03-06-leiaute-do-multimodal.md)
- [3.7. Expressões Regulares e Valores de Domínio do Modelo 57](03-07-expressoes-regulares-e-valores-de-dominio-do-modelo-57.md)

## Leiaute geral do CTe

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 1 | **infCte** | **G** | **0** | | **1 - 1** | | **Informações do CTe** |
| 2 | versao | A | 1 | C | 1 - 1 | | Versão do leiaute. *ER:* ER56. Ex: "4.00" |
| 3 | Id | A | 1 | C | 1 - 1 | 47 | Identificador da tag a ser assinada. *ER:* ER45. Informar a chave de acesso do CTe e precedida do literal "CTe" |
| 4 | **ide** | **G** | **1** | | **1 - 1** | | **Identificação do CTe** |
| 5 | cUF | E | 2 | N | 1 - 1 | 2 | Código da UF do emitente do CTe. *Dom.:* D2. Utilizar a Tabela do IBGE. |
| 6 | cCT | E | 2 | C | 1 - 1 | 8 | Código numérico que compõe a Chave de Acesso. *ER:* ER41. Número aleatório gerado pelo emitente para cada CTe, com o objetivo de evitar acessos indevidos ao documento. |
| 7 | CFOP | E | 2 | C | 1 - 1 | 4 | Código Fiscal de Operações e Prestações. *ER:* ER51. |
| 8 | natOp | E | 2 | C | 1 - 1 | 1 - 60 | Natureza da Operação. *ER:* ER36. |
| 9 | mod | E | 2 | N | 1 - 1 | 2 | Modelo do documento fiscal. *Dom.:* D7. Utilizar o código 57 para identificação do CTe, emitido em substituição aos modelos de conhecimentos em papel. |
| 10 | serie | E | 2 | C | 1 - 1 | 1 - 3 | Série do CTe. *ER:* ER34. Preencher com "0" no caso de série única |
| 11 | nCT | E | 2 | C | 1 - 1 | 1 - 9 | Número do CTe. *ER:* ER32. |
| 12 | dhEmi | E | 2 | C | 1 - 1 | 21 | Data e hora de emissão do CTe. *ER:* ER1. Formato AAAA-MM-DDTHH:MM:DD TZD |
| 13 | tpImp | E | 2 | N | 1 - 1 | 1 | Formato de impressão do DACTE. *Dom.:* D1. Preencher com:<br>1 - Retrato;<br>2 - Paisagem. |
| 14 | tpEmis | E | 2 | N | 1 - 1 | 1 | Forma de emissão do CTe. *Dom.:* D19. Preencher com:<br>1 - Normal;<br>3 - Regime Especial NFF;<br>4 - EPEC pela SVC;<br><!-- p.52 -->5 - Contingência FSDA;<br>7 - Autorização pela SVC-RS;<br>8 - Autorização pela SVC-SP |
| 15 | cDV | E | 2 | C | 1 - 1 | 1 | Digito Verificador da chave de acesso do CTe. *ER:* ER42. Informar o dígito de controle da chave de acesso do CTe, que deve ser calculado com a aplicação do algoritmo módulo 11 (base 2,9) da chave de acesso. |
| 16 | tpAmb | E | 2 | N | 1 - 1 | 1 | Tipo do Ambiente. *Dom.:* D1. Preencher com: 1 - Produção; 2 - Homologação. |
| 17 | tpCTe | E | 2 | N | 1 - 1 | 1 | Tipo do CTe. *Dom.:* D39. Preencher com:<br>0 - CTe Normal;<br>1 - CTe de Complemento de Valores;<br>3 - CTe de Substituição |
| 18 | procEmi | E | 2 | N | 1 - 1 | 1 | Identificador do processo de emissão do CTe. *Dom.:* D43. Preencher com:<br>0 - emissão de CTe com aplicativo do contribuinte;<br>3- emissão CTe pelo contribuinte com aplicativo fornecido pelo SEBRAE. |
| 19 | verProc | E | 2 | C | 1 - 1 | 1 - 20 | Versão do processo de emissão. *ER:* ER36. Informar a versão do aplicativo emissor de CTe. |
| 20 | indGlobalizado | E | 2 | N | 0 - 1 | 1 | Indicador de CTe globalizado. *Dom.:* D20. Informar valor 1 quando for globalizado e não informar a tag quando não tratar de CTe globalizado |
| 21 | cMunEnv | E | 2 | C | 1 - 1 | 7 | Código do Município de envio do CTe (de onde o documento foi transmitido). *ER:* ER3. Utilizar a tabela do IBGE. Informar 9999999 para as operações com o exterior. |
| 22 | xMunEnv | E | 2 | C | 1 - 1 | 2 - 60 | Nome do Município de envio do CTe (de onde o documento foi transmitido). *ER:* ER36. Informar PAIS/Município para as operações com o exterior. |
| 23 | UFEnv | E | 2 | C | 1 - 1 | 2 | Sigla da UF de envio do CTe (de onde o documento foi transmitido). *Dom.:* D11. Informar 'EX' para operações com o exterior. |
| 24 | modal | E | 2 | N | 1 - 1 | 2 | Modal. *Dom.:* D42. Preencher com:<br>01-Rodoviário;<br>02-Aéreo;<br>03-Aquaviário;<br>04-Ferroviário;<br>05-Dutoviário;<br>06-Multimodal; |
| 25 | tpServ | E | 2 | N | 1 - 1 | 1 | Tipo do Serviço. *Dom.:* D21. Preencher com:<br>0 - Normal;<br><!-- p.53 -->1 - Subcontratação;<br>2 - Redespacho;<br>3 - Redespacho Intermediário;<br>4 - Serviço Vinculado a Multimodal |
| 26 | cMunIni | E | 2 | C | 1 - 1 | 7 | Código do Município de início da prestação. *ER:* ER3. Utilizar a tabela do IBGE. Informar 9999999 para operações com o exterior. |
| 27 | xMunIni | E | 2 | C | 1 - 1 | 2 - 60 | Nome do Município do início da prestação. *ER:* ER36. Informar 'EXTERIOR' para operações com o exterior. |
| 28 | UFIni | E | 2 | C | 1 - 1 | 2 | UF do início da prestação. *Dom.:* D11. Informar 'EX' para operações com o exterior. |
| 29 | cMunFim | E | 2 | C | 1 - 1 | 7 | Código do Município de término da prestação. *ER:* ER3. Utilizar a tabela do IBGE. Informar 9999999 para operações com o exterior. |
| 30 | xMunFim | E | 2 | C | 1 - 1 | 2 - 60 | Nome do Município do término da prestação. *ER:* ER36. Informar 'EXTERIOR' para operações com o exterior. |
| 31 | UFFim | E | 2 | C | 1 - 1 | 2 | UF do término da prestação. *Dom.:* D11. Informar 'EX' para operações com o exterior. |
| 32 | retira | E | 2 | N | 1 - 1 | 1 | Indicador se o Recebedor retira no Aeroporto, Filial, Porto ou Estação de Destino? *Dom.:* D18. Preencher com:<br>0 - Sim;<br>1 - Não |
| 33 | xDetRetira | E | 2 | C | 0 - 1 | 1 - 160 | Detalhes do retira. *ER:* ER36. |
| 34 | indIEToma | E | 2 | N | 1 - 1 | 1 | Indicador do papel do tomador na prestação do serviço:<br>1 – Contribuinte ICMS;<br>2 – Contribuinte isento de inscrição;<br>9 – Não Contribuinte. *Dom.:* D17. Aplica-se ao tomador que for indicado no toma3 ou toma4 |
| 35 | **toma3** | **CG** | **2** | | **1 - 1** | | **Indicador do "papel" do tomador do serviço no CTe** |
| 36 | toma | E | 3 | N | 1 - 1 | 1 | Tomador do Serviço. *Dom.:* D22. Preencher com:<br>0-Remetente;<br>1-Expedidor;<br>2-Recebedor;<br>3-Destinatário<br>Serão utilizadas as informações contidas no respectivo grupo, conforme indicado pelo conteúdo deste campo |
| 37 | **toma4** | **CG** | **2** | | **1 - 1** | | **Indicador do "papel" do tomador do serviço no CTe** |
| 38 | toma | E | 3 | N | 1 - 1 | 1 | Tomador do Serviço. *Dom.:* D14. Preencher com:<br>4 - Outros<br><!-- p.54 -->Obs: Informar os dados cadastrais do tomador do serviço |
| 39 | CNPJ | CE | 3 | C | 1 - 1 | 14 | Número do CNPJ. *ER:* ER8. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros. Informar os zeros não significativos. |
| 40 | CPF | CE | 3 | C | 1 - 1 | 11 | Número do CPF. *ER:* ER9. Informar os zeros não significativos. |
| 41 | IE | E | 3 | C | 0 - 1 | 14 | Inscrição Estadual. *ER:* ER30. Informar a IE do tomador ou ISENTO se tomador é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o tomador não seja contribuinte do ICMS não informar o conteúdo. |
| # | --- x --- | - | 3 | - | 1 - 1 | | Sequência XML |
| 43 | xNome | ES | 3 | C | 1 - 1 | 2 - 60 | Razão Social ou Nome. *ER:* ER36. |
| 44 | xFant | ES | 3 | C | 0 - 1 | 2 - 60 | Nome Fantasia. *ER:* ER36. |
| 45 | fone | ES | 3 | C | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 46 | **enderToma** | **G** | **3** | | **1 - 1** | | **Dados do endereço** |
| 47 | xLgr | E | 4 | C | 1 - 1 | 2 - 255 | Logradouro. *ER:* ER36. |
| 48 | nro | E | 4 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 49 | xCpl | E | 4 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 50 | xBairro | E | 4 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 51 | cMun | E | 4 | C | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE). *ER:* ER3. Informar 9999999 para operações com o exterior. |
| 52 | xMun | E | 4 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. Informar EXTERIOR para operações com o exterior. |
| 53 | CEP | E | 4 | C | 0 - 1 | 8 | CEP. *ER:* ER41. Informar os zeros não significativos |
| 54 | UF | E | 4 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D11. Informar EX para operações com o exterior. |
| 55 | cPais | E | 4 | C | 0 - 1 | 1 - 4 | Código do país. *ER:* ER31. Utilizar a tabela do BACEN |
| 56 | xPais | E | 4 | C | 0 - 1 | 2 - 60 | Nome do país. *ER:* ER36. |
| 57 | email | ES | 3 | C | 0 - 1 | 1 - 60 | Endereço de email. *ER:* ER52. |
| # | --- x --- | - | 2 | - | 0 - 1 | | Sequência XML |
| 59 | dhCont | ES | 2 | C | 1 - 1 | 21 | Data e Hora da entrada em contingência. *ER:* ER1. Informar a data e hora no formato AAAA-MM-DDTHH:MM:SS |
| 60 | xJust | ES | 2 | C | 1 - 1 | 15 - 256 | Justificativa da entrada em contingência. *ER:* ER36. |
| 61 | **compl** | **G** | **1** | | **0 - 1** | | **Dados complementares do CTe para fins operacionais ou comerciais** |
| 62 | xCaracAd | E | 2 | C | 0 - 1 | 1 - 15 | <!-- p.55 -->Característica adicional do transporte. *ER:* ER36. Texto livre:<br>REENTREGA; DEVOLUÇÃO;<br>REFATURAMENTO; etc |
| 63 | xCaracSer | E | 2 | C | 0 - 1 | 1 - 30 | Característica adicional do serviço. *ER:* ER36. Texto livre:<br>ENTREGA EXPRESSA; LOGÍSTICA REVERSA; CONVENCIONAL; EMERGENCIAL; etc |
| 64 | xEmi | E | 2 | C | 0 - 1 | 1 - 20 | Funcionário emissor do CTe. *ER:* ER36. |
| 65 | **fluxo** | **G** | **2** | | **0 - 1** | | **Previsão do fluxo da carga. Preenchimento obrigatório para o modal aéreo.** |
| 66 | xOrig | E | 3 | C | 0 - 1 | 1 - 60 | Sigla ou código interno da Filial/Porto/Estação/ Aeroporto de Origem. *ER:* ER36. Observações para o modal aéreo:<br>- Preenchimento obrigatório para o modal aéreo.<br>- O código de três letras IATA do aeroporto de partida deverá ser incluído como primeira anotação. Quando não for possível, utilizar a sigla OACI. |
| 67 | **pass** | **G** | **3** | | **0 - n** | | |
| 68 | xPass | E | 4 | C | 0 - 1 | 1 - 15 | Sigla ou código interno da Filial/Porto/Estação/Aeroporto de Passagem. *ER:* ER36. Observação para o modal aéreo:<br>- O código de três letras IATA, referente ao aeroporto de transferência, deverá ser incluído, quando for o caso. Quando não for possível, utilizar a sigla OACI. Qualquer solicitação de itinerário deverá ser incluída. |
| 69 | xDest | E | 3 | C | 0 - 1 | 1 - 60 | Sigla ou código interno da Filial/Porto/Estação/Aeroporto de Destino. *ER:* ER36. Observações para o modal aéreo:<br>- Preenchimento obrigatório para o modal aéreo.<br>- Deverá ser incluído o código de três letras IATA do aeroporto de destino. Quando não for possível, utilizar a sigla OACI. |
| 70 | xRota | E | 3 | C | 0 - 1 | 1 - 10 | Código da Rota de Entrega. *ER:* ER36. |
| 71 | **Entrega** | **G** | **2** | | **0 - 1** | | **Informações ref. a previsão de entrega** |
| 72 | **semData** | **CG** | **3** | | **1 - 1** | | **Entrega sem data definida. Esta opção é proibida para o modal aéreo.** |
| 73 | tpPer | E | 4 | N | 1 - 1 | 1 | Tipo de data/período programado para entrega. *Dom.:* D23. 0- Sem data definida |
| 74 | **comData** | **CG** | **3** | | **1 - 1** | | **Entrega com data definida** |
| 75 | tpPer | E | 4 | N | 1 - 1 | 1 | Tipo de data/período programado para entrega. *Dom.:* D24. Preencher com:<br>1-Na data;<br><!-- p.56 -->2-Até a data;<br>3-A partir da data |
| 76 | dProg | E | 4 | D | 1 - 1 | 10 | Data programada. *ER:* ER11. Formato AAAA-MM-DD |
| 77 | **noPeriodo** | **CG** | **3** | | **1 - 1** | | **Entrega no período definido** |
| 78 | tpPer | E | 4 | N | 1 - 1 | 1 | Tipo período. *Dom.:* D14. 4-No período |
| 79 | dIni | E | 4 | D | 1 - 1 | 10 | Data inicial. *ER:* ER11. Formato AAAA-MM-DD |
| 80 | dFim | E | 4 | D | 1 - 1 | 10 | Data final. *ER:* ER11. Formato AAAA-MM-DD |
| 81 | **semHora** | **CG** | **3** | | **1 - 1** | | **Entrega sem hora definida** |
| 82 | tpHor | E | 4 | N | 1 - 1 | 1 | Tipo de hora. *Dom.:* D23. 0- Sem hora definida |
| 83 | **comHora** | **CG** | **3** | | **1 - 1** | | **Entrega com hora definida** |
| 84 | tpHor | E | 4 | N | 1 - 1 | 1 | Tipo de hora. *Dom.:* D24. Preencher com:<br>1 - No horário;<br>2 - Até o horário;<br>3 - A partir do horário. |
| 85 | hProg | E | 4 | T | 1 - 1 | 8 | Hora programada. *ER:* ER55. Formato HH:MM:SS |
| 86 | **noInter** | **CG** | **3** | | **1 - 1** | | **Entrega no intervalo de horário definido** |
| 87 | tpHor | E | 4 | N | 1 - 1 | 1 | Tipo de hora. *Dom.:* D14. 4 - No intervalo de tempo |
| 88 | hIni | E | 4 | T | 1 - 1 | 8 | Hora inicial. *ER:* ER55. Formato HH:MM:SS |
| 89 | hFim | E | 4 | T | 1 - 1 | 8 | Hora final. *ER:* ER55. Formato HH:MM:SS |
| 90 | origCalc | E | 2 | C | 0 - 1 | 2 - 40 | Município de origem para efeito de cálculo do frete. *ER:* ER36. |
| 91 | destCalc | E | 2 | C | 0 - 1 | 2 - 40 | Município de destino para efeito de cálculo do frete. *ER:* ER36. |
| 92 | xObs | E | 2 | C | 0 - 1 | 1 - 2000 | Observações Gerais. *ER:* ER36. |
| 93 | **ObsCont** | **G** | **2** | | **0 - 10** | | **Campo de uso livre do contribuinte. Informar o nome do campo no atributo xCampo e o conteúdo do campo no XTexto** |
| 94 | xCampo | A | 3 | C | 1 - 1 | 1 - 20 | Identificação do campo. *ER:* ER36. |
| 95 | xTexto | E | 3 | C | 1 - 1 | 1 - 160 | Conteúdo do campo. *ER:* ER36. |
| 96 | **ObsFisco** | **G** | **2** | | **0 - 10** | | **Campo de uso livre do contribuinte. Informar o nome do campo no atributo xCampo e o conteúdo do campo no XTexto** |
| 97 | xCampo | A | 3 | C | 1 - 1 | 1 - 20 | Identificação do campo. *ER:* ER36. |
| 98 | xTexto | E | 3 | C | 1 - 1 | 1 - 60 | Conteúdo do campo. *ER:* ER36. |
| 99 | **emit** | **G** | **1** | | **1 - 1** | | **Identificação do Emitente do CTe** |
| 100 | CNPJ | CE | 2 | C | 1 - 1 | 14 | CNPJ do emitente. *ER:* ER5. Informar zeros não significativos |
| 101 | CPF | CE | 2 | C | 1 - 1 | 11 | CPF do emitente. *ER:* ER9. Informar zeros não significativos. Usar com série específica 920-969 para <!-- p.57 -->emitente pessoa física com inscrição estadual |
| 102 | IE | E | 2 | C | 0 - 1 | 14 | Inscrição Estadual do Emitente. *ER:* ER29. A IE do emitente somente ficará sem informação para o caso do Regime Especial da NFF (tpEmis=3) |
| 103 | IEST | E | 2 | C | 0 - 1 | 14 | Inscrição Estadual do Substituto Tributário. *ER:* ER29. |
| 104 | xNome | E | 2 | C | 1 - 1 | 2 - 60 | Razão social ou Nome do emitente. *ER:* ER36. |
| 105 | xFant | E | 2 | C | 0 - 1 | 2 - 60 | Nome fantasia. *ER:* ER36. |
| 106 | **enderEmit** | **G** | **2** | | **1 - 1** | | **Endereço do emitente** |
| 107 | xLgr | E | 3 | C | 1 - 1 | 2 - 60 | Logradouro. *ER:* ER36. |
| 108 | nro | E | 3 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 109 | xCpl | E | 3 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 110 | xBairro | E | 3 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 111 | cMun | E | 3 | C | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE). *ER:* ER3. |
| 112 | xMun | E | 3 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. |
| 113 | CEP | E | 3 | C | 0 - 1 | 8 | CEP. *ER:* ER41. Informar zeros não significativos |
| 114 | UF | E | 3 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D12. |
| 115 | fone | E | 3 | C | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 116 | CRT | E | 2 | N | 1 - 1 | 1 | Código do Regime Tributário. *Dom.:* D24. Informar:<br>1=Simples Nacional;<br>2=Simples Nacional, excesso sublimite de receita bruta;<br>3=Regime Normal;<br>4=Simples Nacional - Microempreendedor Individual – MEI. |
| 117 | **rem** | **G** | **1** | | **0 - 1** | | **Informações do Remetente das mercadorias transportadas pelo CTe. Poderá não ser informado para os CTe de redespacho intermediário e serviço vinculado a multimodal. Nos demais casos deverá sempre ser informado.** |
| 118 | CNPJ | CE | 2 | C | 1 - 1 | 14 | Número do CNPJ. *ER:* ER8. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros. Informar os zeros não significativos. |
| 119 | CPF | CE | 2 | C | 1 - 1 | 11 | Número do CPF. *ER:* ER9. Informar os zeros não significativos. |
| 120 | IE | E | 2 | C | 0 - 1 | 14 | Inscrição Estadual. *ER:* ER30. Informar a IE do remetente ou ISENTO se remetente é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o remetente não seja contribuinte do ICMS não informar a tag. |
| 121 | xNome | E | 2 | C | 1 - 1 | 2 - 60 | Razão social ou nome do remetente. *ER:* ER36. |
| 122 | xFant | E | 2 | C | 0 - 1 | 2 - 60 | <!-- p.58 -->Nome fantasia. *ER:* ER36. |
| 123 | fone | E | 2 | C | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 124 | **enderReme** | **G** | **2** | | **1 - 1** | | **Dados do endereço** |
| 125 | xLgr | E | 3 | C | 1 - 1 | 2 - 255 | Logradouro. *ER:* ER36. |
| 126 | nro | E | 3 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 127 | xCpl | E | 3 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 128 | xBairro | E | 3 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 129 | cMun | E | 3 | C | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE). *ER:* ER3. Informar 9999999 para operações com o exterior. |
| 130 | xMun | E | 3 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. Informar EXTERIOR para operações com o exterior. |
| 131 | CEP | E | 3 | C | 0 - 1 | 8 | CEP. *ER:* ER41. Informar os zeros não significativos |
| 132 | UF | E | 3 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D11. Informar EX para operações com o exterior. |
| 133 | cPais | E | 3 | C | 0 - 1 | 1 - 4 | Código do país. *ER:* ER31. Utilizar a tabela do BACEN |
| 134 | xPais | E | 3 | C | 0 - 1 | 2 - 60 | Nome do país. *ER:* ER36. |
| 135 | email | E | 2 | C | 0 - 1 | 1 - 60 | Endereço de email. *ER:* ER52. |
| 136 | **exped** | **G** | **1** | | **0 - 1** | | **Informações do Expedidor da Carga** |
| 137 | CNPJ | CE | 2 | C | 1 - 1 | 14 | Número do CNPJ. *ER:* ER8. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros. Informar os zeros não significativos. |
| 138 | CPF | CE | 2 | C | 1 - 1 | 11 | Número do CPF. *ER:* ER9. Informar os zeros não significativos. |
| 139 | IE | E | 2 | C | 0 - 1 | 14 | Inscrição Estadual. *ER:* ER30. Informar a IE do expedidor ou ISENTO se expedidor é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o expedidor não seja contribuinte do ICMS não informar a tag. |
| 140 | xNome | E | 2 | C | 1 - 1 | 2 - 60 | Razão Social ou Nome. *ER:* ER36. |
| 141 | fone | E | 2 | C | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 142 | **enderExped** | **G** | **2** | | **1 - 1** | | **Dados do endereço** |
| 143 | xLgr | E | 3 | C | 1 - 1 | 2 - 255 | Logradouro. *ER:* ER36. |
| 144 | nro | E | 3 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 145 | xCpl | E | 3 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 146 | xBairro | E | 3 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 147 | cMun | E | 3 | C | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE). *ER:* ER3. Informar 9999999 para operações com o exterior. |
| 148 | xMun | E | 3 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. Informar EXTERIOR para operações com o exterior. |
| 149 | CEP | E | 3 | C | 0 - 1 | 8 | CEP. *ER:* ER41. Informar os zeros não significativos |
| 150 | UF | E | 3 | C | 1 - 1 | 2 | <!-- p.59 -->Sigla da UF *Dom.:* D11. Informar EX para operações com o exterior. |
| 151 | cPais | E | 3 | C | 0 - 1 | 1 - 4 | Código do país *ER:* ER31. Utilizar a tabela do BACEN |
| 152 | xPais | E | 3 | C | 0 - 1 | 2 - 60 | Nome do país *ER:* ER36. |
| 153 | email | E | 2 | C | 0 - 1 | 1 - 60 | Endereço de email *ER:* ER52. |
| 154 | **receb** | **G** | **1** | | **0 - 1** | | **Informações do Recebedor da Carga** |
| 155 | CNPJ | CE | 2 | C | 1 - 1 | 14 | Número do CNPJ *ER:* ER8. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros. Informar os zeros não significativos. |
| 156 | CPF | CE | 2 | C | 1 - 1 | 11 | Número do CPF *ER:* ER9. Informar os zeros não significativos. |
| 157 | IE | E | 2 | C | 0 - 1 | 14 | Inscrição Estadual *ER:* ER30. Informar a IE do recebedor ou ISENTO se recebedor é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o recebedor não seja contribuinte do ICMS não informar o conteúdo. |
| 158 | xNome | E | 2 | C | 1 - 1 | 2 - 60 | Razão Social ou Nome *ER:* ER36. |
| 159 | fone | E | 2 | C | 0 - 1 | 6 - 14 | Telefone *ER:* ER6. |
| 160 | **enderReceb** | **G** | **2** | | **1 - 1** | | **Dados do endereço** |
| 161 | xLgr | E | 3 | C | 1 - 1 | 2 - 255 | Logradouro *ER:* ER36. |
| 162 | nro | E | 3 | C | 1 - 1 | 1 - 60 | Número *ER:* ER36. |
| 163 | xCpl | E | 3 | C | 0 - 1 | 1 - 60 | Complemento *ER:* ER36. |
| 164 | xBairro | E | 3 | C | 1 - 1 | 2 - 60 | Bairro *ER:* ER36. |
| 165 | cMun | E | 3 | C | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE) *ER:* ER3. Informar 9999999 para operações com o exterior. |
| 166 | xMun | E | 3 | C | 1 - 1 | 2 - 60 | Nome do município *ER:* ER36. Informar EXTERIOR para operações com o exterior. |
| 167 | CEP | E | 3 | C | 0 - 1 | 8 | CEP *ER:* ER41. Informar os zeros não significativos |
| 168 | UF | E | 3 | C | 1 - 1 | 2 | Sigla da UF *Dom.:* D11. Informar EX para operações com o exterior. |
| 169 | cPais | E | 3 | C | 0 - 1 | 1 - 4 | Código do país *ER:* ER31. Utilizar a tabela do BACEN |
| 170 | xPais | E | 3 | C | 0 - 1 | 2 - 60 | Nome do país *ER:* ER36. |
| 171 | email | E | 2 | C | 0 - 1 | 1 - 60 | Endereço de email *ER:* ER52. |
| 172 | **dest** | **G** | **1** | | **0 - 1** | | **Informações do Destinatário do CTe** Poderá não ser informado para os CTe de redespacho intermediário e serviço vinculado a multimodal. Nos demais casos deverá sempre ser informado. |
| 173 | CNPJ | CE | 2 | C | 1 - 1 | 14 | <!-- p.60 -->Número do CNPJ *ER:* ER8. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros. Informar os zeros não significativos. |
| 174 | CPF | CE | 2 | C | 1 - 1 | 11 | Número do CPF *ER:* ER9. Informar os zeros não significativos. |
| 175 | IE | E | 2 | C | 0 - 1 | 14 | Inscrição Estadual *ER:* ER30. Informar a IE do destinatário ou ISENTO se destinatário é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o destinatário não seja contribuinte do ICMS não informar o conteúdo. |
| 176 | xNome | E | 2 | C | 1 - 1 | 2 - 60 | Razão Social ou Nome do destinatário *ER:* ER36. |
| 177 | fone | E | 2 | C | 0 - 1 | 6 - 14 | Telefone *ER:* ER6. |
| 178 | ISUF | E | 2 | C | 0 - 1 | 8 - 9 | Inscrição na SUFRAMA *ER:* ER43. (Obrigatório nas operações com as áreas com benefícios de incentivos fiscais sob controle da SUFRAMA) |
| 179 | **enderDest** | **G** | **2** | | **1 - 1** | | **Dados do endereço** |
| 180 | xLgr | E | 3 | C | 1 - 1 | 2 - 255 | Logradouro *ER:* ER36. |
| 181 | nro | E | 3 | C | 1 - 1 | 1 - 60 | Número *ER:* ER36. |
| 182 | xCpl | E | 3 | C | 0 - 1 | 1 - 60 | Complemento *ER:* ER36. |
| 183 | xBairro | E | 3 | C | 1 - 1 | 2 - 60 | Bairro *ER:* ER36. |
| 184 | cMun | E | 3 | C | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE) *ER:* ER3. Informar 9999999 para operações com o exterior. |
| 185 | xMun | E | 3 | C | 1 - 1 | 2 - 60 | Nome do município *ER:* ER36. Informar EXTERIOR para operações com o exterior. |
| 186 | CEP | E | 3 | C | 0 - 1 | 8 | CEP *ER:* ER41. Informar os zeros não significativos |
| 187 | UF | E | 3 | C | 1 - 1 | 2 | Sigla da UF *Dom.:* D11. Informar EX para operações com o exterior. |
| 188 | cPais | E | 3 | C | 0 - 1 | 1 - 4 | Código do país *ER:* ER31. Utilizar a tabela do BACEN |
| 189 | xPais | E | 3 | C | 0 - 1 | 2 - 60 | Nome do país *ER:* ER36. |
| 190 | email | E | 2 | C | 0 - 1 | 1 - 60 | Endereço de email *ER:* ER52. |
| 191 | **vPrest** | **G** | **1** | | **1 - 1** | | **Valores da Prestação de Serviço** |
| 192 | vTPrest | E | 2 | C | 1 - 1 | 13, 2 | Valor Total da Prestação do Serviço *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais.<br>Pode conter zeros quando o CTe for de complemento de ICMS |
| 193 | vRec | E | 2 | C | 1 - 1 | 13, 2 | Valor a Receber *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 194 | **Comp** | **G** | **2** | | **0 - n** | | **Componentes do Valor da Prestação** |
| 195 | xNome | E | 3 | C | 1 - 1 | 1 - 15 | <!-- p.61 -->Nome do componente *ER:* ER36. Exxemplos: FRETE PESO, FRETE VALOR, SEC/CAT, ADEME, AGENDAMENTO, etc |
| 196 | vComp | E | 3 | C | 1 - 1 | 13, 2 | Valor do componente *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 197 | **imp** | **G** | **1** | | **1 - 1** | | **Informações relativas aos Impostos** |
| 198 | **ICMS** | **G** | **2** | | **1 - 1** | | **Informações relativas ao ICMS** |
| 199 | **ICMS00** | **CG** | **3** | | **1 - 1** | | **Prestação sujeito à tributação normal do ICMS** |
| 200 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do Serviço *Dom.:* D31. 00 - Tributação normal ICMS |
| 201 | vBC | E | 4 | C | 1 - 1 | 13, 2 | Valor da BC do ICMS *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 202 | pICMS | E | 4 | C | 1 - 1 | 3, 2 | Alíquota do ICMS *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 203 | vICMS | E | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 204 | **ICMS20** | **CG** | **3** | | **1 - 1** | | **Prestação sujeito à tributação com redução de BC do ICMS** |
| 205 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do serviço *Dom.:* D32. 20 - Tributação com BC reduzida do ICMS |
| 206 | pRedBC | E | 4 | C | 1 - 1 | 3, 2 | Percentual de redução da BC *ER:* ER15. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 207 | vBC | E | 4 | C | 1 - 1 | 13, 2 | Valor da BC do ICMS *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 208 | pICMS | E | 4 | C | 1 - 1 | 3, 2 | Alíquota do ICMS *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 209 | vICMS | E | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 210 | **ICMS45** | **CG** | **3** | | **1 - 1** | | **ICMS Isento, não Tributado ou diferido** |
| 211 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do Serviço *Dom.:* D33. Preencher com:<br>40 - ICMS isenção;<br>41 - ICMS não tributada;<br>51 - ICMS diferido |
| 212 | **ICMS60** | **CG** | **3** | | **1 - 1** | | **Tributação pelo ICMS60 - ICMS cobrado por substituição tributária. Responsabilidade do recolhimento do ICMS atribuído ao tomador ou 3º por ST** |
| 213 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do Serviço *Dom.:* D34. 60 - ICMS cobrado por substituição tributária |
| 214 | vBCSTRet | E | 4 | C | 1 - 1 | 13, 2 | Valor da BC do ICMS ST retido *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais.<br>Valor do frete sobre o qual será calculado o ICMS a ser substituído na Prestação. |
| 215 | vICMSSTRet | E | 4 | C | 1 - 1 | 13, 2 | <!-- p.62 -->Valor do ICMS ST retido *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais.<br>Resultado da multiplicação do “vBCSTRet” x “pICMSSTRet” – que será valor do ICMS a ser retido pelo Substituto. Podendo o valor do ICMS a ser retido efetivamente, sofrer ajustes conforme a opção tributária do transportador substituído. |
| 216 | pICMSSTRet | E | 4 | C | 1 - 1 | 3, 2 | Alíquota do ICMS *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais.<br>Percentual de Alíquota incidente na prestação de serviço de transporte. |
| 217 | vCred | E | 4 | C | 0 - 1 | 13, 2 | Valor do Crédito outorgado/Presumido *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais.<br>Preencher somente quando o transportador substituído, for optante pelo crédito outorgado previsto no Convênio 106/96 e corresponde ao percentual de 20% do valor do ICMS ST retido. |
| 218 | **ICMS90** | **CG** | **3** | | **1 - 1** | | **ICMS Outros** |
| 219 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do Serviço *Dom.:* D35. 90 - ICMS outros |
| 220 | pRedBC | E | 4 | C | 0 - 1 | 3, 2 | Percentual de redução da BC *ER:* ER15. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 221 | vBC | E | 4 | C | 1 - 1 | 13, 2 | Valor da BC do ICMS *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 222 | pICMS | E | 4 | C | 1 - 1 | 3, 2 | Alíquota do ICMS *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 223 | vICMS | E | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 224 | vCred | E | 4 | C | 0 - 1 | 13, 2 | Valor do Crédito Outorgado/Presumido *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 225 | **ICMSOutraUF** | **CG** | **3** | | **1 - 1** | | **ICMS devido à UF de origem da prestação, quando diferente da UF do emitente** |
| 226 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do Serviço *Dom.:* D35. 90 - ICMS Outra UF |
| 227 | pRedBCOutraUF | E | 4 | C | 0 - 1 | 3, 2 | Percentual de redução da BC *ER:* ER15. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 228 | vBCOutraUF | E | 4 | C | 1 - 1 | 13, 2 | <!-- p.63 -->Valor da BC do ICMS *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 229 | pICMSOutraUF | E | 4 | C | 1 - 1 | 3, 2 | Alíquota do ICMS *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais. |
| 230 | vICMSOutraUF | E | 4 | C | 1 - 1 | 13, 2 | Valor do ICMS devido outra UF *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 231 | **ICMSSN** | **CG** | **3** | | **1 - 1** | | **Simples Nacional** |
| 232 | CST | E | 4 | N | 1 - 1 | 2 | Classificação Tributária do Serviço *Dom.:* D36. 01 - Simples Nacional |
| 233 | indSN | E | 4 | N | 1 - 1 | 1 | Indica se o contribuinte é Simples Nacional 1=Sim *Dom.:* D20. |
| 234 | vTotTrib | E | 2 | C | 0 - 1 | 13, 2 | Valor Total dos Tributos *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 235 | infAdFisco | E | 2 | C | 0 - 1 | 1 - 2000 | Informações adicionais de interesse do Fisco *ER:* ER36. Norma referenciada, informações complementares etc. |
| 236 | **ICMSUFFim** | **G** | **2** | | **0 - 1** | | **Informações do ICMS de partilha com a UF de término do serviço de transporte na operação interestadual** Grupo a ser informado nas prestações interestaduais para consumidor final, não contribuinte do ICMS |
| 237 | vBCUFFim | E | 3 | C | 1 - 1 | 13, 2 | Valor da BC do ICMS na UF de término da prestação do serviço de transporte *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 238 | pFCPUFFim | E | 3 | C | 1 - 1 | 3, 2 | Percentual do ICMS relativo ao Fundo de Combate à pobreza (FCP) na UF de término da prestação do serviço de transporte *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais.<br>Alíquota adotada nas operações internas na UF do destinatário |
| 239 | pICMSUFFim | E | 3 | C | 1 - 1 | 3, 2 | Alíquota interna da UF de término da prestação do serviço de transporte *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais.<br>Alíquota adotada nas operações internas na UF do destinatário |
| 240 | pICMSInter | E | 3 | C | 1 - 1 | 3, 2 | Alíquota interestadual das UF envolvidas *ER:* ER12. 5 posições, sendo 3 inteiras e 2 casas decimais.<br>Alíquota interestadual das UF envolvidas |
| 241 | vFCPUFFim | E | 3 | C | 1 - 1 | 13, 2 | Valor do ICMS relativo ao Fundo de Combate á Pobreza (FCP) da UF de término da prestação *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 242 | vICMSUFFim | E | 3 | C | 1 - 1 | 13, 2 | Valor do ICMS de partilha para a UF de término da prestação do serviço de transporte *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 243 | vICMSUFIni | E | 3 | C | 1 - 1 | 13, 2 | Valor do ICMS de partilha para a UF de início da prestação do serviço de transporte *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 244 | **infCTeNorm** | **CG** | **1** | | **1 - 1** | | **Grupo de informações do CTe Normal e Substituto** |
| 245 | **infCarga** | **G** | **2** | | **1 - 1** | | **Informações da Carga do CTe** |
| 246 | vCarga | E | 3 | C | 0 - 1 | 13, 2 | <!-- p.64 -->Valor total da carga *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais.<br>Dever ser informado para todos os modais, com exceção para o Dutoviário. |
| 247 | proPred | E | 3 | C | 1 - 1 | 1 - 60 | Produto predominante *ER:* ER36. Informar a descrição do produto predominante |
| 248 | xOutCat | E | 3 | C | 0 - 1 | 1 - 30 | Outras características da carga *ER:* ER36. "FRIA", "GRANEL", "REFRIGERADA", "Medidas: 12X12X12" |
| 249 | **infQ** | **G** | **3** | | **1 - n** | | **Informações de quantidades da Carga do CTe** Para o Aéreo é obrigatório o preenchimento desse campo da seguinte forma.<br>1 - Peso Bruto, sempre em quilogramas (obrigatório);<br>2 - Peso Cubado; sempre em quilogramas;<br>3 - Quantidade de volumes, sempre em unidades (obrigatório);<br>4 - Cubagem, sempre em metros cúbicos (obrigatório apenas quando for impossível preencher as dimensões da(s) embalagem(ens) na tag xDime do leiaute do Aéreo). |
| 250 | cUnid | E | 4 | N | 1 - 1 | 2 | Código da Unidade de Medida *Dom.:* D25. Preencher com:<br>00-M3;<br>01-KG;<br>02-TON;<br>03-UNIDADE;<br>04-LITROS;<br>05-MMBTU |
| 251 | tpMed | E | 4 | C | 1 - 1 | 1 - 20 | Tipo da Medida *ER:* ER36. Exemplos:<br>PESO BRUTO, PESO DECLARADO, PESO CUBADO, PESO AFORADO, PESO AFERIDO, PESO BASE DE CÁLCULO, LITRAGEM, CAIXAS e etc |
| 252 | qCarga | E | 4 | C | 1 - 1 | 11, 4 | Quantidade *ER:* ER21. 15 posições, sendo 11 inteiras e 4 casas decimais. |
| 253 | vCargaAverb | E | 3 | C | 0 - 1 | 13, 2 | <!-- p.65 -->Valor da Carga para efeito de averbação *ER:* ER28. 15 posições, sendo 13 inteiras e 2 casas decimais.<br>Normalmente igual ao valor declarado da mercadoria, diferente por exemplo, quando a mercadoria transportada é isenta de tributos nacionais para exportação, onde é preciso averbar um valor maior, pois no caso de indenização, o valor a ser pago será maior |
| 254 | **infDoc** | **G** | **2** | | **0 - 1** | | **Informações dos documentos transportados pelo CTe<br>Opcional para Redespacho Intermediario e Serviço vinculado a multimodal.** Poderá não ser informado para os CTe de redespacho intermediário e serviço vinculado a multimodal. Nos demais casos deverá sempre ser informado. |
| 255 | **infNF** | **CG** | **3** | | **1 - n** | | **Informações das NF** Este grupo deve ser informado quando o documento originário for NF |
| 256 | nRoma | E | 4 | C | 0 - 1 | 1 - 20 | Número do Romaneio da NF *ER:* ER36. |
| 257 | nPed | E | 4 | C | 0 - 1 | 1 - 20 | Número do Pedido da NF *ER:* ER36. |
| 258 | mod | E | 4 | N | 1 - 1 | 2 | Modelo da Nota Fiscal *Dom.:* D8. Preencher com:<br>01 - NF Modelo 01/1A e Avulsa;<br>04 - NF de Produtor |
| 259 | serie | E | 4 | C | 1 - 1 | 1 - 3 | Série *ER:* ER36. |
| 260 | nDoc | E | 4 | C | 1 - 1 | 1 - 20 | Número *ER:* ER36. |
| 261 | dEmi | E | 4 | D | 1 - 1 | 10 | Data de Emissão *ER:* ER11. Formato AAAA-MM-DD |
| 262 | vBC | E | 4 | C | 1 - 1 | 13, 2 | Valor da Base de Cálculo do ICMS *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 263 | vICMS | E | 4 | C | 1 - 1 | 13, 2 | Valor Total do ICMS *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 264 | vBCST | E | 4 | C | 1 - 1 | 13, 2 | Valor da Base de Cálculo do ICMS ST *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 265 | vST | E | 4 | C | 1 - 1 | 13, 2 | Valor Total do ICMS ST *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 266 | vProd | E | 4 | C | 1 - 1 | 13, 2 | Valor Total dos Produtos *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 267 | vNF | E | 4 | C | 1 - 1 | 13, 2 | Valor Total da NF *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 268 | nCFOP | E | 4 | C | 1 - 1 | 4 | CFOP Predominante *ER:* ER51. CFOP da NF ou, na existência de mais de um, predominância pelo critério de valor econômico. |
| 269 | nPeso | E | 4 | C | 0 - 1 | 12, 3 | <!-- p.66 -->Peso total em Kg *ER:* ER24. 15 posições, sendo 12 inteiras e 3 casas decimais. |
| 270 | PIN | E | 4 | C | 0 - 1 | 2 - 9 | PIN SUFRAMA *ER:* ER47. PIN atribuído pela SUFRAMA para a operação. |
| 271 | dPrev | E | 4 | D | 0 - 1 | 10 | Data prevista de entrega *ER:* ER11. Formato AAAA-MM-DD |
| 272 | **infUnidCarga** | **G** | **4** | | **0 - n** | | **Informações das Unidades de Carga (Containeres/ULD/Outros)** Dispositivo de carga utilizada (Unit Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu. |
| 273 | tpUnidCarga | E | 5 | N | 1 - 1 | 1 | Tipo da Unidade de Carga *Dom.:* D10. 1 - Container<br>2 - ULD<br>3 - Pallet<br>4 - Outros |
| 274 | idUnidCarga | E | 5 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Carga *ER:* ER49. Informar a identificação da unidade de carga, por exemplo: número do container. |
| 275 | **lacUnidCarga** | **G** | **5** | | **0 - n** | | **Lacres das Unidades de Carga** |
| 276 | nLacre | E | 6 | C | 1 - 1 | 1 - 20 | Número do lacre *ER:* ER36. |
| 277 | qtdRat | E | 5 | C | 0 - 1 | 3, 2<br>3, 3 | Quantidade rateada (Peso,Volume) *ER:* ER14. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| 278 | **infUnidTransp** | **G** | **4** | | **0 - n** | | **Informações das Unidades de Transporte (Carreta/Reboque/Vagão)** Deve ser preenchido com as informações das unidades de transporte utilizadas. |
| 279 | tpUnidTransp | E | 5 | N | 1 - 1 | 1 | Tipo da Unidade de Transporte *Dom.:* D9. 1 - Rodoviário Tração<br>2 - Rodoviário Reboque<br>3 - Navio<br>4 - Balsa<br>5 - Aeronave<br>6 - Vagão<br>7 - Outros |
| 280 | idUnidTransp | E | 5 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Transporte *ER:* ER49. Informar a identificação conforme o tipo de unidade de transporte.<br>Por exemplo: para rodoviário tração ou reboque deverá preencher com a placa do veículo. |
| 281 | **lacUnidTransp** | **G** | **5** | | **0 - n** | | **Lacres das Unidades de Transporte** |
| 282 | nLacre | E | 6 | C | 1 - 1 | 1 - 20 | Número do lacre *ER:* ER36. |
| 283 | **infUnidCarga** | **G** | **5** | | **0 - n** | | **Informações das Unidades de Carga (Containeres/ULD/Outros)** Dispositivo de carga utilizada (Unit Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu. |
| 284 | tpUnidCarga | E | 6 | N | 1 - 1 | 1 | <!-- p.67 -->Tipo da Unidade de Carga *Dom.:* D10. 1 - Container<br>2 - ULD<br>3 - Pallet<br>4 - Outros |
| 285 | idUnidCarga | E | 6 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Carga *ER:* ER49. Informar a identificação da unidade de carga, por exemplo: número do container. |
| **286** | **lacUnidCarga** | **G** | **6** | | **0 - n** | | **Lacres das Unidades de Carga** |
| 287 | nLacre | E | 7 | C | 1 - 1 | 1 - 20 | Número do lacre *ER:* ER36. |
| 288 | qtdRat | E | 6 | C | 0 - 1 | 3, 2<br>3, 3 | Quantidade rateada (Peso,Volume) *ER:* ER14. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| 289 | qtdRat | E | 5 | C | 0 - 1 | 3, 2<br>3, 3 | Quantidade rateada (Peso,Volume) *ER:* ER14. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| **290** | **infNFe** | **CG** | **3** | | **1 - n** | | **Informações das NF-e** |
| 291 | chave | E | 4 | C | 1 - 1 | 44 | Chave de acesso da NF-e *ER:* ER4. |
| 292 | PIN | E | 4 | C | 0 - 1 | 2 - 9 | PIN SUFRAMA *ER:* ER47. PIN atribuído pela SUFRAMA para a operação. |
| 293 | dPrev | E | 4 | D | 0 - 1 | 10 | Data prevista de entrega *ER:* ER11. Formato AAAA-MM-DD |
| **294** | **infUnidCarga** | **G** | **4** | | **0 - n** | | **Informações das Unidades de Carga (Containeres/ULD/Outros). Dispositivo de carga utilizada (Unit Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu.** |
| 295 | tpUnidCarga | E | 5 | N | 1 - 1 | 1 | Tipo da Unidade de Carga *Dom.:* D10. 1 - Container<br>2 - ULD<br>3 - Pallet<br>4 - Outros |
| 296 | idUnidCarga | E | 5 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Carga *ER:* ER49. Informar a identificação da unidade de carga, por exemplo: número do container. |
| **297** | **lacUnidCarga** | **G** | **5** | | **0 - n** | | **Lacres das Unidades de Carga** |
| 298 | nLacre | E | 6 | C | 1 - 1 | 1 - 20 | Número do lacre *ER:* ER36. |
| 299 | qtdRat | E | 5 | C | 0 - 1 | 3, 2<br>3, 3 | Quantidade rateada (Peso,Volume) *ER:* ER14. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| **300** | **infUnidTransp** | **G** | **4** | | **0 - n** | | **Informações das Unidades de Transporte (Carreta/Reboque/Vagão). Deve ser preenchido com as informações das unidades de transporte utilizadas.** |
| 301 | tpUnidTransp | E | 5 | N | 1 - 1 | 1 | <!-- p.68 -->Tipo da Unidade de Transporte *Dom.:* D9. 1 - Rodoviário Tração<br>2 - Rodoviário Reboque<br>3 - Navio<br>4 - Balsa<br>5 - Aeronave<br>6 - Vagão<br>7 - Outros |
| 302 | idUnidTransp | E | 5 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Transporte *ER:* ER49. Informar a identificação conforme o tipo de unidade de transporte.<br>Por exemplo: para rodoviário tração ou reboque deverá preencher com a placa do veículo. |
| **303** | **lacUnidTransp** | **G** | **5** | | **0 - n** | | **Lacres das Unidades de Transporte** |
| 304 | nLacre | E | 6 | C | 1 - 1 | 1 - 20 | Número do lacre *ER:* ER36. |
| **305** | **infUnidCarga** | **G** | **5** | | **0 - n** | | **Informações das Unidades de Carga (Containeres/ULD/Outros). Dispositivo de carga utilizada (Unit Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu.** |
| 306 | tpUnidCarga | E | 6 | N | 1 - 1 | 1 | Tipo da Unidade de Carga *Dom.:* D10. 1 - Container<br>2 - ULD<br>3 - Pallet<br>4 - Outros |
| 307 | idUnidCarga | E | 6 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Carga *ER:* ER49. Informar a identificação da unidade de carga, por exemplo: número do container. |
| **308** | **lacUnidCarga** | **G** | **6** | | **0 - n** | | **Lacres das Unidades de Carga** |
| 309 | nLacre | E | 7 | C | 1 - 1 | 1 - 20 | Número do lacre *ER:* ER36. |
| 310 | qtdRat | E | 6 | C | 0 - 1 | 3, 2<br>3, 3 | Quantidade rateada (Peso,Volume) *ER:* ER14. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| 311 | qtdRat | E | 5 | C | 0 - 1 | 3, 2<br>3, 3 | Quantidade rateada (Peso,Volume) *ER:* ER14. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| **312** | **infOutros** | **CG** | **3** | | **1 - n** | | **Informações dos demais documentos** |
| 313 | tpDoc | E | 4 | N | 1 - 1 | 2 | Tipo de documento originário *Dom.:* D26. Preencher com:<br>00 - Declaração;<br>10 - Dutoviário;<br>59 - CF-e SAT;<br>65 - NFC-e;<br>99 - Outros |
| 314 | descOutros | E | 4 | C | 0 - 1 | 1 - 100 | Descrição do documento *ER:* ER36. |
| 315 | nDoc | E | 4 | C | 0 - 1 | 1 - 20 | <!-- p.69 -->Número *ER:* ER36. |
| 316 | dEmi | E | 4 | D | 0 - 1 | 10 | Data de Emissão *ER:* ER11. Formato AAAA-MM-DD |
| 317 | vDocFisc | E | 4 | C | 0 - 1 | 13, 2 | Valor do documento *ER:* ER28. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 318 | dPrev | E | 4 | D | 0 - 1 | 10 | Data prevista de entrega *ER:* ER11. Formato AAAA-MM-DD |
| **319** | **infUnidCarga** | **G** | **4** | | **0 - n** | | **Informações das Unidades de Carga (Containeres/ULD/Outros). Dispositivo de carga utilizada (Unit Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu.** |
| 320 | tpUnidCarga | E | 5 | N | 1 - 1 | 1 | Tipo da Unidade de Carga *Dom.:* D10. 1 - Container<br>2 - ULD<br>3 - Pallet<br>4 - Outros |
| 321 | idUnidCarga | E | 5 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Carga *ER:* ER49. Informar a identificação da unidade de carga, por exemplo: número do container. |
| **322** | **lacUnidCarga** | **G** | **5** | | **0 - n** | | **Lacres das Unidades de Carga** |
| 323 | nLacre | E | 6 | C | 1 - 1 | 1 - 20 | Número do lacre *ER:* ER36. |
| 324 | qtdRat | E | 5 | C | 0 - 1 | 3, 2<br>3, 3 | Quantidade rateada (Peso,Volume) *ER:* ER14. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| **325** | **infUnidTransp** | **G** | **4** | | **0 - n** | | **Informações das Unidades de Transporte (Carreta/Reboque/Vagão). Deve ser preenchido com as informações das unidades de transporte utilizadas.** |
| 326 | tpUnidTransp | E | 5 | N | 1 - 1 | 1 | Tipo da Unidade de Transporte *Dom.:* D9. 1 - Rodoviário Tração<br>2 - Rodoviário Reboque<br>3 - Navio<br>4 - Balsa<br>5 - Aeronave<br>6 - Vagão<br>7 - Outros |
| 327 | idUnidTransp | E | 5 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Transporte *ER:* ER49. Informar a identificação conforme o tipo de unidade de transporte.<br>Por exemplo: para rodoviário tração ou reboque deverá preencher com a placa do veículo. |
| **328** | **lacUnidTransp** | **G** | **5** | | **0 - n** | | **Lacres das Unidades de Transporte** |
| 329 | nLacre | E | 6 | C | 1 - 1 | 1 - 20 | Número do lacre *ER:* ER36. |
| **330** | **infUnidCarga** | **G** | **5** | | **0 - n** | | **Informações das Unidades de Carga (Containeres/ULD/Outros). Dispositivo de carga utilizada (Unit Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu.** |
| 331 | tpUnidCarga | E | 6 | N | 1 - 1 | 1 | <!-- p.70 -->Tipo da Unidade de Carga *Dom.:* D10. 1 - Container<br>2 - ULD<br>3 - Pallet<br>4 - Outros |
| 332 | idUnidCarga | E | 6 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Carga *ER:* ER49. Informar a identificação da unidade de carga, por exemplo: número do container. |
| **333** | **lacUnidCarga** | **G** | **6** | | **0 - n** | | **Lacres das Unidades de Carga** |
| 334 | nLacre | E | 7 | C | 1 - 1 | 1 - 20 | Número do lacre *ER:* ER36. |
| 335 | qtdRat | E | 6 | C | 0 - 1 | 3, 2<br>3, 3 | Quantidade rateada (Peso,Volume) *ER:* ER14. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| 336 | qtdRat | E | 5 | C | 0 - 1 | 3, 2<br>3, 3 | Quantidade rateada (Peso,Volume) *ER:* ER14. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| **337** | **docAnt** | **G** | **2** | | **0 - 1** | | **Documentos de Transporte Anterior** |
| **338** | **emiDocAnt** | **G** | **3** | | **1 - n** | | **Emissor do documento anterior** |
| 339 | CNPJ | CE | 4 | C | 1 - 1 | 14 | Número do CNPJ *ER:* ER8. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros. Informar os zeros não significativos. |
| 340 | CPF | CE | 4 | C | 1 - 1 | 11 | Número do CPF *ER:* ER9. Informar os zeros não significativos. |
| # | --- x --- | - | 4 | - | 0 - 1 | | Sequência XML |
| 342 | IE | ES | 4 | C | 1 - 1 | 14 | Inscrição Estadual *ER:* ER29. |
| 343 | UF | ES | 4 | C | 1 - 1 | 2 | Sigla da UF *Dom.:* D11. Informar EX para operações com o exterior. |
| 344 | xNome | E | 4 | C | 1 - 1 | 1 - 60 | Razão Social ou Nome do expedidor *ER:* ER36. |
| **345** | **idDocAnt** | **G** | **4** | | **1 - 2** | | **Informações de identificação dos documentos de Transporte Anterior** |
| **346** | **idDocAntPap** | **CG** | **5** | | **1 - n** | | **Documentos de transporte anterior em papel** |
| 347 | tpDoc | E | 6 | N | 1 - 1 | 2 | Tipo do Documento de Transporte Anterior *Dom.:* D38. Preencher com:<br>07-ATRE;<br>08-DTA (Despacho de Trânsito Aduaneiro);<br>09-Conhecimento Aéreo Internacional;<br>10 – Conhecimento - Carta de Porte Internacional;<br>11 – Conhecimento Avulso;<br>12-TIF (Transporte Internacional Ferroviário); 13-BL (Bill of Lading) |
| 348 | serie | E | 6 | C | 1 - 1 | 1 - 3 | <!-- p.71 -->Série do Documento Fiscal *ER:* ER36. |
| 349 | subser | E | 6 | C | 0 - 1 | 1 - 2 | Série do Documento Fiscal *ER:* ER36. |
| 350 | nDoc | E | 6 | C | 1 - 1 | 1 - 30 | Número do Documento Fiscal *ER:* ER36. |
| 351 | dEmi | E | 6 | D | 1 - 1 | 10 | Data de emissão (AAAA-MM-DD) *ER:* ER11. |
| **352** | **idDocAntEle** | **CG** | **5** | | **1 - n** | | **Documentos de transporte anterior eletrônicos** |
| 353 | chCTe | E | 6 | C | 1 - 1 | 44 | Chave de acesso do CTe *ER:* ER4. |
| **354** | **infModal** | **G** | **2** | | **1 - 1** | | **Informações do modal** |
| 355 | versaoModal | A | 3 | C | 1 - 1 | 4 | Versão do leiaute específico para o Modal *ER:* ER48. |
| 356 | xs:any | E | 3 | C | 1 - 1 | | XML do modal<br>Insira neste local o XML específico do modal (rodoviário, aéreo, ferroviário, aquaviário ou dutoviário).<br>O elemento do tipo -any- permite estender o documento XML com elementos não especificados pelo schema.<br>Insira neste local - any- o XML específico do modal (rodoviário, aéreo, ferroviário, aquaviário ou dutoviário). A especificação do schema XML para cada modal pode ser encontrada nos arquivos que acompanham este pacote de liberação:<br>Rodoviário - ver arquivo CTeModalRodoviario_v9.99<br>Aéreo - ver arquivo CTeModalAereo_v9.99<br>Aquaviário - arquivo CTeModalAquaviario_v9.99<br>Ferroviário - arquivo CTeModalFerroviario_v9.99<br>Dutoviário - arquivo CTeModalDutoviario_v9.99<br><br>Onde v9.99 é a a designação genérica para a versão do arquivo. Por exemplo, o arquivo para o schema do modal Rodoviário na versão 1.04 será denominado "CTeModalRodoviario_v4.00". |
| **357** | **veicNovos** | **G** | **2** | | **0 - n** | | **informações dos veículos transportados** |
| 358 | chassi | E | 3 | C | 1 - 1 | 17 | Chassi do veículo *ER:* ER49. |
| 359 | cCor | E | 3 | C | 1 - 1 | 1 - 4 | <!-- p.72 -->Cor do veículo *ER:* ER36. Código de cada montadora |
| 360 | xCor | E | 3 | C | 1 - 1 | 1 - 40 | Descrição da cor *ER:* ER36. |
| 361 | cMod | E | 3 | C | 1 - 1 | 1 - 6 | Código Marca Modelo *ER:* ER36. Utilizar tabela RENAVAM |
| 362 | vUnit | E | 3 | C | 1 - 1 | 13, 2 | Valor Unitário do Veículo *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 363 | vFrete | E | 3 | C | 1 - 1 | 13, 2 | Frete Unitário *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| **364** | **cobr** | **G** | **2** | | **0 - 1** | | **Dados da cobrança do CTe** |
| **365** | **fat** | **G** | **3** | | **0 - 1** | | **Dados da fatura** |
| 366 | nFat | E | 4 | C | 0 - 1 | 1 - 60 | Número da fatura *ER:* ER36. |
| 367 | vOrig | E | 4 | C | 0 - 1 | 13, 2 | Valor original da fatura *ER:* ER28. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 368 | vDesc | E | 4 | C | 0 - 1 | 13, 2 | Valor do desconto da fatura *ER:* ER28. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 369 | vLiq | E | 4 | C | 0 - 1 | 13, 2 | Valor líquido da fatura *ER:* ER28. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| **370** | **dup** | **G** | **3** | | **0 - n** | | **Dados das duplicatas** |
| 371 | nDup | E | 4 | C | 0 - 1 | 1 - 60 | Número da duplicata *ER:* ER36. |
| 372 | dVenc | E | 4 | D | 0 - 1 | 10 | Data de vencimento da duplicata (AAAA-MM-DD) *ER:* ER11. |
| 373 | vDup | E | 4 | C | 0 - 1 | 13, 2 | Valor da duplicata *ER:* ER28. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| **374** | **infCteSub** | **G** | **2** | | **0 - 1** | | **Informações do CTe de substituição** |
| 375 | chCte | E | 3 | C | 1 - 1 | 44 | Chave de acesso do CTe a ser substituído (original) *ER:* ER4. |
| 376 | indAlteraToma | E | 3 | N | 0 - 1 | 1 | Indicador de CTe Alteração de Tomador *Dom.:* D20. |
| **377** | **infGlobalizado** | **G** | **2** | | **0 - 1** | | **Informações do CTe Globalizado** |
| 378 | xObs | E | 3 | C | 1 - 1 | 15 - 256 | Preencher com informações adicionais, legislação do regime especial, etc *ER:* ER36. |
| **379** | **infServVinc** | **G** | **2** | | **0 - 1** | | **Informações do Serviço Vinculado a Multimodal** |
| **380** | **infCTeMultimodal** | **G** | **3** | | **1 - n** | | **informações do CTe multimodal vinculado** |
| 381 | chCTeMultimodal | E | 4 | C | 1 - 1 | 44 | Chave de acesso do CTe Multimodal *ER:* ER4. |
| **382** | **infCteComp** | **CG** | **1** | | **1 - 10** | | **Detalhamento do CTe complementado** |
| 383 | chCTe | E | 2 | C | 1 - 1 | 44 | Chave do CTe complementado *ER:* ER4. |
| **384** | **autXML** | **G** | **1** | | **0 - 10** | | **Autorizados para download do XML do DF-e. Informar CNPJ ou CPF. Preencher os zeros não significativos.** |
| 385 | CNPJ | CE | 2 | C | 1 - 1 | 14 | CNPJ do autorizado *ER:* ER5. Informar zeros não significativos |
| 386 | CPF | CE | 2 | C | 1 - 1 | 11 | <!-- p.73 -->CPF do autorizado *ER:* ER9. Informar zeros não significativos |
| **387** | **infRespTec** | **G** | **1** | | **0 - 1** | | **Informações do Responsável Técnico pela emissão do DF-e** |
| 388 | CNPJ | E | 2 | C | 1 - 1 | 14 | CNPJ da pessoa jurídica responsável técnica pelo sistema utilizado na emissão do documento fiscal eletrônico *ER:* ER5. Informar o CNPJ da pessoa jurídica desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. |
| 389 | xContato | E | 2 | C | 1 - 1 | 2 - 60 | Nome da pessoa a ser contatada *ER:* ER36. Informar o nome da pessoa a ser contatada na empresa desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. No caso de pessoa física, informar o respectivo nome. |
| 390 | email | E | 2 | C | 1 - 1 | 1 - 60 | Email da pessoa jurídica a ser contatada *ER:* ER52. |
| 391 | fone | E | 2 | C | 1 - 1 | 7 - 12 | Telefone da pessoa jurídica a ser contatada *ER:* ER50. Preencher com o Código DDD + número do telefone. |
| # | --- x --- | - | 0 | - | 0 - 1 | | Sequência XML |
| 393 | idCSRT | ES | 2 | C | 1 - 1 | 3 | Identificador do código de segurança do responsável técnico *ER:* ER35. Identificador do CSRT utilizado para geração do hash |
| 394 | hashCSRT | ES | 2 | C | 1 - 1 | 20 | Hash do token do código de segurança do responsável técnico. O hashCSRT é o resultado das funções SHA-1 e base64 do token CSRT fornecido pelo fisco + chave de acesso do DF-e. (Implementação em futura NT)<br>Observação: 28 caracteres são representados no schema como 20 bytes do tipo base64Binary |
| **395** | **infSolicNFF** | **G** | **1** | | **0 - 1** | | **Grupo de informações do pedido de emissão da Nota Fiscal Fácil** |
| 396 | xSolic | E | 2 | C | 1 - 1 | 2 - 2000 | Solicitação do pedido de emissão da NFF. *ER:* ER36. Será preenchido com a totalidade de campos informados no aplicativo emissor serializado. |
| **397** | **infPAA** | **G** | **1** | | **0 - 1** | | **Grupo de Informação do Provedor de Assinatura e Autorização** |
| 398 | CNPJPAA | E | 2 | C | 1 - 1 | 14 | CNPJ do Provedor de Assinatura e Autorização *ER:* ER8. |
| **399** | **PAASignature** | **G** | **2** | | **1 - 1** | | **Assinatura RSA do Emitente para DFe gerados por PAA** |
| 400 | SignatureValue | E | 3 | B64 | 1 - 1 | | Assinatura digital padrão RSA. Converter o atributo Id do DFe para array de bytes e assinar com a chave privada do RSA com algoritmo SHA1 gerando um valor no formato base64. |
| **401** | **RSAKeyValue** | **G** | **3** | | **1 - 1** | | <!-- p.74 -->**Chave Pública no padrão XML RSA Key** |
| 402 | Modulus | E | 4 | B64 | 1 - 1 | | |
| 403 | Exponent | E | 4 | B64 | 1 - 1 | | |
| **404** | **infCTeSupl** | **G** | **0** | | **0 - 1** | | **Informações suplementares do CTe** |
| 405 | qrCodCTe | E | 1 | C | 1 - 1 | 50 - 1000 | Texto com o QR-Code impresso no DACTE *ER:* ER57. |
| 406 | | E | 0 | C | 1 - 1 | | ds:Signature |
