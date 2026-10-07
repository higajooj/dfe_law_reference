<!-- p.15 -->
# 6. Leiaute da NF-e (Modelo 55 e 65)

## Grupo B. Identificação da Nota Fiscal eletrônica

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 14a | B10a | dPrevEntrega | Data da previsão de entrega ou disponibilização do bem. | E | B01 | D | 0-1 | 10 | Formato: “AAAA-MM-DD”<br>**Observação:** Não informar este campo para a NFC-e. |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |
| 16 | B12 | cMunFG | Código do Município de Ocorrência do Fato Gerador do ICMS | E | B01 | N | 1-1 | 7 | Informar o município de ocorrência do fato gerador do ICMS. Utilizar a Tabela de código de Município do IBGE |
| 16a | B12a | cMunFGIBS | Código do Município de consumo, fato gerador do IBS / CBS | E | B01 | N | 0-1 | 7 | Informar o município de ocorrência do fato gerador do IBS / CBS. Campo preenchido somente quando “indPres = 5 (Operação presencial, fora do estabelecimento)”, e não estiver preenchido o endereço do destinatário (grupo: E05) nem o local de entrega (grupo: G01). |
| 29 | B25 | finNFe | Finalidade de emissão da NF-e | E | B01 | N | 1-1 | 1 | 1=NF-e normal;<br>2=NF-e complementar;<br>3=NF-e de ajuste;<br>4=Devolução de mercadoria.<br>5=Nota de crédito;<br>6=Nota de débito. |
| 29.1 | B25.1 | tpNFDebito | Tipo de Nota de Débito | CE | B01 | N | 0-1 | 2 | 01=Transferência de créditos para Cooperativas;<br>02=Anulação de Crédito por Saídas Imunes/Isentas;<br>03=Débitos de notas fiscais não processadas na apuração;<br>04=Multa e juros;<br>05=Transferência de crédito na sucessão;<br>06=Pagamento antecipado;<br>07=Perda em estoque (Perecimento, Perda, Furto, Roubo);<br>08=Desenquadramento do SN. |
| 29.2 | B25.2 | tpNFCredito | Tipo de Nota de Crédito | CE | B01 | N | 0-1 | 2 | 01=Multa e juros;<br>02=Apropriação de crédito presumido de IBS sobre o saldo devedor na ZFM (art. 450, § 1º, LC 214/25);<br>03=Retorno por recusa total na entrega ou por não localização do destinatário na tentativa de entrega;<br>04=Redução de valores;<br>05=Transferência de crédito na sucessão;<br>06=Retorno por recusa parcial na entrega. |

<!-- p.16 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 29.3 | B25a | indFinal | Indica operação com Consumidor final | E | B01 | N | 1-1 | 1 | 0=Normal;<br>1=Consumidor final; |
| 29.4 | B25b | indPres | Indicador de presença do comprador no estabelecimento comercial no momento da operação | E | B01 | N | 1-1 | 1 | 0=Não se aplica (por exemplo, Nota Fiscal complementar ou de ajuste);<br>1=Operação presencial;<br>2=Operação não presencial, pela Internet;<br>3=Operação não presencial, Teleatendimento;<br>4=NFC-e em operação com entrega a domicílio;<br>5=Operação presencial, fora do estabelecimento; (incluído NT 2016/002)<br>9=Operação não presencial, outros. |
| 29.5 | B25c | indIntermed | Indicador de intermediador/marketplace | E | B01 | N | 0-1 | 1 | 0=Operação sem intermediador (em site ou plataforma própria)<br>1=Operação em site ou plataforma de terceiros (intermediadores/marketplace)<br>• Considera-se intermediador/marketplace os prestadores de serviços e de negócios referentes às transações comerciais ou de prestação de serviços intermediadas, realizadas por pessoas jurídicas inscritas no Cadastro Nacional de Pessoa Jurídica - CNPJ ~~ou pessoas físicas inscritas no Cadastro de Pessoa Física - CPF~~, ainda que não inscritas no cadastro de contribuintes do ICMS.<br>• Considera-se site/plataforma própria as vendas que não foram intermediadas (por marketplace), como venda em site próprio, teleatendimento.<br>(Criado na NT 2020.006) |
| 29.6 | B25d | cIndOp | Código indicador do local da operação de fornecimento | E | B01 | N | 0-1 | 6 | Preenchimento obrigatório no caso de:<br>- Leilão judicial ou Licitação promovida pelo poder público (cIndOp=010104)<br>- Constatação de irregularidade pela falta de documentação fiscal ou pelo acobertamento por documentação inidônea (cIndOp=010105)<br>**Observação:** Consultar tabela “Código Indicador do Local de Operação”. |

> **Revogado/Descontinuado:** texto riscado no original (“ou pessoas físicas inscritas no Cadastro de Pessoa Física - CPF”).

## Grupo BA. Documento Fiscal Referenciado

Sem alterações.

<!-- p.17 -->
## Grupo BB. Grupo de Compras Governamentais

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **29.z1** | **BB01** | **gCompraGov** | **Grupo de Compra Governamental** | **G** | **B01** | **-** | **0-1** | **-** | |
| 29.z2 | BB02 | tpEnteGov | Tipo de ente governamental | E | BB01 | N | 1-1 | 1 | Para administração pública direta e suas autarquias e fundações:<br>1=União<br>2=Estado<br>3=Distrito Federal<br>4=Município<br>5=Consórcio Público<br>6=Comitê Gestor do IBS |
| 29.z3 | BB03 | pRedutor | Percentual de redução da alíquota em compra governamental | E | BB01 | N | 1-1 | 3v2-4 | Conforme o art. 472/370 da LC 214/2025. |
| 29.z4 | BB04 | tpOperGov | Tipo de operação com o ente governamental | E | BB01 | N | 1-1 | 1 | 1=Fornecimento com pagamento posterior;<br>2=Recebimento do pagamento com fornecimento já realizado;<br>3=Fornecimento com pagamento já realizado;<br>4=Recebimento do pagamento com fornecimento posterior; |
| 29.z5 | BB05 | refDFeAnt | Chave de acesso do documento fiscal anterior | E | BB01 | C | 0-99 | 44 | |

## Grupo BC. Grupo de notas de antecipação de pagamento

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **29.y1** | **BC01** | **gPagAntecipado** | **Grupo de notas de antecipação de pagamento** | **G** | **B01** | **-** | **0-1** | **-** | **Informado para abater as parcelas de antecipação de pagamento, conforme Art. 10. § 4º** |
| 29.y2 | BC02 | refNFe | Chave de acesso da NF-e de antecipação de pagamento | E | BC01 | C | 1-99 | 44 | Referência a uma NF-e (modelo 55) emitida anteriormente, referente a pagamento antecipado |

## Grupo C. Identificação do Emitente da Nota Fiscal eletrônica

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 49d | C22 | ISUFEmit | Inscrição do emitente da Suframa | E | C01 | C | 0-1 | 8-9 | Informar o número do Cadastro do emitente na Suframa. Campo obrigatório nas operações que se beneficiam de incentivos fiscais existentes nas áreas sob controle da SUFRAMA com alíquota zero da CBS referente aos arts. 451 e 466 da LC 214/25. |

<!-- p.18 -->
## Grupo I. Produtos e Serviços da NF-e

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 104.11 | I05k | tpCredPresIBSZFM | Classificação para subapuração do IBS na ZFM | E | I01 | N | 0-1 | 1 | Classificação conforme percentuais definidos no art. 450, § 1º, da LC 214/25 para o cálculo do crédito presumido:<br>0 - Sem Crédito Presumido<br>1 - Bens de consumo final (55%)<br>2 - Bens de capital (75%)<br>3 - Bens intermediários (90,25%)<br>4 - Bens de informática e outros definidos em legislação (100%) |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |
| 116c | I17c | indBemMovelUsado | Indicador de fornecimento de bem móvel usado | E | I01 | N | 0-1 | 1 | Somente para fornecimentos de bem móvel usado adquirido de pessoa física que não seja contribuinte ou que seja inscrita como MEI.<br>1 - Bem Móvel Usado |

