<!-- p.119 -->

# 5.14. Web Service – NFeRecepcaoEvento – Ator Interessado na NF-e – Transportador

**Função:** serviço destinado à recepção de mensagem de Evento da NF-e

O objetivo deste evento é permitir que o Emitente informe a identificação do Transportador a qualquer momento, como uma das pessoas autorizadas a acessar o XML da NF-e.

No caso em que o transporte não é de responsabilidade do Emitente, o Destinatário poderá gerar o evento, com o mesmo objetivo de autorizar que o Transportador fique autorizado a acessar o XML da NF-e.

**Autor do Evento:** O autor do evento é o emissor da NF-e, podendo também ser o destinatário ou o transportador.

<!-- p.120 -->

## 5.14.1. Leiaute Mensagem de Entrada

Entrada: Estrutura XML da parte específica do evento, a ser inserida na tag detEvento (P17) da Parte Geral do Web Service de Registro de Eventos especificada na seção 5.8.

**Schema XML: envEventoAtorInteressado_v1.00.xsd**

**Tabela 5-48 – Leiaute Mensagem de Entrada do Web Service NFeRecepcaoEvento – Ator Interessado na NF-e – Transportador**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| P18 | versao | A | P17 | | 1-1 | 2v2 | Informar o mesmo valor da tag “verEvento” (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 5-60 | Descrição do Evento, conforme documentado junto com o Código do Evento (Id: P14). |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código da UF do emitente do Evento. |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Informar uma das opções abaixo:<br>1=Geração do Evento pelo Emitente;<br>2=Geração do Evento pelo Destinatário;<br>3=Geração do Evento pelo Transportador Contratado;<br>Valores: 1=Empresa Emitente, 2=Empresa Destinatária; 3=Empresa Transportadora. |
| P22 | verAplic | E | P17 | C | 1-1 | 1-20 | Versão do aplicativo do Autor do Evento. |
| P23 | autXML | G | P17 | - | 1-1 | - | Pessoas autorizadas a acessar o XML da NF-e |
| P24 | CNPJ | CE | P23 | N | 1-1 | 3-14 | CNPJ autorizado |
| P25 | CPF | CE | P23 | N | 1-1 | 3-11 | CPF autorizado |
| P26 | tpAutorizacao | E | P17 | N | 0-1 | 1 | 0 - Não permite;<br>1 - Permite o transportador autorizado pelo emitente ou destinatário autorizar outros transportadores para ter acesso ao download da NF-e |
| P27 | xCondUso | E | P17 | C | 0-1 | - | Condição de uso do tipo de autorização para o transportador: O emitente ou destinatário da NF-e, declara que permite o transportador declarado no campo CNPJ/CPF deste evento a autorizar os transportadores subcontratados ou redespachados a terem acesso ao download da NF-e |
| P91 | Signature | G | P04 | XML | 1-1 | - | Assinatura Digital do documento XML, a assinatura deverá ser aplicada no elemento infEvento. |

## 5.14.2. Leiaute Mensagem de Retorno

Retorno: Estrutura XML com a mensagem do resultado da transmissão, conforme retorno do Web Service de Registro de Eventos – Parte Geral, especificado no item 5.8.2.

Descrição do resultado do processamento do evento (xEvento): Ator Interessado na NF-e – Transportador

**Schema XML: retEnvEventoAtorInteressado_v1.00.xsd**

O leiaute desta mensagem de retorno não apresenta nenhuma diferença com relação à Schema XML: retEnvEvento_v1.00.xsd Tabela 5-33.

<!-- p.121 -->

## 5.14.3. Regras de Validação

Serão aplicadas as regras de validação gerais apresentadas no item 5.8.4 e as regras de negócio específicas que podem ser vistas na (NT 2020.007).

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| P07-10 | Atributo “Id” não corresponde à concatenação dos campos do evento (“ID” + tpEvento + chNFe + nSeqEvento) (\*1) | Obrig. | 572 | Rejeição: Erro Atributo ID do evento não corresponde a concatenação dos campos (“Id” + tpEvento + chNFe + nSeqEvento) |
| P08-10 | Código do órgão de recepção do Evento diverge do definido para este evento (\*1) | Obrig. | 250 | Rejeição: UF diverge da UF autorizadora |
| P09-10 | Tipo do ambiente difere do ambiente do Web Service (\*1) | Obrig. | 252 | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| P10-10 | Se informado CNPJ do Autor do Evento:<br>- CNPJ inválido (zeros, nulo ou DV inválido) (\*1) | Obrig. | 489 | Rejeição: CNPJ informado inválido (DV ou zeros) |
| P11-10 | Se informado o CPF do Autor do evento:<br>- CPF inválido (zeros, nulo ou DV inválido) (\*1) | Obrig. | 490 | Rejeição: CPF informado inválido (DV ou zeros) |
| P12-10 | Validação da Chave de Acesso da NF-e (tag: chNFe):<br>- Dígito verificador inválido (\*1) | Obrig. | 236 | Rejeição: Chave de Acesso com dígito verificador inválido |
| P12-14 | - Código UF inválido (\*1) | Obrig. | 614 | Rejeição: Chave de Acesso inválida (Código UF inválido) |
| P12-18 | - Ano < 06 ou Ano maior que Ano corrente (\*1) | Obrig. | 615 | Rejeição: Chave de Acesso inválida (Ano < 06 ou Ano maior que Ano corrente) |
| P12-22 | - Mês = 0 ou Mês > 12 (\*1) | Obrig. | 616 | Rejeição: Chave de Acesso inválida (Mês < 1 ou Mês > 12) |
| P12-26 | - CNPJ/CPF zerado ou dígito inválido (\*1)<br>Nota: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso. CNPJ: Série=[0-909], CPF: Série<>[0-909] | Obrig. | 617 | Rejeição: Chave de Acesso inválida (CNPJ/CPF zerado ou dígito inválido) |
| P12-30A | - Eventos somente da NF-e:<br>- Modelo diferente de 55 | Obrig. | 450 | Rejeição: Modelo da NF-e diferente de 55 |
| P12-34 | - Número NF = 0 (\*1) | Obrig. | 619 | Rejeição: Chave de Acesso inválida (número NF = 0) |
| P12-40 | Se tpAutor=1-Empresa Emitente:<br>- UF da Chave de Acesso diverge da UF Autorizadora | Obrig. | 249 | Rejeição: UF da Chave de Acesso diverge da UF autorizadora |
| P12-44 | - CNPJ/CPF do Autor diverge do CNPJ/CPF da Chave de Acesso<br>Nota: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso. CNPJ: Série=[0-909], CPF: Série<>[0-909] | Obrig. | 574 | Rejeição: Autor do evento diverge do emissor da NF-e |
| P13-10 | Data do evento maior que a data de processamento (aceitar tolerância de até 5 minutos) (\*1) | Obrig. | 578 | Rejeição: A data do evento não pode ser maior que a data do processamento |
| P15-10 | Número de sequência do Evento maior que 20 | Obrig. | 594 | Rejeição: Número de sequência do evento informado é maior que o permitido |
| P20-10 | Se tpAutor=1-Empresa Emitente:<br>- UF do Autor (cOrgaoAutor) diverge da UF da Chave de Acesso | Obrig. | 455 | Rejeição: Órgão Autor do evento difere da UF da Chave de Acesso |
| P21-10 | Tipo do Autor difere de “1=Empresa Emitente”, “2=Empresa destinatária” ou “3=Empresa Transportador Contratado. | Obrig. | 466 | Rejeição: Evento com Tipo de Autor incompatível |
| P24-10 | Se informado CNPJ autorizado:<br>– CNPJ com zeros ou dígito inválido | Obrig. | 323 | Rejeição: CNPJ autorizado para download inválido |
| P25-10 | Se informado CPF autorizado:<br>– CPF com zeros ou dígito inválido | Obrig. | 325 | Rejeição: CPF autorizado para download inválido |
| P26-10 | Se autor do evento for o emitente ou destinatário da NF-e:<br>- Obrigatório o preenchimento do campo tpAutorizacao | Obrig | 827 | Rejeição: Obrigatório informar o tipo de autorização |
| P26-20 | Se autor do evento não for o emitente ou destinatário da NF-e:<br>- Preenchimento do campo tpAutorizacao não é permitido | Obrig | 828 | Rejeição: Não permitido informar o campo tipo de autorização |
| <!-- p.122 --> P27-10 | Se informado tpAutorizacao igual 1:<br>- Obrigatório informar o campo xCondUso, declarando que está ciente da permissão para o transportador | Obrig | 829 | Rejeição: Condição de uso não informado para o tipo de autorização de uso |
| P27-20 | Se informado tpAutorizacao diferente de 1:<br>- Preenchimento do campo xCondUso não é permitido | Obrig | 830 | Rejeição: Não permitido preencher o campo Condição de Uso |
| | **Banco de Dados: Emitente** | | | |
| 1P10-20 | - Verificar situação fiscal do emitente | Obrig. | 240 | Rejeição: Irregularidade fiscal do emitente |
| | **Banco de Dados: NF-e** | | | |
| 2P12-10 | Acesso BD NFE (Chave: Chave de Acesso):<br>- Chave Acesso inexistente para o tpEvento que exige a existência da NF-e (\*1) | Obrig. | 494 | Rejeição: Chave de Acesso Inexistente |
| 2P12-22 | - Verificar se NF-e está denegada ou cancelada | Obrig. | 580 | Rejeição: Evento exige uma NF-e autorizada |
| 2P13-10 | - Data do evento menor que a Data de Emissão da NF-e (\*1) | Obrig. | 577 | Rejeição: A data do evento não pode ser menor que a data de emissão da NF-e |
| 2P13-14 | - Data do evento menor que a Data de Autorização da NF-e não emitida em contingência (tpEmis=1)<br>Nota: Tolerância de 5 minutos, devido ao sincronismo de horário entre o servidor da Empresa e o servidor da SEFAZ Autorizadora. | Obrig. | 579 | Rejeição: A data do evento não pode ser menor que a data de autorização da NF-e |
| 2P21-10 | - Se tpAutor=2-Empresa Destinatário:<br>- CNPJ/CPF do Autor diverge do CNPJ/CPF do Destinatário da NF-e | Obrig. | 575 | Rejeição: Autor do evento diverge do destinatário da NF-e |
| 2P21-14 | - Se tpAutor=2-Empresa Destinatário:<br>- Modalidade de Frete não é por conta do Destinatário (modFrete<>1 e 4) | Obrig. | 449 | Rejeição: Modalidade de Frete não é por conta do Destinatário |
| 2P24-10 | - CNPJ/CPF autorizado neste evento idêntico ao CNPJ/CPF do Emitente | Obrig. | 421 | Rejeição: Informado o CNPJ/CPF do Emitente |
| P24-14 | - CNPJ/CPF autorizado neste evento idêntico ao CNPJ/CPF do Destinatário | Obrig. | 422 | Rejeição: Informado o CNPJ/CPF do Destinatário |
| P24-18 | - CNPJ/CPF autorizado neste evento já está autorizado a acessar o XML da NF-e (leiaute NF-e, tag: autXML, Id:GA01) | Obrig. | 423 | Rejeição: CNPJ/CPF já está autorizado a acessar o XML da NF-e |
| | **Banco de Dados: Evento** | | | |
| 3P15-10 | Acesso BD de Eventos (Chave: Chave de Acesso, tpEvento, nSeqEvento, cOrgaoAutor):<br>- Evento já existente (\*1) | Obrig. | 573 | Rejeição: Duplicidade de Evento |
| | **Banco de Dados: Evento 2** | | | |
| 3P15-10 | Acesso BD de Eventos (Chave: Chave de Acesso, tpEvento=110150):<br>- CNPJ/CPF autorizado neste evento já está autorizado a acessar o XML da NF-e | Obrig. | 423 | Rejeição: CNPJ/CPF já está autorizado a acessar o XML da NF-e |
| 3P15-20 | - Evento do BD possui tpAutorizacao=0 e Evento atual com CNPJ/CPF Autor (tag:CNPJ, id:P10) diferente do Emitente ou Destinatário da NF-e | Obrig. | 831 | Rejeição: Transportador Contratado não autorizado a liberar acesso a NF-e |
| | **Banco de Dados: Cadastro Centralizado de Contribuintes** | | | |
| 4P21-10 | Se tpAutor=3-Transportador Contratado:<br>-Acesso Cadastro Centralizado de Contribuintes (Chave: cOrgaoAutor, CNPJ/CPF Autor):<br>- CNPJ/CPF Autor do evento não é emitente de CT-e (nenhum Modal), ou não está ativo para a UF | Obrig. | 448 | Rejeição: CNPJ/CPF Autor não é emitente de CT-e |
| 4P24-10 | Acesso CCC-Cadastro Centralizado de Contribuintes (Chave: cOrgaoAutor, CNPJ/CPF Autorizado):<br>- CNPJ/CPF autorizado neste evento não é emitente de CT-e (nenhum Modal), ou não está ativo para a UF | Obrig. | 371 | Rejeição: CNPJ/CPF Autorizado não é emitente de CT-e |

\*1 ...... Validações genéricas do Registro de Evento.

## 5.14.4. Final do Processamento do Lote

<!-- p.123 -->

O processamento do lote pode resultar em:

- Rejeição do Lote: por algum problema que comprometa o processamento do lote;
- Processamento do Lote: o lote foi processado (cStat= 128 - ), e a validação de cada evento do lote poderá resultar em:
  - Rejeição: o Evento será rejeitado, retornando do código do status do motivo da rejeição;
  - Evento Autorizado, com vinculação à respectiva NF-e: Encontrada a NF-e no banco de dados. Retornar cStat= 135-Evento registrado e vinculado a NF-e
  - Evento Autorizado, sem vinculação à respectiva NF-e: Não encontrada a NF-e no banco de dados. Retornar cStat=136 - Evento registrado, mas não vinculado a NF-e
