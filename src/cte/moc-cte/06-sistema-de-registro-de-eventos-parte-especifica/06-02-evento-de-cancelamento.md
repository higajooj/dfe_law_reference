<!-- p.61 -->

# 6.2. Evento de Cancelamento

**Função**: evento destinado ao atendimento de solicitações de cancelamento de CTe, CTeOS e GTVe.

**Autor do Evento**: O autor do evento é o emissor do CTe. A mensagem XML do evento será assinada com o certificado digital que tenha o CNPJ base do Emissor do CTe.

**Modelo**: CTe de Transporte de Cargas (modelo 57), Outros Serviços (modelo 67) e GTVe (modelo 64)

**Código do Tipo de Evento**: 110111 (Este evento exige CTe, CTeOS ou GTVe autorizada)

**Schema XML**: evCancCTe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **IP01** | **evCancCTe** | **G** | **-** | **-** | **-** | **-** | **TAG raiz** |
| IP02 | descEvento | E | IP01 | C | 1-1 | 12 | Descrição do Evento: ‘Cancelamento’ |
| IP03 | nProt | E | IP01 | N | 1-1 | 15 | Informar o número do protocolo de autorização do CTe a ser cancelado |
| IP04 | xJust | E | IP01 | C | 1-1 | 1-255 | Informar a justificativa do cancelamento |

## 6.2.1 Validação das Regras Específicas do Evento

<!-- REVISAR p.62: regras Q15, Q16 e Q17 numeradas assim no original (esperado O15–O17); Q16 e Q17 têm texto idêntico -->

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **O01** Verificar se o nSeqEvento é maior que o valor permitido (=1) | Obrig. | 636 | Rej. | Rejeição: O número sequencial do evento é maior que o permitido |
| **O02** Emitente deve estar habilitado na base de dados para emissão do CTe<br><br>**Exceção**: Esta regra não será aplicada quando a forma de emissão do CTe (tpEmis) for Regime Especial da Nota Fiscal Fácil (3)<br><br>**Observação**: Se evento gerado por PAA (grupo: infPAA) verificar se o CNPJ do emitente está em situação ativa no cadastro do CNPJ MEI da RFB | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão do CTe |
| **O03** Verificar Situação Fiscal irregular do Emitente<br><br>**Exceção**: Esta regra não será aplicada quando a forma de emissão do CTe (tpEmis) for Regime Especial da Nota Fiscal Fácil (3) | Obrig. | 240 | Rej. | Rejeição: Irregularidade Fiscal do Emitente |
| **O04** Verificar se CTe já está denegado<br><br>**Observação**: Regra mantida para garantir compatibilidade com CTe antigos que possam estar na situação denegado | Obrig. | 205 | Rej. | Rejeição: CTe está denegado na base de dados da SEFAZ |
| **O05** Verificar se CTe já está cancelado | Obrig. | 218 | Rej. | Rejeição: CTe já está cancelado na base de dados da SEFAZ<br>[nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. |
| **O06** Se modelo do CTe for igual a 57 (Carga) ou 67 (CTe OS): Verificar CTe autorizado há mais de 168 horas (7 dias)<br><br><!-- p.62 -->**Observação**: Exceto se existir evento de Manifestação do Fisco do tipo “Liberação do Prazo de Cancelamento” | Obrig. | 220 | Rej. | Rejeição: CTe autorizado há mais de 7 dias (168 horas) |
| **O07** Se modelo for igual a 64 (GTVe): Verificar se GTVe autorizada há mais de 45 dias<br><br>**Observação**: Exceto se existir evento de Manifestação do Fisco do tipo “Liberação do Prazo de Cancelamento” | Obrig. | 876 | Rej. | Rejeição: GTVe autorizada há mais de 45 dias |
| **O08** Se tipo de emissão do CTe for EPEC (tpEmis=4):<br>Verificar se Evento EPEC autorizado há mais de 168 horas (7 dias) | Obrig. | 698 | Rej. | Rejeição: Evento Prévio autorizado há mais de 7 dias (168 horas) |
| **O09** Verificar se número do Protocolo informado difere do número do Protocolo do CTe | Obrig. | 222 | Rej. | Rejeição: Protocolo de Autorização de Uso difere do cadastrado |
| **O10** Verificar se houve registro de circulação do CTe | Obrig. | 219 | Rej. | Rejeição: Circulação do CTe verificada |
| **O11** Vedado o cancelamento de CTe do tipo substituição (tipo=3) | Obrig. | 574 | Rej. | Rejeição: Vedado o cancelamento de CTe do tipo substituição (tipo=3) |
| **O12** Se Tipo do CTe=0 (Normal):<br>- Vedado o cancelamento se possuir CTe de Substituição Associado | Obrig. | 576 | Rej | Rejeição: Vedado o cancelamento se possuir CTe de Substituição associado |
| **O13** - Se Tipo do CTe=0 (Normal):<br>- Vedado o cancelamento se possuir CTe Complementar associado com Situação “Autorizado o Uso”. | Obrig. | 660 | Rej. | Rejeição: Vedado o cancelamento se possuir CTe complementar associado |
| **O14** Vedado o cancelamento se possuir evento de Carta de Correção associado. | Obrig. | 523 | Rej | Rejeição: Vedado cancelamento quando existir evento Carta de Correção |
| **Q15** Vedado o cancelamento se existir evento de MDF-e autorizado para o CTe<br><br>**Observação**: Se o MDF-e estiver cancelado deverá existir um evento de Cancelamento do MDF-e, nesse caso, o CTe poderá ser cancelado. | Obrig. | 528 | Rej. | Rejeição: Vedado cancelamento se exitir MDF-e autorizado para o CTe |
| **Q16** Vedado o cancelamento se existir evento de Comprovante de entrega em situação autorizado para o CTe<br>**Observação**: Eventos de comprovante de entrega podem ser cancelados pelo emitente, portanto deve-se considerar apenas os autorizados | Obrig. | 862 | Rej. | Rejeição: Vedado o cancelamento quando houver evento de Comprovante de Entrega associado |
| **Q17** Vedado o cancelamento se existir evento de Comprovante de entrega em situação autorizado para o CTe<br>**Observação**: Eventos de comprovante de entrega podem ser cancelados pelo emitente, portanto deve-se considerar apenas os autorizados | Obrig. | 862 | Rej. | Rejeição: Vedado o cancelamento quando houver evento de Comprovante de Entrega associado |
| **Q18** Se modelo do CTe for igual a 64 (GTVe):<br>Vedado o cancelamento se existir evento de CTe OS Autorizado em situação autorizado para a GTVe.<br><br>**Observação**: Se o CTe OS estiver cancelado deverá existir um evento de Cancelado CTe OS marcado na GTVe, nesse caso, a GTVe poderá ser cancelada. | Obrig. | 888 | Rej. | Rejeição: Cancelamento não permitido para GTVe com CTe OS Autorizado |

<!-- p.63 -->

**Restrição**: Os pedidos de cancelamento na modalidade SVC somente poderão afetar documentos autorizados em contingência pela correspondente SVC-[SP/RS].

O Fisco poderá liberar o cancelamento fora de prazo através do evento de Manifestação do Fisco do tipo “Liberação do Prazo de Cancelamento”

## 6.2.2 Final do Processamento

Se o evento de cancelamento for homologado, a situação do CTe para efeito de consulta situação passará para “101 – Cancelamento homologado” e o retorno do status do evento será cStat=135.