## Grupo N01. ICMS Normal e ST

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **164** | **N01** | **ICMS** | **Informações do ICMS da Operação própria e ST** | **CG** | **M01** | **-** | **0-1** | **-** | **Informar apenas um dos grupos de tributação do ICMS (ICMS00, ICMS10, ...) (v2.0)** |

## Grupo UB. Informações dos tributos IBS / CBS e Imposto Seletivo

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **324.01** | **UB01** | **IS** | **Informações do Imposto Seletivo** | **G** | **M01** | **-** | **0-1** | **-** | |
| 324.02 | UB02 | CSTIS | Código de Situação Tributária do Imposto Seletivo | E | UB01 | N | 1-1 | 3 | Utilizar tabela CST do Imposto Seletivo |
| 324.03 | UB03 | cClassTribIS | Código de Classificação Tributária do Imposto Seletivo | E | UB01 | N | 1-1 | 6 | Utilizar tabela cClassTribIS |
| **324.04** | **UB04** | **-x-** | **Sequência XML** | **G** | **UB01** | **-** | **0-1** | **-** | |
| 324.05 | UB05 | vBCIS | Valor da Base de Cálculo do Imposto Seletivo | E | UB04 | N | 1-1 | 13v2 | |
| 324.06 | UB06 | pIS | Alíquota do Imposto Seletivo (em percentual) | E | UB04 | N | 1-1 | 3v2-4 | |
| 324.07 | UB07 | adRemIS | Alíquota específica por unidade de medida apropriada | E | UB04 | N | 0-1 | 3v2-4 | |
| **324.08** | **UB08** | **-x-** | **Sequência XML** | **G** | **UB04** | **-** | **0-1** | **-** | |
| 324.09 | UB09 | uTrib | Unidade de Medida Tributável | E | UB08 | C | 1-1 | 1-6 | |
| 324.10 | UB10 | qTrib | Quantidade Tributável | E | UB08 | N | 1-1 | 11v0-4 | |
| 324.11 | UB11 | vIS | Valor do Imposto Seletivo | E | UB04 | N | 1-1 | 13v2 | |
| **324.12** | **UB12** | **IBSCBS** | **Informações do Imposto de Bens e Serviços - IBS e da Contribuição de Bens e Serviços - CBS** | **G** | **M01** | **-** | **0-1** | **-** | |
| 324.13 | UB13 | CST | Código de Situação Tributária do IBS e CBS | E | UB12 | N | 1-1 | 3 | Utilizar tabela CST do IBS/CBS |
| 324.14 | UB14 | cClassTrib | Código de Classificação Tributária do IBS e CBS | E | UB12 | N | 1-1 | 6 | Utilizar tabela cClassTrib |
| 324.14a | UB14a | indDoacao | Indica a natureza da operação de doação, orientando a apuração e a geração de débitos ou estornos conforme o cenário | E | UB12 | N | 0-1 | 1 | Informar “1” quando doação. |

<!-- p.19 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **324.14k** | **UB14k** | **-x-** | **Sequência XML** | **G** | **UB12** | | **0-1** | | |
| **324.15** | **UB15** | **gIBSCBS** | **Grupo de Informações do IBS e da CBS** | **CG** | **UB14k** | | **1-1** | | |
| 324.16 | UB16 | vBC | Base de cálculo do IBS e CBS | E | UB15 | N | 1-1 | 13v2 | |
| **324.17** | **UB17** | **gIBSUF** | **Grupo de Informações do IBS para a UF** | **G** | **UB15** | | **1-1** | | |
| 324.18 | UB18 | pIBSUF | Alíquota do IBS de competência das UF (em percentual) | E | UB17 | N | 1-1 | 3v2-4 | Alíquota vigente do IBS da UF. Preencher de acordo com a tabela de alíquotas do IBS e CBS. |
| **324.21** | **UB21** | **gDif** | **Grupo de Informações do Diferimento** | **G** | **UB17** | | **0-1** | | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gDif” da tabela de CST do IBS e da CBS. |
| 324.22 | UB22 | pDif | Percentual do diferimento | E | UB21 | N | 1-1 | 3v2-4 | |
| 324.23 | UB23 | vDif | Valor do Diferimento | E | UB21 | N | 1-1 | 13v2 | |
| **324.24** | **UB24** | **gDevTrib** | **Grupo de Informações da devolução de tributos** | **G** | **UB17** | | **0-1** | | **Grupo usado para registrar a devolução de tributos no fornecimento de energia elétrica, água, esgoto, gás natural e em outras hipóteses definidas no regulamento.** |
| 324.24a | UB24a | pDevTrib | Percentual de devolução do IBS da UF | E | UB24 | N | 0-1 | 3v2-4 | Percentual de devolução do IBS da UF, conforme LC 214/25 art. 118. |
| 324.25 | UB25 | vDevTrib | Valor do tributo devolvido | E | UB24 | N | 1-1 | 13v2 | Valor do tributo devolvido (“cashback” de desconto na própria Nota Fiscal / Fatura) |
| **324.26** | **UB26** | **gRed** | **Grupo de informações da redução da alíquota** | **G** | **UB17** | | **0-1** | | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gRed” da tabela de CST do IBS e da CBS. |
| 324.27 | UB27 | pRedAliq | Percentual da redução de alíquota do cClassTrib | E | UB26 | N | 1-1 | 3v2-4 | |
| 324.28 | UB28 | pAliqEfet | Alíquota Efetiva do IBS de competência das UF que será aplicada à Base de Cálculo (em percentual) | E | UB26 | N | 1-1 | 3v2-4 | Alíquota efetiva, após aplicação da redução de alíquota, incluindo o gCompraGov/pRedutor, se houver. |
| | | -x- | | | | | | | |
| 324.35 | UB35 | vIBSUF | Valor do IBS de competência da UF | E | UB17 | N | 1-1 | 13v2 | |
| **324.36** | **UB36** | **gIBSMun** | **Grupo de Informações do IBS para o município** | **G** | **UB15** | | **1-1** | | |
| 324.37 | UB37 | pIBSMun | Alíquota do IBS de competência do Município (em percentual) | E | UB36 | N | 1-1 | 3v2-4 | Alíquota vigente do IBS do Município. Preencher de acordo com a tabela de alíquotas do IBS e CBS. |
| **324.40** | **UB40** | **gDif** | **Grupo de Informações do Diferimento** | **G** | **UB36** | | **0-1** | | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gDif” da tabela de CST do IBS e da CBS. |
| 324.41 | UB41 | pDif | Percentual do diferimento | E | UB40 | N | 1-1 | 3v2-4 | |
| 324.42 | UB42 | vDif | Valor do Diferimento | E | UB40 | N | 1-1 | 13v2 | |
| **324.43** | **UB43** | **gDevTrib** | **Grupo de Informações da devolução de tributos** | **G** | **UB36** | | **0-1** | | **Grupo usado para registrar a devolução de tributos no fornecimento de energia elétrica, água, esgoto, gás natural e em outras hipóteses definidas no regulamento.** |

