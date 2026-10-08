<!-- p.47 -->
# 5 Sistema de Registro de Eventos (Parte Geral)

- **Função:** serviço destinado à recepção de mensagem de evento de MDFe.
- **Processo:** síncrono.
- **Nome Serviço:** MDFeRecepcaoEvento
- **Método:** mdfeRecepcaoEvento
- **Parâmetro da Mensagem da área de dados:** XML sem compactação

## 5.1.1 Leiaute Mensagem de Entrada

- **Entrada:** Estrutura XML contendo a consulta do status do serviço
- **Schema XML:** eventoMDFe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **GP01** | **eventoMDFe** | Raiz | - | - | - | - | TAG raiz |
| GP02 | versao | A | GP01 | N | 1-1 | 2v2 | Versão do leiaute |
| **GP03** | **infEvento** | G | GP01 | - | 1-1 | - | Grupo de informações do registro de eventos |
| GP04 | Id | ID | GP03 | C | 1-1 | 54 - 55 | Identificador da TAG a ser assinada, a regra de formação do Id é: "ID" + tpEvento + chave do MDFe + nSeqEvento. Obs: O nSeqEvento deve ser preenchido com zeros à esquerda para fechar 2 (até 99) ou 3 (até 999) dígitos |
| GP05 | cOrgao | E | GP03 | N | 1-1 | 2 | Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE estendida |
| GP06 | tpAmb | E | GP03 | N | 1-1 | 1 | Identificação do Ambiente: 1 – Produção 2 – Homologação |
| GP07 | CNPJ | CE | GP03 | N | 1-1 | 14 | Informar o CNPJ do autor do Evento |
| GP08 | CPF | CE | GP03 | N | 1-1 | 11 | Informar o CPF do autor do Evento |
| GP09 | chMDFe | E | GP03 | N | 1-1 | 44 | Chave de Acesso do MDFe vinculado ao Evento |
| GP10 | dhEvento | E | GP03 | D | 1-1 | - | Data e Hora do Evento. Formato = AAAA-MM-DDTHH:MM:SS TZD. |
| GP11 | tpEvento | E | GP03 | N | 1-1 | 6 | Tipo do Evento (ver tabela de tipos de evento) |
| GP12 | nSeqEvento | E | GP03 | N | 1-1 | 1-3 | Sequencial do evento para o mesmo tipo de evento. Para maioria dos eventos será 1, nos casos em que possa existir mais de um evento o autor do evento deve numerar de forma sequencial. |
| **GP13** | **detEvento** | G | GP03 | - | 1-1 | - | Informações do evento específico. |
| GP14 | versaoEvento | A | GP13 | N | 1-1 | 2v2 | Versão do leiaute específico do evento. |
| GP15 | any | E | GP13 | XML | 1-1 | - | XML do evento. Insira neste local o XML específico do tipo de evento (cancelamento, encerramento, inclusão de condutor etc.) |
| **GP16** | **infSolicNFF** | G | GP03 | - | 0-1 | - | Grupo de informações do pedido de registro de eventos da Nota Fiscal Fácil |

<!-- p.48 -->

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| GP17 | xSolic | E | GP16 | C | 1-1 | 2-2000 | Solicitação do pedido de registro de evento da NFF |
| **GP18** | **infPAA** | G | GP03 | - | 0-1 | - | Grupo de Informação do Provedor de Assinatura e Autorização |
| GP19 | CNPJPAA | E | GP18 | N | 1-1 | 14 | CNPJ do Provedor de Assinatura e Autorização |
| **GP20** | **PAASignature** | G | GP19 | - | 1-1 | - | Assinatura RSA do Emitente para DFe gerados por PAA |
| GP21 | SignatureValue | E | GP20 | Base64 | 1-1 | - | Assinatura digital padrão RSA. Observação: Converter o atributo Id do DFe para array de bytes e assinar com a chave privada do RSA com algoritmo SHA1 gerando um valor no formato base64. |
| **GP22** | **RSAKeyValue** | G | GP20 | - | 1-1 | - | Chave Pública no padrão XML RSA Key |
| GP23 | Modulus | E | GP22 | Base64 | 1-1 | - | |
| GP24 | Exponent | E | GP22 | Base64 | 1-1 | - | |
| GP25 | Signature | G | GP01 | XML | 1-1 | - | Assinatura XML do grupo identificado pelo atributo "Id" |

## 5.1.2 Leiaute Mensagem de Retorno

