<!-- p.7 -->
# 3. Regras de Validação

**Grupo B. Identificação da Nota Fiscal eletrônica**

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| B25-80 | 55 | Se finalidade da NF-e igual a crédito ou débito (tag: finNFe=5 ou 6) ou tpOperGov=2-Recebimento do pagamento:<br>- Informado ICMS (tag: ICMS), ISSQN (tag: ISSQN), IPI (tag: IPI), II (tag: II), PIS (tag: PIS), PIS ST (tag: PISST), COFINS (tag: COFINS), COFINS ST (tag: COFINSST), ICMS UF Destino (tag: ICMSUFDest) ou Imposto Devolvido (tag: impostoDevol).<br>**Exceção 1:** a regra acima não se aplica para:<br>- tpNFCredito=03-Retorno por Recusa Total na Entrega ou Por Não Localização do Destinatário na Tentativa de Entrega;<br>- tpNFCredito=04-Redução de valores;<br>- tpNFCredito=06-Retorno por recusa parcial na entrega;<br>- tpNFDebito=07-Perda em estoque;<br>**Exceção 2:** tpNFDebito=”06-Pagamento Antecipado” permite a informação do PIS, PISST, COFINS e COFINSST em NF-e com data de emissão em 2026.<br>**Exceção 3:** tpNFDebito=”06-Pagamento Antecipado” permite a informação do IPI.<br>**Exceção 4:** tpNFDebito=”06-Pagamento Antecipado” permite a informação do grupo ICMS/ICMSPrevistoPagtoAntecip (id: NB01). | Obrig. | 1001 | Rejeição: NF-e com finalidade de débito ou crédito somente para IBS/CBS |

**Grupo I. Produtos e Serviços da NF-e**

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| I11c-10 | 55/65 | Se vProdLiq (id:I11c) não informado:<br>- vProdLiq (id:I11c) não informado<br>**Observação:** Implementação futura. | Obrig. | 1278 | Rejeição: Valor Líquido do Produto não informado [nItem: 999] |
| I11c-20 | 55/65 | Se informado vProdLiq (id:I11c) e NF-e Normal (tag: finNFe=1):<br>- vProdLiq (id:I11c) difere de vUnComLiq (id:I11b) * qCom (id:I10)<br>**Observação:** Aceitar uma tolerância de 0,01 a mais ou a menos. | Obrig. | 1279 | Rejeição: Valor Líquido do Produto difere do calculado [nItem: 999] |

**Grupo NB. ICMS Previsto no Pagamento Antecipado**

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| NB01-10 | 65 | Se grupo ICMSPrevistoPagtoAntecip (id:NB01) informado:<br>- Modelo igual a 65 | Obrig. | 1280 | Rejeição: Grupo do ICMS Previsto no Pagamento Antecipado informado indevidamente [nItem: 999] |
| NB01-20 | 55 | Se tpNFDebito diferente de “06-Pagamento Antecipado” (tag: tpNFDebito <> 06) e tpOperGov diferente de “4-Recebimento do pagamento com fornecimento posterior” (tag: tpOperGov <> 4):<br>- Grupo ICMSPrevistoPagtoAntecip (id:NB01) informado indevidamente | Obrig. | 1280 | Rejeição: Grupo do ICMS Previsto no Pagamento Antecipado informado indevidamente [nItem: 999] |

<!-- p.8 -->

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| NB01-30 | 55 | Se tpNFDebito igual a “06-Pagamento Antecipado” (tag: tpNFDebito = 06) ou tpOperGov igual a “4-Recebimento do pagamento com fornecimento posterior” (tag: tpOperGov = 4):<br>- Grupo ICMSPrevistoPagtoAntecip (id:NB01) não informado<br>**Observação 1:** Implantação em homologação em 01/02/2027.<br>**Observação 2:** Implantação em produção em 01/03/2027. | Obrig. | 1281 | Rejeição: Grupo do ICMS Previsto no Pagamento Antecipado não informado [nItem: 999] |