<!-- p.20 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 324.43a | UB43a | pDevTrib | Percentual de devolução do IBS do Município | E | UB43 | N | 0-1 | 3v2-4 | Percentual de devolução do IBS do Município, conforme LC 214/25 art. 118. |
| 324.44 | UB44 | vDevTrib | Valor do tributo devolvido | E | UB43 | N | 1-1 | 13v2 | Valor do tributo devolvido (“cashback” de desconto na própria Nota Fiscal / Fatura) |
| **324.45** | **UB45** | **gRed** | **Grupo de informações da redução da alíquota** | **G** | **UB36** | | **0-1** | | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gRed” da tabela de CST do IBS e da CBS. |
| 324.46 | UB46 | pRedAliq | Percentual da redução de alíquota do cClassTrib | E | UB45 | N | 1-1 | 3v2-4 | |
| 324.47 | UB47 | pAliqEfet | Alíquota Efetiva do IBS de competência do Município que será aplicada à Base de Cálculo (em percentual) | E | UB45 | N | 1-1 | 3v2-4 | Alíquota efetiva, após aplicação da redução de alíquota, incluindo o gCompraGov/pRedutor, se houver. |
| | | -x- | | | | | | | |
| 324.53 | UB54 | vIBSMun | Valor do IBS de competência do Município | E | UB36 | N | 1-1 | 13v2 | |
| | | -x- | | | | | | | |
| 324.54 | UB54a | vIBS | Valor do IBS | E | UB15 | N | 1-1 | 13v2 | Valor do IBS (soma de vIBSUF e vIBSMun). Quando houver crédito presumido com indicador “IndDeduzCredPres=1”, o vCredPres deve ser abatido desse valor. |
| **324.55** | **UB55** | **gCBS** | **Grupo de Informações da CBS** | **G** | **UB15** | | **1-1** | | |
| 324.56 | UB56 | pCBS | Alíquota da CBS (em percentual) | E | UB55 | N | 1-1 | 3v2-4 | Alíquota vigente da CBS. Preencher de acordo com a tabela de alíquotas do IBS e CBS. |
| **324.59** | **UB59** | **gDif** | **Grupo de Informações do Diferimento** | **G** | **UB55** | | **0-1** | | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gDif” da tabela de CST do IBS e da CBS. |
| 324.60 | UB60 | pDif | Percentual do diferimento | E | UB59 | N | 1-1 | 3v2-4 | |
| 324.61 | UB61 | vDif | Valor do Diferimento | E | UB59 | N | 1-1 | 13v2 | |
| **324.62** | **UB62** | **gDevTrib** | **Grupo de Informações da devolução de tributos** | **G** | **UB55** | | **0-1** | | **Grupo usado para registrar a devolução de tributos no fornecimento de energia elétrica, água, esgoto, gás natural e em outras hipóteses definidas no regulamento.** |
| 324.62a | UB62a | pDevTrib | Percentual de devolução da CBS | E | UB62 | N | 0-1 | 3v2-4 | Percentual de devolução da CBS, conforme LC 214/25 art. 118. |
| 324.63 | UB63 | vDevTrib | Valor do tributo devolvido | E | UB62 | N | 1-1 | 13v2 | Valor do tributo devolvido (“cashback” de desconto na própria Nota Fiscal / Fatura) |
| **324.64** | **UB64** | **gRed** | **Grupo de informações da redução da alíquota** | **G** | **UB55** | | **0-1** | | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gRed” da tabela de CST do IBS e da CBS. |

<!-- p.21 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 324.65 | UB65 | pRedAliq | Percentual da redução de alíquota do cClassTrib | E | UB64 | N | 1-1 | 3v2-4 | |
| 324.66 | UB66 | pAliqEfet | Alíquota Efetiva da CBS que será aplicada à Base de Cálculo (em percentual) | E | UB64 | N | 1-1 | 3v2-4 | Alíquota efetiva, após aplicação da redução de alíquota, incluindo o gCompraGov/pRedutor, se houver. |
| **324.66a** | **UB66a** | **gALCZFMCBS** | **Grupo de operações em áreas incentivadas (ALC/ZFM) - CBS (alíquota zero)** | **G** | **UB55** | | **0-1** | | **Grupo de informações para identificação de operações em áreas incentivadas (ALC/ZFM) com alíquota zero da CBS, conforme arts. 451 e 466 da LC 214/2025, quando fornecedor e destinatário estiverem nessas áreas, distinguindo a existência de processo aprovado na Suframa.** |
| 324.66b | UB66b | tpALCZFMCBS | Tipo de aplicação da alíquota zero da CBS | E | UB66a | N | 1-1 | 1 | Deve ser informado:<br>1 - quando o fornecedor e o destinatário estiverem localizados em área incentivada, a operação estiver amparada por alíquota zero da CBS e não se tratar de operação industrial com processo aprovado na Suframa para o item;<br>2 - quando o fornecedor e o destinatário estiverem localizados em área incentivada, a operação estiver amparada por alíquota zero da CBS e se tratar de operação industrial com processo aprovado na Suframa para o item. |
| 324.66c | UB66c | nProcSuframa | Número do processo na Suframa para o item comercializado | E | UB66a | C | 0-1 | 8-12 | Inscrição específica e aprovação de projeto técnico-econômico pelo Conselho de Administração da Suframa, nos termos do Art. 442. II (ZFM) e Art. 459. II (ALC) da LC 214/2025. |
| 324.66d | UB66d | pAliqEfetRegCBS | Percentual efetivo sem a redução | E | UB66a | N | 1-1 | 3v2-4 | Alíquota efetiva de referência da CBS aplicável à operação fora de áreas ou regimes incentivados. |
| 324.66e | UB66e | vTribRegCBS | Valor efetivo sem a redução | E | UB66a | N | 1-1 | 13v2 | Valor da CBS calculado para a operação fora de áreas ou regimes incentivado |
| | | -x- | | | | | | | |
| 324.67 | UB67 | vCBS | Valor da CBS | E | UB55 | N | 1-1 | 13v2 | |
| **324.68** | **UB68** | **gTribRegular** | **Grupo de informações da Tributação Regular** | **G** | **UB15** | | **0-1** | | **Grupo de informações da Tributação Regular. Informar como seria a tributação caso não cumprida a condição resolutória/suspensiva.<br>Exemplo 1: Art. 445, §4 da LC 214/2025. Operações com ZFM e ALC.<br>Exemplo 2: Operações com suspensão do tributo.<br>Observação: a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gTribRegular” da tabela de cClassTrib do IBS e da CBS.** |
| 324.69 | UB69 | CSTReg | Código de Situação Tributária do IBS e CBS | E | UB68 | N | 1-1 | 3 | Utilizar tabela CST do IBS/CBS |

