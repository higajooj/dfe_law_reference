# 5.3 Tabela padronizada com os códigos e mensagens na consulta de NFC-e

A tabela relaciona todas as mensagens de validações utilizadas na consulta de NFC-e seja por digitação em tela ou via QR Code. Estas mensagens somente serão utilizadas na implementação da consulta pela SEFAZ.

<!-- p.37 -->

**Relação de mensagens de validações na consulta de NFC-e**

| Código | Mensagem | Exibir para o Consumidor |
|---|---|---|
| 100 | Hash QR Code inválido. | QR Code Inválido |
| 101 | CSC inválido para o contribuinte. | QR Code Inválido |
| 102 | CSC revogado. | QR Code Inválido |
| 103 | Identificador de CSC inexistente. | QR Code Inválido |
| 104 | Identificador de CSC inválido. | QR Code Inválido |
| 201 | Dígito verificador da Chave de Acesso da NFC-e inválido. | Problemas na Chave de Acesso da NFC-e |
| 202 | Chave de Acesso da NFC-e com menos de 44 caracteres. | Problemas na Chave de Acesso da NFC-e |
| 203 | Ano e mês da Chave de Acesso da NFC-e inconsistente com data de emissão. | Problemas na Chave de Acesso da NFC-e |
| 204 | Modelo constante da Chave de Acesso difere de 65 (NFC-e). | Problemas na Chave de Acesso da NFC-e |
| 205 | CNPJ do emitente constante da Chave de Acesso da NFC-e com dígito verificador inválido. | Problemas na Chave de Acesso da NFC-e |
| 206 | Chave de acesso da NFC-e não preenchida. | Problemas na Chave de Acesso da NFC-e |
| 211 | Versão do QR Code inválida. | Inconsistência de Informações no QR Code |
| 212 | Versão do QR Code não preenchida. | Inconsistência de Informações no QR Code |
| 213 | Identificação do ambiente difere de 1 ou 2. | Inconsistência de Informações no QR Code |
| 214 | Identificação do ambiente não preenchida. | Inconsistência de Informações no QR Code |
| | | |
| 217 | Dia da data de emissão informada no QR Code inválida. | Inconsistência de Informações no QR Code |
| 218 | Dia da data de emissão não preenchido. | Inconsistência de Informações |
| 219 | Dia da data de emissão inconsistente com dado informado na NFC-e. | Inconsistência de Informações |
| 220 | Valor total informado no QR Code em formato inválido. | Inconsistência de Informações no QR Code |
| 221 | Valor total informado no QR Code inconsistente com dado constante da NFC-e. | Inconsistência de Informações no QR Code |
| | | |
| 227 | DigestValue informado no QR Code inconsistente com dado constante da NFC-e. | Inconsistência de Informações no QR Code |
| | | |
| 229 | Nota Fiscal do Consumidor CANCELADA. | A NFC-e está CANCELADA |
| 230 | Hash do QR Code não preenchido no QR Code. | Inconsistência de Informações no QR Code <!-- p.38 --> |
| 231 | Valor total da NFC-e não preenchido no QR Code. | Inconsistência de Informações no QR Code |
| 233 | DigestValue não preenchido no QR Code. | Inconsistência de Informações no QR Code |
| 234 | O prazo de24h para o envio desta NFC-e já foi ultrapassado. | Regra de negócios da NFC-e |
| 235 | NFC-e foi emitida em contingência. Volte a consultar após 24h. | Regra de negócios da NFC-e |
| 236 | A NFC-e da chave de acesso não existe. | Regra de negócios da NFC-e |
| 237 | Código da imagem é inválido. | Erro na digitação dos dados |
| 238 | NFC-e emitida ainda não consta na nossa base de dados. Favor volte a consultar em outra hora. | Regra de negócios da NFC-e |
| 239 | A UF da chave de acesso está diferente do código da UF | Problemas na Chave de Acesso da NFC-e |
| 240 | NFC-e CANCELADA - Documento cancelado pelo emitente. | Documento Inválido - Sem Valor Fiscal |
| 241 | NFC-e DENEGADA - Emitente não autorizado pelo fisco. | Documento Inválido - Sem Valor Fiscal |
| 242 | Dia da data de emissão informada é inválido. | Inconsistência de Informações |
| 245 | Chave de Acesso da NFC-e inválida. | Problema na Chave de Acesso |
| 246 | A chave de acesso informada não é de uma NFC-e (modelo 65). Verifique o modelo do documento fiscal eletrônico (DF-e). | Problema na Chave de Acesso |
| 247 | A chave de acesso informada não se refere a uma NFC-e emitida por contribuinte da UF indicada. | Problema na Chave de Acesso |

*Tabela 6: Mensagens de validações de consulta da NFC-e*
