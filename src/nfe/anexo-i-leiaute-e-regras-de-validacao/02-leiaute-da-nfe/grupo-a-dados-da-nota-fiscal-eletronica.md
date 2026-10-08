# Grupo A. Dados da Nota Fiscal eletrônica

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **1** | **infNFe (A01)** | **G** | **Raiz** | **-** | **1-1** |  | **Informações da NF-e<br>Grupo que contém as informações da NF-e** |
| 2 | versao (A02) | A | A01 | C | 1-1 | 1 - 4 | Versão do leiaute<br>Versão do leiaute (4.00) |
| 3 | Id (A03) | ID | A01 | C | 1-1 | 47 | Identificador da TAG a ser assinada<br>Informar a Chave de Acesso precedida do literal ‘NFe’, |
| 4 | pk_nItem (A04) | RC | - | - | 1-1 |  | Regra para que a numeração do item de detalhe da NF-e seja única.<br>Regra de validação do item de detalhe da NF-e, campo de controle do Schema XML, o contribuinte não deve se preocupar com o preenchimento deste campo. |