<!-- p.22 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 324.70 | UB70 | cClassTribReg | Código de Classificação Tributária do IBS e CBS | E | UB68 | N | 1-1 | 6 | Utilizar tabela cClassTrib |
| 324.71 | UB71 | pAliqEfetRegIBSUF | Valor da alíquota do IBS da UF (em percentual) | E | UB68 | N | 1-1 | 3v2-4 | |
| 324.72 | UB72 | vTribRegIBSUF | Valor do Tributo do IBS da UF | E | UB68 | N | 1-1 | 13v2 | |
| 324.72a | UB72a | pAliqEfetRegIBSMun | Valor da alíquota do IBS do Município (em percentual) | E | UB68 | N | 1-1 | 3v2-4 | |
| 324.72b | UB72b | vTribRegIBSMun | Valor do Tributo do IBS do Município | E | UB68 | N | 1-1 | 13v2 | |
| 324.72c | UB72c | pAliqEfetRegCBS | Valor da alíquota da CBS (em percentual) | E | UB68 | N | 1-1 | 3v2-4 | |
| 324.72d | UB72d | vTribRegCBS | Valor do Tributo da CBS | E | UB68 | N | 1-1 | 13v2 | |
| **324.82a** | **UB82a** | **gTribCompraGov** | **Grupo de informações da composição do valor do IBS e da CBS em compras governamentais** | **G** | **UB15** | | **0-1** | | **Informar somente para compras governamentais** |
| 324.82b | UB82b | pAliqIBSUF | Alíquota do IBS de competência do Estado (em percentual) | E | UB82a | N | 1-1 | 3v2-4 | |
| 324.82c | UB82c | vTribIBSUF | Valor do Tributo do IBS da UF calculado | E | UB82a | N | 1-1 | 13v2 | Valor que seria devido a UF, sem aplicação do Art. 473. da LC 214/2025 |
| 324.82d | UB82d | pAliqIBSMun | Alíquota do IBS de competência do Município (em percentual) | E | UB82a | N | 1-1 | 3v2-4 | |
| 324.82e | UB82e | vTribIBSMun | Valor do Tributo do IBS do Município calculado | E | UB82a | N | 1-1 | 13v2 | Valor que seria devido ao município, sem aplicação do Art. 473. da LC 214/2025 |
| 324.82f | UB82f | pAliqCBS | Alíquota da CBS (em percentual) | E | UB82a | N | 1-1 | 3v2-4 | |
| 324.82g | UB82g | vTribCBS | Valor do Tributo da CBS calculado | E | UB82a | N | 1-1 | 13v2 | Valor que seria devido a CBS, sem aplicação do Art. 473. da LC 214/2025 |
| | | | ~~**-- Tributação Monofásica: Início - layout antigo --**~~ | | | | | | |
| ~~**324.84**~~ | ~~**UB84**~~ | ~~**gIBSCBSMono**~~ | ~~**Grupo de Informações do IBS e CBS em operações com imposto monofásico**~~ | ~~**CG**~~ | ~~**UB14k**~~ | | ~~**1-1**~~ | | ~~**Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gIBSCBSMono” da tabela de CST do IBS e da CBS.~~ |
| ~~**324.84a**~~ | ~~**UB84a**~~ | ~~**gMonoPadrao**~~ | ~~**Grupo de informações da Tributação Monofásica Padrão [Observação: sequence substituído por grupo]**~~ | ~~**G**~~ | ~~**UB84**~~ | | ~~**0-1**~~ | | ~~**Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gMonoPadrao” da tabela de cClassTrib do IBS e da CBS.~~ |
| ~~324.85~~ | ~~UB85~~ | ~~qBCMono~~ | ~~Quantidade tributada na monofasia~~ | ~~E~~ | ~~UB84a~~ | ~~N~~ | ~~1-1~~ | ~~11v0-4~~ | ~~Informar a BC quantidade conforme unidade de medida estabelecida na legislação para o produto.~~ |
| ~~324.86~~ | ~~UB86~~ | ~~adRemIBS~~ | ~~Alíquota ad rem do IBS~~ | ~~E~~ | ~~UB84a~~ | ~~N~~ | ~~1-1~~ | ~~3v2-4~~ | |
| ~~324.87~~ | ~~UB87~~ | ~~adRemCBS~~ | ~~Alíquota ad rem da CBS~~ | ~~E~~ | ~~UB84a~~ | ~~N~~ | ~~1-1~~ | ~~3v2-4~~ | |
| ~~324.88~~ | ~~UB88~~ | ~~vIBSMono~~ | ~~Valor do IBS monofásico~~ | ~~E~~ | ~~UB84a~~ | ~~N~~ | ~~1-1~~ | ~~13v2~~ | ~~O valor do imposto é obtido pela multiplicação da alíquota ad rem pela quantidade do produto conforme unidade de medida estabelecida na legislação.~~ |
| ~~324.89~~ | ~~UB89~~ | ~~vCBSMono~~ | ~~Valor da CBS monofásica~~ | ~~E~~ | ~~UB84a~~ | ~~N~~ | ~~1-1~~ | ~~13v2~~ | ~~O valor do imposto é obtido pela multiplicação da alíquota ad rem pela quantidade do produto conforme unidade de medida estabelecida na legislação.~~ |

> **Revogado/Descontinuado:** os grupos e campos do “layout antigo” da tributação monofásica (324.84 a 324.89), riscados no original.

<!-- p.23 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| ~~**324.90**~~ | ~~**UB90**~~ | ~~**gMonoReten**~~ | ~~**Grupo de informações da Tributação Monofásica Sujeita à Retenção**<br>[**Observação:** *sequence* substituído por grupo]~~ | ~~**G**~~ | ~~**UB84**~~ | | ~~**0-1**~~ | | ~~**Uso em operações com combustíveis derivados de petróleo (Gasolina A) [ou \*Óleo Diesel A\*] para retenção do imposto sobre o biocombustível a ser misturado. Art. 178 da LC 214/2025.**<br>**Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gMonoReten” da tabela de cClassTrib do IBS e da CBS.~~ |
| ~~324.91~~ | ~~UB91~~ | ~~qBCMonoReten~~ | ~~Quantidade tributada sujeita à retenção na monofasia~~ | ~~E~~ | ~~UB90~~ | ~~N~~ | ~~1-1~~ | ~~11v0-4~~ | ~~Informar a BC sujeita à retenção em quantidade conforme unidade de medida estabelecida na legislação para o produto.~~ |
| ~~324.92~~ | ~~UB92~~ | ~~adRemIBSReten~~ | ~~Alíquota ad rem do IBS sujeito à retenção~~ | ~~E~~ | ~~UB90~~ | ~~N~~ | ~~1-1~~ | ~~3v2-4~~ | |
| ~~324.93~~ | ~~UB93~~ | ~~vIBSMonoReten~~ | ~~Valor do IBS monofásico sujeito à retenção~~ | ~~E~~ | ~~UB90~~ | ~~N~~ | ~~1-1~~ | ~~13v2~~ | ~~Valor do IBS com retenção, a ser somado ao valor de IBS a ser recolhido.~~ |
| ~~324.93a~~ | ~~UB93a~~ | ~~adRemCBSReten~~ | ~~Alíquota ad rem da CBS sujeito à retenção~~ | ~~E~~ | ~~UB90~~ | ~~N~~ | ~~1-1~~ | ~~3v2-4~~ | |
| ~~324.93b~~ | ~~UB93b~~ | ~~vCBSMonoReten~~ | ~~Valor da CBS monofásica sujeita à retenção~~ | ~~E~~ | ~~UB90~~ | ~~N~~ | ~~1-1~~ | ~~13v2~~ | ~~Valor da CBS com retenção, a ser somado ao valor de CBS a ser recolhido.~~ |
| ~~324.94~~ | ~~UB94~~ | ~~gMonoRet~~ | ~~**Grupo de informações da Tributação Monofásica Retida Anteriormente**<br>[**Observação:** *sequence* substituído por grupo]~~ | ~~**G**~~ | ~~**UB84**~~ | | ~~**0-1**~~ | | ~~**Tributação monofásica própria sobre combustíveis cobrada anteriormente**<br>**Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gMonoRet” da tabela cClassTrib do IBS e da CBS.~~ |
| ~~324.95~~ | ~~UB95~~ | ~~qBCMonoRet~~ | ~~Quantidade tributada retida anteriormente~~ | ~~E~~ | ~~UB94~~ | ~~N~~ | ~~1-1~~ | ~~11v0-4~~ | ~~Informar a BC do IBS em quantidade conforme unidade de medida estabelecida na legislação.~~ |
| ~~324.96~~ | ~~UB96~~ | ~~adRemIBSRet~~ | ~~Alíquota *ad rem* do IBS retido anteriormente~~ | ~~E~~ | ~~UB94~~ | ~~N~~ | ~~1-1~~ | ~~3v2-4~~ | ~~Alíquota *ad rem* do IBS, estabelecida na legislação para o produto.~~ |
| ~~324.97~~ | ~~UB97~~ | ~~vIBSMonoRet~~ | ~~Valor do IBS retido anteriormente~~ | ~~E~~ | ~~UB94~~ | ~~N~~ | ~~1-1~~ | ~~13v2~~ | ~~O valor do IBS é obtido pela multiplicação da alíquota *ad rem* pela quantidade do produto conforme unidade de medida estabelecida na legislação.~~ |
| ~~324.98~~ | ~~UB98~~ | ~~adRemCBSRet~~ | ~~Alíquota *ad rem* da CBS retida anteriormente~~ | ~~E~~ | ~~UB94~~ | ~~N~~ | ~~1-1~~ | ~~3v2-4~~ | ~~Alíquota *ad rem* da CBS, estabelecida na legislação para o produto.~~ |
| ~~324.98a~~ | ~~UB98a~~ | ~~vCBSMonoRet~~ | ~~Valor da CBS retida anteriormente~~ | ~~E~~ | ~~UB94~~ | ~~N~~ | ~~1-1~~ | ~~13v2~~ | ~~O valor da CBS é obtido pela multiplicação da alíquota *ad rem* pela quantidade do produto conforme unidade de medida estabelecida na legislação.~~ |
| ~~**324.99**~~ | ~~**UB99**~~ | ~~**gMonoDif**~~ | ~~**Grupo de informações do Diferimento da Tributação Monofásica**<br>[**Observação:** *sequence* substituído por grupo]~~ | ~~**G**~~ | ~~**UB84**~~ | | ~~**0-1**~~ | | ~~**Operações com diferimento, aplicado aos biocombustíveis. Exemplo: operação do produtor de biocombustível (usina).**<br>**Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gMonoDif” da tabela de cClassTrib do IBS e da CBS.~~ |

