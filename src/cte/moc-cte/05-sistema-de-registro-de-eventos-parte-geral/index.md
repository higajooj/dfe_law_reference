<!-- p.52 -->

# 5. Sistema de Registro de Eventos (Parte Geral)

**Função**: serviço destinado à recepção de mensagem de evento de CTe de Carga (57), Outros Serviços (67) ou GTVe (64).

**Processo**: síncrono.

**Nome Serviço**: CTeRecepcaoEventoV4

**Método**: cteRecepcaoEvento

**Parâmetro da Mensagem da área de dados**: XML sem compactação

## 5.1.1 Leiaute Mensagem de Entrada

**Entrada**: Estrutura XML contendo a consulta do status do serviço

**Schema XML**: eventoCTe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **IP01** | **eventoCTe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| IP02 | versao | A | IP01 | N | 1-1 | 2v2 | Versão do leiaute |
| IP03 | infEvento | G | IP01 | - | 1-1 | | Grupo de informações do registro de eventos |
| IP04 | Id | ID | IP03 | C | 1-1 | 55 | Identificador da TAG a ser assinada, a regra de formação do Id é:<br>“ID” + tpEvento+ chave do CTe+ nSeqEvento<br><br>Obs: O nSeqEvento deve ser preenchido com zeros 3 dígitos |
| IP05 | cOrgao | E | IP03 | N | 1-1 | 2 | Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE estendida |
| IP06 | tpAmb | E | IP03 | N | 1-1 | 1 | Identificação do Ambiente:<br>1 – Produção 2 – Homologação |
| IP07 | CNPJ | CE | IP03 | N | 1-1 | 14 | Informar o CNPJ do autor do Evento |
| IP08 | CPF | CE | IP-3 <!-- REVISAR p.52: Pai do campo CPF consta como "IP-3" no original (provável IP03) --> | N | 1-1 | 11 | Informar o CPF do autor do Evento |
| IP09 | chCTe | E | IP03 | N | 1-1 | 44 | Chave de Acesso do CTe vinculado ao Evento |
| IP10 | dhEvento | E | IP03 | D | 1-1 | - | Data e Hora do Evento<br>Formato = AAAA-MM-DDTHH:MM:SS TZD. |
| IP11 | tpEvento | E | IP03 | N | 1-1 | 6 | Tipo do Evento (ver tabela de tipos de evento) |
| IP12 | nSeqEvento | E | IP03 | N | 1-1 | 1-3 | Sequencial do evento para o mesmo tipo de evento. Para maioria dos eventos será 1, nos casos em que possa existir mais de um evento o autor do evento deve numerar de forma sequencial. |
| **IP13** | **detEvento** | **G** | **IP03** | **-** | **1-1** | **-** | **Informações do evento específico.** |
| IP14 | versaoEvento | A | IP13 | N | 1-1 | 2v2 | Versão do leiaute específico do evento. |
| IP15 | any | E | IP13 | XML | 1-1 | - | XML do evento<br>Insira neste local o XML específico do tipo de evento (cancelamento, carta de correção etc.) |
| IP16 | infSolicNFF | G | IP03 | - | 0 – 1 | | Grupo de informações do pedido de registro de eventos da Nota Fiscal Fácil |
| IP17 | xSolic | E | IP16 | C | 1-1 | 2-2000 | Solicitação do pedido de registro de evento da NFF |
| IP18 | infPAA | G | IP03 | - | 0-1 | | <!-- p.53 -->Grupo de Informação do Provedor de Assinatura e Autorização |
| IP19 | CNPJPAA | E | IP18 | N | 1-1 | 14 | CNPJ do Provedor de Assinatura e Autorização |
| IP20 | PAASignature | G | IP19 | - | 1-1 | | Assinatura RSA do Emitente para DFe gerados por PAA |
| IP21 | SignatureValue | E | IP20 | Base64 | 1-1 | - | Assinatura digital padrão RSA<br><br>**Observação**: Converter o atributo Id do DFe para array de bytes e assinar com a chave privada do RSA com algoritmo SHA1 gerando um valor no formato base64. |
| IP22 | RSAKeyValue | G | IP20 | - | 1-1 | | Chave Pública no padrão XML RSA Key |
| IP23 | Modulus | E | IP22 | Base64 | 1-1 | - | |
| IP24 | Exponent | E | IP22 | Base64 | 1-1 | | |
| IP25 | Signature | G | IP01 | XML | 1-1 | - | Assinatura XML do grupo identificado pelo atributo “Id” |

## 5.1.2 Leiaute Mensagem de Retorno

**Retorno**: Estrutura XML com o resultado do pedido de evento.

