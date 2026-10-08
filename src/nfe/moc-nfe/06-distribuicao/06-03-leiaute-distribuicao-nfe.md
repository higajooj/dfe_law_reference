<!-- p.125 -->

# 6.3. Leiaute da Distribuição: NF-e

Deverá ser disponibilizado para o destinatário o mesmo conteúdo da NF-e enviada para a SEFAZ, complementada com a informação da Autorização de Uso.

**Schema XML: procNFe_v3.10.xsd**

**Tabela 6-2 – Leiaute de Distribuição da NF-e (proc)**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| XR01 | nfeProc | Raiz | - | - | - | - | TAG raiz |
| XR02 | versao | A | XR01 | N | 1-1 | 1-2v2 | |
| XR03 | NFe | G | XR01 | - | 1-1 | - | |
| XR04 | (dados) | - | - | - | - | - | Dados da NF-e, inclusive com os dados da assinatura |
| XR05 | protNfe | G | XR01 | - | 1-1 | - | Protocolo de autorização ou denegação de uso do NF-e, conforme descrito no item 5.2.2. |
| XR06 | (dados) | - | - | - | - | - | |

No caso de troca de arquivo entre as empresas, é sugerida a adoção do nome do arquivo como segue:

`<999...999>-procNFe.xml`

Onde:

- <999...999>: corresponde a Chave de Acesso da NF-e;
- “-procNFe”: identifica o processamento do documento autorizado.
