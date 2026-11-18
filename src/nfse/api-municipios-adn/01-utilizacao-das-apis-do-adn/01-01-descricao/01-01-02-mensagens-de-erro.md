# 1.1.2. Mensagens de erro

Os erros e alertas são retornados nas propriedades Erros e Alertas do corpo da resposta, no formato Codigo + Descricao. Lista das mensagens específicas da distribuição para contribuintes:

| Código | HTTP | Descrição |
|---|---|---|
| E2210 | 400 | Certificado de transmissão inválido. |
| E2211 | 400 | Certificado de transmissão revogado. |
| E2212 | 400 | Certificado de transmissão - erro na cadeia de certificação. |
| E2213 | 400 | Certificado de transmissão expirado. |
| E2214 | 400 | Certificado de transmissão - erro de acesso à LCR. |
| E2220 | 404 | Nenhum documento localizado - não existem documentos fiscais para o contribuinte a partir do NSU informado. |
| E2230 | 404 | Nenhum documento localizado - não existe documento fiscal para o contribuinte com o NSU informado. |
| E2240 | 404 | Nenhum documento localizado - não existem documentos fiscais para a chave de acesso informada. |
| E2241 | 404 | Chave de acesso da NFS-e não referencia o contribuinte solicitante e por isso não pode ser compartilhada. |
| E2243 | 400 | O CNPJ informado na consulta deve ter o mesmo CNPJ base do contribuinte solicitante. |
| E2244 | 400 | Somente um dos campos cnpjConsulta ou cpfConsulta deve ser preenchido. |
| E2245 | 400 | Não há procuração da inscrição {0} para a inscrição {1}. |
| E2246 | 400 | O CNPJ informado na consulta é inválido (dígito verificador). |
| E2247 | 400 | O CPF informado na consulta é inválido (dígito verificador). |

<!-- p.05 -->

| Código | HTTP | Descrição |
|---|---|---|
| E999 | 400 | Falha não tratada. A descrição traz um identificador para acionamento do suporte. |
