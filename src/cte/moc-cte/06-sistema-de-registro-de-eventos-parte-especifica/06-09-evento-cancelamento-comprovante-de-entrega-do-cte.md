<!-- p.76 -->

# 6.9. Evento Cancelamento Comprovante de Entrega do CTe

**Função:** Evento para indicar o cancelamento de um evento da entrega da carga pelo transportador nas ocasiões em que ocorrer erro na geração do evento de entrega.

**Autor do Evento:** O autor do evento é o emissor do CTe. A mensagem XML do evento será assinada com o certificado digital que tenha o CNPJ base do Emissor do CTe.

**Modelo:** CTe de Transporte de Cargas (modelo 57)

**Código do Tipo de Evento: 110181** (Este evento exige CTe autorizado)

**Schema XML:** evCancCECTe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **IP01** | **evCancCECTe** | **G** | **-** | **-** | **-** | **-** | **TAG raiz** |
| IP02 | descEvento | E | IP01 | C | 1 - 1 | 46 | Descrição do Evento: “Cancelamento do Comprovante de Entrega do CTe” |
| IP03 | nProt | E | IP01 | N | 1 - 1 | 15 | Informar o número do protocolo de autorização do CTe |
| IP04 | nProtCE | E | IP01 | N | 1 - 1 | 15 | Informar o número do protocolo de autorização do evento de Comprovante de entrega que será cancelado |

## 6.9.1 Validação das Regras Específicas do Evento

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **O01** Verificar se o nSeqEvento é maior que o valor permitido (1-999) | Obrig. | 636 | Rej. | Rejeição: O número sequencial do evento é maior que o permitido |
| **O02** Verificar se número do Protocolo informado difere do número do Protocolo do CTe | Obrig. | 222 | Rej. | Rejeição: Protocolo de Autorização de Uso difere do cadastrado |
| **O03** Verificar se número do Protocolo do evento de comprovante de entrega a ser cancelado existe para o CTe e encontra-se na situação autorizado | Obrig. | 866 | Rej. | Rejeição:Protocolo do evento a ser cancelado não existe, não está associado ao CTe ou já está cancelado |

## 6.9.2 Final do Processamento

Se o evento de Cancelamento do Comprovante de entrega do CTe for homologado o status de retorno deverá ser cStat=135.

Este evento deverá ser propagado nas notas fiscais eletrônicas informadas no evento Comprovante de Entrega cancelado, conforme Boletim Técnico do projeto NFe.
