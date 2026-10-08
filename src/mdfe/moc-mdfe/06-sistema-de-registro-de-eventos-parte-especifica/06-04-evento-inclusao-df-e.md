<!-- p.57 -->
# 6.4 Evento de Inclusão de DF-e

- **Função:** evento destinado à inclusão de documentos fiscais no MDFe com a indicação de carregamento posterior (indCarregaPosterior=1) indicando as coletas realizadas ao longo do percurso.
- **Autor do Evento:** O autor do evento é o emissor do MDFe. A mensagem XML do evento será assinada com o certificado digital que tenha o CNPJ base / CPF do Emissor do MDFe.
- **Código do Tipo de Evento:** 110115
- **Schema XML:** evInclusaoDFeMDFe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **HP01** | **evIncDFeMDFe** | G | - | - | 1-1 | - | Schema XML de validação do evento de inclusão de DF-e |
| HP02 | descEvento | E | HP01 | C | 1-1 | 13 | Descrição do Evento: "Inclusão DF-e" ou "Inclusao DF-e" |
| HP03 | nProt | E | HP01 | N | 1-1 | 15 | Informar o nº do Protocolo de Autorização do MDFe. |
| HP04 | cMunCarrega | E | HP01 | N | 1-1 | 7 | Código do Município de Carregamento |
| HP05 | xMunCarrega | E | HP01 | C | 1-1 | 2-60 | Nome do Município de Carregamento |
| **HP06** | **infDoc** | G | HP01 | - | 1-n | - | Grupo de informações dos documentos que serão inseridos no MDFe |
| HP07 | cMunDescarga | E | HP06 | N | 1-1 | 7 | Código do Município de Descarregamento |
| HP08 | xMunDescarga | E | HP06 | C | 1-1 | 2-60 | Nome do Município de Descarregamento |
| HP09 | chNFe | E | HP06 | N | 1-1 | 44 | Chave de acesso da NFe incluída no MDFe com indicação de carregamento posterior |

## 6.4.1 Validação das Regras Específicas do Evento

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| K01 | Verificar se o nSeqEvento é maior que o valor permitido (até 99) | Obrig. | 636 | Rej. | Rejeição: O número sequencial do evento é maior que o permitido |
| K02 | Emitente deve estar habilitado na base de dados para emissão de MDFe<br>**Observação:** Se evento gerado por PAA (grupo: infPAA) verificar se o CNPJ do emitente está em situação ativa no cadastro do CNPJ MEI da RFB | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão do MDFe |
| K03 | Verificar se MDFe já está cancelado. [nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. | Obrig. | 218 | Rej. | Rejeição: MDFe já está cancelado na base de dados da SEFAZ. |
| K04 | Verificar se houve encerramento do manifesto [nProt:999999999999999][dhEnc: AAAA-MM-DDTHH:MM:SS TZD]. | Obrig. | 609 | Rej. | Rejeição: MDFe já está encerrado na base de dados da SEFAZ |
| K05 | Verificar se o MDFe possui a indicação de carregamento posterior (indCarregaPosterior=1) | Obrig. | 708 | Rej. | Rejeição: MDFe deve possui indicação de carregamento posterior para inclusão de DF-e |
| K06 | Município de carregamento diverge da UF de carregamento do MDFe (verificar se as 2 posições da esquerda do código do município que identifica o código da UF estão de acordo com a UF informada) | Obrig. | 456 | Rej. | Rejeição: Código de Município diverge da UF de Carregamento do MDFe |
| K07 | Código do município de carregamento inexistente (Tabela de Municípios do IBGE) | Obrig. | 405 | Rej. | Rejeição: Município de Carregamento inexistente |
| K08 | Município de descarregamento diverge da UF de descarregamento do MDFe (verificar se as 2 posições da esquerda do código do município que identifica o código da UF estão de acordo com a UF informada) | Obrig. | 612 | Rej. | Rejeição: Código de Município diverge da UF de descarregamento do MDFe |

<!-- p.58 -->

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| K09 | Código do município de descarregamento inexistente (Tabela de Municípios do IBGE) | Obrig. | 406 | Rej. | Rejeição: Município de Descarregamento inexistente |
| K10 | Para cada NFe relacionada: - Validar chave de acesso. Retornar motivo da rejeição da Chave de Acesso: CNPJ/CPF zerado ou inválido, Ano < 2006 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 55, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido) [Motivo: XXXXXXXXXXXX] | Obrig. | 709 | Rej. | Rejeição: Chave de acesso de NFe inválida no evento de inclusão [Motivo: CNPJ/CPF inválido / Modelo diferente de 55 / Ano inválido (< 2006) / Mês inválido (0 ou > 12) / Tipo de emissão inválido / UF inválida / Número zerado / DV inválido] |
| K11 | Para cada NFe relacionada: - Acesso BD NFe da SEFAZ Autorizadora (Chave: CNPJ / CPF Emit, Modelo, Serie, Nro.) com as informações da chave chNFe indicada. - Verificar se NFe existe<br>**Observação:** Retornar a chave do NFe inexistente. NFe em contingência fica dispensada dessa validação | Obrig. | 675 | Rej. | Rejeição: NFe informada não existe na base de dados da SEFAZ [chNFe: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXX] |
| K12 | Para cada NFe relacionada: - NFe não pode existir com diferença de chave de acesso<br>**Observação:** Retornar a chave de acesso de NFe com diferença na chave. NFe em contingência fica dispensada dessa validação | Obrig. | 676 | Rej. | Rejeição: NFe informada com diferença de chave de acesso [chNFe: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXX] |
| K13 | Para cada NFe relacionada: - Verificar se NFe indicada está cancelada ou denegada<br>**Observação:** Retornar a chave da NFe com situação irregular. NFe em contingência fica dispensada dessa validação | Obrig. | 677 | Rej. | Rejeição: NFe informada não pode estar cancelada/denegada na base da SEFAZ [chNFe: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXX] |
| K14 | Para cada NFe relacionada: - Verificar se a chave de acesso da NFe já existe vinculada ao MDFe por outro evento de inclusão de DF-e<br>**Observação:** retornar o número do protocolo do evento autorizado | Obrig. | 711 | Rej. | Rejeição: NFe já está vinculada ao MDFe por outro evento |

## 6.4.2 Final do Processamento

Se o evento de inclusão de DF-e for homologado, a situação de retorno será "135 – Evento vinculado a MDFe".
