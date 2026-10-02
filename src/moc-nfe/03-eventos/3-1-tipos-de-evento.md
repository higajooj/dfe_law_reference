<!-- p.28 -->
# 3.1. Tipos de Evento

Os eventos da NF-e modelo 55 encontram-se regrados na Cláusula décima quinta-A do Ajuste SINIEF 07/05. Destes, a Cláusula décima terceira do Ajuste SINIEF 19/16 regra para a NFC-e modelo 65 somente o Cancelamento e o Evento Prévio de Emissão em Contingência.

Os eventos atualmente implementados no sistema da NF-e, divididos conforme a responsabilidade pelo seu respectivo registro são:

- Eventos Registrados pelo Emitente;
- Eventos Registrados pelo Destinatário;
- Eventos Registrados pelo Fisco Emitente;
- Eventos Registrados como resultado da propagação de informações resultantes de eventos registrados em outros documentos; e
- Eventos Registrados por Outros Órgãos.

Os itens a seguir na presente seção detalham mais informações sobre cada um dos eventos da NF-e modelo 55, sendo que os eventos que necessitam um detalhamento mais específico são tratados em seções separadas do presente capítulo.

Novos eventos poderão ser criados por meio de Notas Técnicas, antes de serem inseridos em uma próxima versão deste Manual.

## 3.1.1. Eventos Registrados pelo Emitente

**Tabela 3-1 – Eventos Registrados pelo Emitente**

| Tipo | Nome | \* | Descrição | Criado por | Seção |
|---|---|---|---|---|---|
| 110110 | Carta de Correção Eletrônica | II | Correção das informações da NF-e, dentro dos limites previstos na Legislação | NT 2010.008<br>NT 2011.003 | - |
| 110111 | Cancelamento pelo Emitente | I | Cancelamento da NF-e | NT 2011.006<br>NT 2013.008 | - |
| 110112 | Cancelamento por substituição | I | Cancelamento, em prazo não superior a 168 horas, de NFC-e emitida em duplicidade e que não acobertou a operação | NT 2018.004 | **3.5** |
| 110140 | EPEC – Emissão em Contingência | XI | Evento Prévio de Emissão em Contingência. | NT 2014.001<br>NT 2014.003 | **3.3** |
| 111500 | Pedido de Prorrogação 1º prazo | XVI | Solicitação de prorrogação do prazo de retorno de produtos de uma NF-e de remessa para industrialização por encomenda com suspensão do ICMS.<br>• Implementação a critério da UF | NT 2015.001 | **3.4** |
| 111501 | Pedido de Prorrogação 2º prazo | XVI | Solicitação de prorrogação do prazo de retorno de produtos de uma NF-e de remessa para industrialização por encomenda com suspensão do ICMS, após o primeiro período de prorrogação.<br>• Implementação a critério da UF | NT 2015.001 | **3.4** |
| 111502 | Cancelamento de Pedido de Prorrogação 1º prazo | XVI | Cancelamento do evento 111500<br>• Implementação a critério da UF | NT 2015.001 | **3.4** |
| 111503 | Cancelamento de Pedido de Prorrogação 2º prazo | XVI | Cancelamento do evento 111501<br>• Implementação a critério da UF | NT 2015.001 | **3.4** |
| 110150 | Ator interessado na NF-e – Transportador | | Permite que o Emitente informe a identificação do Transportador a qualquer momento, como uma das pessoas autorizadas a acessar o XML da NF-e. | NT 2020.007 | - |

<!-- p.29 -->
\* Inciso do parágrafo I da Cláusula décima quinta-A do Ajuste SINIEF 07/05.

O evento “Registro de Saída”, previsto no Inc. VIII do parágrafo I da Cláusula décima quinta-A do Ajuste SINIEF 07/05, não é mais utilizado, tendo sua funcionalidade sido substituída pelos diversos outros eventos que evidenciam a circulação efetiva da mercadoria.

## 3.1.2. Eventos Registrados pelo Destinatário

Qualquer destinatário pode manifestar-se com respeito às informações registradas em uma NF-e; o item **3.2.3** apresenta o detalhamento das operações em que existe a obrigatoriedade para o destinatário registrar sua manifestação.

**Tabela 3-2 – Eventos Registrados pelo Destinatário**

| Tipo | Nome | \* | Descrição | Criado por | Seção |
|---|---|---|---|---|---|
| 210200 | Confirmação de Operação pelo Destinatário | V | Manifestação do destinatário confirmando que a operação descrita na NF-e ocorreu exatamente como informado nesta NF-e | NT 2012.002 | **3.2** |
| 210210 | Ciência da Operação pelo Destinatário (ou Ciência da Emissão) | IV | Recebimento pelo destinatário ou pelo remetente de informações relativas à existência de NF-e em que esteja envolvido, quando ainda não existem elementos suficientes para apresentar uma manifestação conclusiva | NT 2012.002 | **3.2** |
| 210220 | Desconhecimento da Operação pelo Destinatário | VII | Manifestação do destinatário declarando que a operação descrita da NF-e não foi por ele solicitada | NT 2012.002 | **3.2** |
| 210240 | Operação não Realizada | VI | Manifestação do destinatário reconhecendo sua participação na operação descrita na NF-e, mas declarando que a operação não ocorreu ou não se efetivou como informado nesta NF-e | NT 2012.002 | **3.2** |

