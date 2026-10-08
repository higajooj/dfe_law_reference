# 3.2 Leiaute Mensagem de Retorno

**Retorno:** Estrutura XML com o resultado da Consulta.  
**Schema XML:** `retDistDFeInt_v9.99.xsd`

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **AR01** | **retDistDFeInt** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da Resposta** |
| AR02 | versao | A | AR01 | N | 1-1 | 2v2 | Versão do leiaute |
| AR03 | tpAmb | E | AR01 | N | 1-1 | 1 | Identificação do Ambiente: 1=Produção /2=Homologação |
| AR04 | verAplic | E | AR01 | C | 1-1 | 1-20 | Versão do aplicativo que processou a consulta |
| AR05 | cStat | E | AR01 | N | 1-1 | 3 | Código do status da resposta (vide item 5) |
| AR06 | xMotivo | E | AR01 | C | 1-1 | 1-255 | Descrição literal do status da resposta |
| AR07 | dhResp | E | AR01 | D | 1-1 | | Data e hora da mensagem de Resposta |
| AR08 | ultNSU | E | AR01 | N | 0-1 | 1-15 | Último NSU pesquisado no Ambiente Nacional. Se for o caso, o solicitante pode continuar a consulta a partir deste NSU para obter novos resultados. |
| AR09 | maxNSU | E | AR01 | N | 0-1 | 1-15 | Maior NSU existente no Ambiente Nacional para o CNPJ/CPF informado |
| **AR10** | **loteDistDFeInt** | **G** | **AR01** | **B64** | **0-1** | | **Conjunto de informações de documentos fiscais eletrônicos de interesse da pessoa ou empresa.** |
| **AR11** | **docZip** | **G** | **AR10** | | **1-50** | | **Informação do documento fiscal eletrônico de interesse da pessoa ou empresa. O conteúdo desta tag estará compactado no padrão gZip. O tipo do campo é base64Binary.** |
| AR12 | NSU | A | AR11 | N | 1-1 | 1-15 | NSU do documento fiscal |
| AR13 | schema | A | AR11 | C | 1-1 | | Identificação do Schema XML que será utilizado para validar o XML existente no campo seguinte. Vai identificar o tipo do documento e sua versão.<br>Exemplos:<br>- procMDFe_v3.00.xsd<br>- procEventoMDFe_v3.00.xsd |
