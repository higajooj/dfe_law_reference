<!-- p.11 -->
# 4.4. YB. Informações do Intermediador da Transação

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| YB01-10 | 55/65 | Se informado Indicador do Intermediador **IGUAL** a “1=Operação em site ou plataforma de terceiros (intermediadores/marketplace)” (indIntermed=1)<br>• Obrigatório o preenchimento das Informações do Intermediador da Transação (tag: infIntermed) | Obrig. | 438 | Rej. | Rejeição: Obrigatória as informações do intermediador da transação para operação por site de terceiros |
| YB01-20 | 55/65 | Se informado Indicador do Intermediador **DIFERENTE** de “1=Operação em site ou plataforma de terceiros (intermediadores/marketplace)” (indIntermed<>1)<br>• Não é permitido o preenchimento das Informações do Intermediador da Transação (tag: infIntermed) | Obrig. | 439 | Rej. | Rejeição: Informações do intermediador da transação para operação por site de terceiros preenchido indevidamente |
| YB02-10 | 55/65 | Se informada o CNPJ do intermediador da transação<br>• Verificar CNPJ com zeros, nulo ou DV inválido | Obrig. | 440 | Rej. | Rejeição: CNPJ do intermediador da transação inválido |
