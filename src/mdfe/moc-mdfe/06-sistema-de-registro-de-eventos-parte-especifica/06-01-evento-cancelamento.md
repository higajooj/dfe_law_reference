# 6.1 Evento de Cancelamento

- **Função:** evento destinado ao atendimento de solicitações de cancelamento de MDFe.
- **Autor do Evento:** O autor do evento é o emissor do MDFe. A mensagem XML do evento será assinada com o certificado digital que tenha o CNPJ base / CPF do Emissor do MDFe.
- **Código do Tipo de Evento:** 110111
- **Schema XML:** evCancMDFe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **HP01** | **evCancMDFe** | G | - | - | - | - | TAG raiz |
| HP02 | descEvento | E | GP01 | C | 1-1 | 12 | Descrição do Evento: 'Cancelamento' |
| HP03 | nProt | E | GP01 | N | 1-1 | 15 | Informar o número do protocolo de autorização do MDFe a ser cancelado |
| HP04 | xJust | E | GP01 | C | 1-1 | 1-255 | Informar a justificativa do cancelamento |

## 6.1.1 Validação das Regras Específicas do Evento

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| K01 | Verificar se o nSeqEvento é maior que o valor permitido (=1) | Obrig. | 636 | Rej. | Rejeição: O número sequencial do evento é maior que o permitido |
| K02 | Emitente deve estar habilitado na base de dados para emissão do MDFe<br>**Exceção:** Esta regra não será aplicada quando a forma de emissão do MDFe (tpEmis) for Regime Especial da Nota Fiscal Fácil (3)<br>**Observação:** Se evento gerado por PAA (grupo: infPAA) verificar se o CNPJ do emitente está em situação ativa no cadastro do CNPJ MEI da RFB | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão do MDFe |
| K03 | Verificar se MDFe já está cancelado. [nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. | Obrig. | 218 | Rej. | Rejeição: MDFe já está cancelado na base de dados da SEFAZ. |
| K04 | Verificar MDFe autorizado há mais de 24 horas<br>**Observação:** Exceto se existir evento de Manifestação do Fisco do tipo "Liberação do Prazo de Cancelamento"<br>**Exceção:** Não aplicar validação para MDFe emitido com a indicação de carregamento posterior (indCarregaPosterior=1) e não possuir evento de inclusão de DF-e | Obrig. | 220 | Rej. | Rejeição: MDFe autorizado há mais de 24 horas |
| K05 | Verificar se número do Protocolo informado difere do número do Protocolo do MDFe | Obrig. | 222 | Rej. | Rejeição: Protocolo de Autorização de Uso difere do cadastrado |
| K06 | Verificar se houve encerramento do manifesto. [nProt:999999999999999][dhEnc: AAAA-MM-DDTHH:MM:SS TZD]. | Obrig. | 609 | Rej. | Rejeição: MDFe já está encerrado na base de dados da SEFAZ |
| K07 | Verificar se houve registro de circulação do MDFe | Obrig. | 219 | Rej. | Rejeição: Circulação do MDFe verificada |

<!-- p.53 -->

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| K08 | Se MDFe emitido com indicador de carregamento posterior (indCarregaPosterior=1): Verificar se existe evento de inclusão de DF-e associado com município de carregamento diferente do município de carregamento do MDFe | Obrig. | 710 | Rej. | Rejeição: Cancelamento não é permitido para MDFe com indicação de carregamento posterior que já realizou inserção de DF-e |

O Fisco poderá liberar o cancelamento fora de prazo através do evento de Manifestação do Fisco do tipo "Liberação do Prazo de Cancelamento".

## 6.1.2 Final do Processamento

Se o evento de cancelamento for homologado, a situação do MDFe para efeito de consulta situação passará para "101 – Cancelamento homologado".
