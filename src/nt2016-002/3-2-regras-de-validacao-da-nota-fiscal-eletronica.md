<!-- p.57 -->
# 3.2 Regras de Validação (RV) da Nota Fiscal Eletrônica


Seguem alterações relativas às Regras de Validação.

### Grupo B. Identificação da NF-e

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| B25b-40 | 55 | NF-e com indicativo de Operação presencial, fora do estabelecimento (tag:indPres=5) e não informada campos refNFe (id:BA02) ou refNF (id:BA03) | Obrig. | 864 | Rej. | Rejeição: NF-e com indicativo de Operação presencial, fora do estabelecimento e não informada NF referenciada |

### Grupo BA. Documento Fiscal Referenciado

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| BA03-10 | 55 | Se informada NF Modelo 1 ou NF Modelo 2 referenciada (tag:refNF): – Verificar duplicidade de Nota Fiscal Modelo 1 ou 2 referenciada (mesmo CNPJ, Modelo, Série, Número) (NT 2013/003) | Facult. | 681 | Rej. | Rejeição: Duplicidade de NF referenciada (CNPJ, Modelo, Série e Número) [nOcor: nnn] |

### Grupo I. Produtos e Serviços

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I05e-10 | 55/65 | Se informado indEscala=”N- não relevante” (id: I05d), deve ser informado CNPJ do Fabricante da Mercadoria (id: I05e) | Obrig. | 879 | Rej. | Rejeição: Informado item “Produzido em Escala NÃO Relevante” e não informado CNPJ do Fabricante [nItem:nnn] |
| I05e-20 | 55/65 | Se informado CNPJFab (id: I05e) - CNPJ inválido (DV, zeros) | Obrig | 489 | Rej. | Rejeição: CNPJ informado inválido (DV ou zeros) |
| I13-20 | 55/65 | Informado campo cProdANP (id: LA02) = 210203001 (GLP) e campo uTrib (id: I13) <> “kg” (ignorar a diferenciação entre maiúsculas e minúsculas) | Obrig. | 854 | Rej. | Rejeição: Unidade Tributável (tag:uTrib) incompatível com produto informado [nItem:nnn] |

<!-- p.58 -->
### Grupo I08. Rastreabilidade de produto

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I83-10 | 55/65 | Data de Fabricação dFab (id:I83) maior que a data de processamento | Obrig | 877 | Rej | Rejeição: Data de fabricação maior que a data de processamento [nItem:nnn] |
| I84-10 | 55/65 | Informada data de validade dVal(id: I84) menor que Data de Fabricação dFab (id: I83) | Obrig | 870 | Rej | Rejeição: Data de validade incompatível com data de fabricação [nItem:nnn] |

### Grupo K. Item / Medicamentos

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| K01-20 | 55 | Se informado Grupo de Medicamentos (tag:med) obrigatório preenchimento do grupo rastro (id: I80) | Obrig | 873 | Rej | Rejeição: Operação com medicamentos e não informado os campos de rastreabilidade [nItem:nnn] |

### Grupo LA. Item / Combustível

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| LA03-10 | 55 | Informado percentual de Gás Natural na mistura (tag:pMixGN) para produto diferente de "210203001 – GLP" (tag:cProdANP) | Obrig. | 461 | Rej. | Rejeição: Informado percentual de Gás Natural na mistura para produto diferente de GLP |
| LA03c-10 | 55/65 | Informado percentual do GLP (id: LA03a) ou percentual de Gás Natural Nacional (id: LA03b) ou percentual de Gás Natural Importado (id: LA03c) para produto diferente de "210203001 – GLP" (tag:cProdANP) | Obrig. | 461 | Rej. | Rejeição: Informado campos de percentual de GLP e/ou GLGNn e/ou GLGNi para produto diferente de GLP [nItem: nnn] |
| LA03c-20 | 55/65 | Se informado GLP (cProdANP=210203001) o somatório dos percentuais pGLP(id:LA03a) e pGNn(id:LA03b) e pGNi(id:LA03c) deve ser igual a 100. | Obrig. | 855 | Rej. | Rejeição: Somatório percentuais de GLP derivado do petróleo, GLGNn e GLGNi diferente de 100 [nItem: nnn]. |
| LA03d-10 | 55 | Obrigatória a informação do campo vPart (id: LA03d) para produto "210203001 – GLP" (tag:cProdANP) | Obrig. | 856 | Rej. | Rejeição: Campo valor de partida não preenchido para produto GLP [nItem: nnn]. |

