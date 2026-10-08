# 3.9 Validação da área de dados da mensagem

**Validações de Forma Aplicadas a área de dados**

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **D01** | Verificar Schema XML da Área de Dados | Obrig. | 215 | Rej. |
| **D02** | Verificar a existência de qualquer namespace diverso do namespace padrão do projeto (http://www.portalfiscal.inf.br/mdfe) | Obrig. | 598 | Rej. |
| **D03** | Verificar a existência de caracteres de edição no início ou fim da mensagem ou entre as tags | Obrig. | 599 | Rej. |
| **D04** | Verificar o uso de prefixo no namespace | Obrig. | 404 | Rej. |
| **D05** | Verificar se o XML utiliza codificação diferente de UTF-8 | Obrig. | 402 | Rej. |
