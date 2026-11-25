# 1.1.5 Validação da área de dados da mensagem

## Validações de Forma Aplicadas a GTVe

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **D01** | Verificar Schema XML da Área de Dados | Obrig. | 225 | Rej. |
| **D02** | Verificar a existência de qualquer namespace diverso do namespace padrão do projeto (http://www.portalfiscal.inf.br/cte) | Obrig. | 598 | Rej. |
| **D03** | Verificar a existência de caracteres de edição no início ou fim da msg. ou entre as tags | Obrig. | 599 | Rej. |
| **D04** | Verificar o uso de prefixo no namespace | Obrig. | 404 | Rej. |
| **D05** | Verificar se o XML utiliza codificação diferente de UTF-8 | Obrig. | 402 | Rej. |
| **D06** | Verificar se a versão do XML é suportada | Obrig. | 239 | Rej. |
