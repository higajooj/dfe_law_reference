<!-- p.07 -->

# 2.2 Leiaute Mensagem de Retorno

**Retorno:** Estrutura XML com os documentos de interesse do ator (qtde máxima=50).

**Schema XML:** retDistDFeInt _v9.99.xsd

<!-- p.08 -->

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **B01** | **retDistDFeInt** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da Resposta** |
| B02 | versao | A | B01 | N | 1 - 1 | 2v2 | Versão do leiaute |
| B03 | tpAmb | E | B01 | N | 1 - 1 | 1 | Identificação do Ambiente: 1 =Produção /2=Homologação |
| B04 | verAplic | E | B01 | C | 1 - 1 | 1-20 | Versão do aplicativo que processou a consulta |
| B05 | cStat | E | B01 | N | 1 - 1 | 3 | Código do status da resposta (vide item 5) |
| B06 | xMotivo | E | B01 | C | 1 - 1 | 1-255 | Descrição literal do status da resposta |
| B07 | dhResp | E | B01 | D | 1 - 1 | | Data e hora da mensagem de Resposta |
| B08 | ultNSU | E | B01 | N | 0 - 1 | 1-15 | Ultimo NSU pesquisado no Ambiente Nacional. Se for o caso, o solicitante pode continuar a consulta a partir deste NSU para obter novos resultados. |
| B09 | maxNSU | E | B01 | N | 0 - 1 | 1-15 | Maior NSU existente no Ambiente Nacional para o CNPJ/CPF informado |
| **B10** | **loteDistDFeInt** | **G** | **B01** | **B64** | **0 - 1** | | **Conjunto de informações de documentos fiscais eletrônicos de interesse da pessoa ou empresa.** |
| **B11** | **docZip** | **G** | **B10** | | **1 - 50** | | **Informação do documento fiscal eletrônico de interesse da pessoa ou empresa. O conteúdo desta tag estará compactado no padrão gZip. O tipo do campo é base64Binary.** |
| B12 | NSU | A | B11 | N | 1 - 1 | 1 -15 | NSU do documento fiscal |
| B13 | schema | A | B11 | C | 1 - 1 | | Identificação do Schema XML que será utilizado para validar o XML existente no campo seguinte.<br>Vai identificar o tipo do documento e sua versão.<br>Exemplos:<br>- procCTe_v2.00.xsd<br>-procEventoCTe_v200.xsd |
