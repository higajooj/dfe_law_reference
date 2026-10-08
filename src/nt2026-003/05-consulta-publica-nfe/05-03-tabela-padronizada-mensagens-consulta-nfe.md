<!-- p.23 -->
# 5.3. Tabela padronizada com os códigos e mensagens na consulta de NF-e

A tabela relaciona todas as mensagens de validações utilizadas na consulta de NF-e seja por digitação em tela ou via QR Code. Estas mensagens somente serão utilizadas na implementação da consulta pela SEFAZ.

Tabela 3: Mensagens de validação de consulta da NF-e

| Código | Mensagem | Exibir para o Consumidor |
|---|---|---|
| 211 | Versão do QR Code inválida. | Inconsistência de Informações no QR Code |
| 212 | Versão do QR Code não preenchida. | Inconsistência de Informações no QR Code |
| 213 | Identificação do ambiente difere de 1 ou 2. | Inconsistência de Informações no QR Code |
| 214 | Identificação do ambiente não preenchida. | Inconsistência de Informações no QR Code |
| 217 | Dia da data de emissão informada no QR Code inválida. | Inconsistência de Informações no QR Code |
| 218 | Dia da data de emissão não preenchido. | Inconsistência de Informações |
| 219 | Dia da data de emissão inconsistente com dado informado na NF-e. | Inconsistência de Informações |
| 220 | Valor total informado no QR Code em formato inválido. | Inconsistência de Informações no QR Code |
| 221 | Valor total informado no QR Code inconsistente com dado constante da NF-e. | Inconsistência de Informações no QR Code |
| 227 | DigestValue informado no QR Code inconsistente com dado constante da NF-e. | Inconsistência de Informações no QR Code |
| 229 | Nota Fiscal CANCELADA. | A NF-e está CANCELADA |
| 230 | Hash do QR Code não preenchido no QR Code. | Inconsistência de Informações no QR Code |
| 231 | Valor total da NF-e não preenchido no QR Code. | Inconsistência de Informações no QR Code |
| 233 | DigestValue não preenchido no QR Code. | Inconsistência de Informações no QR Code |
| 234 | O prazo de 24h para o envio desta NF-e já foi ultrapassado. | Regra de negócios da NF-e |
| 235 | NF-e foi emitida em contingência. Volte a consultar após 24h. | Regra de negócios da NF-e |
| 236 | A NF-e da chave de acesso não existe. | Regra de negócios da NF-e |
| 237 | Código da imagem é inválido. | Erro na digitação dos dados |
| 238 | NF-e emitida ainda não consta na nossa base de dados. Favor voltar a consultar mais tarde. | Regra de negócios da NF-e |
| 239 | A UF da chave de acesso está diferente do código da UF | Problemas na Chave de Acesso da NF-e |
| 240 | NF-e CANCELADA - Documento cancelado pelo emitente. | Documento Inválido - Sem Valor Fiscal |
| 242 | Dia da data de emissão informada é inválido. | Inconsistência de Informações |
| 245 | Chave de Acesso da NF-e inválida. | Problema na Chave de Acesso |
| 246 | A chave de acesso informada não é de uma NF-e (modelo 55). Verifique o modelo do documento fiscal eletrônico (DF-e). | Problema na Chave de Acesso |
| 247 | A chave de acesso informada não se refere a uma NF-e emitida por contribuinte da UF indicada. | Problema na Chave de Acesso |
