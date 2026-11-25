<!-- p.70 -->

# 6.7. Evento Informações da GTV

**Função:** Evento para que o emitente do CTe OS do tipo de serviço Transporte de Valores possa informar as GTV relacionadas com a prestação do serviço.

**Autor do Evento:** O autor do evento é o emissor do CTe. A mensagem XML do evento será assinada com o certificado digital que tenha o CNPJ base do Emissor do CTe.

**Modelo:** CTe de Outros Serviços (67)

**Código do Tipo de Evento: 110170** (Este evento exige CTe OS autorizado)

**Schema XML:** evGTV_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **IP01** | **evGTV** | **G** | **-** | **-** | **1 - 1** | **-** | **Schema XML de validação do evento de Informações da GTV** |
| IP02 | descEvento | E | IP01 | C | 1 - 1 | 18 | Descrição do Evento - “Informações da GTV” ou “Informacoes da GTV” |
| **IP03** | **infGTV** | **G** | **-** | | **1 - n** | | **Grupo de informações da GTV** |
| IP04 | nDoc | E | IP03 | C | 1 - 1 | 20 | Número da GTV |
| IP05 | id | E | IP03 | C | 1 - 1 | 20 | Identificador para diferenciar GTV de mesmo número (Usar número do AIDF ou identificador interno da empresa) |
| IP06 | serie | E | IP03 | C | 0 - 1 | 3 | Série da GTV (opcional) |
| IP07 | subserie | E | IP03 | C | 0 - 1 | 3 | Subsérie da GTV (opcional) |
| IP08 | dEmi | E | IP03 | D | 1 - 1 | | Data da emissão |
| IP09 | nDV | E | IP03 | N | 1 - 1 | 1 | Número do Dígito Verificador |
| IP10 | qCarga | E | IP03 | N | 1 - 1 | 11,4 | Quantidade de volumes/malotes |
| **IP11** | **infEspecie** | **G** | **IP03** | | **1 - n** | | **Informações das espécies transportadas** |
| IP12 | tpEspecie | E | IP11 | N | 1 - 1 | 1 | Tipo da espécie:<br>1 – Numerário;<br>2 – Cheque;<br>3 – Moeda;<br>4 - Outros |
| IP13 | vEspecie | E | IP11 | N | 0 - 1 | 13,2 | Valor Transportado em espécie indicada |
| **IP14** | **rem** | **G** | **IP03** | | **1 - 1** | | **Informações do remetente da GTV** |
| IP15 | CNPJ | CE | IP14 | N | 1 - 1 | 14 | Número do CNPJ |
| IP16 | CPF | CE | IP14 | N | 1 - 1 | 11 | Número do CPF |
| IP17 | IE | E | IP14 | C | 0 - 1 | 14 | Inscrição Estadual |
| IP18 | UF | E | IP14 | C | 1 - 1 | 2 | Sigla da UF |
| IP19 | xNome | E | IP14 | C | 1 - 1 | 60 | Razão social ou nome do remetente da GTV |
| **IP20** | **dest** | **G** | **IP03** | | **1 - 1** | | **Informações do destinatário da GTV** |
| IP21 | CNPJ | CE | IP21 | N | 1 - 1 | 14 | Número do CNPJ |
| IP22 | CPF | CE | IP21 | N | 1 - 1 | 11 | Número do CPF |
| IP23 | IE | E | IP21 | C | 0 - 1 | 14 | Inscrição Estadual |
| IP24 | UF | E | IP21 | C | 1 - 1 | 2 | Sigla da UF |
| IP25 | xNome | E | IP21 | C | 1 - 1 | 60 | Razão social ou nome do destinatário da GTV |
| IP26 | placa | E | IP03 | C | 0 - 1 | | Placa do veículo |
| IP27 | UF | E | IP03 | C | 0 - 1 | 2 | UF da placa onde o veículo está registrado |
| IP28 | RNTRC | E | IP03 | C | 0 - 1 | | RNTRC do transportador |

## 6.7.1 Validação das Regras Específicas do Evento

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| <!-- p.71 -->**O01** Verificar se o nSeqEvento é maior que o valor permitido (1-99) | Obrig. | 636 | Rej. | Rejeição: O número sequencial do evento é maior que o permitido |
| **O02** Verificar se CTe já está denegado<br>**Observação:** Regra mantida para garantir compatibilidade com CTe antigos que possam estar na situação denegado | Obrig. | 205 | Rej. | Rejeição: CTe está denegado na base de dados da SEFAZ |
| **O03** Verificar se CTe já está cancelado | Obrig. | 218 | Rej. | Rejeição: CTe já está cancelado na base de dados da SEFAZ<br>[nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. |
| **O04** Verificar se CTe possui CTe de substituição associado | Obrig. | 664 | Rej. | Rejeição: Evento não permitido para CTe Substituído |
| **O05** Verificar se CTe OS informado é do tipo de serviço Transporte de Valores | Obrig. | 889 | Rej. | Rejeição: CTe deve ser do tipo de serviço Transporte de Valores |
| **O06** Rejeitar se o CTe de valores informado possuir GTVe informadas | Obrig. | 890 | Rej. | Rejeição: Evento GTV não é permitido para CTe OS que relaciona GTVe |
| **O07** Se CNPJ Remetente informado na GTV (validar para cada GTV):<br>- Validar CNPJ Remetente (dígito de controle, zeros) | Obrig. | 415 | Rej. | Rejeição: CNPJ do remetente inválido |
| **O08** Se CPF Remetente informado GTV (validar para cada GTV):<br>- Validar CPF Remetente (dígito de controle, zeros) | Obrig. | 416 | Rej. | Rejeição: CPF do remetente inválido |
| **O09** Se IE Remetente informada na GTV (validar para cada GTV):<br>- Validar IE do Remetente (erro no dígito de controle)<br>Obs.: Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE se necessário.<br>Ex.: IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 419 | Rej. | Rejeição: IE do remetente inválida |
| **O10** Se CNPJ Destinatário informado na GTV (validar para cada GTV):<br>- Validar CNPJ Remetente (dígito de controle, zeros) | Obrig. | 208 | Rej. | Rejeição: CNPJ do destinatário inválido |
| **O11** Se CPF Destinatário informado GTV (validar para cada GTV):<br>- Validar CPF Remetente (dígito de controle, zeros) | Obrig. | 237 | Rej. | Rejeição: CPF do destinatário inválido |
| **O12** Se IE Destinatário informada na GTV (validar para cada GTV):<br>- Validar IE do Destinatário (erro no dígito de controle ou conteúdo diferente de “ISENTO”)<br>Obs.: Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE se necessário.<br>Ex.: IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 210 | Rej. | Rejeição: IE do destinatário inválida |
| **Q13** Rejeitar evento se existir informação duplicada do par nDoc + id no XML do pedido de evento. | Obrig. | 618 | Rej. | Rejeição: GTV informada em duplicidade no evento |
| <!-- p.72 -->**Q14** Acessar base de dados de eventos do CTe - Rejeitar se existir o par nDoc + id em outra GTV vinculada ao mesmo CTe | Facul. | 619 | Rej | Rejeição: GTV já informada em outro evento para o mesmo CTe |

## 6.7.2 Final do Processamento

Se o evento de informações da GTV for homologado o status de retorno deverá ser cStat=135.