**Schema XML**: retEventoCTe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **IR01** | **retEventoCTe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz do Resultado do Envio do Evento** |
| IR02 | versao | A | IR01 | N | 1-1 | 1-4 | Versão do leiaute |
| IR03 | infEvento | G | IR01 | | 1-1 | | Grupo de informações do registro do Evento |
| IR04 | Id | ID | IR03 | C | 0-1 | 17 | Identificador da TAG a ser assinada, somente deve ser informado se o órgão de registro assinar a resposta.<br>Em caso de assinatura da resposta pelo órgão de registro, preencher com o número do protocolo, precedido pela literal “ID” |
| IR05 | tpAmb | E | IR03 | N | 1-1 | 1 | Identificação do Ambiente:<br>1 – Produção / 2 – Homologação |
| IR06 | verAplic | E | IR03 | C | 1-1 | 1-20 | Versão da aplicação que registrou o Evento, utilizar literal que permita a identificação do órgão, como a sigla da UF ou do órgão. |
| IR07 | cOrgao | E | IR03 | N | 1-1 | 2 | Código da UF que registrou o Evento. |
| IR08 | cStat | E | IR03 | N | 1-1 | 3 | Código do status da resposta |
| IR09 | xMotivo | E | IR03 | C | 1-1 | 1-255 | Descrição do status da resposta |
| | | | | | | | **Os campos a seguir são obrigatórios no caso de homologação do evento cStat=135, 134 ou cStat=136.**<br>**Os campos de dhRegEvento e nProt não serão preenchidos em caso de erro** |
| IR10 | chCte | E | IR03 | N | 0-1 | 44 | Chave de Acesso do CTe vinculado ao evento |
| IR11 | tpEvento | E | IR03 | N | 0-1 | 6 | Código do Tipo do Evento |
| IR12 | xEvento | E | IR03 | C | 0-1 | 5-60 | Descrição do Evento |
| IR13 | nSeqEvento | E | IR03 | N | 0-1 | 1-3 | Sequencial do evento para o mesmo tipo de evento. Para maioria dos eventos será 1, nos casos em que possa existir mais de um evento o autor do evento deve numerar de forma sequencial. |
| IR14 | dhRegEvento | E | IR03 | D | 0-1 | | Data e Hora do Evento Formato = AAAA-MM-DDTHH:MM:SS TZD |
| IR15 | nProt | E | IR15 <!-- REVISAR p.53: Pai do campo nProt consta como "IR15" (si mesmo) no original --> | N | 0-1 | 15 | Número do protocolo de registro do evento |
| IR16 | Signature | G | IR01 | XML | 0-1 | | Assinatura Digital do documento XML, a assinatura deverá ser aplicada no elemento infEvento. A decisão de assinar a mensagem fica a critério do Ambiente Autorizador |

<!-- p.54 -->

## 5.1.3 Descrição do Processo de Web Service

Este método é responsável por receber as solicitações referentes ao registro de eventos de CTe. Ao receber a solicitação do transmissor, a aplicação do Ambiente Autorizador realiza o processamento da solicitação e devolve o resultado do processamento para o aplicativo do mesmo.

O WS de Eventos é acionado pelo interessado (emissor ou órgão público) que deve enviar mensagem de registro de evento.

As validações gerais dos eventos serão aplicadas aos CTe dos modelos 57, 67 e 64. As validações específicas de cada evento terão descrito o modelo a que se aplicam e farão as restrições de utilização com base no modelo identificado na composição da chave de acesso informada.

## 5.1.4 Regras de Validação Básicas do Serviço

Deverão ser aplicadas as validações gerais conforme quadro abaixo:

| Grupo | Descrição |
|---|---|
| A | Validação do Certificado de Transmissão (protocolo TLS) |
| A-2 | Validação do Certificado de Transmissão Eventos (NFF) |
| B | Validação Inicial da Mensagem no Web Service |
| C | Validação da Área de Dados da mensagem |
| C-1 | Validação do Ambiente de Autorização<br>• Detectar UF pela UF da chave de acesso<br>• Não aplicar a regra C09 (SVC sempre aberta para eventos SVC) |
| D | Validações do Certificado de Assinatura |
| E | Validações da Assinatura Digital |
| E-1 | Validação da Assinatura Digital (Regime Especial NFF) |
| E-2 | Validação da Assinatura Digital (PAA) |

As validações do grupo C-1 dependem do tipo de evento para determinar sua aplicação, o evento do tipo EPEC, por exemplo, somente será aceito pela SVC, portanto a UF desse evento deverá ser atendida pela SVC requisitada.