> **Revogado/Descontinuado:** trecho riscado no original (layout antigo da tributação monofásica, continuação da página anterior).

<!-- p.24 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| ~~324.100~~ | ~~UB100~~ | ~~pDifIBS~~ | ~~Percentual do diferimento do imposto monofásico.~~ | ~~E~~ | ~~UB99~~ | ~~N~~ | ~~1-1~~ | ~~3v2-4~~ | ~~A ser aplicado em vIBSMono.~~ |
| ~~324.101~~ | ~~UB101~~ | ~~vIBSMonoDif~~ | ~~Valor do IBS monofásico diferido.~~ | ~~E~~ | ~~UB99~~ | ~~N~~ | ~~1-1~~ | ~~13v2~~ | ~~A ser deduzido do valor do IBS.~~ |
| ~~324.102~~ | ~~UB102~~ | ~~pDifCBS~~ | ~~Percentual do diferimento do imposto monofásico~~ | ~~E~~ | ~~UB99~~ | ~~N~~ | ~~1-1~~ | ~~3v2-4~~ | ~~A ser aplicado em vCBSMono~~ |
| ~~324.103~~ | ~~UB103~~ | ~~vCBSMonoDif~~ | ~~Valor da CBS Monofásica diferida.~~ | ~~E~~ | ~~UB99~~ | ~~N~~ | ~~1-1~~ | ~~13v2~~ | ~~A ser deduzido do valor da CBS.~~ |
| | | ~~-x-~~ | | | | | | | |

> **Revogado/Descontinuado:** campos 324.100 a 324.103, riscados no original.

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| | | | **\*\*\* Tributação Monofásica: Início - layout reformulado (separação entre *ad rem* e *ad valorem*)** | | | | | | |
| **324.84** | **UB84** | **gIBSCBSMono** | **Grupo de Informações do IBS e CBS em operações com imposto monofásico** | **CG** | **UB14k** | | **1-1** | | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gIBSCBSMono” da tabela de CST do IBS e da CBS. |
| **324.85** | **UB85** | **-x-** | **Sequência XML** | **G** | **UB84** | **-** | **0-1** | **-** | |
| | | | **\*\*\* IBS Monofásico *Ad Rem*** | | | | | | |
| **324.85a** | **UB85a** | **gIBSMonoAdRem** | **Grupo de informações da Tributação Monofásica *Ad Rem* do IBS** | **CG** | **UB85** | **CG** | **0-1** | | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao ano corrente, conforme estabelecido na legislação. |
| **324.86** | **UB86** | **gMonoPadrao** | **Grupo de informações da Tributação Monofásica Padrão** | **G** | **UB85a** | **G** | **0-1** | | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gMonoPadrao” da tabela de cClassTrib do IBS e da CBS. |
| 324.86a | UB86a | qBCMono | Quantidade tributada na monofasia | E | UB86 | N | 1-1 | 11v0-4 | Informar a BC em quantidade conforme unidade de medida estabelecida na legislação para o produto. |
| 324.86b | UB86b | adRemIBS | Alíquota ad rem do IBS | E | UB86 | N | 1-1 | 3v2-4 | |
| 324.86c | UB86c | vIBSMono | Valor do IBS monofásico | E | UB86 | N | 1-1 | 13v2 | O valor do imposto é obtido pela multiplicação da alíquota ad rem pela quantidade do produto conforme unidade de medida estabelecida na legislação. |
| **324.87** | **UB87** | **gMonoReten** | **Grupo de informações da Tributação Monofásica Sujeita à Retenção** | **G** | **UB85a** | **G** | **0-1** | | **Uso em operações com combustíveis derivados de petróleo (Gasolina A) [ou \*Óleo Diesel A\*] para retenção do imposto sobre o biocombustível a ser misturado. Art. 178 da LC 214/2025.**<br>**Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gMonoReten” da tabela de cClassTrib do IBS e da CBS. |
| 324.87a | UB87a | qBCMonoReten | Quantidade tributada sujeita à retenção na monofasia | E | UB87 | N | 1-1 | 11v0-4 | Informar a BC sujeita a retenção em quantidade conforme unidade de medida estabelecida na legislação para o produto. |
| 324.87b | UB87b | adRemIBSReten | Alíquota ad rem do IBS sujeito à retenção | E | UB87 | N | 1-1 | 3v2-4 | |
| 324.87c | UB87c | vIBSMonoReten | Valor do IBS monofásico sujeito à retenção | E | UB87 | N | 1-1 | 13v2 | Valor do IBS com retenção, a ser somado ao valor de IBS a ser recolhido. |

<!-- p.25 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **324.88** | **UB88** | **gMonoRet** | **Grupo de informações da Tributação Monofásica Retida Anteriormente** | **G** | **UB85a** | **G** | **0-1** | | **Tributação monofásica própria sobre combustíveis cobrada anteriormente**<br>**Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gMonoRet” da tabela cClassTrib do IBS e da CBS. |
| 324.88a | UB88a | vIBSMonoRet | Valor do IBS retido anteriormente | E | UB88 | N | 1-1 | 13v2 | |
| **324.89** | **UB89** | **gpBioDiferenca** | **Grupo de informações sobre mistura de EAC com gasolina A em percentual inferior ou superior ao obrigatório** | **G** | **UB85a** | **G** | **0-1** | | **Referência (LC 214/2025): Art. 179, II, a e b (cClassTrib 620004 e 620005)**<br>**Informar caso pBio seja diferente do pBioObrigatório.**<br>**Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gpBioDiferenca” da tabela cClassTrib do IBS e da CBS. |
| 324.89a | UB89a | qBCBioComb | Quantidade de Biocombustível (EAC) a recolher ou a ressarcir | E | UB89 | N | 1-1 | 11v0-4 | |
| 324.89b | UB89b | vIBSDiferenca | Valor do IBS correspondente a diferença em relação ao pBioObrigatorio | E | UB89 | N | 1-1 | 13v2 | Se classTrib = **620004**: valor a ser recolhido<br>Se classTrib = **620005**: valor a ser ressarcido |
| | | | **\*\*\* IBS Monofásico *Ad Valorem*** | | | | | | |
| **324.90** | **UB90** | **gIBSMonoAdValorem** | **Grupo de informações da Tributação Monofásica *Ad Valorem* do IBS** | **CG** | **UB85** | **CG** | **0-1** | | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao ano corrente, conforme estabelecido na legislação. |
| **324.91** | **UB91** | **gMonoPadrao** | **Grupo de informações da Tributação Monofásica Padrão** | **G** | **UB90** | **G** | **0-1** | | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gMonoPadrao” da tabela de cClassTrib do IBS e da CBS. |
| 324.91a | UB91a | vBCMono | Valor tributado na monofasia | E | UB91 | N | 1-1 | 13v2 | |
| 324.91b | UB91b | pAliqMonoUF | Alíquota *ad valorem* do IBS Estadual | E | UB91 | N | 1-1 | 3v2-4 | |
| 324.91c | UB91c | vIBSMonoUF | Valor do IBS monofásico Estadual | E | UB91 | N | 1-1 | 13v2 | |
| 324.91d | UB91d | pAliqMonoMun | Alíquota *ad valorem* do IBS Municipal | E | UB91 | N | 1-1 | 3v2-4 | |
| 324.91e | UB91e | vIBSMonoMun | Valor do IBS monofásico do Municipal | E | UB91 | N | 1-1 | 13v2 | |
| 324.91f | UB91f | vIBSMono | Valor do IBS monofásico | R | UB91 | N | 1-1 | 13v2 | **Observação:** vIBSMonoUF + vIBSMonoMun |
| **324.92** | **UB92** | **gMonoReten** | **Grupo de informações da Tributação Monofásica Sujeita à Retenção** | **G** | **UB90** | **G** | **0-1** | | **Uso em operações com combustíveis derivados de petróleo (Gasolina A) [ou \*Óleo Diesel A\*] para retenção do imposto sobre o biocombustível a ser misturado. Art. 178 da LC 214/2025.**<br>**Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gMonoReten” da tabela de cClassTrib do IBS e da CBS. |
| 324.92a | UB92a | vBCMonoReten | Valor tributado sujeito à retenção na monofasia | E | UB92 | N | 1-1 | 13v2 | |

