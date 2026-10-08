<!-- p.54 -->
# 6.2 Evento de Encerramento

- **Função:** evento destinado ao atendimento de solicitações de encerramento de MDFe.
- **Autor do Evento:** O autor do evento é o emissor do MDFe. A mensagem XML do evento será assinada com o certificado digital que tenha o CNPJ base / CPF do Emissor do MDFe.
- **Código do Tipo de Evento:** 110112
- **Schema XML:** evEncMDFe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **HP01** | **evEncMDFe** | G | - | - | - | - | TAG raiz |
| HP02 | descEvento | E | HP01 | C | 1-1 | 12 | Descrição do Evento: 'Encerramento' |
| HP03 | nProt | E | HP01 | N | 1-1 | 15 | Informar o número do protocolo de autorização do MDFe a ser encerrado |
| HP04 | dtEnc | E | HP01 | D | 1-1 | - | Data que o MDFe foi encerrado |
| HP05 | cUF | E | HP01 | N | 1-1 | 2 | Informar a UF de encerramento do manifesto |
| HP06 | cMUn | E | HP01 | N | 1-1 | 7 | Informar o código do município de encerramento do manifesto |

## 6.2.1 Validação das Regras Específicas do Evento

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| K01 | Verificar se o nSeqEvento é maior que o valor permitido (=1) | Obrig. | 636 | Rej. | Rejeição: O número sequencial do evento é maior que o permitido |
| K02 | Código do município de encerramento inexistente (tabela de municípios do IBGE) | Obrig. | 714 | Rej. | Rejeição: Município de encerramento inexistente |
| K03 | Município de encerramento diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a UF informada) | Obrig. | 614 | Rej. | Rejeição: Código de Município diverge da UF de encerramento do MDFe |
| K04 | Se UF de encerramento for Exterior (cUF=99), o município de encerramento deve ser 9999999 | Obrig. | 689 | Rej. | Rejeição: Município de encerramento deve ser 9999999 para encerramento no exterior |
| K05 | Emitente deve estar habilitado na base de dados para emissão do MDFe<br>**Exceção:** Esta regra não será aplicada quando a forma de emissão do MDFe (tpEmis) for Regime Especial da Nota Fiscal Fácil (3)<br>**Observação:** Se evento gerado por PAA (grupo: infPAA) verificar se o CNPJ do emitente está em situação ativa no cadastro do CNPJ MEI da RFB | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão do MDFe |
| K06 | Verificar se MDFe já está cancelado. [nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. | Obrig. | 218 | Rej. | Rejeição: MDFe já está cancelado na base de dados da SEFAZ. |
| K07 | Verificar se a data de encerramento é anterior à data de emissão do manifesto. | Obrig. | 615 | Rej. | Rejeição: Data de encerramento anterior à data de autorização do MDFe |
| K08 | Verificar se número do Protocolo informado difere do número do Protocolo do MDFe | Obrig. | 222 | Rej. | Rejeição: Protocolo de Autorização de Uso difere do cadastrado |
| K09 | Verificar se houve encerramento do manifesto. [nProt:999999999999999][dhEnc: AAAA-MM-DDTHH:MM:SS TZD]. | Obrig. | 609 | Rej. | Rejeição: MDFe já está encerrado na base de dados da SEFAZ |
| K10 | Verificar se o MDFe possui a indicação de carregamento posterior (indCarregaPosterior=1) sem evento de inclusão de DF-e | Obrig. | 715 | Rej. | Rejeição: Não é permitido encerrar MDFe com indicação de carregamento posterior sem inclusão de DF-e associada |

<!-- p.55 -->

## 6.2.2 Final do Processamento

Se o evento de encerramento for homologado, a situação do MDFe para efeito de consulta situação passará para "132 – Encerramento homologado".