- **Retorno:** Estrutura XML com o resultado do pedido de evento.
- **Schema XML:** retEventoMDFe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **GR01** | **retEventoMDFe** | Raiz | - | - | - | - | TAG raiz do Resultado do Envio do Evento |
| GR02 | versao | A | GR01 | N | 1-1 | 1-4 | Versão do leiaute |
| **GR03** | **infEvento** | G | GR01 | - | 1-1 | - | Grupo de informações do registro do Evento |
| GR04 | Id | ID | GR03 | C | 0-1 | 17 | Identificador da TAG a ser assinada, somente deve ser informado se o órgão de registro assinar a resposta. Em caso de assinatura da resposta pelo órgão de registro, preencher com o número do protocolo, precedido pela literal "ID" |
| GR05 | tpAmb | E | GR03 | N | 1-1 | 1 | Identificação do Ambiente: 1 – Produção / 2 – Homologação |
| GR06 | verAplic | E | GR03 | C | 1-1 | 1-20 | Versão da aplicação que registrou o Evento, utilizar literal que permita a identificação do órgão, como a sigla da UF ou do órgão. |
| GR07 | cOrgao | E | GR03 | N | 1-1 | 2 | Código da UF que registrou o Evento. |
| GR08 | cStat | E | GR03 | N | 1-1 | 3 | Código do status da resposta |
| GR09 | xMotivo | E | GR03 | C | 1-1 | 1-255 | Descrição do status da resposta |
| GR10 | chMDFe | E | GR03 | N | 0-1 | 44 | Chave de Acesso do MDFe vinculado ao evento. Os campos a seguir são obrigatórios no caso de homologação do evento cStat=135, 134 ou cStat=136. |
| GR11 | tpEvento | E | GR03 | N | 0-1 | 6 | Código do Tipo do Evento |
| GR12 | xEvento | E | GR03 | C | 0-1 | 5-60 | Descrição do Evento |
| GR13 | nSeqEvento | E | GR03 | N | 0-1 | 1-3 | Sequencial do evento para o mesmo tipo de evento. Para maioria dos eventos será 1, nos casos em que possa existir mais de um evento o autor do evento deve numerar de forma sequencial. |
| GR14 | dhRegEvento | E | GR03 | D | 0-1 | - | Data e Hora do Evento. Formato = AAAA-MM-DDTHH:MM:SS TZD |
| GR15 | nProt | E | GR15 | N | 0-1 | 15 | Número do protocolo de registro do evento. Os campos de dhRegEvento e nProt não serão preenchidos em caso de erro. |
| GR16 | Signature | G | GR01 | XML | 0-1 | - | Assinatura Digital do documento XML, a assinatura deverá ser aplicada no elemento infEvento. A decisão de assinar a mensagem fica a critério do Ambiente Autorizador |

<!-- p.49 -->

## 5.1.3 Descrição do Processo de Web Service

Este método é responsável por receber as solicitações referentes ao registro de eventos de MDFe. Ao receber a solicitação do transmissor, a aplicação do Ambiente Autorizador realiza o processamento da solicitação e devolve o resultado do processamento para o aplicativo do mesmo.

O WS de Eventos é acionado pelo interessado (emissor ou órgão público) que deve enviar mensagem de registro de evento.

## 5.1.4 Regras de Validação Básicas do Serviço

Deverão ser aplicadas as validações gerais conforme quadro abaixo:

| Grupo | Descrição |
|---|---|
| A | Validação do Certificado de Transmissão (protocolo TLS) |
| A-2 | Validação do Certificado de Transmissão (Regime Especial NFF) |
| B | Validação Inicial da Mensagem no Web Service |
| C | Validação da Área de Dados da mensagem |
| D | Validações do Certificado de Assinatura |
| E | Validações da Assinatura Digital |
| E-1 | Validação da Assinatura Digital (Regime Especial NFF) |
| E-2 | Validação da Assinatura Digital (PAA) |

## 5.1.5 Validação das Regras de Negócio do Serviço de Registro de Eventos

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| J01 | Tipo do ambiente informado difere do ambiente do Web Service | Obrig. | 252 | Rej. | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| J02 | Se informado CNPJ: Validar CNPJ do autor do evento (DV ou zeros) | Obrig. | 627 | Rej. | Rejeição: CNPJ do autor do evento inválido |
| J03 | Se informado CPF: Validar CPF do autor do evento (DV ou zeros) | Obrig. | 700 | Rej. | Rejeição: CPF do autor do evento inválido |
| J04 | Validar se atributo Id corresponde à concatenação dos campos evento ("ID" + tpEvento + chMDFe + nSeqEvento)<br>**Observação:** o atributo ID poderá ter 54 ou 55 dígitos, a variação ocorre no nSeqEvento que pode ter 2 ou 3 posições. | Obrig. | 628 | Rej. | Rejeição: Erro Atributo ID do evento não corresponde à concatenação dos campos ("ID" + tpEvento + chMDFe + nSeqEvento) |
| J05 | Verificar se o tpEvento é válido | Obrig. | 629 | Rej. | Rejeição: O tpEvento informado inválido |
| J06 | Verificar Schema da parte específica do Evento<br>**OBS:** Utilizar o tpEvento + o atributo versaoEvento para identificar qual schema deve ser validado. | Obrig. | 630 | Rej. | Rejeição: Falha no Schema XML específico para o evento |
| J07 | Validar chave de acesso do MDFe. Retornar motivo da rejeição da Chave de Acesso: CNPJ/ CPF zerado ou inválido, Ano < 2012 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 58, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido) [Motivo: XXXXXXXXXXXX] | Obrig. | 236 | Rej. | Rejeição: Chave de Acesso inválida [Motivo: XXXXXXXXX] |
| J08 | Verificar duplicidade do evento (cOrgao + tpEvento + chMDFe + nSeqEvento) [nProt:999999999999999][dhRegEvento: AAAA-MM-DDTHH:MM:SS TZD] | Obrig. | 631 | Rej. | Rejeição: Duplicidade de evento |