As regras que irão determinar quando um evento será aceito por determinado ambiente de autorização (Normal / SVC) serão especificadas em cada evento.

## 5.1.5 Validação das Regras de Negócio do Serviço de Registro de Eventos

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **N01** Tipo do ambiente informado difere do ambiente do Web Service | Obrig. | 252 | Rej. | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| **N02** Verificar se o código do órgão de recepção do Evento diverge do solicitado | Obrig. | 677 | Rej. | Rejeição: Órgão de recepção do evento inválido |
| **N03** A série informada não deve estar na faixa 890-899 <!-- p.55 -->(reservada) | Obrig. | 670 | Rej. | Rejeição: Série utilizada não permitida no webservice |
| **N04** Validar CNPJ do autor do evento (DV ou zeros)<br><br>**Exceção 1:** Se o evento for de emitente (por exemplo: Cancelamento, Comprovante de entrega, Canc. Comprovante de Entrega) quando a forma de emissão do CTe (tpEmis) for Regime Especial da Nota Fiscal Fácil (3), no lugar do CNPJ será informado o CPF do TAC emitente<br><br>**Exceção 2:** Se for evento do Tomador existe previsão para informar a tag CPF do Autor quando o tomador for pessoa física | Obrig. | 627 | Rej. | Rejeição: CNPJ do autor do evento inválido |
| **N05** Se forma de emissão da chave de acesso do CTe for Regime Especial da Nota Fiscal Fácil e o tipo de evento for do emitente ou quando for evento do Tomador e o autor for pessoa física:<br>- Validar CPF do autor do evento (DV ou zeros) | Obrig. | 905 | Rej. | Rejeição: CPF do autor inválido |
| **N06** Validar se atributo Id corresponde à concatenação dos campos evento (“ID” + tpEvento + chCTe + nSeqEvento) | Obrig. | 628 | Rej. | Rejeição: Erro Atributo ID do evento não corresponde a concatenação dos campos (“ID” + tpEvento + chCTe + nSeqEvento) |
| **N07** Verificar se o tpEvento é válido | Obrig. | 629 | Rej. | Rejeição: O tpEvento informado inválido |
| **N08** Se Ambiente de Autorização SVC:<br>- Verificar se Tipo de Emissão (obtido na chave de acesso) difere do tpEmis da SVC (7=SVC-RS e 8=SVC-SP) | Obrig. | 516 | Rej. | Rejeição: O tpEmis informado é incompatível com SVC-[SP/RS] |
| **N09** Se ambiente de Autorização SVC:<br>- Rejeitar se Tipo de Evento for diferente de EPEC (110113) ou Cancelamento (110111) | Obrig. | 530 | Rej. | Rejeição: Se ambiente SVC, rejeitar eventos diferentes de EPEC, Liberação EPEC e Cancelamento |
| **N10** Verificar Schema da parte específica do Evento<br>OBS: Utilizar o tpEvento + o atributo versaoEvento para identificar qual schema deve ser validado. | Obrig. | 630 | Rej. | Rejeição: Falha no Schema XML específico para o evento |
| **N11** - Validar chave de acesso do CTe<br>Retornar motivo da rejeição da Chave de Acesso: CNPJ/CPF zerado ou inválido, Ano < 2009 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 57/67/64, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 236 | Rej. | Rejeição: Chave de Acesso inválida |
| **N12** Se tipo do evento for EXCLUSIVO de CTe de Transporte de Cargas (modelo 57):<br>Rejeitar se Chave de acesso for de modelo diferente de 57<br>**Observação**: Ver relação de tipos de evento no item 3.7.1 | Obrig. | 732 | Rej. | Rejeição: Chave de acesso inválida (modelo diferente de 57) |
| **N13** Se tipo do evento for EXCLUSIVO de CTe de Outros Serviços (modelo 67):<br>Rejeitar se Chave de acesso for de modelo diferente de 67<br>**Observação**: Ver relação de tipos de evento no item 3.7.1 | Obrig. | 721 | Rej | Rejeição: Chave de acesso inválida (modelo diferente de 67) |
| **N14** Se tipo do evento for EXCLUSIVO de GTVe (modelo 64):<br>Rejeitar se Chave de acesso for de modelo diferente de 64 | Obrig. | 875 | Rej | Rejeição: Chave de acesso inválida (modelo diferente de 64) |
| **N15** Se tipo de evento for permitido apenas para CTe e CTe-OS:<br>Rejeitar se Chave de acesso for de modelo diferente de 57 ou 67 | Obrig. | 595 | Rej. | Rejeição: Chave de acesso inválida (modelo diferente de 57 ou 67) |
| **N16** Verificar duplicidade do evento (cOrgao + tpEvento + chCte + nSeqEvento) | Obrig. | 631 | Rej. | Rejeição: Duplicidade de evento [nProt:999999999999999][dhRegEvento: AAAA-MM-DDTHH:MM:SS TZD] |
| **N17** Se evento do emissor verificar se CNPJ/CPF do Autor diferente do CNPJ/CPF da chave de acesso do CTe | Obrig. | 632 | Rej. | Rejeição: O autor do evento diverge do emissor do CTe |
| <!-- p.56 -->**N18** Se evento do Fisco/Outros órgãos, verificar se CNPJ do Autor consta da tabela de órgãos autorizados a gerar evento. | Obrig. | 633 | Rej. | Rejeição: O autor do evento não é um órgão autorizado a gerar o evento |
| **N19** Se evento do Tomador:<br>- Verificar se o CNPJ/CPF do Autor é diferente do CNPJ/CPF do tomador do CTe | Obrig. | 755 | Rej. | Rejeição: Autor do evento prestação do serviço em desacordo deve ser o tomador do serviço do CTe |
| **N20** Se evento exige CTe:<br>Acesso BD CTe (Chave: UF, CNP/CPF Emit, Modelo, Série, Nº): - Verificar se CTe não existe | Obrig. | 217 | Rej. | Rejeição: CTe não consta na base de dados da SEFAZ |
| **N21** Verificar se campo “Código Numérico” informado na Chave de Acesso é diferente do existente no BD | Obrig. | 216 | Rej. | Rejeição: Chave de acesso difere da cadastrada |
| **N22** Se existir o CTe: (Independente do evento exigir)<br>Verificar se a Chave de Acesso difere da existente em BD<br>(opcionalmente a descrição do erro, campo xMotivo, tem concatenada a Chave de Acesso) | Obrig. | 600 | Rej. | Rejeição: Chave de Acesso difere da existente em BD |
| **N23** Data do evento não pode ser menor que a data de emissão do CTe, se existir.<br>A SEFAZ deve tolerar uma diferença máxima de 5 minutos em função da sincronização de horário de servidores. | Obrig. | 634 | Rej. | Rejeição: A data do evento não pode ser menor que a data de emissão do CTe |
| **N24** Data do evento não pode ser menor que a data de autorização do CTe, se existir<br>A SEFAZ deve tolerar uma diferença máxima de 5 minutos em função da sincronização de horário de servidores. | Obrig. | 637 | Rej. | Rejeição: A data do evento não pode ser menor que a data de autorização do CTe |
| **N25** Data do evento não pode ser maior que a data de processamento.<br>A SEFAZ deve tolerar uma diferença máxima de 5 minutos em função da sincronização de horário de servidores. | Obrig. | 635 | Rej. | Rejeição: A data do evento não pode ser maior que a data do processamento |
| **N26** Se a forma de emissão do CTe (tpEmis) for diferente de Regime Especial da Nota Fiscal Fácil (3):<br>- O grupo de informações do pedido de registro de evento da NFF (infSolicNFF) não pode estar preenchido | Obrig. | 902 | Rej. | Rejeição: Grupo de informações do pedido de emissão da NFF deve ser preenchido apenas para forma de emissão NFF |