### Grupo N. Item / Tributo: ICMS

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| N08-10 | 55/65 | Grupo ICMS60 (id:N08) informado indevidamente nas operações com os produtos combustíveis sujeitos a repasse interestadual (tag:cProdANP) igual a 210203001, 320101001, 320101002, 320102002, 320102001, 320102003, 320102005, 320201001, 320103001, 220102001, 320301001, 320103002, 820101032, 820101026, 820101027, 820101004, 820101005, 820101022, 820101031, 820101030, 820101014, 820101006, 820101016, 820101015, 820101025, 820101017, 820101018, 820101019, 820101020, 820101021, 420105001, 420101005, 420101004, 420102005, 420102004, 420104001, 820101033, 820101034, 420106001, 820101011, 820101003, 820101013, 820101012, 420106002, 830101001, 420301004, 420202001, 420301001, 420301002, 410103001, 410101001, 410102001, 430101004, 510101001, 510101002, 510102001, 510102002, 510201001, 510201003, 510301003, 510103001, 510301001 Obs.: Para CST 60 obrigatório o preenchimento do Grupo Repasse de ICMS ST (id:N10b) com o Campo Tributação do ICMS (id:N12) igual a 60 | Obrig. | 858 | Rej | Rejeição: Grupo de Tributação informado indevidamente [nItem: nnn] |
| <!-- p.59 --> N12-80 | 55 | Operação com Contribuinte Isento de Inscrição Estadual Obrig. (indIEDest=2) e CST constante na relação abaixo: - 50-Suspensão na cobrança do ICMS; - 51-Diferimento na cobrança do ICMS. Exceção 1: A regra de validação acima não se aplica para o CST=50-Suspensão, nas operações com CFOP de conserto ou reparo (CFOP 1915, 1916, 2915, 2916, 5915, 5916, 6915 e 6916) ou de remessa para demonstração dentro do Estado (CFOP 1912, 1913, 5912 e 5913). Exceção 2: A regra de validação acima não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/07/2016. Exceção 3: A critério da UF, a regra de validação acima não se aplica para CST=51-Diferimento em operações internas (idDest=1) quando o destinatário for Pessoa Jurídica (tag:dest/CNPJ). Exceção 4: Esta regra não se aplica na emissão da NFA-e nas operações internas, a critério da UF. |  | 529 | Rej. | Rejeição: CST incompatível na operação com Contribuinte Isento de Inscrição Estadual [nItem:999] |
| N17b-10 | 55/65 | Informado percentual de FCP (id:N17b) igual a zero. Obrig. Nota: não informar os campos relativos a FCP para os produtos não sujeitos à sua incidência. |  | 880 | Rej. | Rejeição: Percentual de FCP igual a zero [nItem: nnn] |
| <!-- p.60 --> N17b-20 | 55/65 | Se informado percentual de FCP (id:N17b), percentual de FCP Obrig. validado conforme tabela de alíquota definida por UF do emitente (tag:enderEmit/UF, id:C12). |  | 874 | Rej. | Rejeição: Percentual de FCP inválido [nItem: nnn] |
| N17c-10 | 55/65 | Informado a tag vFCP (id:N17c) e finNFe=1 (id:B25), verificar: Obrig. - Se CST=00 e vFCP (id:N17c) difere da vBC (id:N15)* pFCP (id:N17b) (*4) ou - Se CST=10, 20,70, 90 ou 51 e vFCP (id:N17c) difere da vBCFCP (id:N17a)* pFCP (id:N17b) (*4) |  | 860 | Rej | Rejeição: Valor do FCP informado difere de base de cálculo*alíquota [nItem: nnn] |
| N17c-20 | 55/65 | Se Operação interestadual (tag:idDest=2) para Consumidor Final Obrig. (tag: indFinal=1), não contribuinte (tag: indIEDest=9) e informado o valor do FCP (tag: vFCP) Observação: Em operações interestaduais para consumidor final não contribuinte, o valor do FCP, quando existir, deve ser informado no campo vFCPUFDest (id:NA13). |  | 876 | Rej | Rejeição: Operação interestadual para Consumidor Final e valor do FCP informado em campo diferente de vFCPUFDest (id:NA13) [nItem:nnn] |
| N23b-10 | 55/65 | Informado percentual de FCP ST (tag:N23b) igual a zero. Nota: não informar os campos relativos a FCP ST para os produtos não sujeitos à sua incidência. | Obrig. | 881 | Rej. | Rejeição: Percentual de FCPST igual a zero [nItem: nnn] |
| N23b-20 | 55/65 | Se UF do destinatário diferente de “EX” e se informado percentual de FCP ST (tag:N23b), percentual de FCP validado conforme tabela de alíquota definida por UF. Obs.1: Utilizar a UF do destinatário na validação (tag: enderDest/UF, id:E12); Obs.2: Quando informada a UF do local de entrega (tag: entrega/UF) diferente de “EX”, aceitar como válidas tanto a alíquota da UF do destinatário (tag: enderDest/UF; id:E12) quanto a alíquota da UF de entrega (tag: entrega/UF). Obs.: Implementação Futura | Obrig. | 875 | Rej. | Rejeição: Percentual de FCPST inválido [nItem: nnn] |
| N23d-10 | 55/65 | Informado a tag vFCPST (id:N23d) e finNFe=1 (id:B25), verificar: - Se informado CST= 10 ou 30 ou 70 ou 90 ou CSOSN=201 ou 202 ou 203 ou 900 e vFCPST (id:N23d) difere da vBCFCPST (id:N23a)* pFCPST (id:N23b) - vFCP (id:N17c) (*4) Obs.1: Campos não informados devem ser considerados como “0" Obs.2: Regra de validação aplicável a critério da UF Obs.3: Implementação Futura | Obrig. | 860 | Rej | Rejeição: Valor do FCP informado difere de base de cálculo*alíquota [nItem: nnn] |
| <!-- p.61 --> N27b-10 | 55/65 | Informado percentual de FCP ST retido (id:N27b) igual a zero. Nota: não informar os campos relativos a FCP ST para os produtos não sujeitos à sua incidência. | Obrig. | 881 | Rej. | Rejeição: Percentual de FCPST igual a zero [nItem: nnn] |
| N27b-20 | 55/65 | Se UF do destinatário diferente de “EX” e se informado percentual de FCP ST retido (id:N27b), percentual de FCP validado conforme tabela de alíquota definida por UF. Obs.1: Utilizar a UF do destinatário na validação (tag: enderDest/UF; id:E12); Obs.2: Quando informada a UF do local de entrega (tag: entrega/UF) diferente de “EX, aceitar como válidas tanto a alíquota da UF de destinatário (tag: enderDest/UF; id:E12) quanto a alíquota da UF de entrega (tag: entrega/UF). Obs.3: Implementação Futura | Obrig. | 875 | Rej. | Rejeição: Percentual de FCPST inválido [nItem: nnn] |
| N27d-10 | 55/65 | Informado a tag vFCPSTRet (id:N27d) e finNFe=1 (id:B25), verificar: - Se CST=60 ou CSOSN=500 e vFCPSTRet (id:N27d) difere da vBCFCPSTRet (id:N27a)* pFCPSTRet (id:N27b) (*4) Obs.: regra de validação para implementação futura | Obrig. | 860 | Rej | Rejeição: Valor do FCP informado difere de base de cálculo*alíquota [nItem: nnn] |
| N28-30 | 55/65 | Se informado tag:motDesICMS, o vICMSDeson (id:N28a) deve ser maior que zero (NT 2011/004). Observação: O motivo da desoneração pode ocorrer nos grupos de tributação do ICMS 20, 30, 40, 70 e 90. | Facult. | 627 | Rej. | Rejeição: O valor do ICMS desonerado deve ser informado |
| N33-10 | 55/65 | Se Informado CST = 60 ou CSOSN=500 e indFinal=1 (id:B25a), preenchimento obrigatório dos campos do grupo opcional para informações do ICMS Efetivo (N33) Observação: Implementação opcional a critério da UF. | Facul. | 906 | Rej. | Rejeição: Não informados os campos do grupo opcional para informações do ICMS Efetivo, obrigatório quando CST = 60 ou CSOSN=500 e operação com consumidor final [nItem: nnn] |

