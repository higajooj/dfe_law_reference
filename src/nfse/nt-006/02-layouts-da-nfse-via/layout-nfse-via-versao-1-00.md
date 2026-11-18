<!-- p.06 -->

# *Layout* da NFS-e Via – Versão 1.00

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **V01** | **NFS-e Via** | **Raiz** | **-** | **-** | **-** | **-** | **-** |
| V02 | versao | A | V01 | C | 1-1 | 1-4V2 | Versão do leiaute da NFS-e Via. |
| **V03** | **infNFSeVia** | **G** | **V01** | **-** | **1-1** | **-** | **Grupo de informações da NFS-e Via** |
| V04 | y<!-- REVISAR p.06: campo grafado "y" no original (provavelmente "Id", identificador da TAG assinada); transcrito literalmente --> | ID | V03 | C | 1-1 | 53 | Informar o identificador precedido do literal ‘ID’.<br><br>A formação do identificador de 53 posições da NFS-e Via é:<br><br>"VIA" +<br>Cód.da localidade/trecho (7) +<br>Amb.Ger. (1) +<br>Inscrição Federal (14) +<br>nNFS-e Via (13) +<br>serie (3) +<br>AnoMes Emis. da NFS-e Via (4) +<br>Cód.Num. (7) +<br>DV (1)<br><br>Código numérico de 7 Posições numérico, possivelmente aleatório, gerado pelo emitente. |
| V05 | tpAmb | E | V03 | N | 1-1 | 1 | Identificação do tipo de ambiente no Sistema Nacional NFS-e Via:<br>1 - Produção;<br>2 - Homologação; |
| V06 | verAplic | E | V03 | C | 1-1 | 1-20 | Versão da aplicação que gerou a NFS-e Via |
| V07 | cStat | E | V03 | N | 1-1 | 3 | Situações possíveis:<br>100 - NFS-e Via Gerada;<br>101 - NFS-e Via de Substituição Gerada;<br>102 - NFS-e Via de Decisão Judicial; |
| V08 | dhEmi | E | V03 | D | 1-1 | 8 | Data e hora da emissão da NFS-e Via.<br>Data e hora no formato UTC (Universal Coordinated Time):<br>AAAA-MM-DDThh:mm:ssTZD |
| V09 | dhCompet | E | V03 | D | 1-1 | 8 | Data e hora de competência da prestação do serviço: passagem veicular.<br>Data e hora no formato UTC (Universal Coordinated Time):<br>AAAA-MM-DDThh:mm:ssTZD |
| **V10** | **subst** | **G** | **V03** | **-** | **0-1** | **-** | **Grupo de informações relativas à NFS-e Via a ser substituída** |
| V11 | chSubstda | E | V10 | C | 1-1 | 50 | Chave de Acesso da NFS-e Via a ser substituída. |
| <!-- p.07 -->V12 | cMotivo | E | V10 | N | 1-1 | 2 | Código de justificativa para substituição de NFS-e Via:<br><br>03 - Inclusão Retroativa de Imunidade/Isenção para NFS-e Via;<br>04 - Exclusão Retroativa de Imunidade/Isenção para NFS-e Via;<br>05 - Rejeição de NFS-e Via pelo tomador ou pelo intermediário se responsável pelo recolhimento do tributo;<br>06 - Alteração de parâmetros de cadastro do trecho da concessão;<br>07 - Erro na identificação do veículo;<br>99 - Outros; |
| V13 | xMotivo | E | V10 | C | 0-1 | 15-255 | Descrição do motivo da substituição da NFS-e Via quando o emitente deve descrever o motivo da substituição para outros motivos (cMotivo = 99). |
| **V14** | **fornec** | **G** | **V03** | **-** | **1-1** | **-** | **Grupo de informações relativas ao fornecedor(prestador) do serviço** |
| V15 | CNPJ | CE | V14 | C | 1-1 | 14 | Número da inscrição federal (CNPJ) do fornecedor(prestador) do serviço: concessionária |
| V16 | xNome | E | V14 | C | 0-1 | 150 | Nome / Nome Empresarial do fornecedor. |
| V17 | cMun | E | V14 | N | 1-1 | 7 | Código do município do endereço do fornecedor do serviço.<br>(Tabela do IBGE) |
| **V18** | **serv** | **G** | **V03** | **G** | **1-1** | **-** | **Grupo de informações relativas ao serviço prestado.** |
| V19 | cLocOper | E | V18 | N | 1-1 | 7 | Código da localidade da operação (prestação) do serviço.<br>Obs: Para a exploração de via, o local da operação (prestação) é o trecho de concessão de exploração de via para a qual a NFS-e Via foi emitida. Também é o local de incidência. O local da operação, para o IBS e para a CBS, será o mesmo local de incidência para o ISSQN. |
| V20 | xLocOper | E | V18 | C | 1-1 | 150 | Descrição do código de 7 dígitos referente ao local da Operação(prestação) do serviço: nome dado ao trecho no cadastro pela concessionária. |
| V21 | cPracaEmi | E | V03 | N | 1-1 | 7 | Código da Praça de Pedágio, gerado no portal da Concessionária no momento do cadastro do trecho, onde a NFS-e Via foi emitida. |
| V22 | xPracaEmi | E | V03 | C | 1-1 | 150 | Nome da Praça de Pedágio onde a NFS-e Via foi emitida. |
| V23 | kmPracaEmi | E | V03 | N | 1-1 | 7 | Quilômetro da via onde está localizada a praça de pedágio. |
| V24 | cLocEmi | E | V03 | N | 1-1 | 7 | Código de 7 dígitos do município (IBGE) onde está localizada a praça de pedágio. |
| <!-- p.08 -->V25 | xLocEmi | E | V03 | C | 1-1 | 150 | Descrição do código de 7 dígitos do município (IBGE) onde está localizada a praça de pedágio. |
| V26 | nNFSeVia | E | V03 | N | 1-1 | 1-13 | Número sequencial, por praça e por equipamento, de pedágio, da NFS-eVIA gerado pelo emitente e tipo de emitente da NFS-eVIA. |
| V27 | serie | E | V03 | C | 1-1 | 3 | Uma série para cada praça e/ou equipamento ou número da pista de cobrança. |
| V28 | cTribNac | E | V18 | N | 1-1 | 6 | Código de tributação nacional do ISSQN. Valor fixo [220101] |
| V29 | cNBS | E | V18 | N | 1-1 | 9 | Código NBS correspondente ao serviço prestado. Valor Fixo [106042100] |
| **V30** | **explVia** | **G** | **V18** | **-** | **1-1** | **-** | **Grupo de informações relativas a atividades de Exploração de Rodovia** |
| V31 | categVeic | E | V30 | N | 1-1 | 2 | Categorias de veículos para cobrança:<br><br>00 - Categoria de Veículos (tipo não informado na nota de origem);<br>01 - Automóvel, caminhonete e furgão - (2 eixos);<br>02 - Caminhão leve, ônibus, caminhão trator e furgão - (2 eixos);<br>03 - Automóvel e caminhonete com semireboque - (3 eixos);<br>04 - Caminhão, caminhão-trator, caminhão-trator com semi-reboque e ônibus - (3 eixos);<br>05 - Automóvel e caminhonete com reboque - (4 eixos);<br>06 - Caminhão com reboque e caminhãotrator com semi-reboque - (4 eixos);<br>07 - Caminhão com reboque e caminhãotrator com semi-reboque - (5 eixos);<br>08 - Caminhão com reboque e caminhãotrator com semi-reboque - (6 eixos);<br>09 - Caminhão com reboque e caminhãotrator com semi-reboque - (7 eixos);<br>10 - Caminhão com reboque e caminhãotrator com semi-reboque - (8 eixos);<br>11 - Motocicletas, motonetas e bicicletas motorizadas;<br>12 - Veículo com gratuidade;<br>99 - Cobrança Especial. |
| V32 | sentido | E | V30 | C | 1-1 | 1-3 | Orientação de passagem do veículo:<br><br>Ângulo em graus a partir do norte geográfico em sentido horário, número inteiro de 0 a 359, onde 0º seria o norte, 90º o leste, 180º o sul, 270º o oeste. Precisão mínima de 10. |
| V33 | placa | E | V30 | C | 1-1 | 1 - 10 | Placa do veículo até 10 caracteres. |
| V34 | codAcessoPed | E | V30 | C | 1-1 | 17 | Código de acesso gerado automaticamente pelo sistema emissor da concessionária. |
| V35 | modPassagem | E | V30 | C | 1-1 | 1 | Modalidade da Passagem:<br><br>1 - Fluxo Livre<br>2 - Manual<br>3 - Automático<br>4 - Semi-Automático<br>5 - Outros |
| <!-- p.09 -->V36 | codContrato | E | V30 | C | 1-1 | 4 | Código de contrato do cadastro da concessionária. |
| V37 | xInfComp | E | V30 | C | 0-1 | 2000 | Campo livre para preenchimento pelo contribuinte. |
| **V38** | **valores** | **G** | **V03** | **-** | **1-1** | **-** | **Grupo de informações relativas à valores do serviço prestado** |
| V39 | vServ | E | V38 | N | 1-1 | 1-15V2 | Valor monetário do serviço (R$). |
| V40 | modPagamento | E | V38 | C | 1-1 | 1 | Modalidade de pagamento:<br>1. Débito ou pix<br>2. Crédito<br>3. Dinheiro<br>4. Eletrônico<br>5. Pagamento posterior |
| **V41** | **vDescCondIncond** | **G** | **V38** | **-** | **0-1** | **-** | **Grupo de informações relativas aos descontos condicionados e incondicionados** |
| V42 | vDescIncond | E | V41 | N | 0-1 | 1-15V2 | Valor monetário do desconto incondicionado (R$). |
| V43 | vDescCond | E | V41 | N | 0-1 | 1-15V2 | Valor monetário do desconto condicionado (R$). |
| **V44** | **trib** | **G** | **V38** | **-** | **1-1** | **-** | **Grupo de informações relacionados aos tributos relacionados ao serviço prestado** |
| **V45** | **issqn** | **G** | **V44** | **-** | **1-1** | **-** | **Grupo de valores para o ISSQN** |
| V46 | vBC | E | V45 | N | 1-1 | 1-15V2 | Valor da Base de Cálculo do ISSQN (R$) = Valor do Serviço - Desconto Incondicionado<br><br>vBC = vServ - descIncond |
| V47 | pAliq | E | V45 | N | 1-1 | 1V2 | Valor da alíquota efetiva (%) do serviço prestado resultante do cadastro do trecho pela concessionária. |
| V48 | vISSQN | E | V45 | N | 1-1 | 1-15V2 | Valor do ISSQN (R$) = Valor da Base de Cálculo x Alíquota<br><br>vISSQN = vBC x pAliq |
| **V49** | **tribFed** | **G** | **V44** | **-** | **0-1** | **-** | **Grupo de informações de outros tributos relacionados ao serviço prestado** |
| **V50** | **piscofins** | **G** | **V49** | **-** | **0-1** | **-** | **Grupo de informações dos tributos PIS/COFINS** |
| <!-- p.10 -->V51 | CST | E | V50 | N | 1-1 | 2 | "Código de Situação Tributária do PIS/COFINS (CST):<br><br>00 - Nenhum;<br>01 - Operação Tributável com Alíquota Básica;<br>02 - Operação Tributável com Alíquota Diferenciada;<br>03 - Operação Tributável com Alíquota por Unidade de Medida de Produto;<br>04 - Operação Tributável monofásica - Revenda a Alíquota Zero;<br>05 - Operação Tributável por Substituição Tributária;<br>06 - Operação Tributável a Alíquota Zero;<br>07 - Operação Tributável da Contribuição;<br>08 - Operação sem Incidência da Contribuição;<br>09 - Operação com Suspensão da Contribuição;"<br>49 - Operação sem cobrança;<br>98 - Anulação; |
| V52 | vBCPisCofins | E | V50 | N | 0-1 | 1-15V2 | Valor da Base de Cálculo do PIS/COFINS (R$). |
| V53 | pAliqPis | E | V50 | N | 0-1 | 1-2V2 | Valor da Alíquota do PIS (%). |
| V54 | pAliqCofins | E | V50 | N | 0-1 | 1-2V2 | Valor da Alíquota da COFINS (%). |
| V55 | vPis | E | V50 | N | 0-1 | 1-15V2 | Valor monetário do PIS (R$). |
| V56 | vCofins | E | V50 | N | 0-1 | 1-15V2 | Valor monetário do COFINS (R$). |
| **V57** | **ibscbs** | **G** | **V44** | **-** | **0-1** | **-** | **Grupo de informações declaradas pelo emitente referentes ao IBS e à CBS** |
| V58 | CST | E | V57 | N | 1-1 | 3 | Tabela da Código de Situação Tributária do IBS. Valor Fixo [000] |
| V59 | cClassTrib<!-- REVISAR p.10: valor fixo grafado "[[000002]" (colchete duplo) no original; transcrito literalmente --> | E | V57 | N | 1-1 | 6 | Tabela de Código de classificação Tributária do IBS. Valor fixo [[000002] |
| V60 | cindOp | E | V57 | C | 1-1 | 6 | Tabela de Classificação do indicador da operação (AnexoVII-IndOp_IBSCBS). Valor fixo [080101] |
| V61 | vBC | E | V57 | N | 1-1 | 1-15V2 | Valor da base de cálculo (BC) do IBS/CBS antes das reduções para cálculo do tributo bruto.<br><br>vBC = vServ - descIncond – vISSQN – vPIS - vCOFINS (2026)<br>ou<br>vBC = vServ - descIncond – vISSQN (2027 até 2032)<br><br>Utilizada a data de competência. |
| V62 | vLiq | E | V57 | N | 1-1 | 1-15V2 | Valor líquido (R$) = Valor do serviço - Desconto condicionado - Desconto incondicionado - Valores, (ISSQN, PIS, COFINS)\*\*<br><br>VLiq = vServ – vDescIncond – vDescCond – (vISSQN + vPIS + vCOFINS)\*\* |
| V63 | vTotNF | E | V57 | N | 1-1 | 1-15V2 | Valor Total da NF considerando os impostos por fora IBS e CBS.<br>O IBS e a CBS são por fora, por isso seus valores devem ser adicionados ao valor total da NF.<br><br>vTotNF = VLiq + vCBS + vIBSTot |
| **V64** | **gIBS** | **G** | **V57** | **-** | **1-1** | **-** | **Grupo de Informações relativas aos valores do IBS Estadual** |
| <!-- p.11 -->V65 | vIBSTot | E | V64 | N | 1-1 | 1-15V2 | Total Valor do IBS Total.<br><br>vIBSTot = vIBSUF + vIBSMun |
| **V66** | **uf** | **G** | **V64** | **-** | **1-1** | **-** | **Grupo de Informações relativas aos valores do IBS Estadual** |
| V67 | pAliqEfetUF | E | V66 | N | 1-1 | 1-2V2 | Alíquota efetiva para IBS das UFs da localidade de incidência/operação cadastrada: trecho. |
| V68 | vIBSUF | E | V66 | N | 1-1 | 1-15V2 | Total valor do IBS estadual.<br><br>vIBSUF = vBC x pAliqEfetUF |
| **V69** | **mun** | **G** | **V64** | **-** | **1-1** | **-** | **Grupo de Informações relativas aos valores do IBS Municipal** |
| V70 | pAliqEfetMun | E | V69 | N | 1-1 | 1-2V2 | Alíquota efetiva para IBS dos Municípios da localidade de incidência/operação cadastrada: trecho. |
| V71 | vIBSMun | E | V69 | N | 1-1 | 1-15V2 | Total valor do IBS municipal.<br><br>vIBSMun = vBC x pAliqEfetMun |
| **V72** | **gCBS** | **G** | **V57** | **-** | **1-1** | **-** | **Grupo de Informações relativas aos valores da CBS** |
| V73 | pAliq | E | V72 | N | 1-1 | 1-2V2 | Alíquota da União para a CBS Cadastrada |
| V74 | vCBS | E | V72 | N | 1-1 | 1-15V2 | Total valor da CBS da União.<br><br>vCBS = vBC x pAliq |
| **V75** | **Signature** | **G** | **V01** | **-** | **1-1** | **-** | **Assinatura XML da NFS-e Via segundo o padrão XML digital signature** |
|  | <mark>dhReg</mark><!-- REVISAR p.11: linha sem caminho, Ele, Tipo, Ocor. e Tam. no original (destaque amarelo, texto vermelho); campos deixados em branco --> |  |  |  |  |  | <mark>Data/Hora da recepção da NFS-e Via.<br>Data e hora no formato UTC (Universal Coordinated Time):<br>AAAA-MM-DDThh:mm:ssTZD</mark> |
|  | <mark>nReg</mark> |  |  |  |  |  | <mark>"Número do Registro" da NFS-e Via</mark> |