<!-- p.26 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 324.92b | UB92b | pAliqMonoReten | Alíquota ad valorem do IBS sujeito à retenção | E | UB92 | N | 1-1 | 3v2-4 | |
| 324.92c | UB92c | vIBSMonoReten | Valor do IBS monofásico sujeito à retenção | E | UB92 | N | 1-1 | 13v2 | Valor do IBS com retenção, a ser somado ao valor de IBS a ser recolhido. |
| **324.93** | **UB93** | **gMonoRet** | **Grupo de informações da Tributação Monofásica Retida Anteriormente** | **G** | **UB90** | **G** | **0-1** | | **Tributação monofásica própria sobre combustíveis cobrada anteriormente**<br>**Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gMonoRet” da tabela cClassTrib do IBS e da CBS. |
| 324.93a | UB93a | vIBSMonoRet | Valor do IBS retido anteriormente | E | UB93 | N | 1-1 | 13v2 | |
| **324.94** | **UB94** | **gpBioDiferenca** | **Grupo de informações sobre mistura de EAC com gasolina A em percentual inferior ou superior ao obrigatório** | **G** | **UB90** | **G** | **0-1** | | **Referência (LC 214/2025): Art. 179, II, a e b (cClassTrib 620004 e 620005)**<br>**Informar caso pBio seja diferente do pBioObrigatório.**<br>**Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gpBioDiferenca” da tabela cClassTrib do IBS e da CBS. |
| 324.94a | UB94a | qBCBioComb | Quantidade de Biocombustível (EAC) a recolher ou a ressarcir | E | UB94 | N | 1-1 | 11v0-4 | |
| 324.94b | UB94b | vIBSDiferenca | Valor do IBS correspondente a diferença em relação ao pBioObrigatorio | E | UB94 | N | 1-1 | 13v2 | Se classTrib = **620004**: valor a ser recolhido<br>Se classTrib = **620005**: valor a ser ressarcido |
| **324.95** | **UB95** | **-x-** | **Sequência XML** | **G** | **UB84** | **-** | **0-1** | **-** | |
| | | | **\*\*\* CBS Monofásica *Ad Rem*** | | | | | | |
| **324.95a** | **UB95a** | **gCBSMonoAdRem** | **Grupo de informações da Tributação Monofásica *Ad Rem* da CBS** | **CG** | **UB95** | **CG** | **0-1** | | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao ano corrente, conforme estabelecido na legislação. |
| **324.96** | **UB96** | **gMonoPadrao** | **Grupo de informações da Tributação Monofásica Padrão** | **G** | **UB95a** | **G** | **0-1** | | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gMonoPadrao” da tabela de cClassTrib do IBS e da CBS. |
| 324.96a | UB96a | qBCMono | Quantidade tributada na monofasia | E | UB96 | N | 1-1 | 11v0-4 | Informar a BC em quantidade conforme unidade de medida estabelecida na legislação para o produto. |
| 324.96b | UB96b | adRemCBS | Alíquota ad rem da CBS | E | UB96 | N | 1-1 | 3v2-4 | |
| 324.96c | UB96c | vCBSMono | Valor da CBS monofásica | E | UB96 | N | 1-1 | 13v2 | O valor do imposto é obtido pela multiplicação da alíquota ad rem pela quantidade do produto conforme unidade de medida estabelecida na legislação. |
| **324.97** | **UB97** | **gMonoReten** | **Grupo de informações da Tributação Monofásica Sujeita à Retenção** | **G** | **UB95a** | **G** | **0-1** | | **Uso em operações com combustíveis derivados de petróleo (Gasolina A) [ou \*Óleo Diesel A\*] para retenção do imposto sobre o biocombustível a ser misturado. Art. 178 da LC 214/2025.**<br>**Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gMonoReten” da tabela de cClassTrib do IBS e da CBS. |

<!-- p.27 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 324.97a | UB97a | qBCMonoReten | Quantidade tributada sujeita à retenção na monofasia | E | UB97 | N | 1-1 | 11v0-4 | Informar a BC sujeita a retenção em quantidade conforme unidade de medida estabelecida na legislação para o produto. |
| 324.97b | UB97b | adRemCBSReten | Alíquota ad rem da CBS sujeita à retenção | E | UB97 | N | 1-1 | 3v2-4 | |
| 324.97c | UB97c | vCBSMonoReten | Valor da CBS monofásica sujeita à retenção | E | UB97 | N | 1-1 | 13v2 | Valor da CBS com retenção, a ser somado ao valor de CBS a ser recolhida. |
| **324.98** | **UB98** | **gMonoRet** | **Grupo de informações da Tributação Monofásica Retida Anteriormente** | **G** | **UB95a** | **G** | **0-1** | | **Tributação monofásica própria sobre combustíveis cobrada anteriormente**<br>**Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gMonoRet” da tabela cClassTrib do IBS e da CBS. |
| 324.98a | UB98a | vCBSMonoRet | Valor da CBS retida anteriormente | E | UB98 | N | 1-1 | 13v2 | |
| **324.99** | **UB99** | **gpBioDiferenca** | **Grupo de informações sobre mistura de EAC com gasolina A em percentual inferior ou superior ao obrigatório** | **G** | **UB95a** | **G** | **0-1** | | **Referência (LC 214/2025): Art. 179, II, a e b (cClassTrib 620004 e 620005)**<br>**Informar caso pBio seja diferente do pBioObrigatório.**<br>**Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gpBioDiferenca” da tabela cClassTrib do IBS e da CBS. |
| 324.99a | UB99a | qBCBioComb | Quantidade de Biocombustível (EAC) a recolher ou a ressarcir | E | UB99 | N | 1-1 | 11v0-4 | |
| 324.99b | UB99b | vCBSDiferenca | Valor da CBS correspondente a diferença em relação ao pBioObrigatorio | E | UB99 | N | 1-1 | 13v2 | Se classTrib = **620004**: valor a ser recolhido<br>Se classTrib = **620005**: valor a ser ressarcido |
| | | | **\*\*\* CBS Monofásica *Ad Valorem*** | | | | | | |
| **324.100** | **UB100** | **gCBSMonoAdValorem** | **Grupo de informações da Tributação Monofásica *Ad Valorem* da CBS** | **CG** | **UB95** | **CG** | **0-1** | | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao ano corrente, conforme estabelecido na legislação. |
| **324.101** | **UB101** | **gMonoPadrao** | **Grupo de informações da Tributação Monofásica Padrão** | **G** | **UB100** | **G** | **0-1** | | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gMonoPadrao” da tabela de cClassTrib do IBS e da CBS. |
| 324.101a | UB101a | vBCMono | Valor tributado na monofasia | E | UB101 | N | 1-1 | 13v2 | |
| 324.101b | UB101b | pAliqMonoCBS | Alíquota ad valorem da CBS | E | UB101 | N | 1-1 | 3v2-4 | |
| 324.101c | UB101c | vCBSMono | Valor da CBS monofásica | R | UB101 | N | 1-1 | 13v2 | |
| **324.102** | **UB102** | **gMonoReten** | **Grupo de informações da Tributação Monofásica Sujeita à Retenção** | **G** | **UB100** | **G** | **0-1** | | **Uso em operações com combustíveis derivados de petróleo (Gasolina A) [ou \*Óleo Diesel A\*] para retenção do imposto sobre o biocombustível a ser misturado. Art. 178 da LC 214/2025.**<br>**Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gMonoReten” da tabela de cClassTrib do IBS e da CBS. |