**Grupo UB. Informações dos tributos IBS / CBS e Imposto Seletivo**

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| ~~**UB16-10**~~ | ~~55/65~~ | ~~Valor da Base de cálculo do IBS e CBS (gIBSCBS/vBC) deve ser igual ao somatório de:<br>(+) vProd<br>(+) vServ<br>(+) vFrete<br>(+) vSeg<br>(+) vOutro<br>(+) vII<br>(-) vDesc<br>(-) vPIS<br>(-) vCOFINS<br>(-) vICMS<br>(-) vICMSUFDest<br>(-) vFCP<br>(-) vFCPUFDest<br>(-) vICMSMono<br>(-) vISSQN<br>(+) vIS<br>**Exceção 1:** Não subtrair o valor do PIS por Substituição Tributária (PIST/vPIS) quando compor o valor total da NF-e (se indSomaPISST=1);<br>**Exceção 2:** Não subtrair o valor do COFINS por Substituição Tributária (COFINSST/vCOFINS) quando compor o valor total da NF-e (se indSomaCOFINSST=1).<br>**Nota:** Implementação Futura, aguardando orientação normativa.~~<br>**Observação:** Regra removida. | Obrig. | ~~1104~~ | ~~Rejeição: Valor da Base de cálculo do IBS e CBS difere do somatório dos valores que a compõem [nItem: 999]~~ |

> **Revogado/Descontinuado:** a regra UB16-10 está riscada na NT original e marcada como removida.

**Grupo VB. Total do item da NF-e**

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| VB01-10 | 55/65 | Se vItem informado:<br>Se não é operação de Faturamento Direto para veículos novos (tpOp = nulo ou tpOp <> 2, id:J02):<br>- Valor total do Item (vItem) deve ser igual ao somatório:<br><!-- p.9 -->(+) vProd (contém vIBS, vCBS e vIS)<br>(-) vDesc<br>(-) vICMSDeson, se indDeduzDeson=1<br>(+) vICMSST<br>(+) vICMSMonoReten<br>(+) vFCPST<br>(+) vFrete<br>(+) vSeg<br>(+) vOutro<br>(+) vII<br>(+) vIPI<br>(+) vIPIDevol<br>(+) vServ<br>(+) vPIS (id: R06, campo: PISST/vPIS), se indSomaPISST=1<br>(+) vCofins (id: T06, campo: COFINSST/vCOFINS), se indSomaCOFINSST =1 (NT 2020.005)<br>~~(+) vIBS~~<br>~~(+) vCBS~~<br>~~(+) vIS~~<br>~~(+) vTotIBSMonoItem~~<br>~~(+) vTotCBSMonoItem~~<br>~~**Exceção 1:** Em 2025 e 2026 não somar vIBS, vCBS, vIS, vTotIBSMonoItem, vTotCBSMonoItem.~~<br>**Observação:** Implementação Futura. | Obrig. | 1105 | Rejeição: Valor total do Item (vItem) difere do somatório dos valores que o compõem [nItem: 999] |
| VB01-20 | 55 | Se vItem informado:<br>Se informada operação de Faturamento Direto para veículos novos (tpOp = 2, id:J02):<br>- Valor total do Item (vItem) deve ser igual ao somatório:<br>(+) vProd (contém vIBS, vCBS e vIS)<br>(-) vDesc<br>(-) vICMSDeson, se indDeduzDeson=1<br>(+) vFrete<br>(+) vSeg<br>(+) vOutro<br>(+) vII<br>(+) vIPI<br>(+) vServ<br>(+) vPIS (id: R06, campo: PISST/vPIS), se indSomaPISST=1<br>(+) vCofins (id: T06, campo: COFINSST/vCOFINS), se indSomaCOFINSST =1 (NT 2020.005)<br>~~(+) vIBS~~<br>~~(+) vCBS~~<br><!-- p.10 -->~~(+) vIS~~<br>~~**Exceção 1:** Em 2025 e 2026, não somar vIBS, vCBS, vIS~~<br>**Observação:** Implementação Futura. | Obrig. | 1105 | Rejeição: Valor total do Item (vItem) difere do somatório dos valores que o compõem [nItem: 999] |

> **Revogado/Descontinuado:** nas regras VB01-10 e VB01-20, os itens vIBS, vCBS, vIS, vTotIBSMonoItem e vTotCBSMonoItem e as exceções correspondentes estão riscados na NT original.

**Grupo W. Total da NF-e**

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| W01a-10 | 55/65 | Se informado vProdLiq (id:I11c) em um dos itens:<br>- vProdLiqTot (id:W01a) não informado | Obrig. | 1282 | Rejeição: Total Líquido não informado |
| W01a-20 | 55/65 | Se informado vProdLiqTot (id:W01a):<br>- vProdLiqTot (id:W01a) difere do somatório do vProdLiq (id:I11c) dos itens | Obrig. | 1283 | Rejeição: Total Líquido difere do somatório dos itens |
