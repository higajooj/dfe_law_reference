# 10.3. Tabela padronizada com os códigos e mensagens na consulta do CTe

A tabela a seguir relaciona todas as mensagens de validações utilizadas na consulta de CTe seja por digitação em tela ou via QR Code. Estas mensagens somente serão utilizadas na implementação da consulta pelo Portal Nacional do CTe.

**Relação de mensagens de validações na consulta de CTe**

| Código | Regra de Validação | Exibir na Consulta |
|---|---|---|
| 201 | Se a Chave de Acesso do CTe não preenchida ou com menos de 44 caracteres. | Problemas no preenchimento da Chave de Acesso do CTe |
| 202 | Se dígito verificador da Chave de Acesso do CTe inválido | Problemas na Chave de Acesso do CTe (dígito verificador inválido) |
| 203 | Se o modelo constante da Chave de Acesso difere de 57/67/64 (CTe) ou CNPJ/CPF do emitente constante na Chave de Acesso com dígito verificador inválido ou UF da chave de acesso diferente do código da UF da consulta. | Problemas na Chave de Acesso do CTe (modelo ou CNPJ ou UF inválido) |
| 204 | Se o parâmetro tpAmb (Identificação do ambiente) não preenchido ou difere de 1 ou 2 no QRCODE. | Inconsistência de Informações no QR Code (tipo ambiente) |
| 205 | Se a forma de emissão for 1 (normal) e o CTe da chave de acesso não encontrado na base de dados. | O CTe não consta na nossa base de dados |
| 206 | Se a forma de emissão for contingência (qualquer tipo de contingência) e o CTe não for encontrado na base de dados. | O CTe foi emitido em contingência e não consta na nossa base de dados. Volte a consultar após 24h. |
| 207 | Se CTe possuir evento de cancelamento. | <!-- p.88 -->O CTe foi Cancelado - Documento Inválido – Sem Valor Fiscal<br>Exibir a consulta |
| 208 | Se CTe possuir Substituição. | O CTe foi substituído<br>Exibir a consulta |
| 209 | Se CTe possuir Complemento de Valores | O CTe foi complementado<br>Exibir consulta |