## 5.1.6 Processamento das validações específicas de cada evento

Serão definidas no item 6 deste Manual correspondentes a cada evento.

## 5.1.7 Final do Processamento do Evento

O processamento do evento pode resultar em:

- **Rejeição** – o Evento será descartado, com retorno do código do status do motivo da rejeição;
- **Recebido pelo Sistema de Registro de Eventos, com vinculação do evento no respetivo CTe**, o Evento será armazenado no repositório do Sistema de Registro de Eventos com a vinculação do Evento no respectivo CTe (cStat=135);
- **Recebido pelo Sistema de Registro de Eventos – vinculação do evento ao respectivo CTe prejudicado** – o Evento será armazenado no repositório do Sistema de Registro de Eventos, a vinculação do evento ao respectivo CTe fica prejudicada face a inexistência do CTe no momento do recebimento do Evento (cStat=136);
- **Recebido pelo Sistema de Registro de Eventos, com vinculação do evento no respectivo CTe com situação diferente de Autorizada**, o Evento será armazenado no repositório do <!-- p.57 -->Sistema de Registro de Eventos com a vinculação do Evento no respectivo CTe **retornando um alerta com a situação de CTe (cStat=134)**;

O Ambiente Autorizador deverá compartilhar os eventos autorizados no Sistema de Registro de Eventos com os órgãos interessados.
