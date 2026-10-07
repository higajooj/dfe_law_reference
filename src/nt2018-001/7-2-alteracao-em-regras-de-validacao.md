<!-- p.20 -->
# 7.2 Alteração em Regras de Validação (item 4.5.7.2 do MOC)

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| J02e | 55/65 | Chave de Acesso inválida:<br>- Série = [0-909] e CNPJ zerado ou dígito inválido, ou<br>- Série = [910-969] e CPF zerado ou dígito inválido | Obrig. | 617 | Rej. | Rejeição: Chave de Acesso inválida (CNPJ/CPF zerado ou dígito inválido) |
| J03 | 55/65 | Acesso BD NFE (Chave: CNPJ/CPF Emitente, Modelo, Série, Nro):<br>- Se NF-e não existe, acessar BD Evento EPEC Chave: CNPJ/CPF Emitente, Modelo, Série, Nro)<br>- Verificar se EPEC não existe (NT 2014.001) | Obrig. | 217 | Rej. | Rejeição: NF-e não consta na base de dados da SEFAZ |
| J04 | 55/65 | - Verificar se campo “Código Numérico” informado na Chave de Acesso é diferente do existente no BD<br>**Observação**: Opcionalmente, concatenar na mensagem de erro a Chave de Acesso da NF-e existente no BD nas situações de:<br>- CNPJ base do certificado digital de transmissão igual ao CNPJ base do emitente ou do destinatário da NF-e (NT 2010/007);<br>- CNPJ base do certificado digital de transmissão igual ao CNPJ base do transmissor da NF-e (NT 2010/007);<br>- CPF do certificado digital de transmissão igual ao CPF do emitente da NF-e. | Obrig. | 562 | Rej. | Rejeição: Código Numérico informado na Chave de Acesso difere do Código Numérico da NF-e [chNFe:99999999999999999999999999999999999999999999] |