<!-- p.62 -->
### Grupo NA. ICMS para UF de destino

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|

o

NA13-10 55 Valor do ICMS relativo ao Fundo de Combate à Pobreza na UF de Obrig. 793 Rej. Rejeição: Valor do ICMS relativo ao Fundo de

destino tag: vFCPUFDest (id:NA11) difere de vBCFCPUFDest Combate à Pobreza na UF de destino difere do

(id:NA04) * pFCPUFDest (id:NA05) (*4) calculado [nItem:999]

Exceção: A regra de validação não se aplica, em produção, para

Nota Fiscal com data de emissão anterior a 01/01/2016.

### Grupo W. Total da NF-e

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| W04a-10 | 55/65 | Total do ICMS desonerado (id:W04a) difere do somatório do valor dos itens (id:N28a). | Facult. | 795 | Rej. | Rejeição: Total do ICMS desonerado difere do somatório dos itens |
| W04b-10 | 55/65 | Total do FCP (id: W04b) difere do somatório do valor dos itens (id:N17c). | Obrig. | 861 | Rej. | Rejeição: Total do FCP difere do somatório dos itens |
| W06a-10 | 55 | Total do FCP ST (id: W06a) difere do somatório do valor dos itens (id:N23d) | Obrig. | 862 | Rej. | Rejeição: Total do FCP ST difere do somatório dos itens |
| W06b-10 | 55 | Total do FCP ST retido anteriormente (id: W06b) difere do somatório do valor dos itens (id:N27d) | Obrig. | 859 | Rej. | Rejeição: Total do FCP retido anteriormente por Substituição Tributária difere do somatório dos itens |
| W12a-10 | 55 | Total do IPI devolvido (id: W12a) difere do somatório do valor dos itens (id:UA04) | Facult. | 863 | Rej. | Rejeição: Total do IPI devolvido difere do somatório dos itens |
| <!-- p.63 --> W16-10 | 55/65 | -Total do vNF (id:W16) difere do somatório de: (+) vProd (id:W07) (-) vDesc (id:W10) (-) vICMSDeson (id:W04a) (+) vST (id:W06) (+) vFCPST (id:W06a) (+) vFrete (id:W08) (+) vSeg (id:W09) (+) vOutro (id:W15) (+) vII (id:W11) (+) vIPI (id:W12) (+) vIPIDevol (id: W12a) (+) vServ (id:W18) (*3) (NT 2011/005) Exceção 1: Faturamento direto de veículos novos: Se informada operação de Faturamento Direto para veículos novos (tpOp = 2, id:J02): – Total do vNF (id:W16) difere do somatório de: (+) vProd (id:W07) (-) vDesc (id:W10) (-) vICMSDeson (id:W04a) (+) vFrete (id:W08) (+) vSeg (id:W09) (+) vOutro (id:W15) (+) vII (id:W11) (+) vIPI (id:W12) (+) vServ (id:W18) (*3) (NT 2011/005) Exceção 2: Esta regra não se aplica nas operações de importação (CFOP inicia com “3”). Exceção 3 (NT 2013/005 v 1.22): Esta regra de validação não deverá causar rejeição caso não tenha sido subtraído o valor do ICMS Desonerado (vICMSDeson) do valor total da NF-e. | Obrig. | 610 | Rej. | Rejeição: Total da NF difere do somatório dos Valores compõe o valor Total da NF. |
| W16-70 | 65 | NFC-e com somatório dos pagamentos (id:YA03) menos valor do troco (id:YA09) diferente do Total da Nota Fiscal (id:W16): Σ(vPAG) - (vTroco) <> vNF Observação: Considerar uma tolerância de R$ 1,00 para mais ou para menos. | Obrig. | 767 | Rej. | Rejeição: NFC-e com somatório dos pagamentos diferente do total da Nota Fiscal |

