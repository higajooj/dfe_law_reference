# Encerramento pelo Transportador

### Alteração do Schema do evento Encerramento do MDFe.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **HP01** | **evEncMDFe** | **G** | **-** | **-** | **-** | **-** | **TAG raiz** |
| HP02 | descEvento | E | HP01 | C | 1-1 | 12 | Descrição do Evento: ‘Encerramento’ |
| HP03 | nProt | E | HP01 | N | 1-1 | 15 | Informar o número do protocolo de autorização do MDFe a ser encerrado |
| HP04 | dtEnc | E | HP01 | D | 1-1 | - | Data que o MDFe foi encerrado |
| HP05 | cUF | E | HP01 | N | 1-1 | 2 | Informar a UF de encerramento do manifesto |
| HP06 | cMUn | E | HP01 | N | 1-1 | 7 | Informar o código do município de encerramento do manifesto |
| <mark>HP07</mark> | <mark>indEncPorTerceiro</mark> | <mark>E</mark> | <mark>HP01</mark> | <mark>N</mark> | <mark>0-1</mark> | <mark>1</mark> | <mark>Indicador que deve ser informado quando o encerramento for registrado pelo transportador terceiro<br><br>Informar valor “1” quando o MDFe for encerrado pelo transportador terceiro, este sendo diferente do emitente do MDFe</mark> |

### Regras do Sistema de Registro de Eventos – Parte Geral

| ID | Regra | Obrigatoriedade | Código | Ação | Mensagem |
|---|---|---|---|---|---|
| J09 | Se evento do emissor verificar se CNPJ / CPF do Autor diferente do CNPJ / CPF da chave de acesso do MDFe <mark>ou difere do CNPJ / CPF do proprietário do veículo que está realizando o transporte **APENAS para evento de ENCERRAMENTO PELO TRANSPORTADOR** (grupo: veicTracao\prop informado no modal rodoviário)</mark><br><br>**Observação:** Verificar CPF se a série estiver na faixa 920-969 ou para Regime Especial da Nota Fiscal Fácil (tpEmis=3) para todas as demais verificar como CNPJ | Obrig. | 632 | Rej. | Rejeição: O autor do evento diverge do emissor do MDFe |

### Regras da parte específica do evento de encerramento do MDFe

| ID | Regra | Obrigatoriedade | Código | Ação | Mensagem |
|---|---|---|---|---|---|
| K05 | Emitente deve estar habilitado na base de dados para emissão do MDFe<br><br>**Exceção**: Esta regra não será aplicada quando a forma de emissão do MDFe (tpEmis) for Regime Especial da Nota Fiscal Fácil (3) <mark>ou quando o evento for gerado pelo proprietário do veículo que está realizando o transporte identificado pelo login da plataforma gov.br ou certificado digital</mark><br><br>**Observação**: Se evento gerado por PAA (grupo: infPAA) verificar se o CNPJ do emitente está em situação ativa no cadastro do CNPJ MEI da RFB | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão do MDFe |

<!-- p.05 -->

| ID | Regra | Obrigatoriedade | Código | Ação | Mensagem |
|---|---|---|---|---|---|
| K11 | <mark>Se informado indicador de Encerramento Por Terceiro o Autor do Evento tem que ser o proprietário ou possuidor do veículo de tração e diferente do emitente do MDFe</mark> | <mark>Obrig.</mark> | <mark>524</mark> | Rej. | <mark>Rejeição: Autor inválido para encerramento por terceiro</mark> |
| K12 | <mark>Se Não informado indicador de Encerramento Por Terceiro o Autor do Evento deve ser igual ao emitente do MDFe</mark> | <mark>Obrig.</mark> | <mark>525</mark> | Rej. | <mark>Rejeição: Autor inválido para encerramento</mark> |
