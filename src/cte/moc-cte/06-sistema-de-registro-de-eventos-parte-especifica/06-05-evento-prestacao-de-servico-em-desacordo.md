<!-- p.67 -->

# 6.5. Evento Prestação de Serviço em Desacordo

**Função:** Evento para que o tomador possa informar ao fisco que o documento CTe que o relaciona está em desacordo com a prestação de serviço.

**Autor do Evento:** O autor do evento é o tomador do serviço indicado no CTe. A mensagem XML do evento será assinada com o certificado digital que tenha o CNPJ base do tomador do serviço do CTe, ou o CNPJ da SEFAZ Virtual RS para tomadores pessoa física identificados por login na plataforma gov.br.

**Modelo:** CTe de Transporte de Cargas (modelo 57) e Outros Serviços (67)

**Código do Tipo de Evento: 610110** (Este evento exige CTe autorizado)

**Schema XML:** evPrestDesacordo_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **IP01** | **evPrestDesacordo** | **G** | **-** | **-** | **-** | **-** | **TAG raiz** |
| IP02 | descEvento | E | IP01 | C | 1 - 1 | 33 | Descrição do Evento: ‘Prestação do Serviço em Desacordo’ ou ‘Prestacao do Servico em Desacordo’ |
| IP03 | indDesacordoOper | E | IP01 | C | 1 - 1 | 1 | Indicador de prestação do serviço em desacordo |
| IP04 | xObs | E | IP01 | C | 0 - 1 | 15-255 | Observações do tomador |

## 6.5.1 Validação das Regras Específicas do Evento

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **O01** Verificar se o nSeqEvento é maior que o valor permitido (1-20) | Obrig. | 636 | Rej. | Rejeição: O número sequencial do evento é maior que o permitido |
| **O02** Verificar se CTe já está denegado<br>**Observação:** Regra mantida para garantir compatibilidade com CTe antigos que possam estar na situação denegado | Obrig. | 205 | Rej. | Rejeição: CTe está denegado na base de dados da SEFAZ |
| **O03** Verificar se CTe já está cancelado | Obrig. | 218 | Rej. | Rejeição: CTe já está cancelado na base de dados da SEFAZ<br>[nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. |
| **O04** Verificar se CTe possui CTe de substituição associado | Obrig. | 664 | Rej. | Rejeição: Evento não permitido para CTe Substituído |
| **O05** Verificar se o CTe está com data de autorização há mais de 45 dias | Obrig. | 787 | Rej. | Rejeição: Data do evento de Prestação do Serviço em desacordo deve ocorrer em até 45 dias da autorização do CTe |

## 6.5.2 Final do Processamento

Se o evento de Prestação do Serviço em Desacordo for homologado o status de retorno deverá ser cStat=135.