<!-- p.64 -->
### Grupo X. Transporte da NF-e

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| X02-20 | 55 | Se operação interestadual(idDest=2), não informar os Grupos Veiculo Transporte (id:X18; veicTransp) e Grupo Reboque (id: X22) Obs1: a critério de cada UF, a regra de validação acima também pode ser aplicada nas operações internas (idDest=1) se cMun (id:C10) do Emitente <> cMun (id: E10) do Destinatário Obs.2: Esta regra não se aplica a emissão da NFA-e. | Obrig | 868 | Rej. | Rejeição: Grupos Veiculo Transporte e Reboque não devem ser informados |

### Grupo Y. Dados da Cobrança

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| Y01-20 | 55 | Se informado o Grupo Cobrança (Y01, tag: cobr) os campos nFat, vOrig, vDesc e vLiq devem ser informados. Observação: Implementação futura em ambiente de produção a partir de 03/09/2018 | Obrig. | 905 | Rej. | Rejeição: Campos do grupo Fatura não informados |
| Y05-10 | 55 | Valor do Desconto (vDesc, id:Y05) maior que o Valor Original da Fatura (vOrig, id:Y04) Obs.: Considerar como zero os valores opcionais não informados. | Obrig. | 901 | Rej. | Rejeição: Valor do Desconto da Fatura maior que Valor Original da Fatura |
| Y06-10 | 55 | Se informado Valor Líquido da Fatura (vLiq, id:Y06) e o Valor Original da Fatura (vOrig; id:Y04): - Valor Líquido da Fatura (vLiq, id:Y06) difere do Valor Original da Fatura (vOrig; id:Y04) – Valor do Desconto (vDesc, id:Y05) Obs.: Considerar como zero os valores opcionais não informados | Obrig. | 902 | Rej. | Rejeição: Valor Liquido da Fatura difere do Valor Original menos o Valor do Desconto |
| Y06-20 | 55 | Se informado valor líquido da Fatura (vLiq, id:Y06): - Valor Líquido da Fatura maior que o Valor Total da Nota Fiscal (vNF, id:W16) Obs.: Considerar como zero os valores opcionais não informados | Obrig. | 897 | Rej. | Rejeição: Valor Fatura maior que Valor Total da NF- e |
| Y06-30 | 55 | Se não informado Valor Líquido da Fatura (vLiq, id:Y06), mas Obrig. informado o Valor Original da Fatura: - Valor Original maior que o Valor Total da Nota Fiscal (vNF, id:W16) |  | 897 | Rej. | Rejeição: Valor da Fatura maior que Valor Total da NF-e |
| Y07-10 | 55 | Informado o Grupo Duplicata (id:Y07) e não informado Duplicata Mercantil como uma das Formas de Pagamento (tag:tPag<>14, id:YA02) | Obrig. | 867 | Rej. | Rejeição: Grupo duplicata informado e forma de pagamento não é Duplicata Mercantil. |
| Y08-10 | 55 | Se informado o Grupo Parcelas de cobrança (tag:dup, Id:Y07), Número da parcela (nDup, id:Y08) não informado ou inválido. Obs1: O número de parcelas deve ser informado com 3 algarismos, sequenciais e consecutivos. Ex.: “001”,”002”,”003”,... Obs2.: Implementação futura em ambiente de produção a partir de 03-set-2018. | Obrig. | 852 | Rej. | Rejeição: Número da parcela inválido ou não informado [nOcor:999] |
| <!-- p.65 --> Y09-10 | 55 | Se informado o grupo de Parcelas de cobrança (tag:dup, Id:Y07) e Data de vencimento (dVenc, id:Y09) não informada ou menor que a Data de Autorização Obs.: Implementação futura em ambiente de produção a partir de 02-jul-2018. | Obrig. | 898 | Rej. | Rejeição: Data de vencimento da parcela não informada ou menor que Data de Autorização [nOcor:999] |
| Y09-20 | 55 | Se informado o grupo de Parcelas de cobrança (tag:dup, Id:Y07) e Data de vencimento (dVenc, id:Y09) não informada ou menor que a Data de Emissão (id:B09) Obs.: Implementação futura em ambiente de produção a partir de 02-jul-2018. | Obrig | 900 | Rej. | Rejeição: Data de vencimento da parcela não informada ou menor que Data de Emissão [nOcor:999] |
| Y09-30 | 55 | Se informado o grupo de Parcelas de cobrança (tag:dup, Id:Y07) e Data de vencimento (dVenc, id:Y09) não informada ou menor que a Data de vencimento da parcela anterior (dVenc, id:Y09) Obs.: Implementação futura em ambiente de produção a partir de 02-jul-2018. | Obrig. | 850 | Rej. | Rejeição: Data de vencimento da parcela não informada ou menor que a Data de vencimento da parcela anterior [nOcor:999] |
| Y10-10 | 55 | Se informado o grupo de Parcelas de cobrança (tag:dup, Id:Y07) e a soma do valor das parcelas (vDup, id: Y10) difere do Valor Líquido da Fatura (vLiq, id:Y06). Obs.: Implementação futura em ambiente de produção a partir de 02-jul-2018. | Obrig. | 851 | Rej. | Rejeição: Soma do valor das parcelas difere do Valor Líquido da Fatura |

