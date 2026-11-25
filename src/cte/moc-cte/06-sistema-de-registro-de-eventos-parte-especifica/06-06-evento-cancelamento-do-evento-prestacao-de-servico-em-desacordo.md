<!-- p.68 -->

# 6.6. Evento Cancelamento do Evento Prestação de Serviço em Desacordo

**Função:** Evento para que o tomador possa cancelar o evento de prestação de serviço em desacordo gerado indevidamente em um CTe

**Autor do Evento:** O autor do evento é o tomador do serviço indicado no CTe que registrou um evento de Prestação em Desacordo. A mensagem XML do evento será assinada com o certificado digital que tenha o CNPJ base do tomador do serviço do CTe, ou o CNPJ da SEFAZ Virtual RS para tomadores pessoa física identificados por login na plataforma gov.br.

**Modelo:** CTe de Transporte de Cargas (modelo 57) e Outros Serviços (67)

**Código do Tipo de Evento: 610111** (Este evento exige CTe autorizado)

**Schema XML:** evCancPrestDesacordo_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **IP01** | **evPrestDesacordo** | **G** | **-** | **-** | **-** | **-** | **TAG raiz** |
| IP02 | descEvento | E | IP01 | C | 1 - 1 | 46 | Descrição do Evento: ‘Cancelamento Prestação do Serviço em Desacordo’ ou ‘Prestacao do Servico em Desacordo’ |
| IP04 | nProtEvPrestDes | E | IP01 | N | 1 - 1 | 15 | Informar o número do protocolo de autorização do evento de prestação de serviço em desacordo que será cancelado |

## 6.6.1 Validação das Regras Específicas do Evento

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **O01** Verificar se o nSeqEvento é maior que o valor permitido (1-20) | Obrig. | 636 | Rej. | Rejeição: O número sequencial do evento é maior que o permitido |
| **O02** Verificar se CTe possui CTe de substituição associado | Obrig. | 664 | Rej. | Rejeição: Evento não permitido para CTe Substituído |
| **O03** Verificar se número do Protocolo do evento de prestação em desacordo a ser cancelado existe para o CTe e encontra-se na situação autorizado | Obrig. | 866 | Rej. | Rejeição:Protocolo do evento a ser cancelado não existe, não está associado ao CTe ou já está cancelado |

## 6.6.2 Final do Processamento

Se o evento de Cancelamento do Evento de Prestação do Serviço em Desacordo for homologado o status de retorno deverá ser cStat=135.

<!-- p.69 -->
