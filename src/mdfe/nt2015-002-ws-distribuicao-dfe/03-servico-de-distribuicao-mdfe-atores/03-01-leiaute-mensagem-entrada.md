# 3.1 Leiaute Mensagem de Entrada

**Entrada:** Estrutura XML contendo a consulta do MDF-e  
**Schema XML:** `distDFeInt_v9.99.xsd`

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **AP01** | **distDFeInt** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| AP02 | versao | A | AP01 | N | 1-1 | 2v2 | Versão do leiaute |
| AP03 | tpAmb | E | AP01 | N | 1-1 | 1 | Identificação do Ambiente:<br>1=Produção /2=Homologação |
| AP04 | CNPJ | CE | AP01 | N | 1-1 | 14 | CNPJ do interessado no DF-e |
| AP05 | CPF | CE | AP01 | N | 1-1 | 11 | CPF do interessado no DF-e |
| **AP06** | **distNSU** | **CG** | **AP01** | **-** | **1-1** | **-** | **Grupo para distribuir DF-e de interesse** |
| AP07 | ultNSU | E | AP06 | N | 1-1 | 1-15 | Último NSU recebido pelo ator.<br>Caso seja informado com zero, ou com um NSU muito antigo, a consulta retornará unicamente as informações de documentos fiscais eletrônicos que tenham sido recepcionados pelo Ambiente Nacional nos últimos 6 meses. |
| **AP08** | **consNSU** | **CG** | **AP01** | **-** | **1-1** | **-** | **Grupo para consultar um DF-e a partir de um NSU específico** |
| AP09 | NSU | E | AP08 | N | 1-1 | 1-15 | Número Sequencial Único. Geralmente esta consulta será utilizada quando identificado pelo interessado um NSU faltante. O *Web Service* retornará o documento ou informará que o NSU não existe no Ambiente Nacional. Assim, esta consulta fechará a lacuna do NSU identificado como faltante. |

<!-- p.13 -->
