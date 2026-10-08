<!-- p.10 -->
# 4.2. I. Produtos e Serviços

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I08-90 | 55 | CFOP é de operação interestadual (inicia por 2 ou 6) e UF emitente = UF destinatário e CNPJ/CPF emissor diferente do CNPJ/CPF destinatário (NT 2010/004)<br>**Exceção 1:** Se a tag UFCons (id:LA06) foi informada com UF diversa do emitente: CFOP iniciado com 2 ou 6 é válido. (NT 2010/010)<br>**Exceção 2:** Se [UF emitente = UF destinatário] e [a tag finNFe (id:B25) indicar que esta é uma nota de ajuste (=3)]: será aceito o CFOP 6206<br>**Exceção 3:** A regra de validação acima não se aplica se informada UF do local de entrega (tag: entrega/UF) diferente da UF do emitente (tag: emit/enderEmit/UF).<br>**Exceção 4:** A regra de validação não se aplica se informada UF do local de retirada (tag: retirada/UF) diferente da UF do destinatário (tag: enderDest/UF);<br>**Observação:** Regra de validação opcional, a critério da UF | Facul. | 523 | Rej. | Rejeição: CFOP não é de Operação Estadual e UF emitente igual à UF destinatário [nItem: 999] |
