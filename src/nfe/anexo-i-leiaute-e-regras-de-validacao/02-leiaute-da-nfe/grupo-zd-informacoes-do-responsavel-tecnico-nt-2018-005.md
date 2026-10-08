# Grupo ZD. Informações do Responsável Técnico (NT 2018.005)

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **423a** | **infRespTec (ZD01)** | **G** | **A01** |  | **0-1** |  | **Informações do Responsável Técnico pela emissão do DF- e<br>Grupo para informações do responsável técnico pelo sistema de emissão do DF-e** |
| 423b | CNPJ (ZD02) | E | ZD01 | N | 1-1 | 14 | CNPJ da pessoa jurídica responsável pelo sistema utilizado na emissão do documento fiscal eletrônico<br>Informar o CNPJ da pessoa jurídica responsável pelo sistema utilizado na emissão do documento fiscal eletrônico. |
| 423c | xContato (ZD04) | E | ZD01 | C | 1-1 | 2-60 | Nome da pessoa a ser contatada<br>Informar o nome da pessoa a ser contatada na empresa desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. |
| 423d | email (ZD05) | E | ZD01 | C | 1-1 | 6-60 | E-mail da pessoa jurídica a ser contatada<br>Informar o e-mail da pessoa a ser contatada na empresa desenvolvedora do sistema. |
| 423e | fone (ZD06) | E | ZD01 | N | 1-1 | 6-14 | Telefone da pessoa jurídica/física a ser contatada<br>Informar o telefone da pessoa a ser contatada na empresa desenvolvedora do sistema. Preencher com o Código DDD + número do telefone. |
| **423f** | **-x- (ZD07)** | **G** | **ZD01** |  | **0-1** |  | **Sequência XML<br>Grupo de informações do Código de Segurança do Responsável Técnico - CSRT** |
| 423g | idCSRT (ZD08) | E | ZD07 | N | 1-1 | 2 | Identificador do CSRT<br>Identificador do CSRT utilizado para montar o hash do CSRT |
| 423h | hashCSRT (ZD09) | E | ZD07 | C | 1-1 | 28 | Hash do CSRT<br>O hashCSRT é o resultado da função hash (SHA-1 – Base64) do CSRT fornecido pelo fisco mais a Chave de Acesso da NFe. |