\* Inciso do parágrafo I da Cláusula décima quinta-A do Ajuste SINIEF 07/05.

## 3.1.3. Eventos Registrados pelo Fisco

**Tabela 3-3 – Eventos Registrados pelo Fisco**

| Tipo | Nome | \* | Descrição | Criado por |
|---|---|---|---|---|
| 400200 | Documento Fiscal Inidôneo | XV | SEFAZ do emitente declara que NF-e é um “Documento Fiscal Inidôneo” | BT 2016.003 |
| 400201 | Cancelamento Evento Fisco 400200 | XV | Cancelamento do evento 400200 | BT 2016.003 |
| 411500 | Evento Fisco Resposta ao Pedido de Prorrogação 1º prazo | XVI | Resposta do Fisco ao Pedido de Prorrogação 1º Prazo | NT 2015.001 |
| 411501 | Evento Fisco Resposta ao Pedido de Prorrogação 2º prazo | XVI | Resposta do Fisco ao Pedido de Prorrogação 2º Prazo | NT 2015.001 |
| 411502 | Evento Fisco Resp ao Cancelamento de Prorrogação 1º prazo | XVI | Cancelamento do evento 411500 | NT 2015.001 |
| 411503 | Evento Fisco Resp ao Cancelamento de Prorrogação 2º prazo | XVI | Cancelamento do evento 411501 | NT 2015.001 |
| 610500 | Registro Passagem NF-e | III | Registro de Passagem da NF-e no Posto Fiscal. | BT 2017.002 |
| 610501 | Cancelamento Registro Passagem NF-e | III | Cancelamento do evento 610500 | BT 2017.002 |
| 400300 | Visto Eletrônico do Fisco | XV | Possibilita que a SEFAZ marque uma NF-e emitida em função de uma situação específica prevista em legislação<br>• ex.: transferência de crédito, ressarcimento. | BT 2018.002 |
| 400301 | Cancelamento Evento Fisco 400300 | XV | Cancelamento do evento 400300 – Visto Eletrônico do Fisco | BT 2018.002 |
| 400100 | Alerta Fisco Emitente: Simulação Operação Emitente | XV | SEFAZ do emitente declara que NF-e é um “Documento com simulação de operação do Emitente” | BT 2016.003 |
| 400104 | Alerta Fisco Emitente: Simulação Operação Emitente Inex. | XV | SEFAZ do emitente declara que NF-e é um “Documento com simulação de operação do Emitente” | BT 2016.003 |
| 400120 | Alerta Fisco Emitente: Mercadoria Sem Origem Comprovada | XV | SEFAZ do emitente declara que NF-e é um “Documento com Mercadoria sem Origem Comprovada” | BT 2016.003 |
| 500100 | Alerta Fisco Emitente: Simulação Operação Destinatário | XV | SEFAZ do emitente declara que NF-e é um “Documento com simulação de operação do Destinatário” | BT 2016.003 |
| 500104 | Alerta Fisco Emitente: Simulação Operação Destinatário Inex | XV | SEFAZ do emitente declara que NF-e é um “Documento com simulação de operação do Destinatário” | BT 2016.003 |
| 400101 | Cancelamento Evento Fisco 400100 | XV | Cancelamento Evento Fisco 400100 | BT 2016.003 |
| 400105 | Cancelamento Evento Fisco 400104 | XV | Cancelamento Evento Fisco 400104 | BT 2016.003 |
| 400121 | Cancelamento Evento Fisco 400120 | XV | Cancelamento Evento Fisco 400120 | BT 2016.003 |
| 500101 | Cancelamento Evento Fisco 500100 | XV | Cancelamento Evento Fisco 500100 | BT 2016.003 |
| 500105 | Cancelamento Evento Fisco 500104 | XV | Cancelamento Evento Fisco 500104 | BT 2016.003 |

<!-- p.30 -->
\* Inciso do parágrafo I da Cláusula décima quinta-A do Ajuste SINIEF 07/05.

## 3.1.4. Eventos Propagados Automaticamente

Os eventos listados na Tabela 3-4 são registrados automaticamente pelo Ambiente Nacional da NF-e, para propagar informações resultantes de eventos registrados em outros documentos.

**Tabela 3-4 – Eventos Registrados Automaticamente pelo Ambiente Nacional**