<!-- p.28 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 324.102a | UB102a | vBCMonoReten | Valor tributado sujeito à retenção na monofasia | E | UB102 | N | 1-1 | 13v2 | |
| 324.102b | UB102b | pAliqMonoReten | Alíquota ad valorem da CBS sujeito à retenção | E | UB102 | N | 1-1 | 3v2-4 | |
| 324.102c | UB102c | vCBSMonoReten | Valor da CBS monofásica sujeita à retenção | E | UB102 | N | 1-1 | 13v2 | Valor da CBS com retenção, a ser somado ao valor de CBS a ser recolhida. |
| **324.103** | **UB103** | **gMonoRet** | **Grupo de informações da Tributação Monofásica Retida Anteriormente** | **G** | **UB100** | **G** | **0-1** | | **Tributação monofásica própria sobre combustíveis cobrada anteriormente**<br>**Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gMonoRet” da tabela cClassTrib do IBS e da CBS. |
| 324.103a | UB103a | vCBSMonoRet | Valor da CBS retida anteriormente | E | UB103 | N | 1-1 | 13v2 | |
| **324.104** | **UB104** | **gpBioDiferenca** | **Grupo de informações sobre mistura de EAC com gasolina A em percentual inferior ou superior ao obrigatório** | **G** | **UB100** | **G** | **0-1** | | **Referência (LC 214/2025): Art. 179, II, a e b (cClassTrib 620004 e 620005)**<br>**Informar caso pBio seja diferente do pBioObrigatório.**<br>**Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gpBioDiferenca” da tabela cClassTrib do IBS e da CBS. |
| 324.104a | UB104a | qBCBioComb | Quantidade de Biocombustível (EAC) a recolher ou a ressarcir | E | UB104 | N | 1-1 | 11v0-4 | |
| 324.104b | UB104b | vCBSDiferenca | Valor da CBS correspondente a diferença em relação ao pBioObrigatorio | E | UB104 | N | 1-1 | 13v2 | Se classTrib = **620004**: valor a ser recolhido<br>Se classTrib = **620005**: valor a ser ressarcido |
| | | | **\*\*\* Tributação Monofásica: Totais do Item** | | | | | | |
| ~~324.104~~<br>324.105a | ~~UB104~~<br>UB105a | vTotIBSMonoItem | Total de IBS Monofásico. | E | UB84 | N | 1-1 | 13v2 | |
| 324.105b | UB105b | vTotCBSMonoItem | Total da CBS Monofásica. | E | UB84 | N | 1-1 | 13v2 | |
| | | | **\*\*\* Tributação Monofásica: Fim** | | | | | | |
| **324.106** | **UB106** | **gTransfCred** | **Transferências de Crédito** | **CG** | **UB14k** | | **1-1** | | |
| 324.107 | UB107 | vIBS | Valor do IBS a ser transferido | E | UB106 | N | 1-1 | 13v2 | |
| 324.108 | UB108 | vCBS | Valor da CBS a ser transferida | E | UB106 | N | 1-1 | 13v2 | |
| **324.112** | **UB112** | **gAjusteCompet** | **Ajuste de Competência** | **CG** | **UB14k** | **-** | **1-1** | **-** | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gAjusteCompet” da tabela de CST do IBS e da CBS. |
| 324.113 | UB113 | competApur | Ano e mês referência do período de apuração (AAAA-MM) | E | UB112 | C | 1-1 | 7 | Informar período atual ou retroativo. |

> **Revogado/Descontinuado:** texto riscado no original (trecho(s) desta tabela).

<!-- p.29 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 324.114 | UB114 | vIBS | Valor do IBS | E | UB112 | N | 1-1 | 13v2 | |
| 324.115 | UB115 | vCBS | Valor da CBS | E | UB112 | N | 1-1 | 13v2 | |
| **324.116** | **UB116** | **gEstornoCred** | **Estorno de Crédito** | **G** | **UB12** | **-** | **0-1** | **-** | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gEstornoCred” da tabela de cClassTrib do IBS e da CBS. |
| 324.117 | UB117 | vIBSEstCred | Valor do IBS a ser estornado | E | UB116 | N | 1-1 | 13v2 | |
| 324.118 | UB118 | vCBSEstCred | Valor da CBS a ser estornada | E | UB116 | N | 1-1 | 13v2 | |
| **324.119** | **UB119** | **-x-** | **Sequência XML** | **G** | **UB12** | **-** | **0-1** | **-** | |
| **324.120** | **UB120** | **gCredPresOper** | **Crédito Presumido da Operação** | **CG** | **UB119** | **-** | **1-1** | **-** | **Observação 1:** a permissão ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gCredPresOper” da tabela de cClassTrib do IBS e da CBS.<br>**Observação 2:** O valor "1" do indicador “ind_gCredPresOper” significa que o contribuinte pode utilizar o crédito presumido, sem obrigatoriedade (permite, mas não exige). |
| 324.121 | UB121 | vBCCredPres | Valor da Base de Cálculo do Crédito Presumido da Operação | E | UB120 | N | 1-1 | 13v2 | |
| 324.122 | UB122 | cCredPres | Código de Classificação do Crédito Presumido | E | UB120 | N | 1-1 | 2 | Utilizar tabela cCredPres (Anexo IV).<br>Exemplos:<br>1 - Aquisição de Produtor Rural não contribuinte.<br>2 - Tomador de serviço de transporte de TAC PF não contrib.<br>3 - Aquisição de pessoa física com destino à reciclagem.<br>4 - Aquisição de bens móveis de PF não contrib. para revenda (veículos / brechó).<br>5 - Regime opcional para cooperativa. |
| **324.123** | **UB123** | **gIBSCredPres** | **Grupo de Informações do Crédito Presumido referente ao IBS** | **G** | **UB120** | **-** | **0-1** | **-** | **Grupo de Informações do Crédito Presumido do IBS, quando aproveitado pelo emitente do documento.<br>Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gIBSCredPres” da tabela de cCredPres do IBS e da CBS. |
| 324.124 | UB124 | pCredPres | Percentual do Crédito Presumido | E | UB123 | N | 1-1 | 3v2-4 | |
| 324.125 | UB125 | vCredPres | Valor do Crédito Presumido | CE | UB123 | N | 1-1 | 13v2 | |
| 324.126 | UB126 | vCredPresCondSus | Valor do Crédito Presumido em condição suspensiva. | CE | UB123 | N | 1-1 | 13v2 | Valor do Crédito Presumido em Condição Suspensiva. Preencher apenas para cCredPres com indicação de Condição Suspensiva. |

