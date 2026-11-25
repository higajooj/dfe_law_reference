<!-- p.65 -->

# 6.4. Evento Carta de Correção eletrônica

**Função:** evento com objetivo de corrigir as informações do CTe.

O evento será utilizado pelo contribuinte e o alcance das alterações permitidas é definido no art. 58-B do CONVENIO SINIEF 06/89, que transcrevemos a seguir:

> *“Art. 58-B Fica permitida a utilização de carta de correção, para regularização de erro ocorrido na emissão de documentos fiscais relativos à prestação de serviço de transporte, desde que o erro não esteja relacionado com:*
>
> *I - As variáveis que determinam o valor do imposto tais como: base de cálculo, alíquota, diferença de preço, quantidade, valor da prestação;*
>
> *II - A correção de dados cadastrais que implique mudança do emitente, tomador, remetente ou do destinatário;*
>
> *III - a data de emissão ou de saída”*

**Autor do Evento:** O autor do evento é o emissor do CTe multimodal. A mensagem XML do evento será assinada com o certificado digital que tenha o CNPJ base do Emissor do CTe.

**Modelo:** CTe de Transporte de Cargas (modelo 57) e Outros Serviços (modelo 67)

**Código do Tipo de Evento: 110110** (Este evento exige CTe autorizado)

**Schema XML:** evCCeCTe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **IP01** | **evCCeCTe** | **G** | **-** | **-** | **1 - 1** | **-** | **Schema XML de validação do evento carta de correção 110110** |
| IP02 | descEvento | E | IP01 | C | 1 - 1 | 17 | “Carta de Correção” ou “Carta de Correcao” |
| **IP03** | **infCorrecao** | **G** | **IP01** | **-** | **1 - n** | **-** | **Grupo de Informações de Correção** |
| IP04 | grupoAlterado | E | IP03 | C | 1 - 1 | 1-20 | Indicar o grupo de informações que pertence o campoAlterado. Ex: ide |
| IP05 | campoAlterado | E | IP03 | C | 1 - 1 | 1-20 | Nome do campo modificado do CTe Original. |
| IP06 | valorAlterado | E | IP03 | C | 1 - 1 | 1-500 | Valor correspondente à alteração. |
| IP07 | nroItemAlterado | E | IP03 | N | 0 - 1 | - | Preencher com o índice do item alterado caso a alteração ocorra em uma lista.<br>OBS: O índice inicia sempre em 1 |
| IP08 | xCondUso | E | IP01 | C | 1 - 1 | - | Condições de uso da Carta de Correção, informar a literal:<br>“A Carta de Correção é disciplinada pelo Art. 58-B do CONVÊNIO/SINIEF 06/89: Fica permitida a utilização de carta de correção, para regularização de erro ocorrido na emissão de documentos fiscais relativos à prestação de serviço de transporte, desde que o erro não esteja relacionado com: I - as variáveis que determinam o valor do imposto tais como: base de cálculo, alíquota, diferença de preço, quantidade, valor da prestação;II - a correção de dados cadastrais que implique mudança do emitente, tomador, remetente ou do destinatário;III - a data de emissão ou de saída.” (Texto com acentuação)<br>Ou<br>“A Carta de Correcao e disciplinada pelo Art. 58-B do CONVENIO/SINIEF 06/89: Fica permitida a utilizacao de carta de correcao, para <!-- p.66 -->regularizacao de erro ocorrido na emissao de documentos fiscais relativos a prestacao de servico de transporte, desde que o erro nao esteja relacionado com: I - as variaveis que determinam o valor do imposto tais como: base de calculo, aliquota, diferenca de preco, quantidade, valor da prestacao;II - a correcao de dados cadastrais que implique mudanca do emitente, tomador, remetente ou do destinatario;III - a data de emissao ou de saida.” (Texto sem acentuação) |

## 6.4.1 Validação das Regras Específicas do Evento

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **O01** Verificar se o nSeqEvento é maior que o valor permitido (1-20) | Obrig. | 636 | Rej. | Rejeição: O número sequencial do evento é maior que o permitido |
| **O02** Verificar se grupoAlterado e campoAlterado podem ser indicados em uma carta de correção.<br>Ver relação de campos que não podem ser corrigidos no item 13 deste MOC. | Obrig. | 681 | Rej. | Rejeição: Informação não pode ser alterada por carta de correção |
| **O03** Se informado o campo nroItemAlterado,<br>Verificar se foi preenchido com valor numérico compreendido entre 01 e 99 | Obrig. | 522 | Rej. | Rejeição: Nro Item Alterado inválido. Preencher com valor numérico (01 – 99) |
| **O04** Verificar se tag informada em campoAlterado existe no layout e se pertence ao grupoAlterado indicado na carta de correção<br>OBS: Validar layout conforme o modelo do CTe (57 ou 67) | Facult. | 525 | Rej. | Rejeição: Carta de correção inválida (campo/grupo “xxxx” informado não existe no schema do CTe ou não existe no grupo informado) |
| **O05** Verificar se CTe já está denegado<br>**Observação:** Regra mantida para garantir compatibilidade com CTe antigos que possam estar na situação denegado | Obrig. | 205 | Rej. | Rejeição: CTe está denegado na base de dados da SEFAZ |
| **O06** Verificar se CTe já está cancelado | Obrig. | 218 | Rej. | Rejeição: CTe já está cancelado na base de dados da SEFAZ<br>[nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. |
| **O07** Verificar se CTe possui CTe de substituição associado | Obrig. | 664 | Rej. | Rejeição: Evento não permitido para CTe Substituído |

## 6.4.2 Final do Processamento

Se o evento Carta de Correção for homologado o status de retorno deverá ser cStat=135.
