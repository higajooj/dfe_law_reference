<!-- p.109 -->
# 5.10. Web Service – NFeRecepcaoEvento – Carta de Correção

**Função**: evento destinado à correção de informações da NF-e.

A Carta de Correção é um evento para corrigir as informações da NF-e, prevista na cláusula décima quarta-A do Ajuste SINIEF 07/05. O evento será utilizado pelo contribuinte e o alcance das alterações permitidas é definido no § 1º do art. 7º do Convênio SINIEF s/n de 1970:

> *“Art. 7º Os documentos fiscais referidos nos incisos I a V do artigo anterior deverão ser extraídos por decalque a carbono ou em papel carbonado, devendo ser preenchidos a máquina ou manuscritos a tinta ou a lápis-tinta, devendo ainda os seus dizeres e indicações estar bem legíveis, em todas as vias.*
>
<!-- p.110 -->
> *(...)*
>
> *§ 1º-A Fica permitida a utilização de carta de correção, para regularização de erro ocorrido na emissão de documento fiscal, desde que o erro não esteja relacionado com:*
>
> *I - as variáveis que determinam o valor do imposto tais como: base de cálculo, alíquota, diferença de preço, quantidade, valor da operação ou da prestação;*
>
> *II - a correção de dados cadastrais que implique mudança do remetente ou do destinatário;*
>
> *III - a data de emissão ou de saída.”*

O registro de uma nova Carta de Correção substitui a Carta de Correção anterior, assim a nova Carta de Correção deve conter todas as correções a serem consideradas.

**Autor do Evento**: O autor do evento é o emissor da NF-e e a NF-e deve existir no banco de dados da SEFAZ. A mensagem XML do evento será assinada com o certificado digital do emitente da NF-e. No caso do emitente pessoa jurídica, poderá ser usado o certificado digital da matriz ou de qualquer filial da empresa (mesmo CNPJ-Base)”.

**Código do Evento: 110110**

## 5.10.1. Leiaute Mensagem de Entrada

**Entrada:** Estrutura XML da parte específica do evento, a ser inserida na tag detEvento (P17) da Parte Geral do *Web Service* de Registro de Eventos especificada na seção **5.8**.

**Schema XML: envCCe_v9.99.xsd**

**Tabela 5-39 – Leiaute Mensagem de Entrada do Web Service NFeRecepcaoEvento – Carta Correção**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| HP18 | versao | A | P17 | | 1-1 | | Versão da carta de correção |
| HP19 | descEvento | E | P17 | C | 1-1 | 5-60 | “Carta de Correção” ou “Carta de Correcao” |
| HP20 | xCorrecao | E | P17 | C | 1-1 | 15-1000 | Correção a ser considerada, texto livre. A correção mais recente substitui as anteriores. |
| HP20a | xCondUso | E | P17 | C | 1-1 | - | Condições de uso da Carta de Correção, informar a literal :<br>“A Carta de Correção é disciplinada pelo § 1º-A do art. 7º do Convênio S/N, de 15 de dezembro de 1970 e pode ser utilizada para regularização de erro ocorrido na emissão de documento fiscal, desde que o erro não esteja relacionado com: I - as variáveis que determinam o valor do imposto tais como: base de cálculo, alíquota, diferença de preço, quantidade, valor da operação ou da prestação; II - a correção de dados cadastrais que implique mudança do remetente ou do destinatário; III - a data de emissão ou de saída.” (texto com acentuação)<br>ou<br>“A Carta de Correcao e disciplinada pelo paragrafo 1o-A do art. 7o do Convenio S/N, de 15 de dezembro de 1970 e pode ser utilizada para regularizacao de erro ocorrido na emissao de documento fiscal, desde que o erro nao esteja relacionado com: I - as variaveis que determinam o valor do imposto tais como: base de calculo, aliquota, diferenca de preco, quantidade, valor da operacao ou da prestacao; II - a correcao de dados cadastrais que implique mudanca do remetente ou do destinatario; III - a data de emissao ou de saida.” (texto sem acentuação) |

<!-- p.111 -->
## 5.10.2. Leiaute Mensagem de Retorno

**Retorno**: Estrutura XML com a mensagem do resultado da transmissão, conforme retorno do *Web Service* de Registro de Eventos – Parte Geral, especificado no item **5.8.2**.

**Descrição do resultado do processamento do evento (xEvento):** Carta de Correção registrada

**Schema XML: retEnvCCe_v9.99.xsd**

O leiaute desta mensagem de retorno não apresenta nenhuma diferença com relação à  
Schema XML: retEnvEvento_v1.00.xsd  
Tabela 5-33.

## 5.10.3. Regras de Validação

Serão aplicadas as regras de validação gerais apresentadas no item **5.8.4** e as regras de negócio específicas que podem ser vistas na Tabela 5-40 (NT 2018.004).

**Tabela 5-40 – Regras de Validação Específicas do Evento Carta de Correção**

| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| GA01 | Verificar se a NF-e está autorizada (não pode estar cancelada nem denegada) | Obrig. | 580 | Rej. | Rejeição: O evento exige uma NF-e autorizada |
| GA03 | Verificar o sequencial do evento (P15 – nSeqEvento) é valor válido (1-20) | Obrig. | 594 | Rej. | Rejeição: O número de sequencia do evento informado é maior que o permitido |
| GA03a | Se Modelo = 65: NFC-e não permite o evento de Carta de Correção | Obrig. | 784 | Rej. | Rejeição: NFC-e não permite o evento de Carta de Correção |
| GA04 | Acesso Cadastro Contribuinte:<br>- Verificar Emitente não autorizado a emitir NF-e | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão de NF-e |
| GA05 | - Verificar Situação Fiscal irregular do Emitente | Obrig. | 240 | Rej. | Rejeição: Cancelamento/Inutilização – Irregularidade Fiscal do Emitente |

## 5.10.4. Final do Processamento do Lote

O resultado do processamento do lote está especificado na seção *Web Service* de Registro de Eventos – Parte Geral, item **5.8.5**.

## 5.10.5. Disponibilização do Evento

O arquivo digital da Carta de Correção com a respectiva informação de Registro do Evento da SEFAZ faz parte integrante da NF-e e também deve ser disponibilizado para o destinatário e para o transportador.
