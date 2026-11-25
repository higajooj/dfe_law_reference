<!-- p.63 -->

# 6.3. Evento de Registros do Multimodal

**Função:** Evento destinado a vincular informações dos serviços prestados ao CTe multimodal. Observa-se que, caso seja emitido um CTe já vinculado ao CTe multimodal, não é necessário informá-lo por este evento.

**Autor do Evento:** O autor do evento é o emissor do CTe multimodal. A mensagem XML do evento será assinada com o certificado digital que tenha o CNPJ base do Emissor do CTe.

**Modelo:** CTe de Transporte de Cargas (modelo 57)

**Código do Tipo de Evento: 110160** (Este evento exige CTe multimodal autorizado)

**Schema XML:** evRegMultimodal_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **IP01** | **evRegMultimodal** | **G** | **-** | **-** | **-** | **-** | **TAG raiz** |
| IP02 | descEvento | E | IP01 | C | 1 - 1 | 19 | Descrição do Evento: ‘Registro Multimodal’ |
| IP03 | xRegistro | E | IP01 | C | 1 - 1 | 15-1000 | Informações sobre o tipo de documento utilizado e ressalvas, se for o caso, conforme Lei 9611, de 19 de fevereiro de 1998 (Texto Livre) |
| IP04 | nDoc | E | IP01 | C | 0 - 1 | 1-44 | Número do documento lançado no CTe multimodal |

## 6.3.1 Validação das Regras Específicas do Evento

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **O01** Verificar se o nSeqEvento é maior que o valor permitido (1-20) | Obrig. | 636 | Rej. | Rejeição: O número sequencial do evento é maior que o permitido |
| **O02** Verificar se o CTe é multimodal | Obrig. | 679 | Rej. | Rejeição: O modal do CTe deve ser Multimodal para Evento Registros do Multimodal |
| **O03** Verificar se CTe já está denegado<br>**Observação:** Regra mantida para garantir compatibilidade com CTe antigos que possam estar na situação denegado | Obrig. | 205 | Rej. | Rejeição: CTe está denegado na base de dados da SEFAZ |
| **O04** Verificar se CTe já está cancelado | Obrig. | 218 | Rej. | Rejeição: CTe já está cancelado na base de dados da SEFAZ<br>[nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. |
| <!-- p.64 -->**O05** Verificar se CTe possui CTe de substituição associado | Obrig. | 664 | Rej. | Rejeição: Evento não permitido para CTe Substituído |

## 6.3.2 Final do Processamento

Os registros de multimodal não serão sobrepostos, podendo o operador OTM acrescentar novas ocorrências à medida que for preciso.

Se o evento de Registros do Multimodal for homologado o status de retorno deverá ser cStat=135.
