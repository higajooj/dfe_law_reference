<!-- p.105 -->

# 5.9. Web Service – NFeRecepcaoEvento – Cancelamento / Cancelamento por substituição

(Atualizado pela NT 2018.004)

**Função:** evento destinado ao atendimento de solicitações de cancelamento de NF-e/NFC-e. O evento de cancelamento por substituição é específico para NFC-e.

**Autor do Evento:** O autor do evento é o emissor da NF-e e a NF-e deve existir no banco de dados da SEFAZ. A mensagem XML do evento será assinada com o certificado digital do emitente da NF-e. No caso do emitente pessoa jurídica, poderá ser usado o certificado digital da matriz ou de qualquer filial da empresa (mesmo CNPJ-Base)”.

**Códigos dos Eventos:**

- 110111 – “Cancelamento”
- 110112 – “Cancelamento por substituição”

## 5.9.1. Leiaute Mensagem de Entrada

Entrada: Estrutura XML da parte específica do evento, a ser inserida na tag detEvento (P17) da Parte Geral do Web Service de Registro de Eventos especificada na seção 5.8.

**Schema XML: envEventoCancNFe_v1.00.xsd (tpEvento=110111)**

**Schema XML: envEventoCancSubst_v1.00.xsd (tpEvento=110112)**

**Tabela 5-37 – Leiaute Mensagem de Entrada do Web Service NFeRecepcaoEvento – Cancelamento**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Informar o mesmo valor da tag “verEvento” (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 5-60 | Veja a descrição do evento, junto com o Tipo de Evento documentado anteriormente. |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código do Órgão Autor do Evento. Informar o Código da UF para este Evento.<br>Nota: Campo exclusivo do Evento “110112 – Cancelamento por substituição”. |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Informar 1=Empresa Emitente.<br>Valores: 1=Empresa Emitente, 2=Empresa destinatária; 3=Empresa; 5=Fisco; 6=RFB; 9=Outros Órgãos;<br>Nota: Campo exclusivo do Evento “110112 – Cancelamento por substituição”. |
| P22 | verAplic | E | P17 | C | 1-1 | 1-20 | Versão do aplicativo do Autor do Evento.<br>Nota: Campo exclusivo do Evento “110112 – Cancelamento por substituição”. |
| P23 | nProt | E | P17 | N | 1-1 | 15 | Informar o número do Protocolo de Autorização da NF-e a ser Cancelada. |
| P30 | xJust | E | P17 | C | 1-1 | 15-255 | Informar a justificativa do cancelamento |
| P31 | chNFeRef | E | P17 | N | 1-1 | 44 | Informa a chave de acesso da NF-e substituta da NF-e a ser cancelada.<br>Nota: Campo exclusivo do Evento “110112 – Cancelamento por substituição”. |

## 5.9.2. Leiaute Mensagem de Retorno

Retorno: Estrutura XML com a mensagem do resultado da transmissão, conforme retorno do Web Service de Registro de Eventos – Parte Geral, especificado no item 5.8.2.

Descrição do resultado do processamento do evento (xEvento): “Cancelamento homologado”

<!-- p.106 -->

**Schema XML: retEnvEventoCancNFe_v1.00.xsd (tpEvento=110111)**

**Schema XML: retEventoCancSubst_v1.00.xsd (tpEvento=110112)**

O leiaute desta mensagem de retorno não apresenta nenhuma diferença com relação à Schema XML: retEnvEvento_v1.00.xsd Tabela 5-33.

## 5.9.3. Regras de Validação

Serão aplicadas as regras de validação gerais apresentadas no item 5.8.4 e as regras de negócio específicas que podem ser vistas na Tabela 5-38 (NT 2018.004).

**Tabela 5-38 – Regras de Validação Específicas dos Eventos Cancelamento de NF-e e Cancelamento por Substituição**

| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| P12-40 | • UF da Chave de Acesso diverge da UF Autorizadora | Obrig. | 249 | Rej. | Rejeição: UF da Chave de Acesso diverge da UF autorizadora |
| P12-44 | • CNPJ/CPF do Autor diverge do CNPJ/CPF da Chave de Acesso<br>Nota: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso. CNPJ: Série=[0-909], CPF: Série<>[0-909] | Obrig. | 574 | Rej. | Rejeição: Autor do evento diverge do emissor da NF-e |
| P12-48 | • Se tpEvento=110112 e NF-e com Tipo de Emissão diferente de 1-Normal | Obrig. | 920 | Rej. | Rejeição: Tipo de emissão da NF-e a ser cancelada deve ser normal |
| P13-10 | Data do evento maior que a data de processamento (aceitar tolerância de até 5 minutos) (\*1) | Obrig. | 578 | Rej. | Rejeição: A data do evento não pode ser maior que a data do processamento |
| P15-10 | Número de sequência do evento diferente de 1 | Obrig. | 594 | Rej. | Rejeição: Número de sequência do evento informado é maior do que o permitido |
| P20-10 | UF do Autor (cOrgaoAutor) diverge da UF da Chave de Acesso | Obrig. | 455 | Rej. | Rejeição: Órgão Autor do evento difere da UF da Chave de Acesso |
| P21-10 | Tipo do Autor difere de “1=Empresa Emitente” | Obrig. | 466 | Rej. | Rejeição: Evento com Tipo de Autor incompatível |
| P31-10 | Se tpEvento=110112, validar a Chave de Acesso substituta (tag:chNFeRef):<br>• Dígito verificador inválido | Obrig. | 910 | Rej. | Rejeição: Chave de Acesso NFe Substituta inválida (Dígito) |
| P31-14 | • Código UF inválido | Obrig. | 910 | Rej. | Rejeição: Chave de Acesso NFe Substituta inválida (Código UF) |
| P31-18 | • Ano < 06 ou Ano maior que Ano corrente | Obrig. | 910 | Rej. | Rejeição: Chave de Acesso NFe Substituta inválida (Ano) |
| P31-22 | • Mês = 0 ou Mês > 12 | Obrig. | 910 | Rej. | Rejeição: Chave de Acesso NFe Substituta inválida (Mês) |
| P31-26 | • CNPJ/CPF zerado ou dígito inválido<br>Nota: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso. CNPJ: Série=[0-909], CPF: Série<>[0-909] | Obrig. | 910 | Rej. | Rejeição: Chave de Acesso NFe Substituta inválida (CNPJ/CPF) |
| P31-30 | • Modelo diferente de 55 ou 65 | Obrig. | 910 | Rej. | Rejeição: Chave de Acesso NFe Substituta inválida (Modelo) |
| P31-34 | • Número NF = 0 | Obrig. | 910 | Rej. | Rejeição: Chave de Acesso NFe Substituta inválida (Número) |
| P31-38 | • Chave de Acesso da NF-e Substituta igual a Chave de Acesso da NF-e a ser cancelada | Obrig. | 911 | Rej. | Rejeição: Chave de Acesso NFe Substituta incorreta (mesma Chave de Acesso) |
| P31-42 | • Chave de Acesso da NF-e Substituta com UF divergente da Chave de Acesso da NF-e a ser cancelada | Obrig. | 911 | Rej. | Rejeição: Chave de Acesso NFe Substituta incorreta (Código da UF) |
| P31-46 | • Chave de Acesso da NF-e Substituta com CNPJ/CPF divergente da Chave de Acesso da NF-e a ser cancelada<br>Nota: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso. CNPJ: Série=[0-909], CPF: Série<>[0-909] | Obrig. | 911 | Rej. | Rejeição: Chave de Acesso NFe Substituta incorreta (CNPJ/CPF) |
| <!-- p.107 --> P31-50 | • Chave de Acesso da NF-e Substituta com Ano-Mês inválido:<br>o chNFeRef (Ano-Mês) > chNFe (Ano-Mês) ou<br>o chNFeRef (Ano-Mês) < chNFe (Ano-Mês) – 1 | Obrig. | 911 | Rej. | Rejeição: Chave de Acesso NFe Substituta incorreta (Ano-Mes) |
| P31-52 | • Chave de Acesso da NF-e Substituta com Modelo divergente da Chave de Acesso da NF-e a ser cancelada | Obrig. | 911 | Rej. | Rejeição: Chave de Acesso NFe Substituta incorreta (Modelo) |
| | **Banco de Dados: Emitente** | | | | |
| 1P10-10 | Acesso ao Cadastro de Contribuintes (Chave: CNPJ do Autor):<br>• Verificar se Emitente não autorizado a emitir NF-e | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão de NF-e |
| 1P10-20 | • Verificar situação fiscal do emitente | Obrig. | 240 | Rej. | Rejeição: Irregularidade fiscal do emitente |
| | **Banco de Dados: NF-e** | | | | |
| 2P12-10 | Acesso BD NFE (Chave: CNPJ/CPF da Chave de Acesso, Modelo, Série e Número):<br>• Chave Acesso inexistente para o tpEvento que exige a existência da NF-e (\*1)<br>Nota: Caso exista no banco de dados uma NF-e com Chave de Acesso divergente, opcionalmente, deverá ser concatenado a Chave de Acesso existente na descrição do erro, caso o CNPJ/CPF do Autor do Evento seja o mesmo CNPJ/CPF da Chave de Acesso. | Obrig. | 494 | Rej. | Rejeição: Chave de Acesso Inexistente (chNFe:999...999] |
| 2P12-14 | • Se tpEvento=110111 (Cancelamento Normal): verificar se NF-e autorizada há mais de 1 dia (24 horas).<br>Nota: Considera a exceção de prazo definida em legislação estadual | Obrig. | 501 | Rej. | Rejeição: Prazo de cancelamento superior ao previsto na Legislação |
| 2P12-18 | • Se tpEvento=110112 (Cancelamento por Substituição): verificar se NF-e autorizada há mais de 7 dias (168 horas).<br>Nota: Considera a exceção de prazo definida em legislação estadual | Obrig. | 501 | Rej. | Rejeição: Prazo de cancelamento superior ao previsto na Legislação |
| 2P12-22 | • Verificar se NF-e está denegada ou cancelada | Obrig. | 580 | Rej. | Rejeição: Evento exige uma NF-e autorizada |
| 2P13-10 | • Data do evento menor que a Data de Emissão da NF-e (\*1) | Obrig. | 577 | Rej. | Rejeição: A data do evento não pode ser menor que a data de emissão da NF-e |
| 2P13-14 | • Data do evento menor que a Data de Autorização da NF-e não emitida em contingência (tpEmis=1)<br>Nota: Na comparação acima, aceitar uma tolerância de 5 minutos, devido ao sincronismo de horário entre o servidor da Empresa e o servidor da SEFAZ Autorizadora. | Obrig. | 579 | Rej. | Rejeição: A data do evento não pode ser menor que a data de autorização da NF-e |
| 2P23-10 | • Número do Protocolo informado diverge do número do Protocolo da NF-e | Obrig. | 222 | Rej. | Rejeição: Protocolo de Autorização de Uso difere do cadastrado |
| | **Banco de Dados: Evento** | | | | |
| 3P15-10 | Acesso BD de Eventos (Chave: Chave de Acesso, tpEvento, nSeqEvento):<br>• Duplicidade do evento (tpEvento + chNFe + nSeqEvento) (\*1) | Obrig. | 573 | Rej. | Rejeição: Duplicidade de Evento |
| | **Banco de Dados: Evento_2** | | | | |
| <!-- p.108 --> 4P15-14 | Se NF-e (Modelo 55): Acesso ao BD de Eventos (Chave: Chave de Acesso, tag:chNFe):<br>• Existe evento de Manifestação do Destinatário o tpEvento = “210220-Confirmação da Operação”<br>Exceção: A NF-e pode ter mais de um tipo de Manifestação do Destinatário, prevalecendo a última manifestação. Permitir o cancelamento se após o evento de “Confirmação” existir um dos eventos abaixo:<br>o “210220 – Desconhecimento da Operação”<br>o “210240 – Operação não Realizada”. | Obrig. | 221 | Rej. | Rejeição: Confirmado o recebimento da NF-e pelo destinatário |
| 4P15-18 | • Existe evento de Conhecimento de Transporte ou MDF-e Autorizado, tpEvento:<br>o “610600 – CT-e Autorizado” (Cancelamento: 610601)<br>o “610610 – MDF-e Autorizado” (Cancelamento: 610611)<br>o “610614 – MDF-e Autorizado com CT-e” (Canc: 610615)<br>Exceção: Uma NF-e pode participar de vários CT-e / MDF-e. Permitir o cancelamento se todos os eventos deste tipo tiverem o correspondente evento de cancelamento. | Obrig. | 690 | Rej. | Rejeição: Pedido de Cancelamento para NF-e com CT-e / MDF-e |
| 4P15-22 | • Existe evento de Registro de Passagem, tpEvento:<br>o “610500 – Registro de Passagem NF-e” (Canc: 610501);<br>o “610510 – Registro de Passagem MDF-e” (Canc: 610511)<br>o “610514 – Registro Passagem MDF-e com CT-e” (Canc: 610515)<br>o “610550 – Registro Passagem NF-e BRId”<br>o “610552 – Registro Passagem Automático MDF-e”<br>o “610554 – Registro Passagem Automático MDF-e com CT-e”<br>Exceção: Uma NF-e pode ter vários Registros de Passagem. Permitir o cancelamento se todos os eventos deste tipo tiverem o correspondente evento de cancelamento. | Obrig. | 219 | Rej. | Rejeição: Circulação da NF-e verificada |
| 4P15-26 | • Existe evento da Suframa, tpEvento:<br>o “990900 – Vistoria SUFRAMA”;<br>o “9910910 – Internalização SUFRAMA”; | Obrig. | 304 | Rej. | Rejeição: Pedido de Cancelamento para NF-e com evento da Suframa |
| | **Banco de Dados: NF-e_2** | | | | |
| 5P31-10 | Se tpEvento=110112 (Cancelamento por Substituição): Acesso BD NFE (Chave: Chave de Acesso Substituta, tag:chNFeRef):<br>• Chave Acesso Substituta inexistente | Obrig. | 912 | Rej. | Rejeição: NF-e Substituta inexistente |
| 5P31-14 | • Situação da NF-e = Denegada ou Cancelada | Obrig. | 913 | Rej. | Rejeição: NF-e Substituta Denegada ou Cancelada |
| 5P31-20 | • Data de emissão da NF-e substituta (chNFeRef) maior que 2 horas da data de emissão da NF-e a ser cancelada (chNFe) | Obrig. | 914 | Rej. | Rejeição: Data de emissão da NF-e Substituta maior que 2 horas da data de emissão da NF-e a ser cancelada |
| 5P31-24 | • Valor total da NF-e substituta (chNFeRef) difere do valor total da NF-e a ser cancelada (chNFe) | Obrig. | 915 | Rej. | Rejeição: Valor total da NF-e Substituta difere do valor da NF-e a ser cancelada |
| 5P31-28 | • Valor total do ICMS da NF-e substituta (chNFeRef) difere do valor total do ICMS da NF-e a ser cancelada (chNFe) | Obrig. | 916 | Rej. | Rejeição: Valor total do ICMS da NF-e Substituta difere do valor da NF-e a ser cancelada |
| <!-- p.109 --> 5P31-32 | • Identificação do destinatário (CNPJ/CPF/ID Estrangeiro, IE) da NF-e substituta (chNFeRef) difere da identificação do destinatário da NF-e a ser cancelada (chNFe). | Obrig. | 917 | Rej. | Rejeição: Identificação do destinatário da NF-e Substituta difere da identificação do destinatário da NF-e a ser cancelada. |
| 5P31-36 | • Quantidade de Itens da NF-e substituta (chNFeRef) difere da quantidade de itens da NF-e a ser cancelada (chNFe). | Obrig. | 918 | Rej. | Rejeição: Quantidade de itens da NF-e Substituta difere da quantidade de itens da NF-e a ser cancelada. |
| 5P31-40 | • Verificar se o item da NF-e substituta (chNFeRef) difere do respectivo item da NF-e a ser cancelada (chNFe).<br>Nota: Verificar divergência para os campos cProd, cEAN, xProd, NCM, CFOP, uCom, qCom, vUnCom, vProd, indTot | Obrig. | 919 | Rej. | Rejeição: Item da NF-e Substituta difere do mesmo item da NF-e a ser cancelada. |
| 5P31-44 | • Se tpEvento=110112 e chave da NF-e substituta com Tipo de Emissão igual a 1-Normal | Obrig. | 921 | Rej. | Rejeição: Tipo de emissão da NF-e substituta deve ser de contingência |
| | **Banco de Dados: NF-e_2** | | | | |
| | Pedido de Prorrogação deferido impede o cancelamento da NF-e (NT 2015.001) | Obrig. | 811 | Rej. | Rejeição: Pedido de Prorrogação deferido impede o cancelamento da NF-e |

## 5.9.4. Final do Processamento do Lote

O resultado do processamento do lote está especificado na seção Web Service de Registro de Eventos – Parte Geral, item 5.8.5.

A SEFAZ autorizadora poderá aceitar o cancelamento fora de prazo, mantendo um código de retorno diferente para estes casos: status “155-Cancelamento homologado fora de prazo”.

No caso do Evento de Cancelamento para a NFC-e, o pedido de cancelamento fora do prazo é rejeitado com o código de erro 501 “Rejeição: Prazo de cancelamento superior ao previsto na Legislação”.

Será observada uma tolerância na comparação do horário informado no evento e o horário da autorização da Nota Fiscal, devido ao sincronismo de horário entre o servidor da Empresa e o servidor da SEFAZ Autorizadora.

Deverá ser impedido o cancelamento da NF-e caso exista pelo menos um item do Pedido de Prorrogação de Prazo deferido pelo Fisco (tpEvento=411500 ou 411501, com statPedido=1).

No caso de rejeição do Pedido de Cancelamento da NF-e recebido pela empresa, o fisco usará o código de rejeição “811-Pedido de Prorrogação deferido impede o cancelamento da NF-e”.

Nota: Como o mesmo Pedido da Empresa (tag:”idPedido”) pode ter diferentes respostas pelo Fisco, deve ser considerada a resposta do Fisco com maior “nSeqEvento” de resposta do Fisco.