### Grupo YA. Informações de Pagamento

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| YA01-10 | 55 | NF-e não deve possuir o grupo de Formas de Pagamento (tag:pag) | Obrig. | 768 | Rej. | Rejeição: NF-e não deve possuir o grupo de Formas de Pagamento |
| YA01-20 | 55/65 | Documento deve possuir o grupo de Informações de Pagamento (tag:pag, id: YA01). Observação: Implementação por padrão, opcional a critério da UF, conforme o modelo de documento. | Facult. | 769 | Rej. | Rejeição: O grupo de Informações de Pagamento deve ser preenchido |
| YA02-04 | 55 | Se campo finNFe = 3 ou 4 e campo Meio de Pagamento (tag: tPag, id:YA02) <> 90 (Sem Pagamento). | Obrig. | 871 | Rej. | Rejeição: O campo Meio de Pagamento deve ser preenchido com a opção Sem Pagamento |
| <!-- p.66 --> YA02-10 | 65 | Se informado Campo Forma de Pagamento (tag:tPag, id:YA02) =14 | Obrig. | 857 | Rej. | Rejeição: Informado Duplicata Mercantil como Forma de Pagamento |
| YA02-20 | 55 | Se informado Campo Forma de Pagamento (tag:tPag, id:YA02) =14, o Grupo Duplicata (id:Y07) deve ser preenchido | Obrig. | 872 | Rej. | Rejeição: Informado Duplicata Mercantil como Forma de Pagamento e não preenchido o Grupo Duplicata |
| YA02-30 | 55 | Se não informado Duplicata Mercantil como uma das Formas de Pagamento (tag:tPag, id:YA02, = 14) o Grupo Duplicata (id:Y07) não deve ser preenchido | Obrig. | 867 | Rej. | Rejeição: Grupo Duplicata não deve ser preenchido |
| YA02-40 | 65 | Informado tpag (id=YA02)= 90 “Sem Pagamento” | Obrig | 899 | Rej. | Rejeição: Informado incorretamente o campo meio de pagamento |
| YA03-10 | 55/65 | Somatório do valor dos pagamentos (id:YA03, tag:vPag) menor que o total da nota (id:W16, tag: vNF) Exceção 1: Esta regra não se aplica para nota fiscal de Ajuste, campo finNFe=3 (id:B25) e para nota fiscal de Devolução finNFe=4 (id:B25) Exceção 2: Esta regra não se aplica quando o campo Meio de Pagamento (id:YA02, tag:tPag) for igual a 90 (sem pagamento). | Facult. | 865 | Rej. | Rejeição: Total dos pagamentos menor que o total da nota |
| YA03-20 | 55/65 | Somatório do valor dos pagamentos (id:YA03, tag:vPag) maior que o total da nota (id:W16, tag: vNF) e sem informação no campo vTroco (id:YA09) | Facult. | 866 | Rej. | Rejeição: Ausência de troco quando o valor dos pagamentos informados for maior que o total da nota |
| YA03-30 | 55/65 | Informado o campo Meio de Pagamento igual a sem pagamento (tag:tPag=90, id:YA02) e informado campo Valor do Pagamento diferente de zero (tag:vPag<>0, id:YA03). | Facult. | 904 | Rej. | Rejeição: Informado indevidamente campo valor de pagamento |
| YA04a-10 | 65 | Se informado o grupo de Cartão de Crédito / Débito (tag:card), deve ser informado o tipo de integração (tag:tpIntegra). Exceção: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/01/2016.” | Facult. | 496 | Rej. | Rejeição: Não informado o tipo de integração no pagamento com cartão de crédito / débito |
| YA04a-20 | 55/65 | Se informado o tipo de integração como pagamento não integrado com o sistema de automação da empresa (tag: tpIntegra=2) para UF que não aceita esse tipo de integração. Observação 1: Regra de Validação opcional a critério da UF. | Facult. | 737 | Rej. | Rejeição: Pagamento com cartão de crédito em sistema de automação não integrado |
| YA05-10 | 55/65 | Se informado o grupo de Cartão de Crédito / Débito (tag:card): - Se o pagamento com cartão for integrado ao sistema de automação da empresa (tag:tpIntegra=1) devem ser informados os campos de CNPJ da Credenciadora e o código de autenticação da operação (tag:card/CNPJ e card/cAut) Observação: Implementação por padrão, opcional a critério da UF. Exceção: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. | Facult. | 392 | Rej. | Rejeição: Não informados os dados da operação de pagamento por cartão de crédito / débito |
| <!-- p.67 --> YA09-10 | 55/65 | Se informado campo Valor do troco (id:YA09, tag:vTroco) com valor difere de: (+) vPag (id:YA03) (-) vNF (id:W16) | Obrig. | 869 | Rej. | Rejeição: Valor do troco incorreto |