| Tipo | Nome | \* | Descrição | Criado por |
|---|---|---|---|---|
| 790700 | Averbação de Exportacao | - | Evento que indica a quantidade de mercadoria na unidade tributável que foi efetivamente embarcada para o exterior referente a um certo item de uma NF-e.<br>• Gerado e enviado pelo sistema Portal Único do Comércio Exterior (PUCOMEX) Receita Federal do Brasil (RFB) para o Ambiente Nacional da NF-e | BT 2017.001 |
| 410300 | NF-e Referenciada | XII | O evento da Nota Fiscal Referenciada é gerado sempre que uma nova NF-e referenciar uma ou mais outras Notas Fiscais Eletrônicas.<br>• Não são gerados eventos de "NF-e Referenciada" para os documentos diferentes do Modelo 55 | BT 2013.004 |
| 610510 | Registro de Passagem MDF-e | III | Registro de Passagem do MDF-e no Posto Fiscal, propagado pelo Sistema MDF-e | BT 2017.002 |
| 610511 | Cancelamento Registro de Passagem MDF-e | III | Cancelamento do evento 610511 | BT 2017.002 |
| 610514 | Registro de Passagem MDF-e com CT-e | III | Registro de Passagem do MDF-e no Posto Fiscal, propagado pelo Ambiente Nacional.<br>• A Chave de Acesso da NF-e está vinculada a um CT-e citado no MDF-e | BT 2017.002 |
| 610515 | Cancelamento Registro de Passagem MDF-e com CT-e | III | Cancelamento do evento 610514 | BT 2017.002 |
| ~~610550~~ | ~~Registro Passagem NF-e BRId~~ | | ~~Registro de Passagem do MDF-e, capturado por antenas do Projeto Brasil-ID.~~<br>• Evento eliminado (BT 2017.002), substituído pelo Registro de Passagem Automático MDF-e | ~~BT 2013.003~~<br>~~BT 2014.003~~<br>BT 2017.002 |
| 610552 | Registro de Passagem Automático MDF-e | III | Registro de Passagem do MDF-e capturado de forma automática (antena, leitura de placa por OCR, etc.), propagado pelo Sistema MDF-e.<br>• A Chave de Acesso da NF-e está citada no MDF-e | BT 2017.002 |
| 610554 | Registro de Passagem Automático MDF-e com CT-e | III | Cancelamento do evento 610552 | BT 2017.002 |
| 610600 | CT-e Autorizado | XIII | Documenta na NF-e a ocorrência de CT-e autorizado, no momento do compartilhamento do CT-e com o Ambiente Nacional.<br>• A Chave de Acesso da NF-e está citada no CT-e. | BT 2012.001 |
| 610601 | CT-e Cancelado | XIII | Documenta na NF-e a ocorrência de cancelamento de CT-e autorizado, no momento do compartilhamento do evento com o Ambiente Nacional.<br>• A Chave de Acesso da NF-e está citada no CT-e. | BT 2012.001 |
| 610610 | MDF-e Autorizado | XIV | Evento que documenta na NF-e a ocorrência de MDF-e autorizado.<br>• A Chave de Acesso da NF-e está citada no MDF-e. | BT 2013.007<br>BT 2017.002 |
| 610611 | MDF-e Cancelado | XIV | Cancelamento do MDF-e<br>• A Chave de Acesso da NF-e está citada no MDF-e. | BT 2013.007<br>BT 2017.002 |
| 610614 | MDF-e Autorizado com CT-e | XIV | Evento que documenta na NF-e a ocorrência de MDF-e autorizado.<br>• A Chave de Acesso da NF-e está vinculada a um CT-e citado no MDF-e. | BT 2017.002 |
| 610615 | Cancelamento do MDF-e Autorizado com CT-e | XIV | Cancelamento do evento 610615 | BT 2017.002 |

> **Revogado/Descontinuado:** evento 610550 (Registro Passagem NF-e BRId): tipo, nome, descrição inicial e as referências BT 2013.003 e BT 2014.003 aparecem riscados; a própria página declara “Evento eliminado (BT 2017.002), substituído pelo Registro de Passagem Automático MDF-e”.

<!-- p.31 -->
\* Inciso do parágrafo I da Cláusula décima quinta-A do Ajuste SINIEF 07/05.

## 3.1.5. Eventos Registrados por Outros Órgãos

**Tabela 3-5 – Eventos Registrados por Outros Órgãos**

| Tipo | Nome | \* | Descrição | Criado por |
|---|---|---|---|---|
| 990900 | Vistoria SUFRAMA | IX | Registro da ocorrência da Vistoria do processo de internalização de produtos industrializados de origem nacional com isenção de ICMS nas áreas sob controle da SUFRAMA. | BT 2011.006 |
| 990910 | Internalização SUFRAMA | X | Confirmação da internalização de produtos industrializados de origem nacional com isenção de ICMS nas áreas sob controle da SUFRAMA. | BT 2011.006 |

\* Inciso do parágrafo I da Cláusula décima quinta-A do Ajuste SINIEF 07/05.
