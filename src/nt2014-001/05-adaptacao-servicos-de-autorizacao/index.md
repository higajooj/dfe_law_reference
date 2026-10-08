# 5. Adaptação nos Serviços de Autorização de Uso

A SEFAZ Autorizadora mantém controle da numeração das NF-e já autorizadas, evitando a duplicidade de autorização de uso para a mesma Chave Natural (campos de: Modelo, UF, CNPJ ou CPF do Emitente, Série e Número da NF-e).

O EPEC autorizado pelo Ambiente Nacional é compartilhado com a SEFAZ do emitente e deverá ser armazenado na UF como um evento normal. A Chave Natural da NF-e constante no EPEC autorizado deverá também ser registrada no banco de dados de controle de numeração das NF-e autorizadas.

Os Serviços de Autorização de Uso existentes deverão ser alterados, conforme segue.

## 5.1 Serviço de Autorização de NF-e

Conforme citado anteriormente, o Emitente do EPEC deve obter a Autorização de Uso para a NF-e correspondente ao EPEC autorizado.

<!-- p.16 -->Caso a NF-e com tipo de emissão 4 (EPEC) seja autorizada ou denegada, o ambiente nacional no Serpro assinará o EPEC como conciliado, conforme o item de "Controle de EPEC Pendente de Conciliação" tratado anteriormente. No caso da NF-e ter sido "Denegada", o ambiente nacional no Serpro assinará para avaliação a posteriori pela SEFAZ, já que o EPEC autorizado pode ter acobertado a circulação da mercadoria.

Como os dados do EPEC são obtidos a partir da NF-e que não conseguiu ser transmitida por problemas técnicos, quando for transmitida, esta NF-e deverá possuir os mesmos dados do EPEC autorizado anteriormente.

O Serviço de Autorização de Uso da NF-e deverá validar estas informações. Portanto, deverão ser alteradas as regras de validação da NF-e, conforme segue:

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 2AB08-10 | 55 | Acesso ao BD Evento EPEC (Chave: Modelo, UF, CNPJ ou CPF Emitente, Série, Nro):<br>- Se existe EPEC:<br>- Se Tipo Emissão da NF-e <> 4 | Obrig. | 692 | Rej. | Rejeição: Existe EPEC registrado para esta Série e Número [Chave EPEC: xxxxxxxxxxx] |
| 2AB08-20 | 55 | - Chave de Acesso da NF-e diverge da Chave de Acesso do EPEC | Obrig. | 691 | Rej. | Rejeição: Chave de Acesso da NF-e diverge da Chave de Acesso do EPEC [Chave EPEC: xxxxxxxxx] |
| 2AB08-30 | 55 | - Verificar divergência entre os dados da NF-e e os dados do EPEC (*1) | Obrig. | 467 | Rej. | Rejeição: Dados da NF-e divergentes do EPEC [tag:xxxx] |
| 2AB08-40 | 55 | - Se não existe EPEC:<br>- Se Tipo Emissão da NF-e=4-EPEC e Data Emissão NF-e > Data da desativação do DPEC | Obrig. | 468 | Rej. | Rejeição: NF-e com Tipo Emissão = 4, sem EPEC correspondente |

(*1) Conferir a divergência dos dados da NF-e com os dados do EPEC recebido anteriormente, para os campos: IE do Emitente, Data de Emissão, Tipo de Nota Fiscal (entrada / saída), UF do destinatário, identificação do destinatário (CNPJ/CPF/idEstrangeiro), IE do Destinatário, dados de valor (Total, ICMS e ICMS-ST). Opcionalmente, a SEFAZ Autorizadora poderá informar na mensagem de erro o nome da tag da NF-e com valor divergente no EPEC.

## 5.2 Serviço de Registro de Evento: Cancelamento de NF-e

Não existe o cancelamento de um EPEC autorizado, portanto o pedido de cancelamento da NF-e somente é possível se existir a NF-e.

No caso da empresa ter autorizado o evento de EPEC, mas decidir pelo cancelamento da operação, deverá proceder como segue:

- Obter a autorização de uso da NF-e relacionada com o EPEC autorizado;
- Cancelar a NF-e recém autorizada.

## 5.3 Serviço de Registro de Evento: Carta de Correção

O evento de Carta de Correção somente é possível se existir a NF-e autorizada.

## 5.4 Serviço de Registro de Evento: Manifestação do Destinatário

<!-- p.17 -->Os eventos da Manifestação do Destinatário se referem a uma NF-e autorizada, portanto os serviços relacionados com a Manifestação do Destinatário não serão afetados pela existência unicamente do EPEC, sem ter sido autorizada a NF-e correspondente.

## 5.5 Serviço de Inutilização de Numeração

A validação do pedido de inutilização deverá considerar a existência do EPEC, portanto o pedido de inutilização será rejeitado com a mensagem abaixo, caso exista um EPEC autorizado para a faixa de numeração:

- Mensagem: "241 - Rejeição: Um número da faixa já foi utilizado".

## 5.6 Serviço de Consulta Situação da NF-e (Web Service: NfeConsulta2)

Caso a NF-e referente ao evento EPEC já tenha sido autorizada, a Consulta da Situação da NF-e deverá retornar normalmente o protocolo de autorização de uso da NF-e e os dados dos eventos, da mesma forma que acontece para qualquer NF-e com evento.

Caso exista unicamente o EPEC, a Consulta da Situação da NF-e deverá retornar os dados do evento EPEC, com a mensagem abaixo:

- "124 - EPEC Autorizado".
