# 5.1.2 Validação das Regras Específicas do Evento

<!-- p.13 -->
**Validações das Regras Específicas**

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| K01 | UF da chave de acesso difere da UF do Webservice | Obrig. | 249 | Rej. |
| K02 | Verificar se o nSeqEvento é maior que o valor permitido (=1) | Obrig. | 636 | Rej. |
| K03 | Emitente deve estar habilitado na base de dados para emissão de MDF-e | Obrig. | 203 | Rej. |
| K04 | Verificar se número do Protocolo informado difere do número do Protocolo do MDF-e | Obrig. | 222 | Rej. |
| K05 | Verificar se MDF-e já está cancelado | Obrig. | 218 | Rej. |
| K06 | Verificar se o MDF-e é do modal Rodoviário | Obrig. | 722 | Rej. |
| K07 | Verificar se o MDF-e informado possui proprietário do veículo de tração informado com tipo de Proprietário TAC Agregado (tag: tpProp=0). | Obrig. | 723 | Rej. |
| K08 | Se indicador de pagamento for a prazo (tag:indPag=1), o grupo de informações a prazo deve ser informado (grupo:infPrazo) | Obrig. | 724 | Rej. |
| K09 | Se indicador de pagamento for a vista (tag:indPag=0), o grupo de informações a prazo NÃO deve ser informado (grupo:infPrazo) | Obrig. | 729 | Rej. |
| K10 | Se informado grupo de pagamento, rejeitar se CNPJ/CPF do responsável pelo pagamento estiver inválido | Obrig. | 727 | Rej. |
| K11 | Se informado grupo de pagamento, rejeitar se CNPJ do IPEF estiver inválido | Obrig. | 728 | Rej. |
