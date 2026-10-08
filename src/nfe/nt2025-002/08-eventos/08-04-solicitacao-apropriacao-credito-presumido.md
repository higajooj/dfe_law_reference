<!-- p.77 -->
# 8.4. Evento: Solicitação de Apropriação de crédito presumido

**Função:** Evento a ser gerado pelo destinatário da NF-e em relação às notas fiscais de aquisição de emissão de terceiros e que lhe gerem o direito à apropriação de crédito presumido, ou pelo emitente quando a informação não tiver sido incluída na NF-e ou necessitar correção.

**Autor:** Emitente ou Destinatário da NFe

**Modelo:** NF-e modelo 55

**Código do Tipo de Evento:** 211110

### 8.4.1. Leiaute Mensagem de Entrada

Estrutura XML da parte específica do evento, a ser inserida na tag detEvento (P17) da Parte Geral do Web Service de Registro de Eventos especificada na seção 5.8 do MOC.

<!-- p.78 -->
**Schema XML:** envEventoNFe_v9.99.xsd

**Schema XML - parte específica:** e211110_v1.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P17** | **detEvento** | **G** | **P06** | | **1-1** | **-** | **Detalhes do Evento** |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Versão do leiaute do evento (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 47 | Descrição do evento: "Solicitação de Apropriação de crédito presumido" |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código do Órgão Autor do Evento. Informar o Código da UF para este Evento. |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Informar 1=Empresa Emitente ou 2=Empresa destinatária.<br>Valores: 1=Empresa Emitente, 2=Empresa destinatária; 3=Empresa; 5=Fisco; 6=RFB; 9=Outros Órgãos. |
| P22 | verAplic | E | P17 | N | 1-1 | 1-20 | Versão do aplicativo do autor do evento. |
| **P23** | **gCredPresOper** | **G** | **P17** | | **1-990** | | **Informações de crédito presumido por item** |
| P24 | nItem | A | P23 | N | 1-1 | 1-3 | Corresponde ao atributo “nItem” do elemento “det” do documento referenciado. |
| P25 | vBCCredPres | E | P23 | N | 1-1 | 13v2 | Valor do base de cálculo do item |
| P25a | cCredPres | E | P23 | N | 1-1 | 2 | Código de Classificação do Crédito presumido, conforme tabela cCredPres (Anexo IV) |
| **P26** | **gIBSCredPres** | **G** | **P23** | | **0-1** | | **Grupo de Informações do Crédito Presumido do IBS** |
| P28 | pCredPres | E | P26 | N | 1-1 | 3v2-4 | Percentual do Crédito Presumido |
| P29 | vCredPres | E | P26 | N | 1-1 | 13v2 | Valor do Crédito Presumido |
| **P30** | **gCBSCredPres** | **G** | **P23** | | **0-1** | | **Grupo de Informações do Crédito Presumido da CBS** |
| P32 | pCredPres | E | P30 | N | 1-1 | 3v2-4 | Percentual do Crédito Presumido |
| P33 | vCredPres | E | P30 | N | 1-1 | 13v2 | Valor do Crédito Presumido |

### 8.4.2. Leiaute Mensagem de Retorno

Estrutura XML com a mensagem do resultado da transmissão, conforme retorno do Web Service de Registro de Eventos – Parte Geral, especificado no item 5.8.2 do MOC.

### 8.4.3. Validação das Regras de Negócio – Específicas

Serão aplicadas as regras de validação gerais apresentadas no item 5.8.4 do MOC e as regras de negócio específicas listadas a seguir.

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| | **Banco de Dados: NF-e** | | | |
| 2P12-10 | Modelo DFe = 65-NFCe | Obrig. | 1049 | Rejeição: Não é permitido o uso de Crédito Presumido na NFC-e modelo 65 |
| 2P21-05 | Se tpAutor=1-Empresa Emitente:<br>- CNPJ/CPF do Autor diverge do CNPJ/CPF do Emitente da NF-e | Obrig. | 574 | Rejeição: Autor do evento diverge do emitente da NF-e |
| 2P21-10 | Se tpAutor=2-Empresa Destinatário:<br>- CNPJ/CPF do Autor diverge do CNPJ/CPF do Destinatário da NF-e | Obrig. | 575 | Rejeição: Autor do evento diverge do destinatário da NF-e |
| 2P24-05 | Atributo “nItem” duplicado | Obrig. | -- | Observação: Validação realizada pelo Schema XML |
| 2P24-10 | Acessar BD e verificar se número do item do evento (tag: gCredPres/nItem) informado existe na NFe referenciada (tag: det/nItem) | Obrig. | 1096 | Rejeição: Número de item não existe na NFe |
| 2P25a-10 | Se informado cCredPres da operação (tag: gCredPresOper/cCredPres):<br>- cCredPres inexistente<br>Observação: Consultar tabela de Crédito Presumido do IBS e da CBS. | Obrig. | 1055 | Rejeição: Código de Crédito Presumido (cCredPres) da Operação inexistente [nItem: 999] |
| 2P26-10 | Se cCredPres possui indicador que não permite o uso de crédito presumido para o IBS (ind_gIBSCredPres = 0):<br>- Crédito presumido para o IBS informado indevidamente (grupo: gCredPresOper/gIBSCredPres)<br>Observação 01: Consultar Tabela de Crédito Presumido do IBS e da CBS. | Obrig. | 1053 | Rejeição: Crédito Presumido para o IBS informado indevidamente [nItem: 999] |
| 2P26-20 | Se cCredPres possui indicador que exige o uso de crédito presumido para o IBS (ind_gIBSCredPres = 1):<br>- Crédito presumido para o IBS não informado (grupo: gCredPresOper/gIBSCredPres)<br>Observação 01: Consultar Tabela de Crédito Presumido do IBS e da CBS. | Obrig. | 1054 | Rejeição: Crédito Presumido para o IBS não informado [nItem: 999] |
| 2P30-10 | Se cCredPres possui indicador que não permite o uso de crédito presumido para a CBS (ind_gCBSCredPres = 0):<br>- Crédito presumido para a CBS informado indevidamente (grupo: gCredPresOper/gCBSCredPres)<br>Observação 01: Consultar Tabela de Crédito Presumido do IBS e da CBS. | Obrig. | 1050 | Rejeição: Crédito Presumido para a CBS informado indevidamente [nItem: 999] |
| 2P30-20 | Se cCredPres (id: UB122) possui indicador que exige o uso de crédito presumido para a CBS (ind_gCBSCredPres = 1):<br>- Crédito presumido para a CBS não informado (grupo: IBSCBS/gCredPresOper/gCBSCredPres)<br>Observação 01: Consultar Tabela de Crédito Presumido do IBS e da CBS. | Obrig. | 1058 | Rejeição: Crédito Presumido para a CBS não informado [nItem: 999] |