<!-- p.50 -->

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| J09 | Se evento do emissor verificar se CNPJ / CPF do Autor diferente do CNPJ / CPF da chave de acesso do MDFe<br>**Observação:** Verificar CPF se a série estiver na faixa 920-969 ou para Regime Especial da Nota Fiscal Fácil (tpEmis=3) para todas as demais verificar como CNPJ | Obrig. | 632 | Rej. | Rejeição: O autor do evento diverge do emissor do MDFe |
| J10 | Se evento Fisco / RFB / Outros: Rejeitar se informado CPF do autor | Obrig. | 701 | Rej. | Rejeição: Tipo de evento incompatível com emitente pessoa física |
| J11 | Se evento do Fisco/Outros órgãos, verificar se CNPJ do Autor consta da tabela de órgãos autorizados a gerar evento. | Obrig. | 633 | Rej. | Rejeição: O autor do evento não é um órgão autorizado a gerar o evento |
| J12 | Se evento exige MDFe: Acesso BD MDFe (Chave: CNP / CPF Emit, Modelo, Série, Nº): Verificar se MDFe não existe | Obrig. | 217 | Rej. | Rejeição: MDFe não consta na base de dados da SEFAZ |
| J13 | Se existir a MDFe: (Independente do evento exigir) Verificar se a Chave de Acesso difere da existente em BD (opcionalmente a descrição do erro, campo xMotivo, tem concatenada a Chave de Acesso) | Obrig. | 600 | Rej. | Rejeição: Chave de Acesso difere da existente em BD |
| J14 | Data do evento não pode ser menor que a data de emissão do MDFe, se existir. A SEFAZ deve tolerar uma diferença máxima de 5 minutos em função da sincronização de horário de servidores. | Obrig. | 634 | Rej. | Rejeição: A data do evento não pode ser menor que a data de emissão do MDFe |
| J15 | Data do evento não pode ser menor que a data de autorização do MDFe, se existir. A SEFAZ deve tolerar uma diferença máxima de 5 minutos em função da sincronização de horário de servidores. | Obrig. | 637 | Rej. | Rejeição: A data do evento não pode ser menor que a data de autorização do MDFe |
| J16 | Data do evento não pode ser maior que a data de processamento. A SEFAZ deve tolerar uma diferença máxima de 5 minutos em função da sincronização de horário de servidores. | Obrig. | 635 | Rej. | Rejeição: A data do evento não pode ser maior que a data do processamento |
| J17 | Se a forma de emissão do MDFe (tpEmis) for diferente de Regime Especial da Nota Fiscal Fácil (3): O grupo de informações do pedido de registro de evento da NFF (infSolicNFF) não pode estar preenchido | Obrig. | 902 | Rej. | Rejeição: Grupo de informações do pedido de emissão da NFF deve ser preenchido apenas para forma de emissão NFF |

## 5.1.6 Processamento das validações específicas de cada evento

Serão definidas no item 6 deste Manual correspondentes a cada evento.

## 5.1.7 Final do Processamento do Evento

O processamento do evento pode resultar em:

- **Rejeição** – o Evento será descartado, com retorno do código do status do motivo da rejeição;
- **Recebido pelo Sistema de Registro de Eventos, com vinculação do evento no respetivo MDFe** – o Evento será armazenado no repositório do Sistema de Registro de Eventos com a vinculação do Evento no respectivo MDFe (cStat=135);

<!-- p.51 -->

- **Recebido pelo Sistema de Registro de Eventos – vinculação do evento ao respectivo MDFe prejudicado** – o Evento será armazenado no repositório do Sistema de Registro de Eventos, a vinculação do evento ao respectivo MDFe fica prejudicada face a inexistência do MDFe no momento do recebimento do Evento (cStat=136);
- **Recebido pelo Sistema de Registro de Eventos, com vinculação do evento no respectivo MDFe com situação diferente de Autorizada** – o Evento será armazenado no repositório do Sistema de Registro de Eventos com a vinculação do Evento no respectivo MDFe retornando um alerta com a situação de MDFe (cStat=134);

O Ambiente Autorizador deverá compartilhar os eventos autorizados no Sistema de Registro de Eventos com os órgãos interessados.