<!-- p.30 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **324.127** | **UB127** | **gCBSCredPres** | **Grupo de Informações do Crédito Presumido referente a CBS** | **G** | **UB120** | **-** | **0-1** | **-** | **Grupo de Informações do Crédito Presumido da CBS, quando aproveitado pelo emitente do documento.<br>Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gCBSCredPres” da tabela de cCredPres do IBS e da CBS. |
| 324.128 | UB128 | pCredPres | Percentual do Crédito Presumido | E | UB127 | N | 1-1 | 3v2-4 | |
| 324.129 | UB129 | vCredPres | Valor do Crédito Presumido | CE | UB127 | N | 1-1 | 13v2 | |
| 324.130 | UB130 | vCredPresCondSus | Valor do Crédito Presumido em condição suspensiva. | CE | UB127 | N | 1-1 | 13v2 | Valor do Crédito Presumido em Condição Suspensiva. Preencher apenas para cCredPres com indicação de Condição Suspensiva. |
| **324.131** | **UB131** | **gCredPresIBSZFM** | **Grupo para apropriação de crédito presumido de IBS sobre o saldo devedor na ZFM (art. 450, § 1º, LC 214/25)** | **CG** | **UB119** | **-** | **1-1** | **-** | **Observação:** a obrigatoriedade ou vedação do preenchimento deste grupo está condicionada ao indicador “ind_gCredPresIBSZFM” da tabela de CST do IBS e da CBS. |
| 324.132 | UB132 | competApur | Ano e mês referência do período de apuração (AAAA-MM) | E | UB131 | C | 1-1 | 7 | Informar período atual ou retroativo. |
| 324.133 | UB133 | tpCredPresIBSZFM | Tipo de classificação de acordo com o art. 450, § 1º, da LC 214/25 para o cálculo do crédito presumido na ZFM | E | UB131 | N | 1-1 | 1 | Classificação conforme percentuais definidos no art. 450, § 1º, da LC 214/25 para o cálculo do crédito presumido:<br>0 - Sem Crédito Presumido<br>1 - Bens de consumo final (55%)<br>2 - Bens de capital (75%)<br>3 - Bens intermediários (90,25%)<br>4 - Bens de informática e outros definidos em legislação (100%) |
| 324.134 | UB134 | vCredPresIBSZFM | Valor do crédito presumido calculado sobre o saldo devedor apurado | E | UB131 | N | 1-1 | 13v2 | |

## Grupo VB. Total do item da NF-e

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 325h | VB01 | vItem | Valor Total do Item da NF-e | E | H01 | N | 0-1 | 13v2 | Valor total do Item, correspondente à sua participação no total da nota.<br>A soma dos itens deverá corresponder ao total da nota. |

## Grupo VC. Referenciamento de item de outro Documento Fiscal Eletrônico - DF-e

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 325i | VC01 | DFeReferenciado | Documento Fiscal Eletrônico Referenciado | G | H01 | | 0-1 | | Grupo para referenciamento de itens de outro DF-e. |
| 325j | VC02 | chaveAcesso | Chave de acesso do DF-e referenciado | E | VC01 | N | 1-1 | 44 | Chave de acesso do DF-e referenciado. |
| 325k | VC03 | nItem | Número do item do documento referenciado. | E | VC01 | N | 0-1 | 3 | Corresponde ao atributo “nItem” do elemento “det” do documento original.<br>**Observação:** tag opcional apenas para Nota de Débito (tpNFDebito) = 03-Débitos de notas fiscais não processadas na apuração (RV VC03-20). |

<!-- p.31 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
## Grupo W03. Total da NF-e - IBS / CBS / IS

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **355.1** | **W31** | **ISTot** | **Grupo total do imposto seletivo** | **G** | **W01** | **-** | **0-1** | **-** | O grupo de valores totais da NF-e deve ser informado com o somatório do campo correspondente dos itens.<br>O IS é “por fora”, portanto seu valor deve ser adicionado ao valor total da NF. |
| 355.3 | W33 | vIS | Total do imposto seletivo | E | W31 | N | 1-1 | 13v2 | |
| **355.4** | **W34** | **IBSCBSTot** | **Totais da NF-e com IBS e CBS** | **G** | **W01** | **-** | **0-1** | **-** | O grupo de valores totais da NF-e deve ser informado com o somatório do campo correspondente dos itens.<br>O IBS e a CBS são “por fora”, por isso seus valores devem ser adicionados ao valor total da NF. |
| 355.5 | W35 | vBCIBSCBS | Valor total da BC do IBS e da CBS | E | W34 | N | 1-1 | 13v2 | |
| **355.6** | **W36** | **gIBS** | **Grupo total do IBS** | **G** | **W34** | **-** | **0-1** | **-** | |
| **355.7** | **W37** | **gIBSUF** | **Grupo total do IBS da UF** | **G** | **W36** | **-** | **1-1** | **-** | |
| 355.8 | W38 | vDif | Valor total do diferimento | E | W37 | N | 1-1 | 13v2 | |
| 355.9 | W39 | vDevTrib | Valor total de devolução de tributos | E | W37 | N | 1-1 | 13v2 | |
| 355.11 | W41 | vIBSUF | Valor total do IBS da UF | E | W37 | N | 1-1 | 13v2 | |
| **355.12** | **W42** | **gIBSMun** | **Grupo total do IBS do Município** | **G** | **W36** | **-** | **1-1** | **-** | |
| 355.13 | W43 | vDif | Valor total do diferimento | E | W42 | N | 1-1 | 13v2 | |
| 355.14 | W44 | vDevTrib | Valor total de devolução de tributos | E | W42 | N | 1-1 | 13v2 | |
| 355.16 | W46 | vIBSMun | Valor total do IBS do Município | E | W42 | N | 1-1 | 13v2 | |
| | | -x- | | | | | | | |
| 355.17 | W47 | vIBS | Valor total do IBS | E | W36 | N | 1-1 | 13v2 | |
| 355.18 | W48 | vCredPres | Valor total do crédito presumido | E | W36 | N | 1-1 | 13v2 | |
| 355.19 | W49 | vCredPresCondSus | Valor total do crédito presumido em condição suspensiva. | E | W36 | N | 1-1 | 13v2 | |
| **355.20** | **W50** | **gCBS** | **Grupo total da CBS** | **G** | **W34** | **-** | **0-1** | **-** | |
| 355.23 | W53 | vDif | Valor total do diferimento | E | W50 | N | 1-1 | 13v2 | |
| 355.24 | W54 | vDevTrib | Valor total de devolução de tributos | E | W50 | N | 1-1 | 13v2 | |
| 355.26 | W56 | vCBS | Valor total da CBS | E | W50 | N | 1-1 | 13v2 | |
| 355.26a | W56a | vCredPres | Valor total do crédito presumido | E | W50 | N | 1-1 | 13v2 | |
| 355.26b | W56b | vCredPresCondSus | Valor total do crédito presumido em condição suspensiva. | E | W50 | N | 1-1 | 13v2 | |
| **355.27** | **W57** | **gMono** | **Grupo total da Monofasia** | **G** | **W34** | **-** | **0-1** | **-** | |
| 355.28 | W58 | vIBSMono | Total do IBS monofásico | E | W57 | N | 1-1 | 13v2 | |
| 355.29 | W59 | vCBSMono | Total da CBS monofásica | E | W57 | N | 1-1 | 13v2 | |
<!-- p.32 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 355.29a | W59a | vIBSMonoReten | Total do IBS monofásico sujeito à retenção | E | W57 | N | 1-1 | 13v2 | |
| 355.29b | W59b | vCBSMonoReten | Total da CBS monofásica sujeita à retenção | E | W57 | N | 1-1 | 13v2 | |
| 355.29c | W59c | vIBSMonoRet | Total do IBS monofásico retido anteriormente | E | W57 | N | 1-1 | 13v2 | |
| 355.29d | W59d | vCBSMonoRet | Total da CBS monofásica retida anteriormente | E | W57 | N | 1-1 | 13v2 | |
| **355.29e** | **W59e** | **gEstornoCred** | **Grupo total do Estorno de Crédito** | **G** | **W34** | **-** | **0-1** | **-** | |
| 355.29f | W59f | vIBSEstCred | Valor total do IBS estornado | E | W59e | N | 1-1 | 13v2 | |
| 355.29g | W59g | vCBSEstCred | Valor total da CBS estornada | E | W59e | N | 1-1 | 13v2 | |
| | | -x- | | | | | | | |
| 355.30 | W60 | vNFTot | Valor total da NF-e com IBS / CBS / IS | E | W01 | N | 0-1 | 13v2 | |
