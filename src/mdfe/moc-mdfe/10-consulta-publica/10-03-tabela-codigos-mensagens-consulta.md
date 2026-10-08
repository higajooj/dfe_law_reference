# 10.3 Tabela padronizada com os códigos e mensagens na consulta do MDFe

A tabela a seguir relaciona todas as mensagens de validações utilizadas na consulta de MDFe seja por digitação em tela ou via QR Code. Estas mensagens somente serão utilizadas na implementação da consulta pelo Portal Nacional do MDFe.

| Código | Regra de Validação | Exibir na Consulta |
|---|---|---|
| 201 | Se a Chave de Acesso do MDFe não preenchida ou com menos de 44 caracteres. | Problemas no preenchimento da Chave de Acesso do MDFe |
| 202 | Se dígito verificador da Chave de Acesso do MDFe inválido | Problemas na Chave de Acesso do MDFe (dígito verificador inválido) |
| 203 | Se o modelo constante da Chave de Acesso difere de 58 (MDFe) ou CNPJ / CPF do emitente constante na Chave de Acesso com dígito verificador inválido ou UF da chave de acesso diferente do código da UF da consulta. | Problemas na Chave de Acesso do MDFe (modelo ou CNPJ/CPF ou UF inválido) |
| 204 | Se o parâmetro tpAmb (Identificação do ambiente) não preenchido ou difere de 1 ou 2 no QRCODE. | Inconsistência de Informações no QR Code (tipo ambiente) |
| 205 | Se a forma de emissão for 1 (normal) e o MDFe da chave de acesso não encontrado na base de dados. | O MDFe não consta na nossa base de dados |

<!-- p.78 -->

| Código | Regra de Validação | Exibir na Consulta |
|---|---|---|
| 206 | Se a forma de emissão for 2 (contingência Off-line) e o MDFe não for encontrado na base de dados. | O MDFe foi emitido em contingência e não consta na nossa base de dados. Volte a consultar após 24h. |
| 207 | Se MDFe possuir evento de cancelamento. | O MDFe foi Cancelado - Documento Inválido – Sem Valor Fiscal. Exibir a consulta |
| 208 | Se MDFe possuir evento de encerramento. | O MDFe foi encerrado. Exibir a consulta |
