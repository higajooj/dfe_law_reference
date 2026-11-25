<!-- p.07 -->

# 2.1 Leiaute Mensagem de Entrada

**Entrada:** Estrutura XML com o pedido de distribuição de DF-e de interesse do ator

**Schema XML:** distDFeInt_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **A01** | **distDFeInt** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| A02 | versao | A | A01 | N | 1 - 1 | 2v2 | Versão do leiaute |
| A03 | tpAmb | E | A01 | N | 1 - 1 | 1 | Identificação do Ambiente: 1 =Produção /2=Homologação |
| A04 | cUFAutor | E | A01 | N | 1 - 1 | 2 | Código da UF do Autor |
| A05 | CNPJ | CE | A01 | N | 1 - 1 | 14 | CNPJ do interessado no DF-e |
| A06 | CPF | CE | A01 | N | 1 - 1 | 11 | CPF do interessado no DF-e |
| **A07** | **distNSU** | **CG** | **A01** | **-** | **1 - 1** | **-** | **Grupo para distribuir DF-e de interesse** |
| A08 | ultNSU | E | A07 | N | | 1-15 | Ultimo NSU recebido pelo ator. Caso seja informado com zero, ou com um NSU muito antigo, a consulta retornará unicamente as informações de documentos fiscais eletrônicos que tenham sido recepcionados pelo Ambiente Nacional nos últimos 3 meses. |
| **A09** | **consNSU** | **CG** | **A1** | **-** | **1 - 1** | **-** | **Grupo para consultar um DF-e a partir de um NSU específico** |
| A10 | NSU | E | A09 | N | 1 - 1 | 1-15 | Número Sequencial Unico. Geralmente esta consulta será utilizada quando identificado pelo interessado um NSU faltante. O *Web Service* retornará o documento ou informará que o NSU não existe no Ambiente Nacional. Assim, esta consulta fechará a lacuna do NSU identificado como faltante. |