### Grupo ZX. Informações Suplementares da Nota Fiscal

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ZX02-15 | 65 | Se QR Code versão “100” e DtEmiss > 30/09/2018 Versão informada no QR-Code (“100”) não é mais válida para a data de emissão | Obrig. | 903 | Rej. | Rejeição Versão informada no QR-Code (“100”) não é mais válida para a data de emissão |
| ZX02-22 | 65 | Se QR Code versão “100” e QR-Code com sequência de escape para o e-comercial “&” (qrCode like “%&%”) Nota: Deve-se usar o CDATA. Observação: A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 03/04/2017. | Obrig | 813 | Rej. | Rejeição: QR-Code com sequência de escape para o e-comercial. Usar CDATA |
| ZX02-24 | 65 | Se QR Code versão “100” e Parâmetro Chave de Acesso não informado no QR-Code. Nota: O Schema XML faz esta verificação. | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx)] |
| ZX02-28 | 65 | Se QR Code versão “100” e Parâmetro Chave de Acesso no QR- Code diverge da Chave de Acesso da Nota Fiscal | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal: [Param: xxx)] |
| ZX02-32 | 65 | Se QR Code versão “100” e Parâmetro Versão não informado noQR- Code. Nota: O Schema XML faz esta verificação. | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx)] |
| ZX02-36 | 65 | Se QR Code versão “100” e Parâmetro Versão informada no QR- Code diverge do previsto (“100”) | Obrig. | 398 | Rej. | Rejeição Parâmetro nVersao do QR-Code difere do previsto |
| <!-- p.68 --> ZX02-40 | 65 | Se QR Code versão “100” e Parâmetro Tipo de Ambiente não informado no QR-Code. Nota: O Schema XML faz esta verificação. | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx)] |
| ZX02-44 | 65 | Se QR Code versão “100” e Parâmetro Tipo de Ambiente do QR- Code diverge do Tipo de Ambiente da Nota Fiscal (tag:tpAmb, id:B24) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal: [Param: xxx)] |
| ZX02-48 65 |  | Se QR Code versão “100” e Parâmetro Código de Identificação do Destinatário não informado no QR-Code, para Nota Fiscal com identificação do destinatário (existe tag:dest, id:E01). | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx] |
| ZX02-52 | 65 | Se QR Code versão “100” e Parâmetro Código de Identificação do Destinatário no QR-Code para Nota Fiscal sem identificação do destinatário (não existe tag:dest, id:E01) Se QR Code versão “100” e Parâmetro Código de Identificação do | Obrig. | 399 | Rej. | Rejeição: Parâmetro de Identificação do destinatário no QR-Code para Nota Fiscal sem identificação do destinatário Rejeição: Parâmetro do QR-Code divergente da Nota |
| ZX02-56 | 65 | Destinatário no QR-Code diverge do destinatário da Nota Fiscal (tag:CNPJ – id:E02, ou CPF – id:E03 ou idEstrangeiro – id:E03a) | Obrig. | 397 | Rej. | Fiscal: [Param: xxx)] |
| ZX02-60 | 65 | Se QR Code versão “100” e Parâmetro Data de Emissão não informado no QR-Code. Nota: O Schema XML faz esta verificação. | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx)] |
| ZX02-64 | 65 | Se QR Code versão “100” e Parâmetro Data de Emissão no QR- Code não está no formato hexadecimal (Caracteres: “0-9”, “a-f”, “A- F”). Nota: O Schema XML faz esta verificação. Se QR Code versão “100” e Parâmetro Data de Emissão no QR- | Obrig. | 400 | Rej. | Rejeição: Parâmetro do QR-Code não está no formato hexadecimal (dhEmi) Rejeição: Parâmetro do QR-Code divergente da Nota |
| ZX02-68 | 65 | Code diverge da Data de Emissão da Nota Fiscal (tag:dhEmi, id:B09) | Obrig. | 397 | Rej. | Fiscal: [Param: xxx)] |
| ZX02-72 | 65 | Se QR Code versão “100” e Parâmetro Valor da Nota Fiscal não informado no QR-Code. Nota: O Schema XML faz esta verificação. Se QR Code versão “100” e Parâmetro Valor da Nota Fiscal no QR- | Obrig. | 396 | Rej | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx)]) Rejeição: Parâmetro do QR-Code divergente da Nota |
| ZX02-76 | 65 | Code diverge do Valor Total da Nota Fiscal (tag:vNF, id:W16) Se QR Code versão “100” e Parâmetro Valor do ICMS não informado | Obrig. | 397 | Rej. | Fiscal: [Param: xxx)] Rejeição: Parâmetro do QR-Code inexistente: |
| <!-- p.69 --> ZX02-80 | 65 | no QR-Code. Nota: O Schema XML faz esta verificação. Se QR Code versão “100” e Parâmetro Valor do ICMS no QR-Code | Obrig. | 396 | Rej. | [Param: xxx)] Rejeição: Parâmetro do QR-Code divergente da Nota |
| ZX02-84 | 65 | diverge do Valor Total do ICMS da Nota Fiscal (tag:vICMS, id:W04) | Obrig. | 397 | Rej. | Fiscal: [Param: xxx)] |
| ZX02-88 | 65 | Se QR Code versão “100” e Parâmetro Digest Value não informado no QR-Code. Nota: O Schema XML faz esta verificação. | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx)] |
| ZX02-92 | 65 | Se QR Code versão “100” e Parâmetro Digest Value no QR-Code não está no formato hexadecimal (Caracteres: “0-9”, “a-f”,“A-F”). Nota: O Schema XML faz esta verificação. Se QR Code versão “100” e Parâmetro Digest Value no QR-Code | Obrig. | 400 | Rej. | Rejeição: Parâmetro do QR-Code não está no formato hexadecimal (digVal) Rejeição: Parâmetro do QR-Code divergente da Nota |
| ZX02-96 | 65 | diverge do Digest Value da Nota Fiscal (tag grupo: Signature, id:ZZ01) | Obrig. | 397 | Rej. | Fiscal: [Param: xxx)] |
| ZX02-100 | 65 | Se QR Code versão “100” e Parâmetro Código Identificador do CSC não informado no QR-Code. Nota: O Schema XML faz esta verificação. Observação: Mais informações sobre o CSC de cada UF estão disponíveis em http://nfce.encat.org/empresario/csc/ | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx)] |
| ZX02-104 | 65 | Se QR Code versão “100” e Parâmetro Código Identificador do CSC no QR-Code não cadastrado na SEFAZ. Observação 1: Regra de Validação opcional até 01/11/2016, a critério da UF. Observação 2: Mais informações sobre o CSC de cada UF estão disponíveis em http://nfce.encat.org/empresario/csc/ | Obrig. | 462 | Rej. | Rejeição: Código Identificador do CSC no QR-Code não cadastrado na SEFAZ |
| ZX02-108 | 65 | Se QR Code versão “100” e Parâmetro Código Identificador do CSC no QR-Code foi revogado pela empresa anteriormente a Data de Emissão. Observação: Regra de Validação opcional até 01/11/2016, a critério da UF. | Obrig. | 463 | Rej. | Rejeição: Código Identificador do CSC no QR-Code foi revogado pela empresa |
| ZX02-112 | 65 | Se QR Code versão “100” e Parâmetro Hash não informado no QR- Code. Nota: O Schema XML faz esta verificação. Se QR Code versão “100” e Parâmetro Hash no QR-Code não está | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx)] Rejeição: Parâmetro do QR-Code não está no |
| <!-- p.70 --> ZX02-116 | 65 | no formato hexadecimal (Caracteres: “0-9”, “a-f”, “A-F”). Nota: O Schema XML faz esta verificação. | Obrig. | 400 | Rej. | formato hexadecimal (cHashQRCode) |
| ZX02-120 | 65 | Se QR Code versão “100” e Parâmetro Hash no QR-Code diverge do calculado. Observação: Regra de Validação opcional até 01/11/2016, a critério da UF. | Obrig. | 464 | Rej. | Rejeição: Código de Hash no QR-Code difere do calculado |
| ZX02-224 | 65 | Se QR Code versão “2” e Parâmetro Chave de Acesso não informado no QR-Code. Nota: O Schema XML faz esta verificação. Observação: Para NFC-e ONLINE ou OFFLINE é o 1º parâmetro da URL do QR Code | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx)] |
| ZX02-228 | 65 | Se QR Code versão “2” e Parâmetro Chave de Acesso no QR-Code diverge da Chave de Acesso da Nota Fiscal Observação: Para NFC-e ONLINE ou OFFLINE é o 1º parâmetro da URL do QR Code | Obrig.. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal [Param: xxx)]. |
| ZX02-232 | 65 | Se QR Code versão “2” e Parâmetro Versão não informado no QR- Code. Nota: O Schema XML faz esta verificação Observação: Para NFC-e ONLINE ou OFFLINE é o 2º parâmetro da URL do QR Code | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx)] |
| ZX02-236 | 65 | Se QR Code versão “2” e Parâmetro Versão informada no QR-Code diverge do previsto (“2”) Observação: Para NFC-e ONLINE ou OFFLINE é o 2º parâmetro da URL do QR Code | Obrig. | 398 | Rej. | Rejeição: Parâmetro Versão informada no QR-Code diverge do previsto (“2”) |
| ZX02-240 | 65 | Se QR Code versão “2” e Parâmetro Tipo de Ambiente não informado no QR-Code. Nota: O Schema XML faz esta verificação Observação: Para NFC-e ONLINE ou OFFLINE é o 3º parâmetro da URL do QR Code | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx)] |
| ZX02-244 | 65 | Se QR Code versão “2” e Parâmetro Tipo de Ambiente do QR-Code diverge do Tipo de Ambiente da Nota Fiscal (tag:tpAmb, id:B24) Observação: Para NFC-e ONLINE ou OFFLINE é o 3º parâmetro da URL do QR Code | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal: [Param: xxx)] |
| <!-- p.71 --> ZX02-260 | 65 | Se QR Code versão “2” e NFC-e de contingência (tpEmis=9): - Parâmetro Dia da Data de Emissão não informado no QR-Code. Nota: O Schema XML faz esta verificação Observação 1: Para NFC-e ONLINE esse parâmetro não existe. Observação 2: Para a NFC-e OFFLINE é o 4º parâmetro da URL do QR Code | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx) |
| ZX02-268 | 65 | Se QR Code versão “2” e NFC-e de contingência (tpEmis=9): Parâmetro Dia da Data de Emissão no QR-Code diverge do Dia Data de Emissão da Nota Fiscal (tag:dhEmi, id:B09) Observação 1: Para NFC-e ONLINE esse parâmetro não existe. Observação 2: Para a NFC-e OFFLINE é o 4º parâmetro da URL do QR Code | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal: [Param: xxx)] |
| ZX02-272 | 65 | Se QR Code versão “2” e NFC-e de contingência (tpEmis=9): Parâmetro Valor da Nota Fiscal não informado no QR-Code. Nota: O Schema XML faz esta verificação Observação 1: Para NFC-e ONLINE esse parâmetro não existe. Observação 2: Para a NFC-e OFFLINE é o 5º parâmetro da URL do QR Code | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx) |
| ZX02-276 | 65 | Se QR Code versão “2” e NFC-e de contingência (tpEmis=9): Parâmetro Valor da Nota Fiscal no QR-Code diverge do Valor Total da Nota Fiscal (tag:vNF, id:W16) Observação 1: Para NFC-e ONLINE esse parâmetro não existe. Observação 2: Para a NFC-e OFFLINE é o 5º parâmetro da URL do QR Code | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal: [Param: xxx)] |
| ZX02-288 | 65 | Se QR Code versão “2” e NFC-e de contingência (tpEmis=9): Parâmetro Digest Value não informado no QR-Code Nota: O Schema XML faz esta verificação Observação 1: Para NFC-e ONLINE esse parâmetro não existe. Observação 2: Para a NFC-e OFFLINE é o 6º parâmetro da URL do QR Code | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx) |
| ZX02-292 | 65 | Se QR Code versão “2” e NFC-e de contingência (tpEmis=9): Parâmetro Digest Value no QR-Code não está no formato hexadecimal (Caracteres: “0-9”, “a-f”,“A-F”). Nota: O Schema XML faz esta verificação Observação 1: Para NFC-e ONLINE esse parâmetro não existe. Observação 2: Para a NFC-e OFFLINE é o 6º parâmetro da URL do QR Code | Obrig. | 400 | Rej. | Rejeição: Parâmetro Digest Value no QR-Code não está no formato hexadecimal (Caracteres: “0-9”, “a- f”,“A-F”). |
| <!-- p.72 --> ZX02-296 | 65 | Se QR Code versão “2” e NFC-e de contingência (tpEmis=9): Parâmetro Digest Value no QR-Code diverge do Digest Value da Nota Fiscal (tag grupo: Signature, id:ZZ01) Observação 1: Para NFC-e ONLINE esse parâmetro não existe. Observação 2: Para a NFC-e OFFLINE é o 6º parâmetro da URL do QR Code | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal: [Param: xxx)] |
| ZX02-300 | 65 | Parâmetro Código Identificador do CSC não informado no QR-Code. Observação: Mais informações sobre o CSC de cada UF estão disponíveis em http://nfce.encat.org/empresario/csc/ Nota: O Schema XML faz esta verificação Observação 1: Para NFC-e ONLINE é o 4º parâmetro da URL do QR Code. Observação 2: Para a NFC-e OFFLINE é o 7º parâmetro da URL do QR Code | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx) |
| ZX02-304 | 65 | Se QR Code versão “2” e Parâmetro Código Identificador do CSC no QR-Code não cadastrado na SEFAZ. Observação : Mais informações sobre o CSC de cada UF estão disponíveis em http://nfce.encat.org/empresario/csc/ Observação 1: Para NFC-e ONLINE é o 4º parâmetro da URL do QR Code. Observação 2: Para a NFC-e OFFLINE é o 7º parâmetro da URL do QR Code | Obrig. | 462 | Rej. | Rejeição: Parâmetro Código Identificador do CSC no QR-Code não cadastrado na SEFAZ. |
| ZX02-308 | 65 | Se QR Code versão “2” e Parâmetro Código Identificador do CSC no QR-Code foi revogado pela empresa anteriormente a Data de Emissão. Observação 1: Para NFC-e ONLINE é o 4º parâmetro da URL do QR Code. Observação 2: Para a NFC-e OFFLINE é o 7º parâmetro da URL do QR Code | Obrig. | 463 | Rej. | Rejeição: Parâmetro Código Identificador do CSC no QR-Code foi revogado pela empresa anteriormente a Data de Emissão. |
| ZX02-312 | 65 | Se QR Code versão “2” e Parâmetro Hash não informado no QR- Code. Nota: O Schema XML faz esta verificação Observação 1: Para NFC-e ONLINE é o 5º parâmetro da URL do QR Code. Observação 2: Para a NFC-e OFFLINE é o 8º parâmetro da URL do QR Code | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx) |
| <!-- p.73 --> ZX02-316 | 65 | Se QR Code versão “2” e Parâmetro Hash no QR-Code não está no formato hexadecimal (Caracteres: “0-9”, “a-f”,“A-F”). Nota: O Schema XML faz esta verificação Observação 1: Para NFC-e ONLINE é o 5º parâmetro da URL do QR Code. Observação 2: Para a NFC-e OFFLINE é o 8º parâmetro da URL do QR Code | Obrig. | 400 | Rej. | Rejeição: Parâmetro Hash no QR-Code não está no formato hexadecimal (Caracteres: “0-9”, “a-f”,“A-F”). |
| ZX02-320 | 65 | Se QR Code versão “2” e Parâmetro Hash do QR-Code diverge do calculado. Observação 1: O cálculo do Hash do QR Code deve seguir o Manual de especificações técnicas do DANFE NFC-e e QR Code. Observação 2: A URL do QR Code da NFC-e ONLINE possui cinco parâmetros, já a NFC-e OFFLINE possui oito parâmetros. | Obrig. | 464 | Rej. | Rejeição: Parâmetro Hash no QR-Code diverge do calculado |
| ZX03-10 | 65 | Não informado o campo da URL de consulta por chave de acesso para a NFC-e (tag: urlChave). | Obrig. | 877 | Rej. | Rejeição: Nota Fiscal sem a informação da URL de consulta por chave de acesso |
| ZX03-20 | 65 | Endereço do site da UF para a Consulta por chave de acesso difere do previsto. Observação1: URLs, por UF, utilizadas para consulta por chave de acesso acesse: http://nfce.encat.org/consumidor/consulte-nota/ Observação2: regra de validação opcional por UF Observação3: regra de validação vigente a partir de 01/04/2019. | Facult. | 878 | Rej. | Rejeição: Endereço do site da UF da Consulta por chave de acesso diverge do previsto |
